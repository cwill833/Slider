import React from 'react'
import style from './NavBar.module.css'

const NavBar = () => {


    return (
			<div className="pos-f-t">
				<div className="collapse" id="navbarToggleExternalContent">
					<div className="bg-dark p-4">
					<ul>
							<li className='text-white'>Profile</li>
							<li className='text-white'>My list</li>
							<li className='text-white'>Logout</li>
						</ul>
					</div>
				</div>
				<nav className="navbar navbar-dark bg-dark">
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div>
						SLIDER
					</div>
				</nav>
			</div>
    )
}

export default NavBar