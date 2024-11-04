ServerEvents.recipes(event => {
    event.remove({ id: 'aeinfinitybooster:infinity_card' })
    event.shaped('aeinfinitybooster:infinity_card', ['EBE', 'BUB', 'NNN'], {
      U: 'ae2:spatial_cell_component_128',
      B: 'ae2:wireless_booster',
      E: '#forge:plates/enderium',
      N: 'minecraft:netherite_block'
    }).id('kubejs:aeinfinitybooster/infinity_card')
  })

  // Botany pots fix
  ServerEvents.recipes(event => {
  //   event.recipes.botanypots.crop(
  //     "minecraft:candle", // seed item
  //     ["oak_leaves"], // categories that this crop can be planted on
  //     { block: "minecraft:candle" }, // display block
  //     [
  //         Item.of ("minecraft:candle") // item
  //             .withChance(100) // weight of this entry compared to the others
  //             .withRolls(1, 2) // the times this loot will be chosen (min, max)
  //         // for example, when chosen this will give 1 to 2 candles
  //     ],
  //     10, // growthTicks
  //     1, // optional, growthModifier - this can be set to 1 in most cases
  // )
  });