import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  Layout,
  Home,
  About,
  Contact,
  Error,
  Projects,
  SingleProject,
} from "./pages";

// Create router configuration
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "projects/:id",
        element: <SingleProject />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
