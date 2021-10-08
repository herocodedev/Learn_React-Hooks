import logo from "./logo.svg";
import "./App.css";
import ColorBox from "./components/ColorBox";
import TodoList from "./components/TodoList";
import { useEffect, useState } from "react";
import PostList from "./components/PostList";

function App() {
  const [postList, setPostList] = useState([]);
  useEffect(() => {
    try {
      async function fetchPostList() {
        const requestUrl =
          "http://js-post-api.herokuapp.com/api/posts?_limit=10&_page=1";
        const response = await fetch(requestUrl);
        const responseJSON = await response.json();
        console.log(responseJSON);
        const { data } = responseJSON;
        setPostList(data);
        // console.log(123);
      }
      fetchPostList();
    } catch (error) {
      console.log("Fail to fetch postList: ", error);
    }
    console.log("PostList effect");
  }, []);

  useEffect(() => {
    console.log("TodoList effect");
  });

  return (
    <div className="App">
      {/* <TodoList /> */}
      <PostList posts={postList} />
    </div>
  );
}

export default App;
