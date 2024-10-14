import profileImg from "../assets/images/profile-img.png";
import { FiUser } from "react-icons/fi";
import { HiOutlineBolt } from "react-icons/hi2";
import { FiHome } from "react-icons/fi";
import { RxStack } from "react-icons/rx";
import { FiUserPlus } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";
import { RiEqualizer2Line } from "react-icons/ri";
import { CiCircleQuestion } from "react-icons/ci";
import { FiLogOut } from "react-icons/fi";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../redux/slices/auth/authSlice";

const DashboardSidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch=useDispatch();

  //handle logout
  const handleLogout=()=>{
    dispatch(logout());
    navigate('/');
    localStorage.removeItem('access_token');
  }
  return (
    <div className="w-full flex flex-col shadow-lg">
      <div className="w-full flex items-center gap-[15px] px-4 py-3">
        <div className="relative flex items-center justify-center">
          <img
            src={profileImg}
            alt=""
            className="w-[60px] h-[60px] rounded-full shadow-md"
          />
          <div className="w-[15px] h-[15px] bg-[#12B76A] rounded-full absolute bottom-0 border-2 right-[5px]"></div>
        </div>
        <p className="text-xl font-medium">Olivia Rhye</p>
      </div>
      <div
        className={`border-t-[0px] border-x-0 border group w-full px-4 py-3 flex gap-[10px] items-center ${
          location.pathname === "/dashboard/profile" || location.pathname==='/dashboard' ? "bg-[#F07B3F]" : ""
        } hover:bg-[#F07B3F] cursor-pointer`}
        onClick={() => navigate("/dashboard/profile")}
      >
        <FiUser
          className={`group-hover:text-white ${
            location.pathname === "/dashboard/profile" || location.pathname==='/dashboard'
              ? "text-white"
              : "text-[#344054]"
          }  text-2xl`}
        />
        <p
          className={`group-hover:text-white  ${
            location.pathname === "/dashboard/profile" || location.pathname==='/dashboard'
              ? "text-white"
              : "text-[#344054]"
          }`}
        >
          View & Edit profile
        </p>
      </div>
      <div
        className={`border-t-[0px] border-x-0 border group w-full px-4 py-3 flex gap-[10px] items-center ${
          location.pathname === "/dashboard/wallet" ? "bg-[#F07B3F]" : ""
        } hover:bg-[#F07B3F] cursor-pointer`}
        onClick={() => navigate("/dashboard/wallet")}
      >
        <HiOutlineBolt
          className={`group-hover:text-white ${
            location.pathname === "/dashboard/wallet"
              ? "text-white"
              : "text-[#344054]"
          }  text-2xl`}
        />
        <p
          className={`group-hover:text-white  ${
            location.pathname === "/dashboard/wallet"
              ? "text-white"
              : "text-[#344054]"
          }`}
        >
          Wallet
        </p>
      </div>
      <div
        className={`border-t-[0px] border-x-0 border group w-full px-4 py-3 flex gap-[10px] items-center ${
          location.pathname === "/dashboard/orders" ? "bg-[#F07B3F]" : ""
        } hover:bg-[#F07B3F] cursor-pointer`}
        onClick={() => navigate("/dashboard/orders")}
      >
        <FiHome
          className={`group-hover:text-white ${
            location.pathname === "/dashboard/orders"
              ? "text-white"
              : "text-[#344054]"
          }  text-2xl`}
        />
        <p
          className={`group-hover:text-white  ${
            location.pathname === "/dashboard/orders"
              ? "text-white"
              : "text-[#344054]"
          }`}
        >
          Orders
        </p>
      </div>
      <div
        className={`border-t-[0px] border-x-0 border group w-full px-4 py-3 flex gap-[10px] items-center ${
          location.pathname === "/dashboard/savedItems" ? "bg-[#F07B3F]" : ""
        } hover:bg-[#F07B3F] cursor-pointer`}
        onClick={() => navigate("/dashboard/savedItems")}
      >
        <RxStack
          className={`group-hover:text-white ${
            location.pathname === "/dashboard/savedItems"
              ? "text-white"
              : "text-[#344054]"
          }  text-2xl`}
        />
        <p
          className={`group-hover:text-white  ${
            location.pathname === "/dashboard/savedItems"
              ? "text-white"
              : "text-[#344054]"
          }`}
        >
          Saved Items
        </p>
      </div>
      <div
        className={`border-t-[0px] border-x-0 border group w-full px-4 py-3 flex gap-[10px] items-center ${
          location.pathname === "/dashboard/inviteFriends" ? "bg-[#F07B3F]" : ""
        } hover:bg-[#F07B3F] cursor-pointer`}
        onClick={() => navigate("/dashboard/inviteFriends")}
      >
        <FiUserPlus
          className={`group-hover:text-white ${
            location.pathname === "/dashboard/inviteFriends"
              ? "text-white"
              : "text-[#344054]"
          }  text-2xl`}
        />
        <p
          className={`group-hover:text-white  ${
            location.pathname === "/dashboard/inviteFriends"
              ? "text-white"
              : "text-[#344054]"
          }`}
        >
          Invite Friends
        </p>
      </div>
      <div
        className={`border-t-[0px] border-x-0 border group w-full px-4 py-3 flex gap-[10px] items-center ${
          location.pathname === "/dashboard/setting" ? "bg-[#F07B3F]" : ""
        } hover:bg-[#F07B3F] cursor-pointer`}
        onClick={() => navigate("/dashboard/setting")}
      >
        <IoSettingsOutline
          className={`group-hover:text-white ${
            location.pathname === "/dashboard/setting"
              ? "text-white"
              : "text-[#344054]"
          }  text-2xl`}
        />
        <p
          className={`group-hover:text-white  ${
            location.pathname === "/dashboard/setting"
              ? "text-white"
              : "text-[#344054]"
          }`}
        >
          Settings
        </p>
      </div>
      <div
        className={`border-t-[0px] border-x-0 border group w-full px-4 py-3 flex gap-[10px] items-center ${
          location.pathname === "/dashboard/other-option" ? "bg-[#F07B3F]" : ""
        } hover:bg-[#F07B3F] cursor-pointer`}
        onClick={() => navigate("/dashboard/other-option")}
      >
        <RiEqualizer2Line
          className={`group-hover:text-white ${
            location.pathname === "/dashboard/other-option"
              ? "text-white"
              : "text-[#344054]"
          }  text-2xl`}
        />
        <p
          className={`group-hover:text-white  ${
            location.pathname === "/dashboard/other-option"
              ? "text-white"
              : "text-[#344054]"
          }`}
        >
          Other Otions
        </p>
      </div>
      <div
        className={`border-t-[0px] border-x-0 border group w-full px-4 py-3 flex gap-[10px] items-center ${
          location.pathname === "/dashboard/support" ? "bg-[#F07B3F]" : ""
        } hover:bg-[#F07B3F] cursor-pointer`}
        onClick={() => navigate("/dashboard/support")}
      >
        <CiCircleQuestion
          className={`group-hover:text-white ${
            location.pathname === "/dashboard/support"
              ? "text-white"
              : "text-[#344054]"
          }  text-2xl`}
        />
        <p
          className={`group-hover:text-white  ${
            location.pathname === "/dashboard/support"
              ? "text-white"
              : "text-[#344054]"
          }`}
        >
          Support
        </p>
      </div>
      <div className="border-t-[0px] border-x-0 border group w-full px-4 py-3 flex gap-[10px]  items-center  cursor-pointer" onClick={handleLogout}>
        <FiLogOut className="  text-red-800 text-2xl" />
        <p className=" text-red-800 ">Log Out</p>
      </div>
    </div>
  );
};

export default DashboardSidebar;
