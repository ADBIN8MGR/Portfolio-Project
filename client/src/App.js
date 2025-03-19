import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  Layout,
  Home,
  About,
  Contact,
  Error,
  Projects,
  SingleProject,
  AdminLayout,
  Login,
  HomeManagement,
  AboutManagement,
  ProjectsManagement,
  ContactManagement,
  MessagesManagement,
  DashboardLayout,
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
  {
    path: "/admin",
    element: <AdminLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Login />,
      },
      {
        path: "dashboard",
        element: <DashboardLayout />,
        children: [
          {
            path: "homeManagement",
            element: <HomeManagement />,
          },
          {
            path: "homeManagement",
            element: <AboutManagement />,
          },
          {
            path: "homeManagement",
            element: <ProjectsManagement />,
          },
          {
            path: "homeManagement",
            element: <ContactManagement />,
          },
          {
            path: "homeManagement",
            element: <MessagesManagement />,
          },
        ],
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
