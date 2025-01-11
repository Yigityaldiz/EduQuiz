import Profile from "@/pages/app/profile";
import { Route, Routes } from "react-router-dom";

function ProfileRoutes() {
  return (
    <Routes>
      {/* <Route index element={<Profile />} /> */}
      <Route path=":id" element={<Profile />} />
    </Routes>
  );
}

export default ProfileRoutes;
