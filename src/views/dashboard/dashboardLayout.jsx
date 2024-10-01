import { Route, Routes } from "react-router-dom";
import DashboardSidebar from "../../components/dashboardSidebar";
import Dashboard from "./dashboard";
import Profile from "./profile";
import Wallet from "./wallet";
import Orders from "./orders";
import SavedItems from "./savedItems";
import Setting from "./setting";
import OtherOptions from "./otherOptions";
import Support from "./support";
import InviteFriend from "./inviteFriend";

const DashboardLayout = () => {
  return (
    <div className="w-10/12 flex  gap-[30px] my-8">
      <div className="w-3/12">
        <DashboardSidebar />
      </div>
      <div className="w-9/12">
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/savedItems" element={<SavedItems />} />
          <Route path="/inviteFriends" element={<InviteFriend />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/other-option" element={<OtherOptions />} />
          <Route path="/support" element={<Support />} />
        </Routes>
      </div>
    </div>
  );
};

export default DashboardLayout;
