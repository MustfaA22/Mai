import classes from "./Button.module.css";

function Button({ buttonText }) {
  return (
    <button className={classes.registerNowBtn}>
        <span className={classes.shadow}></span>
        <span className={classes.edge}></span>
        <span className={`${classes.front} ${classes.text}`}> {buttonText} </span>
    </button>
  );
}

export default Button;