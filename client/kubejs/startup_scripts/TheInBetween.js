//Changing the mod display name
Platform.mods.kubejs.name = 'The InBetween'

//fucking meme
ItemEvents.modification(event => {
    event.modify('minecraft:command_block', item => {
        item.foodProperties = food => food
                                        .hunger(3)
                                        .saturation(1)
                                        .alwaysEdible(true)
    })
})