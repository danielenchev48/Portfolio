import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function About() {
    return <>
        <div className="aboutWrapper" id="about">
            <div className="headerTitle">About me</div>
            <div className="information">
                <div className="section">
                    <div className="header"><FontAwesomeIcon icon={faUser} className="me-2" /> Background</div>
                    <p>Working with computers since youth and recently completed the full course for Junior JavaScript Developer
                        in Advance Academy. Now after working in a group project for 4 months I have a solid foundation of the
                        stages in developing websites and applications.
                    </p>
                </div>
                <div className="section">
                    <div className="header"><FontAwesomeIcon icon={faLaptopCode} className="me-2" /> Availability</div>
                    <p>Now I search for a place to keep growing and learn new skills while working every day and improving
                        my own projects, because staying in one place and not working on yourself is incorrect.
                        <span className="fst-italic"> /...and leads to console errors/</span>
                    </p>
                </div>
            </div>
        </div>
    </>
}