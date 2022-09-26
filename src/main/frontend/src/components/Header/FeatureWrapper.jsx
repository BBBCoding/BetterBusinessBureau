import "./FeatureStyles.css";

function FeatureWrapper({ children, ...restProps }) {
  return <div className="feature-wrapper-home" {...restProps}>{children}</div>;
}

export default FeatureWrapper;
