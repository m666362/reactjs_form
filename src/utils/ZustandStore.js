// Add Packages
// yarn add zustand @material-ui/core @material-ui/icons immer react-tracked

import { produce } from "immer";
import create from "zustand";
import { devtools, persist } from "zustand/middleware";
import { createTrackedSelector } from "react-tracked";

export const immer = (config) => (set, get) =>
    config((fn) => set(produce(fn)), get);

let store = (set) => ({
    counter: 0,
    setCounter: (num)=> set((state)=>{
        state.counter = state.counter + num;
    }),
    formOutput: {},
    setFormOutput: (object)=> set((state)=>{
        state.formOutput = object;
    }),
});

// store = persist(store, {name: 'user_settings'})
store = immer(store);
store = devtools(store)
// store = persist(store, {name: 'user_setting3'})

const useStore = create(store);
const useTrackedStore = createTrackedSelector(useStore);
export default useTrackedStore;

/**
 * How to use in any Component
 *
 * import useTrackedStore from 'store_path'
 * here useTrackedStore is what we export default
 *
 * insede the function use
 *
 * const state = useTrackedStore()
 *
 * then you can use state.moduleDatas or state.setModuleDatas anywhere you want
 */
