//פונקציה הבודקת האם כל הערכים שצריכים להיות קיימים
export function checkPost(req, res, next){
    if(req.body.name && req.body.discrption && req.body.content) return next()
    else res.status(403).json({msg: "Invalid parameter"})
}