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
import Search from "../components/Header/Search.jsx";

function Home() {
    const {data: films, isPending, error} = Fetch("http://localhost:8080/api/v1/movies");

    let movies = Movies;

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
                    <HeaderLink href="/edit" className= {"edit" ? "header-link" : "header-link-bold"}>
                        Edit Movie
                    </HeaderLink>
                    <HeaderLink href="/add" className= {"edit" ? "header-link" : "header-link-bold"}>
                        Add Movie
                    </HeaderLink>
                </NavBar>
                {/*<Search/>*/}
            </HeaderWrapper>
                <FeatureWrapper>
                    <PlayerOverlay>
                        <PlayerVideo src={ activeItem ? activeItem.media.trailer_path : movies[0].data[showCase]?.media.trailer_path ?? movies[0].data[0]?.media.trailer_path }>
                        </PlayerVideo>
                    </PlayerOverlay>
                    <PlayerWrapper>
                        <FeatureTitle className="feature-title-browse">
                            Watch&nbsp;
                            { error && <div>{ error }</div> }
                            { isPending && <div>Loading...</div> }
                            { activeItem ? activeItem.title : movies[0].data[showCase]?.title ?? movies[0].data[0]?.title }
                            &nbsp;Now
                        </FeatureTitle>
                        <FeatureSubTitle className="feature-subtitle-browse">
                            { activeItem ? activeItem.plot : movies[0].data[showCase]?.plot ?? movies[0].data[0]?.plot }
                        </FeatureSubTitle>
                    </PlayerWrapper>
                </FeatureWrapper>
            <AllSlidesWrapper>
                {movies?.map((slideItem, index) => (
                    <SlideWrapper key={`${ index ?? Math.random()}`}>
                        <SlideTitle>{ slideItem.title }</SlideTitle>
                        <AllCardsWrapper>
                            { !isPending && slideItem.data?.map((cardItem, index) => (
                                <CardWrapper key={`${ index ?? Math.random()}`}>
                                    <CardImage
                                        onClick={() => {
                                            setShowCardFeature(true);
                                            setActiveItem(cardItem);
                                        }}
                                        src={ cardItem.poster?.backdrop_path ?? "https://via.placeholder.com/450"}
                                    />
                                    <CardTitle>{ cardItem.title }</CardTitle>
                                </CardWrapper>
                            ))}
                        </AllCardsWrapper>
                        { !isPending && slideItem.data?.map((cardItem) => (
                            showCardFeature && cardItem?.title.toLowerCase() === activeItem.title ? (
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
                            ) : null))}
                    </SlideWrapper>
                ))}
            </AllSlidesWrapper>
            <FooterCompound />
        </>
    );
}

export default Home;
