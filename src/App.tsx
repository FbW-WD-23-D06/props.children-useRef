import "./App.css";
import Post from "./components/Post";

// Utilizing the children prop becomes valuable when you intend to employ the same component that can render different elements.
// Moreover, this prop allows you to use another component as a child, offering flexibility and versatility in component composition.

function App() {
  return (
    <>
      {/* use the Post component without props.children */}
      <Post
        title="Post 1"
        text="93248328432984 dsfdsjfdkjf dfjkdsjflkdsfj sdlkjfldsfldsfkjdsf sdfdskjfdsjflsdf lksjdflkdsjflkjds"
      />
      {/* use the Post component with props.children */}
      <Post
        title="Post 2"
        text="93248328432984 dsfdsjfdkjf dfjkdsjflkdsfj sdlkjfldsfldsfkjdsf sdfdskjfdsjflsdf lksjdflkdsjflkjds"
      >
        {/* child of Post */}
        <p>Some element 1</p>
        {/* child of Post */}
        <h3>Some element 2</h3>
      </Post>
    </>
  );
}

export default App;
