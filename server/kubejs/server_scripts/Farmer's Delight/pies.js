//Removed Recipes
ServerEvents.recipes(event => {
event.remove({ not: { type: 'farmersdelight:cooking' }, output: 'minecraft:pumpkin_pie'})
event.remove({ not: { type: 'farmersdelight:cooking' }, output: 'farmersdelight:chocolate_pie'})
event.remove({ not: { type: 'farmersdelight:cooking' }, output: 'farmersdelight:sweet_berry_cheesecake'})
event.remove({ not: { type: 'farmersdelight:cooking' }, output: 'farmersdelight:apple_pie'})
event.remove({ not: { type: 'farmersdelight:cooking' }, output: 'bewitchment:witchberry_pie'})
event.remove({ not: { type: 'farmersdelight:cooking' }, output: "farmersdelight:shepherds_pie_block"})
})

//Custom Recipes
ServerEvents.recipes(event => {
 let mecookjesse = ( Ingredient, Pie ) => {
event.custom({
  "type": "farmersdelight:cooking",
  "recipe_book_tab": "meals",
  "ingredients": [
    {
      "item": Ingredient
    },
    {
      "item": Ingredient
    },
    {
      "tag": "c:milk"
    },
    {
      "tag": "c:milk"
    },
	{
      "item": "minecraft:sugar"
    },
	{
      "item": "minecraft:sugar"
    }
  ],
  "result": {
    "item": Pie
  },
  "container": {
    "item": "farmersdelight:pie_crust"
  },
  "experience": 1.0,
  "cookingtime": 200
   })
 }
	mecookjesse('farmersdelight:pumpkin_slice', 'minecraft:pumpkin_pie') 
	mecookjesse('kubejs:apple_slices', 'farmersdelight:apple_pie') 
	mecookjesse('create:bar_of_chocolate', 'farmersdelight:chocolate_pie')
	mecookjesse('minecraft:sweet_berries', 'farmersdelight:sweet_berry_cheesecake')
  mecookjesse('bewitchment:witchberry', 'bewitchment:witchberry_pie')
})

//The Fucking Shepherds Pie
ServerEvents.recipes(event => {
event.custom({
  "type": "farmersdelight:cooking",
  "recipe_book_tab": "meals",
  "ingredients": [
    {
      "tag": "c:cooked_mutton"
    },
    {
      "tag": "c:cooked_mutton"
    },
    {
      "item": "minecraft:baked_potato"
    },
    {
      "item": "minecraft:baked_potato"
    },
	{
      "item": "farmersdelight:onion"
    },
	{
      "item": "farmersdelight:onion"
    }
  ],
  "result": {
    "item": "farmersdelight:shepherds_pie_block"
  },
  "container": {
    "item": "minecraft:bowl"
  },
  "experience": 1.0,
  "cookingtime": 200
})
})
