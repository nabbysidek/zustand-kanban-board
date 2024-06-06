import { create } from "zustand";

const store = (set) => ({
    // define a constant called store
    // that takes set as a parameter
    // basically a state to 'set' up for the whole store
    // and it will return an object {}

    tasks: [{title: "Test Task", state: "ongoing"}],

    // add a function here
    // title and the state are the information we need to add a task
    // we then get it to run the set function as we want to manipulate our store
    addTask: (title, state) => set((store) => (
        // we also want to check for the current state of the store
        // here, we take in an object and tell it what we want to manipulate
        {tasks: [...store.tasks, {title, state}]}
        // with this, we're taking the already availlable tasks in our store
        // and adding one new element {title, state} in the array
    )),
});

export const useStore = create(store);