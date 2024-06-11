import { create } from "zustand";

const store = (set) => ({
    // define a constant called store
    // that takes set as a parameter
    // basically a state to 'set' up for the whole store
    // and it will return an object {}

    tasks: [{title: "Test Task", state: "ongoing"}],

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
    )),

    // this is the set for our delete task method
    // we only need to find the title of the task we want to find
    // thus, we filter all the task that are unequal to our title
    // we're basically deleting them as we're overwriting the reference for the task
    // `.filter(task => task.title !== title)` creates a new array including only the tasks for which the condition `task.title !== title` is true.
    // for each task in the `store.tasks array`, the arrow function checks if the task.title is not equal to the given title.
    // if task.title is not equal to the title passed to deleteTask, that task is included in the new array. otherwise, it is excluded.
    deleteTask: (title) => set((store) => (
        {tasks: store.tasks.filter(task => task.title !== title)}
    )),

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

export const useStore = create(store);