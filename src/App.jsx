import React from "react";
import { fetchPhotos, fetchVideos } from "./api/mediaApi";
import SearchBar from "./components/SearchBar";
import Tabs from "./components/Tabs";

const App = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-100 p-6">
        {/* Search */}
        <div className="mb-8">
          <SearchBar />
        </div>

        <div className="">
          <Tabs />
        </div>
      </div>
    </>
  );
};

export default App;
