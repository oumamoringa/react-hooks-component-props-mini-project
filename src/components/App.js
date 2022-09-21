import React from "react";
import ArticleList from "./ArticleList";
import About from "./About";
import Header from "./Header";
import blogData from "../data/blog";

console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header/>
      <About   />
    <ArticleList />
    </div>
  );
}

export default App;
