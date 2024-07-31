import React from "react";
import BG from "../assets/BG.png";
import Dots from "../assets/Three-Dots.svg";
import WA from "../assets/WA.png";
import Logo from "../assets/Logo.png";
import GitHub from "../assets/GitHub.png";
import Facebook from "../assets/Facebook.png";
import Instagram from "../assets/Instagram.png";
import Youtube from "../assets/Youtube2.png";
import X from "../assets/X.png";
import LinkedIn from "../assets/LinkedIn.png";
import "./Home.css";

function Home() {
  return (
    <>
      <div className="mt-[0px] min-w-full min-h-[100vh] text-white">
        <div className="max-h-[100vh] fixed justify-center items-center overflow-hidden">
          <img
            src={BG}
            alt=""
            className="BG-Image min-w-[70%] max-w-[70%] mx-auto mt-[-14vh] -z-50 items-center opacity-[8%]"
          />
        </div>
        <div className="p-10 fixed outfit-font w-full h-[100vh]">
          <div className="Header grid grid-cols-2 text-[13px] justify-between w-full px-[3%] mx-auto bottom-12">
            <a
              href="tel:9944500207"
              className="mb-1 flex gap-2.5  text-green-400 font-medium"
            >
              <img src={WA} alt="" className="w-7 mt-[-2px]" />
              <p className="text-white mr-[-4px]">+91</p> 99445 00207
            </a>
            <p className="flex gap-2 text-green-400">
              <a
                target="blank"
                href="https://chat.whatsapp.com/KHGwEpyP5CZ1zKCBkrBmdX"
                className="text-white"
              >
                Group
              </a>{" "}
              |{" "}
              <a
                target="blank"
                href="https://chat.whatsapp.com/EvJARTNhKuI7pkLyowsJBN"
                className="text-white"
              >
                Community
              </a>
            </p>
          </div>
          <h1 className="Title text-[70px] mt-10 text-white justify-center items-center text-center font-semibold">
            <div className="max-w-[250px] mx-auto max-h-[165px] mt-[-90px] overflow-hidden">
              <img src={Logo} alt="" className="" />
            </div>
            TuneUp Technologies
          </h1>
          <p className="flex justify-center items-center text-center">
            <p className="text-neutral-400 mr-[3px]">Impossible</p> TO I
            <p className="text-sky-500">'</p>m Possible
          </p>
          <div className="Grid mt-10 w-[70%] z-50 opacity-65 mx-auto">
            <div className="grid grid-cols-2">
              <a
                target="blank"
                href="https://www.linkedin.com/company/tuneup-technologies/"
                className="cursor-pointer opacity-100"
                width={25}
              >
                <div className="bg-neutral-700 mt-0 justify-between flex w-[90%] min-h-[60px] p-5 px-5 rounded-lg mx-auto">
                  <h1>LinkedIn</h1>

                  <img
                    src={LinkedIn}
                    alt=""
                    className="cursor-pointer opacity-100"
                    width={25}
                  />
                </div>
              </a>{" "}
              <a
                target="blank"
                href="https://www.instagram.com/tuneup_technologies/"
                className="cursor-pointer opacity-100"
                width={25}
              >
                <div className="bg-neutral-700 mt-0 justify-between flex w-[90%] min-h-[60px] p-5 px-5 rounded-lg mx-auto">
                  <h1>Instagram</h1>
                  <img
                    src={Instagram}
                    alt=""
                    className="cursor-pointer opacity-100"
                    width={25}
                  />
                </div>
              </a>{" "}
              <a
                target="blank"
                href="https://github.com/TuneUp-Dev"
                className="cursor-pointer opacity-100"
                width={25}
              >
                <div className="bg-neutral-700 mt-3 justify-between flex w-[90%] min-h-[60px] p-5 px-5 rounded-lg mx-auto">
                  <h1>GitHub</h1>
                  <img
                    src={GitHub}
                    alt=""
                    className="cursor-pointer opacity-100"
                    width={25}
                  />
                </div>
              </a>{" "}
              <a
                target="blank"
                href="https://www.facebook.com/profile.php?id=61560292400927"
                className="cursor-pointer opacity-100"
                width={25}
              >
                <div className="bg-neutral-700 mt-3 justify-between flex w-[90%] min-h-[60px] p-5 px-5 rounded-lg mx-auto">
                  <h1>Facebook</h1>
                  <img
                    src={Facebook}
                    alt=""
                    className="cursor-pointer opacity-100"
                    width={25}
                  />
                </div>
              </a>{" "}
              <a
                target="blank"
                href="https://x.com/TuneupTechno"
                className="cursor-pointer opacity-100"
                width={25}
              >
                <div className="bg-neutral-700 mt-3 justify-between flex w-[90%] min-h-[60px] p-5 px-5 rounded-lg mx-auto">
                  <h1>Twitter</h1>{" "}
                  <img
                    src={X}
                    alt=""
                    className="cursor-pointer opacity-100"
                    width={25}
                  />
                </div>
              </a>{" "}
              <a
                target="blank"
                href="https://www.youtube.com/@TuneUpedu"
                className="cursor-pointer opacity-100"
                width={25}
              >
                <div className="bg-neutral-700 mt-3 justify-between flex w-[90%] min-h-[60px] p-5 px-5 rounded-lg mx-auto">
                  <h1>Youtube</h1>
                  <img
                    src={Youtube}
                    alt=""
                    className="cursor-pointer opacity-100"
                    width={25}
                  />
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="Footer-Main fixed flex justify-between w-full px-[3%] mx-auto bottom-12">
          <a
            href="tel:9944500207"
            className="text-[16px] mb-1 flex gap-2.5 text-green-400 font-medium"
          >
            <img src={WA} alt="" className="w-7 mt-[-2px]" />
            <p className="text-white mr-[-4px]">+91</p> 99445 00207
          </a>
          <p>
            <a
              target="blank"
              href="https://tuneuptech.in"
              className="opacity-50 ml-20 mx-auto"
            >
              tuneuptech.in
            </a>
          </p>
          <p className="flex gap-2 text-green-400">
            Whatsapp{" "}
            <a
              target="blank"
              href="https://chat.whatsapp.com/KHGwEpyP5CZ1zKCBkrBmdX"
              className="text-white"
            >
              Group
            </a>{" "}
            |{" "}
            <a
              target="blank"
              href="https://chat.whatsapp.com/EvJARTNhKuI7pkLyowsJBN"
              className="text-white"
            >
              Community
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export default Home;
