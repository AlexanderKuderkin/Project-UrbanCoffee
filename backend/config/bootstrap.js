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

    await User.createEach([ 
      { 
    emailAddress: 'admin@example.com', fullName: 'Ryan Dahl', isSuperAdmin: true, password: await 
    sails.helpers.passwords.hashPassword('abc123') }, 
    ]);

  // Check if data already exists
  if (await Coffee.count() > 0) {
    return;
  }

  const categories = await Category.createEach([
    {
      name: "Whole Beans - Espresso Roast",
      description: "Premium whole beans roasted for a bold and intense espresso flavor."
    },
    {
      name: "Ground Coffee - Medium Grind",
      description: "Finely ground coffee ideal for drip coffee machines and pour-over brewing."
    },
    {
      name: "Coffee Pods - Classic Roast",
      description: "Convenient coffee pods with a balanced and classic roast for daily enjoyment."
    }
  ]).fetch();

  await Coffee.createEach([
    {
      name: "Beach Brew",
      price: 8.99,
      description: "Smooth coffee blend perfect for a relaxing beach day.",
      caffeineContent: 150.50,
      brand: "Tchibo",
      roastDegree: "Light roast",
      beanType: "Arabica",
      certificates: ["UTZ Certified"],
      origin: "South-America",
      grindType: "Medium",
      category: categories[0].id
    },
    {
      name: "Forest Aroma",
      price: 10.50,
      description: "Aromatic coffee with earthy tones from the rainforest.",
      caffeineContent: 120.25,
      brand: "Jacobs",
      roastDegree: "Medium roast",
      beanType: "Arabica",
      certificates: ["Rainforest Alliance Certified"],
      origin: "Africa",
      grindType: "Whole bean",
      category: categories[0].id
    },
    {
      name: "Sunrise Delight",
      price: 12.75,
      description: "Bright and cheerful coffee to kickstart your morning.",
      caffeineContent: 130.00,
      brand: "Mellitta",
      roastDegree: "Medium-dark roast",
      beanType: "Robusta",
      certificates: ["Fair Trade Certified"],
      origin: "Asia",
      grindType: "Medium-coarse",
      category: categories[1].id
    },
    {
      name: "Mountain Roast",
      price: 15.99,
      description: "Bold and strong coffee with rich flavor.",
      caffeineContent: 180.00,
      brand: "Eduscho",
      roastDegree: "Dark roast",
      beanType: "Robusta",
      certificates: ["Direct Trade"],
      origin: "North-America",
      grindType: "Fine",
      category: categories[1].id
    },
    {
      name: "Sunset Blend",
      price: 9.99,
      description: "Perfect coffee for a peaceful evening with mild flavors.",
      caffeineContent: 110.50,
      brand: "Tchibo",
      roastDegree: "Light roast",
      beanType: "Robusta",
      certificates: ["Bird-Friendly"],
      origin: "Australia",
      grindType: "Extra fine",
      category: categories[2].id
    },
    {
      name: "Rainforest Gold",
      price: 13.25,
      description: "A sustainable coffee option with rich undertones.",
      caffeineContent: 140.30,
      brand: "Jacobs",
      roastDegree: "Medium roast",
      beanType: "Lieberica",
      certificates: ["Rainforest Alliance Certified", "Fair Trade Certified"],
      origin: "South-America",
      grindType: "Medium",
      category: categories[2].id
    },
    {
      name: "Urban Espresso",
      price: 11.75,
      description: "Strong espresso with intense flavor for urban coffee lovers.",
      caffeineContent: 190.00,
      brand: "Mellitta",
      roastDegree: "Dark roast",
      beanType: "Lieberica",
      certificates: ["Direct Trade"],
      origin: "Europe",
      grindType: "Fine",
      category: categories[0].id
    },
    {
      name: "Jungle Breeze",
      price: 7.99,
      description: "Smooth coffee with a hint of freshness from jungle beans.",
      caffeineContent: 125.20,
      brand: "Eduscho",
      roastDegree: "Light roast",
      beanType: "Lieberica",
      certificates: ["Fair Trade Certified"],
      origin: "Africa",
      grindType: "Coarse",
      category: categories[0].id
    },
    {
      name: "Morning Sun",
      price: 9.50,
      description: "Medium-bodied coffee ideal for early risers.",
      caffeineContent: 145.50,
      brand: "Tchibo",
      roastDegree: "Medium roast",
      beanType: "Excelsa",
      certificates: ["UTZ Certified", "Bird-Friendly"],
      origin: "Asia",
      grindType: "Medium",
      category: categories[1].id
    },
    {
      name: "Twilight Brew",
      price: 16.50,
      description: "A luxurious coffee blend for late-night indulgence.",
      caffeineContent: 160.00,
      brand: "Jacobs",
      roastDegree: "Medium-dark roast",
      beanType: "Excelsa",
      certificates: ["Rainforest Alliance Certified", "Direct Trade"],
      origin: "North-America",
      grindType: "Whole bean",
      category: categories[2].id
    },
    {
      name: "Golden Horizon",
      price: 19.99,
      description: "A rich and balanced coffee blend with golden undertones.",
      caffeineContent: 160.00,
      brand: "Tchibo",
      roastDegree: "Medium roast",
      beanType: "Arabica",
      certificates: ["UTZ Certified", "Rainforest Alliance Certified"],
      origin: "South-America",
      grindType: "Medium",
      category: categories[0].id
    },
    {
      name: "Espresso Intense",
      price: 14.99,
      description: "Bold and intense espresso with a smoky finish.",
      caffeineContent: 200.00,
      brand: "Mellitta",
      roastDegree: "Dark roast",
      beanType: "Robusta",
      certificates: ["Fair Trade Certified"],
      origin: "Asia",
      grindType: "Fine",
      category: categories[0].id
    },
    {
      name: "Tropical Bliss",
      price: 8.99,
      description: "A light and fruity blend from tropical regions.",
      caffeineContent: 135.00,
      brand: "Jacobs",
      roastDegree: "Light roast",
      beanType: "Excelsa",
      certificates: ["Bird-Friendly"],
      origin: "Australia",
      grindType: "Coarse",
      category: categories[1].id
    },
    {
      name: "Morning Glory",
      price: 10.50,
      description: "Smooth and bright coffee to kickstart your day.",
      caffeineContent: 145.25,
      brand: "Eduscho",
      roastDegree: "Medium roast",
      beanType: "Arabica",
      certificates: ["UTZ Certified"],
      origin: "North-America",
      grindType: "Whole bean",
      category: categories[1].id
    },
    {
      name: "Rainforest Delight",
      price: 12.75,
      description: "Sustainable and aromatic blend with earthy tones.",
      caffeineContent: 140.50,
      brand: "Jacobs",
      roastDegree: "Medium-dark roast",
      beanType: "Lieberica",
      certificates: ["Rainforest Alliance Certified", "Fair Trade Certified"],
      origin: "Africa",
      grindType: "Medium-coarse",
      category: categories[2].id
    },
    {
      name: "Urban Classic",
      price: 9.99,
      description: "A classic blend perfect for busy urban mornings.",
      caffeineContent: 150.00,
      brand: "Mellitta",
      roastDegree: "Medium roast",
      beanType: "Robusta",
      certificates: ["Direct Trade"],
      origin: "Europe",
      grindType: "Fine",
      category: categories[2].id
    },
    {
      name: "Velvet Roast",
      price: 17.99,
      description: "Luxuriously smooth and rich dark roast.",
      caffeineContent: 180.00,
      brand: "Eduscho",
      roastDegree: "Dark roast",
      beanType: "Excelsa",
      certificates: ["Bird-Friendly", "Fair Trade Certified"],
      origin: "Asia",
      grindType: "Extra fine",
      category: categories[0].id
    },
    {
      name: "Coastal Morning",
      price: 11.25,
      description: "Bright and fresh blend inspired by coastal regions.",
      caffeineContent: 130.00,
      brand: "Tchibo",
      roastDegree: "Light roast",
      beanType: "Arabica",
      certificates: ["Rainforest Alliance Certified"],
      origin: "Australia",
      grindType: "Medium",
      category: categories[1].id
    },
    {
      name: "Twilight Essence",
      price: 15.50,
      description: "A rich and elegant dark roast for evening indulgence.",
      caffeineContent: 190.00,
      brand: "Jacobs",
      roastDegree: "Dark roast",
      beanType: "Robusta",
      certificates: ["Direct Trade", "UTZ Certified"],
      origin: "South-America",
      grindType: "Whole bean",
      category: categories[2].id
    },
    {
      name: "Savanna Breeze",
      price: 8.75,
      description: "Smooth and mild coffee with hints of the savanna.",
      caffeineContent: 125.00,
      brand: "Mellitta",
      roastDegree: "Light roast",
      beanType: "Lieberica",
      certificates: ["Fair Trade Certified"],
      origin: "Africa",
      grindType: "Coarse",
      category: categories[0].id
    },
    {
      name: "Amber Brew",
      price: 14.99,
      description: "A smooth and rich coffee with a hint of caramel sweetness.",
      caffeineContent: 155.00,
      brand: "Tchibo",
      roastDegree: "Medium roast",
      beanType: "Arabica",
      certificates: ["Fair Trade Certified", "UTZ Certified"],
      origin: "South-America",
      grindType: "Medium",
      category: categories[0].id
    },
    {
      name: "Crimson Espresso",
      price: 18.75,
      description: "Strong and bold espresso with deep chocolate undertones.",
      caffeineContent: 200.00,
      brand: "Mellitta",
      roastDegree: "Dark roast",
      beanType: "Robusta",
      certificates: ["Direct Trade"],
      origin: "Asia",
      grindType: "Fine",
      category: categories[0].id
    },
    {
      name: "Frosted Morning",
      price: 9.25,
      description: "A bright and refreshing light roast to start the day.",
      caffeineContent: 135.00,
      brand: "Jacobs",
      roastDegree: "Light roast",
      beanType: "Excelsa",
      certificates: ["Bird-Friendly"],
      origin: "Australia",
      grindType: "Coarse",
      category: categories[1].id
    },
    {
      name: "Hazelnut Delight",
      price: 12.50,
      description: "Medium roast coffee with a nutty, hazelnut flavor.",
      caffeineContent: 145.00,
      brand: "Eduscho",
      roastDegree: "Medium roast",
      beanType: "Arabica",
      certificates: ["UTZ Certified"],
      origin: "Europe",
      grindType: "Medium",
      category: categories[1].id
    },
    {
      name: "Spiced Twilight",
      price: 16.00,
      description: "A luxurious blend with hints of cinnamon and nutmeg.",
      caffeineContent: 170.00,
      brand: "Jacobs",
      roastDegree: "Medium-dark roast",
      beanType: "Lieberica",
      certificates: ["Rainforest Alliance Certified"],
      origin: "Africa",
      grindType: "Medium-coarse",
      category: categories[2].id
    },
    {
      name: "Velvet Morning",
      price: 11.50,
      description: "A smooth, light roast for a perfect morning brew.",
      caffeineContent: 120.50,
      brand: "Mellitta",
      roastDegree: "Light roast",
      beanType: "Robusta",
      certificates: ["Fair Trade Certified"],
      origin: "North-America",
      grindType: "Fine",
      category: categories[2].id
    },
    {
      name: "Rainforest Serenade",
      price: 13.75,
      description: "Earthy tones with a sweet, clean finish.",
      caffeineContent: 145.50,
      brand: "Eduscho",
      roastDegree: "Medium roast",
      beanType: "Arabica",
      certificates: ["Rainforest Alliance Certified", "Direct Trade"],
      origin: "South-America",
      grindType: "Whole bean",
      category: categories[0].id
    },
    {
      name: "Dark Ember",
      price: 17.25,
      description: "Rich, dark roast with smoky undertones for bold flavor lovers.",
      caffeineContent: 180.00,
      brand: "Tchibo",
      roastDegree: "Dark roast",
      beanType: "Robusta",
      certificates: ["Bird-Friendly"],
      origin: "Asia",
      grindType: "Extra fine",
      category: categories[0].id
    },
    {
      name: "Autumn Blend",
      price: 10.99,
      description: "A cozy, medium-bodied coffee perfect for autumn mornings.",
      caffeineContent: 135.00,
      brand: "Jacobs",
      roastDegree: "Medium roast",
      beanType: "Excelsa",
      certificates: ["Fair Trade Certified", "UTZ Certified"],
      origin: "Australia",
      grindType: "Medium",
      category: categories[1].id
    },
    {
      name: "Sunrise Symphony",
      price: 15.50,
      description: "A bright and vibrant light roast with floral notes.",
      caffeineContent: 150.00,
      brand: "Eduscho",
      roastDegree: "Light roast",
      beanType: "Lieberica",
      certificates: ["Bird-Friendly", "Direct Trade"],
      origin: "Africa",
      grindType: "Coarse",
      category: categories[2].id
    },
    {
      name: "Royal Reserve",
      price: 24.99,
      description: "An exquisite blend reserved for coffee connoisseurs.",
      caffeineContent: 155.50,
      brand: "Tchibo",
      roastDegree: "Medium roast",
      beanType: "Arabica",
      certificates: ["UTZ Certified", "Fair Trade Certified"],
      origin: "South-America",
      grindType: "Medium",
      category: categories[0].id
    },
    {
      name: "Black Velvet",
      price: 22.75,
      description: "Rich and bold dark roast with a velvety smooth finish.",
      caffeineContent: 180.00,
      brand: "Mellitta",
      roastDegree: "Dark roast",
      beanType: "Robusta",
      certificates: ["Bird-Friendly"],
      origin: "Asia",
      grindType: "Fine",
      category: categories[0].id
    },
    {
      name: "Emerald Blend",
      price: 27.50,
      description: "A rare and luxurious coffee blend with deep aromas.",
      caffeineContent: 165.00,
      brand: "Jacobs",
      roastDegree: "Medium-dark roast",
      beanType: "Excelsa",
      certificates: ["Rainforest Alliance Certified"],
      origin: "Africa",
      grindType: "Whole bean",
      category: categories[1].id
    },
    {
      name: "Golden Peaks",
      price: 25.99,
      description: "A premium blend sourced from high-altitude farms.",
      caffeineContent: 170.00,
      brand: "Eduscho",
      roastDegree: "Light roast",
      beanType: "Arabica",
      certificates: ["UTZ Certified", "Direct Trade"],
      origin: "Europe",
      grindType: "Medium-coarse",
      category: categories[1].id
    },
    {
      name: "Platinum Roast",
      price: 30.00,
      description: "A masterfully roasted blend for an unparalleled coffee experience.",
      caffeineContent: 190.50,
      brand: "Jacobs",
      roastDegree: "Dark roast",
      beanType: "Lieberica",
      certificates: ["Rainforest Alliance Certified", "Bird-Friendly"],
      origin: "North-America",
      grindType: "Extra fine",
      category: categories[2].id
    },
    {
      name: "Diamond Espresso",
      price: 29.99,
      description: "An exclusive espresso blend with a rich crema and bold flavor.",
      caffeineContent: 200.00,
      brand: "Mellitta",
      roastDegree: "Dark roast",
      beanType: "Robusta",
      certificates: ["Fair Trade Certified"],
      origin: "South-America",
      grindType: "Fine",
      category: categories[2].id
    },
    {
      name: "Celestial Brew",
      price: 23.50,
      description: "A heavenly light roast with subtle floral undertones.",
      caffeineContent: 140.00,
      brand: "Tchibo",
      roastDegree: "Light roast",
      beanType: "Arabica",
      certificates: ["UTZ Certified", "Bird-Friendly"],
      origin: "Asia",
      grindType: "Coarse",
      category: categories[0].id
    },
    {
      name: "Velvet Dark Symphony",
      price: 26.75,
      description: "A robust and smooth dark roast for a refined palate.",
      caffeineContent: 185.00,
      brand: "Eduscho",
      roastDegree: "Dark roast",
      beanType: "Excelsa",
      certificates: ["Rainforest Alliance Certified"],
      origin: "Africa",
      grindType: "Whole bean",
      category: categories[1].id
    },
    {
      name: "Majestic Sunrise",
      price: 28.25,
      description: "A bright and clean coffee to elevate your mornings.",
      caffeineContent: 150.00,
      brand: "Jacobs",
      roastDegree: "Medium roast",
      beanType: "Arabica",
      certificates: ["Direct Trade", "Bird-Friendly"],
      origin: "Australia",
      grindType: "Medium",
      category: categories[2].id
    },
    {
      name: "Crown Jewel Espresso",
      price: 32.50,
      description: "A luxurious espresso blend crafted for perfection.",
      caffeineContent: 210.00,
      brand: "Mellitta",
      roastDegree: "Dark roast",
      beanType: "Robusta",
      certificates: ["UTZ Certified", "Fair Trade Certified", "Bird-Friendly"],
      origin: "Europe",
      grindType: "Extra fine",
      category: categories[2].id
    }
  ]);

};
