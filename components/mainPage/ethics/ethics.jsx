import { faFileCode, faLightbulb, faWindowRestore } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Ethics() {
    return <>
        <div className="ethicsWrapper" id="ethics">
            <div className="headerTitle">Ethics</div>
            <div className="principles">
                <div className="section">
                    <h2><FontAwesomeIcon icon={faWindowRestore} className="me-2" /> Responsive Design</h2>
                    <p>Today a website can be opened from a majority of different devices so
                        responsiveness is importand part of developing an accessible application for everyone.</p>
                </div>
                <div className="section">
                    <h2><FontAwesomeIcon icon={faFileCode} className="me-2" /> Clean Code</h2>
                    <div>Code is clean if it can be understood easily – by everyone on the team.
                        With understandability comes readability, changeability, extensibility and maintainability.</div>
                </div>
                <div className="section">
                    <h2><FontAwesomeIcon icon={faLightbulb} className="me-2" /> Quick Learning</h2>
                    <div>In the Computer Age that we live in technologies are evolving faster and faster,
                        being able to adapt to new situations is key in staying relevant as a developer.</div>
                </div>
            </div>
        </div>
    </>
}