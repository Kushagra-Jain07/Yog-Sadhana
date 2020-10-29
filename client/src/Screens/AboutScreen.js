import React from "react"

function AboutScreen() {
    return (
        <div>
            <div className="container">
                <div className="row storySection">
                    <h1>Our Story</h1>
                    <p>The Story of Yog Sadhana is also the story of yoga in its true essence, the story
                    of our evolving family, and at the heart of it, the story of one dedicated woman.</p>
                </div>
                <br /><br /><br className="noDisplay" />
                <div className="row aboutsection">
                    <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                        <img src="/images/8.jpg" alt="..." />
                        <br />
                        <div className="float-right marginBottom" style={{ color: "#303333" }}>Kavita Jain</div>
                    </div>
                    <div className="col-lg-8 col-md-8 col-sm-12 col-12">
                        <h2>The heart and the mind behind Yog Sadhana</h2>
                        <p>After 17 years of marriage, Kavita Jain, the name and mind behind Yog Sadhana,
                        grew her concern towards her declining fitness. Succeeding which, she herself started 
                        practicing yoga under guidance, before realizing that obesity is a curse for everyone
                        and something should be done in this direction.&nbsp;
                        <br />
                        Perceiving the importance of yoga for a healthy and disease free life she completed 
                        her M.A. in yoga and started inculcating it's significance to others. 5 years ago she 
                        established her own yoga center- Yog Sadhana, to foster harmony in the body, mind, and 
                        environment. She has already trained 350+ Students and motivated them to overcome their 
                        problems be it obesity or any other prolonged disease. This delightful journey and the love of 
                        her students keeps her self-motivated and has aided her with immense confidence.
                        According to her: "Yoga is a free medicine which has no side effects"
                        </p>
                    </div>
                </div>
                <br className="noDisplay" />
                <div className="row my-5 valueSection">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                        <h2>Our Values</h2>
                        <p>Find connection - Be supportive - Offer expertise - Love - Be honest</p>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                        <h2>Our Mission</h2>
                        <p>Sharing the love of yoga to create positive change in the world</p>
                    </div>
                </div>
                <hr />
                <div className="row my-5 numberSection">
                    <div className="col-lg-4 col-md-4 col-sm-4 col-12 marginBottom">
                        <h2>Yog Sadhana in numbers</h2>
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-2 col-12">
                        <h2>5+</h2>
                        <p>Years</p>
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-2 col-12">
                        <h2>350+</h2>
                        <p>Students</p>
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-2 col-12">
                        <h2>2000+</h2>
                        <p>Classes</p>
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-2 col-12">
                        <h2>5</h2>
                        <p>Yoga Styles</p>
                    </div>
                </div>
            </div>
            <br />
        </div>
    )
}

export default AboutScreen