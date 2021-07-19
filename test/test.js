const request = require("supertest");

const app = require("../components/employees");

/**
 * Testing get all user endpoint
 */
describe("GET /user", () => {
  it("respond with json containing a list of all users", (done) => {
    request(app)
      .get("/user")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, done);
  });
});

/**
 * Testing user endpoint by giving an existing user
 */
 describe("GET /user/:id", () => {
    it("respond with json containing a single user", (done) => {
      request(app)
        .get("/user/2")
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(200, done);
    });
  
    it("respond with json user not found when the user does not exists", (done) => {
      request(app)
        .get("/user/nonexistinguser")
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(404)
        .expect('"user not found"')
        .end((err) => {
          if (err) return done(err);
          done();
        });
    });
  });
  
  /**
   * Testing POST users endpoint
   */
  describe("POST /user", () => {
    it("respond with 201 created", (done) => {
      const data = {
        fullname: "Maria test",
        functionEmployee: "Desarrolladora test",
      };
      request(app)
        .post("/user/5")
        .send(data)
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(201)
        .end((err) => {
          if (err) return done(err);
          done();
        });
    });
  
    it("respond with 400 on bad request", (done) => {
      const data = {
        // no username and password
      };
      request(app)
        .post("/user")
        .send(data)
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(400)
        .expect('"user not created"')
        .end((err) => {
          if (err) return done(err);
          done();
        });
    });
  });
