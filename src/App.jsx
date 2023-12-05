import "./App.css";
import LikeImageRenderProps from "./componentRenderProps/LikeImageRenderProps";
import LikePostRenderProps from "./componentRenderProps/LikePostRenderProps";
import LikeRenderPropWrapper from "./componentRenderProps/LikeRenderPropWrapper";
import LikeImage from "./componentsHOC/LikeImage";
import LikePost from "./componentsHOC/LikePost";

function App() {
  return (
    <div>
      <h3>Some Blog</h3>
      <div className="buttons">
        <h1>Higher Order Components</h1>
        <LikePost />
        <LikeImage />

        <h1>Render Props Patterns</h1>
        <LikeRenderPropWrapper
          render={(count, handleCount) => {
            return (
              <LikeImageRenderProps count={count} handleCount={handleCount} />
            );
          }}
        />
        <LikeRenderPropWrapper
          render={(count, handleCount) => {
            return (
              <LikePostRenderProps count={count} handleCount={handleCount} />
            );
          }}
        />
      </div>
    </div>
  );
}

export default App;
