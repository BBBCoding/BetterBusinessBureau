import { useState } from "react";
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
    console.log(films ?? "cannot find films");
    let movies = Movies;
    let count = 0;
    if (movies[0].data.length === 0) {
        films?.forEach(film => {
            if (film.genreID?.length === 0) {
                movies[18].data.push(film);
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
    }
    function getMoviePosterByGenre() {

        let genre = ["action", "adventure", "animated", "comedy", "crime", "documentary", "drama", "family", "fantasy", "history", "horror", "music", "mystery", "sci-fi", "tv movie", "thriller", "war", "western", "null"];
        for (let i = 0; i < genre.length; i++) {
            for (let j = 0; j < movies.length; j++) {
                if (genre[i] === movies[j].title.toLowerCase()) {
                   return movies[j].data;
                }
            }
        }
    }
    function getBackdropPath(data) {
        let backdropPath = [];
        data?.forEach(film => {
            if (film.poster === null) {
                backdropPath.push("https://via.placeholder.com/450")
            } else {
                backdropPath.push(film.poster.backdrop_path);
            }
        });
        return backdropPath;
    }
    console.log(movies);
    const [showCardFeature, setShowCardFeature] = useState(false); // not sure
    const [activeItem, setActiveItem] = useState(false); // set when active card is selected
    const [showPlayer, setShowPlayer] = useState(false); // eventually checks if there is a trailer and plays it if available
    const showCase = (Math.round(Math.random() * films?.length));
    return (
        <>
            <HeaderWrapper className="header-wrapper-browse">
                <NavBar className="navbar-browse">
                    <Logo />
                    <HeaderLink  href="/" className= {"home" ? "header-link-bold" : "header-link"}>
                            Home
                    </HeaderLink>
                    <HeaderLink href="/genres" className= {"genres" ? "header-link" : "header-link-bold"}>
                            Genres
                    </HeaderLink>
                </NavBar>
                <FeatureWrapper>
                    <PlayerOverlay>
                        <PlayerVideo src={ movies[0].data[showCase]?.media.trailer_path ?? movies[0].data[0]?.media.trailer_path }>
                        </PlayerVideo>
                    </PlayerOverlay>
                    <PlayerWrapper>
                        <FeatureTitle className="feature-title-browse">
                            Watch&nbsp;
                            { error && <div>{ error }</div> }
                            { isPending && <div>Loading...</div> }
                            { movies[0].data[showCase]?.title ?? movies[0].data[0]?.title }
                            &nbsp;Now
                        </FeatureTitle>
                        <FeatureSubTitle className="feature-subtitle-browse">
                            { movies[0].data[showCase]?.plot ?? movies[0].data[0]?.plot }
                        </FeatureSubTitle>
                    </PlayerWrapper>
                </FeatureWrapper>
            </HeaderWrapper>
            <AllSlidesWrapper>
                {movies?.map((slideItem) => (
                    <SlideWrapper key={`${ slideItem.title ?? Math.random()}`}>
                        <SlideTitle>{ slideItem.title }</SlideTitle>
                        <AllCardsWrapper>
                            { !isPending && movies?.map((cardItem) => (
                                <CardWrapper key={`${ cardItem.title ?? Math.random()}-${cardItem.data.id ?? Math.random()}`}>
                                    <CardImage
                                        onClick={() => {
                                            setShowCardFeature(true);
                                            setActiveItem(cardItem);
                                        }}
                                        src={ cardItem.data[0]?.poster?.backdrop_path ?? "https://via.placeholder.com/450"}
                                    />
                                </CardWrapper>
                            ))}
                        </AllCardsWrapper>
                        {showCardFeature && slideItem?.title.toLowerCase() === activeItem.title ? (
                            <CardFeatureWrapper
                                style={{ backgroundImage: activeItem.poster.backdrop_path }}
                            >
                                <CardTitle>{ activeItem.title }</CardTitle>
                                <CardDescription>{ activeItem.plot }</CardDescription>
                                <CardFeatureClose onClick={() => setShowCardFeature(false)} />
                                {showPlayer ? (
                                    <PlayerOverlay onClick={() => setShowPlayer(false)}>
                                        <PlayerVideo src={ activeItem.media.trailer_path } />
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
