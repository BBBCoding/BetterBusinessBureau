import "./HeaderStyles.css";

function HeaderWrapper({ children, ...restProps }) {
  return <header {...restProps}>{children}</header>;
}

export default HeaderWrapper;
