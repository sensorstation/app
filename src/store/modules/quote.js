export const state = {
  quote: {
    author: "Rodney King",
    source: "TV",
    text: "Why can't we all just get along",
  },
};

export const mutations = {
  SET_QUOTE(state, q) {
    (state.quote.author = q.author),
      (state.quote.title = q.title),
      (state.quote.text = q.text);
  },
};

export const actions = {
  setQuote(context, quote) {
    context.commit("SET_QUOTE", quote);
  },
};

export const getters = {
  quote: (state) => {
    return state.quote;
  },
};
