import "./HeaderStyles.css";

function Logo({ children, ...restProps }) {
  return (
    <div>
      <a href="/" {...restProps}>
        {children}
        <img className="logo" href="/" src="../../../public/Xilften%20Logo.svg" alt="Xilften logo" />
      </a>
    </div>
  );
}

export default Logo;
