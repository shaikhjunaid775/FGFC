import Footer from "../component/Footer";
import ProfileCard from "../component/profile/ProfileCard";
import ProfileMenus from "../component/profile/ProfileMenus";
import ReferralCard from "../component/profile/ReferralCard";
import Wallet from "../component/profile/Wallet";

function Profile() {
  return (
    <>
      <div className="absolute w-full max-w-lg -z-100 overflow-hidden">
        <div
          className={`absolute -right-24 top-[10%] h-72 w-72 animate-blob rounded-full opacity-45 mix-blend-multiply blur-3xl bg-primary`}
        ></div>
        <div
          className={`absolute -left-40 top-[50%] h-72 w-72 animate-blob rounded-full opacity-45 mix-blend-multiply blur-3xl bg-secondary`}
        ></div>
        <div
          className={`absolute left-40 top-[70%] h-72 w-24 animate-blob rounded-full opacity-45 mix-blend-multiply blur-3xl bg-yellow-1`}
        ></div>

        <ProfileCard />

        {/* Balance Card */}
        <Wallet />

        <ReferralCard />

        <ProfileMenus />
      </div>
      <Footer />
    </>
  );
}

export default Profile;
