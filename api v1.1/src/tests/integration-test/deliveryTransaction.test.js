// change to test DB
const app = require("../../../app");
var request = require("supertest");
//const { Server } = require("node:http");

describe(`Tests Suites`, () => {
  it("has a module", () => {
    expect(app).toBeDefined();
  });

  beforeAll(() => {});

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

  describe("deliveryTransaction routes test", () => {
    describe("POST /transaction/delivery Please enter delivery date.", function() {
      it("responds with json", async () => {
        const response = await request(app)
          .post("/transaction/delivery/")
          .send({
            grandTotal: 99999899,
            supName: "Unregistered Supplier",
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
            token: token,
          });
        console.log("response body: ", response.body);
        console.log("response status: ", response.status);
        expect(response.statusCode).toBe(400);
        expect(response.body.error).toBe("Please enter delivery date.");
      });
    });

    describe("POST /transaction/delivery Please enter grand total", function() {
      it("responds with json", async () => {
        const response = await request(app)
          .post("/transaction/delivery/")
          .send({
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
            token: token,
          });
        console.log("response body: ", response.body);
        console.log("response status: ", response.status);
        expect(response.statusCode).toBe(400);
        expect(response.body.error).toBe("Please enter grand total");
      });
    });

    describe("POST /transaction/delivery Please add items", function() {
      it("responds with json", async () => {
        const response = await request(app)
          .post("/transaction/delivery/")
          .send({
            grandTotal: 99999999,
            supName: "Unregistered Supplier",
            deliveryDate: "04-20-2021",
            token: token,
          });
        console.log("response body: ", response.body);
        console.log("response status: ", response.status);
        expect(response.statusCode).toBe(400);
        expect(response.body.error).toBe("Please add items");
      });
    });

    describe("POST /transaction/delivery no supName", function() {
      it("responds with json", async () => {
        const response = await request(app)
          .post("/transaction/delivery/")
          .send({
            grandTotal: 99999899,
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
            token: token,
          });
        console.log("response body: ", response.body);
        console.log("response status: ", response.status);
        expect(response.statusCode).toBe(201);
      });
    });

    // describe("POST /transaction/delivery", function() {
    //   it("responds with json", async () => {
    //     const response = await request(app)
    //       .post("/transaction/delivery/")
    //       .set(
    //         "token",
    //         token
    //       );
    //     console.log("response body: ", response.body);
    //     console.log("response status: ", response.status);
    //     expect(response.statusCode).toBe(400);
    //     expect(response.body.error).toBe("No items added!");
    //   });
    // });

    describe("POST /transaction/delivery", function() {
      it("responds with json", async () => {
        const response = await request(app)
          .post("/transaction/delivery/")
          .send({
            grandTotal: 3000,
            supName: "Unregistered Supplier",
            deliveryDate: "04-20-2021",

            token: token,
          });
        console.log("response body: ", response.body);
        console.log("response status: ", response.status);
        expect(response.statusCode).toBe(400);
        expect(response.body.error).toBe("Please add items");
      });
    });
    describe("POST /transaction/delivery", function() {
      it("responds with json", async () => {
        const response = await request(app)
          .post("/transaction/delivery/")
          .send({
            grandTotal: 9999999899,
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
            token: token,
          });
        console.log("response body: ", response.body);
        console.log("response status: ", response.status);
        expect(response.statusCode).toBe(400);
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
            token: token,
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
            token: token,
          });
        console.log("response body: ", response.body);
        console.log("response status: ", response.status);
        expect(response.statusCode).toBe(200);
      });
    });
    describe("GET /transaction/delivery by id", function() {
      it("responds with json", async () => {
        const response = await request(app)
          .get("/transaction/delivery/12")
          .send({
            token: token,
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
            token: token,
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
            token: token,
          });
        console.log("response body: ", response.body);
        console.log("response status: ", response.status);
        expect(response.statusCode).toBe(201);
        expect(response.body.result.message).toBe(
          "DeliveryTransactions updated succesfully!"
        );

        // expect(response.body.result.message).toBe(
        //   "Customer updated succesfully!"
        //);
      });
    });

    describe("PATCH /transaction/delivery", function() {
      it("responds with json", async () => {
        const response = await request(app)
          .patch("/transaction/delivery/5")
          .send({
            grandTotal: 30009999999,
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
            token: token,
          });
        console.log("response body: ", response.body);
        console.log("response status: ", response.status);
        expect(response.statusCode).toBe(400);
        expect(response.body.error).toBe(
          "Failed to update deliveryTransaction."
        );
      });
    });

    describe("PATCH /transaction/delivery Please enter full name", function() {
      it("responds with json", async () => {
        const response = await request(app)
          .patch("/transaction/delivery/5")
          .send({
            grandTotal: 30009999999,
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
            token: token,
          });
        console.log("response body: ", response.body);
        console.log("response status: ", response.status);
        expect(response.statusCode).toBe(400);
        expect(response.body.error).toBe("Please enter full name");
      });
    });

    describe("PATCH /transaction/delivery", function() {
      it("responds with json", async () => {
        const response = await request(app)
          .patch("/transaction/delivery/5 Please enter grand total")
          .send({
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
            token: token,
          });
        console.log("response body: ", response.body);
        console.log("response status: ", response.status);
        expect(response.statusCode).toBe(400);
        expect(response.body.error).toBe("Please enter grand total");
      });
    });

    describe("PATCH /transaction/delivery Please add items", function() {
      it("responds with json", async () => {
        const response = await request(app)
          .patch("/transaction/delivery/5")
          .send({
            grandTotal: 30009999999,
            supName: "Unregistered Supplier",
            deliveryDate: "04-20-2021",

            token: token,
          });
        console.log("response body: ", response.body);
        console.log("response status: ", response.status);
        expect(response.statusCode).toBe(400);
        expect(response.body.error).toBe("Please add items");
      });
    });

    describe("PATCH /transaction/delivery Please enter deliveryDate", function() {
      it("responds with json", async () => {
        const response = await request(app)
          .patch("/transaction/delivery/5")
          .send({
            grandTotal: 30009999999,
            supName: "Unregistered Supplier",

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
            token: token,
          });
        console.log("response body: ", response.body);
        console.log("response status: ", response.status);
        expect(response.statusCode).toBe(400);
        expect(response.body.error).toBe("Please enter deliveryDate");
      });
    });

    describe("DELETE /transaction/delivery", function() {
      it("responds with json", async () => {
        const response = await request(app)
          .delete("/transaction/delivery/5")
          .send({
            token: token,
          });
        expect(response.statusCode).toBe(200);
        expect(response.body.removeDeliveryTransactions).toBe(
          "DeliveryTransaction deleted successfully."
        );
      });
    });
    describe("DELETE /transaction/delivery non_existing ID", function() {
      it("responds with json", async () => {
        const response = await request(app)
          .delete("/transaction/delivery/10")
          .send({
            token: token,
          });
        expect(response.statusCode).toBe(200);
        expect(response.body.removeDeliveryTransactions).toBe(
          "DeliveryTransaction was not deleted, please try again"
        );
      });
    });
  });
});
