import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import OCConnectWrapper from "./layouts/OCConnectWrapper";
import { Toaster } from "./components/ui/toaster";
import { WagmiConfig } from "wagmi";
import config from "./config/wagmiClient";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Profile from "./pages/app/profile";
import { SingleQuiz } from "./pages/app/quiz/[slug]";

// Lazy-loaded components
const HomePage = lazy(() => import("./pages/home/index"));
const CreateQuiz = lazy(() => import("./pages/CreateQuiz"));

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
        path: "app",
        children: [
          {
            path: "quiz",
            children: [
              {
                path: "create",
                element: (
                  <LazyLoad>
                    <WagmiConfig config={config}>
                      <CreateQuiz />
                    </WagmiConfig>
                  </LazyLoad>
                ),
              },

              {
                path: ":id",
                element: <SingleQuiz />,
              },
            ],
          },

          {
            path: "profile",
            children: [
              {
                path: ":id",
                element: (
                  <LazyLoad>
                    <Profile />
                  </LazyLoad>
                ),
              },
            ],
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
