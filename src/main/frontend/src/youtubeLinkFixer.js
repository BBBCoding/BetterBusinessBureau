function youtubeWatchLinkToEmbedLink(url) {
	console.log(url);
	if (url.includes("embed")) {
		return url;
	} else {
		let res = url.split("=");
		// console.log(res)
		let embeddedUrl = "https://www.youtube.com/embed/" + res[1];
		return `<iframe width="100%" src="${embeddedUrl}?mute=1&modestbranding=1&controls=0"></iframe>`;
	}
}
export default youtubeWatchLinkToEmbedLink;