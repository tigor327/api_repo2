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
          .post("/login")
          .send({
            userName: "admn",
            password: "admin",
          });
        expect(response.statusCode).toBe(400);
        expect(response.body.error).toBe(
          "Failed to login. incorect username or password"
        );
      });
    });
    describe("POST with credentials /login pls enter username", function() {
      it("responds with json", async () => {
        const response = await request(app)
          .post("/login")
          .send({
            userName: "",
            password: "admin",
          });
        expect(response.statusCode).toBe(400);
        expect(response.body.error).toBe("Please enter username");
      });
    });

    describe("POST with credentials /login pls enter password", function() {
      it("responds with json", async () => {
        const response = await request(app)
          .post("/login")
          .send({
            userName: "admin",
            password: "",
          });
        expect(response.statusCode).toBe(400);
        expect(response.body.error).toBe("Please enter password");
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

    describe("get customers list correctly", function() {
      it("responds with json", async () => {
        const response = await request(app)
          .get("/customers/list")
          .set({
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.YWRtaW4.23a2LfcEJ7pbe5mqaW8cJ7kPr_e6jI3JLb9gXSf2h_k",
          });
        expect(response.statusCode).toBe(200);
      });
    });

    describe("get customers list with incorrect token", function() {
      it("responds with json", async () => {
        const response = await request(app)
          .get("/customers/list")
          .set({
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.YWRtaW4.23a2LfcEJ7pbe5mqaW8cJ7kPr_e6jI3JLb9gXSf2h",
          });
        expect(response.statusCode).toBe(200);
        expect(response.body.success).toBe(false);
      });
    });
  });
});
