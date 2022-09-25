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
    console.log(movies ?? "cannot find movies");

    const [category, setCategory] = useState("films");
    const currentCategory = category === "films";
    const [showCardFeature, setShowCardFeature] = useState(false);
    const [activeItem, setActiveItem] = useState(false);
    const [showPlayer, setShowPlayer] = useState(false);

    return (
        <>
            <HeaderWrapper className="header-wrapper-browse">
                <NavBar className="navbar-browse">
                    <Logo />
                    <HeaderLink
                        className={
                            category === "films" ? "header-link-bold" : "header-link"
                        }
                        onClick={() => setCategory("films")}
                    >
                        Films
                    </HeaderLink>
                    <HeaderLink
                        className={
                            category === "genres" ? "header-link-bold" : "header-link"
                        }
                        onClick={() => setCategory("genres")}
                    >
                        Genres
                    </HeaderLink>
                </NavBar>
                <FeatureWrapper>
                    <FeatureTitle className="feature-title-browse">
                        Watch
                        { error && <div>{ error }</div> }
                        { isPending && <div>Loading...</div> }
                        { movies[0].data[0].title }
                        Now
                    </FeatureTitle>
                    <FeatureSubTitle className="feature-subtitle-browse">
                        { movies[0].data[0].plot }
                    </FeatureSubTitle>
                    <PlayButton onClick={() => setShowPlayer(true)}>Play</PlayButton>
                    {showPlayer ? (
                        <PlayerOverlay onClick={() => setShowPlayer(false)}>
                            <PlayerVideo src="" type="video/mp4" />
                        </PlayerOverlay>
                    ) : null}
                </FeatureWrapper>
            </HeaderWrapper>

            {/*<AllSlidesWrapper>*/}
            {/*    {currentCategory.map((slideItem) => (*/}
            {/*        <SlideWrapper key={`${category}-${slideItem.title.toLowerCase()}`}>*/}
            {/*            <SlideTitle>{slideItem.title}</SlideTitle>*/}
            {/*            <AllCardsWrapper>*/}
            {/*                {slideItem.data.map((cardItem) => (*/}
            {/*                    <CardWrapper key={cardItem.docId}>*/}
            {/*                        <CardImage*/}
            {/*                            onClick={() => {*/}
            {/*                                setShowCardFeature(true);*/}
            {/*                                setActiveItem(cardItem);*/}
            {/*                            }}*/}
            {/*                            src={`../images/${category}/${cardItem.genre}/${cardItem.slug}/small.jpg`}*/}
            {/*                        />*/}
            {/*                    </CardWrapper>*/}
            {/*                ))}*/}
            {/*            </AllCardsWrapper>*/}
            {/*            {showCardFeature &&*/}
            {/*            slideItem.title.toLowerCase() === activeItem.genre ? (*/}
            {/*                <CardFeatureWrapper*/}
            {/*                    style={{*/}
            {/*                        backgroundImage: `url(../images/${category}/${activeItem.genre}/${activeItem.slug}/large.jpg)`,*/}
            {/*                    }}*/}
            {/*                >*/}
            {/*                    <CardTitle>{activeItem.title}</CardTitle>*/}
            {/*                    <CardDescription>{activeItem.description}</CardDescription>*/}
            {/*                    <CardFeatureClose onClick={() => setShowCardFeature(false)} />*/}
            {/*                    <PlayButton onClick={() => setShowPlayer(true)}>*/}
            {/*                        Play*/}
            {/*                    </PlayButton>*/}
            {/*                    {showPlayer ? (*/}
            {/*                        <PlayerOverlay onClick={() => setShowPlayer(false)}>*/}
            {/*                            <PlayerVideo src="../videos/video.mp4" type="video/mp4" />*/}
            {/*                        </PlayerOverlay>*/}
            {/*                    ) : null}*/}
            {/*                </CardFeatureWrapper>*/}
            {/*            ) : null}*/}
            {/*        </SlideWrapper>*/}
            {/*    ))}*/}
            {/*</AllSlidesWrapper>*/}
            <FooterCompound />
        </>
    );
}

export default Home;
