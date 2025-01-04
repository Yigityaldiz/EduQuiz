import { lazy, Suspense } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
  Outlet,
} from "react-router-dom";
import OCConnectWrapper from "./layouts/OCConnectWrapper";
import { Toaster } from "./components/ui/toaster";

// Lazy-loaded components
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const CreateQuiz = lazy(() => import("./pages/CreateQuiz"));
const Questions = lazy(() => import("./pages/Questions"));
const UserPage = lazy(() => import("./pages/UserPage"));

// Lazy loading wrapper
const LazyLoad = ({ children }: { children: React.ReactNode }) => (
  <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
);

// Router configuration
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <OCConnectWrapper>
        <Outlet />
        <Toaster />
      </OCConnectWrapper>
    ),
    children: [
      {
        index: true,
        element: (
          <LazyLoad>
            <Home />
          </LazyLoad>
        ),
      },
      {
        path: "about",
        element: (
          <LazyLoad>
            <About />
          </LazyLoad>
        ),
      },
      {
        path: "create-quiz",
        element: (
          <LazyLoad>
            <CreateQuiz />
          </LazyLoad>
        ),
      },
      {
        path: "questions",
        element: (
          <LazyLoad>
            <Questions />
          </LazyLoad>
        ),
      },
      {
        path: "user",
        children: [
          {
            path: ":id",
            element: (
              <LazyLoad>
                <UserPage />
              </LazyLoad>
            ),
          },
        ],
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
