import { test, expect } from "@playwright/test"
import mysql from "mysql"

test.describe.only("Testing db", () => {
  let pool;

  test.beforeAll(async ({}) => {
    pool = mysql.createPool({
      host: "yh6.h.filess.io",
      user: "automation_heraction",
      password: "a15e5a47817c45a99ca9f32298e1cca90ea3c056",
      database: "automation_heraction",
      port: 3306,
    });
  });

  test("Create user", async () => {
    const userData = {
      username: "Lera",
      email: "test1234567@gmail.com",
      password: "123456",
    };

    try {
      await pool.query(
        "INSERT INTO userslitvinenko (username, email, password) VALUES (?, ?, ?)",
        [userData.username, userData.email, userData.password]
      );
      console.log("Successfully added user")
    } catch (error) {
      console.error("Error during creating user:", error.message)
    }
  });

  test("Read users", async () => {
    try {
      const result = await pool.query("SELECT * FROM userslitvinenko")
      console.log("Users:", result[0]);
    } catch (error) {
      console.error("Error during reading users:", error.message)
    }
  })

  test("Update user", async () => {
    try {
      await pool.query(
        "UPDATE userslitvinenko SET email = ? WHERE username = ?",
        ["updated_email@gmail.com", "Lera"]
      );
      console.log("Successfully updated user")
    } catch (error) {
      console.error("Error during updating user:", error.message)
    }
  });

  test("Delete user", async () => {
    const userData = {
      username: "Lera",
      email: "test1234567@gmail.com",
      password: "123456",
    };

    try {
      await pool.query("DELETE FROM userslitvinenko WHERE username = ?", [userData.username])
      console.log("Successfully deleted user")
    } catch (error) {
      console.error("Error during deleting user:", error.message)
    }
  });

  test("Check user count", async () => {
    try {
      const result = await pool.query("SELECT * FROM userslitvinenko")
      const expectedUserCount = 3
      const errorMessage = `Expecting ${expectedUserCount} users, but got ${result.length}`
      expect(result.length, errorMessage).toBe(expectedUserCount)
      console.log(`Successfully received ${result.length} users`)
    } catch (error) {
      console.error("Error during checking user count:", error.message)
    }
  })

  test.afterAll(async () => {
    pool.end()
  })
})