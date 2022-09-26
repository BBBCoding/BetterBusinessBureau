import "./MoviesStyles.css";

function PlayerWrapper({ children, ...restProps }) {
	return <div className="player-wrapper-home" {...restProps}>{children}</div>;
}

export default PlayerWrapper;
