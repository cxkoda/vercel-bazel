import * as React from "react";
import * as ReactDOM from "react-dom";
import * as styles from "./styles.css";

function Hello() {
  const [isActive, setIsActive] = React.useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  console.log("Hello");

  return (
    <div>
      <div
        style={{
          backgroundColor: isActive ? "green" : "black",
        }}
        onClick={handleClick}
      >
        <h1 className={styles.h1} onClick={handleClick}>
          Hello, world! asdf
        </h1>
      </div>
    </div>
  );
}

ReactDOM.render(
  <>
    <Hello />
  </>,
  document.getElementById("root")
);
