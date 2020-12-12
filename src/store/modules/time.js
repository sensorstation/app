export const state = {
  time: {},
};

export const mutations = {
  SET_TIME(state, t) {
    state.time = t;
  },
};

export const actions = {
  setTime(context, t) {
    context.commit("SET_TIME", t);
  },
};

export const getters = {
  time: (state) => {
    return state.time;
  },
};
