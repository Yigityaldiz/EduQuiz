import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import React from "react";

const AppHeader: React.FC = () => {
  return (
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
  );
};

export default AppHeader;
