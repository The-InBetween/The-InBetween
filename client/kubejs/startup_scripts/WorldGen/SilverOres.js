WorldgenEvents.remove(event => {
       event.removeOres(props => {	
	         props.worldgenLayer = 'underground_ores'
	         props.blocks = [
			 'mythicmetals:silver_ore',
			 'bewitchment:silver_ore',
			 'bewitchment:deepslate_silver_ore',
			 'clutter:silver_ore',
			 'clutter:deepslate_silver_ore'
		      ]
	   })
})