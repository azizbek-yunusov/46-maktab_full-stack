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
  EmployeeView,
  UpdateEmployee,
} from "./components/Employee";
import {
  CreatePost,
  PostDetail,
  PostsList,
  UpdatePost,
} from "./components/Post";
import {
  CreateUser,
  Profile,
  UpdateUser,
  UserList,
} from "./components/UserItems";
import { CreateStudent, EditStudent, StudentsList } from "./components/Student";
import LessonList from "./components/Lesson/LessonList";
import AppealList from "./components/Appeal/AppealList";

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

        <Route path="/dashboard/cabinet" element={<Profile />} />
        {/* <Route path="/cabinet/edit" element={<EditCabinet />} /> */}
        {/* <Route path="/cabinet/team" element={<Team />} /> */}
        {/* <Route path="/cabinet/projects" element={<Projects />} /> */}
        {auth.isLogged && (
          <>
            <Route path="/" element={<SignIn />} />
            <Route path="/dashboard" element={<HomeDashboard />} />,
            <Route path="/dashboard/employees" element={<EmployeeList />} />,
            <Route path="/employee/add" element={<AddEmployee />} />,
            <Route path="/employees/update/:id" element={<UpdateEmployee />} />,
            <Route path="/employee/view/:id" element={<EmployeeView />} />,
            <Route path="/dashboard/students" element={<StudentsList />} />,
            <Route path="/student/add" element={<CreateStudent />} />,
            <Route path="/students/update/:id" element={<EditStudent />} />,
            <Route path="/dashboard/admins" element={<UserList />} />,
            <Route path="/admin/add" element={<CreateUser />} />,
            <Route path="/user/update/:id" element={<UpdateUser />} />,
            <Route path="/dashboard/images" element={<ImagesList />} />,
            <Route path="/image/upload" element={<UploadImage />} />,
            <Route path="/dashboard/posts" element={<PostsList />} />,
            <Route path="/post/create" element={<CreatePost />} />,
            <Route path="/post/detail/:id" element={<PostDetail />} />,
            <Route path="/post/update/:id" element={<UpdatePost />} />,
            <Route path="/dashboard/appeals" element={<AppealList />} />,
            <Route path="/dashboard/lesson-table" element={<LessonList />} />,
          </>
        )}
      </Routes>
      {auth.isLoading && <FetchLoader isLoading={auth.isLoading} />}
    </div>
  );
}

export default App;
