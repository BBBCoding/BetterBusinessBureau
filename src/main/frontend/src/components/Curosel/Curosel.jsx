import "./CuroselStyles.css";
function Curosel({ children, ...restProps }) {
    return <div {...restProps}>{children}</div>;
}

export default Curosel;
