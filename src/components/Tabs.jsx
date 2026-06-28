import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveTabs } from "../redux/features/searchSlice";

const Tabs = () => {
  const dispatch = useDispatch();
  const tabs = ["photos", "videos"];

  const activeTab = useSelector((state) => state.search.activeTab);

  return (
    <>
      <div className="flex justify-center gap-4 flex-wrap py-6 bg-gray-100">
        {tabs.map((items, id) => (
          <div key={id}>
            <button
              onClick={() => dispatch(setActiveTabs(items))}
              className={`${activeTab == items ? "bg-green-500" : "bg-blue-500"}
              px-6 py-3            
              text-white
              rounded-xl
              shadow-md
              border
              hover:bg-green-500
              hover:text-white
              hover:scale-105
              transition-all
              duration-300
              hover:cursor-pointer`}
            >
              {items}
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Tabs;
