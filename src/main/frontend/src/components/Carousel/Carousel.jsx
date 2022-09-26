import "./CarouselStyles.css";
function Carousel({ children, ...restProps }) {
    return <div {...restProps}>{children}</div>;
}

export default Carousel;
