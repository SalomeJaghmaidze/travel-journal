import React from "react";
import Post from "./Post";
import data from "../../data";

function Posts() {
  return (
    <div>
      {data.map((post) => {
        return <Post post={post} />;
      })}
    </div>
  );
}

export default Posts;
