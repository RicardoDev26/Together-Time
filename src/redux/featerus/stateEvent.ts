import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";


export enum StateEvent {
    Active = "active",
    Inactive = "inactive"
}


export const stateEventSlice = createSlice({
    name: "stateEvent",
    initialState: {
        eventState: StateEvent.Active
    },
    reducers: {
        setStateEvent: (state, action: PayloadAction<StateEvent>) => {
            state.eventState = action.payload;
        }
    }
})

export const { setStateEvent } = stateEventSlice.actions
export default stateEventSlice.reducer     
 