import { createContext } from "react";
import { useReducer } from "react";
import { useCallback } from "react";
import { useEffect } from "react";
import { useState } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  // fetching: false,
  deletePost: () => {},
});

const postListReducer=(currentPostList,action)=>{
  let newPostList=currentPostList;

  if(action.type==="DELETE_POST"){
  newPostList=currentPostList.filter(
    (post)=>post.id!==action.payload.postId);
  }
  else if(action.type==="ADD_POST"){
    newPostList=[action.payload,...currentPostList];
  }
  else if(action.type==="ADD_INITIAL_POST"){
    newPostList=action.payload.posts;
  }
return newPostList;
}




const PostListProvider=({children})=>{
  const [postList,dispatch]=useReducer(postListReducer,[]);


  // Implementation for adding a new post
  const addPost=(post)=>{
  dispatch({
    type:"ADD_POST",
    payload:post,
  });
};


const addInitialPosts=(posts)=>{
  // Implementation for adding a new post
  dispatch({
    type:"ADD_INITIAL_POST",
    payload:{
        posts,
    },
  });
};

const deletePost=useCallback((postId)=>{
dispatch({
  type:"DELETE_POST",
  payload:{
    postId,
  },
});

}
,[dispatch]);

//useMemo for memoizing values or result of functions or some intensive calculations
// const arr=[2,8,6,9,4];
// const sortarr=useMemo(()=>{
//   arr.sort((a,b)=>a-b);
// },[arr]);

//Custom hooks- combine 2 or more inbuilt hooks to create a custom hook for specific functionality & allows you to reuse the logic across multiple components

 //useEffect for side effects in functional components, such as fetching data, setting up subscriptions, or manually changing the DOM. It runs after the component renders and can be used to perform cleanup when the component unmounts or before the effect runs again. It takes a function as an argument and an optional dependency array that determines when the effect should run. If the dependency array is empty, the effect runs only once after the initial render. If it contains variables, the effect runs whenever those variables change. 

// const[fetching,setFetching]=useState(false);


return(
  <PostList.Provider value={{
    postList,
    addPost,
    addInitialPosts,
    deletePost,
    // fetching,
  }}>
    {children}
  </PostList.Provider>
)
}

// const DEFAULT_POST_LIST=[
 
//   {
//     id:2,
//     title:"My Second Post",
//     body:"This is the body of my second post",
//     reactions: 5,
//     userId:9,
//     tags:["secondpost","update"],
//   }
// ]
export default PostListProvider;