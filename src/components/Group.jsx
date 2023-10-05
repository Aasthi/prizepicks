import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { tabAction } from "../app/slices/currentTabSlice";
import { v4 as uuidv4 } from 'uuid';
import kl from "../assets/kl.png";

const teams = [
    {
        id:uuidv4(),
      name: "Virat Kohli",
      team: "Royal Challengers Bangalore",
      opponent: "Mumbai Indians",
      date: "2022-05-01",
      inpVal:'one'
    },
    {
        id:uuidv4(),
      name: "Rohit Sharma",
      team: "Mumbai Indians",
      opponent: "Chennai Super Kings",
      date: "2022-05-02",
      inpVal:'two'
    },
    {
        id:uuidv4(),
      name: "MS Dhoni",
      team: "Chennai Super Kings",
      opponent: "Royal Challengers Bangalore",
      date: "2022-05-03",
      inpVal:'ten'
    },
    {
        id:uuidv4(),
      name: "Jasprit Bumrah",
      team: "Mumbai Indians",
      opponent: "Delhi Capitals",
      date: "2022-05-04",
      inpVal:'three'
    },
    {
        id:uuidv4(),
      name: "David Warner",
      team: "Sunrisers Hyderabad",
      opponent: "Kolkata Knight Riders",
      date: "2022-05-05",
      inpVal:'four'
    },
    {
        id:uuidv4(),
      name: "Kagiso Rabada",
      team: "Delhi Capitals",
      opponent: "Punjab Kings",
      date: "2022-05-06",
      inpVal:'five'
    },
    {
        id:uuidv4(),
      name: "KL Rahul",
      team: "Punjab Kings",
      opponent: "Rajasthan Royals",
      date: "2022-05-07",
      inpVal:'six'
    },
    {
        id:uuidv4(),
      name: "Andre Russell",
      team: "Kolkata Knight Riders",
      opponent: "Sunrisers Hyderabad",
      date: "2022-05-08",
      inpVal:'seven'
    },
    {
        id:uuidv4(),
      name: "AB de Villiers",
      team: "Royal Challengers Bangalore",
      opponent: "Chennai Super Kings",
      date: "2022-05-09",
      inpVal:'eight'
    },
    {
        id:uuidv4(),
      name: "Sanju Samson",
      team: "Rajasthan Royals",
      opponent: "Mumbai Indians",
      date: "2022-05-10",
      inpVal:'nine'
    }
  ]
  

export const Group = () => {
    const dispatch = useDispatch();
 

    const showPlayer = useSelector((state) => state.currentTabSlice.showPlayers);
    const cards = useSelector((state) => state.currentTabSlice.cards);
    const modal = useSelector((state) => state.currentTabSlice.toggleModal);
    const message = useSelector((state) => state.currentTabSlice.message);


    function setData(item){
      
        dispatch(tabAction.setCards(item));
        
        
        
    }
  return (
    <div className={showPlayer ? "grid lg:grid-cols-3 md:grid-cols-2  xl:grid-cols-3 gap-3" : "grid md:grid-cols-2 lg:grid-cols-4 gap-3"}>

        {
            teams.map((item) => {
                const hasIdenticalValues = cards.some((card) =>
          Object.keys(item).every((key) => item[key] === card[key])
        );


        console.log(hasIdenticalValues,'nice');
                return (
                    <div onClick={() => setData(item)} className={hasIdenticalValues ?  "px-4  py-6   rounded-lg cursor-pointer bg-white" : "px-4  py-6   rounded-lg cursor-pointer bg-[#616161]"}>
                <div className="flex items-center  justify-between">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                 
                    fill={hasIdenticalValues ? 'red' : 'blue'}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M4 5H0V24H4V5Z" fill={hasIdenticalValues ? 'gray' : 'white'} />
                    <path d="M11 0H7V24H11V0Z" fill={hasIdenticalValues ? 'gray' : 'white'} />
                    <path d="M18 16H14V24H18V16Z" fill={hasIdenticalValues ? 'gray' : 'white'} />
                    <path d="M24 10H20V24H24V10Z" fill={hasIdenticalValues ? 'gray' : 'white'} />
                  </svg>

                  {
                    hasIdenticalValues ? 
                    <input
                    id="bordered-checkbox-1"
                    type="checkbox"
                    checked
                    name="bordered-checkbox"
                    className="w-4 h-4 text-blue-600 bg-transparent border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                    : <input
                    id="bordered-checkbox-1"
                    type="checkbox"
                    
                    name="bordered-checkbox"
                    className="w-4 h-4 text-blue-600 bg-transparent border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  }
        
                  
                </div>
        
                <div className="">
                  <img src={kl} alt="" className="w-20 h-auto mx-auto" />
                  <h1 className={hasIdenticalValues ? "text-gray-700 text-lg font-semibold text-center pt-3" : "text-white text-lg font-semibold text-center pt-3"}>
                    {item.name}
                  </h1>
        
                  <p className={hasIdenticalValues ? "text-gray-700 text-center text-sm font-light" : "text-white text-center text-sm font-light"}>
                    {item.team} - B
                  </p>
        
                  <p className={hasIdenticalValues ? "text-gray-700 text-center text-sm font-light py-2" : "text-white text-center text-sm font-light py-2"}>
                    {item.date} AM <br /> VS {item.opponent}
                  </p>
        
                  <div className="bg-black rounded-lg  flex items-center justify-between">
                    <div className="flex items-center justify-center py-4 w-[50%]">
                      <h1 className="text-xl text-white font-bold">26.2</h1>
                    </div>
                    <div className="flex items-center justify-center py-4 w-[50%] border-l border-dashed	border-[#f1c40f]">
                      <h1 className="text-sm text-white">Runs</h1>
                    </div>
                    1
                  </div>
                </div>
              </div>
                )
 } )
        }
     
       
       

    </div>
  );
};
