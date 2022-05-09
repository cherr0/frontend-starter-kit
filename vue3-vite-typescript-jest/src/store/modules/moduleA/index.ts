import { ActionTree, Module, MutationTree } from 'vuex';

import { RootState } from '../../index';

export type ModuleAState = typeof state;

enum MutationTypes {
    setCount = 'setCount',
}

enum ActionTypes {
    incrementCount = 'incrementCount',
}

const state = {
    count: 0,
    a: 1,
};

const getters = {
    doubleCount(state: ModuleAState) {
        return state.count * 2;
    },
};

const mutations: MutationTree<ModuleAState> = {
    [MutationTypes.setCount](state, payload: number) {
        state.count = payload;
    },
};

const actions: ActionTree<ModuleAState, RootState> = {
    [ActionTypes.incrementCount]({ commit }) {
        commit(MutationTypes.setCount, '');
    },
};

export const moduleA: Module<ModuleAState, RootState> = {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
};
