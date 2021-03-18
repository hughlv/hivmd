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
  async setPosts(n: number): Promise<number> {
    return n;
  }

  @MutationAction
  async setPosts2(posts: number) {
    const temp: number = posts;
    return { posts: temp };
  }
}

export default getModule(UserStore);
