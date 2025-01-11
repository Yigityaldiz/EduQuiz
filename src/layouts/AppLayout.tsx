import AppHeader from "@/components/layouts/app/header";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet } from "react-router-dom";
import OCConnectWrapper from "./OCConnectWrapper";
import { WagmiConfig } from "wagmi";
import config from "@/config/wagmiClient";

const AppLayout = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <OCConnectWrapper>
        <WagmiConfig config={config}>
          <main className="min-h-screen h-full px-4 pb-12 bg-gray-100">
            <div className="max-w-screen-xl mx-auto">
              <AppHeader />
              <Outlet />
            </div>
          </main>
        </WagmiConfig>
      </OCConnectWrapper>
    </QueryClientProvider>
  );
};

export default AppLayout;
