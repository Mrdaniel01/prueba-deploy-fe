import React from 'react';
import CommentBox from '../components/commentBox'
import photo from '../assets/image-hero.png'

function Product() {

return <>

	<div className="hero">    	

		<div className="hero__panel">
			<h2>Oven Roasted Chicken Breasts </h2>
			<h3>suburban soap box</h3>
			<div className='hero__panel--data'>	
				<div className="hero__buttons-data">
					<ul>
						<li className='hero__buttons-data--qty'>4</li>
						<li className='hero__buttons-data--desc'>Ingredients</li>
					</ul>
				</div>
				<div className="hero__buttons-data">
					<ul>
						<li className='hero__buttons-data--qty'>300</li>
						<li className='hero__buttons-data--desc'>Calories</li>
					</ul>
				</div>
				<div className="hero__buttons-data">
					<ul>
						<li className='hero__buttons-data--qty'>33</li>
						<li className='hero__buttons-data--desc'>Minutes</li>
					</ul>
				</div>
			</div>
				<div className="hero__button">
					<button className="hero__button--add">Add to cart</button>
				</div>
				<div className='hero__nutritional--container'>
					<div class="hero__receipe-details--container">
						<div class="hero__receipe-details--inner">
							<ul class="hero__receipe-details--data">
								<li>200</li>
								<li>calories</li>
							</ul>
						</div>
					</div>
					
					<div class="hero__receipe-details--container">
						<div class="hero__receipe-details--inner">
							<ul class="hero__receipe-details--data">
								<li>200</li>
								<li>calories</li>
							</ul>
						</div>
					</div>
					
					<div class="hero__receipe-details--container">
						<div class="hero__receipe-details--inner">
							<ul class="hero__receipe-details--data">
								<li>200</li>
								<li>calories</li>
							</ul>
						</div>
					</div>
					
					<div class="hero__receipe-details--container">
						<div class="hero__receipe-details--inner">
							<ul class="hero__receipe-details--data">
								<li>200</li>
								<li>calories</li>
							</ul>
						</div>
					</div>
					
					<div class="hero__receipe-details--container">
						<div class="hero__receipe-details--inner">
							<ul class="hero__receipe-details--data">
								<li>200</li>
								<li>calories</li>
							</ul>
						</div>
					</div>
					
					<div class="hero__receipe-details--container">
						<div class="hero__receipe-details--inner">
							<ul class="hero__receipe-details--data">
								<li>200</li>
								<li>calories</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		<div className="hero__image">
			<img src={photo} alt='chicken receipe' />
		</div>
	</div>
		{/* INGREDIENTS  */}

	<div className='ingre'>
			<div className='ingre__tittle'>
				<h2>Ingredients</h2>
					<p>4 Serv | Metric Standard</p>
			</div>

			<div className='ingre__list'>
				<ul>
						<li>
							<div className='ingre__list--plus'>
								<div>&#10010;</div>
							</div>
							<p>
							2 chicken breasts (bone-in skin-on)
							</p>
						</li>
						<li>
							<div className='ingre__list--plus'>
								<div>&#10010;</div>
							</div>
							<p>
							2 tablespoons olive oil
							</p>
						</li>
						<li>
							<div className='ingre__list--plus'>
								<div>&#10010;</div>
							</div>
							<p>
							2 tablespoons kosher salt
							</p>
						</li>
						<li>
							<div className='ingre__list--plus'>
								<div>&#10010;</div>
							</div>
							<p>
							2 tablespoons fresh ground pepper
							</p>
						</li>			
					</ul>						
			</div>
	</div>

	<div className='directions'>
		<div className='directions__title'>Directions</div>

		<ul className='directions__steps'>
			<li>
				<h3>
					step 1.
				</h3>
				<p>
					First step, and most important of all….line your baking sheet with aluminum foil for easy clean up.  If you’re lucky, you won’t even poke a hole in the foil and may not even need to wash it!
				</p>
			</li>
			<li>
				<h3>
					step 2.
				</h3>
				<p>
				Place the chicken skin side up on the baking sheet and coat with about a tablespoon of olive oil.  Rub to coat the chicken evenly.
				Sprinkle liberally with kosher salt to coat evenly.  You’re going to discard the skin so it’s ok if it’s extra salt.  Or you can eat it.  It’s really good…like addictingly good…like a potato chip.  So, don’t throw it out.

				</p>
			</li>
			<li>
				<h3>
					step 3.
				</h3>
				<p>
				Sprinkle liberally with fresh ground pepper.  Because your chicken skin snack will be even better with pepper.  Just sayin’.
				Roast in a 425˚F oven for 25-30 minutes or until it registers 165˚F on an instant read thermometer.  
				Allow the chicken to rest until cool enough to handle and then discard the skin. (You know my feelings on this.)  
				Shred, chop or just leave on the bone, store in an airtight container for up to 4 days.  Refrigerated, of course.
				</p>
			</li>
		</ul>

		<CommentBox />
	</div>

</>
}

export default Product;