import React, { useState } from "react";
import Fetch from "../custom-hooks/fetch.jsx";
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


function Home() {

// let { films } = Fetch("films");
// films = [
//     { title: "Drama", data: films.filter((item) => item.genre === "drama") },
//     {
//         title: "Thriller",
//         data: films.filter((item) => item.genre === "thriller"),
//     },
//     {
//         title: "Children",
//         data: films.filter((item) => item.genre === "children"),
//     },
//     {
//         title: "Suspense",
//         data: films.filter((item) => item.genre === "suspense"),
//     },
//     {
//         title: "Romance",
//         data: films.filter((item) => item.genre === "romance"),
//     },
// ];

const [category, setCategory] = useState("films");
const currentCategory = category === "films" ? films : series;
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
                        <PlayerVideo src="./videos/video.mp4" type="video/mp4" />
                    </PlayerOverlay>
                ) : null}
            </FeatureWrapper>
        </HeaderWrapper>

        <AllSlidesWrapper>
            {currentCategory.map((slideItem) => (
                <SlideWrapper key={`${category}-${slideItem.title.toLowerCase()}`}>
                    <SlideTitle>{slideItem.title}</SlideTitle>
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
