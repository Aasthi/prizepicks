import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CategoryTabs from "./CategoryTabs.js";
import { tabAction } from "@/store/currentTabSlice.js";
import { character } from "@/utils/assets.js";
import Alert from "./Alert.js";
import Help from "./Help.js";
import { Group } from "./Group.js";
import { rewardDic } from "@/utils/constants.js";

const tabs = [
  { name: "Board", href: "#", current: true },
  { name: "My Enteries", href: "#", current: false },
];

const memoryOptions = [
  { name: "More", inStock: true },
  { name: "Less", inStock: true },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Home = () => {
  const [mem, setMem] = useState(memoryOptions[2]);
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

        {/* */}
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
            <div className="   sticky top-4   overflow-hidden  grid gap-4">
              {AllPlayers.map((item, index) => (
                <div className="p-2 bg-[#616161] flex items-center justify-between rounded-md relative" key={index}>
                  <svg
                    onClick={() => dispatch(tabAction.deleteSingle(item.id))}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="white"
                    className="w-4 h-4 absolute top-2 right-2 cursor-pointer"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                  <div className="">
                    <img className="w-20 h-auto" src={character} alt="" />
                  </div>
                  <div className="">
                    <h1 className="text-semibold text-white">{item.name}</h1>
                    <div className="flex items-center text-xs gap-2 text-gray-300">
                      <p className="text-sm text-gray-300">Cricket</p>
                      <p>{item.team}</p>
                    </div>
                    <p className="text-xs text-gray-300 ">{item.date}</p>
                    <p className="text-xs text-gray-300"> vs {item.opponent}</p>
                    <div className="bg-black rounded-lg my-2  flex items-center justify-between">
                      <div className="flex items-center justify-center py-2 w-[50%]">
                        <h1 className="text-sm text-white font-semibold">
                          {item.point}
                        </h1>
                      </div>
                      <div className="flex items-center justify-center py-2 w-[50%] border-l border-dashed	border-[#f1c40f]">
                        <h1 className="text-xs text-white">Points</h1>
                      </div>
                    </div>
                  </div>

                  <div className="">
                    <ul className="mt-2">
                      <li className="grid grid-cols-1  sm:grid-cols-1  rounded-md">
                        <div className="flex items-center px-2 gap-1 cursor-pointer">
                          <input
                            key="one"
                            value="one"
                            type="radio"
                            name={item.date}
                            id={item.date}
                            className="hidden peer"
                          />
                          <label
                            className="inline-flex items-center justify-between w-full px-3 py-1 peer-checked:bg-orange-500 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-white peer-checked:border-orange-600 peer-checked:text-white hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                            htmlFor={item.date}
                          >
                            More
                          </label>
                        </div>
                        <div className="flex items-center px-2 gap-2 pt-2 cursor-pointer">
                          <input
                            key="one"
                            value="one"
                            type="radio"
                            name={item.date}
                            id={item.name}
                            className="peer hidden"
                          />
                          <label
                            className="inline-flex items-center justify-between w-full px-3 py-1 peer-checked:bg-orange-500 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-white peer-checked:border-orange-600 peer-checked:text-white hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                            htmlFor={item.name}
                          >
                            Less
                          </label>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className={
              AllPlayers.length < 3
                ? "    absolute -bottom-0 left-0 top- bg-black z-50 w-full px-4 py-4 text-white"
                : "    sticky -bottom-2 left-0 bg-black z-50 w-full px-4 py-4 text-white"
            }
          >
            <div className="flex items-center my-3 gap-4">
              <div
                className="bg-gray-600 pl-3 pr-8 flex-col justify-start py-2 rounded-lg flex items-start"
                disabled
              >
                <p>Entry</p>
                <input
                  type="text"
                  className="w-24 bg-transparent"
                  placeholder="$ 10"
                  onInput={e => setFee(e.target.value)}
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

      {/*  */}

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
          <div className="   sticky top-4   overflow-hidden  grid gap-4">
            {AllPlayers.map((item, index) => (
              <div className="p-2 bg-[#616161] flex items-center justify-between rounded-md relative" key={index}>
                <svg
                  onClick={() => dispatch(tabAction.deleteSingle(item.id))}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="white"
                  className="w-4 h-4 absolute top-2 right-2 cursor-pointer"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                <div className="">
                  <img className="w-20 h-auto" src={character} alt="" />
                </div>
                <div className="">
                  <h1 className="text-semibold text-white">{item.name}</h1>
                  <div className="flex items-center text-xs gap-2 text-gray-300">
                    <p className="text-sm text-gray-300">NBA</p>
                    <p>{item.team}</p>
                  </div>
                  <p className="text-xs text-gray-300 ">{item.date}</p>
                  <p className="text-xs text-gray-300"> vs {item.opponent}</p>
                  <div className="bg-black rounded-lg my-2  flex items-center justify-between">
                    <div className="flex items-center justify-center py-2 w-[50%]">
                      <h1 className="text-sm text-white font-semibold">
                        {item.point}
                      </h1>
                    </div>
                    <div className="flex items-center justify-center py-2 w-[50%] border-l border-dashed	border-[#f1c40f]">
                      <h1 className="text-xs ml-2 text-white">Points</h1>
                    </div>
                  </div>
                </div>

                <div className="">
                  <ul value={mem} onChange={setMem} className="mt-2">
                    <li className="grid grid-cols-1  sm:grid-cols-1 ring-1 ring-gray-500   rounded-md">
                      <div className="">
                        <label htmlFor={item.date}>user</label>
                        <input
                          key="one"
                          value="one"
                          type="radio"
                          name={item.date}
                          id={item.date}
                        />
                      </div>
                      <div className={item.date}>
                        <label htmlFor={item.name}>New Use</label>
                        <input
                          key="one"
                          value="one"
                          type="radio"
                          name={item.date}
                          id={item.name}
                        />
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
