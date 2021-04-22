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
  });

  describe("login route test", () => {
    // describe("Test ClearDataBase function", function() {
    //   it("resets the test database", async () => {
    //     const response = await request(app)
    //       .get("/clear")
    //       .send({
    //         userName: "admin",
    //         password: "admin",
    //       });
    //     expect(response.statusCode).toBe(200);
    //     // expect(response.body.token).toBeTruthy();
    //   });
    // });

    describe("POST with credentials /login", function() {
      it("responds with json", async () => {
        const response = await request(app)
          .post("/login")
          .send({
            userName: "admin",
            password: "admin",
          });
        expect(response.statusCode).toBe(200);
        // expect(response.body.token).toBeTruthy();
      });
    });

    describe("POST with credentials /login", function() {
      it("responds with json", async () => {
        const response = await request(app)
          .post("/login/3")
          .send({
            userName: "admin",
            password: "admin",
          });
        expect(response.statusCode).toBe(404);
        // expect(response.body.token).toBeTruthy();
      });
    });
  });
});
