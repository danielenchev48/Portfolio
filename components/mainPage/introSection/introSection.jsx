import Image from 'next/image';
import fullLogo from '../../../assets/images/fullLogo.png'
import profile from '../../../assets/images/profile.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';


export default function IntroSection() {
    return <>
        <div className='introSection'>
            <div className='myNameSection'>
                <Image src={fullLogo} alt="myLogo" className='logo' />
                <div className='myName'>Daniel Enchev</div>
            </div>
            <nav role='navigation' className='navWrapper'>
                <div>EMAIL</div>
                <div className='navOthers'>
                    <div>ETHICS</div>
                    <div>ETHICS</div>
                    <div>ETHICS</div>
                </div>
            </nav>
            <div className='aboutWrapper'>
                <div className='title'>
                    FrontEnd Developer
                </div>
                <Image src={profile} className='profile' />
                <div className='info'>
                    Im Tamara, a freelance UX designer based in France. I craft accessible websites for brands using tech for good.
                </div>
            </div>
            <div className='linksWrapper'>
                <FontAwesomeIcon icon={faLink} className='icon' />
                <div className='links'>
                    <div>LinkedIn</div>
                    <div>Github</div>
                </div>
            </div>
        </div>
    </>
}