import React, { useState } from "react";
import LikeHOC from "./LikeHOC";

function LikeImage({ counter, incrementCount }) {
  return (
    <div>
      <button onClick={incrementCount}>Like Image {counter}</button>
    </div>
  );
}

export default LikeHOC(LikeImage);
