WorldgenEvents.remove(event => {
       event.removeOres(props => {	
	         props.worldgenLayer = 'underground_ores'
	         props.blocks = [
			 'expandeddelight:salt_ore',
			 'expandeddelight:deepslate_salt_ore'
		      ]
	   })
})