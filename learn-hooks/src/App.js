import { useEffect, useState } from "react";
import queryString from "query-string";

import "./App.css";
// import ColorBox from "./components/ColorBox";
// import TodoList from "./components/TodoList";
import PostList from "./components/PostList";
import Pagination from "./components/Pagination";

function App() {
  const [postList, setPostList] = useState([]);
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
    _totalRows: 1,
  });
  const [filters, setFilters] = useState({
    _limit: 10,
    _page: 1,
  });

  const handlePageChange = (newPage) => {
    console.log("New Page: ", newPage);
    setFilters({
      ...filters,
      _page: newPage,
    });
  };
  useEffect(() => {
    try {
      async function fetchPostList() {
        const paramString = queryString.stringify(filters);
        const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${paramString}`;
        const response = await fetch(requestUrl);
        const responseJSON = await response.json();
        console.log(responseJSON);
        const { data, pagination } = responseJSON;
        setPostList(data);
        setPagination(pagination);
        // console.log(123);
      }
      fetchPostList();
    } catch (error) {
      console.log("Fail to fetch postList: ", error);
    }
    console.log("PostList effect");
  }, [filters]);

  useEffect(() => {
    console.log("TodoList effect");
  });

  return (
    <div className="App">
      {/* <TodoList /> */}
      <PostList posts={postList} />
      <Pagination pagination={pagination} onPageChange={handlePageChange} />
    </div>
  );
}

export default App;
