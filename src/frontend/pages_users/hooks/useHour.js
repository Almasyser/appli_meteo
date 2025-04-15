import {create} from 'zustand';
const useHour = create((set) =>({
  hourCurrent: "12",
  dayCurrent: "1",
  updateHourCurrent: (state)=>set({hourCurrent: state}),
  updateDayCurrent: (state)=>set({dayCurrent: state})

})
);
export default useHour;