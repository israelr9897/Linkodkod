import RouterPosts from "./postsRouter.js"

export default function configRouter(app){
    app.use("/posts", RouterPosts)
    
    //route not find
    app.use((req, res) => {
        res.status(404).json({ msg: "Route not find" });
      });
}