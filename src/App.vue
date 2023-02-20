<template>
  <div>
    <!-- <router-link to="/">Post-Page</router-link>{' '}
  <router-link to="/single">Single-Page</router-link> -->
  <router-link to="/">Post-Page</router-link>&nbsp;
  <!-- <router-link to="/practice">Practice</router-link>&nbsp; -->
  <router-link to="/computed">Computed</router-link>&nbsp;
  <router-link to="/create">Create</router-link>&nbsp;
    <router-link to="/mount">Mount</router-link>&nbsp;
  <router-view></router-view>
  </div>
</template>


<script>
import Post from './components/Blogs/Post.vue';
import SinglePost from './components/Blogs/SinglePost.vue';
 export default {
  name:'App',
  // components:{
  //   Post
  // }

 }
</script>

<style>

</style>
