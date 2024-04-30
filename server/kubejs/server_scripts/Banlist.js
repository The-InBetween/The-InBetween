//Clutter
ServerEvents.recipes(event => {
	event.remove({ output: 'clutter:common_coin_pouch'})
	event.remove({ output: 'clutter:uncommon_coin_pouch'})
	event.remove({ output: 'clutter:rare_coin_pouch'})
	event.remove({ output: 'clutter:epic_coin_pouch'})
	event.remove({ output: 'clutter:golden_coin'})
	event.remove({ output: 'clutter:silver_coin'})
	event.remove({ output: 'clutter:copper_coin'})
})

//Spelunkery
ServerEvents.recipes(event => {
	event.remove({ output: 'spelunkery:compression_blast_miner'})
})

//Extra Alchemy
ServerEvents.recipes(event => {
	event.remove({ output: 'extraalchemy:potion_ring'})
})

//Farmers Delight
ServerEvents.recipes(event => {
	///Removed Recipes
		event.remove({ output: 'farmersdelight:wheat_dough'})
		event.remove({ not: { type: 'create:splashing' }, output: 'create:dough' })
		event.remove({ not: { type: 'create:mixing' }, output: 'farmersdelight:pie_crust' })
		event.remove({ not: { type: 'farmersdelight:cutting' }, output: 'farmersdelight:raw_pasta' })
	///Replacements
		event.replaceInput(
		{},
		'farmersdelight:wheat_dough',
		'create:dough'
	)
})

//Modern Dynamics
ServerEvents.recipes( event => {
	event.remove({ output: 'moderndynamics:machine_extender'})
})

//Mythic Metals
ServerEvents.recipes(event => {
	///Removed Recipes
		event.remove({ output: 'mythicmetals:banglum_nuke_core'})
		event.remove({ output: 'mythicmetals:carmot_nuke_core'})
		event.remove({ output: 'mythicmetals:quadrillum_nuke_core'})
})

//Scannable
ServerEvents.recipes(event => {
	event.remove({ mod: 'scannable' })
})
	