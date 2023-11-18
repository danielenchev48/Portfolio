import Image from 'next/image';
import logo from '../../../assets/images/logo.png'
import profile from '../../../assets/images/profile.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';


export default function IntroSection() {
    return <>
        <div className='introSection'>
            <div className='myNameSection'>
                <Image src={logo} alt="myLogo" className='logo' />
                <div className='myName'>Daniel Enchev</div>
            </div>
            <nav role='navigation' className='navWrapper'>
                <Link href="mailto:dan.enchev@gmail.com"><span className='link pb-1'>EMAIL ME</span></Link>
                <div className='navOthers'>
                    <Link href={'#projects'} className='link'>Projects</Link>
                    <Link href={'#principles'} className='link'>Principles</Link>
                    <Link href={'#about'} className='link'>About</Link>
                </div>
            </nav>
            <div className='about'>
                <div className='title'>
                    FrontEnd Developer
                </div>
                <Image src={profile} className='profile' />
                <div className='info'>
                    Im Daniel, a FrontEnd developer based in Bulgaria. I build responsive
                    websites using the latest technologies and always strive to learn more.
                </div>
            </div>
            <div className='linksWrapper'>
                <FontAwesomeIcon icon={faLink} className='icon' />
                <div className='links'>
                    <Link href={'https://www.linkedin.com/in/daniel-enchev-480812299/'} className='link'>LinkedIn</Link>
                    <Link href={'https://github.com/danielenchev48'} className='link'>Github</Link>
                </div>
            </div>
        </div>
    </>
}