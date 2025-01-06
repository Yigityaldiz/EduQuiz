import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import OCConnectWrapper from "./layouts/OCConnectWrapper";
import { Toaster } from "./components/ui/toaster";
import { QuizPage } from "./pages/quiz";
import { WagmiConfig } from "wagmi";
import config from "./config/wagmiClient";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Lazy-loaded components
const HomePage = lazy(() => import("./pages/home/index"));
const About = lazy(() => import("./pages/About"));
const CreateQuiz = lazy(() => import("./pages/CreateQuiz"));
const UserPage = lazy(() => import("./pages/UserPage"));

// Lazy loading wrapper
const LazyLoad = ({ children }: { children: React.ReactNode }) => (
  <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
);

// QueryClient oluştur
const queryClient = new QueryClient();

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
            <HomePage />
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
            <WagmiConfig config={config}>
              <CreateQuiz />
            </WagmiConfig>
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

      {
        path: "quiz",
        children: [
          {
            path: ":id",
            element: <QuizPage />,
          },
        ],
      },
    ],
  },
]);

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}
