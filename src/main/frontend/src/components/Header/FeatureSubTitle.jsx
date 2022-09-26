import "./FeatureStyles.css";

function FeatureSubTitle({ children, ...restProps }) {
  return (
    <h2 className="feature-subtitle-home" {...restProps}>
      {children}
    </h2>
  );
}

export default FeatureSubTitle;
