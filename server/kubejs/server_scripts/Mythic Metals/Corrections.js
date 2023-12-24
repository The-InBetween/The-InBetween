ServerEvents.recipes(event => {
///Stupid Fucking Knife
event.remove({ id: 'farmersknives:star_platinum_knife' });

event.shaped({
  "key": {
    "A": {
      "item": "minecraft:stick"
    },
    "B": {
      "item": "mythicmetals:star_platinum"
    }
  },
  "pattern": [
    "B",
    "A"
  ],
  "result": {
    "item": "farmersknives:star_platinum_knife"
  }
})

//removing brass from the mixer, so you only craft it in the forge
event.remove({ id: 'create:mixing/brass_ingot' });

})
