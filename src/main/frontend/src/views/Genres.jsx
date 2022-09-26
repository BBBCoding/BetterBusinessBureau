import NavBar from "../components/Header/NavBar.jsx";
import Logo from "../components/Header/Logo.jsx";
import HeaderLink from "../components/Header/HeaderLink.jsx";
import HeaderWrapper from "../components/Header/HeaderWrapper.jsx";
import React, {useState} from "react";
import {Link} from "react-router-dom";

function Genres() {
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
			  <HeaderLink  className= { category === "films" ? "header-link-bold" : "header-link"} onClick={() => setCategory("films")} >
				  <Link to="/">
					  Films
				  </Link>
			  </HeaderLink>
			  <HeaderLink className= { category === "genres" ? "header-link-bold" : "header-link"} onClick={() => setCategory("genres")} >
				  <Link to="/genres">
					  Genres
				  </Link>
			  </HeaderLink>
		  </NavBar>
	  </HeaderWrapper>
  </>
  );
}

export default Genres;