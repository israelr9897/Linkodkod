// export type PostType = {
//     id: string;
//     discrption: string;
//     content: string;
//     name: string;
//     date: string;
//     like: string;
//     dislike: string;
//   };

export function checkPost(req, res, next){
    if(req.body.name && req.body.discrption && req.body.content) return next()
    else res.status(403).json({msg: "Invalid parameter"})
}