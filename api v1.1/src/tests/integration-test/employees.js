const axios = require("axios");
require("dotenv").config();
const url = `${process.env.BASE_URL}:${process.env.PORT}`;

const routes = {
  selectEmployees: async () => {
    try {
      const res = await axios({
        method: "GET",
        url: `localhost:28/customers/list/`,
        token:
          "eyJhbGciOiJIUzI1NiJ9.YWRtaW4.23a2LfcEJ7pbe5mqaW8cJ7kPr_e6jI3JLb9gXSf2h_k",
        auth: {
          username: process.env.name,
          password: process.env.pass,
        },
      });
      console.log("RES: ", res);
      return res;
    } catch (e) {
      return e;
    }
  },
  addEmployees: async ({ info }) => {
    try {
      const res = await axios({
        method: "POST",
        url: `${url}/api/employees`,
        auth: {
          username: process.env.name,
          password: process.env.pass,
        },
        data: {
          ...info,
        },
      });
      return res;
    } catch (e) {
      return e;
    }
  },
  updateEmployees: async ({ id, info }) => {
    try {
      const res = await axios({
        method: "PATCH",
        url: `${url}/api/employees/${id}`,
        auth: {
          username: process.env.name,
          password: process.env.pass,
        },
        data: {
          ...info,
        },
      });
      return res;
    } catch (e) {
      return e;
    }
  },
  deleteEmployees: async ({ id }) => {
    try {
      const res = await axios({
        method: "DELETE",
        url: `${url}/api/employees/${id}`,
        auth: {
          username: process.env.name,
          password: process.env.pass,
        },
      });
      return res;
    } catch (e) {
      return e;
    }
  },
};
