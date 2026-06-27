import "./Button.css";
function Button({ children, variant, size }) {
  const classes =
    `btn btn--${variant} ${size === "small" ? "btn--small" : ""}`.trim();
  return <button className={classes}>{children}</button>;
}

export default Button;
