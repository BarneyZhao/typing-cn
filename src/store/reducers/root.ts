import { Word } from '@/words';
import storage from '@/utils/storage';

const UI_SCALE = 'UI_SCALE';
const WORDS_MODE = 'WORDS_MODE';
const CUSTOMER_WORDS = 'CUSTOMER_WORDS';

const _state = {
    uiScale: storage.local.get<string>(UI_SCALE) || 's',
    wordsMode: storage.local.get<string>(WORDS_MODE) || '1',
    customerWords: storage.local.get<Word[]>(CUSTOMER_WORDS) || [],
};
type State = typeof _state;

const reducer = {
    setUiScale: (state: State, payload: State['uiScale']): Partial<State> => {
        storage.local.set(UI_SCALE, payload);
        return { uiScale: payload };
    },
    setWordsMode: (state: State, payload: State['wordsMode']): Partial<State> => {
        storage.local.set(WORDS_MODE, payload);
        return { wordsMode: payload };
    },
    saveCustomerWords: (state: State, payload: State['customerWords']): Partial<State> => {
        storage.local.set(CUSTOMER_WORDS, payload);
        return { customerWords: payload };
    },
};

export default {
    state: _state,
    reducer,
};
