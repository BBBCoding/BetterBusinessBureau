import React, { useState } from "react";
import Fetch from "../custom-hooks/useFetch.jsx";
import HeaderWrapper from "../components/Header/HeaderWrapper.jsx";
import NavBar from "../components/Header/NavBar.jsx";
import Logo from "../components/Header/Logo.jsx";
import FeatureWrapper from "../components/Header/FeatureWrapper.jsx";
import FeatureTitle from "../components/Header/FeatureTitle.jsx";
import FeatureSubTitle from "../components/Header/FeatureSubTitle.jsx";
import PlayButton from "../components/Header/PlayButton.jsx";
import HeaderLink from "../components/Header/HeaderLink.jsx";
import AllSlidesWrapper from "../components/Movies/AllSlidesWrapper.jsx";
import SlideWrapper from "../components/Movies/SlideWrapper.jsx";
import SlideTitle from "../components/Movies/SlideTitle.jsx";
import AllCardsWrapper from "../components/Movies/AllCardsWrapper.jsx";
import CardWrapper from "../components/Movies/CardWrapper.jsx";
import CardImage from "../components/Movies/CardImage.jsx";
import CardTitle from "../components/Movies/CardTitle.jsx";
import CardDescription from "../components/Movies/CardDescription.jsx";
import CardFeatureWrapper from "../components/Movies/CardFeatureWrapper.jsx";
import CardFeatureClose from "../components/Movies/CardFeatureClose.jsx";
import PlayerVideo from "../components/Movies/PlayerVideo.jsx";
import PlayerOverlay from "../components/Movies/PlayerOverlay.jsx";
import FooterCompound from "../compounds/FooterCompound.jsx";
import YoutubeLinkFixer from "../youtubeLinkFixer.js"
import Movies from "./movies.js";
import PlayerWrapper from "../components/Movies/PlayerWrapper.jsx";
function Home() {

    const {data: films, isPending, error} = Fetch("http://localhost:8080/api/v1/movies");
    // console.log(films ?? "cannot find films");
    let movies = Movies;

    films?.forEach(film => {
        if (film.genreID.length === 0) {
            movies[17].data.push(film);
        }
        film.genreID.forEach(genre => {
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
    const currentCategory = category === movies.forEach(movie => {movie.title}) ? category : movies[0].title; // check if current category is movies or sets category to Action
    const [showCardFeature, setShowCardFeature] = useState(false); // not sure
    const [activeItem, setActiveItem] = useState(false); // set when active card is selected
    const [showPlayer, setShowPlayer] = useState(false); // eventually checks if there is a trailer and plays it if available

    return (
        <>
            <HeaderWrapper className="header-wrapper-browse">
                <NavBar className="navbar-browse">
                    <Logo />
                    <HeaderLink
                        className={
                            category === "films" ? "header-link-bold" : "header-link"
                        }
                        onClick={() => setCategory("films")} // still need to add bom redirect
                    >
                        Films
                    </HeaderLink>
                    <HeaderLink
                        className={
                            category === "genres" ? "header-link-bold" : "header-link"
                        }
                        onClick={() => setCategory("genres")} // still need to add bom redirect
                    >
                        Genres
                    </HeaderLink>
                </NavBar>
                <FeatureWrapper> // I think this part is done
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
                {currentCategory.map((slideItem) => ( // making a new array to have every genre
                    <SlideWrapper key={`${category}-${slideItem.title.toLowerCase()}`}>
                        <SlideTitle>{slideItem.title}</SlideTitle> // title of genre
                        <AllCardsWrapper>
                            {slideItem.data.map((cardItem) => (
                                <CardWrapper key={cardItem.docId}>
                                    <CardImage
                                        onClick={() => {
                                            setShowCardFeature(true);
                                            setActiveItem(cardItem);
                                        }}
                                        src={`../images/${category}/${cardItem.genre}/${cardItem.slug}/small.jpg`}
                                    />
                                </CardWrapper>
                            ))}
                        </AllCardsWrapper>
                        {showCardFeature &&
                        slideItem.title.toLowerCase() === activeItem.genre ? (
                            <CardFeatureWrapper
                                style={{
                                    backgroundImage: `url(../images/${category}/${activeItem.genre}/${activeItem.slug}/large.jpg)`,
                                }}
                            >
                                <CardTitle>{activeItem.title}</CardTitle>
                                <CardDescription>{activeItem.description}</CardDescription>
                                <CardFeatureClose onClick={() => setShowCardFeature(false)} />
                                <PlayButton onClick={() => setShowPlayer(true)}>
                                    Play
                                </PlayButton>
                                {showPlayer ? (
                                    <PlayerOverlay onClick={() => setShowPlayer(false)}>
                                        <PlayerVideo src="../videos/video.mp4" type="video/mp4" />
                                    </PlayerOverlay>
                                ) : null}
                            </CardFeatureWrapper>
                        ) : null}
                    </SlideWrapper>
                ))}
            </AllSlidesWrapper>

            <FooterCompound />
        </>
    );
}

export default Home;
