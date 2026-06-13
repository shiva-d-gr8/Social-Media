import React from 'react'
// import { createRoot } from 'react-dom/client'
import App from './routes/App.jsx'
import PostListProvider from './store/post-list-store.jsx'
import ReactDOM from 'react-dom/client';
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import CreatePost, { createPostAction } from './components/CreatePost.jsx';
import PostList from './components/PostList.jsx';
import {postLoader} from './components/PostList.jsx';

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/",
          element: <PostList />,
          loader: postLoader,
          hydrateFallbackElement: <div />
        },
        {
          path: "/create-post",
          element: <CreatePost />,
          action: createPostAction
        }
      ]
    }
  ],
  {
    basename: "/Social-Media"
  }
);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <PostListProvider>*/}
      <RouterProvider router={router} />
    {/* </PostListProvider>*/}
   </React.StrictMode>
);
