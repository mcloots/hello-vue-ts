import Vue from 'vue'
import Vuex from 'vuex'
import User from './user';
import UserModule from './user';


Vue.use(Vuex);

/*export default new Vuex.Store({
    modules: {
        user: User
    }
});*/

 const store = new Vuex.Store({
     modules: {
         myUser: UserModule
     }
 });

 export default store;

/*class State {
    user: UserModel | null = null;
}

const getters = <GetterTree<State, any>>{
    user(state) {
        return state.user;
    }
};

const mutations = <MutationTree<State>>{
    setLoggedIn(state, value: boolean) {
        if (state.user != null) {
            state.user.LoggedIn = value;
        }
    },
    setUser(state, data: UserModel) {
        if (state.user != null) {
            state.user.Name = data.Name;
            state.user.Email = data.Email;
        }
    }
};

const actions = <ActionTree<State, any>>{
    fetchUser(context, user) {
        context.commit("setLoggedIn", user !== null);
        if (user) {
            context.commit("setUser", {
                Email: user.Email,
                Name: user.Name
            });
        } else {
            context.commit("setUser", null);
        }
    }
};

export default new Vuex.Store({
    state: new State(),
    getters: getters,
    mutations: mutations,
    actions: actions
});*/