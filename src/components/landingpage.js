import { useEffect } from "react"
import Typewriter from "typewriter-effect"
import { motion } from "framer-motion"


// function used for login page

export function Landingpage() {

    const small = 'myphoto.jpg';

    // useEffect used to clear history to avoid browser back button

    useEffect(() => {
        window.history.pushState(null, document.title, window.location.href);
        window.addEventListener('popstate', function (event) {
            window.history.pushState(null, document.title, window.location.href);
        })
    }, []);



    return (
        <>

            <motion.div class="landingpage" initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.1 } }}>
                <div class="container-fluid  " >
                    <div class="row" style={{ marginTop: "4%" }}>

                        {/* Image */}

                        <div class="col-lg-6 col-md-12 col-sm-12 text-center mt-3 d-md-table mx-auto my-auto Zoom" >
                            <img src={small} class="img-fluid" style={{ width: "55%", height: "24%", borderRadius: "5px" }}></img>
                        </div>

                        {/*Name Text */}

                        <div class="col-lg-6 col-md-12 col-sm-12    text-center align-self-center">
                            <div class="row rowht fontstyle1">
                                <div >
                                    <span style={{ color: "white" }}> <span className="fontstyle5">Hi,</span> I'm </span>
                                    <span className="name">R</span>
                                    <span className="name">a</span>
                                    <span className="name">j</span>
                                    <span className="name">e</span>
                                    <span className="name">s</span>
                                    <span className="name">h</span>
                                </div>
                            </div> <br></br>
                            <div class="row " >
                                <div class=" fontstyle3">
                                    <Typewriter
                                        options={{
                                            autoStart: true,
                                            loop: true,
                                            delay: 100,
                                            strings: [
                                                " Full Stack Developer"
                                            ]
                                        }}
                                    ></Typewriter>
                                </div>
                            </div> <br></br>
                            <div class="row fontstyle4">
                                <div>
                                    <span style={{ color: "white" }}>  A passionate Full stack Developer 🚀 having an experience of building
                                        responsive Web applications with <span class="fontstyle4" style={{ color: "#e94560" }}>JavaScript
                                            / React Js / Node Js / Nest Js / Couch Db / NPM </span> and some other cool libraries and frameworks.</span>
                                </div>
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
        </>
    );
}