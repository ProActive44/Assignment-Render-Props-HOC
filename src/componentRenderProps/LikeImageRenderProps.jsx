function LikeImageRenderProps({ count, handleCount }) {
  return (
    <div>
      <button onClick={handleCount}>Like Image {count}</button>
    </div>
  );
}

export default LikeImageRenderProps;
