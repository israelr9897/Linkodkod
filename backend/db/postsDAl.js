import fs from "fs";

export async function getAllPostsDB() {
  try {
    const data = fs.readFileSync("db/postsData.txt", "utf-8", () => {});
    return data;
  } catch (error) {
    throw error;
  }
}
