import { createStore, Store } from 'vuex'

const store: Store<{}> = createStore({
    state: {
        loginState: 0
    },
    mutations: {
        login(state) {
            state.loginState = 1
        },
        loginOut(state) {
            state.loginState = 0
        }
    }
})

export default store