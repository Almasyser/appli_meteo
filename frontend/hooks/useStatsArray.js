import {create} from 'zustand';
const useStatsArray = create((set, get) =>({
    statsArray: {},
    updateStatsArray: (state)=>{
        if (typeof state !== 'object' || Array.isArray(state) || state === null){
            console.log("l'argument n'est pas un objet",typeof(state), state);
            return;
        }
        const copiedArray = {...state};
        console.log("Array mis à jour.");
        set({ statsArray: copiedArray});
    },
    addToStatsArray: (key, item) => {
        const current = get().statsArray;
        set({ statsArray: {...current, [key]: item} });
    },
    removeFromStatsArray: (key) => {
        const current = get().statsArray;
        const {[key]: removed, ...rest} = current;
        set({ statsArray: rest});
        console.log("remtiré de Array",removed);
    },
  }));
export default useStatsArray;