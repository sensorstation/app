export const state = {
    time: {},
    temp: 88,
    humidity: 99,
    soil: 22
}

export const mutations = {
    SET_TEMP(state, temp) {
        state.temp = temp
    },
    SET_TIME(state, time) {
        state.time = time
    },
    SET_DATE(state, date) {
        state.date = date
    },
}

export const actions = {
    setTemp(context, temp) {
        context.commit('SET_TEMP', temp)
    },
    setTime(context, time) {
        context.commit('SET_TIME', time)
    },
    setDate(context, date) {
        context.commit('SET_DATE', date)
    },
}

export const getters = {
    time: state => {
        return state.time
    },
    date: state => {
        return state.lasers
    },
    temp: state => {
        return state.temp
    },
}
