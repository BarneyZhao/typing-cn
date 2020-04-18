import root from './reducers/root'; // +

const reducerCaller = (reducer: any, initState: any) => {
    return (state = initState, action: { type: string; payload: any }) => {
        if (!reducer[action.type]) return state;
        return Object.assign({}, state, reducer[action.type](state, action.payload));
    };
};

export type State = {
    root: typeof root.state; // +
};

export const reducersObj: {
    [P in keyof State]: ReturnType<typeof reducerCaller>;
} = {
    root: reducerCaller(root.reducer, root.state), // +
};

export type ReducersFuncs = typeof root.reducer; // +
