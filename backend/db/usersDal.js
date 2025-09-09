import fs from "fs";

export async function getAllUsersDB() {
  try {
    const data = fs.readFileSync("db/usersData.txt","utf-8", () => {});
    return data;
  } catch (error) {
    throw error;
  }
}
export async function writeAllUsersDB(data) {
  try {
    fs.writeFileSync("db/usersData.txt", JSON.stringify(data),() => {});
  } catch (error) {
    throw error;
  }
}
