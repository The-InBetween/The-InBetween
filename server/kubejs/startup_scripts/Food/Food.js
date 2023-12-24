StartupEvents.registry ('item' , event => {	
    event.create('apple_slices').food(food => {
	food
	    .saturation(1)
	    .hunger(1)
	}).displayName('Apple Slices')
		
	event.create('pao_de_queijo').food(food => {
        food
            .hunger(10)
            .saturation(0.7)  
        }).displayName('Pão de Queijo')	
		
	event.create('tiramisu').food(food => {
        food
            .hunger(5)
            .saturation(0.8)  
        }).displayName('Tiramisu')
		
	event.create('brigadeiro').food(food => {
        food
            .hunger(1)
            .saturation(0.5) 
			.fastToEat()
			.alwaysEdible()
			.effect('farmersdelight:nourishment' , 6000, 0, 1)
        }).displayName('Brigadeiro')
		
	event.create('brigadeiro_paper_forms')
	.displayName('Brigadeiro Paper Forms')
	
})