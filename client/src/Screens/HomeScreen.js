import React, { useState, useEffect } from "react"
import axios from "axios"
import ReactStars from "react-rating-stars-component"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

function HomeScreen() {

    const [addReview, showAddReview] = useState(false)
    const [reviews, setReviews] = useState([])
    const [stars, setStars] = useState(5)
    const [review, setReview] = useState("")
    const [name, setName] = useState("")

    const ratingChanged = (newRating) => {
        setStars(newRating)
    }

    useEffect(() => {
        axios.get("/review")
            .then(res => {
                setReviews(res.data)
            })
    })

    const submitHandler = (event) => {
        event.preventDefault()
        const rev = {
            stars, review, name
        }

        axios.post("/review", rev)
            .then(res => {
                showAddReview(res.data.showReview)
            })
        showAddReview(false)
    }

    var settings1 = {
        dots: false,
        infinite: false,
        slidesToShow: 1.1,
        slidesToScroll: 1,
        arrows: true
    }

    var settings = {
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        infinite: true,
        centerMode: true,
        centerPadding: '20px',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoPlay: false,
                    arrows: false
                }
            }
        ]
    }

    return (
        <div className="homeDiv">
            <div className="container">
                <div id="carousel" className="carousel slide carousel-fade" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-interval="4000">
                            <img src="/images/carousel1.jpg" className="d-block w-100 carouselImage" alt="..." />
                        </div>
                        <div className="carousel-item" data-interval="4000">
                            <img src="/images/5.jpg" className="d-block w-100 carouselImage" alt="..." />
                        </div>
                        <div className="carousel-item" data-interval="4000">
                            <img src="/images/6.jpg" className="d-block w-100 carouselImage" alt="..." />
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carousel" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
            <br />
            <br className="noDisplay" />
            <div className="row mx-0 ra">
                <div className="col-lg-8 col-md-7 col-sm-6 col-12 yogaDes">
                    <h1>Yoga for everyone</h1>
                    <h5>We offer wide variety of yoga aasans. <br className="noDisplay" />From power yoga to deeply relaxing meditation. </h5>
                </div>
                <div className="col-lg-4 col-md-5 col-sm-6 col-12 yogaSlick">
                    <div className="ml-2 mr-0 my-2">
                        <Slider {...settings1}>
                            <div className="card mx-2">
                                <img src="/images/3.jpg" class="card-img-top" alt="..." style={{ height: "300px" }} />
                                <div className="card-body">
                                    <h4 className="card-title">Diverse Yoga Aasans</h4>
                                    <p className="card-text">Discover your Inner Sanctuary to get awareness about your body and mind.</p>
                                </div>
                            </div>
                            <div className="card mx-2">
                                <img src="/images/8.jpg" className="card-img-top" alt="..." style={{ height: "300px" }} />
                                <div class="card-body">
                                    <h4 className="card-title">Meditation</h4>
                                    <p className="card-text">Serenity is inside you.<br />Control your mind to free your soul.</p>
                                </div>
                            </div>
                            <div className="card mx-2">
                                <img src="/images/2.jpg" class="card-img-top" alt="..." style={{ height: "300px" }} />
                                <div className="card-body">
                                    <h4 className="card-title">Get cured with Yoga</h4>
                                    <p className="card-text">Get rid of your prolonged diseases with dedicated assistance.</p>
                                </div>
                            </div>
                            <div className="card mx-2">
                                <img src="/images/4.jpg" className="card-img-top" alt="..." style={{ height: "300px" }} />
                                <div className="card-body">
                                    <h4 className="card-title">Power Yoga</h4>
                                    <p className="card-text">Relish faster and more intense yoga with us to build strength.</p>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
            <br className="noDisplay"/>
            <br className="noDisplay" />
            <br className="noDisplay" />
            <hr />
            <div className="container mb-4">
                <div className="row storySection mb-3">
                    <h1 style={{ fontWeight: "500" }}>Success Glory</h1>
                    <p style={{ fontSize: "17px" }}>Take a look at inspiring transformations of some of our glorious students.</p>
                </div>
                <div className="row successSection">
                    <div className="col-lg-3 col-md-3 col-sm-6 col-6 overlayDiv">
                        <img className="img-thumbnail" src="/images/sg1.jpg" alt="" />
                        <p className="overlayText">Lost 18 Kgs in 3 Months</p>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-6 overlayDiv">
                        <img className="img-thumbnail" src="/images/sg2.jpg" alt="" />
                        <p className="overlayText">Lost 22 Kgs in 4 Months</p>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-6 overlayDiv">
                        <img className="img-thumbnail" src="/images/sg3.jpg" alt="" />
                        <p className="overlayText">Lost 12 Kgs in 3 Months</p>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-6 overlayDiv">
                        <img className="img-thumbnail" src="/images/sg4.jpg" alt="" />
                        <p className="overlayText">Lost 15 Kgs in 3 Months</p>
                    </div>
                </div>
            </div>
            <br />
            <hr />
            <div className="container mt-5">
                <div className="row mx-0 mb-5 reviewSection">
                    <h1 className="mb-5">What Our Students Are Saying.</h1>
                    <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                        <Slider {...settings}>
                            {reviews.map(item =>
                                <div className="card">
                                    <div className="card-body">
                                        <ReactStars count={5} value={item.stars} size={30} edit={false} activeColor="#ffd700" />
                                        <p className="reviewDetails mt-2"><sup><i className="fa fa-quote-left"></i></sup>&nbsp; {item.review} &nbsp;<sup><i className="fa fa-quote-right"></i></sup></p>
                                        <p className="reviewName">-{item.name}</p>
                                    </div>
                                </div>
                            )}
                        </Slider>
                    </div>
                </div>
                <div className="row mx-0 mb-5 addReviewSection">
                    <button type="button" id="btn1" className="btn btn-outline-dark" onClick={() => showAddReview(true)}>Write a Review</button>
                    {addReview ?
                        <div className="col-lg-12 col-md-12 col-sm-12 col-12 reviewForm">
                            <form onSubmit={submitHandler}>
                                <div className="form-group">
                                    <label>Rate Us: </label>
                                    <ReactStars classNames="formStars" count={5} size={35} onChange={ratingChanged} activeColor="#ffd700" />
                                </div>
                                <div className="form-group">
                                    <textarea className="block" name="review" id="review" placeholder="Enter Review" required onChange={(e) => setReview(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <input className="block" type="text" name="name" id="name" placeholder="Enter your Name" required
                                        onChange={(e) => setName(e.target.value)} />
                                </div>
                                <div class="form-group">
                                    <button type="submit" className="btn btn-outline-dark mx-1" >Submit</button>
                                    <button type="button" id="btn2" className="btn btn-outline-dark mx-1" onClick={() => showAddReview(false)}>Close</button>
                                </div>
                            </form>
                        </div>
                        : null}
                </div>
            </div>
        </div>
    )
}

export default HomeScreen