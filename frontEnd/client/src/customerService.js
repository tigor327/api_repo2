import axios from "axios";
axios.defaults.baseURL = "http://localhost:28/";

//const baseUrl = "http//localhost:28/";

class customerService {
  //Get Posts
  static getCustomers() {
    return new Promise((resolve) => {
      axios.get("customers/list/").then((res) => {
        const data = res.data.customersList;
        resolve(
          data.map((info) => ({
            ...info,
          }))
        );
      });
    });
  }

  //Create Post
  static registerCustomer({ custData }) {
    console.log("CUSTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT: ", custData);
    return axios({
      method: "POST",
      url: `/customers/list`,
      headers: {},
      data: {
        custName: custData.custName,
        custContact: custData.custContact,
        custAddress: custData.custAddress,
        password: custData.password,
      },
    }).then((res) => {
      console.log(res);
      //commit("addNewCustomer", res.data.result);
      console.log("Customer", res.data.result);
      return res.data;
    });
  }
  // Delete Post
  static deleteCustomer(id) {
    console.log("delete customer called---");
    return axios.delete(`customers/list/${id}`);
  }
  // static updatedCustomer({ info }) {
  //   console.log("get customer by id called---");
  //   console.log(info);

  //   return axios.get(`customers/list/${info.id}`);
  // }

  static updateCustomer({ info }) {
    console.log(" updateCustomer SERVICE called---");
    console.log(info);
    return axios({
      method: "PATCH",
      url: `/customers/list/${info.id}`,
      headers: {},
      data: {
        custName: info.custName,
        custContact: info.custContact,
        custAddress: info.custAddress,
        password: info.password,
      },
    }).then((res) => {
      console.log(res);
      //commit("addNewCustomer", res.data.result);
      console.log("Customer", res.data.result);
      return res.data.result.product;
      // this.getCustomers();
      // console.log("yeye");
    });
  }
}

export default customerService;
