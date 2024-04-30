StartupEvents.registry ('item' , event => {	
    event.create('apple_slices').food(food => {
	food
	    .saturation(1)
	    .hunger(1)
	}).displayName('Apple Slices')
})

