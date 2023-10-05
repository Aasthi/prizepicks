import { useRef } from 'react';
import Icon from '../components/Icon.jsx';
import { useDispatch, useSelector } from "react-redux"; 
import { tabAction } from '../app/slices/currentTabSlice.js';
// import { useSelector } from "react-redux";

const tabs = [
  { name: "PGA", href: "#", current: true , icon:'iconoir:golf'},
  { name: "NBA1H", href: "#", current: false, icon:'material-symbols:sports-basketball-outline' },
  { name: "SOCCERR", href: "#", current: false, icon:'fluent:sport-soccer-16-regular' },
  { name: "VAL", href: "#", current: false, icon: 'mdi:alpha-v' },
  { name: "XFL", href: "#", current: false, icon:'solar:rugby-linear' },
  { name: "CSGO", href: "#", current: false, icon:'mdi:gun' },
  { name: "TENNIS", href: "#", current: false, icon: 'maki:tennis' },
  { name: "USFL", href: "#", current: false, icon:'solar:rugby-linear'  },
  { name: "TENNIS LIVE", href: "#", current: false, icon:'material-symbols:sports-tennis-outline-rounded' },
  { name: "NASCAR", href: "#", current: false, icon:'bxs:flag-checkered' },
  { name: "CRICKET", href: "#", current: false, icon: 'bx:cricket-ball' },
  { name: "COD", href: "#", current: false, icon: 'material-symbols:keyboard-double-arrow-up' },
  { name: "DOTA2", href: "#", current: false, icon:'ic:sharp-space-dashboard' },
  { name: "NFLSZN", href: "#", current: false, icon:'solar:rugby-linear' },
  { name: "AFL", href: "#", current: false , icon:'solar:rugby-linear'}, 
  { name: "AFL", href: "#", current: false , icon:'solar:rugby-linear'}, 
  { name: "AFL", href: "#", current: false , icon:'solar:rugby-linear'}, 
  { name: "AFL", href: "#", current: false , icon:'solar:rugby-linear'}, 
  { name: "AFL", href: "#", current: false , icon:'solar:rugby-linear'}, 
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
    const containerRef = useRef(null);
    const dispatch = useDispatch();


    const currentTab = useSelector((state) => state.currentTabSlice.tab);


    const handleScrollLeft = () => {
        const a = containerRef.current.scrollLeft -= 150; // Adjust the scroll distance as needed
        
      };
    
      const handleScrollRight = () => {
        containerRef.current.scrollLeft += 150; // Adjust the scroll distance as needed
      };


      function developFunc(index){
        dispatch(tabAction.setTab(index));
      }


  return (
    <div>
       

      {/*  Desktop  */}
      <div className=" relative sm:block   max-w-full overflow-hidden my-16">
      
        <nav
        ref={containerRef}
        id='scroll'
          className="flex   space-x-4 w-[96%]   mx-auto   overflow-x-auto flex-nowrap whitespace-nowrap  gap-2"
          aria-label="Tabs"
        >
          {/*  Arrows  */}

          <div className="h-6 w-6   mt-1.5 absolute left-0 top-0 flex  items-center justify-between">
            <svg
            onClick={handleScrollLeft}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#9ca3af"
              class="w-5 h-5 bg-gray-800 md:bg-transparent rounded-full  cursor-pointer"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </div>
          <div className="h-6 w-6  mt-1.5 absolute right-0 top-0 flex   items-center justify-between">
            <svg
            onClick={handleScrollRight}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#9ca3af"
              class="w-5 h-5 cursor-pointer bg-gray-800 rounded-full  md:bg-transparent"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>

          {tabs.map((tab, index) => (
            <div 
            onClick={() => developFunc(index)}
             className={classNames(
                currentTab === index
                  ? "bg-gray-100 text-gray-700"
                  : "text-gray-100 hover:bg-gray-100 hover:text-gray-700",
                "rounded-md h-16 w-24 text-sm  font-medium flex items-center justify-center flex-col px-2 cursor-pointer"
              )}  key={tab.name}>
                 <span className='' ><Icon icon={tab.icon} /></span>
            <a
             
              href={tab.href}
              
              aria-current={tab.current ? "page" : undefined}
            >
               
              {tab.name}
            </a>
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
}
