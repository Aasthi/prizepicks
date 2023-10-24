import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { tabAction } from "../app/slices/currentTabSlice";
const Help = () => {
  const [input , setInput] = useState('');

  const dispatch = useDispatch();

function setGrid(){

  dispatch(tabAction.setShowPlayerss());
  // alert('cool', showPlayers)
}


function onChange(event) {
  setInput(event.target.value);
  dispatch(tabAction.onChangeFunc(input));
}
 


 

  return (
    <div className="mx-auto max-w-7xl px-4   py-12 flex md:items-center md:justify-between justify-center items-center flex-col md:flex-row gap-x-4 gap-y-8">
      <div className="flex items-center justify-start gap-4   ">
        <div className=" text-[#F1C40F] text-sm text-center border-l-[#F1C40F]">
          HELP CENTER
        </div>
        <div className=" text-[#F1C40F] text-sm text-center border-l border-l-[#F1C40F] pl-4">
          HOW TO PLAY
        </div>
        <div className=" text-[#F1C40F] text-sm text-center border-l pl-4 border-l-[#F1C40F]">
          SCORING CHART
        </div>
      </div>

      <div className="flex items-center gap-4 ">
        <div>
          <div className="relative  rounded-3xl   w-80 shadow-sm bg-[#616161]">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="h-5 w-5 text-gray-100"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </div>
            <input
              type="email"
              name="email"
              id="email"
              onChange={onChange}
              className="block w-full rounded-lg border-0 py-1.5 pl-10 text-white bg-[#616161]     placeholder:text-gray-100  focus:outline-none  sm:text-sm sm:leading-6"
              placeholder='Search'
            />
          </div>
        </div>

        <button className="px-6 py-2.5 rounded-full  bg-[#616161]" onClick={setGrid}>
          <svg
            width="18"
            height="16"
            viewBox="0 0 18 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 8.41176H3.07541C3.10967 8.41176 3.14155 8.39422 3.15988 8.36528L7.69676 1.20414C7.74445 1.12885 7.85937 1.14886 7.87882 1.23584L10.9016 14.7542C10.9213 14.8426 11.0389 14.8613 11.0851 14.7835L14.8405 8.4607C14.8585 8.43036 14.8912 8.41176 14.9265 8.41176H18"
              stroke="white"
              stroke-width="2"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Help;
