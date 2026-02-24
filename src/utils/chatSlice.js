import { createSlice } from "@reduxjs/toolkit";
import { live_chat_count } from "./constants";
const chatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [],
  },
  reducers: {
    addMessage: (state, action) => {
      state.messages.splice(live_chat_count,1);
      state.messages.push(action.payload);
    }
    },  
});

export const { addMessage } = chatSlice.actions;
export default chatSlice.reducer;