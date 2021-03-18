<template>
  <div class="home">
    {{ message }} {{ clicks }} times.
    <button @click="onClick">Click!</button>
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App " />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import UserStore from "@/store/modules/user";

@Options({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {
  // 初始数据可以直接声明为实例的 property
  message = "Hello!";
  clicks = 0;
  // 组件方法也可以直接声明为实例的方法
  onClick(): void {
    this.clicks = UserStore.postCount;
    UserStore.setPosts2(this.clicks + 1);
    this.message = "Fxxk ";
    //window.alert(this.message);
  }
}
</script>
