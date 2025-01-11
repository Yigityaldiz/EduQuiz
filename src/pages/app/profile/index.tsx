

import ProfileBar from "@/features/profile/components/profile-bar";
import ProfileTabs from "@/features/profile/components/tabs";

export default function Profile() {
  return (
    <div>
      <div className="relative">
        <ProfileBar />
        <ProfileTabs />
      </div>
    </div>
  );
}
