import React, { useState } from "react";
import Fetch from "../custom-hooks/useFetch.jsx";
import HeaderWrapper from "../components/Header/HeaderWrapper.jsx";
import NavBar from "../components/Header/NavBar.jsx";
import Logo from "../components/Header/Logo.jsx";
import FeatureWrapper from "../components/Header/FeatureWrapper.jsx";
import FeatureTitle from "../components/Header/FeatureTitle.jsx";
import FeatureSubTitle from "../components/Header/FeatureSubTitle.jsx";
import HeaderLink from "../components/Header/HeaderLink.jsx";
import PlayerVideo from "../components/Movies/PlayerVideo.jsx";
import PlayerOverlay from "../components/Movies/PlayerOverlay.jsx";
import FooterCompound from "../compounds/FooterCompound.jsx";
import YoutubeLinkFixer from "../youtubeLinkFixer.js"
import Movies from "./movies.js";
import PlayerWrapper from "../components/Movies/PlayerWrapper.jsx";
import {Link} from "react-router-dom";
import Carousel from "../components/Carousel/Carousel.jsx";
import AllSlidesWrapper from "../components/Movies/AllSlidesWrapper.jsx";
import SlideWrapper from "../components/Movies/SlideWrapper.jsx";
import AllCardsWrapper from "../components/Movies/AllCardsWrapper.jsx";
import CardWrapper from "../components/Movies/CardWrapper.jsx";
import CardImage from "../components/Movies/CardImage.jsx";
import CardFeatureWrapper from "../components/Movies/CardFeatureWrapper.jsx";
import CardTitle from "../components/Movies/CardTitle.jsx";
import CardDescription from "../components/Movies/CardDescription.jsx";
import CardFeatureClose from "../components/Movies/CardFeatureClose.jsx";
import SlideTitle from "../components/Movies/SlideTitle.jsx";
function Home() {
    const {data: films, isPending, error} = Fetch("http://localhost:8080/api/v1/movies");
    // console.log(films ?? "cannot find films");
    let movies = Movies;

    films?.forEach(film => {
        if (film.genreID?.length === 0) {
            movies[17].data.push(film);
        }
        film.genreID?.forEach(genre => {
            movies.forEach(movie => {
                if (genre.genreName === movie.title.toLowerCase()) {
                    movie.data.push(film);
                }
            });
        })
    });
    movies.forEach(movie => {
        movie.data.forEach(film => {
            film.media.trailer_path = YoutubeLinkFixer(film.media.trailer_path);
        })
    });

    const [category, setCategory] = useState("movies"); // baseline category
    const [showCardFeature, setShowCardFeature] = useState(false); // not sure
    const [activeItem, setActiveItem] = useState(false); // set when active card is selected
    const [showPlayer, setShowPlayer] = useState(false); // eventually checks if there is a trailer and plays it if available

    return (
        <>
            <HeaderWrapper className="header-wrapper-browse">
                <NavBar className="navbar-browse">
                    <Logo />
                    <HeaderLink  className= {"home" ? "header-link-bold" : "header-link"}>
                        <Link to="/">
                        Home
                        </Link>
                    </HeaderLink>
                    <HeaderLink className= {"genres" ? "header-link" : "header-link-bold"}>
                        <Link to="/genres">
                        Genres
                        </Link>
                    </HeaderLink>
                </NavBar>
                <FeatureWrapper>
                    {/*Dynamic id needed*/}
                    <PlayerOverlay>
                        <PlayerVideo src={ movies[0].data[0]?.media.trailer_path }>
                        </PlayerVideo>
                    </PlayerOverlay>
                    <PlayerWrapper>
                        <FeatureTitle className="feature-title-browse">
                            Watch&nbsp;
                            { error && <div>{ error }</div> }
                            { isPending && <div>Loading...</div> }
                            { movies[0].data[0]?.title }
                            &nbsp;Now
                        </FeatureTitle>
                        <FeatureSubTitle className="feature-subtitle-browse">
                            { movies[0].data[0]?.plot }
                        </FeatureSubTitle>
                    </PlayerWrapper>
                </FeatureWrapper>
            </HeaderWrapper>
            <AllSlidesWrapper>
              {films?.map((slideItem) => ( // making a new array to have every genre

            	  <SlideWrapper key={`${slideItem.data?.title}-${slideItem.data?.id}`}>
            		  <SlideTitle>{ slideItem.title }</SlideTitle> // title of genre
            		  <AllCardsWrapper>
            			  {slideItem.data?.map((cardItem) => (
                              <CardWrapper key={`${slideItem.data?.title}-${cardItem.title}`}>
            					  <CardImage
            						  onClick={() => {
            							  setShowCardFeature(true);
            							  setActiveItem(cardItem); // sets active item to the movie clicked
            						  }}
            						  src={ cardItem.poster?.poster_path !== "" ? cardItem.poster.poster_path : ""} // image of movie, set to equivalent of movies.data[i].media.poster_path
            					  />
            				  </CardWrapper>
            			  ))}
            		  </AllCardsWrapper>
            		  {showCardFeature &&
            		  slideItem?.data.title.toLowerCase() === activeItem.title ? ( // if the active item is in the current genre
            			  <CardFeatureWrapper
            				  style={{backgroundImage: activeItem.poster.backdrop_path }}// image of movie, set to equivalent of movies.data[i].media.backdrop_path
            			  >
            				  <CardTitle>{ activeItem.title }</CardTitle> // title of movie
            				  <CardDescription>{ activeItem.plot }</CardDescription> // plot of movie
            				  <CardFeatureClose onClick={() => setShowCardFeature(false)} /> // close button
            				  {showPlayer ? (
            					  <PlayerOverlay onClick={() => setShowPlayer(false)}>
            						  <PlayerVideo src={ activeItem.data.media.trailer_path } />
            					  </PlayerOverlay>
            				  ) : null} // if showPlayer is true, show the video player
            			  </CardFeatureWrapper>
            		  ) : null} // if the active item is not in the current genre, do not show the card feature
            	  </SlideWrapper>
              ))}
            </AllSlidesWrapper>
            <FooterCompound />
        </>
    );
}

export default Home;
