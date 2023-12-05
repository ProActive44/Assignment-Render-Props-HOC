

function LikePostRenderProps({ count, handleCount }) {

  return (
    <div>
      <button onClick={handleCount}>Like Post {count}</button>
    </div>
  );
}

export default LikePostRenderProps
