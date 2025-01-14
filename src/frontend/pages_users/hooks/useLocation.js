import {create} from 'zustand';
export const useLocation = create((set) =>({
    city_code: "Toulouse",
    department_code: "31",
    department_name: "Haute-Garonne",
    region_name: "Occitanie",
    latitude: "55.12",
    longitude: "45.25",
    visible: false,
    updateCity_code: (state)=>set({city_code: state}),
    updateDepartment_code: (state)=>set({department_code: state}),
    updateDepartment_name: (state)=>set({department_name: state}),
    updateRegion_name: (state)=>set({region_name: state}),
    updateLatitude: (state)=>set({latitude: state}),
    updateLongitude: (state)=>set({longitude: state}),
    setVisible: (state) => ({visible: state})
  }));
  
