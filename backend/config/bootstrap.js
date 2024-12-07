/**
 * Seed Function
 * (sails.config.bootstrap)
 *
 * A function that runs just before your Sails app gets lifted.
 * > Need more flexibility?  You can also create a hook.
 *
 * For more information on seeding your app with fake data, check out:
 * https://sailsjs.com/config/bootstrap
 */

module.exports.bootstrap = async function() {

  // By convention, this is a good place to set up fake data during development.
  //
  // For example:
  // ```
  // // Set up fake development data (or if we already have some, avast)
   if (await Coffee.count() > 0) {
     return;
   }

   await Coffee.createEach([
    {
      "name": "Beach Brew",
      "price": 8.99,
      "description": "Smooth coffee blend perfect for a relaxing beach day.",
      "caffeineContent": 150.50,
      "brand": "Tchibo",
      "roastDegree": "Light roast",
      "beanType": "Arabica",
      "certificates": ["UTZ Certified"],
      "origin": "South-America",
      "grindType": "Medium"
    },
    {
      "name": "Forest Aroma",
      "price": 10.50,
      "description": "Aromatic coffee with earthy tones from the rainforest.",
      "caffeineContent": 120.25,
      "brand": "Jacobs",
      "roastDegree": "Medium roast",
      "beanType": "Arabica",
      "certificates": ["Rainforest Alliance Certified"],
      "origin": "Africa",
      "grindType": "Whole bean"
    },
    {
      "name": "Sunrise Delight",
      "price": 12.75,
      "description": "Bright and cheerful coffee to kickstart your morning.",
      "caffeineContent": 130.00,
      "brand": "Mellitta",
      "roastDegree": "Medium-dark roast",
      "beanType": "Robusta",
      "certificates": ["Fair Trade Certified"],
      "origin": "Asia",
      "grindType": "Medium-coarse"
    },
    {
      "name": "Mountain Roast",
      "price": 15.99,
      "description": "Bold and strong coffee with rich flavor.",
      "caffeineContent": 180.00,
      "brand": "Eduscho",
      "roastDegree": "Dark roast",
      "beanType": "Robusta",
      "certificates": ["Direct Trade"],
      "origin": "North-America",
      "grindType": "Fine"
    },
    {
      "name": "Sunset Blend",
      "price": 9.99,
      "description": "Perfect coffee for a peaceful evening with mild flavors.",
      "caffeineContent": 110.50,
      "brand": "Tchibo",
      "roastDegree": "Light roast",
      "beanType": "Robusta",
      "certificates": ["Bird-Friendly"],
      "origin": "Australia",
      "grindType": "Extra fine"
    },
    {
      "name": "Rainforest Gold",
      "price": 13.25,
      "description": "A sustainable coffee option with rich undertones.",
      "caffeineContent": 140.30,
      "brand": "Jacobs",
      "roastDegree": "Medium roast",
      "beanType": "Lieberica",
      "certificates": ["Rainforest Alliance Certified", "Fair Trade Certified"],
      "origin": "South-America",
      "grindType": "Medium"
    },
    {
      "name": "Urban Espresso",
      "price": 11.75,
      "description": "Strong espresso with intense flavor for urban coffee lovers.",
      "caffeineContent": 190.00,
      "brand": "Mellitta",
      "roastDegree": "Dark roast",
      "beanType": "Lieberica",
      "certificates": ["Direct Trade"],
      "origin": "Europe",
      "grindType": "Fine"
    },
    {
      "name": "Jungle Breeze",
      "price": 7.99,
      "description": "Smooth coffee with a hint of freshness from jungle beans.",
      "caffeineContent": 125.20,
      "brand": "Eduscho",
      "roastDegree": "Light roast",
      "beanType": "Lieberica",
      "certificates": ["Fair Trade Certified"],
      "origin": "Africa",
      "grindType": "Coarse"
    },
    {
      "name": "Morning Sun",
      "price": 9.50,
      "description": "Medium-bodied coffee ideal for early risers.",
      "caffeineContent": 145.50,
      "brand": "Tchibo",
      "roastDegree": "Medium roast",
      "beanType": "Excelsa",
      "certificates": ["UTZ Certified", "Bird-Friendly"],
      "origin": "Asia",
      "grindType": "Medium"
    },
    {
      "name": "Twilight Brew",
      "price": 16.50,
      "description": "A luxurious coffee blend for late-night indulgence.",
      "caffeineContent": 160.00,
      "brand": "Jacobs",
      "roastDegree": "Medium-dark roast",
      "beanType": "Excelsa",
      "certificates": ["Rainforest Alliance Certified", "Direct Trade"],
      "origin": "North-America",
      "grindType": "Whole bean"
    }
  ]);
  
  await Category.createEach([
    {
      "name": "Whole Beans - Espresso Roast",
      "description": "Premium whole beans roasted for a bold and intense espresso flavor.",
      "location": "1"
    },
    {
      "name": "Whole Beans - Light Roast",
      "description": "Smooth and bright whole beans with a light roast, perfect for pour-over coffee.",
      "location": "2"
    },
    {
      "name": "Whole Beans - Dark Roast",
      "description": "Rich and smoky whole beans roasted to a dark perfection for intense coffee lovers.",
      "location": "3"
    },
    {
      "name": "Ground Coffee - Medium Grind",
      "description": "Finely ground coffee ideal for drip coffee machines and pour-over brewing.",
      "location": "4"
    },
    {
      "name": "Ground Coffee - Coarse Grind",
      "description": "Perfectly coarse ground coffee for French presses and cold brews.",
      "location": "5"
    },
    {
      "name": "Ground Coffee - Espresso Grind",
      "description": "Ultra-fine ground coffee for espresso machines, delivering rich crema.",
      "location": "6"
    },
    {
      "name": "Coffee Pods - Classic Roast",
      "description": "Convenient coffee pods with a balanced and classic roast for daily enjoyment.",
      "location": "7"
    },
    {
      "name": "Coffee Pods - Dark Roast",
      "description": "Single-serve pods with bold and dark roasted coffee for strong coffee lovers.",
      "location": "8"
    },
    {
      "name": "Coffee Pods - Decaf",
      "description": "Delicious decaffeinated coffee pods, perfect for evening brews.",
      "location": "9"
    },
    {
      "name": "Coffee Pods - Caramel Flavor",
      "description": "Flavored coffee pods with a sweet caramel touch for a delightful cup.",
      "location": "10"
    }
  ]);
  
};
