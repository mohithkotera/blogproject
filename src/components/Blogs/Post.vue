<template>
    <div>
        <h1 class="h1">Blog Posts</h1>
    <div v-for="item in data" :key="item.id">
            <h1>{{ item.title }}</h1>
            <router-link :to="{name:'SinglePost' ,params:{id:item.id}}"><img v-bind:src="item.img"/></router-link>
           <!-- <router-link to="/single"><img v-bind:src="item.img"/></router-link> -->
            <p><span>Description</span>{{ item.desp}}</p>
        </div>
    </div>
    
</template>

<script>
import jsondata from '../Json/jsondata.json'
export default {
    name:'Post', 
    data(){
        return{
            data: jsondata,
        };
    },
    // computed:{
    //     mappedData(){

    //         return jsondata.map(item=>({
    //             id:item.id,
    //             title:item.title,
    //             img:item.img,
    //             desp:item.desp
    //         }))
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