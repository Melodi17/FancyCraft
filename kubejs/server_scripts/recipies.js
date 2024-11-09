ServerEvents.recipes(event => {
  event.remove({ id: 'aeinfinitybooster:infinity_card' })
  event.shaped('aeinfinitybooster:infinity_card', ['EBE', 'BUB', 'NNN'], {
    U: 'ae2:spatial_cell_component_128',
    B: 'ae2:wireless_booster',
    E: '#forge:plates/enderium',
    N: 'minecraft:netherite_block'
  }).id('kubejs:aeinfinitybooster/infinity_card')
})

ServerEvents.recipes(event => {
  event.remove({ output: 'blahaj:yarn_spinner' })

  let knitting = color => {
    event.shapeless(`5x blahaj:${color}_yarn`, [
      `#minecraft:swords`,
      `minecraft:${color}_wool`,
    ])
    .damageIngredient('#minecraft:swords', 1)
    .id(`kubejs:blahaj/knitting_yarn_${color}`)
  }

  let cheap_knitting = color => {
    event.shapeless(`2x blahaj:${color}_yarn`, [
      `minecraft:stick`,
      `minecraft:${color}_wool`,
    ])
    .id(`kubejs:blahaj/knitting_cheap_yarn_${color}`)
  }

  //  white, orange, magenta, light blue, yellow, lime, pink, gray, light gray, cyan, purple, blue, brown, green, red, and black
  let colors = ['white', 'orange', 'magenta', 'light_blue', 'yellow', 'lime', 'pink', 'gray', 'light_gray', 'cyan', 'purple', 'blue', 'brown', 'green', 'red', 'black']
  colors.forEach(knitting)
  colors.forEach(cheap_knitting)
});