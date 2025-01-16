import { createSlice } from '@reduxjs/toolkit';
import { TypeEvent } from '../../types/types';  
import { TogetherEvents } from '../../../BaseDeDatoFalsa/BDEvents';

const initialState = {
  events: [
    {
      id: 1,
      nameEvent: "",
      typeEvent: TypeEvent.None,
      date: "",
      hourTime: "",
      location: "", 
      ubicacion: "",
      guest: [""],
    },
  ],
};

const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    addEvent: (state, action) => {
      state.events.push(action.payload);
    },
    editEvent: (state, action) => {
      const { id, updatedEvent } = action.payload;
      const index = state.events.findIndex(event => event.id === id);
      if (index !== -1) {
        state.events[index] = { ...state.events[index], ...updatedEvent };
      }
    },
    deleteEvent: (state, action) => {
      state.events = state.events.filter(event => event.id !== action.payload);
    },
    listEvents: (state) => {
      return state.events;
    },
  },
});

export const { addEvent, editEvent, deleteEvent, listEvents } = eventsSlice.actions;
export default eventsSlice.reducer;
