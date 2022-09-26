import "./MoviesStyles.css";

function PlayerVideo({ children, ...restProps }) {
  // console.log(restProps)
  return (
        <iframe className="frame" src={restProps.src} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
  );
}

export default PlayerVideo;