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

  describe("deliveryTransaction routes test", () => {
    describe("POST /transaction/delivery", function() {
      it("responds with json", async () => {
        const response = await request(app)
          .post("/transaction/delivery/")
          .set(
            "token",
            "eyJhbGciOiJIUzI1NiJ9.YWRtaW4.23a2LfcEJ7pbe5mqaW8cJ7kPr_e6jI3JLb9gXSf2h_k"
          );
        console.log("response body: ", response.body);
        console.log("response status: ", response.status);
        expect(response.statusCode).toBe(400);
        expect(response.body.error).toBe("No items added!");
      });
    });
    describe("deliveryTransaction routes test", () => {
      describe("POST /transaction/delivery", function() {
        it("responds with json", async () => {
          const response = await request(app)
            .post("/transaction/delivery/")
            .send({
              grandTotal: 3000,
              supName: "Unregistered Supplier",
              deliveryDate: "04-20-2021",

              token:
                "eyJhbGciOiJIUzI1NiJ9.YWRtaW4.23a2LfcEJ7pbe5mqaW8cJ7kPr_e6jI3JLb9gXSf2h_k",
            });
          console.log("response body: ", response.body);
          console.log("response status: ", response.status);
          expect(response.statusCode).toBe(400);
          expect(response.body.error).toBe("No items added!");
        });
      });

      describe("POST /transaction/delivery", function() {
        it("responds with json", async () => {
          const response = await request(app)
            .post("/transaction/delivery/")
            .send({
              grandTotal: 3000,
              supName: "Unregistered Supplier",
              deliveryDate: "04-20-2021",
              itemsList: [
                {
                  id: 1,
                  name: "item1",
                  selectedQuantity: 100,
                  price: 10,
                  subTotal: 1000,
                },
                {
                  id: 2,
                  name: "item2",
                  selectedQuantity: 100,
                  price: 20,
                  subTotal: 2000,
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

      describe("GET /transaction/delivery by id", function() {
        it("responds with json", async () => {
          const response = await request(app)
            .get("/transaction/delivery/1")
            .send({
              token:
                "eyJhbGciOiJIUzI1NiJ9.YWRtaW4.23a2LfcEJ7pbe5mqaW8cJ7kPr_e6jI3JLb9gXSf2h_k",
            });
          console.log("response body: ", response.body);
          console.log("response status: ", response.status);
          expect(response.statusCode).toBe(200);
        });
      });

      describe("GET /transaction/delivery", function() {
        it("responds with json", async () => {
          const response = await request(app)
            .get("/transaction/delivery/")
            .send({
              token:
                "eyJhbGciOiJIUzI1NiJ9.YWRtaW4.23a2LfcEJ7pbe5mqaW8cJ7kPr_e6jI3JLb9gXSf2h_k",
            });
          console.log("response body: ", response.body);
          console.log("response status: ", response.status);
          expect(response.statusCode).toBe(200);
        });
      });

      describe("PATCH /transaction/delivery", function() {
        it("responds with json", async () => {
          const response = await request(app)
            .patch("/transaction/delivery/5")
            .send({
              grandTotal: 3000,
              supName: "Unregistered Supplier",
              deliveryDate: "04-20-2021",

              itemsList: [
                {
                  id: 1,
                  name: "item1",
                  selectedQuantity: 90,
                  price: 10,
                  subTotal: 900,
                },
                {
                  id: 2,
                  name: "item2",
                  selectedQuantity: 90,
                  price: 20,
                  subTotal: 1800,
                },
              ],
              token:
                "eyJhbGciOiJIUzI1NiJ9.YWRtaW4.23a2LfcEJ7pbe5mqaW8cJ7kPr_e6jI3JLb9gXSf2h_k",
            });
          console.log("response body: ", response.body);
          console.log("response status: ", response.status);
          expect(response.statusCode).toBe(201);
          // expect(response.body.result.message).toBe(
          //   "Customer updated succesfully!"
          //);
        });
      });

      describe("DELETE /transaction/delivery", function() {
        it("responds with json", async () => {
          const response = await request(app)
            .delete("/transaction/delivery/5")
            .send({
              token:
                "eyJhbGciOiJIUzI1NiJ9.YWRtaW4.23a2LfcEJ7pbe5mqaW8cJ7kPr_e6jI3JLb9gXSf2h_k",
            });
          expect(response.statusCode).toBe(200);
          // expect(response.body.removeCustomers).toBe(
          //   "Customer deleted successfully."
          // );
        });
      });
    });
  });
});