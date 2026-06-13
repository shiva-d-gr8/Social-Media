// import PostListProvider from "../store/post-list-store";
// import {PostList} from "../store/post-list-store";
// import { useContext, useRef } from "react";
// import { useNavigate } from "react-router-dom";
import { Form } from "react-router-dom";
import { redirect } from "react-router-dom";

const CreatePost = () => {

// const {addPost} = useContext(PostList);
// const navigate=useNavigate();

// const userIdElement = useRef();
// const titleElement = useRef();
// const contentElement = useRef();
// const reactionsElement = useRef();
// const tagsElement = useRef();

// const handleSubmit=(e)=>{
  // e.preventDefault();

  // const userId=userIdElement.current.value;
  // const title=titleElement.current.value;
  // const content=contentElement.current.value;
  // const reactions=reactionsElement.current.value;
  // const tags=tagsElement.current.value.split(" ");

  // console.log("userId",userId);
  // console.log("title",title);
  // console.log("content",content);
  // console.log("reactions",reactions);
  // console.log("tags",tags);

  // userIdElement.current.value="";
  // titleElement.current.value="";
  // contentElement.current.value="";
  // reactionsElement.current.value="";
  // tagsElement.current.value="";

// };

return(

 <Form method="POST" className="createPost">
  <div className="mb-3">
    <label htmlFor="userId" className="form-label">Enter User ID</label>
    <input type="text"
      name="userId"
      className="form-control" 
      id="userId" 
      placeholder="Enter user id" 
     
      fdprocessedid="ficquz"/>
   </div>
  <div className="mb-3"> 
    <label htmlFor="title" className="form-label">Post Title</label>
    <input type="text" 
     name="title"
      className="form-control" id="title" placeholder="How are you feeling today?"  fdprocessedid="ficquz"/>
   </div>
   <div className="mb-3">
    <label htmlFor="content" className="form-label">Post Content</label>
    <textarea className="form-control" 
    name="content"
    id="content" rows="3" placeholder="Tell us more about it..." fdprocessedid="ficquz"></textarea>
   </div>
 <div className="mb-3"> 
    <label htmlFor="reactions" className="form-label">No. of Reactions</label>
    <input type="text"
    name="reactions"
    className="form-control" id="reactions" placeholder="How many people react to this post" fdprocessedid="ficquz"/>
   </div>
   <div className="mb-3"> 
    <label htmlFor="tags" className="form-label">Post Tags</label>
    <input type="text"
    name="tags"
    className="form-control" id="tags" placeholder="Enter tags separated by space"  fdprocessedid="ficquz"/>
   </div>
  {/* <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" fdprocessedid="ficquz"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" fdprocessedid="rz3xje"/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div> */}
  <button type="submit" className="btn btn-primary" fdprocessedid="1wbbst">Post</button>
</Form>
)
}

export async function createPostAction(data) 
{
  const formData=await data.request.formData();
  const postData=Object.fromEntries(formData);
  postData.tags=postData.tags.split(" ");
  console.log("postData",postData);
   
  fetch('https://dummyjson.com/posts/add', {
  method: "POST",
  headers: { 'Content-Type': 'application/json' },
  body:JSON.stringify(postData), // You can directly pass the postData object here, as fetch will automatically stringify it when the Content-Type is application/json
  //  JSON.stringify({
  //   title:title,
  //   body:content,
  //   reactions:reactions,
  //   userId:userId,
  //   tags: tags,
  //   }),
})
.then(res => res.json())
 .then(post => { 
// addPost(post); // Uncomment this line if you want to add the post to the list
//navigate("/"); // Uncomment this line if you want to navigate to the post list after creating the post
console.log("Post created successfully:", post);
});


return redirect("/"); // Redirect to the post list after creating the post
}

export default CreatePost;