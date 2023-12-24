ServerEvents.recipes(event => {
	event.remove({ output: 'clutter:common_coin_pouch'})
	event.remove({ output: 'clutter:uncommon_coin_pouch'})
	event.remove({ output: 'clutter:rare_coin_pouch'})
	event.remove({ output: 'clutter:epic_coin_pouch'})
	event.remove({ output: 'clutter:golden_coin'})
	event.remove({ output: 'clutter:silver_coin'})
	event.remove({ output: 'clutter:copper_coin'})
})