import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const store = (set) => ({
    // define a constant called store
    // that takes set as a parameter
    // basically a state to 'set' up for the whole store
    // and it will return an object {}

    // tasks: [{title: "Test Task", state: "ongoing"}],
    tasks: [],

    // for dragging task
    // what we want to store in our store
    draggedTask: null,

    // add a function here
    // title and the state are the information we need to add a task
    // we then get it to run the set function as we want to manipulate our store
    // set for our add task method
    addTask: (title, state) => set((store) => (
        // we also want to check for the current state of the store
        // here, we take in an object and tell it what we want to manipulate
        {tasks: [...store.tasks, {title, state}]}
        // with this, we're taking the already availlable tasks in our store
        // and adding one new element {title, state} in the array

        // for debugging using redux devtools, you can give each set function a name
        // reminder: these functions can take up multiple parameters: 1) set 2) boolean 3) label
        // the boolean will tell zustand whether or not to replace the whole store with whatever is in this object or whether to just manipulate them
        // in this case, we want to just change the status so we keep it at false
        // the label will show up in the debugging tool
    ), false, "addTask"),

    // this is the set for our delete task method
    // we only need to find the title of the task we want to find
    // thus, we filter all the task that are unequal to our title
    // we're basically deleting them as we're overwriting the reference for the task
    // `.filter(task => task.title !== title)` creates a new array including only the tasks for which the condition `task.title !== title` is true.
    // for each task in the `store.tasks array`, the arrow function checks if the task.title is not equal to the given title.
    // if task.title is not equal to the title passed to deleteTask, that task is included in the new array. otherwise, it is excluded.
    deleteTask: (title) => set((store) => (
        {tasks: store.tasks.filter(task => task.title !== title)}
    ), false, "deleteTask"),

    // the set for our dragged task method
    setDraggedTask: (title) => set ({ draggedTask: title }),

    moveTask: (title, state) => set((store) => ({
        tasks: store.tasks.map((task) => (task.title === title ? { title, state } : task)),
        // basically here, we're trying to map the tasks 
        // we want to check whether the task is the one that we are moving
        // if not, we keep it the way it is
        // if not, we create a new object
    })),
});

// a custom middleware that just logs every stage change
const log = (config) => (set, get, api) => config(
    (...args) => {
        console.log(args);
        set(...args);
    },
    get,
    api
);

export const useStore = create(log(persist(devtools(store), {name: "store"})));
// it saves into a local store, give it a name
// you can find the local store in console > application > storage > local store