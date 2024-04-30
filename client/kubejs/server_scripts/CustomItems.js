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
})