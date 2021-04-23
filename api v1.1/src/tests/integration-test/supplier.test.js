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

  describe("suppliers routes test", () => {
    describe("GET /suppliers/list", function() {
      it("responds with json", async () => {
        const response = await request(app)
          .get("/suppliers/list/")
          .send({
            token:
              "eyJhbGciOiJIUzI1NiJ9.YWRtaW4.23a2LfcEJ7pbe5mqaW8cJ7kPr_e6jI3JLb9gXSf2h_k",
          });

        expect(response.statusCode).toBe(200);
      });
    });
    describe("DELETE /suppliers/list", function() {
      it("responds with json", async () => {
        const response = await request(app)
          .delete("/suppliers/list/4")
          .send({
            token:
              "eyJhbGciOiJIUzI1NiJ9.YWRtaW4.23a2LfcEJ7pbe5mqaW8cJ7kPr_e6jI3JLb9gXSf2h_k",
          });
        console.log(
          "-----------------------------------------------------------------------------------------------------------------------------",
          response
        );
        expect(response.statusCode).toBe(200);
        expect(response.body.removeSuppliers).toBe(
          "Supplier deleted successfully."
        );
      });
    });
    describe("GET /suppliers/list", function() {
      it("responds with json", async () => {
        const response = await request(app)
          .get("/suppliers/list/")
          .send({
            token:
              "eyJhbGciOiJIUzI1NiJ9.YWRtaW4.23a2LfcEJ7pbe5mqaW8cJ7kPr_e6jI3JLb9gXSf2h_k",
          });

        expect(response.body.error).toBe("No Suppliers Found.");
      });
    });

    describe("POST /suppliers/list no token", function() {
      it("responds with json", async () => {
        const response = await request(app)
          .post("/suppliers/list/")
          .send({
            supId: 4,
            supName: "Unregistered Supplier",
            supContact: "00000000",
            supAddress: "No Address",
            supStatus: "Active",
            token:
              "eyJhbGciOiJIUzI1NiJ9.YWRtaW4.23a2LfcEJ7pbe5mqaW8cJ7kPr_e6jI3JLb9gXSf2h_k",
          });

        expect(response.statusCode).toBe(201);
        expect(response.body.result.message).toBe(
          "Supplier registered succesfully!"
        );
      });
    });
    describe("POST /suppliers/list", function() {
      it("responds with json", async () => {
        const response = await request(app)
          .post("/suppliers/list/")
          .send({
            supName: "joaquin",
            supContact: "619",
            supAddress: "5 Kings Place",
            supStatus: "Active",
            token:
              "eyJhbGciOiJIUzI1NiJ9.YWRtaW4.23a2LfcEJ7pbe5mqaW8cJ7kPr_e6jI3JLb9gXSf2h_k",
          });
        expect(response.statusCode).toBe(201);
        expect(response.body.result.message).toBe(
          "Supplier registered succesfully!"
        );
      });
    });
    describe("POST /suppliers/list BOUND TO FAIL WITH A NAME THAT LONG", function() {
      it("responds with json", async () => {
        const response = await request(app)
          .post("/suppliers/list/")
          .send({
            supName:
              "asdfaaassapdfaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
            supContact: "619",
            supAddress: "5 Kings Place",
            supStatus: "Active",
            token:
              "eyJhbGciOiJIUzI1NiJ9.YWRtaW4.23a2LfcEJ7pbe5mqaW8cJ7kPr_e6jI3JLb9gXSf2h_k",
          });
        expect(response.statusCode).toBe(201);
        expect(response.body.result.message).toBe(
          "Failed to register supplier."
        );
      });
    });
    describe("POST /suppliers/list no Name", function() {
      it("responds with json", async () => {
        const response = await request(app)
          .post("/suppliers/list/")
          .send({
            supName: "",
            supContact: "619",
            supAddress: "5 Kings Place",
            supStatus: "Active",
            token:
              "eyJhbGciOiJIUzI1NiJ9.YWRtaW4.23a2LfcEJ7pbe5mqaW8cJ7kPr_e6jI3JLb9gXSf2h_k",
          });

        expect(response.statusCode).toBe(400);
        expect(response.body.error).toBe("Please enter full name");
      });
    });
    describe("POST /suppliers/list invalid char in name", function() {
      it("responds with json", async () => {
        const response = await request(app)
          .post("/suppliers/list/")
          .send({
            supName: "!j04q1n",
            supContact: "619",
            supAddress: "5 Kings Place",
            supStatus: "Active",
            token:
              "eyJhbGciOiJIUzI1NiJ9.YWRtaW4.23a2LfcEJ7pbe5mqaW8cJ7kPr_e6jI3JLb9gXSf2h_k",
          });

        expect(response.statusCode).toBe(400);
        expect(response.body.error).toBe(
          "Invalid chars aren't allowed as name"
        );
      });
    });
    describe("POST /suppliers/list no Contact", function() {
      it("responds with json", async () => {
        const response = await request(app)
          .post("/suppliers/list/")
          .send({
            supName: "joaquin",
            supContact: "",
            supAddress: "5 Kings Place",
            supStatus: "Active",
            token:
              "eyJhbGciOiJIUzI1NiJ9.YWRtaW4.23a2LfcEJ7pbe5mqaW8cJ7kPr_e6jI3JLb9gXSf2h_k",
          });

        expect(response.statusCode).toBe(400);
        expect(response.body.error).toBe("Please enter contact information");
      });
    });
    describe("POST /suppliers/list no Address", function() {
      it("responds with json", async () => {
        const response = await request(app)
          .post("/suppliers/list/")
          .send({
            supName: "joaquin",
            supContact: "619",
            supAddress: "",
            supStatus: "Active",
            token:
              "eyJhbGciOiJIUzI1NiJ9.YWRtaW4.23a2LfcEJ7pbe5mqaW8cJ7kPr_e6jI3JLb9gXSf2h_k",
          });
        expect(response.statusCode).toBe(400);
        expect(response.body.error).toBe("Please enter address");
      });
    });
    describe("Patch /suppliers/list invalid id", function() {
      it("responds with json", async () => {
        const response = await request(app)
          .patch("/suppliers/list/")
          .send({
            supName: "joaquin",
            supContact: "619",
            supAddress: "5 Kings Place",
            supStatus: "Active",
            token:
              "eyJhbGciOiJIUzI1NiJ9.YWRtaW4.23a2LfcEJ7pbe5mqaW8cJ7kPr_e6jI3JLb9gXSf2h_k",
          });
        expect(response.statusCode).toBe(404);
      });
    });

    describe("Patch /suppliers/list no supName", function() {
      it("responds with json", async () => {
        const response = await request(app)
          .patch("/suppliers/list/5")
          .send({
            supName: "",
            supContact: "619",
            supAddress: "5 Kings Place",
            supStatus: "Active",
            token:
              "eyJhbGciOiJIUzI1NiJ9.YWRtaW4.23a2LfcEJ7pbe5mqaW8cJ7kPr_e6jI3JLb9gXSf2h_k",
          });
        expect(response.statusCode).toBe(400);
        expect(response.body.error).toBe("Please enter full name");
      });
    });
    describe("PATCH /suppliers/list no supAddress", function() {
      it("responds with json", async () => {
        const response = await request(app)
          .patch("/suppliers/list/5")
          .send({
            supName: "joaquin",
            supContact: "619",
            supAddress: "",
            supStatus: "Active",
            token:
              "eyJhbGciOiJIUzI1NiJ9.YWRtaW4.23a2LfcEJ7pbe5mqaW8cJ7kPr_e6jI3JLb9gXSf2h_k",
          });
        expect(response.statusCode).toBe(400);
        expect(response.body.error).toBe("Please enter address");
      });
    });
    describe("PATCH /suppliers/list no supContact", function() {
      it("responds with json", async () => {
        const response = await request(app)
          .patch("/suppliers/list/5")
          .send({
            supName: "joaquin",
            supContact: "",
            supAddress: "5 Kings Place",
            supStatus: "Active",
            token:
              "eyJhbGciOiJIUzI1NiJ9.YWRtaW4.23a2LfcEJ7pbe5mqaW8cJ7kPr_e6jI3JLb9gXSf2h_k",
          });
        expect(response.statusCode).toBe(400);
        expect(response.body.error).toBe("Please enter contact information");
      });
    });
    describe("PATCH /suppliers/list name with invalid char", function() {
      it("responds with json", async () => {
        const response = await request(app)
          .patch("/suppliers/list/5")
          .send({
            supName: "jo4qu!n",
            supContact: "619",
            supAddress: "5 Kings Place",
            supStatus: "Active",
            token:
              "eyJhbGciOiJIUzI1NiJ9.YWRtaW4.23a2LfcEJ7pbe5mqaW8cJ7kPr_e6jI3JLb9gXSf2h_k",
          });
        expect(response.statusCode).toBe(400);
        expect(response.body.error).toBe(
          "Invalid chars aren't allowed as name"
        );
      });
    });
    describe("POST /suppliers/list no token", function() {
      it("responds with json", async () => {
        const response = await request(app)
          .post("/suppliers/list/")
          .send({
            supName: "joaquin",
            supContact: "619",
            supAddress: "5 Kings Place",
            supStatus: "Active",
          });
        expect(response.statusCode).toBe(403);
        expect(response.body.message).toBe("No token provided.");
      });
    });

    describe("POST /suppliers/list with an Existing Name", function() {
      it("responds with json", async () => {
        const response = await request(app)
          .post("/suppliers/list/")
          .send({
            supName: "Unregistered Supplier",
            supContact: "619",
            supAddress: "5 Kings Place",
            supStatus: "Active",
            token:
              "eyJhbGciOiJIUzI1NiJ9.YWRtaW4.23a2LfcEJ7pbe5mqaW8cJ7kPr_e6jI3JLb9gXSf2h_k",
          });
        expect(response.statusCode).toBe(400);
        expect(response.body.error).toBe("Name already exists");
      });
    });
    describe("PATCH /suppliers/list/5", function() {
      it("responds with json", async () => {
        const response = await request(app)
          .patch("/suppliers/list/5")
          .send({
            supName: "joker",
            supContact: "80085",
            supAddress: "5 men's Palace",
            supStatus: "Active",
            token:
              "eyJhbGciOiJIUzI1NiJ9.YWRtaW4.23a2LfcEJ7pbe5mqaW8cJ7kPr_e6jI3JLb9gXSf2h_k",
          });
        expect(response.statusCode).toBe(201);
        expect(response.body.result.message).toBe(
          "Supplier updated succesfully!"
        );
      });
    });
    describe("PATCH /suppliers/list/ with invalid id BOUND TO SUCCEFULLY FAIL", function() {
      it("responds with json", async () => {
        const response = await request(app)
          .patch("/suppliers/list/10")
          .send({
            supName: "joker",
            supContact: "80085",
            supAddress: "5 men's Palace",
            supStatus: "Active",
            token:
              "eyJhbGciOiJIUzI1NiJ9.YWRtaW4.23a2LfcEJ7pbe5mqaW8cJ7kPr_e6jI3JLb9gXSf2h_k",
          });
        expect(response.statusCode).toBe(201);
        expect(response.body.result.message).toBe("Failed to update supplier.");
      });
    });
    describe("DELETE /suppliers/list", function() {
      it("responds with json", async () => {
        const response = await request(app)
          .delete("/suppliers/list/5")
          .send({
            supName: "joker",
            supContact: "80085",
            supAddress: "5 men's Palace",
            supStatus: "Active",
            token:
              "eyJhbGciOiJIUzI1NiJ9.YWRtaW4.23a2LfcEJ7pbe5mqaW8cJ7kPr_e6jI3JLb9gXSf2h_k",
          });
        expect(response.statusCode).toBe(200);
        expect(response.body.removeSuppliers).toBe(
          "Supplier deleted successfully."
        );
      });
    });
    describe("DELETE /suppliers/list/:id SUCCESFULY FAIL", function() {
      it("responds with json", async () => {
        const response = await request(app)
          .delete("/suppliers/list/10")
          .send({
            supName: "joker",
            supContact: "80085",
            supAddress: "5 men's Palace",
            supStatus: "Active",
            token:
              "eyJhbGciOiJIUzI1NiJ9.YWRtaW4.23a2LfcEJ7pbe5mqaW8cJ7kPr_e6jI3JLb9gXSf2h_k",
          });
        expect(response.statusCode).toBe(400);
        expect(response.body.error).toBe("No Suppliers Found.");
      });
    });
  });
});
