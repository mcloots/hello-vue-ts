import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators';
import { UserModel } from '@/components/Authentication/Models/user-model';

@Module
export default class UserModule extends VuexModule {
    public userM: UserModel = { name: "", email: "", loggedIn: false };

    @Mutation
    setLoggedIn(value: boolean) {
        if (this.userM) {
            this.userM.loggedIn = value;
        }
    }

    @Mutation
    setUser(user: UserModel) {
        this.userM = user;
        if (this.userM) {
            if (user === null) {
                this.userM.loggedIn = false;
            } else {
                this.userM.loggedIn = true;
            }
        }
    }

    get user(): UserModel {
        return this.userM;
    }

    @Action({ rawError: true })
    fetchUser(user: UserModel) {
        this.context.commit('setLoggedIn', user !== null);
        if (user) {
            this.context.commit("setUser", user);
        } else {
            this.context.commit("setUser", null);
        }
    }
}