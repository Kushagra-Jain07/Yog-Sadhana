import React from "react"

function ContactScreen() {
    return (
        <div className="container">
            <div className="row storySection">
                <h1>Get in Touch.</h1>
                <p>Feel free to contact us at the undermentioned places.</p>
            </div>
            <div className="row contactSection">
                <div className="col-lg-6 col-md-6 col-sm-12 col-12 centerAlign my-3">
                    <div className="iconMark"><i className="fa fa-user"></i></div>
                    <div className="detail">
                        <h3>Teacher</h3>
                        <p>Kavita Jain<br />
                           M.A. Yoga</p>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-12 centerAlign my-3">
                    <div className="iconMark"><i className="fa fa-phone"></i></div>
                    <div className="detail">
                        <h3>Phone</h3>
                        <p>+91 9782811234</p>
                    </div>
                </div>
            </div>
            <div className="row contactSection">
                <div className="col-lg-6 col-md-6 col-sm-12 col-12 centerAlign my-3">
                    <div className="iconMark"><i className="fa fa-map-marker"></i></div>
                    <div className="detail">
                        <h3>Address</h3>
                        <p>13-B Gayatri Nagar 1st, Tonk Road, Sanganer, Jaipur</p>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-12 centerAlign my-3">
                    <div className="iconMark"><i className="fa fa-envelope"></i></div>
                    <div className="detail">
                        <h3>Email</h3>
                        <p className="smallText">kavitajain3771@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactScreen