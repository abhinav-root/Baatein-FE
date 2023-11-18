import React from "react";
import ReactDOM from "react-dom/client";
import {
  RouterProvider,
  createBrowserRouter,
  redirect,
} from "react-router-dom";
import Feed from "./pages/Feed";
import Root from "./layout/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "feed", element: <Feed /> },
      { path: "notifications", element: <div>Notifications</div> },
      { path: "chat", element: <div>Chat</div> },
      { path: "search", element: <div>Search</div> },
      { path: "post", element: <div>Post</div>}
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
