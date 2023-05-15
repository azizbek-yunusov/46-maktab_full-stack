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
import {
  AllProductList,
  CreateProduct,
  ProductDetails,
  UpdateProduct,
} from "./components/ProductElements";
import { AddBanner, BannersList } from "./components/BannerItems";
import {
  BrandDetail,
  BrandsList,
  CreateBrand,
  UpdateBrand,
} from "./components/Brand";
import {
  AddCategory,
  CategoriesTable,
  CategoryDetail,
  UpdateCategory,
} from "./components/CategoryItems";
import {
  AccountSetting,
  CreateUser,
  Profile,
  UpdateUser,
  UserList,
  UserProfile,
} from "./components/UserItems";
import { OrderItem, OrdersList } from "./components/OrderItems";
import { refreshToken } from "./redux/actions/authAction";
import { HomeDashboard } from "./components/Overview";
import { EditCabinet, Projects, Team } from "./components/UserItems/Cabinet";
import {
  CreateSubCategory,
  SubCategories,
} from "./components/CategoryItems/SubCategory";
import {
  CreatePost,
  PostDetail,
  PostsList,
  UpdatePost,
} from "./components/Post";
import SignIn from "./pages/SignIn";
import "./index.css";
import { ReviewsList, UpdateReview } from "./components/Review";
// import { NotFound } from "../../client/src/pages";
import { FetchLoader } from "./components/Helpers";
import { token } from "./utils/baseUrls";
import NotFound from "./pages/NotFound";

function App() {
  const pathname = useLocation().pathname;
  const dispatch = useDispatch();
  const navigete = useNavigate();
  const { auth } = useSelector((state) => state);

  useEffect(() => {
    dispatch(refreshToken());
  }, [dispatch]);
  return (
    <div>
      <Toaster position="top-left" reverseOrder={true} />
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="*" element={<NotFound />} />

        {(auth.isLogged) && (
          <>
            <Route path="/dashboard" element={<HomeDashboard />} />,
            <Route path="/product/update/:id" element={<UpdateProduct />} />
            <Route path="/product/create" element={<CreateProduct />} />
            <Route path="/dashboard/products" element={<AllProductList />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/dashboard/reviews" element={<ReviewsList />} />
            <Route path="/review/update/:id" element={<UpdateReview />} />
            <Route path="/dashboard/banners" element={<BannersList />} />
            <Route path="/banner/add" element={<AddBanner />} />
            <Route path="/dashboard/brands" element={<BrandsList />} />
            <Route path="/brand/create" element={<CreateBrand />} />
            <Route path="/brand/:id" element={<UpdateBrand />} />
            <Route path="/brand/detail/:id" element={<BrandDetail />} />
            <Route path="/dashboard/categories" element={<CategoriesTable />} />
            <Route path="/category/add" element={<AddCategory />} />
            <Route path="/category/update/:id" element={<UpdateCategory />} />
            <Route path="/category/detail/:id" element={<CategoryDetail />} />
            <Route
              path="/category/sub-categories"
              element={<SubCategories />}
            />
            <Route
              path="/sub-category/create"
              element={<CreateSubCategory />}
            />
            <Route path="/dashboard/users" element={<UserList />} />
            <Route path="/user/create" element={<CreateUser />} />
            <Route path="/dashboard/orders" element={<OrdersList />} />
            <Route path="/dashboard/order/:id" element={<OrderItem />} />
            <Route path="/dashboard/cabinet" element={<Profile />} />
            <Route path="/cabinet/edit" element={<EditCabinet />} />
            <Route path="/cabinet/team" element={<Team />} />
            <Route path="/cabinet/projects" element={<Projects />} />
            {/* <Route path="/cabinet/settings" element={<AccountSetting />} /> */}
            <Route path="/user/:id" element={<UserProfile />} />
            <Route path="/user/update/:id" element={<UpdateUser />} />
            <Route path="/dashboard/posts" element={<PostsList />} />
            <Route path="/post/create" element={<CreatePost />} />
            <Route path="/post/update/:id" element={<UpdatePost />} />
            <Route path="/post/detail/:id" element={<PostDetail />} />
          </>
        )}
      </Routes>
      {auth.isLoading && <FetchLoader isLoading={auth.isLoading} />}
    </div>
  );
}

export default App;
