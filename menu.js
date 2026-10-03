/*
  MENU
  ---------------------------------------------------------------------------
  Everything customers can order. All names and prices here are examples.
  Save and refresh the page after editing. The demo resets itself
  automatically when this file changes.

  PRODUCT FIELDS
    id           short unique name, no spaces (used inside the app)
    category     the id of a category below
    name         shown to customers
    description  one or two sentences
    image        optional photo path, for example 'images/margherita.jpg'
    price        for a single-price item
    sizes        for items with sizes: [{ label: 'Large 14"', price: 15.99 }]
                 add salePrice to show a discount: { label: 'Large', price: 16.99, salePrice: 14.99 }
    section      optional small heading inside a category, like 'Pasta' inside Sides
    featured     true shows it under "Popular right now" on the homepage
    available    false shows it as sold out

  DEAL FIELDS
    id, group (tab name on the Deals page), name, price, items, description, image
    items        each line starts with a quantity: '2 Cheese Burger'
    featured     true shows it in the Deals row on the homepage
    banner       true shows it as a big offer card on the homepage,
                 or a path to your own poster image: 'images/family-poster.jpg'

  DISCOUNT CODE FIELDS
    code         what customers type, letters and numbers only
    type         'percent' or 'fixed'
    value        20 means 20% off (percent) or 20 off in your currency (fixed)
    minOrder     smallest subtotal the code works on. 0 for none
    stackable    true lets it combine with deals and other stackable codes

  CATEGORY ICONS: pizza, burger, drink, sides, wraps, dish
*/
window.STORE_MENU = {

  categories: [
    { id: 'pizza',   name: 'Pizza',   icon: 'pizza' },
    { id: 'burgers', name: 'Burgers', icon: 'burger' },
    { id: 'sides',   name: 'Sides',   icon: 'sides' },
    { id: 'wraps',   name: 'Wraps',   icon: 'wraps' },
    { id: 'drinks',  name: 'Drinks',  icon: 'drink' }
  ],

  products: [
    // ---- Pizza ----
    { id: 'margherita', category: 'pizza', name: 'Margherita', featured: true,
      description: 'Tomato sauce, mozzarella and fresh basil.',
      sizes: [{ label: 'Small 10"', price: 8.99 }, { label: 'Medium 12"', price: 11.99 }, { label: 'Large 14"', price: 14.99 }] },

    { id: 'pepperoni', category: 'pizza', name: 'Pepperoni', featured: true,
      description: 'Spicy pepperoni slices on tomato sauce and mozzarella.',
      sizes: [{ label: 'Small 10"', price: 9.99 }, { label: 'Medium 12"', price: 12.99 }, { label: 'Large 14"', price: 15.99 }] },

    { id: 'bbq-chicken', category: 'pizza', name: 'BBQ Chicken', featured: true,
      description: 'Grilled chicken, red onion and smoky barbecue sauce.',
      sizes: [{ label: 'Small 10"', price: 10.99 }, { label: 'Medium 12"', price: 13.99 }, { label: 'Large 14"', price: 16.99 }] },

    { id: 'veggie-garden', category: 'pizza', name: 'Veggie Garden',
      description: 'Peppers, mushrooms, onions, olives and sweetcorn.',
      sizes: [{ label: 'Small 10"', price: 9.49 }, { label: 'Medium 12"', price: 12.49 }, { label: 'Large 14"', price: 15.49 }] },

    { id: 'four-cheese', category: 'pizza', name: 'Four Cheese',
      description: 'Mozzarella, cheddar, parmesan and blue cheese.',
      sizes: [{ label: 'Small 10"', price: 10.49 }, { label: 'Medium 12"', price: 13.49 }, { label: 'Large 14"', price: 16.49 }] },

    { id: 'spicy-chicken', category: 'pizza', name: 'Spicy Chicken', featured: true,
      description: 'Hot chicken, jalapeños and chili flakes.',
      sizes: [{ label: 'Small 10"', price: 10.99 }, { label: 'Medium 12"', price: 13.99 }, { label: 'Large 14"', price: 16.99, salePrice: 14.99 }] },

    { id: 'meat-lovers', category: 'pizza', name: 'Meat Lovers',
      description: 'Pepperoni, beef, chicken and sausage.',
      sizes: [{ label: 'Medium 12"', price: 14.49 }, { label: 'Large 14"', price: 17.49 }] },

    // ---- Burgers ----
    { id: 'classic-burger', category: 'burgers', name: 'Classic Burger', price: 6.99, featured: true,
      description: 'Beef patty, lettuce, tomato, pickles and house sauce.' },

    { id: 'cheese-burger', category: 'burgers', name: 'Cheese Burger', price: 7.49,
      description: 'Beef patty with melted cheddar.' },

    { id: 'crispy-chicken-burger', category: 'burgers', name: 'Crispy Chicken Burger', price: 7.99, featured: true,
      description: 'Crispy fried chicken fillet with lettuce and mayo.' },

    { id: 'double-stack', category: 'burgers', name: 'Double Stack', price: 9.99,
      description: 'Two beef patties, double cheese and grilled onions.' },

    // ---- Sides ----
    { id: 'fries', category: 'sides', section: 'Fries & snacks', name: 'Fries',
      description: 'Crispy salted fries.',
      sizes: [{ label: 'Regular', price: 2.99 }, { label: 'Large', price: 3.99 }] },

    { id: 'loaded-fries', category: 'sides', section: 'Fries & snacks', name: 'Loaded Fries', featured: true,
      description: 'Fries topped with chicken, cheese sauce and spring onion.',
      sizes: [{ label: 'Regular', price: 5.99 }, { label: 'Large', price: 7.99 }] },

    { id: 'cheese-sticks', category: 'sides', section: 'Fries & snacks', name: 'Cheese Sticks', price: 4.99,
      description: 'Six golden mozzarella sticks with dip.' },

    { id: 'creamy-pasta', category: 'sides', section: 'Pasta', name: 'Creamy Chicken Pasta',
      description: 'Penne in a creamy chicken and mushroom sauce.',
      sizes: [{ label: 'Regular', price: 7.99 }, { label: 'Large', price: 10.99 }] },

    { id: 'wings', category: 'sides', section: 'Chicken', name: 'Chicken Wings', featured: true,
      description: 'Crispy chicken wings with your choice of dip.',
      sizes: [{ label: '6 pieces', price: 5.99 }, { label: '12 pieces', price: 10.99 }] },

    { id: 'nuggets', category: 'sides', section: 'Chicken', name: 'Chicken Nuggets', price: 4.99,
      description: 'Eight crispy chicken nuggets.' },

    // ---- Wraps ----
    { id: 'chicken-wrap', category: 'wraps', name: 'Chicken Wrap', price: 6.49,
      description: 'Grilled chicken, salad and garlic sauce in a warm tortilla.' },

    { id: 'falafel-wrap', category: 'wraps', name: 'Falafel Wrap', price: 5.99,
      description: 'Crispy falafel, salad and tahini.' },

    { id: 'spicy-chicken-wrap', category: 'wraps', name: 'Spicy Chicken Wrap', price: 6.99,
      description: 'Spicy chicken, jalapeños and chipotle mayo.' },

    // ---- Drinks ----
    { id: 'soft-drink', category: 'drinks', name: 'Soft Drink',
      description: 'Chilled soft drink.',
      sizes: [{ label: 'Can', price: 1.49 }, { label: '500 ml', price: 1.99 }, { label: '1.5 liter', price: 3.49 }] },

    { id: 'water', category: 'drinks', name: 'Bottled Water', price: 0.99,
      description: 'Still water, 500 ml.' },

    { id: 'lemonade', category: 'drinks', name: 'Fresh Lemonade', price: 2.49,
      description: 'Freshly squeezed lemonade.' }
  ],

  deals: [
    { id: 'solo-combo', group: 'Combos', name: 'Solo Combo', price: 9.99,
      items: ['1 Small Margherita Pizza', '1 Regular Fries', '1 Soft Drink Can'] },

    { id: 'burger-combo', group: 'Combos', name: 'Burger Combo', price: 10.99, featured: true,
      items: ['1 Classic Burger', '1 Regular Fries', '1 Soft Drink Can'] },

    { id: 'wrap-and-go', group: 'Combos', name: 'Wrap and Go', price: 8.49,
      items: ['1 Chicken Wrap', '1 Regular Fries', '1 Soft Drink Can'] },

    { id: 'burger-pair', group: 'Combos', name: 'Burger Pair', price: 14.99,
      items: ['2 Cheese Burger', '1 Regular Loaded Fries', '2 Soft Drink Can'] },

    { id: 'pizza-for-two', group: 'Family deals', name: 'Pizza for Two', price: 19.99, featured: true, banner: true,
      items: ['1 Medium Pepperoni Pizza', '6 Chicken Wings', '2 Soft Drink Can'] },

    { id: 'family-feast', group: 'Family deals', name: 'Family Feast', price: 34.99, featured: true, banner: true,
      items: ['1 Large BBQ Chicken Pizza', '1 Large Margherita Pizza', '1 Large Fries', '1 Soft Drink 1.5 liter'] },

    { id: 'party-box', group: 'Family deals', name: 'Party Box', price: 49.99, banner: true,
      description: 'Three large pizzas, wings and drinks for a group.',
      items: ['1 Large Pepperoni Pizza', '1 Large Veggie Garden Pizza', '1 Large Four Cheese Pizza', '12 Chicken Wings', '2 Soft Drink 1.5 liter'] }
  ],

  discounts: [
    { code: 'WELCOME10', name: 'Welcome offer', type: 'percent', value: 10, minOrder: 20 },
    { code: 'SAVE5', name: 'Big order discount', type: 'fixed', value: 5, minOrder: 40 }
  ]
};
