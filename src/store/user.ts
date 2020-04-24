import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators';
import { UserModel } from '@/components/Authentication/Models/user-model';
import { FirebaseError } from 'firebase';

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
    setUser(user: firebase.User) {
        if (this.userM) {
            if (user === null) {
                this.userM.loggedIn = false;
                this.userM.email = "";
                this.userM.name = "";
            } else {
                this.userM.loggedIn = true;
                this.userM.email = user.email;
                this.userM.name = user.displayName;
            }
        }
    }

    get user(): UserModel {
        return this.userM;
    }

    @Action({ rawError: true })
    fetchUser(user: firebase.User) {
        this.context.commit('setLoggedIn', user !== null);
        if (user) {
            this.context.commit("setUser", user);
        } else {
            this.context.commit("setUser", null);
        }
    }
}