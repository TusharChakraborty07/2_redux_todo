import React, { useEffect } from "react";
import { fetchPhotos, fetchVideos } from "../api/mediaApi";
import {
  setActiveTabs,
  setQuery,
  setLoading,
  setError,
  setResults,
} from "../redux/features/searchSlice";
import { useDispatch, useSelector } from "react-redux";

const ResultGrid = () => {
  const dispatch = useDispatch();

  const { query, activeTab, results, loding, error } = useSelector(
    (store) => store.search,
  );

  useEffect(() => {
    const getData = async () => {
      try {
        dispatch(setLoading());

        let data;

        if (activeTab === "photos") {
          const res = await fetchPhotos(query);
          data = res.photos;
          console.log(data);
        } else {
          const res = await fetchVideos(query);
          data = res.videos;
          console.log(data);
        }

        dispatch(setResults(data));
      } catch (err) {
        dispatch(setError(err.message));
      }
    };

    if (query) {
      getData();
    }
  }, [query, activeTab]);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* <h1 className="text-xl font-bold mb-6 text-center">Results</h1> */}

      {/* Loading */}
      {loding && <p className="text-center text-gray-600 mt-10">Loading...</p>}

      {/* Error */}
      {error && <p className="text-center text-red-500 mt-10">{error}</p>}

      {/* Empty State */}
      {!loding && !error && (!results || results.length === 0) && (
        <div className="min-h-[200px] flex flex-col items-center justify-center text-center">
          <p className="text-gray-500 text-lg font-medium">
            Search what you want 🔍
          </p>

          <p className="text-gray-400 text-sm mt-2">
            Try typing something like "nature", "car", or "technology"
          </p>
        </div>
      )}

      {/* Results Grid */}
      {!loding && !error && results?.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {results.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:scale-105 transition"
            >
              {/* Photo */}
              {activeTab === "photos" ? (
                <img
                  src={item.src?.medium}
                  alt={item.photographer}
                  className="w-full h-48 object-cover"
                />
              ) : (
                /* Video */
                <video
                  src={item.video_files?.[0]?.link}
                  controls
                  className="w-full h-48 object-cover"
                />
              )}

              <div className="p-3">
                <p className="text-sm font-semibold text-gray-700">
                  {activeTab === "photos" ? item.photographer : item.user?.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ResultGrid;
