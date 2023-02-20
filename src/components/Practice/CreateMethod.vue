<template>
    <div>
        <h1>CreateMethods</h1>
        <h3>Created:My name is &nbsp;{{name}}</h3>
    </div>
</template>
<script>

export default ({
  name:'CreateMethod',
  data(){
    return{
     name:'Mohith',
  }
    
  },
  beforeCreate(){
    this.name='Mr Unknown'
  alert(`before create my name is  ${this.name}`)
  },
  created(){
     this.name='Mohith Kotera'
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