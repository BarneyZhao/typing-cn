import { createStore, combineReducers } from 'redux';
import { connect } from 'react-redux';

import reducersObj, { ReducersFuncs } from './config';

/**
 * mapStateToProps
 */
type RObj = typeof reducersObj;
export type State = {
    [P in keyof RObj]: RObj[P]['state'];
};
const mapStateToProps = (state: State) => {
    return { $state: { ...state } };
};
export type MapState = ReturnType<typeof mapStateToProps>;

/**
 * mapDispatchToProps
 */
export type MapDispatch = {
    $dispatch: <T extends keyof ReducersFuncs>(
        type: T,
        payload?: Parameters<ReducersFuncs[T]>[1]
    ) => void;
};
const mapDispatchToProps = (dispatch: any): MapDispatch => {
    return {
        $dispatch(type, payload) {
            dispatch({ type, payload });
        },
    };
};

export function storeConnect(component: any) {
    return connect(mapStateToProps, mapDispatchToProps)(component);
}

// 返回action
const reducerCaller = (reducer: any, initState: any) => {
    return (state = initState, action: { type: string; payload: any }) => {
        if (!reducer[action.type]) return state;
        return Object.assign({}, state, reducer[action.type](state, action.payload));
    };
};
const reducersForCombine = Object.entries(reducersObj).reduce((obj, [key, val]) => {
    Object.assign(obj, {
        [key]: reducerCaller(val.reducer, val.state),
    });
    return obj;
}, {});
const store = createStore(combineReducers(reducersForCombine));

export default store;

/**
 * store实例方法类型覆盖, 用于非组件文件中使用, 组件请用 storeConnect 函数, 然后在组件props中调用
 */
export function $getState() {
    return store.getState() as State;
}
export const $dispatch: MapDispatch['$dispatch'] = (type, payload) => {
    (store.dispatch as any)({ type, payload });
};
