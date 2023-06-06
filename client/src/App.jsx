import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import "./App.css";
import { Home, NotFound } from "./pages";
import { Footer, LogoBar, NavBar, TopBar } from "./components/Layouts";
import { LessonList } from "./components/Student";
import PostDetail from "./components/News/PostDetail";
import AboutPage from "./pages/AboutPage";

function App() {
  useEffect(() => {
    window.replainSettings = { id: "e974bb32-f3e8-4c54-89dc-91b742dbf7cf" };
    (function (u) {
      var s = document.createElement("script");
      s.async = true;
      s.src = u;
      var x = document.getElementsByTagName("script")[0];
      x.parentNode.insertBefore(s, x);
    })("https://widget.replain.cc/dist/client.js");
  }, []);

  return (
    <main>
      <Toaster position="top-left" reverseOrder={true} />
      <TopBar />
      <LogoBar />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/student/lesson-list" element={<LessonList />} />
        <Route path="/post/:id" element={<PostDetail />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
