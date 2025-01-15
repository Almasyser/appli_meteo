import {create} from 'zustand';
export const useHour = create((set) =>({
  hourCurrent: "12",
  updateHourCurrent: (state)=>set({hourCurrent: state})

})
);