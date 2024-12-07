import { configureStore } from "@reduxjs/toolkit";
import stateEventReducer from "./featerus/stateEvent";
import stateEvent, { stateEventSlice } from "./featerus/stateEvent";
import userReducer from "./Slice/UserSlice"


export const store = configureStore({
    reducer: {
        stateEvent: stateEventReducer,
        user: userReducer,
    }
})

export type AppDispach = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>;
