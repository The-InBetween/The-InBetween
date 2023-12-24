ServerEvents.recipes(event => {
///Removed recipes

///Added recipes
//Farmersdelight: Cutting board
event.custom({
  "type": "farmersdelight:cutting",
  "ingredients": [
    {
      "item": "minecraft:apple"
    }
  ],
  "tool": {
    "type": "farmersdelight:tool",
    "tag": "c:tools/knives"
  },
  "result": [
    {
      "item": "kubejs:apple_slices",
	  "count": 2
    }
  ]
})

//Create: Spout
event.custom({
  "type": "create:filling",
  "ingredients": [
    {
      "item": "kubejs:brigadeiro_paper_forms"
    },
    {
      "amount": 20250,
      "fluid": "create:chocolate",
      "nbt": {}
    }
  ],
  "results": [
    {
      "item": "kubejs:brigadeiro"
    }
  ]
})

//Minecraft: Crafting
event.custom({
  "type": "minecraft:crafting_shaped",
  "key": {
    "C": {
      "item": "minecraft:paper"
    }
  },
  "pattern": [
    "C C",
    " C "
  ],
  "result": {
	"count": 4,
    "item": "kubejs:brigadeiro_paper_forms"
  }
})

})