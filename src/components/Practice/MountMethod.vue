<template>
    <div>
        <h1>MountMethods</h1>
        <h1>{{name}}</h1>
    </div>
</template>
<script>

export default ({
  name:'MountMethod',
  data(){
    return{
     name:'Mohith',
  }
    
  },
  beforeMount(){
    this.name='Mr Unknown'
  alert(`before Mount ${this.$el}`)
  },
   mounted(){
     alert(`Mount ${this.$el}`)
  }
})
</script>



<style scoped>
h1{
    color:blueviolet;
    text-align: center;
}
h3{
    color:green;
    text-align: center;
}
</style>