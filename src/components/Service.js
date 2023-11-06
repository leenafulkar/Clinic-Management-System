import { Link } from "react-router-dom"
export default function Service(){
    return<>
        <div class="container-fluid py-5">
            <div class="container">
                <div class="text-center mx-auto mb-5" style={{maxWidth: "500px"}}>
                    <h5 class="d-inline-block text-primary text-uppercase border-bottom border-5">Services</h5>
                    <h1 class="display-4">Excellent Medical Services</h1>
                </div>
                <div class="row g-5">
                    <div class="col-lg-4 col-md-6">
                        <div
                            class="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                            <div class="service-icon mb-4">
                                <i class="fa fa-2x fa-user-md text-white"></i>
                            </div>
                            <h4 class="mb-3">Emergency Care</h4>
                            <p class="m-0">Kasd dolor no lorem nonumy sit labore tempor at justo rebum rebum stet, justo
                                elitr dolor amet sit</p>
                            <Link class="btn btn-lg btn-primary rounded-pill" to="">
                                <i class="bi bi-arrow-right"></i>
                            </Link>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div
                            class="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                            <div class="service-icon mb-4">
                                <i class="fa fa-2x fa-procedures text-white"></i>
                            </div>
                            <h4 class="mb-3">Operation & Surgery</h4>
                            <p class="m-0">Kasd dolor no lorem nonumy sit labore tempor at justo rebum rebum stet, justo
                                elitr dolor amet sit</p>
                            <Link class="btn btn-lg btn-primary rounded-pill" to="">
                                <i class="bi bi-arrow-right"></i>
                            </Link>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div
                            class="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                            <div class="service-icon mb-4">
                                <i class="fa fa-2x fa-stethoscope text-white"></i>
                            </div>
                            <h4 class="mb-3">Outdoor Checkup</h4>
                            <p class="m-0">Kasd dolor no lorem nonumy sit labore tempor at justo rebum rebum stet, justo
                                elitr dolor amet sit</p>
                            <Link class="btn btn-lg btn-primary rounded-pill" to="">
                                <i class="bi bi-arrow-right"></i>
                            </Link>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div
                            class="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                            <div class="service-icon mb-4">
                                <i class="fa fa-2x fa-ambulance text-white"></i>
                            </div>
                            <h4 class="mb-3">Ambulance Service</h4>
                            <p class="m-0">Kasd dolor no lorem nonumy sit labore tempor at justo rebum rebum stet, justo
                                elitr dolor amet sit</p>
                            <Link class="btn btn-lg btn-primary rounded-pill" to="">
                                <i class="bi bi-arrow-right"></i>
                            </Link>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div
                            class="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                            <div class="service-icon mb-4">
                                <i class="fa fa-2x fa-pills text-white"></i>
                            </div>
                            <h4 class="mb-3">Medicine & Pharmacy</h4>
                            <p class="m-0">Kasd dolor no lorem nonumy sit labore tempor at justo rebum rebum stet, justo
                                elitr dolor amet sit</p>
                            <Link class="btn btn-lg btn-primary rounded-pill" to="">
                                <i class="bi bi-arrow-right"></i>
                            </Link>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div
                            class="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                            <div class="service-icon mb-4">
                                <i class="fa fa-2x fa-microscope text-white"></i>
                            </div>
                            <h4 class="mb-3">Blood Testing</h4>
                            <p class="m-0">Kasd dolor no lorem nonumy sit labore tempor at justo rebum rebum stet, justo
                                elitr dolor amet sit</p>
                            <Link class="btn btn-lg btn-primary rounded-pill" to="">
                                <i class="bi bi-arrow-right"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* appointment */}
        <div class="container-fluid bg-primary my-5 py-5">
            <div class="container py-5">
                <div class="row gx-5">
                    <div class="col-lg-6 mb-5 mb-lg-0">
                        <div class="mb-4">
                            <h5 class="d-inline-block text-white text-uppercase border-bottom border-5">Appointment</h5>
                            <h1 class="display-4">Make An Appointment For Your Family</h1>
                        </div>
                        <p class="text-white mb-5">Eirmod sed tempor lorem ut dolores. Aliquyam sit sadipscing kasd
                            ipsum. Dolor ea et dolore et at sea ea at dolor, justo ipsum duo rebum sea invidunt
                            voluptua. Eos vero eos vero ea et dolore eirmod et. Dolores diam duo invidunt lorem. Elitr
                            ut dolores magna sit. Sea dolore sanctus sed et. Takimata takimata sanctus sed.</p>
                        <Link class="btn btn-dark rounded-pill py-3 px-5 me-3" to="">Find Doctor</Link>
                        <Link class="btn btn-outline-dark rounded-pill py-3 px-5" to="">Read More</Link>
                    </div>
                    <div class="col-lg-6">
                        <div class="bg-white text-center rounded p-5">
                            <h1 class="mb-4">Book An Appointment</h1>
                            <form>
                                <div class="row g-3">
                                    <div class="col-12 col-sm-6">
                                        <select class="form-select bg-light border-0" style={{height:" 55px"}}>
                                            <option selected>Choose Department</option>
                                            <option value="1">Department 1</option>
                                            <option value="2">Department 2</option>
                                            <option value="3">Department 3</option>
                                        </select>
                                    </div>
                                    <div class="col-12 col-sm-6">
                                        <select class="form-select bg-light border-0" style={{height:" 55px"}}>
                                            <option selected>Select Doctor</option>
                                            <option value="1">Doctor 1</option>
                                            <option value="2">Doctor 2</option>
                                            <option value="3">Doctor 3</option>
                                        </select>
                                    </div>
                                    <div class="col-12 col-sm-6">
                                        <input type="text" class="form-control bg-light border-0"
                                            placeholder="Your Name" style={{height:" 55px"}}/>
                                    </div>
                                    <div class="col-12 col-sm-6">
                                        <input type="email" class="form-control bg-light border-0"
                                            placeholder="Your Email" style={{height:" 55px"}}/>
                                    </div>
                                    <div class="col-12 col-sm-6">
                                        <div class="date" id="date" data-target-input="nearest">
                                            <input type="text"
                                                class="form-control bg-light border-0 datetimepicker-input"
                                                placeholder="Date" data-target="#date" data-toggle="datetimepicker"
                                                style={{height:" 55px"}}/>
                                        </div>
                                    </div>
                                    <div class="col-12 col-sm-6">
                                        <div class="time" id="time" data-target-input="nearest">
                                            <input type="text"
                                                class="form-control bg-light border-0 datetimepicker-input"
                                                placeholder="Time" data-target="#time" data-toggle="datetimepicker"
                                                style={{height:" 55px"}}/>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <button class="btn btn-primary w-100 py-3" type="submit">Make An
                                            Appointment</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        
    </>
}

