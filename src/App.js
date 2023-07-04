import {createBrowserRouter,createRoutesFromElements,Outlet,RouterProvider,Route,
} from "react-router-dom";
import { createContext } from "react";
import Navigation from "./Components/NavigationBar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Pricing from "./Pages/Pricing";
import Training from "./Pages/Training";
import Trainners from "./Pages/Trainners";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import { useState } from "react";
export const Sub = createContext();

function App() {
  const [value, setValue] = useState("JOIN US");
  const store = {
    setter: [value, setValue],
  };
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={
          <>
            <Outlet />
            <Footer />
          </>
        }
      >
        <Route
          index
          path="/home"
          element={
            <>
              <Navigation />
              <Home />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <Navigation />
              <About />
            </>
          }
        />
        <Route
          path="/pricing"
          element={
            <>
              <Navigation />
              <Pricing />
            </>
          }
        />
        <Route
          path="/training"
          element={
            <>
              <Navigation />
              <Training />
            </>
          }
        />
        <Route
          path="/trainners"
          element={
            <>
              <Navigation />
              <Trainners />
            </>
          }
        />
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
    )
  );
  return (
    <Sub.Provider value={store}>
      <RouterProvider router={router} />
    </Sub.Provider>
  );
}

export default App;
