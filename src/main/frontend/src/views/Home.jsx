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
import Curosel from "../components/Curosel/Curosel.jsx";
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
            <Curosel className="carousel">

            </Curosel>
            <FooterCompound />
        </>
    );
}

export default Home;
