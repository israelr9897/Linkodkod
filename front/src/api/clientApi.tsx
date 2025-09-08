export async function GetAllPostsApi() {
    const response = await fetch("http://localhost:3005/posts")
    const data = await response.json()
    return JSON.parse(data.data)
    
}