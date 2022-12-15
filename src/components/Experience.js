import { motion } from "framer-motion"
import '../index.css';
import { useEffect } from "react"
import Card from 'react-bootstrap/Card'


// function used for User verification log-in

export function Experience() {

    // useEffect used to clear history to avoid browser back button

    useEffect(() => {
        window.history.pushState(null, document.title, window.location.href);
        window.addEventListener('popstate', function (event) {
            window.history.pushState(null, document.title, window.location.href);
        })
    }, []);


    return (
        <>
            <section>
                <motion.div class="landingpage" initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 0.1 } }}>
                    <div class="container-fluid " >
                        <div class="row " style={{ marginTop: "2%" }}>
                            <div class="col-lg-12 col-md-12 col-sm-12 mt-3  mx-auto  ">
                                <div class=" col-lg-6 col-md-6 col-sm-12 mt-5 mt-lg-0 mt-md-0 mt-sm-5 text-start align-self-center mx-auto"  >
                                    <Card  >
                                        <Card.Body>
                                            <Card.Title style={{"color":"blue"}} >React Js. Developer  (April 2022 – Till date) </Card.Title >
                                            <h6>Seyfert Infotech.</h6>
                                            <h6 style={{"color":"darkgreen"}}>Roles & Responsibilities</h6>
                                            <Card.Text>
                                                •	Developing new user-facing features using React.js <br></br>
                                                •	Building reusable components and front-end libraries for future use <br></br>
                                                •	Translating designs and wireframes into high quality code <br></br>
                                                •	Optimizing components for maximum performance across a vast array of web-capable devices and browsers <br></br>
                                                •	Writing application interface codes using JavaScript following react.js workflows. <br></br>
                                                •	Troubleshooting interface software and debugging application codes. <br></br>
                                                •	Developing and implementing front-end architecture to support user interface concepts. <br></br>
                                                •	Monitoring and improving front-end performance. <br></br>
                                            </Card.Text>
                                            <Card.Title style={{"color":"blue"}}>Projects  </Card.Title>
                                            <h6 style={{"color":"darkgreen"}}><u>INSURANCE JI</u></h6>
                                            <Card.Text>
                                                •	General insurance digital assistant web and app. Aggregate application for general insurance to maintain renewal status, instant claim conversation to insurance company and buying new insurance.
                                                <h6 style={{"color":"darkgreen"}}>Responsibilities</h6>
                                                •	Frontend development using HTML5, CSS, React Js, Bootstrap, NPM.
                                            </Card.Text>

                                            <h6 style={{"color":"darkgreen"}} ><u>AR GA REPORTING TOOL</u></h6>

                                            <Card.Text>
                                                •	A CRON Job that fetches the date wise Metrics and Dimensions for the Events and Event Labels from the Google Analytics for the App configured and saved to the Database. This reporting portal helps to fetch reports for the App’s at convenient time and place.
                                                <h6 style={{"color":"darkgreen"}}>Responsibilities</h6>
                                                •	Frontend development using React Js, Bootstrap, Node Js, Google Analytics, Express, Mongo DB.
                                            </Card.Text>

                                        </Card.Body>
                                    </Card>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12 btmimg">
                            <img src="wave.svg"></img>
                        </div>
                    </div>
                </motion.div>
            </section>
        </>
    )
}