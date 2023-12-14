import 'bootstrap/dist/css/bootstrap.css'
import '../../assets/styles/introSection.scss';
import '../../assets/styles/ethics.scss';
import '../../assets/styles/projects.scss';
import '../../assets/styles/about.scss';
import '../../assets/styles/certificates.scss';
import '@splidejs/react-splide/css';
import '../../assets/styles/global.scss';


export default function App({ Component, props }) {
    return <Component {...props} />;
}