const express =require('express');
const router = express.Router();

//routes
router.get('',(req,res)=>{
    res.send("hello world");
});

module.exports = router;