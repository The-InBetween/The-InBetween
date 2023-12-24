//Removed Recipes
ServerEvents.recipes(event => {
event.remove({ not: { type: 'create:mixing' }, output: 'festive_delight:gingerbread_dough'})
})

//Added Recipes
ServerEvents.recipes(event => {
event.custom({
  "type": "create:mixing",
  "ingredients": [
    {
      "item": "create:wheat_flour"
    },
	{
      "item": "minecraft:egg"
    },
    {
      "amount": 10125,
      "fluid": "create:honey"
    },
    {
      "amount": 10125,
      "fluidTag": "c:milk"
    }
  ],
  "results": [
    {
      "item": "festive_delight:gingerbread_dough"
    }
  ]
})

})
