export default {
    state: {
        loading: false,
        error: null
    },
    mutations: {
        setLoading (state, payload) {
            state.loading = payload
        },
        setError (state, payload) {
            state.error = payload
        },
        clearError (state) {
            state.error = null
        }
    },
    actions: {
        setloading ({commit}, payload) {
            commit('setLoading', payload)
        },
        setErrorg ({commit}, payload) {
            commit('setError', payload)
        },
        ClearErrorg ({commit}, payload) {
            commit('clearError', payload)
        }
    },
    getters: {
        loading (state) {
            return state.loading
        },
        error (state) {
            return state.error
        },
    }
}