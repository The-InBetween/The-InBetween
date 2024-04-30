ServerEvents.recipes(event => {
//Crafts n Additions interesting craftings
  event.custom({
    "type": "create:mixing",
    "ingredients": [
      {
        "item": "create:cinder_flour"
      },
      {
        "item": "minecraft:cobblestone"
      },
      {
        "amount": 2050,
        "fluid": "minecraft:lava"
      }
    ],
    "results": [
      {
        "item": "minecraft:netherrack"
      }
    ]
  })
})
