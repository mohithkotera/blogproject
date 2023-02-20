<template>
  <div>
    <h1>Computed</h1>
    <div v-for="item in items" :key="item.id" class="div">
      <p>Type:&nbsp;{{ item.gadjets }}</p>
      &nbsp;
      <p>Price:&nbsp;{{ item.price }}</p>
    </div>
    <p>Total Price:&nbsp;{{ total }}</p>

    <div class="inputdiv">
      <input class="input" v-model="newId" type="text" placeholder="Enter a Id" />
      <input class="input" v-model="newItem" type="text" placeholder="Enter a gadget" />
      <input class="input" v-model="newPrice" type="number" placeholder="Enter a Price" />
      <button @click="addItem">Add Item</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "Computed",
  data() {
    return {
      items: [
        {
          id: "1",
          gadjets: "Mobile",
          price: 10000,
        },
        {
          id: "2",
          gadjets: "Laptop",
          price: 30000,
        },
        {
          id: "3",
          gadjets: "Speaker",
          price: 5000,
        },
        {
          id: "4",
          gadjets: "TV",
          price: 10000,
        },
        //     {
        //     id:this.newId,
        //     gadjets:this.newItem,
        //     price:this.newPrice
        // },
      ],
    };
  },
  methods: {
    addItem() {
      return (
        // this.items.push({id:'5',gadjets:'Fridge',price:2000})
        this.items.push({
          id: this.newId,
          gadjets: this.newItem,
          price: this.newPrice,
        })
        // const newId = this.items.length + 1;
        // const newItemObj = { id: newId, gadjets: this.newItem ,price:this.newPrice};
        // this.items.push(newItemObj);
        // this.newItem = "";
        // this.newPrice = "";
      );
    },
  },

  computed: {
    total() {
      return this.items.reduce((acc, item) => acc + item.price, 0);
    },
  },
};
</script>
<style scoped>
h1 {
  color: blueviolet;
  text-align: center;
}
.div {
  display: flex;
  flex-direction: row;
}
.inputdiv{
    display:flex;
    flex-direction: column;
    width: 200px;
    
}
.input{
    margin: 10px;
}
</style>
