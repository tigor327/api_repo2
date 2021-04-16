//const randomstring = require("randomstring"); // for random string insert and update

// change to test DB
const app = require("../../../app");
var request = require("supertest");
var port = process.env.PORT || 5000;

const routes = require("./employees"); // routes to be tested
const itemRoute = require("../../routes/items");

describe(`Tests Suites`, () => {
  itemRoute("has a module", () => {
    expect(app).toBeDefined();
  });

  let server;
  beforeAll(() => {
    app.listen(port);
  });

  afterAll((done) => {
    app.close(done);
  });

  describe("customer routes test", () => {
    itemRoute("can list customers", async () => {
      await request(app)
        .get("/customers/list")
        .expect(200);
    });
  });
  test(`Select Customers`, async () => {
    const res = await routes.selectEmployees({ info });
    const data = res;
    expect(data).toBe(200);
  });

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
