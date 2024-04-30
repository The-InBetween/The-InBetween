ServerEvents.recipes(event => {
//Cutting Cheese in the Cutting Board
    function cutting(cheese, slices) {
        event.custom({
            "type": "farmersdelight:cutting",
            "ingredients": [
            {
                "item": `meadow:${cheese}`
            }
            ],
            "tool": {
            "type": "farmersdelight:tool",
            "tag": "c:tools/knives"
            },
            "result": [
            {
                "item": `meadow:${slices}`,
                "count": 4
            }
            ]
        });
    event.remove({ not: { type: 'farmersdelight:cutting' }, output: `meadow:${slices}`});
    }
        cutting('sheep_cheese_block', 'piece_of_sheep_cheese');
        cutting('buffalo_cheese_block', 'piece_of_buffalo_cheese');
        cutting('goat_cheese_block', 'piece_of_goat_cheese');
        cutting('amethyst_cheese_block', 'piece_of_amethyst_cheese');
        cutting('grain_cheese_block', 'piece_of_grain_cheese');
        cutting('cheese_block', 'piece_of_cheese');
        cutting('warped_cheese_block', 'piece_of_warped_cheese');
});

//Pasta from Farmer's Delight instead of Candlelight pasta
ServerEvents.recipes(event => {
    event.remove({ output: 'candlelight:pasta_raw'});
    event.replaceInput(
        { input:'candlelight:pasta_raw'},
        'candlelight:pasta_raw',
        'farmersdelight:raw_pasta'
    );
});

//Modifying tags
ServerEvents.tags('item', event => {
    event.add('forge:pasta', 'farmersdelight:raw_pasta');
    event.remove('forge:pasta', 'candlelight:pasta_raw');
    event.remove('c:pasta', 'candlelight:pasta_raw');
});

//Removed Recipes
ServerEvents.recipes(event => {
    event.remove({ not: { type: 'farmersdelight:cooking' }, output: 'minecraft:pumpkin_pie'})
    event.remove({ not: { type: 'farmersdelight:cooking' }, output: 'farmersdelight:chocolate_pie'})
    event.remove({ not: { type: 'farmersdelight:cooking' }, output: 'farmersdelight:sweet_berry_cheesecake'})
    event.remove({ not: { type: 'farmersdelight:cooking' }, output: 'farmersdelight:apple_pie'})
    event.remove({ not: { type: 'farmersdelight:cooking' }, output: 'bewitchment:witchberry_pie'})
    event.remove({ not: { type: 'farmersdelight:cooking' }, output: "farmersdelight:shepherds_pie_block"})
})

//Pie Recipes
ServerEvents.recipes(event => {
 function mecookjesse( Ingredient, Pie ) {
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

//The Fucking Shepherds Pie Recipe
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

//GingerBread Dough
ServerEvents.recipes(event => {
  event.custom({
    "type": "create:mixing",
    "ingredients": [
      {
        "item": "create:wheat_flour"
      },
      {
        "item": "minecraft:egg"
      },
      {
        "amount": 10125,
        "fluid": "create:honey"
      },
      {
        "amount": 10125,
        "fluidTag": "c:milk"
      }
    ],
    "results": [
      {
        "item": "festive_delight:gingerbread_dough"
      }
    ]
  })
})