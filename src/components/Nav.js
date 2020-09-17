import React from "react";
import './styles/nav.scss'
import logo from '../assets/logo.png'
import car from '../assets/car.png'
import avatar from '../assets/avatar.png'
import search from '../assets/search.png'

function Nav() {

  return <div>
    <div className="header">
			<a  href='/' >
				<img className="header__img" src={logo} alt="dailycius logo" />
			</a>
			<div className="header__menu">
				<nav className="header__options">
					<ul className="header__options--ul">
						<li>
							<a href="/"><img src={search} alt='search' /></a>
						</li>
						<li>
							<a href="/"><img src={car} alt='search' /></a>
						</li>
						<li>
							<a href="/"><img src={avatar} alt='search' /></a>
						</li>
					</ul>
				</nav>
			</div>
    </div>
  </div>
  
}


export default Nav;
