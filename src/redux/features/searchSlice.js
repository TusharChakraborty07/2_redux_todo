import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
  name: "search",

  initialState: {
    query: "",
    activeTab: "photos",
    results: [],
    loding: false,
    error: null,
  },

  reducers: {
    setQuery(state, action) {
      state.query = action.payload;
    },
    setActiveTabs(state, action) {
      state.activeTab = action.payload;
    },
    setResults(state, action) {
      state.loding = false;
      state.results = action.payload;
    },
    setLoading(state, action) {
      state.loding = true;
      state.error = null;
    },
    setError(state, action) {
      state.error = action.payload;
      state.loding = false;
    },
    clearResult(state, action) {
      state.results = [];
    },
  },
});

export const {
  setQuery,
  setActiveTabs,
  setResults,
  setLoading,
  setError,
  clearResult,
} = searchSlice.actions;

export default searchSlice.reducer;
