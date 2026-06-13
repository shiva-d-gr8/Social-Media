import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import Header from "../components/header.jsx";
import Footer from "../components/Footer.jsx";
import Sidebar from "../components/Sidebar.jsx";
import CreatePost from "../components/CreatePost.jsx";
import PostList from "../components/PostList.jsx";
import { useState } from "react";
import PostListProvider from "../store/post-list-store.jsx";
import { Outlet } from "react-router-dom";

function App() {
const[selectedTab,setSelectedTab]=useState("Home");
  return (
    <PostListProvider>
<div className="app-container">
<Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab}></Sidebar>
<div className="content">
<Header></Header> 
{/* {selectedTab==="Home" ? (<PostList></PostList>):(<CreatePost></CreatePost>)} */}
<Outlet></Outlet>
<Footer></Footer>
</div>
</div>
 </PostListProvider>
  )
}

export default App;
