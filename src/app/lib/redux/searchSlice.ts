import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import { useAppDispatch, useAppSelector } from "./hooks";



export const addKeywordsQueryThunk = createAsyncThunk('/search/addKeywordsQueryThunk', async (arg, {getState}) => {
  const state : any = getState();
  const queryString = 'api/getNotes/userID=' + state.userID + '&keywords=' + state.keywords;
  const data = await fetch(queryString, {
    method: "GET",
  }).then(r => r.json())
  return data
})
export const addSchoolQueryThunk = createAsyncThunk('/search/addSchoolQueryThunk', async (arg, {getState}) => {
  const state : any = getState();
  const queryString = 'api/getNotes/userID=' +  state.userID + '&schoolID=' + state.school;
  const data = await fetch(queryString, {
    method: "GET",
  }).then(r => r.json())
  return data
})
export const addTopicQueryThunk = createAsyncThunk('/search/addTopicQueryThunk', async (arg, {getState}) => {
  const state : any = getState();
  const queryString = 'api/getNotes/userID=' +  state.userID + '&schoolID=' + state.school + '&topicID=' + state.topic;
  const data = await fetch(queryString, {
    method: "GET",
  }).then(r => r.json())
  return data
})
export const addClassQueryThunk = createAsyncThunk('/search/addClassQueryThunk', async (arg, {getState}) => {
  const state : any = getState();
  const queryString = 'api/getNotes/userID=' +  state.userID + '&schoolID=' + state.school + '&topicID=' + state.topic + '&classID='+ state.class;
  const data = await fetch(queryString, {
    method: "GET",
  }).then(r => r.json())
  return data
})


export interface Note {
    id: number,
    name: string, 
    body: string,
    desc: string
  }
const loading: Note = {
    id: 0,
    name: "Loading", 
    body: "Loading",
    desc: "Loading"
  }


export interface SearchState {
    userID: String,
    results: Note[],
    keywords: string[],
    class: string,
    school: string,
    topic: string,
    selectedNote: number
};

const initState: SearchState = {
    userID: "",
    results: [],
    keywords: [],
    class: '',
    school: '',
    topic: '',
    selectedNote: 0 
};

export const searchSlice = createSlice({
  name: 'search',
  initialState: initState,
  reducers: {
    addKeywordsQuery: (state, action: PayloadAction<string>) => {
      state.keywords.push(action.payload)
      addKeywordsQueryThunk()
    }, 
    addSchoolQuery: (state, action: PayloadAction<string>) => {
      state.school = action.payload
      addSchoolQueryThunk()
    }, 
    addTopicQuery: (state, action: PayloadAction<string>) => {
      state.topic = action.payload
      addTopicQueryThunk()
    }, 
    addClassQuery: (state, action: PayloadAction<string>) => {
      state.class = action.payload
      addClassQueryThunk()
    }, 
  },
  extraReducers(builder) {
    builder
      .addCase(addKeywordsQueryThunk.pending, (state, action) => {
        state.results = [loading]
      })
      .addCase(addKeywordsQueryThunk.fulfilled, (state, action) => {
        state.results = action.payload
      })
      .addCase(addSchoolQueryThunk.fulfilled, (state, action) => {
        state.results = action.payload
      })
      .addCase(addTopicQueryThunk.fulfilled, (state, action) => {
        state.results = action.payload
      })
      .addCase(addClassQueryThunk.fulfilled, (state, action) => {
        state.results = action.payload
      })
  }
})

export const {
  addKeywordsQuery,
  addSchoolQuery,
  addTopicQuery,
  addClassQuery
} = searchSlice.actions;

export default searchSlice.reducer;


