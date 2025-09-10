//פונקציה האם הפרמטרים הם מספרים
export function checkParams(req, res, next){
    if(Number.isFinite(Number(req.params.id))) return next()
    else res.status(403).json({msg: "Invalid parameter"})
}