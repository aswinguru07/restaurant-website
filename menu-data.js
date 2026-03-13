/**
 * ============================================================
 *  GURU RESTAURANT MENU DATA — Easy to Edit!
 * ============================================================
 *  HOW TO UPDATE YOUR MENU:
 *  1. Find the category you want to edit (starters, mains, drinks, desserts)
 *  2. Change the name, price, description, or image path
 *  3. To ADD a new item, copy one item block and paste it below, then change the details
 *  4. To REMOVE an item, delete the entire { } block for that item
 *  5. Save the file — changes appear instantly on your website!
 * ============================================================
 */

const RESTAURANT_INFO = {
  name: "Guru",
  tagline: "Taste the Difference",
  description: "A warm and welcoming Indian restaurant crafted with love, serving authentic desi flavors made from the freshest locally sourced spices and ingredients. Every plate tells a story.",
  phone: "+91 98765 43210",
  whatsapp: "919876543210",   // ← Phone number WITHOUT + for WhatsApp link (include country code)
  address: "Shop No. 12, MG Road, Bengaluru, Karnataka – 560001",
  hours: {
    weekdays: "Mon – Fri: 11:00 AM – 10:30 PM",
    weekend:  "Sat – Sun: 9:00 AM – 11:00 PM"
  },
  // Google Maps embed URL — replace with your actual restaurant location embed URL
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.9846386677506!2d77.5945627!3d12.9715987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1622196896848!5m2!1sen!2sin"
};

const MENU = {
  starters: {
    label: "Starters",
    icon: "🥗",
    items: [
      {
        name: "Paneer Tikka",
        price: "₹249",
        description: "Tender cottage cheese cubes marinated in spiced yogurt and grilled to perfection. Served with mint chutney.",
        image: "menu_starters.png"
      },
      {
        name: "Veg Samosa (4 pcs)",
        price: "₹99",
        description: "Crispy golden pastry filled with spiced potatoes and peas. A timeless Indian street snack.",
        image: "menu_starters.png"
      },
      {
        name: "Hara Bhara Kabab",
        price: "₹179",
        description: "Soft spinach and potato patties spiced with green chillies and garam masala. Shallow-fried and served with coriander chutney.",
        image: "menu_starters.png"
      },
      {
        name: "Dahi Puri",
        price: "₹129",
        description: "Crispy puris filled with spiced chickpeas, tangy tamarind chutney, and cool creamy yogurt. A burst of flavors in every bite.",
        image: "gallery_food1.png"
      }
    ]
  },
  mains: {
    label: "Main Course",
    icon: "🍽️",
    items: [
      {
        name: "Butter Chicken",
        price: "₹349",
        description: "Succulent chicken cooked in a rich, creamy tomato-butter gravy with aromatic spices. Goes best with naans.",
        image: "menu_burger.png"
      },
      {
        name: "Dal Makhani",
        price: "₹249",
        description: "Slow-cooked black lentils simmered overnight in butter and cream with mild spices. A North Indian classic.",
        image: "menu_pasta.png"
      },
      {
        name: "Paneer Butter Masala",
        price: "₹299",
        description: "Soft cottage cheese cubes in a velvety, mildly spiced tomato and cashew gravy. Best paired with butter naan.",
        image: "gallery_food1.png"
      },
      {
        name: "Chicken Biryani",
        price: "₹379",
        description: "Fragrant basmati rice layered with tender marinated chicken, saffron, and caramelised onions. Served with raita.",
        image: "menu_pasta.png"
      }
    ]
  },
  drinks: {
    label: "Drinks",
    icon: "☕",
    items: [
      {
        name: "Mango Lassi",
        price: "₹99",
        description: "Chilled blended yogurt drink with sweet Alphonso mango pulp and a hint of cardamom. Refreshing and creamy.",
        image: "menu_drinks.png"
      },
      {
        name: "Masala Chai",
        price: "₹49",
        description: "Authentic Indian spiced tea brewed with ginger, cardamom, cinnamon, and cloves. The perfect comfort drink.",
        image: "menu_drinks.png"
      },
      {
        name: "Fresh Lime Soda",
        price: "₹69",
        description: "Chilled sparkling water with freshly squeezed lime, black salt, and a touch of sugar. Sweet or salted, your choice!",
        image: "menu_drinks.png"
      },
      {
        name: "Rose Sharbat",
        price: "₹79",
        description: "Chilled rose syrup blended with cold milk, basil seeds (sabja), and a hint of cardamom. Sweet, floral, and refreshing.",
        image: "menu_drinks.png"
      }
    ]
  },
  desserts: {
    label: "Desserts",
    icon: "🍮",
    items: [
      {
        name: "Gulab Jamun",
        price: "₹99",
        description: "Soft milk-solid dumplings soaked in rose-flavoured sugar syrup. Served warm with a scoop of vanilla ice cream.",
        image: "menu_dessert.png"
      },
      {
        name: "Ras Malai",
        price: "₹119",
        description: "Spongy cottage cheese patties soaked in chilled saffron milk, garnished with pistachios and rose petals.",
        image: "menu_dessert.png"
      },
      {
        name: "Gajar Ka Halwa",
        price: "₹109",
        description: "Classic Indian carrot pudding slow-cooked in pure ghee, milk, and sugar, garnished with cashews and raisins.",
        image: "menu_dessert.png"
      },
      {
        name: "Kulfi",
        price: "₹89",
        description: "Traditional Indian frozen dessert made with reduced milk and saffron. Served on a stick with rose syrup.",
        image: "menu_dessert.png"
      }
    ]
  }
};
