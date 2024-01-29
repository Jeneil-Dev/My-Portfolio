import { Container, Row, Col, Image} from 'react-bootstrap';
import backgroundimgport from "../assests/portpic.jpeg"
import { Link } from 'react-router-dom'

export default function About() {
    return (
        <div>
            
            <Row>
                {/* <Col>
                    <div className="spacer"></div>
                    <Image className="portimg" src={backgroundimgport} />
                </Col> */}
                <Col>
                    <div className="spacer"></div>
                    <h1 className="text-center font-weight-light">A little about me, Jeneil.</h1>
                    <div className="spacer"></div>
                    <p className="">As a Software Engineer, I work with HTML, CSS, JavaScript, MongoDB, Express, REACT, and Node.js for full stack development. I enjoy learning and challenging myself. I began coding in 2018 when sheer curiosity was my driving force. It steered me down a wonderful path that I will never forget. I first fell in love with CSS due to my background as a visual artist, but JavaScript was my achilles heel.  When I realized this, I decided that it was not going to be. Now, I am eager to turn it into my greatest strength. Welcome to my portfolio. </p>
                    {/* <p className="">I graduated from Software Engineering course called Per Scholas and I am truly grateful for the opportunity to participate in the program because along with building application and learning how to code I had plenty of opportunity to work on group projects where we were constantly sharing and helping one another. This experience allowed me to practice working with other, listening and building larger applications. It was truly a blessing.</p> */}
                    {/* <p className="">I am currently working on projects daily, adding new tools to my Dev belt and updating my GitHub page so please follow me and check out my work! I am happy that I have come this far and would love to learn more and hopefully change then world one day one function at a time. I look forward to hearing from you and sharing ideas.</p> */}
                    <Link className="links" to={`/contact`}> <button className="left-margin main-button">Let's Connect</button> </Link>  
                </Col>
            </Row>
            
           
        </div>

    );
}

