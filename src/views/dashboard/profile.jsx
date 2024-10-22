import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaCloudUploadAlt } from "react-icons/fa";
import dummyProfileImg from "../../assets/images/profile-img.png";

const Profile = () => {
  const [userDetails, setUserDetails] = useState({});
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [profileImage, setProfileImage] = useState(null);
  const [profileImagePreview, setProfileImagePreview] = useState();
  const [imageLoading, setImageLoading] = useState(false);

  //handle update user details
  const UpdateUserDetails = async () => {
    try {
      const formattedDob = formatDate(dob);
      const response = await axios.put(
        `${import.meta.env.VITE_API_URL}/api/auth/profiles`,
        {
          name: fullName,
          email: email,
          mobile: mobileNumber,
          gender: gender,
          dob: formattedDob,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        }
      );

      if (response.status === 200) {
        toast.success("User details updated successfully");
      }
    } catch (error) {
      console.log("Failed to update the user:", error);
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
        setGender(response.data.data.profile?.gender || "");
        const formateDob = reverseDate(response.data.data?.profile?.dob || "");
        setDob(formateDob || "");
      }
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message);
    }
  };

  //handle discard
  const handleDiscard = () => {
    setFullName("");
    setEmail("");
    setMobileNumber("");
    setGender("");
    setDob("");
  };

  // Handle file input change
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(file);
      setProfileImagePreview(URL.createObjectURL(file)); // Preview the selected image
    }
  };

  // Handle upload profile image
  const handleUploadImage = async () => {
    if (!profileImage) {
      toast.error("Please select an image first");
      return;
    }
    setImageLoading(true);
    try {
      const formData = new FormData();
      formData.append("profile_image", profileImage);
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/auth/profiles/image`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        }
      );
      if (response.status === 200) {
        toast.success("Profile image uploaded successfully");
        setImageLoading(false);
      }
    } catch (error) {
      setImageLoading(false);
      console.log("Error in uploading profile image:", error);
      toast.error(error.response?.data?.message || "Failed to upload image");
    }
  };

  //formate date in dd-mm-yyyy
  const formatDate = (date) => {
    const d = new Date(date);
    let day = d.getDate();
    let month = d.getMonth() + 1; // Months are zero-based
    const year = d.getFullYear();

    // Add leading zero if day or month is less than 10
    if (day < 10) {
      day = "0" + day;
    }
    if (month < 10) {
      month = "0" + month;
    }

    return `${day}-${month}-${year}`;
  };

  //handle reverse dob
  const reverseDate = (date) => {
    return date.split("-").reverse().join("-");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    getUserDetails();
  }, []);
  return (
    <div className="w-full flex flex-col">
      <div className="flex justify-center items-center mb-4 relative gap-[40px]">
        <div
          className="rounded-full border flex flex-col justify-center items-center p-2 shadow-lg w-[130px] h-[130px] cursor-pointer relative"
          onClick={() => document.getElementById("profileImageInput").click()} // Trigger input click on div click
        >
          {profileImagePreview ? (
            <img
              src={profileImagePreview} // Show preview image
              alt="Profile Preview"
              className="h-full w-full object-cover rounded-full"
            />
          ) : (
            <>
              <FaCloudUploadAlt className="h-[80px] w-[80px] text-gray-500" />
              <p className="text-xs text-center text-gray-600">
                Click or <br /> Drag file
              </p>
            </>
          )}
        </div>
        {/* Hidden input field */}
        <input
          type="file"
          id="profileImageInput"
          style={{ display: "none" }} // Completely hide the input field
          accept="image/*"
          onChange={handleFileChange} // Handle file change
        />
        {imageLoading ? (
          <button
            className="rounded-lg border px-6 py-2 bg-primary text-white cursor-not-allowed"
            disabled
          >
            Uploading ....
          </button>
        ) : (
          <button
            className="rounded-lg border px-6 py-2 bg-primary text-white"
            onClick={handleUploadImage}
          >
            Upload Image
          </button>
        )}
      </div>

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
        <button
          className="px-10 py-2 rounded-lg bg-[#777777] text-white text-base"
          onClick={() => handleDiscard()}
        >
          Discard Changes
        </button>
      </div>
    </div>
  );
};

export default Profile;
