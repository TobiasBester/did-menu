import { MeatType } from './meatTypes';
import { DishTags } from './dishTags';

export const menuDetails = [
	{
		group: 'Meals',
		subgroups: [
			{
				subgroup: 'Chow Fun (Fried Rice)',
				dishes: [
					{
						name: 'Chop Suey',
						description: 'Stir Fried Vegetables with Egg Fried Rice',
						options: [
							{ meat: MeatType.CHICKEN, price: 40 },
							{ meat: MeatType.BEEF, price: 48 },
							{ meat: MeatType.PORK, price: 45 },
							{ meat: MeatType.VEG, price: 35 },
						],
						tags: [DishTags.VEGETARIAN]
					},
					{
						name: 'Chicken Pineapple',
						description: 'Pineapple and Stir Fried Vegetables with Egg Fried Rice',
						options: [
							{ meat: MeatType.NONE, price: 45 }
						]
					},
					{
						name: 'Sweet and Sour',
						description: 'Battered Chicken or Pork with Egg Fried Rice and a Sweet and Sour sauce',
						options: [
							{ meat: MeatType.CHICKEN, price: 45 },
							{ meat: MeatType.PORK, price: 45 }
						]
					}
				]
			},
			{
				subgroup: 'Noodles',
				dishes: [
					{
						name: 'Chow Mein',
						description: 'Chinese Egg Noodles with Stir Fried Vegetables',
						options: [
							{ meat: MeatType.CHICKEN, price: 40 },
							{ meat: MeatType.BEEF, price: 45 },
							{ meat: MeatType.PORK, price: 40 },
							{ meat: MeatType.VEG, price: 30 },
						],
						tags: [DishTags.VEGETARIAN]
					},
				]
			},
			{
				subgroup: 'House Specialities',
				dishes: [
					{
						name: 'Crispy Sesame Beef',
						description: 'Sweet, sticky sauce and Sesame over Beef and Rice',
						options: [
							{ meat: MeatType.NONE, price: 48 },
						]
					},
					{
						name: 'Beef Green Peppers',
						description: 'Green Peppers and Black Bean and Garlic Sauce with Beef and Rice',
						options: [
							{ meat: MeatType.NONE, price: 48 },
						]
					},
					{
						name: 'Beef Mushroom and Oyster Sauce',
						description: 'Mushrooms and Oyster Sauce over Beef and Rice',
						options: [
							{ meat: MeatType.NONE, price: 48 },
						],
						tags: [DishTags.NEW]
					},
					{
						name: 'Thai Chicken Curry',
						description: 'Chicken with Red Thai Curry sauce and Rice',
						options: [
							{ meat: MeatType.NONE, price: 48 },
						],
						tags: [DishTags.MILD]
					},
					{
						name: 'Chicken Cashew',
						description: 'Diced Chicken with Cashew Nuts and Rice',
						options: [
							{ meat: MeatType.NONE, price: 48 },
						]
					},
					{
						name: 'Chinese Five Spice Chicken',
						description: 'Chicken cutlets with Chinese Five Spice and Rice',
						options: [
							{ meat: MeatType.NONE, price: 48 },
						]
					},
					{
						name: 'Szechuan Chicken',
						description: 'Spicy Szechuan Peppercorn Chicken with Rice',
						options: [
							{ meat: MeatType.NONE, price: 48 },
						],
						tags: [DishTags.NEW, DishTags.SPICY]
					},
					{
						name: 'Chicken Mushroom Foo Yong',
						description: 'Omelette with Chicken, Mushrooms, and Rice',
						options: [
							{ meat: MeatType.NONE, price: 48 },
						],
						tags: [DishTags.NEW]
					}
				]
			}
		]
	},
	{
		group: 'Sides',
		subgroups: [
			{
				subgroup: 'Savoury',
				dishes: [
					{
						name: 'Spring Roll',
						description: 'Trademark Spring Roll with Stir Fry Vegetable filling',
						options: [
							{ meat: MeatType.CHICKEN, price: 10 },
							{ meat: MeatType.BEEF, price: 10 },
							{ meat: MeatType.PORK, price: 10 },
							{ meat: MeatType.VEG, price: 8, tags: [DishTags.VEGETARIAN] },
						],
						tags: [DishTags.VEGETARIAN]
					},
					{
						name: 'Sweet Corn Soup',
						description: 'Soup with Chicken pieces and Sweet Corn',
						options: [
							{ meatType: MeatType.NONE, price: 15 },
						]
					},
					{
						name: 'Chicken Noodle Soup',
						description: 'Soup with Thin Noodles, Chicken, and Vegetables',
						options: [
							{ meatType: MeatType.NONE, price: 15 },
						]
					},
					{
						name: 'Bao',
						description: 'Steamed Pork Bun',
						options: [
							{ meatType: MeatType.NONE, price: 8 },
						],
						tags: [DishTags.NEW]
					},
					{
						name: 'Prawn Crackers',
						description: 'Deep-fried Chips-like Snack',
						options: [
							{ meatType: MeatType.NONE, price: 12 },
						]
					},
				]
			},
			{
				subgroup: 'Sweet',
				dishes: [
					{
						name: 'Bow Ties',
						description: 'Syrupy and Crispy Bow Ties',
						options: [
							{ meat: MeatType.NONE, price: 7 },
						]
					},
				]
			}
		]
	},
	{
		group: 'Platters',
		subgroups: [
			{
				subgroup: 'Standard Platters',
				dishes: [
					{
						name: 'Meat Platter',
						description: 'Chipolata Sausages, Chicken Wings, Chicken and Beef Kebabs, Meat Balls, Spicy Chicken Strips',
						options: [
							{ meat: MeatType.NONE, price: 400 },
						]
					},
					{
						name: 'Pastry and Sandwich',
						description: 'Mini Spring Rolls, Mini Quiches, Samosas, Bacon and Potato Puffs, Sausage Rolls, and Assorted Sandwiches',
						options: [
							{ meat: MeatType.NONE, price: 350 },
						]
					},
					{
						name: 'Vegetarian/Fruit',
						description: 'Fruit Kebabs, Vegetable Skewers, Vegetable Pieces with Dip',
						options: [
							{ meat: MeatType.NONE, price: 300 },
						]
					},
				]
			},
			{
				subgroup: 'Custom Platters',
				dishes: [
					{
						name: 'Build Your Own',
						description: 'Compose your platter of savoury or sweet choices'
					}
				]
			}
		]
	}
];
