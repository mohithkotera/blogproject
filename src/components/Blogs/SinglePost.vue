<template>
<div>
    <h1 class="h1">My blog&nbsp;{{ $route.params.id }}</h1>
    <router-link to="/">Back</router-link> -->
        
         <div v-for="item in data" :key="item.id">
            <div v-if="item.id === $route.params.id ">
         <h1>{{ item.title }}</h1>
                  <img v-bind:src="item.img"/>
                     <p><span>Description</span>{{ item.desp }}</p>
            </div>
           
            </div>
        
        </div>
</template>
<script>
import jsondata from '../Json/jsondata.json'
export default {
name: 'SinglePost',
    data() {
        return {
            data: jsondata,
        };
    }
    // computed:{
    //     filteredItems(){
    //         const filtered = data.filter((e)=>e.id === $route.params.id)
    //         return filtered;
    //     }
    // }
     }
</script>
<style>

h1{
    color:red
}
span{
color:blue;
font-size: xx-large;
margin-right:10px;
}
.h1{
    color:chocolate;
    text-align: center;
}
</style>