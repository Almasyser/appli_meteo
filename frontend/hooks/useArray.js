import {create} from 'zustand';
const useArray = create((set, get) =>({
	myArray: {},
	updateMyArray: (state)=>{
		if (typeof state !== 'object' || Array.isArray(state) || state === null){
			console.log("l'argument n'est pas un objet",typeof(state), state);
			return;
		}
		const copiedArray = {...state};
		console.log("Array mis à jour.");
		set({ myArray: copiedArray});
	},
	addToMyArray: (key, item) => {
		const current = get().myArray;
		set({ myArray: {...current, [key]: item} });
	},
	removeFromMyArray: (key) => {
		const current = get().myArray;
		const {[key]: removed, ...rest} = current;
		set({ myArray: rest});
		console.log("remtiré de Array",removed);
	},
  }));
export default useArray;