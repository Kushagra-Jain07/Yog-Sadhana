const express = require("express")
const Review = require("../models/reviewModel")

const router = express.Router()

router.get("/review", async(req,res) => {
    const reviews = await Review.find({})
    res.send(reviews)
})

router.post("/review", async(req, res) =>{
    const rev = new Review({
        stars: req.body.stars,
        review: req.body.review,
        name: req.body.name
    })

    const newReview = await rev.save()

    if(newReview){
        res.send({
            success: true,
            showReview: false
        })
    }else{
        res.status(401).send({msg: "Invalid Data"})
    }
})

module.exports = router