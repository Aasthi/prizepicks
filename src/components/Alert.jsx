import { InformationCircleIcon } from "@heroicons/react/20/solid";

export default function Example() {
  return (
    <div className="max-w-7xl mx-auto py-4 md:px-0 px-4">
      <div className="rounded-md bg-[#616161] p-4">
        <div className="flex">
          <div className="flex-shrink-0">
             
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="black"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="black"
              className="h-5 w-5 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
              />
            </svg>
          </div>
          <div className="ml-3 flex-1 md:flex md:justify-between">
            <p className="text-sm text-white">
              Pick 2-6 players. Choose whether you think they will get MORE or
              LESS than their projection.
            </p>
             
          </div>
        </div>
      </div>
    </div>
  );
}
