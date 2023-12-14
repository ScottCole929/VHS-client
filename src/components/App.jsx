import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Authorized } from "./Authorized";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { AllTapes } from "./AllTapes";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<Authorized />}>
          <Route path="/" element={<AllTapes />} />
          {/* <Route path="myposts" element={<UserPosts />} />
          <Route path="createpost" element={<CreatePost />} />
          <Route path="posts" element={<Posts />} />
          <Route path="posts/:postId" element={<PostDetails />} />
          <Route path="edit-post/:postId" element={<EditPost />} />
          <Route path="categorymanager" element={<Categories />} />
          <Route path="tagmanager" element={<Tags />} />
          <Route path="posts/:postId/comments" element={<Comments />} />
          <Route path="posts/:postId/addcomments" element={<AddComments />} />
          <Route path="users" element={<Users />} />
          <Route path="users/:userId" element={<UserDetails />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
