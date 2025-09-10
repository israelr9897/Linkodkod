import { describe, test } from "node:test";
import assert from "node:assert";
import {
  createToken,
  ReturnHashPassword,
  returnIsPassword,
} from "./db/services/authService.js";

const token = createToken({ username: "israel" });
const hashPassword = await ReturnHashPassword("1234");


//בדיקות ליצירת טוקן
describe("create token", () => {
  test("Correct token", () => {
    assert.deepStrictEqual(createToken({ username: "israel" }), token);
  });
  test("empty user", () => {
    assert.deepStrictEqual(createToken(), "");
  });
});

//בדיקות להצפנת סיסמא
describe("create hash password", () => {
  test("Correct password", async () => {
    assert.deepStrictEqual((await ReturnHashPassword("1234")).length, 60);
  });
  test("empty password", async () => {
    assert.deepStrictEqual(await ReturnHashPassword(), false);
  });
});

//בדיקות לבדיקת סיסמא מוצפנת
describe("is true hash password", () => {
  test("hash password is true", async () => {
    assert.deepStrictEqual(await returnIsPassword("1234", hashPassword), true);
  });
  test("hash password is false", async () => {
    assert.deepStrictEqual(await returnIsPassword("1111", hashPassword), false);
  });
  test("hash password is empty", async () => {
    assert.deepStrictEqual(await returnIsPassword("1111"), false);
  });
  test("empty", async () => {
    assert.deepStrictEqual(await returnIsPassword(), false);
  });
});
