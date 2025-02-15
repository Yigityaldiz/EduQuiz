import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Hourglass, Settings2, User2 } from "lucide-react";
import ProfileQuizzesTab from "./quizzes";
import ProfileSettingsTab from "./settings";
import ProfileAccountTab from "./account";

export default function ProfileTabs() {
  return (
    <Tabs className="relative right-[1px]" defaultValue="quizzes">
      <TabsList className="bg-transparent absolute -top-[81px] right-0 p-0 border-r border-l border-b rounded-none rounded-b-lg border-gray-200">
        <TabsTrigger
          value="account"
          className="bg-white data-[state=active]:bg-blue-400 data-[state=active]:text-white h-full rounded-none rounded-bl-lg flex items-center px-4 border-r border-gray-200"
        >
          <span>
            <User2 size={16} className="mr-1" />
          </span>
          Account
        </TabsTrigger>
        <TabsTrigger
          value="quizzes"
          className="bg-white data-[state=active]:bg-blue-400 data-[state=active]:text-white h-full rounded-none flex items-center px-4 border-r border-gray-200"
        >
          <Hourglass size={16} className="mr-1" />
          Quizzes
        </TabsTrigger>
        <TabsTrigger
          value="settings"
          className="bg-white data-[state=active]:bg-blue-400 data-[state=active]:text-white h-full rounded-none rounded-br-lg flex items-center px-4"
        >
          <Settings2 size={16} className="mr-1" />
          Settings
        </TabsTrigger>
      </TabsList>

      <TabsContent value="quizzes" className="mt-20">
        <ProfileQuizzesTab />
      </TabsContent>

      <TabsContent value="settings" className="mt-20">
        <ProfileSettingsTab />
      </TabsContent>

      <TabsContent value="account" className="mt-20">
        <ProfileAccountTab />
      </TabsContent>
    </Tabs>
  );
}
