function youtubeWatchLinkToEmbedLink(url) {

	if (url.includes("embed")) {
		return url;
	} else {
		let res = url.split("=");
		return "https://www.youtube.com/embed/" + res[1] + "?rel=0&autoplay=1&controls=0&showinfo=0&wmode=transparent";
	}
}
export default youtubeWatchLinkToEmbedLink;