import { configureStore } from "@reduxjs/toolkit";
import stateEventReducer from "./featerus/stateEvent";
import stateEvent, { stateEventSlice } from "./featerus/stateEvent";
import userReducer from "./Slice/UserSlice"
import eventsReducer from "./Slice/EventSlice"


export const store = configureStore({
    reducer: {
        stateEvent: stateEventReducer,
        user: userReducer,
        event: eventsReducer
    }
})

export type AppDispach = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>;
