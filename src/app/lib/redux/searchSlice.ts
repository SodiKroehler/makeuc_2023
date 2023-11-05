import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import { useAppDispatch, useAppSelector } from "./hooks";



// export const joinRoom = createAsyncThunk('/game/joinRoom', async (arg, {getState}) => {
//   const state : any = getState();
//   const queryString = 'api/game/joinroom' 
//   const data = await fetch(queryString, {
//     method: "POST",
//     body: JSON.stringify({
//       nickname: state.gameReducer.nickname
//     })
//   }).then(r => r.json())

//   return data
// })


export interface Note {
    id: number,
    name: string, 
    body: string,
    desc: string
  }


export interface SearchState {
    results: Note[],
    keywords: string[],
    class: string[],
    school: string[],
    topic: string[]
};

const initState: SearchState = {
    results: [],
    keywords: [],
    class: [],
    school: [],
    topic: []
};

export const searchSlice = createSlice({
  name: 'search',
  initialState: initState,
  reducers: {
    addKeywordsQuery: (state, action: PayloadAction<string>) => {
      state.keywords.push(action.payload)
    }, 
    addSchoolQuery: (state, action: PayloadAction<string>) => {
      state.class.push(action.payload)
    }, 
    addTopicQuery: (state, action: PayloadAction<string>) => {
      state.school.push(action.payload)
    }, 
    addClassQuery: (state, action: PayloadAction<string>) => {
      state.topic.push(action.payload)
    }, 
  },
})

export const {
  addKeywordsQuery,
  addSchoolQuery,
  addTopicQuery,
  addClassQuery
} = searchSlice.actions;

export default searchSlice.reducer;


