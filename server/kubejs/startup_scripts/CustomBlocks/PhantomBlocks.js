StartupEvents.registry('block', event => {	
    event
	     .create("phantom_stone")
	     .displayName('Stone')
		 .mapColor('Stone')
		 .stoneSoundType()
		 .hardness(1.0)
         .resistance(1.0)
         .requiresTool(true)
		 .tagBlock("mineable/pickaxe")
		 .noCollision()
})
		 