import NavBar from "../components/Header/NavBar.jsx";
import Logo from "../components/Header/Logo.jsx";
import HeaderLink from "../components/Header/HeaderLink.jsx";
import HeaderWrapper from "../components/Header/HeaderWrapper.jsx";
import React, {useState} from "react";
import {Link} from "react-router-dom";
import AllSlidesWrapper from "../components/Movies/AllSlidesWrapper.jsx";
import SlideWrapper from "../components/Movies/SlideWrapper.jsx";
import SlideTitle from "../components/Movies/SlideTitle.jsx";
import AllCardsWrapper from "../components/Movies/AllCardsWrapper.jsx";
import CardWrapper from "../components/Movies/CardWrapper.jsx";
import CardImage from "../components/Movies/CardImage.jsx";
import CardFeatureWrapper from "../components/Movies/CardFeatureWrapper.jsx";
import CardTitle from "../components/Movies/CardTitle.jsx";
import CardDescription from "../components/Movies/CardDescription.jsx";
import CardFeatureClose from "../components/Movies/CardFeatureClose.jsx";
import PlayerOverlay from "../components/Movies/PlayerOverlay.jsx";
import PlayerVideo from "../components/Movies/PlayerVideo.jsx";
import FooterCompound from "../compounds/FooterCompound.jsx";

function Genres() {
	const [category, setCategory] = useState("movies"); // baseline category
	// if(category == "")
	// const currentCategory = category === movies.forEach(movie => {movie.title}) ? category : movies[0].title; // check if current category is movies or sets category to Action
	const [showCardFeature, setShowCardFeature] = useState(false);
	const [activeItem, setActiveItem] = useState(false);
	const [showPlayer, setShowPlayer] = useState(false);

  return (
  <>
	  <HeaderWrapper className="header-wrapper-browse">
		  <NavBar className="navbar-browse">
			  <Logo />
			  <HeaderLink  href="/" className= { category === "home" ? "header-link-bold" : "header-link"} onClick={() => setCategory("home")} >
					  Home
			  </HeaderLink>
			  <HeaderLink href="/genres" className= { category === "genres" ? "header-link" : "header-link-bold"} onClick={() => setCategory("genres")} >
					  Genres
			  </HeaderLink>
		  </NavBar>
	  </HeaderWrapper>
	  {/*<AllSlidesWrapper>*/}
		{/*  {currentCategory.map((slideItem) => ( // making a new array to have every genre*/}
		{/*	  <SlideWrapper key={`${category}-${slideItem.title.toLowerCase()}`}>*/}
		{/*		  <SlideTitle>{slideItem.title}</SlideTitle> // title of genre*/}
		{/*		  <AllCardsWrapper>*/}
		{/*			  {slideItem.data.map((cardItem) => (*/}
		{/*				  <CardWrapper key={cardItem.docId}> // card for each movie*/}
		{/*					  <CardImage*/}
		{/*						  onClick={() => {*/}
		{/*							  setShowCardFeature(true);*/}
		{/*							  setActiveItem(cardItem); // sets active item to the movie clicked*/}
		{/*						  }}*/}
		{/*						  src={`../images/${category}/${cardItem.genre}/${cardItem.slug}/small.jpg`} // image of movie, set to equivalent of movies.data[i].media.poster_path*/}
		{/*					  />*/}
		{/*				  </CardWrapper>*/}
		{/*			  ))}*/}
		{/*		  </AllCardsWrapper>*/}
		{/*		  {showCardFeature &&*/}
		{/*		  slideItem.title.toLowerCase() === activeItem.genre ? ( // if the active item is in the current genre*/}
		{/*			  <CardFeatureWrapper*/}
		{/*				  style={{*/}
		{/*					  backgroundImage: `url(../images/${category}/${activeItem.genre}/${activeItem.slug}/large.jpg)`, // image of movie, set to equivalent of movies.data[i].media.backdrop_path*/}
		{/*				  }}*/}
		{/*			  >*/}
		{/*				  <CardTitle>{activeItem.title}</CardTitle> // title of movie*/}
		{/*				  <CardDescription>{activeItem.description}</CardDescription> // plot of movie*/}
		{/*				  <CardFeatureClose onClick={() => setShowCardFeature(false)} /> // close button*/}
		{/*				  {showPlayer ? (*/}
		{/*					  <PlayerOverlay onClick={() => setShowPlayer(false)}>*/}
		{/*						  <PlayerVideo src="../videos/video.mp4" type="video/mp4" />*/}
		{/*					  </PlayerOverlay>*/}
		{/*				  ) : null} // if showPlayer is true, show the video player*/}
		{/*			  </CardFeatureWrapper>*/}
		{/*		  ) : null} // if the active item is not in the current genre, do not show the card feature*/}
		{/*	  </SlideWrapper>*/}
		{/*  ))}*/}
	  {/*</AllSlidesWrapper>*/}
	  <FooterCompound />
  </>
  );
}

export default Genres;