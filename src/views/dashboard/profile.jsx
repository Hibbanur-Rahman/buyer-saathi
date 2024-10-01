import React, { useEffect } from "react";

const Profile = () => {
  useEffect(()=>{
    window.scrollTo(0,0);
},[])
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
          />
        </div>
        <div className="w-6/12 flex flex-col">
          <label htmlFor="city" className="font-regular text-lg">
            City
          </label>
          <input
            id="city"
            name="city"
            type="text"
            className="border-[1px] border-[#D0D5DD] rounded-xl py-2 px-3 my-2 outline-none placeholder:text-[#667085] placeholder:font-normal"
            placeholder="Enter City"
          />
        </div>
      </div>
      <div className="w-full flex gap-[20px] my-2">
        <div className="w-6/12 flex flex-col">
          <label htmlFor="LoremIpsum" className="font-regular text-lg">
            Lorem Ipsum
          </label>
          <input
            id="LoremIpsum"
            name="LoremIpsum"
            type="text"
            className="border-[1px] border-[#D0D5DD] rounded-xl py-2 px-3 my-2 outline-none placeholder:text-[#667085] placeholder:font-normal"
            placeholder="Enter Lorem Ipsum"
          />
        </div>
        <div className="w-6/12 flex flex-col">
          <label htmlFor="loremIpsum" className="font-regular text-lg">
            Lorem Ipsum
          </label>
          <input
            id="loremIpsum"
            name="loremIpsum"
            type="text"
            className="border-[1px] border-[#D0D5DD] rounded-xl py-2 px-3 my-2 outline-none placeholder:text-[#667085] placeholder:font-normal"
            placeholder="Enter Lorem Ipsum"
          />
        </div>
      </div>
      <div className="w-full flex gap-[20px] my-2">
        <div className="w-6/12 flex flex-col">
          <label htmlFor="LoremIpsum" className="font-regular text-lg">
            Lorem Ipsum
          </label>
          <input
            id="LoremIpsum"
            name="LoremIpsum"
            type="text"
            className="border-[1px] border-[#D0D5DD] rounded-xl py-2 px-3 my-2 outline-none placeholder:text-[#667085] placeholder:font-normal"
            placeholder="Enter Lorem Ipsum"
          />
        </div>
        <div className="w-6/12 flex flex-col">
          <label htmlFor="loremIpsum" className="font-regular text-lg">
            Lorem Ipsum
          </label>
          <input
            id="loremIpsum"
            name="loremIpsum"
            type="text"
            className="border-[1px] border-[#D0D5DD] rounded-xl py-2 px-3 my-2 outline-none placeholder:text-[#667085] placeholder:font-normal"
            placeholder="Enter Lorem Ipsum"
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
            />
            <label htmlFor="male" className="text-base cursor-pointer">
              Male
            </label>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center gap-[30px] my-3">
        <button className="px-10 py-2 rounded-lg bg-primary text-white text-base">
          Save Changes
        </button>
        <button className="px-10 py-2 rounded-lg bg-[#777777] text-white text-base">
          Discard Changes
        </button>
      </div>
    </div>
  );
};

export default Profile;
