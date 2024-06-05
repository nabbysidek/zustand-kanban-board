import { create } from "zustand";

const store = (set) => ({
    // define a constant called store
    // that takes set as a parameter
    // basically a state to 'set' up for the whole store
    // and it will return an object {}

    tasks: [{title: "Test Task", state: "planned"}],
});

export const useStore = create(store);