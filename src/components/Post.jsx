
import { useContext } from "react";
import { AiFillDelete } from "react-icons/ai";
import {PostList as PostListData} from "../store/post-list-store.jsx";
const Post=({post})=>{

const {deletePost}=useContext(PostListData);
// const reactionCount = post.reactions && typeof post.reactions === "object"
//   ? Object.values(post.reactions).reduce(
//       (sum, value) => sum + (typeof value === "number" ? value : 0),
//       0,
//     )
//   : post.reactions;

  return(
    <div className="card post-card " style={{width: "30rem"}}>
 
  <div className="card-body">
    <h5 className="card-title">
      {post.title}
       <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" onClick={()=>deletePost(post.id)}>
    <AiFillDelete />
</span>
    </h5>
    <p className="card-text">{post.body}</p>
    {post.tags.map((tag)=>(<span key={tag} className="badge text-bg-primary hashtags">{tag}</span>))}
  
  </div>
  <div className="alert alert-success reactions" role="alert">
  A simple success alert—check it out!
</div>
</div>
  )
  }
export default Post;