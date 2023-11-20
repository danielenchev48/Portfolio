import { faCartShopping, faGamepad, faPen, faPizzaSlice, faUtensils } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import elixirLogo from '../../../assets/images/logo_elixir.png'
import gamingLogo from '../../../assets/images/logo_gamingTech.png'
import blueasyLogo from '../../../assets/images/logo_blueasy.png'
import elixir from '../../../assets/images/elixir.jpg'
import gaming from '../../../assets/images/gaming.jpg'
import blueasy from '../../../assets/images/blueasy.jpg'

export default function Projects() {
    return <>
        <div className="projectsWrapper" id="projects">
            <div className="headerTitle">Projects</div>
            <div className="projects">
                <div className="pContainer">
                    <div className="thumbnail col-lg-6 col-sm-12">
                        <Image src={elixir} />
                    </div>
                    <div className="info col-lg-6 col-sm-12 ">
                        <Image src={elixirLogo} className="logo" />
                        <div className="categories">
                            <div className="category"><FontAwesomeIcon icon={faUtensils} />Takeout</div>
                            <div className="category"><FontAwesomeIcon icon={faPizzaSlice} />Pizzeria</div>
                        </div>
                        <div className="desc">My latest group project, pizzaria website with users and products database, login system, order and checkout payment system. </div>
                        <Link href={'https://danielenchev48.github.io/ElixirRestaurant/'} className="link">Elixir</Link>
                    </div>
                </div>
                <div className="pContainer">
                    <div className="info col-lg-6 col-sm-12">
                        <Image src={gamingLogo} className="logo" />
                        <div className="categories">
                            <div className="category"><FontAwesomeIcon icon={faGamepad} />Gaming</div>
                            <div className="category"><FontAwesomeIcon icon={faCartShopping} />Shopping</div>
                        </div>
                        <div className="desc">My first project, gaming website with news modals, top rated genres and a shopping page. Will be improved in the future.</div>
                        <Link href={'https://danielenchev48.github.io/Gaming-Tech-Inc/home.html'} className="link">GamingTech</Link>
                    </div>
                    <div className="thumbnail col-lg-6 col-sm-12">
                        <Image src={gaming} />
                    </div>
                </div>
                <div className="pContainer">
                    <div className="thumbnail col-lg-6 col-sm-12">
                        <Image src={blueasy} />
                    </div>
                    <div className="info col-lg-6 col-sm-12">
                        <Image src={blueasyLogo} className="logo" />
                        <div className="categories">
                            <div className="category"><FontAwesomeIcon icon={faPen} />Practice</div>
                        </div>
                        <div className="desc">A simple website made to test positioning, pixel perfect design, carousel and most beginning fundamentals.</div>
                        <Link href={'https://danielenchev48.github.io/Blueasy/index.html'} className="link">Blueasy</Link>
                    </div>
                </div>
            </div>

        </div>
    </>
}