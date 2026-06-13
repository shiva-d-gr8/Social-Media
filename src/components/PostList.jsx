import { useContext } from "react";
import Post from "./Post.jsx";
import Welcome from "./Welcome.jsx";
import { useEffect } from "react";
import { useState } from "react";
import {PostList as PostListData} from "../store/post-list-store.jsx";
import { useLoaderData } from "react-router-dom";

// import LoadingSpinner from "./LoadingSpinner.jsx";

const PostList=()=>{
 const postList=useLoaderData();

// const [dataFetched,setDataFetched]=useState(false);
      
// useEffect(()=>{
//   setFetching(true);

//   const controller =new AbortController();
//   const signal=controller.signal;
  
  
// return ()=>{console.log("cleaning up UseEffect");
//   controller.abort();
// };
// }
// ,[]);

// setDataFetched(true);

  
  return(
    <>
    {/* {fetching && <LoadingSpinner />} */}
    {postList.length===0 && (<Welcome />)}
    {postList.map((post)=>(
        <Post key={post.id} post={post}/>
      ))
    }
    </>
  );
};

export const postLoader=() =>{
 return fetch('https://dummyjson.com/posts')
.then(res => res.json())
.then((data) => {
  return(data.posts);
});
}
export default PostList;
