import React, { useState } from "react";

export default function LikeRenderPropWrapper(props) {
  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount(count + 1);
  };
  return props.render(count, handleCount)
}
