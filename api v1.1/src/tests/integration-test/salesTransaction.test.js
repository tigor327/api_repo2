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

  describe("salesTransaction routes test", () => {
    describe("GET /transaction/sales", function() {
      it("responds with json", async () => {
        const response = await request(app)
          .get("/transaction/sales")
          .send({
            token:
              "eyJhbGciOiJIUzI1NiJ9.YWRtaW4.23a2LfcEJ7pbe5mqaW8cJ7kPr_e6jI3JLb9gXSf2h_k",
          });
        console.log("response body: ", response.body);
        console.log("response status: ", response.status);

        expect(response.statusCode).toBe(200);
      });
    });
    describe("GET /transaction/sales by non-existing id", function() {
      it("responds with json", async () => {
        const response = await request(app)
          .get("/transaction/sales/10")
          .send({
            token:
              "eyJhbGciOiJIUzI1NiJ9.YWRtaW4.23a2LfcEJ7pbe5mqaW8cJ7kPr_e6jI3JLb9gXSf2h_k",
          });
        console.log("response body: ", response.body);
        console.log("response status: ", response.status);

        expect(response.statusCode).toBe(200);
        expect(response.body.salesList).toBe("transaction does not exist.");
      });
    });
    describe("GET /transaction/sales by id", function() {
      it("responds with json", async () => {
        const response = await request(app)
          .get("/transaction/sales/3")
          .send({
            token:
              "eyJhbGciOiJIUzI1NiJ9.YWRtaW4.23a2LfcEJ7pbe5mqaW8cJ7kPr_e6jI3JLb9gXSf2h_k",
          });
        console.log("response body: ", response.body);
        console.log("response status: ", response.status);

        expect(response.statusCode).toBe(200);
      });
    });
    describe("POST /transaction/sales", function() {
      it("responds with json", async () => {
        const response = await request(app)
          .post("/transaction/sales")
          .send({
            grandTotal: 9899999999,
            custName: "Unregistered Customer",

            itemsList: [
              {
                id: 1,
                name: "item1",
                selectedQuantity: 10,
                price: 10,
                subTotal: 100,
              },
              {
                id: 2,
                name: "item2",
                selectedQuantity: 10,
                price: 20,
                subTotal: 200,
              },
            ],
            token:
              "eyJhbGciOiJIUzI1NiJ9.YWRtaW4.23a2LfcEJ7pbe5mqaW8cJ7kPr_e6jI3JLb9gXSf2h_k",
          });
        console.log("response body: ", response.body);
        console.log("response status: ", response.status);

        expect(response.statusCode).toBe(400);
        expect(response.body.error).toBe(
          "Failed to register SalesTransaction."
        );
      });
    });
    describe("POST /transaction/sales no items added", function() {
      it("responds with json", async () => {
        const response = await request(app)
          .post("/transaction/sales")
          .send({
            grandTotal: 3000,
            custName: "Unregistered Customer",
            token:
              "eyJhbGciOiJIUzI1NiJ9.YWRtaW4.23a2LfcEJ7pbe5mqaW8cJ7kPr_e6jI3JLb9gXSf2h_k",
          });
        console.log("response body: ", response.body);
        console.log("response status: ", response.status);

        expect(response.statusCode).toBe(400);
        expect(response.body.error).toBe("No items added!");
      });
    });
    describe("POST /transaction/sales", function() {
      it("responds with json", async () => {
        const response = await request(app)
          .post("/transaction/sales")
          .send({
            grandTotal: 3000,
            custName: "Unregistered Customer",

            itemsList: [
              {
                id: 1,
                name: "item1",
                selectedQuantity: 10,
                price: 10,
                subTotal: 100,
              },
              {
                id: 2,
                name: "item2",
                selectedQuantity: 10,
                price: 20,
                subTotal: 200,
              },
            ],
            token:
              "eyJhbGciOiJIUzI1NiJ9.YWRtaW4.23a2LfcEJ7pbe5mqaW8cJ7kPr_e6jI3JLb9gXSf2h_k",
          });
        console.log("response body: ", response.body);
        console.log("response status: ", response.status);

        expect(response.statusCode).toBe(201);
      });
    });
    describe("POST /transaction/sales no custName", function() {
      it("responds with json", async () => {
        const response = await request(app)
          .post("/transaction/sales")
          .send({
            grandTotal: 3000,

            itemsList: [
              {
                id: 1,
                name: "item1",
                selectedQuantity: 10,
                price: 10,
                subTotal: 100,
              },
              {
                id: 2,
                name: "item2",
                selectedQuantity: 10,
                price: 20,
                subTotal: 200,
              },
            ],
            token:
              "eyJhbGciOiJIUzI1NiJ9.YWRtaW4.23a2LfcEJ7pbe5mqaW8cJ7kPr_e6jI3JLb9gXSf2h_k",
          });
        console.log("response body: ", response.body);
        console.log("response status: ", response.status);

        expect(response.statusCode).toBe(201);
      });
    });
    describe("POST /transaction/sales no custName", function() {
      it("responds with json", async () => {
        const response = await request(app)
          .post("/transaction/sales")
          .send({
            custName: "Unregistered Customer",

            itemsList: [
              {
                id: 1,
                name: "item1",
                selectedQuantity: 10,
                price: 10,
                subTotal: 100,
              },
              {
                id: 2,
                name: "item2",
                selectedQuantity: 10,
                price: 20,
                subTotal: 200,
              },
            ],
            token:
              "eyJhbGciOiJIUzI1NiJ9.YWRtaW4.23a2LfcEJ7pbe5mqaW8cJ7kPr_e6jI3JLb9gXSf2h_k",
          });
        console.log("response body: ", response.body);
        console.log("response status: ", response.status);

        expect(response.statusCode).toBe(400);
        expect(response.body.error).toBe("Please enter grand total.");
      });
    });

    describe("PATCH /transaction/sales/5", function() {
      it("responds with json", async () => {
        const response = await request(app)
          .patch("/transaction/sales/5")
          .send({
            grandTotal: 3000,
            custName: "Unregistered Customer",

            itemsList: [
              {
                id: 1,
                name: "item1",
                selectedQuantity: 20,
                price: 10,
                subTotal: 200,
              },
              {
                id: 2,
                name: "item2",
                selectedQuantity: 20,
                price: 20,
                subTotal: 400,
              },
            ],
            token:
              "eyJhbGciOiJIUzI1NiJ9.YWRtaW4.23a2LfcEJ7pbe5mqaW8cJ7kPr_e6jI3JLb9gXSf2h_k",
          });
        console.log("response body: ", response.body);
        console.log("response status: ", response.status);

        expect(response.statusCode).toBe(201);
        expect(response.body.result.message).toBe(
          "SalesTransactions updated succesfully!"
        );
      });
    });
    describe("PATCH /transaction/sales/5", function() {
      it("responds with json", async () => {
        const response = await request(app)
          .patch("/transaction/sales/5")
          .send({
            grandTotal: 3000,
            custName: "Unregistered Customer",

            token:
              "eyJhbGciOiJIUzI1NiJ9.YWRtaW4.23a2LfcEJ7pbe5mqaW8cJ7kPr_e6jI3JLb9gXSf2h_k",
          });
        console.log("response body: ", response.body);
        console.log("response status: ", response.status);

        expect(response.statusCode).toBe(400);
        expect(response.body.error).toBe("No items added");
      });
    });
    describe("PATCH /transaction/sales/5 invalid id", function() {
      it("responds with json", async () => {
        const response = await request(app)
          .patch("/transaction/sales/10")
          .send({
            grandTotal: 3000,
            custName: "Unregistered Customer",

            itemsList: [
              {
                id: 1,
                name: "item1",
                selectedQuantity: 20,
                price: 10,
                subTotal: 200,
              },
              {
                id: 2,
                name: "item2",
                selectedQuantity: 20,
                price: 20,
                subTotal: 400,
              },
            ],
            token:
              "eyJhbGciOiJIUzI1NiJ9.YWRtaW4.23a2LfcEJ7pbe5mqaW8cJ7kPr_e6jI3JLb9gXSf2h_k",
          });
        console.log("response body: ", response.body);
        console.log("response status: ", response.status);

        expect(response.statusCode).toBe(400);
        expect(response.body.error).toBe("Failed to update salesTransaction.");
      });
    });
    describe("PATCH /transaction/sales/5 no custName", function() {
      it("responds with json", async () => {
        const response = await request(app)
          .patch("/transaction/sales/5")
          .send({
            grandTotal: 3000,

            itemsList: [
              {
                id: 1,
                name: "item1",
                selectedQuantity: 20,
                price: 10,
                subTotal: 200,
              },
              {
                id: 2,
                name: "item2",
                selectedQuantity: 20,
                price: 20,
                subTotal: 400,
              },
            ],
            token:
              "eyJhbGciOiJIUzI1NiJ9.YWRtaW4.23a2LfcEJ7pbe5mqaW8cJ7kPr_e6jI3JLb9gXSf2h_k",
          });
        console.log("response body: ", response.body);
        console.log("response status: ", response.status);

        expect(response.statusCode).toBe(201);
      });
    });
    describe("PATCH /transaction/sales/5 no custName", function() {
      it("responds with json", async () => {
        const response = await request(app)
          .patch("/transaction/sales/5")
          .send({
            custName: "Unregistered Customer",

            itemsList: [
              {
                id: 1,
                name: "item1",
                selectedQuantity: 20,
                price: 10,
                subTotal: 200,
              },
              {
                id: 2,
                name: "item2",
                selectedQuantity: 20,
                price: 20,
                subTotal: 400,
              },
            ],
            token:
              "eyJhbGciOiJIUzI1NiJ9.YWRtaW4.23a2LfcEJ7pbe5mqaW8cJ7kPr_e6jI3JLb9gXSf2h_k",
          });
        console.log("response body: ", response.body);
        console.log("response status: ", response.status);

        expect(response.statusCode).toBe(400);
        expect(response.body.error).toBe("No Grand Total Added.");
      });
    });
    describe("DELETE /transaction/sales", function() {
      it("responds with json", async () => {
        const response = await request(app)
          .delete("/transaction/sales/5")
          .send({
            token:
              "eyJhbGciOiJIUzI1NiJ9.YWRtaW4.23a2LfcEJ7pbe5mqaW8cJ7kPr_e6jI3JLb9gXSf2h_k",
          });
        expect(response.statusCode).toBe(200);
        expect(response.body.removeSalesTransactions).toBe(
          "SalesTransaction deleted successfully."
        );
      });
    });
    describe("DELETE /transaction/sales non-existing", function() {
      it("responds with json", async () => {
        const response = await request(app)
          .delete("/transaction/sales/10")
          .send({
            token:
              "eyJhbGciOiJIUzI1NiJ9.YWRtaW4.23a2LfcEJ7pbe5mqaW8cJ7kPr_e6jI3JLb9gXSf2h_k",
          });
        expect(response.statusCode).toBe(400);
        expect(response.body.error).toBe(
          "SalesTransaction was not deleted, please try again"
        );
      });
    });
  });
});
