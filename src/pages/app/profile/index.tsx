import { useNavigate, useParams } from "react-router-dom";

import { LogOut } from "lucide-react";

// import { CrosswordIcon } from "@/components/icons/crossword";
import { Button } from "@/components/ui/button";
import ProfileBar from "@/features/profile/components/profile-bar";
import ProfileTabs from "@/features/profile/components/tabs";

export default function Profile() {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-screen-xl mx-auto">
        {/* Top Header */}
        <div className="py-4 flex justify-between">
          <h1 className="text-3xl font-bold text-black">eduquiz</h1>

          <div className="space-x-4 flex items-center">
            <span className="rounded-full text-xs bg-gradient-to-r from-blue-200 via-blue-400 to-blue-600 text-white p-2">
              0x93a5b1950B4b2A89109A390C37611EB027516248
            </span>

            <Button
              variant="outline"
              className="w-12 h-12 text-red-500 border border-red-500 hover:bg-red-500 hover:text-white rounded-full"
            >
              <LogOut size={24} />
            </Button>
          </div>
        </div>

        <div className="relative">
          <ProfileBar />
          <ProfileTabs />
        </div>
      </div>
    </div>
  );
}
