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