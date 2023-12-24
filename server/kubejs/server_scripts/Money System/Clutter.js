///Removing the coins
LootJS.modifiers((event) => {
	event.addLootTypeModifier(LootType.CHEST).removeLoot('clutter:golden_coin');
	event.addLootTypeModifier(LootType.CHEST).removeLoot('clutter:silver_coin');
	event.addLootTypeModifier(LootType.CHEST).removeLoot('clutter:copper_coin');
	event.addLootTypeModifier(LootType.CHEST).removeLoot('clutter:common_coin_pouch');
	event.addLootTypeModifier(LootType.CHEST).removeLoot('clutter:uncommon_coin_pouch');
	event.addLootTypeModifier(LootType.CHEST).removeLoot('clutter:rare_coin_pouch');
	event.addLootTypeModifier(LootType.CHEST).removeLoot('clutter:epic_coin_pouch');

	event.addLootTypeModifier(LootType.ENTITY).removeLoot('clutter:golden_coin');
	event.addLootTypeModifier(LootType.ENTITY).removeLoot('clutter:silver_coin');
	event.addLootTypeModifier(LootType.ENTITY).removeLoot('clutter:copper_coin');
	event.addLootTypeModifier(LootType.ENTITY).removeLoot('clutter:common_coin_pouch');
	event.addLootTypeModifier(LootType.ENTITY).removeLoot('clutter:uncommon_coin_pouch');
	event.addLootTypeModifier(LootType.ENTITY).removeLoot('clutter:rare_coin_pouch');
	event.addLootTypeModifier(LootType.ENTITY).removeLoot('clutter:epic_coin_pouch');
})

///COIN STACKS CHANGED WITH A DATAPACK

///Coin Stack Recipes
ServerEvents.recipes(event => {
	   let stackcoinfix = ( Id, Wrong, Right ) => {
   event.replaceInput(
            { id: Id },
             Wrong,
             Right
        )}
   stackcoinfix('clutter:copper_coin_stack', 'clutter:copper_coin', 'numismatic-overhaul:bronze_coin')
   stackcoinfix('clutter:silver_coin_stack', 'clutter:silver_coin', 'numismatic-overhaul:silver_coin')
   stackcoinfix('clutter:golden_coin_stack', 'clutter:golden_coin', 'numismatic-overhaul:gold_coin')
})


///Changing the rarity of coins
LootJS.modifiers((event) => {
    event
        .addLootTypeModifier(LootType.CHEST)
        .addWeightedLoot(
            [3, 2],
            [Item.of('numismatic-overhaul:bronze_coin').withChance(200), Item.of('numismatic-overhaul:silver_coin').withChance(2)]
        );
});

///Villager Trades

