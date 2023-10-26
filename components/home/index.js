import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CategoryTabs from "./CategoryTabs.js";
import { tabAction } from "@/store/currentTabSlice.js";
import { character } from "@/utils/assets.js";
import Alert from "./Alert.js";
import Help from "./Help.js";
import { Group } from "./Group.js";
import { rewardDic } from "@/utils/constants.js";
import EntryCard from "../cards/EntryCard.js";

const tabs = [
  { name: "Board", href: "#", current: true },
  { name: "My Enteries", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Home = () => {
  const showPlayer = useSelector((state) => state.currentTabSlice.showPlayers);
  const AllPlayers = useSelector((state) => state.currentTabSlice.cards);
  const modal = useSelector((state) => state.currentTabSlice.modal);
  const [fee, setFee] = useState(0);

  const dispatch = useDispatch();

  return (
    <div className="py-6">
      <CategoryTabs />
      <div className="max-w-7xl mx-auto w-full  gap-8 flex relative md:px-0 px-4">
        <div
          className={
            showPlayer ? " float-left w-[100%] lg:w-[70%]" : "w-[100%]"
          }
        >
          <div className=" sm:block">
            <nav
              className="flex md:px-0 px-4 space-x-4 max-w-7xl border-b-4 border-b-[#5856D6] mx-auto items-center justify-center"
              aria-label="Tabs"
            >
              {tabs.map((tab, index) => (
                <a
                  key={index}
                  href={tab.href}
                  className={classNames(
                    tab.current
                      ? "font-bold  text-white"
                      : "text-gray-500 font-light hover:text-white",
                    "rounded-md px-3 py-2 font-medium text-3xl tracking-wide"
                  )}
                  aria-current={tab.current ? "page" : undefined}
                >
                  {tab.name}
                </a>
              ))}
            </nav>
          </div>
          <Alert />
          <Help />
          <Group />
        </div>
        <div
          className={
            showPlayer
              ? "w-[30%] float-right h-[700px] overflow-scroll  hidden lg:block   sticky -top-2 ring-1 ring-gray-500 mt-20 rounded-sm px-4 py-2 "
              : " w-[30%] hidden border mt-16 rounded-sm   py-2 relative"
          }
        >
          <div className="flex items-center justify-between ">
            <div className="flex items-center gap-2 relative">
              <h1 className="text-white text-md">Current Entry</h1>
              <h1 className="text-sm text-gray-500">
                {AllPlayers.length} Players Selected
              </h1>
            </div>

            <button
              onClick={() => dispatch(tabAction.clearCards())}
              className="text-[#f1c40f] font-bold"
            >
              clear
            </button>
          </div>

          <div className=" top-4 overflow-hidden my-16">
            <div className="sticky top-4 overflow-hidden grid gap-4">
              {AllPlayers.map((item, index) => (
                <EntryCard key={index} data={item} />
              ))}
            </div>
          </div>

          <div
            className={
              AllPlayers.length < 3
                ? "absolute -bottom-0 left-0 top- bg-black z-50 w-full px-4 py-4 text-white"
                : "sticky -bottom-2 left-0 bg-black z-50 w-full px-4 py-4 text-white"
            }
          >
            <div className="bg-indigo-700 hover:bg-indigo-500 cursor-pointer py-2 px-8 rounded-xl w-full text-center text-xl">Predict</div>
            <div className="flex my-3 flex-row justify-between">
              <div
                className="bg-gray-600 pl-3 pr-8 flex-col justify-start py-2 rounded-lg flex items-start"
              >
                <p>Entry</p>
                <input
                  type="text"
                  className="w-28 bg-transparent"
                  placeholder="$ 10"
                  onInput={e => setFee(e.target.value)}
                />
              </div>
              <div
                className="bg-indigo-600 pl-3 pr-8 flex-col justify-start py-2 rounded-lg flex items-start"
              >
                <p>To Win</p>
                <p>
                  ${" "}
                  {rewardDic[AllPlayers.length] * fee}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={
          AllPlayers.length <= 0 || modal === true
            ? "hidden"
            : "fixed lg:hidden bottom-4 px-8 w-full py-3 bg-indigo-500 flex items-center justify-between"
        }
      >
        <button className="text-white" disabled>
          {AllPlayers.length} Players Selected
        </button>
        <button className="flex items-center gap-4 text-wihte">
          <span
            className="text-white"
            onClick={() => dispatch(tabAction.toggleModal())}
          >
            Finalize Entry
          </span>{" "}
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </span>
        </button>
      </div>
      <div
        className={
          modal === false
            ? "text-white hidden h-screen overflow-auto bg-black min-w-full top-0 fixed left-0"
            : "text-white px-4 overflow-auto lg:hidden h-screen bg-black min-w-full top-0 fixed left-0"
        }
      >
        <div className="fixed left-0 bottom-0 bg-black border-t mt-8 border-gray-500 overflow-hidden z-50 w-full px-4 py-4 text-white">
          <div className="flex items-center mb-3 mt-6 gap-4">
            <div
              className="bg-gray-600 pl-3 pr-8 flex-col justify-start py-2 rounded-lg flex items-start"
              disabled
            >
              <p>Entry</p>
              <input
                type="text"
                className="w-24 bg-transparent"
                placeholder="$ 10"
                onChange={e => setFee(e.target.value)}
              />
            </div>
            <div
              className="bg-indigo-600 pl-3 pr-8 flex-col justify-start py-2 rounded-lg flex items-start"
              disabled
            >
              <p>To Win</p>
              <p>
                ${" "}
                {rewardDic[AllPlayers.length] * fee}
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 relative py-4">
          <h1
            className="text-white text-xl text-md px-4 py-2 bg-indigo-500 rounded-md"
            onClick={() => dispatch(tabAction.toggleModal())}
          >
            Close Modal
          </h1>
        </div>

        <div className="flex items-center justify-between relative my-4">
          <div className="flex items-center gap-2 relative">
            <h1 className="text-white text-md">Current Entry</h1>
            <h1 className="text-sm text-gray-500">
              {AllPlayers.length} Players Selected
            </h1>
          </div>

          <button
            onClick={() => dispatch(tabAction.clearCards())}
            className="text-[#f1c40f] font-bold"
          >
            clear
          </button>
        </div>

        <div className=" top-4 overflow-hidden mb-[50%]">
          <div className=" sticky top-4   overflow-hidden  grid gap-4">
            {AllPlayers.map((item, index) => (
              <EntryCard key={index} data={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
