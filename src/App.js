import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/Root.js";
import ErrorPage from "./components/ErrorPage.js";
import Create from "./components/CreatePage.js";
import Read from "./components/ReadPage.js";
import Update from "./components/UpdatePage.js";
import Delete from "./components/DeletePage.js";
import "./App.css";

function App() {
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        children: [
          { path: "/", element: <Create /> },
          { path: "/Read", element: <Read /> },
          { path: "/Update", element: <Update /> },
          { path: "/Delete", element: <Delete /> },
          { path: "/*", element: <ErrorPage /> },
        ],
      },
    ],
    <require to="/" />
  );
  return <RouterProvider router={router}></RouterProvider>;
}
export default App;
