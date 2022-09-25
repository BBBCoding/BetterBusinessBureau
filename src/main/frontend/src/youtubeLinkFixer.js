function youtubeWatchLinkToEmbedLink(url) {
	let res = url.split("=");
	let embeddedUrl = "https://www.youtube.com/embed/"+res[1];
	return `<iframe width="560" height="315" src="${embeddedUrl}?mute=1&modestbranding=1&controls=0"></iframe>`;
}

export default youtubeWatchLinkToEmbedLink;