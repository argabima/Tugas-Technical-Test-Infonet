<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css">

  <div class="container text-center mt-4">
   <div class="card">
     <div class="card-body">
      <button type="button" class="btn btn-primary" @click="addRow"><i class="fa-solid fa-plus"></i> Add Item</button>
      <div  v-for="item,index in form" :key="item">
          <h6 class="mt-3">Item {{ index+1 }}</h6>
         <div class="row">
           <div class="col-sm-5">
             <select class="form-select" aria-label="Default select example" v-model="item.name">
                <option selected>Age</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
           </div>
           <div class="col-sm-5">
             <input type="number" class="form-control" v-model="item.price">
           </div>
           <div class="col-sm-2">
             <button type="button" class="btn btn-danger btn-sm" @click="removeRow(index)">x</button>&nbsp;
           </div>
         </div>

        
      </div>
         <button type="button" class="btn btn-success mt-3" @click="saveItem">Save</button>
     </div>
   </div>
  </div>
</template>

<script>
import { reactive } from 'vue'
import axios from 'axios'
export default {
  name: 'HelloWorld',
  setup(){
    const form = reactive([
      { name: 'age', price: 0}
    ])

    const addRow = () => {
      form.push({ name: 'age', price: 0})
    }

    const removeRow = (index) =>{
      if(form.length > 1){
        form.splice(index,1)
      }
    }

    const saveItem = () =>{
      // axios
      axios.post('items',form).then(res=>{
        console.log(res);
      })
    }

    return{
      form,
      addRow,
      saveItem,
      removeRow
    }
  }
}
</script>
