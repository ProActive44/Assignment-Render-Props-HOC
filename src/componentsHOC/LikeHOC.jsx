import React, { useState } from "react";

export default function LikeHOC(WrappedComponent) {
  let newComp = (props) => {
    const [counter, setCounter] = useState(0);

    const incrementCount = () => {
      setCounter(counter + 1);
    };
    return (
      <WrappedComponent
        {...props}
        counter={counter}
        incrementCount={incrementCount}
      />
    );
  };

  return newComp;
}
