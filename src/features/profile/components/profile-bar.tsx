import ProfileTabs from "./tabs";

export default function ProfileBar() {
  return (
    <div className="border border-gray-200 relative rounded-xl h-[150px] mb-20">
      <img
        src="/assets/backgrounds/profile-bg-3.jpg"
        alt="profile-bg"
        width={0}
        height={0}
        className="absolute top-0 left-0 w-full h-full object-cover object-center rounded-t-xl"
      />
      <div className="profile-sidebar__avatar absolute -bottom-14 left-16">
        <img
          src="/assets/avatars/eduquiz-avatar-1.jpg"
          alt="avatar"
          width={130}
          height={130}
          className="rounded-full"
        />
      </div>
      <div className="absolute bottom-0 right-0 text-right">
        <div className="flex justify-between items-center p-4 mt-12">
          <div>
            <p className="text-white font-bold text-xl">John Doe</p>
            <p className="text-white text-xs">john.doe@icloud.com</p>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-[36px] flex right-0">
        {/* <ProfileTabs /> */}
      </div>
    </div>
  );
}
