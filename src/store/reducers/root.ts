const _state = {
    uiScale: 's',
};
type State = typeof _state;

const reducer = {
    setUiScale: (state: State, payload: State['uiScale']): Partial<State> => ({
        uiScale: payload,
    }),
};

export default {
    state: _state,
    reducer,
};
