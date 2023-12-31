import Image from "next/image";
import bootcamp from '../../../assets/images/certificates/bootcamp.png'
import jsDev from '../../../assets/images/certificates/jsDev.png'
import jsDevFull from '../../../assets/images/certificates/jsDevFull.png'
import mon from '../../../assets/images/certificates/mon.png'
import monFull from '../../../assets/images/certificates/monFull.png'
import { useState } from "react";


export default function Certificates() {
    const [preview, setPreview] = useState(bootcamp)

    function updatePreview(img) {
        setPreview(img)
    }

    return <>
        <div className="certWrapper" id="certificates">
            <div className="headerTitle">Certificates</div>
            <div className="preview">
                <Image src={preview} />
            </div>
            <div className="certList">
                <div className="certificate">
                    <Image fetchPriority={true} src={bootcamp} onMouseEnter={() => updatePreview(bootcamp)} />
                    <div className="desc"> JavaScript Development <span>Bootcamp</span></div>
                    <div className="year">2023</div>
                </div>
                <div className="certificate">
                    <Image fetchPriority={true} src={jsDev} onMouseEnter={() => updatePreview(jsDevFull)} />
                    <div className="desc"> JavaScript Development</div>
                    <div className="year">2022-2023</div>
                </div>
                <div className="certificate">
                    <Image fetchPriority={true} src={mon} onMouseEnter={() => updatePreview(monFull)} />
                    <div className="desc"> Professional Education</div>
                    <div className="year">2022-2023</div>
                </div>
            </div>
        </div>
    </>
}