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

function Home() {

    const {data: films, isPending, error} = Fetch("http://localhost:8080/api/v1/movies");
    console.log(films ?? "cant't find films");
    if (!isPending) {
        let movies = [
            {
                title: "Action",
                data: films?.filter((item) => item.genreID[0]?.genreName === "action")
            },
            {
                title: "Adventure",
                data: films?.filter((item) => item.genreID.genreName === "adventure"),
            },
            {
                title: "Animated",
                data: films?.filter((item) => item.genreID.genreName === "animated"),
            },
            {
                title: "Comedy",
                data: films?.filter((item) => item.genreID.genreName === "comedy"),
            },
            {
                title: "Crime",
                data: films?.filter((item) => item.genreID.genreName === "crime"),
            }
            // ,
            // {
            //     title: "Documentary",
            //     data: films.filter((item) => item.genreID.genreName === "documentary")
            // },
            // {
            //     title: "Drama",
            //     data: films.filter((item) => item.genreID.genreName === "drama"),
            // },
            // {
            //     title: "Family",
            //     data: films.filter((item) => item.genreID.genreName === "family"),
            // },
            // {
            //     title: "Fantasy",
            //     data: films.filter((item) => item.genreID.genreName === "fantasy"),
            // },
            // {
            //     title: "History",
            //     data: films.filter((item) => item.genreID.genreName === "history"),
            // },
            // {
            //     title: "Horror",
            //     data: films.filter((item) => item.genreID.genreName === "horror")
            // },
            // {
            //     title: "Music",
            //     data: films.filter((item) => item.genreID.genreName === "music"),
            // },
            // {
            //     title: "Mystery",
            //     data: films.filter((item) => item.genreID.genreName === "mystery"),
            // },
            // {
            //     title: "Sci-Fi",
            //     data: films.filter((item) => item.genreID.genreName === "sci fi"),
            // },
            // {
            //     title: "Thriller",
            //     data: films.filter((item) => item.genreID.genreName === "thriller"),
            // },
            // {
            //     title: "TV Movie",
            //     data: films.filter((item) => item.genreID.genreName === "TV movie")
            // },
            // {
            //     title: "War",
            //     data: films.filter((item) => item.genreID.genreName === "war"),
            // },
            // {
            //     title: "Western",
            //     data: films.filter((item) => item.genreID.genreName === "western"),
            // }
        ];
        console.log(movies ?? "Loading...");
    }


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
                        Watch Joker Now
                    </FeatureTitle>
                    <FeatureSubTitle className="feature-subtitle-browse">
                        Forever alone in a crowd, failed comedian Arthur Fleck seeks
                        connection as he walks the streets of Gotham City. Arthur wears two
                        masks, the one he paints for his day job as a clown, and the guise
                        he projects in a futile attempt to feel like he is part of the world
                        around him.
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
