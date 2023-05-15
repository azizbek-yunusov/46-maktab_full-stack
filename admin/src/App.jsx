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
import { AddEmployee } from "./components/Employee";

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
        <Route path="/dashboard/images" element={<ImagesList />} />,
        <Route path="/image/upload" element={<UploadImage />} />,
        <Route path="/employee/add" element={<AddEmployee />} />,
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
