import {
  Link,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { Toaster } from "react-hot-toast";
import "./App.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchLoader } from "./components/Helpers";
import { token } from "./utils/baseUrls";
import NotFound from "./pages/NotFound";
import { SignIn } from "./pages";
import { HomeDashboard } from "./components/Overview";
import { ImagesList, UploadImage } from "./components/ImagesItems";
import { refreshToken } from "./redux/auth";
import {
  AddEmployee,
  EmployeeList,
  UpdateEmployee,
} from "./components/Employee";
import {
  CreatePost,
  PostDetail,
  PostsList,
  UpdatePost,
} from "./components/Post";
import { CreateUser, UpdateUser, UserList } from "./components/UserItems";
import { CreateStudent, EditStudent, StudentsList } from "./components/Student";

function App() {
  const pathname = useLocation().pathname;
  const dispatch = useDispatch();
  const navigete = useNavigate();
  const { auth } = useSelector((state) => state);

  useEffect(() => {
    if (token) {
      dispatch(refreshToken());
    }
  }, [dispatch, token]);
  return (
    <div>
      <Toaster position="top-left" reverseOrder={true} />
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/dashboard" element={<HomeDashboard />} />,
        <Route path="/dashboard/employees" element={<EmployeeList />} />,
        <Route path="/employee/add" element={<AddEmployee />} />,
        <Route path="/employees/update/:id" element={<UpdateEmployee />} />,
        <Route path="/dashboard/students" element={<StudentsList />} />,
        <Route path="/student/add" element={<CreateStudent />} />,
        <Route path="/students/update/:id" element={<EditStudent />} />,
        <Route path="/dashboard/admins" element={<UserList />} />,
        <Route path="/admin/add" element={<CreateUser />} />,
        <Route path="/admin/update/:id" element={<UpdateUser />} />,
        <Route path="/dashboard/images" element={<ImagesList />} />,
        <Route path="/image/upload" element={<UploadImage />} />,
        <Route path="/dashboard/posts" element={<PostsList />} />,
        <Route path="/post/create" element={<CreatePost />} />,
        <Route path="/post/detail/:id" element={<PostDetail />} />,
        <Route path="/post/update/:id" element={<UpdatePost />} />,
        {/* {auth.isLogged && (
          <>
            
          </>
        )} */}
      </Routes>
      {auth.isLoading && <FetchLoader isLoading={auth.isLoading} />}
    </div>
  );
}

export default App;
