import {create} from 'zustand';
export const useHour = create((set) =>({
  hourCurrent: "12",
  dayCurrent: "1",
  updateHourCurrent: (state)=>set({hourCurrent: state}),
  updateDayCurrent: (state)=>set({dayCurrent: state})

})
);