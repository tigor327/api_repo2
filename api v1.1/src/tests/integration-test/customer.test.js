// change to test DB
const app = require("../../../app");
var request = require("supertest");
//const { Server } = require("node:http");

describe(`Tests Suites`, () => {
  it("has a module", () => {
    expect(app).toBeDefined();
  });
  let token;
  beforeEach(async () => {
    let getTokenRes = await request(app)
      .post("/login")
      .send({ userName: "admin", password: "admin" });
    token = getTokenRes.body.token;
  });

  afterEach(() => {
    app.close();
  });
  afterAll(async () => {
    let response = await request(app).get("/clear");
    app.close();

    console.log("CLEAR DB RESPONSE: ", response.status);
  });

  describe("customer routes test", () => {
    const customer = {};

    describe("GET /customers/list", function() {
      it("responds with json", async () => {
        const response = await request(app)
          .get("/customers/list/")
          .send({
            token: token,
          });
        console.log("response body: ", response.body);
        console.log("response status: ", response.status);

        expect(response.statusCode).toBe(200);
      });
    });
    describe("GET /customers/list", function() {
      it("responds with json", async () => {
        const response = await request(app).get("/customers/list/");
        console.log("response body: ", response.body);
        console.log("response status: ", response.status);

        expect(response.statusCode).toBe(403);
      });
    });

    describe("POST /customers/list", function() {
      it("responds with json", async () => {
        const response = await request(app)
          .post("/customers/list/")
          .send({
            custName: "joaquin mas",
            custContact: "619",
            custAddress: "5 Kings Place",
            token: token,
          });
        console.log("response body: ", response.body);
        console.log("response status: ", response.status);

        expect(response.statusCode).toBe(201);
      });
    });

    describe("POST /customers/list  Please enter full name", function() {
      it("responds with json", async () => {
        const response = await request(app)
          .post("/customers/list/")
          .send({
            custContact: "619",
            custAddress: "5 Kings Place",
            custStatus: "Active",
            token: token,
          });
        console.log("response body: ", response.body);
        console.log("response status: ", response.status);

        expect(response.statusCode).toBe(400);
        expect(response.body.error).toBe("Please enter full name");
      });
    });

    describe("POST /customers/list  Please enter address", function() {
      it("responds with json", async () => {
        const response = await request(app)
          .post("/customers/list/")
          .send({
            custName: "joaquin",
            custContact: "619",
            custStatus: "Active",
            token: token,
          });
        console.log("response body: ", response.body);
        console.log("response status: ", response.status);

        expect(response.statusCode).toBe(400);
        expect(response.body.error).toBe("Please enter address");
      });
    });

    describe("POST /customers/list Please enter contact information", function() {
      it("responds with json", async () => {
        const response = await request(app)
          .post("/customers/list/")
          .send({
            custName: "joaquin",
            custAddress: "5 Kings Place",
            custStatus: "Active",
            token: token,
          });
        console.log("response body: ", response.body);
        console.log("response status: ", response.status);

        expect(response.statusCode).toBe(400);
        expect(response.body.error).toBe("Please enter contact information");
      });
    });

    describe("POST /customers/list Invalid chars aren't allowed as name!", function() {
      it("responds with json", async () => {
        const response = await request(app)
          .post("/customers/list/")
          .send({
            custName: "joaq123uin",
            custContact: "619",
            custAddress: "5 Kings Place",
            custStatus: "Active",
            token: token,
          });
        console.log("response body: ", response.body);
        console.log("response status: ", response.status);

        expect(response.statusCode).toBe(400);
        expect(response.body.error).toBe(
          "Invalid chars aren't allowed as name!"
        );
      });
    });

    describe("POST /customers/list", function() {
      it("responds with json", async () => {
        const response = await request(app)
          .post("/customers/list/")
          .send({
            custName: "joaquin",
            custContact: "619",
            custAddress: "5 Kings Place",
            custStatus: "Active",
            token: token,
          });
        console.log("response body: ", response.body);
        console.log("response status: ", response.status);

        expect(response.statusCode).toBe(201);
      });
    });
    describe("POST /customers/list", function() {
      it("responds with json", async () => {
        const response = await request(app)
          .post("/customers/list/")
          .send({
            custName:
              "asdasdasdasdaqaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasd",
            custContact: "619",
            custAddress: "5 Kings Place",
            custStatus: "Active",
            token: token,
          });

        expect(response.statusCode).toBe(400);
        expect(response.body.error).toBe("Failed to register customer.");
      });
    });
    describe("POST /customers/list", function() {
      it("responds with json", async () => {
        const response = await request(app)
          .post("/customers/list/")
          .send({
            custName: "joaquin",
            custContact: "619",
            custAddress: "5 Kings Place",
            custStatus: "Active",
            token: token,
          });
        console.log("response body: ", response.body);
        console.log("response status: ", response.status);

        expect(response.statusCode).toBe(400);
        expect(response.body.error).toBe("Name already exists");
      });
    });
    describe("PATCH /customers/list", function() {
      it("responds with json", async () => {
        const response = await request(app)
          .patch("/customers/list/5")
          .send({
            custName: "joker",
            custContact: "80085",
            custAddress: "5 men's Palace",
            custStatus: "Active",
            token: token,
          });
        console.log("response body: ", response.body);
        console.log("response status: ", response.status);

        expect(response.statusCode).toBe(201);
        expect(response.body.result.message).toBe(
          "Customer updated succesfully!"
        );
      });
    });
    describe("PATCH /customers/list no cust status", function() {
      it("responds with json", async () => {
        const response = await request(app)
          .patch("/customers/list/5")
          .send({
            custName: "jo123ker",
            custContact: "80085",
            custAddress: "5 men's Palace",
            token: token,
          });
        console.log("response body: ", response.body);
        console.log("response status: ", response.status);

        expect(response.statusCode).toBe(400);
        expect(response.body.error).toBe(
          "Invalid chars aren't allowed as name"
        );
      });
    });
    describe("PATCH /customers/list no cust status", function() {
      it("responds with json", async () => {
        const response = await request(app)
          .patch("/customers/list/5")
          .send({
            custName: "joker",
            custContact: "80085",
            custAddress: "5 men's Palace",
            token: token,
          });
        console.log("response body: ", response.body);
        console.log("response status: ", response.status);

        expect(response.statusCode).toBe(201);
        expect(response.body.result.message).toBe(
          "Customer updated succesfully!"
        );
      });
    });
    describe("PATCH /customers/list", function() {
      it("responds with json", async () => {
        const response = await request(app)
          .patch("/customers/list/5")
          .send({
            custName:
              "asdaafasaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaadf",
            custContact: "80085",
            custAddress: "5 men's Palace",
            custStatus: "Active",
            token: token,
          });
        console.log("response body: ", response.body);
        console.log("response status: ", response.status);

        expect(response.statusCode).toBe(400);
        expect(response.body.error).toBe("Failed to update customer.");
      });
    });
    describe("DELETE /customers/list", function() {
      it("responds with json", async () => {
        const response = await request(app)
          .delete("/customers/list/5")
          .send({
            custName: "joker",
            custContact: "80085",
            custAddress: "5 men's Palace",
            custStatus: "Active",
            token: token,
          });
        expect(response.statusCode).toBe(200);
        expect(response.body.removeCustomers).toBe(
          "Customer deleted successfully."
        );
      });
    });
    describe("DELETE /customers/list non-existing id", function() {
      it("responds with json", async () => {
        const response = await request(app)
          .delete("/customers/list/50")
          .send({
            custName: "joker",
            custContact: "80085",
            custAddress: "5 men's Palace",
            custStatus: "Active",
            token: token,
          });
        expect(response.statusCode).toBe(200);
        expect(response.body.removeCustomers).toBe(
          "Customer was not deleted, please try again"
        );
      });
    });
  });
  // test(`Select Customers`, async () => {
  //   const res = await routes.selectEmployees({ info });
  //   const data = res;
  //   expect(data).toBe(200);
  // });

  //   test(`Add Employees - All fields have value.`, async () => {
  //     const info = {
  //       firstName: randomstring.generate({
  //         length: 12,
  //         charset: "alphabetic",
  //       }), // generate random string
  //       lastName: randomstring.generate({
  //         length: 12,
  //         charset: "alphabetic",
  //       }), // generate random string
  //       age: 13,
  //     };
  //     const res = await routes.addEmployees({ info });
  //     const data = res.status;
  //     expect(data).toBe(201);
  //   });

  //   test(`Add Employees - Required fields missing.`, async () => {
  //     const info = {
  //       firstName: randomstring.generate({
  //         length: 12,
  //         charset: "alphabetic",
  //       }), // generate random string
  //       lastName: null,
  //       age: 8,
  //     };
  //     const res = await routes.addEmployees({ info });
  //     const data = res.response.status;
  //     expect(data).toBe(400);
  //   });

  //   test(`Update Employees - All fields have value.`, async () => {
  //     const emp = await routes.selectEmployees();
  //     const employees = emp.data.view;
  //     const id = employees[employees.length - 1].id;
  //     const info = {
  //       firstName: randomstring.generate({
  //         length: 12,
  //         charset: "alphabetic",
  //       }), // generate random string
  //       lastName: randomstring.generate({
  //         length: 12,
  //         charset: "alphabetic",
  //       }), // generate random string
  //       age: 9,
  //     };

  //     const res = await routes.updateEmployees({ id, info });
  //     const data = res.status;
  //     expect(data).toBe(200);
  //   });

  //   test(`Update Employees - Required fields are missing.`, async () => {
  //     const emp = await routes.selectEmployees();
  //     const employees = emp.data.view;
  //     const id = employees[employees.length - 1].id;
  //     const info = {
  //       firstName: null,
  //       lastName: randomstring.generate({
  //         length: 12,
  //         charset: "alphabetic",
  //       }), // generate random string
  //       age: 9,
  //     };

  //     const res = await routes.updateEmployees({ id, info });
  //     const data = res.response.status;
  //     expect(data).toBe(400);
  //   });

  //   test(`Delete Employees`, async () => {
  //     const emp = await routes.selectEmployees();
  //     const employees = emp.data.view;
  //     const id = employees[employees.length - 1].id;

  //     const res = await routes.deleteEmployees({ id });
  //     const data = res.status;
  //     expect(data).toBe(201);
  //   });
});
