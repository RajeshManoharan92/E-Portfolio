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
                                            <Card.Title style={{"color":"blue"}} >Full Stack Developer. (21 December 2022 – Till Date)
 </Card.Title >
                                            <h6>Prodian Infotech Pvt. Ltd.</h6>
                                            <h6 style={{"color":"darkgreen"}}>Professional Summary</h6>
                                            <Card.Text>
                                            •  Confident working independently as a single resource.<br></br>
                                            • Comfortable with taking up leadership roles.<br></br>
                                            • Self-motivated and quick learner with an urge to learn new technologies.<br></br>
                                            • Trained fresher’s on new technologies and guided them to complete their 
tasks on time.<br></br>
• Ability to prioritize and multi-task while working in busy environments <br></br>
                                                •	Monitoring and improving front-end performance. <br></br>
                                            </Card.Text>
                                            <Card.Title style={{"color":"blue"}}>Projects  </Card.Title>
                                            <h6 style={{"color":"darkgreen"}}><u>Indusind Bank Data Migration</u></h6>
                                            <Card.Text>
                                            • Indusind Bank migrating its data from Finacle to Couch Db.
                                            • Backend development using Node JS, Azure Event Hub NPM package, Couch DB. 
                                                <h6 style={{"color":"darkgreen"}}>Roles & Responsibilities
</h6>
                                                •	In my professional capacity, I am tasked with extracting data from Azure Event 
Hub loaders and subsequently loading it into CouchDB tables. This responsibility 
aligns with the ongoing migration of data from Finacle to CouchDB facilitated by 
the Azure Golden Gate Way and Azure Event Hub. My role involves developing 
Node.js code to efficiently manage this data transfer process
                                            </Card.Text>

                                            <h6 style={{"color":"darkgreen"}} ><u>IndusInd Bank NBMB Revamp Project – Product Owner</u></h6>

                                            <Card.Text>
                                                •	Revamp of Net Banking & Mobile Banking Login API’s with newly integrated 
Couch DB
• I received an acknowledgment email from the client expressing appreciation for 
my contributions to the aforementioned project. 
• Backend API’s development using Nest JS framework, Node JS, Couch DB
                                                <h6 style={{"color":"darkgreen"}}>Roles & Responsibilities</h6>
                                                •	I spearheaded the research and development efforts for the Nest.js framework, 
culminating in the creation of a pivotal project for the revamp of Net Banking 
and Mobile Banking (NBMB)
• In this role, I successfully developed APIs utilizing the Nest.js framework in 
conjunction with CouchDB, contributing significantly to the success of the 
Revamp NBMB project.
• I collaborated closely with the front-end team, gathering project requirements and subsequently developed 
APIs in alignment with their specifications.
• Assumed the role of mentoring a new team member who joined as a fresher, providing guidance and 
conducting training sessions to align her skills with project requirements
                                            </Card.Text>

                                            <h6 style={{"color":"darkgreen"}} ><u>IndusInd Bank - SSO</u></h6>

<Card.Text>
    •	Single Sign-On (SSO) project aimed at implementing IndusInd SSO for the Rapipay partner, enhancing 
security and user authentication processes. 
• Frontend API’s development using React JS, HTML 5, CSS, Material UI.
    <h6 style={{"color":"darkgreen"}}>Roles & Responsibilities</h6>
    •	Product Owner for React JS module
    • Conducted in-depth research and exploration on Single Sign-On (SSO) methodologies, with a 
specific focus on implementing SSO using React applications.
• Designed and developed React.js components for Single Sign-On (SSO), successfully 
implementing the solution in a production environment where it is operating seamlessly
• Enhancing the existing implementation of the system, which incorporates Aadhar card OTP 
verification, by further refining it to include PAN-Aadhar linkage, thereby improving the overall 
functionality and security of the system.
</Card.Text>


<h6 style={{"color":"darkgreen"}} ><u>Magnati Mobile APP – React Ionic</u></h6>

<Card.Text>
    •	 Magnati is a Leading trusted payment solution company in UAE
 Frontend API’s development using React Ionic Framework,.
    <h6 style={{"color":"darkgreen"}}>Roles & Responsibilities</h6>
    •	Developed a Proof of Concept (POC) for the React Ionic mobile application, showcasing the feasibility and 
potential of the application for the Magnati client.

</Card.Text>



<h6 style={{"color":"darkgreen"}} ><u>FIS</u></h6>

<Card.Text>
    •	Main idea of this project is to have a rechargeable card, where user can recharge their card in retail store 
and they can withdraw amount in any ATM or use in any swiping machine for payment purpose.
 Frontend API’s development using React JS, HTML 5, CSS.

    <h6 style={{"color":"darkgreen"}}>Roles & Responsibilities</h6>
    •	Contributed as a team member in Phase 1 of the FIS project, specifically focusing on the development and 
management of the User Management Portal 
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