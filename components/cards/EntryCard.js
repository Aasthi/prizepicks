import { tabAction } from "@/store/currentTabSlice";
import { character } from "@/utils/assets";
import { useDispatch } from "react-redux";

export default function EntryCard({
    data = {},
}) {
    const dispatch = useDispatch();

    return (
        <div className="p-2 bg-[#616161] flex items-center justify-between rounded-md relative">
            <svg
                onClick={() => dispatch(tabAction.deleteSingle(data.id))}
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
            <div className="w-1/4">
                <img className="w-20" src={character} alt="" />
            </div>
            <div className="w-1/2">
                <h1 className="text-semibold text-white">{data.name}</h1>
                <div className="flex items-center text-xs gap-2 text-gray-300">
                    <p className="text-sm text-gray-300">Cricket</p>
                    <p>{data.team}</p>
                </div>
                <p className="text-xs text-gray-300 ">{data.date}</p>
                <p className="text-xs text-gray-300"> vs {data.opponent}</p>
                <div className="bg-black rounded-lg my-2  flex items-center justify-between">
                    <div className="flex items-center justify-center py-2 w-[50%]">
                        <h1 className="text-sm text-white font-semibold">
                            {data.point}
                        </h1>
                    </div>
                    <div className="flex items-center justify-center py-2 w-[50%] border-l border-dashed	border-[#f1c40f]">
                        <h1 className="text-xs text-white">Points</h1>
                    </div>
                </div>
            </div>
            <div className="w-1/4">
                <ul className="mt-2">
                    <li className="grid grid-cols-1 rounded-md">
                        <div className="flex items-center px-2 cursor-pointer">
                            <label
                                className={`${data.choice == 0 ? "bg-orange-500" : "bg-white"}  items-center justify-between w-full px-3 py-1 text-black rounded-lg cursor-pointer`}
                                onClick={() => dispatch(tabAction.updateChoice({ id: data.id, choice: 0 }))}
                            >
                                More
                            </label>
                        </div>
                        <div className="flex items-center px-2 pt-2 cursor-pointer">
                            <label
                                className={`${data.choice == 1 ? "bg-orange-500" : "bg-white"}  items-center justify-between w-full px-3 py-1 text-black rounded-lg cursor-pointer`}
                                onClick={() => dispatch(tabAction.updateChoice({ id: data.id, choice: 1 }))}
                            >
                                Less
                            </label>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}
