import React, { useState } from "react";
import LikeHOC from "./LikeHOC";

function LikePost({ counter, incrementCount }) {
  return (
    <div>
      <button onClick={incrementCount}>Like Post {counter}</button>
    </div>
  );
}

export default LikeHOC(LikePost);
