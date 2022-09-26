import "./FeatureStyles.css";

function FeatureTitle({ children, ...restProps }) {
  return <h1 className="feature-title-home" {...restProps}>{children}</h1>;
}

export default FeatureTitle;
