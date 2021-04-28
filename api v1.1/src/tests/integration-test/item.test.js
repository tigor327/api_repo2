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

  describe("item routes test", () => {
    describe("GET /items/list", function() {
      it("responds with json", async () => {
        const response = await request(app)
          .get("/items/list/")
          .send({
            token: token,
          });
        console.log("response body: ", response.body);
        console.log("response status: ", response.status);

        expect(response.statusCode).toBe(200);
      });
    });

    describe("POST /items/list pls enter item name", function() {
      it("responds with json", async () => {
        const response = await request(app)
          .post("/items/list/")
          .send({
            barcode: "ab12-cd34",
            description: "item3 description",
            price: 30,
            quantity: 100,
            itemStatus: "Active",
            supName: "Unregistered Supplier",
            token: token,
          });
        console.log("response body: ", response.body);
        console.log("response status: ", response.status);

        expect(response.statusCode).toBe(400);
        expect(response.body.error).toBe("Item name can't be blank!");
      });
    });

    describe("POST /items/list supplier name name can't be blank!", function() {
      it("responds with json", async () => {
        const response = await request(app)
          .post("/items/list/")
          .send({
            name: "item3",
            barcode: "ab12-cd34",
            description: "item3 description",
            price: 30,
            quantity: 100,
            itemStatus: "Active",
            token: token,
          });
        console.log("response body: ", response.body);
        console.log("response status: ", response.status);

        expect(response.statusCode).toBe(400);
        expect(response.body.error).toBe("supplier id can't be blank!");
      });
    });

    describe("POST /items/list barcode can't be blank!", function() {
      it("responds with json", async () => {
        const response = await request(app)
          .post("/items/list/")
          .send({
            name: "item3",

            description: "item3 description",
            price: 30,
            quantity: 100,
            itemStatus: "Active",
            supName: "Unregistered Supplier",
            token: token,
          });
        console.log("response body: ", response.body);
        console.log("response status: ", response.status);

        expect(response.statusCode).toBe(400);
        expect(response.body.error).toBe("barcode can't be blank!");
      });
    });
    describe("POST /items/list description can't be blank!", function() {
      it("responds with json", async () => {
        const response = await request(app)
          .post("/items/list/")
          .send({
            name: "item3",
            barcode: "ab12-cd34",

            price: 30,
            quantity: 100,
            itemStatus: "Active",
            supName: "Unregistered Supplier",
            token: token,
          });
        console.log("response body: ", response.body);
        console.log("response status: ", response.status);

        expect(response.statusCode).toBe(400);
        expect(response.body.error).toBe("description can't be blank!");
      });
    });

    describe("POST /items/list Item price can't be blank!", function() {
      it("responds with json", async () => {
        const response = await request(app)
          .post("/items/list/")
          .send({
            name: "item3",
            barcode: "ab12-cd34",
            description: "item3 description",
            quantity: 100,
            itemStatus: "Active",
            supName: "Unregistered Supplier",
            token: token,
          });
        console.log("response body: ", response.body);
        console.log("response status: ", response.status);

        expect(response.statusCode).toBe(400);
        expect(response.body.error).toBe("Item price can't be blank!");
      });
    });

    describe("POST /items/list Item quantity can't be blank!", function() {
      it("responds with json", async () => {
        const response = await request(app)
          .post("/items/list/")
          .send({
            name: "item3",
            barcode: "ab12-cd34",
            description: "item3 description",
            price: 30,
            itemStatus: "Active",
            supName: "Unregistered Supplier",
            token: token,
          });
        console.log("response body: ", response.body);
        console.log("response status: ", response.status);

        expect(response.statusCode).toBe(201);
      });
    });
    describe("POST /items/list", function() {
      it("responds with json", async () => {
        const response = await request(app)
          .post("/items/list/")
          .send({
            name: "item3",
            barcode: "ab12-cd34",
            description: "item3 description",
            price: 30,
            quantity: 100,
            itemStatus: "Active",
            supName: "Unregistered Supplier",
            token: token,
          });
        console.log("response body: ", response.body);
        console.log("response status: ", response.status);

        expect(response.statusCode).toBe(400);
        expect(response.body.error).toBe("Name already exists");
      });
    });
    describe("POST /items/list Quantity has to be a number!", function() {
      it("responds with json", async () => {
        const response = await request(app)
          .post("/items/list/")
          .send({
            name: "itemaa34",
            barcode: "ab12-cdaa34",
            description: "item3 description",
            price: 30,
            quantity: "abs",
            supName: "Unregistered Supplier",
            token: token,
          });
        console.log("response body: ", response.body);
        console.log("response status: ", response.status);

        expect(response.statusCode).toBe(400);
        expect(response.body.error).toBe("Quantity has to be a number!");
      });
    });
    describe("POST /items/list Item price has to be a number!", function() {
      it("responds with json", async () => {
        const response = await request(app)
          .post("/items/list/")
          .send({
            name: "itemaa34",
            barcode: "ab12-cdaa34",
            description: "item3 description",
            price: "asdf",
            quantity: 300,
            supName: "Unregistered Supplier",
            token: token,
          });
        console.log("response body: ", response.body);
        console.log("response status: ", response.status);

        expect(response.statusCode).toBe(400);
        expect(response.body.error).toBe("Item price has to be a number!");
      });
    });
    describe("POST /items/list", function() {
      it("responds with json", async () => {
        const response = await request(app)
          .post("/items/list/")
          .send({
            name: "itemaa34",
            barcode: "ab12-cdaa34",
            description: "item3 description",
            price: 30,
            quantity: 100,
            supName: "Unregistered Supplier",
            token: token,
          });
        console.log("response body: ", response.body);
        console.log("response status: ", response.status);

        expect(response.statusCode).toBe(201);
      });
    });
    describe("POST /items/list", function() {
      it("responds with json", async () => {
        const response = await request(app)
          .post("/items/list/")
          .send({
            name: "item34",
            barcode: "ab12-cd34",
            description: "item3 description",
            price: 30,
            quantity: 100,
            itemStatus: "Active",
            supName: "Unregistered Supplier",
            token: token,
          });
        console.log("response body: ", response.body);
        console.log("response status: ", response.status);

        expect(response.statusCode).toBe(400);
        expect(response.body.error).toBe("barcode already exists");
      });
    });
    describe("POST /items/list", function() {
      it("responds with json", async () => {
        const response = await request(app)
          .post("/items/list/")
          .send({
            name: "item363",
            barcode: "ab12-cd343636",
            description: "item3 description",
            price: 30,
            quantity: 100,
            itemStatus: "Active",
            supName: "Unregistered Supplier",
            token: token,
          });
        console.log("response body: ", response.body);
        console.log("response status: ", response.status);

        expect(response.statusCode).toBe(201);
      });
    });
    describe("POST /items/list", function() {
      it("responds with json", async () => {
        const response = await request(app)
          .post("/items/list/")
          .send({
            name:
              "asdasdasdasdasdgvxcaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaavewasdasdasdasdasdgvxcaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeaaaaaaaaa",
            barcode: "ab12-cdasd34",
            description: "item3 description",
            price: 30,
            quantity: 100,
            itemStatus: "Active",
            supName: "Unregistered Supplier",
            token: token,
          });
        console.log("response body: ", response.body);
        console.log("response status: ", response.status);

        expect(response.statusCode).toBe(400);
        expect(response.body.error).toBe("Failed to register item.");
      });
    });

    describe("PATCH /items/list/3 Item name can't be blank!", function() {
      it("responds with json", async () => {
        const response = await request(app)
          .patch("/items/list/3")
          .send({
            barcode: "ab12-cd345",
            description: "item3 description patched",
            price: 30,
            quantity: 100,
            itemStatus: "Active",
            supName: "Unregistered Supplier",
            token: token,
          });
        console.log("response body: ", response.body);
        console.log("response status: ", response.status);

        expect(response.statusCode).toBe(400);
        expect(response.body.error).toBe("Item name can't be blank!");
      });
    });

    describe("PATCH /items/list/3 supplier name name can't be blank!", function() {
      it("responds with json", async () => {
        const response = await request(app)
          .patch("/items/list/3")
          .send({
            name: "item3 patched",
            barcode: "ab12-cd345",
            description: "item3 description patched",
            price: 30,
            quantity: 100,
            itemStatus: "Active",
            token: token,
          });
        console.log("response body: ", response.body);
        console.log("response status: ", response.status);

        expect(response.statusCode).toBe(400);
        expect(response.body.error).toBe("supplier name name can't be blank!");
      });
    });

    describe("PATCH /items/list/3 barcode can't be blank!", function() {
      it("responds with json", async () => {
        const response = await request(app)
          .patch("/items/list/3")
          .send({
            name: "item3 patched",
            description: "item3 description patched",
            price: 30,
            quantity: 100,
            itemStatus: "Active",
            supName: "Unregistered Supplier",
            token: token,
          });
        console.log("response body: ", response.body);
        console.log("response status: ", response.status);

        expect(response.statusCode).toBe(400);
        expect(response.body.error).toBe("barcode can't be blank!");
      });
    });

    describe("PATCH /items/list/3 description can't be blank!", function() {
      it("responds with json", async () => {
        const response = await request(app)
          .patch("/items/list/3")
          .send({
            name: "item3 patched",
            barcode: "ab12-cd345",
            price: 30,
            quantity: 100,
            itemStatus: "Active",
            supName: "Unregistered Supplier",
            token: token,
          });
        console.log("response body: ", response.body);
        console.log("response status: ", response.status);

        expect(response.statusCode).toBe(400);
        expect(response.body.error).toBe("description can't be blank!");
      });
    });

    describe("PATCH /items/list/3 Item price can't be blank!", function() {
      it("responds with json", async () => {
        const response = await request(app)
          .patch("/items/list/3")
          .send({
            name: "item3 patched",
            barcode: "ab12-cd345",
            description: "item3 description patched",
            quantity: 100,
            itemStatus: "Active",
            supName: "Unregistered Supplier",
            token: token,
          });
        console.log("response body: ", response.body);
        console.log("response status: ", response.status);

        expect(response.statusCode).toBe(400);
        expect(response.body.error).toBe("Item price can't be blank!");
      });
    });

    describe("PATCH /items/list/3 Item quantity can't be blank!", function() {
      it("responds with json", async () => {
        const response = await request(app)
          .patch("/items/list/3")
          .send({
            name: "item3 patched",
            barcode: "ab12-cd345",
            description: "item3 description patched",
            price: 30,
            itemStatus: "Active",
            supName: "Unregistered Supplier",
            token: token,
          });
        console.log("response body: ", response.body);
        console.log("response status: ", response.status);

        expect(response.statusCode).toBe(400);
        expect(response.body.error).toBe("Item quantity can't be blank!");
      });
    });

    describe("PATCH /items/list/3", function() {
      it("responds with json", async () => {
        const response = await request(app)
          .patch("/items/list/3")
          .send({
            name: "item3 patched",
            barcode: "ab12-cd345",
            description: "item3 description patched",
            price: 30,
            quantity: 100,
            itemStatus: "Active",
            supName: "Unregistered Supplier",
            token: token,
          });
        console.log("response body: ", response.body);
        console.log("response status: ", response.status);

        expect(response.statusCode).toBe(201);
      });
    });
    describe("PATCH /items/list/3", function() {
      it("responds with json", async () => {
        const response = await request(app)
          .patch("/items/list/3")
          .send({
            name:
              "Steasdaa8aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeaeaaaaaaafaeal",
            barcode: "ab12-cd345",
            description: "item3 description patched",
            price: 30,
            quantity: 100,
            itemStatus: "Active",
            supName: "Unregistered Supplier",
            token: token,
          });
        console.log("response body: ", response.body);
        console.log("response status: ", response.status);

        expect(response.statusCode).toBe(400);
        expect(response.body.error).toBe("Failed to update item.");
      });
    });
    describe("DELETE /items/list/3", function() {
      it("responds with json", async () => {
        const response = await request(app)
          .delete("/items/list/3")
          .send({
            token: token,
          });
        expect(response.statusCode).toBe(200);
        expect(response.body.removeItems).toBe("Item deleted successfully.");
      });
    });
    describe("DELETE /items/list/3", function() {
      it("responds with json", async () => {
        const response = await request(app)
          .delete("/items/list/10")
          .send({
            token: token,
          });
        expect(response.statusCode).toBe(200);
        expect(response.body.removeItems).toBe(
          "Item was not deleted, please try again"
        );
      });
    });
  });
});
