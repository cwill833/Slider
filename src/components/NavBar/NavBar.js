import React from 'react'
import style from './NavBar.module.css'

const NavBar = () => {


    return (
			<div class="pos-f-t">
				<div class="collapse" id="navbarToggleExternalContent">
					<div class="bg-dark p-4">
						<h5 class="text-white h4">Collapsed content</h5>
						<span class="text-muted">Toggleable via the navbar brand.</span>
					</div>
				</div>
				<nav class="navbar navbar-dark bg-dark">
					<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
						<span class="navbar-toggler-icon"></span>
					</button>
					<div>
						SLIDER
					</div>
				</nav>
			</div>
    )
}

export default NavBar