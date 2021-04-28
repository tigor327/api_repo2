<template>
<div id='main'>
    <div class = "customer" id="inputData">
      <label for="create-customer">add customer data</label> <br><br>
      <input type="text" id="custName" placeholder="name" align="center" v-model="custName" /> <br><br>
      <input type="text" id="custContact" placeholder="contact" align="center" v-model="custContact" /> <br><br>
      <input type="text" id="custAddress" placeholder="address" align="center" v-model="custAddress" /> <br><br>
      <input type="password" id="password" placeholder="password" align="center" v-model="password" /> <br><br>
      <input type="hidden" id="id" value='0' align="center" v-model="custid" />

      <button id ="button" @click="update ? updateCustomer() : createCustomer()">Submit</button>

      </div>

  <div class = "container">
    
    <br><h1>CUSTOMERS</h1><br>
    <h4>double click to delete a customer</h4>
    <hr>
    <p class="error" v-if="error">{{ error }}</p>
    <div id="cust" class= "customer-container">
      <div  class="customers"
        v-for="(info, index) in customers"
        v-bind:item="info"
        v-bind:index="index"
        v-bind:key="info.custid"
        v-bind:cusId ="info.custid"

        v-on:dblclick="deleteCustomer(info.custid)"
        
    >
      
          <p class="text">{{ info.custName }}</p>
          <button v-on:click="setUpdateData({info})">update</button>
      

      </div>
      </div>
      
    </div>
    </div>
</template>





<script>
import customerService from '../customerService'
export default {
  name: 'Customer-Component',
  data() {
    return {
      customers: [],
      update: false,
      error: '',
      text: ''
    }
  },
  async created() {
    try {
      this.customers = await customerService.getCustomers();
    } catch(e) {
      this.error = e.message;
    }
  },
  methods: {

    async createCustomer() {
      console.log('Create Customer Called')
       let custData =  {}
       custData.custName = this.custName,
       custData.custContact = this.custContact,
       custData.custAddress = this.custAddress,
       custData.password = this.password

      let res = await customerService.registerCustomer({ custData });
      //window.location.reload();
      this.customers = await customerService.getCustomers();
      console.log('res???: ', res)
    },

    async deleteCustomer(id) {
      let res = await customerService.deleteCustomer(id);
      this.customers = await customerService.getCustomers();


      console.log('res???: ', res)
    },

    async setUpdateData({info}) {
      console.log('res???: ', info);
      (document.getElementById('button')).innerHTML = 'Update';
      (document.getElementById('custName')).value = info.custName;
      (document.getElementById('custContact')).value = info.custContact;
      (document.getElementById('custAddress')).value = info.custAddress;
      (document.getElementById('password')).value = info.password;
      (document.getElementById('id')).value = info.custid;

      this.update = true;

    },

    async updateCustomer() {


      try {
      console.log('Update Customer Called')
      console.log('res???: ', this);
      let info = {};

      info.custName = (document.getElementById('custName')).value
      info.custContact = (document.getElementById('custContact')).value
      info.custAddress = (document.getElementById('custAddress')).value
      info.password = (document.getElementById('password')).value
      info.id = (document.getElementById('id')).value
console.log('INFO: ', info )
       let res = await customerService.updateCustomer({ info });

      console.log('resu: ', res);
      
      this.customers = await customerService.getCustomers();
      } catch (e) {
        console.log('ERROR---------------------------------: ', e)
      }





      }
       
    }
  
  
  };

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div.customer {
    vertical-align: left;
    height: 180px;
}
div.container {
  max-width: 400px;
  margin: 0 auto;
}

p.error {
  border: 1px solid #ff5b5f;
  background-color: #ffc5c1;
  padding: 10px;
  margin-bottom: 15px;
}

div.customers{
  position: relative;
  border: 1px solid #5bd658;
  background-color: #bcffb8;
  padding: 10px 10px 10px 10px;
  margin-bottom: 10px;
}

div.created-at {
  position: absolute;
  top: 0;
  left: 0;
  padding: 5px 15px 5px 15px;
  background-color: darkgreen;
  color: white;
  font-size: 13px;
}
p.text {
font-size: 22px;
font-weight: 700;
margin-bottom: 0;
}
</style>













