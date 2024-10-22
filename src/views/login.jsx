import React, { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import googleLogo from "../assets/images/google-logo.svg";
import appleLogo from "../assets/images/apple-logo.svg";
import toast from "react-hot-toast";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { handleOpenLoginModal, login } from "../redux/slices/auth/authSlice";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch=useDispatch();
  const isOpenLoginModal=useSelector((state)=>state.auth.openLoginModal);
 
  const [deviceName, setDeviceName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef([]);
  const [isOtpShow, setIsOtpShow] = useState(false);
  const [otpLoader, setOtpLoader] = useState(false);
  const [verifyLoader, setVerifyLoader] = useState(false);

  // Handle change in OTP input fields
  const handleChange = (e, index) => {
    const value = e.target.value;

    // Update OTP state
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to the next input field if the current input is filled
    if (value && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  // Handle backspace to move to the previous input field
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  // handle login
  const handleLogin = async (e) => {
    setVerifyLoader(true);
    e.preventDefault();
    let body;
    if (email) {
      body = {
        email: email,
        otp: otp.join(""),
        device_name: deviceName,
      };
    } else if (mobileNumber) {
      body = {
        mobile: mobileNumber,
        otp: otp.join(""),
        device_name: deviceName,
      };
    }
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/auth/login`,
        body
      );
      if (response.status === 200) {
        setVerifyLoader(false);
        dispatch(handleOpenLoginModal(false));
        dispatch(login(response.data.data))
        localStorage.setItem("access_token",response.data.data.token)
        toast.success("Login Successfully");
        navigate("/");
      }
    } catch (error) {
      setVerifyLoader(false);
      console.log("Error to failed login:", error);
      toast.error(error.response?.data?.message);
    }
  };

  // handle get device name
  const getDeviceName = () => {
    const userAgent = navigator.userAgent.toLowerCase();
    return userAgent;
    console.log("user agent:",userAgent);
    // if (/android/.test(userAgent)) {
    //   return "Android Device";
    // } else if (/iphone|ipad|ipod/.test(userAgent)) {
    //   return "iOS Device";
    // } else if (/windows phone/.test(userAgent)) {
    //   return "Windows Phone";
    // } else if (/mac/.test(userAgent)) {
    //   return "Mac Device";
    // } else if (/windows/.test(userAgent)) {
    //   return "Windows Device";
    // } else if (/linux/.test(userAgent)) {
    //   return "Linux Device";
    // } else {
    //   return "Unknown Device";
    // }
  };

  //handle resend otp
  const handleResendOtp = async () => {
    setOtpLoader(true);
    let body;
    if (!email) {
      body = {
        mobile: mobileNumber,
      };
    } else if (!mobileNumber) {
      body = {
        email: email,
      };
    }
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/auth/request-otp/login`,
        body
      );
      if (response.status === 200) {
        setIsOtpShow(true);
        toast.success("OTP sent successfully");
        setOtpLoader(false);
      }
    } catch (error) {
      console.log("Error in resend the otp:", error);
      toast.error("Failed to Resend the Otp");
      setOtpLoader(false);
    }
  };

  //handle change input value
  const handleChangeInputValue = (e) => {
    const value = e.target.value;
    setInputValue(value);

    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Regular expression for phone number validation (international and simple 10-digit)
    const phoneRegex = /^\+?[1-9]\d{1,14}$|^[0-9]{10}$/;

    if (emailRegex.test(value)) {
      setEmail(value);
      setMobileNumber(""); // Clear phone if it's a valid email
    } else if (phoneRegex.test(value)) {
      setMobileNumber(value);
      setEmail(""); // Clear email if it's a valid phone
    } else {
      setEmail(""); // Clear if neither
      setMobileNumber("");
    }
  };

  //handle set otp screen
  const handleSetOtpScreen = () => {
    if (email || mobileNumber) {
      handleResendOtp();
      // if(!otpLoader){
      //   setIsOtpShow(true);
      // }
    } else {
      toast.error("Please enter your email or mobile number");
    }
  };

  useEffect(() => {
    setDeviceName(getDeviceName());
  }, []);
  return (
    <div className="w-full flex flex-col ">
      {!isOtpShow ? (
        <>
          <p className="text-white text-2xl font-semibold poppins-semibold">
            Login or Signup
          </p>
          <p className="text-white text-sm my-3 font-thin poppins-extralight">
            We will send on SMS to verify
          </p>
          <div className="w-full flex p-3 py-8 items-center justify-center shadow-2xl rounded-3xl bg-white ">
            <div className="w-9/12 flex flex-col justify-center items-center py-2">
              <div className="w-full relative mb-6">
                <label
                  htmlFor=""
                  className="text-black text-sm absolute left-[20px] top-[-10px] px-3 bg-white poppins-regular"
                >
                  Enter phone or email
                </label>
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => handleChangeInputValue(e)}
                  className="py-3 px-3 border-2 w-full rounded-2xl border-primary outline-none focus:outline-none poppins-regular"
                />
              </div>

              <p className="text-center poppins-regular text-black my-4">
                Or continue with social Account
              </p>
              <div className="flex justify-center items-center  gap-[20px]">
                <img src={googleLogo} alt="" className="h-[60px] w-[60px] " />
                <img src={appleLogo} alt="" className="h-[55px] w-[55px]" />
              </div>
              {otpLoader ? (
                <button
                  className="bg-[#F07B3F] text-white rounded-lg w-full py-2 mt-6 cursor-not-allowed"
                  disabled
                >
                  Sending otp...
                </button>
              ) : (
                <button
                  className="bg-[#F07B3F] text-white rounded-lg w-full py-2 mt-6"
                  onClick={() => {
                    handleSetOtpScreen();
                  }}
                >
                  continue
                </button>
              )}
            </div>
          </div>
        </>
      ) : (
        <>
          <p className="text-white text-2xl font-semibold poppins-semibold mb-1">
            Verify Code
          </p>
          {email && (
            <p className="text-white text-sm font-thin mb-2 poppins-extralight">
              check message email at {email}
            </p>
          )}

          {mobileNumber && (
            <p className="text-white text-sm font-thin mb-2 poppins-extralight">
              check message {mobileNumber}
            </p>
          )}

          <div className="bg-white rounded-3xl w-full flex justify-center items-center pb-8">
            <form
              className="w-8/12 flex flex-col justify-center items-center mt-10"
              onSubmit={(e) => handleLogin(e)}
            >
              <div className="flex items-center justify-center gap-3">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    type="text"
                    placeholder="-"
                    className="text-[#3A3A3A] border w-14 h-14 text-center text-2xl font-semibold text-slate-900 bg-[#F6F6F6] hover:border-slate-200 appearance-none rounded-xl p-4 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 placeholder:font-medium placeholder:text-3xl"
                    maxLength="1"
                    value={digit}
                    onChange={(e) => handleChange(e, index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    ref={(el) => (inputRefs.current[index] = el)}
                  />
                ))}
              </div>

              <p className="mt-8 text-gray-500 text-center">
                Didn't receive OTP?
              </p>
              <p
                className="underline text-primary text-center font-semibold"
                onClick={handleResendOtp}
              >
                Resend Code
              </p>
              {verifyLoader ? (
                <button
                  disabled
                  className="bg-[#F07B3F] text-white rounded-lg w-9/12 py-2 mt-6 cursor-not-allowed"
                >
                  Verifying ...
                </button>
              ) : (
                <button
                  type="submit"
                  className="bg-[#F07B3F] text-white rounded-lg w-9/12 py-2 mt-6"
                >
                  Verify
                </button>
              )}
            </form>
          </div>
        </>
      )}
    </div>
  );
};

export default Login;
