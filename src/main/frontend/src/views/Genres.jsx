import NavBar from "../components/Header/NavBar.jsx";
import Logo from "../components/Header/Logo.jsx";
import HeaderLink from "../components/Header/HeaderLink.jsx";
import HeaderWrapper from "../components/Header/HeaderWrapper.jsx";
import React, {useState} from "react";
import FooterCompound from "../compounds/FooterCompound.jsx";

function Genres() {
	const [category, setCategory] = useState("movies");
	const [showCardFeature, setShowCardFeature] = useState(false);
	const [activeItem, setActiveItem] = useState(false);
	const [showPlayer, setShowPlayer] = useState(false);

  return (
  <>
	  <HeaderWrapper className="header-wrapper-browse">
		  <NavBar className="navbar-browse">
			  <Logo />
			  <HeaderLink  href="/"  className= {"home" ? "header-link-bold" : "header-link"}>
				  Home
			  </HeaderLink>
			  <HeaderLink  href="/genres" className= {"genres" ? "header-link" : "header-link-bold"}>
				  Genres
			  </HeaderLink>
			  <HeaderLink  href="/edit" className= {"genres" ? "header-link" : "header-link-bold"}>
				  Edit Movie
			  </HeaderLink>
		  </NavBar>
	  </HeaderWrapper>
	  <FooterCompound />
  </>
  );
}

export default Genres;