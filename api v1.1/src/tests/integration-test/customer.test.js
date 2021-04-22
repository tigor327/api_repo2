// change to test DB
const app = require("../../../app");
var request = require("supertest");
//const { Server } = require("node:http");

describe(`Tests Suites`, () => {
  it("has a module", () => {
    expect(app).toBeDefined();
  });

  beforeAll(() => {});

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
            token:
              "eyJhbGciOiJIUzI1NiJ9.YWRtaW4.23a2LfcEJ7pbe5mqaW8cJ7kPr_e6jI3JLb9gXSf2h_k",
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
            custName: "joaquin",
            custContact: "619",
            custAddress: "5 Kings Place",
            custStatus: "Active",
            token:
              "eyJhbGciOiJIUzI1NiJ9.YWRtaW4.23a2LfcEJ7pbe5mqaW8cJ7kPr_e6jI3JLb9gXSf2h_k",
          });
        console.log("response body: ", response.body);
        console.log("response status: ", response.status);

        expect(response.statusCode).toBe(201);
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
            token:
              "eyJhbGciOiJIUzI1NiJ9.YWRtaW4.23a2LfcEJ7pbe5mqaW8cJ7kPr_e6jI3JLb9gXSf2h_k",
          });
        console.log("response body: ", response.body);
        console.log("response status: ", response.status);

        expect(response.statusCode).toBe(201);
        expect(response.body.result.message).toBe(
          "Customer updated succesfully!"
        );
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
            token:
              "eyJhbGciOiJIUzI1NiJ9.YWRtaW4.23a2LfcEJ7pbe5mqaW8cJ7kPr_e6jI3JLb9gXSf2h_k",
          });
        expect(response.statusCode).toBe(200);
        expect(response.body.removeCustomers).toBe(
          "Customer deleted successfully."
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
