import request from "supertest";
import express from "express";
import mongoose from "mongoose";
import bugRoutes from "../routes/bugs.js";

const app = express();
app.use(express.json());
app.use("/api/bugs", bugRoutes);

beforeAll(async () => {
  await mongoose.connect("mongodb://127.0.0.1:27017/mernBugTrackerTest");
});

afterAll(async () => {
  await mongoose.connection.db.dropDatabase();
  await mongoose.connection.close();
});

describe("Bug API", () => {
  it("should create a new bug", async () => {
    const res = await request(app).post("/api/bugs").send({
      title: "Test bug",
      description: "Testing bug creation"
    });
    expect(res.statusCode).toBe(201);
    expect(res.body.title).toBe("Test bug");
  });
});
