import { createStore } from 'vuex';

import { moduleA, ModuleAState } from './modules/moduleA';

export type RootState = {
    // module state
    moduleA: ModuleAState;
};

export default createStore({
    modules: {
        moduleA,
    },
});
