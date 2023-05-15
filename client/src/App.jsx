import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import "./App.css";
import { Home, NotFound } from "./pages";
import { Footer, NavBar, TopBar } from "./components/Layouts";

function App() {
  useEffect(() => {
    window.replainSettings = { id: "9ba7af42-4b86-455f-b953-ebe0286ecce7" };
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
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
