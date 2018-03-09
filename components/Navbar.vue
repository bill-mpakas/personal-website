<template>
		<div class="container">
    	<nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <a class="navbar-item" href="/">Portfolio</a>
        	<div class="navbar-burger" data-target="navMenu">
						<span></span>
						<span></span>
						<span></span>
					</div>
        </div>
        <div class="navbar-menu" id="navMenu">
            <div class="navbar-start">
    				<!-- navbar items -->
  					</div>
  				<div class="navbar-end">
    				<nuxt-link class="navbar-item" to="/">About</nuxt-link>
          	<nuxt-link class="navbar-item" to="/about">Projects</nuxt-link>
          	<nuxt-link class="navbar-item" to="/projects">Case Studies</nuxt-link>
          	<nuxt-link class="navbar-item" to="/contact">Contact</nuxt-link>
  				</div>
        </div>
    	</nav>
		</div>
</template>





