import Home from "./pages/Home";
import Header from "./components/Header";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Destination from "./pages/Destination";
import About from "./pages/About";
import Auth from "./pages/auth/login"
import Places from "./pages/Places";
import ErrorPage from "./error-page"



const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
      errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "destinations",
        element: <Destination />,
      },
      {
        path:"places/city/:city",
        element: <Places />,
      },
      {
        path: "about",
        element: <About />,
      }
    ],
  },
  {
    path:"/auth",
    element:<Auth />,
  }
]);

function App() {
  return (
    <>
      <RouterProvider router={router}>
      </RouterProvider>
    </>
  );
}

export default App;
