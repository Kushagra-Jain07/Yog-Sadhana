import React from "react"

function ScheduleScreen() {
    return (
        <div className="container">
            <div className="row mt-2 mb-5 scheduleSection">
                <h1>Join Today!</h1>
                <p>Facilitating you with our special online classes during this pandemic to stay fit mentally and physically.</p>
            </div>
            <div className="row my-5 onlineSection">
                <div className="col-lg-12 col-md-12 col-sm-12 col-12 mb-4">
                    <h2>Online Batches</h2>
                    <h5>(For Females and Males of any age)</h5>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-12 marginBot borderRight">
                    <h3>Morning Batch</h3>
                    <p>Give your body an energizing and enlightening start.</p>
                    <h5>(8-8:50 AM)</h5>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                    <h3>Evening Batch</h3>
                    <p>Relax and calm your nerves after a stressful day.</p>
                    <h5>(5-5:50 PM)</h5>
                </div>
            </div>
            <hr />
            <div className="row my-5 offlineSection">
                <div className="col-lg-12 col-md-12 col-sm-12 col-12 mb-4">
                    <h2>Offline Batches</h2>
                    <h5>(Only for Females)</h5>
                    <h6>(Currently Unavailable)</h6>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-12 marginBot borderRight">
                    <h3>Morning Batch</h3>
                    <p>Start your day afresh with our assistance.</p>
                    <h5>(10-11 AM)</h5>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                    <h3>Evening Batch</h3>
                    <p>A hour full of peace to meet your soul.</p>
                    <h5>(5-6 PM)</h5>
                </div>
            </div>
        </div>
    )
}

export default ScheduleScreen