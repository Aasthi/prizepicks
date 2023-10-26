import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { character } from "@/utils/assets";
import { tabAction } from "@/store/currentTabSlice";
import { teams } from "@/utils/constants";

export const Group = () => {
  const dispatch = useDispatch();

  const showPlayer = useSelector((state) => state.currentTabSlice.showPlayers);
  const cards = useSelector((state) => state.currentTabSlice.cards);

  function setData(item) {
    dispatch(tabAction.setCards(item));
  }
  return (
    <div
      className={
        showPlayer
          ? "grid lg:grid-cols-3 md:grid-cols-2  xl:grid-cols-3 gap-3"
          : "grid md:grid-cols-2 lg:grid-cols-4 gap-3"
      }
    >
      {teams.map((item, index) => {
        const hasIdenticalValues = cards.findIndex((card) =>
          card.id == item.id
        ) != -1;

        return (
          <div
            onClick={() => setData(item)}
            className={
              hasIdenticalValues
                ? "px-4  py-6   rounded-lg cursor-pointer bg-white"
                : "px-4  py-6   rounded-lg cursor-pointer bg-[#616161]"
            }
            key={index}
          >
            <div className="flex items-center  justify-between">
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill={hasIdenticalValues ? "red" : "blue"}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 5H0V24H4V5Z"
                  fill={hasIdenticalValues ? "gray" : "white"}
                />
                <path
                  d="M11 0H7V24H11V0Z"
                  fill={hasIdenticalValues ? "gray" : "white"}
                />
                <path
                  d="M18 16H14V24H18V16Z"
                  fill={hasIdenticalValues ? "gray" : "white"}
                />
                <path
                  d="M24 10H20V24H24V10Z"
                  fill={hasIdenticalValues ? "gray" : "white"}
                />
              </svg>
            </div>

            <div className="">
              <img src={character} alt="" className="w-20 h-auto mx-auto" />
              <h1
                className={
                  hasIdenticalValues
                    ? "text-gray-700 text-lg font-semibold text-center pt-3"
                    : "text-white text-lg font-semibold text-center pt-3"
                }
              >
                {item.name}
              </h1>

              <p
                className={
                  hasIdenticalValues
                    ? "text-gray-700 text-center text-sm font-light"
                    : "text-white text-center text-sm font-light"
                }
              >
                {item.team} - B
              </p>

              <p
                className={
                  hasIdenticalValues
                    ? "text-gray-700 text-center text-sm font-light py-2"
                    : "text-white text-center text-sm font-light py-2"
                }
              >
                {item.date} AM <br /> VS {item.opponent}
              </p>

              <div className="bg-black rounded-lg  flex items-center justify-between">
                <div className="flex items-center justify-center py-4 w-[50%]">
                  <h1 className="text-xl text-white font-bold">{item.point}</h1>
                </div>
                <div className="flex items-center justify-center py-4 w-[50%] border-l border-dashed	border-[#f1c40f]">
                  <h1 className="text-sm text-white">Runs</h1>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
