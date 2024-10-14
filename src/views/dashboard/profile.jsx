import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const Profile = () => {
  const [userDetails, setUserDetails] = useState({});
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");

  //handle update user details
  const UpdateUserDetails = async () => {
    try {
      const response = await axios.put(
        `${import.meta.env.VITE_API_URL}/api/auth/users`,
        {
          name: fullName,
          email: email,
          mobile: mobileNumber,
          props: [{ gender: gender }, { dob: dob }],
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        }
      );

      if (response.status === 200) {
        toast.success("User details updated successfully");
        CreateProfile();
      }
    } catch (error) {
      console.log("Failed to update the user:", error);
      toast.error(
        error.response?.data?.message?.email || error.response?.data?.message
      );
    }
  };

  //handle post or create profile
  const CreateProfile = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/auth/profiles`,
        {
          name: fullName,
          email: email,
          mobile: mobileNumber,
          gender: gender,
          dob: dob,
          props: [{ gender: gender }, { dob: dob }],
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        }
      );
      if (response.status === 201) {
        toast.success("Profile created successfully");
      }
    } catch (error) {
      console.log("Failed to create the profile:", error);
      toast.error(
        error.response?.data?.message?.email || error.response?.data?.message
      );
    }
  };

  // handle get user details
  const getUserDetails = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/auth/user/me`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        }
      );
      if (response.status === 200) {
        setUserDetails(response.data.data);
        setEmail(response.data.data.email || "");
        setMobileNumber(response.data.data.mobile || "");
        setFullName(response.data.data.name || "");
        setGender(response.data.data.props[0].gender || "");
        setDob(response.data.data.props[0].dob || "");
      }
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message);
    }
  };

  //handle discard
  const handleDiscard=()=>{
    setFullName("");
    setEmail("");
    setMobileNumber("");
    setGender("");
    setDob("");
  }
  useEffect(() => {
    window.scrollTo(0, 0);
    getUserDetails();
  }, []);
  return (
    <div className="w-full flex flex-col">
      <div className="w-full flex gap-[20px] my-2">
        <div className="w-6/12 flex flex-col">
          <label htmlFor="fullName" className="font-regular text-lg">
            Full Name
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            className="border-[1px] border-[#D0D5DD] rounded-xl py-2 px-3 my-2 outline-none placeholder:text-[#667085] placeholder:font-normal"
            placeholder="Enter fullname"
            required
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div className="w-6/12 flex flex-col">
          <label htmlFor="email" className="font-regular text-lg">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="border-[1px] border-[#D0D5DD] rounded-xl py-2 px-3 my-2 outline-none placeholder:text-[#667085] placeholder:font-normal"
            placeholder="Enter email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>
      <div className="w-full flex gap-[20px] my-2">
        <div className="w-6/12 flex flex-col">
          <label htmlFor="phoneNumber" className="font-regular text-lg">
            Phone Number
          </label>
          <input
            id="phoneNumber"
            name="phoneNumber"
            type="number"
            maxLength={10}
            className="border-[1px] border-[#D0D5DD] rounded-xl py-2 px-3 my-2 outline-none placeholder:text-[#667085] placeholder:font-normal"
            placeholder="Enter Phone Number"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
          />
        </div>
        <div className="w-6/12 flex flex-col">
          <label htmlFor="DOB" className="font-regular text-lg">
            Date Of Birth
          </label>
          <input
            id="DOB"
            name="DOB"
            type="date"
            className="border-[1px] border-[#D0D5DD] rounded-xl py-2 px-3 my-2 outline-none placeholder:text-[#667085] placeholder:font-normal"
            placeholder="Enter DOB"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
        </div>
      </div>
      <div className="w-full flex flex-col my-2">
        <label htmlFor="gender" className="font-regular text-lg">
          Gender
        </label>
        <div className="flex gap-[20px] my-2">
          <div className="flex items-center gap-2">
            <input
              type="radio"
              name="gender"
              id="female"
              value="female"
              className="cursor-pointer"
              required
              checked={gender === "female"}
              onChange={(e) => setGender(e.target.value)}
            />
            <label htmlFor="female" className="text-base cursor-pointer">
              Female
            </label>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="radio"
              name="gender"
              id="male"
              value="male"
              className="cursor-pointer"
              required
              checked={gender === "male"}
              onChange={(e) => setGender(e.target.value)}
            />
            <label htmlFor="male" className="text-base cursor-pointer">
              Male
            </label>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center gap-[30px] my-3">
        <button
          className="px-10 py-2 rounded-lg bg-primary text-white text-base"
          onClick={() => UpdateUserDetails()}
        >
          Save Changes
        </button>
        <button className="px-10 py-2 rounded-lg bg-[#777777] text-white text-base" onClick={()=>handleDiscard()}>
          Discard Changes
        </button>
      </div>
    </div>
  );
};

export default Profile;
