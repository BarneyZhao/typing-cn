import root from './reducers/root'; // +

export type ReducersFuncs = typeof root.reducer; // 此处新增模块

// eslint-disable-next-line import/no-anonymous-default-export
export default { root };
