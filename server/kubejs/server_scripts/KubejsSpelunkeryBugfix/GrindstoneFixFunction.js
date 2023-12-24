BlockEvents.rightClicked(event => {
    let item = event.player.getHeldItem('main_hand');
    let hand = event.getHand() == 'main_hand';
    //Itens that output two itens when right-clicking the grindstone
    function doubleOutput(rough, return1, return2){
        if (item.count > 0 && event.block.id == 'minecraft:grindstone' && item.id == rough && hand) {
            item.count--
            event.player.give(return1);
            event.player.give(return2);
            event.server.runCommandSilent(`execute as ${event.entity.username} run execute at ${event.entity.username} run playsound minecraft:block.grindstone.use block @s ~ ~ ~ 0.5 1`);
            event.cancel()
    }}
    doubleOutput('spelunkery:rough_cinnabar', 'spelunkery:cinnabar', 'minecraft:redstone');
    doubleOutput('spelunkery:rough_cinnabar_shard', 'spelunkery:cinnabar_shard', 'minecraft:redstone');
    doubleOutput('spelunkery:rough_cinnabar_block', 'spelunkery:cinnabar_block', 'minecraft:redstone');
    doubleOutput('spelunkery:rough_lazurite', 'minecraft:lapis_lazuli', 'spelunkery:raw_gold_nugget');
    doubleOutput('spelunkery:rough_lazurite_shard', 'spelunkery:lapis_lazuli_shard', 'spelunkery:raw_gold_nugget');
    doubleOutput('spelunkery:rough_lazurite_block', 'minecraft:lapis_block', 'spelunkery:raw_gold_nugget');

    //Itens that output one single item when right-clicking the grindstone
    function singleOutput(grindstone, rough2, singleReturn) {
        if (item.count > 0 && event.block.id == grindstone && item.id == rough2 && hand) {
            item.count--
            event.player.give(singleReturn);
            event.server.runCommandSilent(`execute as ${event.entity.username} run execute at ${event.entity.username} run playsound minecraft:block.grindstone.use block @s ~ ~ ~ 0.5 1`);
            event.cancel();
    }}
    singleOutput('spelunkery:diamond_grindstone', 'spelunkery:rough_emerald', 'minecraft:emerald');
    singleOutput('spelunkery:diamond_grindstone', 'spelunkery:rough_emerald_shard', 'spelunkery:emerald_shard');
    singleOutput('spelunkery:diamond_grindstone', 'spelunkery:rough_emerald_block', 'minecraft:emerald_block');
    singleOutput('spelunkery:diamond_grindstone', 'spelunkery:rough_diamond', 'minecraft:diamond');
    singleOutput('spelunkery:diamond_grindstone', 'spelunkery:rough_diamond_shard', 'spelunkery:diamond_shard');
    singleOutput('spelunkery:diamond_grindstone', 'spelunkery:rough_diamond_block', 'minecraft:diamond_block');
    singleOutput('minecraft:grindstone', 'spelunkery:rock_salt', 'spelunkery:salt');
    singleOutput('minecraft:grindstone', 'create:rose_quartz', 'create:polished_rose_quartz');
})