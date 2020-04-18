import { createStore, combineReducers } from 'redux';
import { connect } from 'react-redux';

import { reducersObj, State, ReducersFuncs } from './config';

const mapStateToProps = (state: State) => {
    return { $state: { ...state } };
};
const mapDispatchToProps = (dispatch: any) => {
    return {
        $dispatch(type, payload) {
            dispatch({ type, payload });
        },
        dispatch,
    } as {
        $dispatch: <T extends keyof ReducersFuncs>(
            type: T,
            payload?: Parameters<ReducersFuncs[T]>[1]
        ) => void;
        dispatch: any;
    };
};
export function storeConnect(component: any) {
    return connect(mapStateToProps, mapDispatchToProps)(component);
}
export type MapState = ReturnType<typeof mapStateToProps>;
export type MapDispatch = ReturnType<typeof mapDispatchToProps>;
export default createStore(combineReducers(reducersObj));
