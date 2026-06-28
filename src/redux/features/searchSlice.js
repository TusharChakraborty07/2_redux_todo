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
      state.query = action.pay;
    },
    setActiveTabs(state, action) {
      state.activeTab = action.pay;
    },
    setResults(state, action) {
      state.loding = false;
      state.results = action.pay;
    },
    setLoading(state, action) {
      state.loding = true;
      state.error = null;
    },
    setError(state, action) {
      state.error = action.pay;
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
