import {
  VuexModule,
  Module,
  Mutation,
  Action,
  getModule,
  MutationAction,
} from "vuex-module-decorators";
import store from "@/store";

@Module({ name: "user", store, dynamic: true })
class UserStore extends VuexModule {
  posts = 0; // initialise empty for now

  get postCount(): number {
    return this.posts;
  }

  @Mutation
  updatePosts(posts: number): void {
    this.posts = posts;
  }

  @Action({ commit: "updatePosts" })
  async setPosts(n: number) {
    return n;
  }

  // NOTE: Only one parameter is allowed, if more than 2 params provided, params from 2 will be ignored.
  // If more than one param to be passed, consider to use payload: { key: <key>, value: <value> }.
  @MutationAction
  async setPosts2(posts: number) {
    const temp: number = posts;
    return { posts: temp };
  }
}

export default getModule(UserStore);
