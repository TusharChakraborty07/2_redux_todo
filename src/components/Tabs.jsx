import React from "react";

const Tabs = () => {
  const tabs = ["photos", "videos"];
  return (
    <>
      <div className="flex justify-center gap-4 flex-wrap py-6 bg-gray-100">
        {tabs.map((items, id) => (
          <div key={id}>
            <button
              className="
            px-6 py-3
            bg-blue-500
            text-white
            rounded-xl
            shadow-md
            border
            hover:bg-green-500
            hover:text-white
            hover:scale-105
            transition-all
            duration-300
            hover:cursor-pointer
          "
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
