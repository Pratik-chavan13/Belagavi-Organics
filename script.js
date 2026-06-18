// ------------------------
// Belagavi Organics - Master JS
// ------------------------

// HIGH-QUALITY IMAGE MAPPING FOR COMMON PRODUCTS
const PRODUCT_IMAGES = {
    // Rice
    "basmati": "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=800",
    "rice": "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=800",
    "sona masuri": "https://images.unsplash.com/photo-1536304993881-ff6e9ec6c412?auto=format&fit=crop&q=80&w=800",
    
    // Sweeteners
    "jaggery": "https://images.unsplash.com/photo-1610450503525-452f416ba84e?auto=format&fit=crop&q=80&w=800",
    "sugar": "https://images.unsplash.com/photo-1581441363689-1f3c3c414635?auto=format&fit=crop&q=80&w=800",
    
    // Spices
    "turmeric": "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=800",
    "chilly": "https://images.unsplash.com/photo-1588252303782-cb80119abd6d?auto=format&fit=crop&q=80&w=800",
    "pepper": "https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&q=80&w=800",
    "spice": "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=800",
    
    // Oils
    "oil": "https://images.unsplash.com/photo-1474979266404-7eaacbadcbaf?auto=format&fit=crop&q=80&w=800",
    "coconut": "https://images.unsplash.com/photo-1616434455845-a134f59049a4?auto=format&fit=crop&q=80&w=800",
    
    // Others
    "dal": "https://images.unsplash.com/photo-1515942400420-2b98fed1f515?auto=format&fit=crop&q=80&w=800",
    "pulse": "https://images.unsplash.com/photo-1515942400420-2b98fed1f515?auto=format&fit=crop&q=80&w=800",
    "nut": "https://images.unsplash.com/photo-1596591606975-97ee5cef3a1e?auto=format&fit=crop&q=80&w=800",
    "cashew": "https://images.unsplash.com/photo-1596591606975-97ee5cef3a1e?auto=format&fit=crop&q=80&w=800",
    "millet": "https://images.unsplash.com/photo-1599819177626-b50f9dd21c9b?auto=format&fit=crop&q=80&w=800",
    "pickle": "https://images.unsplash.com/photo-1589135325905-3e9ae8c14e6a?auto=format&fit=crop&q=80&w=800"
};

// CATEGORY FALLBACK IMAGES
const CATEGORY_FALLBACKS = {
    "sweeteners": PRODUCT_IMAGES.jaggery,
    "rice": PRODUCT_IMAGES.rice,
    "oils": PRODUCT_IMAGES.oil,
    "spices": PRODUCT_IMAGES.spice,
    "dry nuts": PRODUCT_IMAGES.nut,
    "pulses and dal": PRODUCT_IMAGES.dal,
    "millets": PRODUCT_IMAGES.millet,
    "pickels": PRODUCT_IMAGES.pickle,
    "pickles": PRODUCT_IMAGES.pickle
};

// 4. MULTI-LANGUAGE TRANSLATION DATA
const I18N_DATA = {
  en: {
    nav_home: "Home",
    nav_mission: "Our Mission",
    nav_range: "Organic Range",
    nav_network: "Farmers Network",
    nav_contact: "Contact",
    btn_shop: "Shop Now",
    hero_badge: "100% Certified Organic",
    hero_title: "Eat clean, green and healthy. Feel healthy.",
    hero_desc: "If you ate today, thank a farmer. We directly source our organic millets, pulses, and oils from over 2500 small and marginal farmers in the Belagavi District.",
    hero_btn_explore: "Explore Products",
    hero_btn_story: "Our Story",
    section_range_title: "Farm Fresh Organic Range",
    section_range_desc: "Purely organic, hygienically cleaned, and direct from our farmers' fields.",
    section_community_title: "Rooted in Community",
    section_community_desc: "Connecting conscious consumers with dedicated organic farmers.",
    bento_mission_title: "Our Mission",
    bento_mission_desc: "Creating social and economic sustainability for farmers while delivering pure, chemical-free food to your table. Every grain is hygienically cleaned and ethically sourced.",
    stat_farmers: "Farmers Network",
    bento_sourcing_title: "Directly Sourced From Farmers",
    bento_sourcing_desc: "By cutting out the middlemen, we ensure that the purest organic products reach you while the entire proceeds of the sale go directly to supporting the farmers.",
    bento_sourcing_btn: "Why Choose Belagavi Organics?",
    footer_desc: "Nurturing earth, empowering farmers, and bringing the purest organic bounty to your table.",
    btn_back_home: "Back to Home",
    category_subtitle: "Pure Goodness from Nature's Heart",
    loading: "Loading...",
    btn_buy_now: "Buy Now",
    loading_empty: "No products found.",
    category_sweeteners: "Sweeteners",
    category_rice: "Premium Rice",
    category_dry_nuts: "Dry Nuts",
    category_pulses_dal: "Pulses & Dal",
    category_oils: "Cold Pressed Oils",
    category_spices: "Spices & Masala",
    category_millets: "Organic Millets",
    category_pickles: "Traditional Pickles"
  },
  hi: {
    nav_home: "à¤¹à¥‹à¤®",
    nav_mission: "à¤¹à¤®à¤¾à¤°à¤¾ à¤²à¤•à¥�à¤·à¥�à¤¯",
    nav_range: "à¤‘à¤°à¥�à¤—à¥‡à¤¨à¤¿à¤• à¤°à¥‡à¤‚à¤œ",
    nav_network: "à¤•à¤¿à¤¸à¤¾à¤¨ à¤¨à¥‡à¤Ÿà¤µà¤°à¥�à¤•",
    nav_contact: "à¤¸à¤‚à¤ªà¤°à¥�à¤•",
    btn_shop: "à¤…à¤­à¥€ à¤–à¤°à¥€à¤¦à¥‡à¤‚",
    hero_badge: "100% à¤ªà¥�à¤°à¤®à¤¾à¤£à¤¿à¤¤ à¤‘à¤°à¥�à¤—à¥‡à¤¨à¤¿à¤•",
    hero_title: "à¤¶à¥�à¤¦à¥�à¤§ à¤–à¤¾à¤�à¤‚, à¤¸à¥�à¤µà¤¸à¥�à¤¥ à¤°à¤¹à¥‡à¤‚à¥¤ à¤¤à¤‚à¤¦à¥�à¤°à¥�à¤¸à¥�à¤¤à¥€ à¤®à¤¹à¤¸à¥‚à¤¸ à¤•à¤°à¥‡à¤‚à¥¤",
    hero_desc: "à¤¯à¤¦à¤¿ à¤†à¤ªà¤¨à¥‡ à¤†à¤œ à¤­à¥‹à¤œà¤¨ à¤•à¤¿à¤¯à¤¾ à¤¹à¥ˆ, à¤¤à¥‹ à¤�à¤• à¤•à¤¿à¤¸à¤¾à¤¨ à¤•à¥‹ à¤§à¤¨à¥�à¤¯à¤µà¤¾à¤¦ à¤¦à¥‡à¤‚à¥¤ à¤¹à¤® à¤¸à¥€à¤§à¥‡ à¤¬à¥‡à¤²à¤—à¤¾à¤µà¥€ à¤œà¤¿à¤²à¥‡ à¤•à¥‡ 2500 à¤¸à¥‡ à¤…à¤§à¤¿à¤• à¤›à¥‹à¤Ÿà¥‡ à¤”à¤° à¤¸à¥€à¤®à¤¾à¤‚à¤¤ à¤•à¤¿à¤¸à¤¾à¤¨à¥‹à¤‚ à¤¸à¥‡ à¤…à¤ªà¤¨à¥‡ à¤œà¥ˆà¤µà¤¿à¤• à¤¬à¤¾à¤œà¤°à¤¾, à¤¦à¤¾à¤²à¥‡à¤‚ à¤”à¤° à¤¤à¥‡à¤² à¤®à¤‚à¤—à¤µà¤¾à¤¤à¥‡ à¤¹à¥ˆà¤‚à¥¤",
    hero_btn_explore: "à¤‰à¤¤à¥�à¤ªà¤¾à¤¦ à¤¦à¥‡à¤–à¥‡à¤‚",
    hero_btn_story: "à¤¹à¤®à¤¾à¤°à¥€ à¤•à¤¹à¤¾à¤¨à¥€",
    section_range_title: "à¤–à¥‡à¤¤ à¤¸à¥‡ à¤¤à¤¾à¤œà¤¼à¤¾ à¤‘à¤°à¥�à¤—à¥‡à¤¨à¤¿à¤• à¤‰à¤¤à¥�à¤ªà¤¾à¤¦",
    section_range_desc: "à¤¶à¥�à¤¦à¥�à¤§ à¤°à¥‚à¤ª à¤¸à¥‡ à¤œà¥ˆà¤µà¤¿à¤•, à¤¸à¥�à¤µà¤šà¥�à¤›à¤¤à¤¾ à¤¸à¥‡ à¤¸à¤¾à¤«, à¤”à¤° à¤¸à¥€à¤§à¥‡ à¤¹à¤®à¤¾à¤°à¥‡ à¤•à¤¿à¤¸à¤¾à¤¨à¥‹à¤‚ à¤•à¥‡ à¤–à¥‡à¤¤à¥‹à¤‚ à¤¸à¥‡à¥¤",
    section_community_title: "à¤¸à¤®à¥�à¤¦à¤¾à¤¯ à¤¸à¥‡ à¤œà¥�à¤¡à¤¼à¤¾ à¤¹à¥�à¤†",
    section_community_desc: "à¤œà¤¾à¤—à¤°à¥‚à¤• à¤‰à¤ªà¤­à¥‹à¤•à¥�à¤¤à¤¾à¤“à¤‚ à¤•à¥‹ à¤¸à¤®à¤°à¥�à¤ªà¤¿à¤¤ à¤œà¥ˆà¤µà¤¿à¤• à¤•à¤¿à¤¸à¤¾à¤¨à¥‹à¤‚ à¤•à¥‡ à¤¸à¤¾à¤¥ à¤œà¥‹à¤¡à¤¼à¤¨à¤¾à¥¤",
    bento_mission_title: "à¤¹à¤®à¤¾à¤°à¤¾ à¤²à¤•à¥�à¤·à¥�à¤¯",
    bento_mission_desc: "à¤•à¤¿à¤¸à¤¾à¤¨à¥‹à¤‚ à¤•à¥‡ à¤²à¤¿à¤� à¤¸à¤¾à¤®à¤¾à¤œà¤¿à¤• à¤”à¤° à¤†à¤°à¥�à¤¥à¤¿à¤• à¤¸à¥�à¤¥à¤¿à¤°à¤¤à¤¾ à¤ªà¥ˆà¤¦à¤¾ à¤•à¤°à¤¨à¤¾ à¤”à¤° à¤†à¤ªà¤•à¥€ à¤®à¥‡à¤œ à¤ªà¤° à¤¶à¥�à¤¦à¥�à¤§, à¤°à¤¸à¤¾à¤¯à¤¨ à¤®à¥�à¤•à¥�à¤¤ à¤­à¥‹à¤œà¤¨ à¤ªà¤¹à¥�à¤‚à¤šà¤¾à¤¨à¤¾à¥¤ à¤¹à¤° à¤¦à¤¾à¤¨à¥‡ à¤•à¥‹ à¤¸à¥�à¤µà¤šà¥�à¤›à¤¤à¤¾ à¤¸à¥‡ à¤¸à¤¾à¤« à¤•à¤¿à¤¯à¤¾ à¤œà¤¾à¤¤à¤¾ à¤¹à¥ˆ à¤”à¤° à¤¨à¥ˆà¤¤à¤¿à¤• à¤°à¥‚à¤ª à¤¸à¥‡ à¤ªà¥�à¤°à¤¾à¤ªà¥�à¤¤ à¤•à¤¿à¤¯à¤¾ à¤œà¤¾à¤¤à¤¾ à¤¹à¥ˆà¥¤",
    stat_farmers: "à¤•à¤¿à¤¸à¤¾à¤¨ à¤¨à¥‡à¤Ÿà¤µà¤°à¥�à¤•",
    bento_sourcing_title: "à¤•à¤¿à¤¸à¤¾à¤¨à¥‹à¤‚ à¤¸à¥‡ à¤¸à¥€à¤§à¥‡ à¤ªà¥�à¤°à¤¾à¤ªà¥�à¤¤",
    bento_sourcing_desc: "à¤¬à¤¿à¤šà¥Œà¤²à¤¿à¤¯à¥‹à¤‚ à¤•à¥‹ à¤¹à¤Ÿà¤¾à¤•à¤°, à¤¹à¤® à¤¯à¤¹ à¤¸à¥�à¤¨à¤¿à¤¶à¥�à¤šà¤¿à¤¤ à¤•à¤°à¤¤à¥‡ à¤¹à¥ˆà¤‚ à¤•à¤¿ à¤¸à¤¬à¤¸à¥‡ à¤¶à¥�à¤¦à¥�à¤§ à¤œà¥ˆà¤µà¤¿à¤• à¤‰à¤¤à¥�à¤ªà¤¾à¤¦ à¤†à¤ª à¤¤à¤• à¤ªà¤¹à¥�à¤�à¤šà¥‡à¤‚, à¤œà¤¬à¤•à¤¿ à¤¬à¤¿à¤•à¥�à¤°à¥€ à¤•à¥€ à¤ªà¥‚à¤°à¥€ à¤°à¤¾à¤¶à¤¿ à¤¸à¥€à¤§à¥‡ à¤•à¤¿à¤¸à¤¾à¤¨à¥‹à¤‚ à¤•à¥€ à¤®à¤¦à¤¦ à¤•à¥‡ à¤²à¤¿à¤� à¤œà¤¾à¤¤à¥€ à¤¹à¥ˆà¥¤",
    bento_sourcing_btn: "à¤¬à¥‡à¤²à¤—à¤¾à¤µà¥€ à¤‘à¤°à¥�à¤—à¥‡à¤¨à¤¿à¤•à¥�à¤¸ à¤•à¥�à¤¯à¥‹à¤‚ à¤šà¥�à¤¨à¥‡à¤‚?",
    footer_desc: "à¤§à¤°à¤¤à¥€ à¤•à¤¾ à¤ªà¥‹à¤·à¤£ à¤•à¤°à¤¨à¤¾, à¤•à¤¿à¤¸à¤¾à¤¨à¥‹à¤‚ à¤•à¥‹ à¤¸à¤¶à¤•à¥�à¤¤ à¤¬à¤¨à¤¾à¤¨à¤¾ à¤”à¤° à¤†à¤ªà¤•à¥€ à¤®à¥‡à¤œ à¤¤à¤• à¤¶à¥�à¤¦à¥�à¤§à¤¤à¤® à¤œà¥ˆà¤µà¤¿à¤• à¤‰à¤ªà¤¹à¤¾à¤° à¤ªà¤¹à¥�à¤�à¤šà¤¾à¤¨à¤¾à¥¤",
    btn_back_home: "à¤®à¥�à¤–à¥�à¤¯ à¤ªà¥ƒà¤·à¥�à¤ ",
    category_subtitle: "à¤ªà¥�à¤°à¤•à¥ƒà¤¤à¤¿ à¤•à¥‡ à¤¹à¥ƒà¤¦à¤¯ à¤¸à¥‡ à¤¶à¥�à¤¦à¥�à¤§ à¤…à¤šà¥�à¤›à¤¾à¤ˆ",
    loading: "à¤²à¥‹à¤¡ à¤¹à¥‹ à¤°à¤¹à¤¾ à¤¹à¥ˆ...",
    btn_buy_now: "à¤…à¤­à¥€ à¤–à¤°à¥€à¤¦à¥‡à¤‚",
    loading_empty: "à¤•à¥‹à¤ˆ à¤‰à¤¤à¥�à¤ªà¤¾à¤¦ à¤¨à¤¹à¥€à¤‚ à¤®à¤¿à¤²à¤¾à¥¤",
    category_sweeteners: "à¤®à¤¿à¤ à¤¾à¤¸ (à¤—à¥�à¤¡à¤¼)",
    category_rice: "à¤ªà¥�à¤°à¥€à¤®à¤¿à¤¯à¤® à¤šà¤¾à¤µà¤²",
    category_dry_nuts: "à¤®à¥‡à¤µà¥‡ (Dry Nuts)",
    category_pulses_dal: "à¤¦à¤¾à¤²à¥‡à¤‚ à¤”à¤° à¤¦à¤²à¤¹à¤¨",
    category_oils: "à¤•à¥‹à¤²à¥�à¤¡ à¤ªà¥�à¤°à¥‡à¤¸à¥�à¤¡ à¤¤à¥‡à¤²",
    category_spices: "à¤®à¤¸à¤¾à¤²à¥‡",
    category_millets: "à¤œà¥ˆà¤µà¤¿à¤• à¤¬à¤¾à¤œà¤°à¤¾ (Millets)",
    category_pickles: "à¤ªà¤¾à¤°à¤‚à¤ªà¤°à¤¿à¤• à¤…à¤šà¤¾à¤°"
  },
  kn: {
    nav_home: "à²®à³�à²–à²ªà³�à²Ÿ",
    nav_mission: "à²¨à²®à³�à²® à²—à³�à²°à²¿",
    nav_range: "à²¸à²¾à²µà²¯à²µ à²¶à³�à²°à³‡à²£à²¿",
    nav_network: "à²°à³ˆà²¤ à²œà²¾à²²",
    nav_contact: "à²¸à²‚à²ªà²°à³�à²•à²¿à²¸à²¿",
    btn_shop: "à²ˆà²— à²–à²°à³€à²¦à²¿à²¸à²¿",
    hero_badge: "100% à²ªà³�à²°à²®à²¾à²£à³€à²•à³ƒà²¤ à²¸à²¾à²µà²¯à²µ",
    hero_title: "à²¶à³�à²¦à³�à²§à²µà²¾à²—à²¿ à²¤à²¿à²¨à³�à²¨à²¿à²°à²¿, à²†à²°à³‹à²—à³�à²¯à²µà²¾à²—à²¿à²°à²¿. à²šà³ˆà²¤à²¨à³�à²¯ à²…à²¨à³�à²­à²µà²¿à²¸à²¿.",
    hero_desc: "à²¨à³€à²µà³� à²‡à²‚à²¦à³� à²†à²¹à²¾à²° à²¸à³‡à²µà²¿à²¸à²¿à²¦à³�à²¦à²°à³†, à²’à²¬à³�à²¬ à²°à³ˆà²¤à²¨à²¿à²—à³‚ à²µà²‚à²¦à²¿à²¸à²¿. à²¨à²¾à²µà³� à²¬à³†à²³à²—à²¾à²µà²¿ à²œà²¿à²²à³�à²²à³†à²¯ 2500à²•à³�à²•à³‚ à²¹à³†à²šà³�à²šà³� à²¸à²£à³�à²£ à²°à³ˆà²¤à²°à²¿à²‚à²¦ à²¨à³‡à²°à²µà²¾à²—à²¿ à²¸à²¾à²µà²¯à²µ à²¸à²¿à²°à²¿à²§à²¾à²¨à³�à²¯à²—à²³à³�, à²¬à³‡à²³à³†à²•à²¾à²³à³�à²—à²³à³� à²®à²¤à³�à²¤à³� à²Žà²£à³�à²£à³†à²—à²³à²¨à³�à²¨à³� à²¸à²‚à²—à³�à²°à²¹à²¿à²¸à³�à²¤à³�à²¤à³‡à²µà³†.",
    hero_btn_explore: "à²‰à²¤à³�à²ªà²¨à³�à²¨à²—à²³à²¨à³�à²¨à³� à²¨à³‹à²¡à²¿",
    hero_btn_story: "à²¨à²®à³�à²® à²•à²¥à³†",
    section_range_title: "à²¹à³Šà²²à²¦à²¿à²‚à²¦ à²¤à²¾à²œà²¾ à²¸à²¾à²µà²¯à²µ à²‰à²¤à³�à²ªà²¨à³�à²¨à²—à²³à³�",
    section_range_desc: "à²¶à³�à²¦à³�à²§ à²¸à²¾à²µà²¯à²µ, à²¨à³ˆà²°à³�à²®à²²à³�à²¯à²¯à³�à²¤ à²¸à³�à²µà²šà³�à²›à²¤à³†, à²®à²¤à³�à²¤à³� à²¨à³‡à²°à²µà²¾à²—à²¿ à²¨à²®à³�à²® à²°à³ˆà²¤à²° à²¹à³Šà²²à²—à²³à²¿à²‚à²¦.",
    section_community_title: "à²¸à²®à³�à²¦à²¾à²¯à²¦à³Šà²‚à²¦à²¿à²—à³† à²¬à²¾à²‚à²§à²µà³�à²¯",
    section_community_desc: "à²¸à²¾à²µà²¯à²µ à²°à³ˆà²¤à²°à²¨à³�à²¨à³� à²¸à³ƒà²œà²¨à²¶à³€à²² à²—à³�à²°à²¾à²¹à²•à²°à³Šà²‚à²¦à²¿à²—à³† à²¸à²‚à²ªà²°à³�à²•à²¿à²¸à³�à²µà³�à²¦à³�.",
    bento_mission_title: "à²¨à²®à³�à²® à²—à³�à²°à²¿",
    bento_mission_desc: "à²°à³ˆà²¤à²°à²¿à²—à³† à²¸à²¾à²®à²¾à²œà²¿à²• à²®à²¤à³�à²¤à³� à²†à²°à³�à²¥à²¿à²• à²¸à³�à²¸à³�à²¥à²¿à²°à²¤à³†à²¯à²¨à³�à²¨à³� à²¨à²¿à²°à³�à²®à²¿à²¸à³�à²µà³�à²¦à³� à²®à²¤à³�à²¤à³� à²¨à²¿à²®à³�à²® à²®à²¨à³†à²—à³† à²µà²¿à²·à²°à²¹à²¿à²¤ à²µà²¿à²¶à³�à²¦à³�à²§ à²†à²¹à²¾à²°à²µà²¨à³�à²¨à³� à²¤à²²à³�à²ªà²¿à²¸à³�à²µà³�à²¦à³� à²¨à²®à³�à²® à²‰à²¦à³�à²¦à³‡à²¶.",
    stat_farmers: "à²°à³ˆà²¤à²° à²œà²¾à²²",
    bento_sourcing_title: "à²°à³ˆà²¤à²°à²¿à²‚à²¦ à²¨à³‡à²° à²¸à²‚à²—à³�à²°à²¹à²£à³†",
    bento_sourcing_desc: "à²¦à²²à³�à²²à²¾à²³à²¿à²—à²³à²¿à²²à³�à²²à²¦à³†, à²°à³ˆà²¤à²° à²¶à³�à²°à²®à²•à³�à²•à³† à²¤à²•à³�à²• à²¬à³†à²²à³† à²¸à²¿à²—à³�à²µà²‚à²¤à³† à²®à²¤à³�à²¤à³� à²—à³�à²°à²¾à²¹à²•à²°à²¿à²—à³† à²¶à³�à²¦à³�à²§ à²°à³ˆà²¤ à²‰à²¤à³�à²ªà²¨à³�à²¨à²—à²³à³� à²¤à²²à³�à²ªà³�à²µà²‚à²¤à³† à²¨à²¾à²µà³� à²•à²¾à²³à²œà²¿ à²µà²¹à²¿à²¸à³�à²¤à³�à²¤à³‡à²µà³†.",
    bento_sourcing_btn: "à²¬à³†à²³à²—à²¾à²µà²¿ à²†à²°à³�à²—à³�à²¯à²¾à²¨à²¿à²•à³�à²¸à³� à²�à²•à³‡?",
    footer_desc: "à²­à³‚à²®à²¿à²¯ à²ªà³‹à²·à²£à³†, à²°à³ˆà²¤à²° à²¸à²¬à²²à³€à²•à²°à²£ à²®à²¤à³�à²¤à³� à²¨à²¿à²®à³�à²® à²®à²¨à³†à²—à³† à²¶à³�à²¦à³�à²§ à²¸à²¾à²µà²¯à²µ à²†à²¹à²¾à²°à²µà²¨à³�à²¨à³� à²¤à²²à³�à²ªà²¿à²¸à³�à²µà³�à²¦à³� à²¨à²®à³�à²® à²•à²°à³�à²¤à²µà³�à²¯.",
    btn_back_home: "à²®à³�à²–à²ªà³�à²Ÿà²•à³�à²•à³†",
    category_subtitle: "à²¨à²¿à²¸à²°à³�à²—à²¦ à²®à²¡à²¿à²²à²¿à²¨à²¿à²‚à²¦ à²¶à³�à²¦à³�à²§ à²¸à²¾à²µà²¯à²µ",
    loading: "à²•à²¾à²¯à²²à²¾à²—à³�à²¤à³�à²¤à²¿à²¦à³†...",
    btn_buy_now: "à²ˆà²— à²–à²°à³€à²¦à²¿à²¸à²¿",
    loading_empty: "à²¯à²¾à²µà³�à²¦à³‡ à²‰à²¤à³�à²ªà²¨à³�à²¨à²—à²³à³� à²•à²‚à²¡à³�à²¬à²‚à²¦à²¿à²²à³�à²².",
    category_sweeteners: "à²¸à²¿à²¹à²¿ à²ªà²¦à²¾à²°à³�à²¥à²—à²³à³� (à²¬à³†à²²à³�à²²)",
    category_rice: "à²ªà³�à²°à³€à²®à²¿à²¯à²‚ à²…à²•à³�à²•à²¿",
    category_dry_nuts: "à²’à²£ à²¹à²£à³�à²£à³�à²—à²³à³�",
    category_pulses_dal: "à²¬à³‡à²³à³†à²•à²¾à²³à³�à²—à²³à³�",
    category_oils: "à²—à²¾à²£à²¦ à²Žà²£à³�à²£à³†à²—à²³à³�",
    category_spices: "à²®à²¸à²¾à²²à³† à²ªà²¦à²¾à²°à³�à²¥à²—à²³à³�",
    category_millets: "à²¸à²¾à²µà²¯à²µ à²¸à²¿à²°à²¿à²§à²¾à²¨à³�à²¯à²—à²³à³�",
    category_pickles: "à²¸à²¾à²‚à²ªà³�à²°à²¦à²¾à²¯à²¿à²• à²‰à²ªà³�à²ªà²¿à²¨à²•à²¾à²¯à²¿"
  },
  mr: {
    nav_mission: "à¤†à¤®à¤šà¥‡ à¤§à¥�à¤¯à¥‡à¤¯",
    nav_range: "à¤¸à¥‡à¤‚à¤¦à¥�à¤°à¤¿à¤¯ à¤¶à¥�à¤°à¥‡à¤£à¥€",
    nav_network: "à¤¶à¥‡à¤¤à¤•à¤°à¥€ à¤¨à¥‡à¤Ÿà¤µà¤°à¥�à¤•",
    nav_contact: "à¤¸à¤‚à¤ªà¤°à¥�à¤•",
    btn_shop: "à¤†à¤¤à¥�à¤¤à¤¾ à¤–à¤°à¥‡à¤¦à¥€ à¤•à¤°à¤¾",
    hero_badge: "100% à¤ªà¥�à¤°à¤®à¤¾à¤£à¤¿à¤¤ à¤¸à¥‡à¤‚à¤¦à¥�à¤°à¤¿à¤¯",
    hero_title: "à¤¶à¥�à¤¦à¥�à¤§ à¤–à¤¾, à¤¨à¤¿à¤°à¥‹à¤—à¥€ à¤°à¤¾à¤¹à¤¾. à¤†à¤°à¥‹à¤—à¥�à¤¯ à¤…à¤¨à¥�à¤­à¤µà¤¾.",
    hero_desc: "à¤œà¤° à¤¤à¥�à¤®à¥�à¤¹à¥€ à¤†à¤œ à¤œà¥‡à¤µà¤²à¤¾à¤¤, à¤¤à¤° à¤�à¤•à¤¾ à¤¶à¥‡à¤¤à¤•à¤±à¥�à¤¯à¤¾à¤šà¥‡ à¤†à¤­à¤¾à¤° à¤®à¤¾à¤¨à¤¾. à¤†à¤®à¥�à¤¹à¥€ à¤¬à¥‡à¤³à¤—à¤¾à¤µ à¤œà¤¿à¤²à¥�à¤¹à¥�à¤¯à¤¾à¤¤à¥€à¤² 2500 à¤ªà¥‡à¤•à¥�à¤·à¤¾ à¤…à¤§à¤¿à¤• à¤²à¤¹à¤¾à¤¨ à¤¶à¥‡à¤¤à¤•à¤±à¥�à¤¯à¤¾à¤‚à¤•à¤¡à¥‚à¤¨ à¤¥à¥‡à¤Ÿ à¤¸à¥‡à¤‚à¤¦à¥�à¤°à¤¿à¤¯ à¤¤à¥ƒà¤£à¤§à¤¾à¤¨à¥�à¤¯à¥‡, à¤•à¤¡à¤§à¤¾à¤¨à¥�à¤¯à¥‡ à¤†à¤£à¤¿ à¤¤à¥‡à¤²à¥‡ à¤®à¤¾à¤—à¤µà¤¤à¥‹.",
    hero_btn_explore: "à¤‰à¤¤à¥�à¤ªà¤¾à¤¦à¤¨à¥‡ à¤ªà¤¹à¤¾",
    hero_btn_story: "à¤†à¤®à¤šà¥€ à¤•à¤¹à¤¾à¤£à¥€",
    section_range_title: "à¤¶à¥‡à¤¤à¤¾à¤¤à¥‚à¤¨ à¤¤à¤¾à¤œà¥‡ à¤¸à¥‡à¤‚à¤¦à¥�à¤°à¤¿à¤¯ à¤‰à¤¤à¥�à¤ªà¤¾à¤¦",
    section_range_desc: "à¤ªà¥‚à¤°à¥�à¤£à¤ªà¤£à¥‡ à¤¸à¥‡à¤‚à¤¦à¥�à¤°à¤¿à¤¯, à¤¸à¥�à¤µà¤šà¥�à¤›à¤¤à¥‡à¤¨à¥‡ à¤§à¥�à¤¤à¤²à¥‡à¤²à¥‡ à¤†à¤£à¤¿ à¤¥à¥‡à¤Ÿ à¤†à¤®à¤šà¥�à¤¯à¤¾ à¤¶à¥‡à¤¤à¤•à¤±à¥�à¤¯à¤¾à¤‚à¤šà¥�à¤¯à¤¾ à¤¶à¥‡à¤¤à¤¾à¤¤à¥‚à¤¨.",
    section_community_title: "à¤¸à¤®à¤¾à¤œà¤¾à¤¶à¥€ à¤œà¥‹à¤¡à¤²à¥‡à¤²à¥‡",
    section_community_desc: "à¤œà¤¾à¤—à¤°à¥‚à¤• à¤—à¥�à¤°à¤¾à¤¹à¤•à¤¾à¤‚à¤¨à¤¾ à¤¸à¤®à¤°à¥�à¤ªà¤¿à¤¤ à¤¸à¥‡à¤‚à¤¦à¥�à¤°à¤¿à¤¯ à¤¶à¥‡à¤¤à¤•à¤±à¥�à¤¯à¤¾à¤‚à¤¶à¥€ à¤œà¥‹à¤¡à¤£à¥‡.",
    bento_mission_title: "à¤†à¤®à¤šà¥‡ à¤§à¥�à¤¯à¥‡à¤¯",
    bento_mission_desc: "à¤¶à¥‡à¤¤à¤•à¤±à¥�à¤¯à¤¾à¤‚à¤¸à¤¾à¤ à¥€ à¤¸à¤¾à¤®à¤¾à¤œà¤¿à¤• à¤µ à¤†à¤°à¥�à¤¥à¤¿à¤• à¤¸à¥�à¤¥à¤¿à¤°à¤¤à¤¾ à¤¨à¤¿à¤°à¥�à¤®à¤¾à¤£ à¤•à¤°à¤£à¥‡ à¤†à¤£à¤¿ à¤¤à¥�à¤®à¤šà¥�à¤¯à¤¾ à¤¥à¤¾à¤³à¥€à¤¤ à¤¶à¥�à¤¦à¥�à¤§, à¤°à¤¸à¤¾à¤¯à¤¨à¤®à¥�à¤•à¥�à¤¤ à¤…à¤¨à¥�à¤¨ à¤ªà¥‹à¤¹à¥‹à¤šà¤µà¤£à¥‡. à¤ªà¥�à¤°à¤¤à¥�à¤¯à¥‡à¤• à¤§à¤¾à¤¨à¥�à¤¯ à¤¸à¥�à¤µà¤šà¥�à¤›à¤¤à¥‡à¤¨à¥‡ à¤ªà¥�à¤°à¤•à¥�à¤°à¤¿à¤¯à¤¾ à¤•à¥‡à¤²à¥‡à¤²à¥‡ à¤†à¤£à¤¿ à¤¨à¥ˆà¤¤à¤¿à¤•à¤°à¥€à¤¤à¥�à¤¯à¤¾ à¤ªà¥�à¤°à¤¾à¤ªà¥�à¤¤ à¤•à¥‡à¤²à¥‡à¤²à¥‡ à¤†à¤¹à¥‡.",
    stat_farmers: "à¤¶à¥‡à¤¤à¤•à¤°à¥€ à¤¨à¥‡à¤Ÿà¤µà¤°à¥�à¤•",
    bento_sourcing_title: "à¤¶à¥‡à¤¤à¤•à¤±à¥�à¤¯à¤¾à¤‚à¤•à¤¡à¥‚à¤¨ à¤¥à¥‡à¤Ÿ",
    bento_sourcing_desc: "à¤¦à¤²à¤¾à¤²à¤¾à¤‚à¤¨à¤¾ à¤µà¤—à¤³à¥‚à¤¨, à¤†à¤®à¥�à¤¹à¥€ à¤¹à¥‡ à¤¸à¥�à¤¨à¤¿à¤¶à¥�à¤šà¤¿à¤¤ à¤•à¤°à¤¤à¥‹ à¤•à¥€ à¤¸à¤—à¤³à¥�à¤¯à¤¾à¤¤ à¤¶à¥�à¤¦à¥�à¤§ à¤¸à¥‡à¤‚à¤¦à¥�à¤°à¤¿à¤¯ à¤‰à¤¤à¥�à¤ªà¤¾à¤¦à¤¨à¥‡ à¤¤à¥�à¤®à¤šà¥�à¤¯à¤¾à¤ªà¤°à¥�à¤¯à¤‚à¤¤ à¤ªà¥‹à¤¹à¥‹à¤šà¤¤à¤¾à¤¤ à¤†à¤£à¤¿ à¤µà¤¿à¤•à¥�à¤°à¥€à¤¤à¥€à¤² à¤¸à¤‚à¤ªà¥‚à¤°à¥�à¤£ à¤¨à¤«à¤¾ à¤¥à¥‡à¤Ÿ à¤¶à¥‡à¤¤à¤•à¤±à¥�à¤¯à¤¾à¤‚à¤¨à¤¾ à¤®à¤¿à¤³à¤¤à¥‹.",
    bento_sourcing_btn: "à¤¬à¥‡à¤³à¤—à¤¾à¤µ à¤‘à¤°à¥�à¤—à¥‡à¤¨à¤¿à¤•à¥�à¤¸ à¤•à¤¾ à¤¨à¤¿à¤µà¤¡à¤¾à¤µà¥‡?",
    footer_desc: "à¤ªà¥ƒà¤¥à¥�à¤µà¥€à¤šà¥‡ à¤ªà¥‹à¤·à¤£, à¤¶à¥‡à¤¤à¤•à¤±à¥�à¤¯à¤¾à¤‚à¤šà¥‡ à¤¸à¤•à¥�à¤·à¤®à¥€à¤•à¤°à¤£ à¤†à¤£à¤¿ à¤¤à¥�à¤®à¤šà¥�à¤¯à¤¾ à¤˜à¤°à¤¾à¤ªà¤°à¥�à¤¯à¤‚à¤¤ à¤¸à¤°à¥�à¤µà¤¾à¤¤ à¤¶à¥�à¤¦à¥�à¤§ à¤¸à¥‡à¤‚à¤¦à¥�à¤°à¤¿à¤¯ à¤­à¤°à¤ªà¥‚à¤° à¤ªà¥‹à¤¹à¥‹à¤šà¤µà¤£à¥‡.",
    btn_back_home: "à¤®à¥�à¤–à¥�à¤¯à¤ªà¥ƒà¤·à¥�à¤ ",
    category_subtitle: "à¤¨à¤¿à¤¸à¤°à¥�à¤—à¤¾à¤šà¥�à¤¯à¤¾ à¤¹à¥ƒà¤¦à¤¯à¤¾à¤¤à¥‚à¤¨ à¤¶à¥�à¤¦à¥�à¤§ à¤šà¤¾à¤‚à¤—à¥�à¤²à¤ªà¤£à¤¾",
    loading: "à¤²à¥‹à¤¡ à¤¹à¥‹à¤¤ à¤†à¤¹à¥‡...",
    btn_buy_now: "à¤†à¤¤à¥�à¤¤à¤¾ à¤–à¤°à¥‡à¤¦à¥€ à¤•à¤°à¤¾",
    loading_empty: "à¤•à¥‹à¤£à¤¤à¥‡à¤¹à¥€ à¤‰à¤¤à¥�à¤ªà¤¾à¤¦ à¤¸à¤¾à¤ªà¤¡à¤²à¥‡ à¤¨à¤¾à¤¹à¥€.",
    category_sweeteners: "à¤—à¥‹à¤¡à¤µà¤¾ (à¤—à¥‚à¤³)",
    category_rice: "à¤ªà¥�à¤°à¥€à¤®à¤¿à¤¯à¤® à¤¤à¤¾à¤‚à¤¦à¥‚à¤³",
    category_dry_nuts: "à¤¸à¥�à¤•à¤¾ à¤®à¥‡à¤µà¤¾",
    category_pulses_dal: "à¤¡à¤¾à¤³à¥€ à¤µ à¤•à¤¡à¤§à¤¾à¤¨à¥�à¤¯à¥‡",
    category_oils: "à¤¥à¤‚à¤¡ à¤¦à¤¾à¤¬ à¤¤à¥‡à¤²à¥‡",
    category_spices: "à¤®à¤¸à¤¾à¤²à¥‡",
    category_millets: "à¤¸à¥‡à¤‚à¤¦à¥�à¤°à¤¿à¤¯ à¤§à¤¾à¤¨à¥�à¤¯à¥‡",
    category_pickles: "à¤ªà¤¾à¤°à¤‚à¤ªà¤°à¤¿à¤• à¤²à¥‹à¤£à¤šà¥‡"
  }
};

function updateLanguage(lang) {
  const translations = I18N_DATA[lang];
  if (!translations) return;

  // Batch all DOM writes in one paint â€” prevents slow one-by-one text updates
  const body = document.body;
  body.style.visibility = 'hidden';

  // Use requestAnimationFrame to ensure the hide is painted BEFORE we start changing text
  requestAnimationFrame(() => {
    // 1. Apply all static translations at once
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (translations[key] !== undefined) {
        el.textContent = translations[key];
      }
    });

    // 2. Special handling for dynamic category page title
    const pageTitle = document.getElementById('page-title');
    if (pageTitle && pageTitle.dataset.category) {
      const catKey = `category_${pageTitle.dataset.category.replace(/ /g, '_')}`;
      if (translations[catKey]) {
        pageTitle.textContent = translations[catKey];
      }
    }

    // 3. Update dynamically generated product cards (no data-i18n â€” built via innerHTML)
    const organicMap = { en: "ORGANIC", hi: "à¤‘à¤°à¥�à¤—à¥‡à¤¨à¤¿à¤•", mr: "à¤¸à¥‡à¤‚à¤¦à¥�à¤°à¤¿à¤¯", kn: "à²¸à²¾à²µà²¯à²µ" };
    const organicText = organicMap[lang] || "ORGANIC";
    const buyNowText  = translations.btn_buy_now || "Buy Now";

    document.querySelectorAll('.product-tag').forEach(tag => {
      // Only update the "organic" tag, not "Out of Stock"
      const txt = tag.textContent.trim();
      const isOrganic = Object.values(organicMap).some(v => txt === v) || txt === "Organic";
      if (isOrganic) tag.textContent = organicText;
    });

    document.querySelectorAll('.btn-buy-now').forEach(btn => {
      // Find & replace the text node only â€” preserves the icon <span> inside
      btn.childNodes.forEach(node => {
        if (node.nodeType === Node.TEXT_NODE && node.textContent.trim().length > 0) {
          node.textContent = ` ${buyNowText}`;
        }
      });
    });

    // 4. Persist choice
    localStorage.setItem("preferred_lang", lang);

    // 5. Reveal instantly after all changes are done
    body.style.visibility = 'visible';
  });
}

function getProductImageUrl(name, category, customImg) {
    // 1. If a custom image exists in the sheet, try loading it first
    if (customImg) return `${REMOTE_IMAGE_BASE}${customImg}`;
    
    const lowerName = name.toLowerCase();
    const lowerCategory = category.toLowerCase();

    // 2. Try to match specific product keywords
    for (const key in PRODUCT_IMAGES) {
        if (lowerName.includes(key)) return PRODUCT_IMAGES[key];
    }
    
    // 3. Fallback to category base image
    return CATEGORY_FALLBACKS[lowerCategory] || "https://images.unsplash.com/photo-1610348725531-843dff563e2c?auto=format&fit=crop&q=80&w=800";
}

document.addEventListener("DOMContentLoaded", () => {
  const header = document.getElementById("site-header");
  const HEADER_HEIGHT = header ? header.offsetHeight : 80;

  // 1. MOBILE NAV LOGIC
  const mobileNav = document.getElementById('mobile-nav');
  const mobileOverlay = document.getElementById('mobile-overlay');
  const btnOpen = document.getElementById('btn-mobile-open');
  const btnClose = document.getElementById('btn-mobile-close');

  if (btnOpen && mobileNav && mobileOverlay) {
    const openMobileMenu = () => {
      mobileNav.classList.add('open');
      mobileOverlay.classList.add('open');
      document.body.style.overflow = 'hidden';
    };

    const closeMobileMenu = () => {
      mobileNav.classList.remove('open');
      mobileOverlay.classList.remove('open');
      document.body.style.overflow = '';
    };

    btnOpen.addEventListener('click', openMobileMenu);
    if (btnClose) btnClose.addEventListener('click', closeMobileMenu);
    mobileOverlay.addEventListener('click', closeMobileMenu);

    document.querySelectorAll('.mobile-link').forEach(link => {
      link.addEventListener('click', closeMobileMenu);
    });
  }

  // 2. HEADER SCROLL EFFECT
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  });

  // 3. LANGUAGE SELECTOR
  const btnLang = document.getElementById('btn-lang');
  const langMenu = document.getElementById('lang-menu');
  
  if (btnLang && langMenu) {
    btnLang.addEventListener('click', (e) => {
      e.stopPropagation();
      langMenu.classList.toggle('show');
    });
    
    document.addEventListener('click', () => {
      langMenu.classList.remove('show');
    });
    
    langMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const lang = this.dataset.lang;
        const langText = this.textContent;
        
        // Update button text
        const langTextSpan = btnLang.querySelector('span:not(.material-symbols-outlined)');
        if (langTextSpan) langTextSpan.textContent = langText;
        
        // Actually translate the page
        updateLanguage(lang);
        
        langMenu.classList.remove('show');
      });
    });

    // Initial Load - apply preferred language
    const savedLang = localStorage.getItem("preferred_lang") || "en";
    if (savedLang !== "en") {
      updateLanguage(savedLang);
      const initialLink = langMenu.querySelector(`a[data-lang="${savedLang}"]`);
      if (initialLink) {
        const langTextSpan = btnLang.querySelector('span:not(.material-symbols-outlined)');
        if (langTextSpan) langTextSpan.textContent = initialLink.textContent;
      }
    }
  }

  // 3. GLOBAL SMOOTH NAV SCROLLING
  document.querySelectorAll("a[href^='#']").forEach(link => {
    link.addEventListener("click", e => {
      const href = link.getAttribute("href") || "";
      if (!href.startsWith("#") || href === "#") return;
      
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const y = target.getBoundingClientRect().top + window.pageYOffset - HEADER_HEIGHT;
        window.scrollTo({ top: y, behavior: "smooth" });
        
        // Active link state
        document.querySelectorAll('.header-nav a').forEach(l => l.classList.remove('active'));
        link.classList.add('active');
      }
    });
  });

  // 4. HERO BUTTONS
  const exploreBtn = document.getElementById("btn-explore");
  const storyBtn = document.getElementById("btn-story");

  if (exploreBtn) {
    exploreBtn.addEventListener("click", () => {
      const products = document.querySelector("#products");
      if (products) {
        const y = products.getBoundingClientRect().top + window.pageYOffset - HEADER_HEIGHT;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    });
  }
  if (storyBtn) {
    storyBtn.addEventListener("click", () => {
      const mission = document.querySelector("#mission");
      if (mission) {
        const y = mission.getBoundingClientRect().top + window.pageYOffset - HEADER_HEIGHT;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    });
  }

  // 5. SCROLL REVEAL ANIMATIONS
  const revealElements = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
  );
  revealElements.forEach(el => revealObserver.observe(el));

  // 6. COUNTER ANIMATION
  const statNumber = document.querySelector('.stat-number');
  let counted = false;

  function animateCounter(el) {
    const target = parseInt(el.getAttribute('data-target'));
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;

    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      el.textContent = Math.floor(current).toLocaleString() + '+';
    }, 16);
  }

  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !counted) {
          counted = true;
          animateCounter(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );
  if (statNumber) counterObserver.observe(statNumber);

  // 7. DOWNLOAD BUTTONS
  document.querySelectorAll(".download-btn").forEach(button => {
    button.addEventListener("click", e => {
      e.preventDefault();
      const file = button.dataset.file || "catalog/catalog.pdf";
      const filename = button.dataset.filename || "Belagavi_Organics_Catalog.pdf";
      const a = document.createElement("a");
      a.href = file;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      a.remove();
    });
  });

  // 8. ADD TO CART / SHOP FEEDBACK
  document.querySelectorAll('.btn-cart').forEach(btn => {
    if (btn.querySelector('.material-symbols-outlined') && !btn.hasAttribute('onclick')) {
        btn.addEventListener('click', function () {
          const icon = this.querySelector('.material-symbols-outlined');
          if (!icon) return;
          const originalIcon = icon.textContent;
          icon.textContent = 'check_circle';
          icon.classList.add('icon-fill');
          icon.style.color = 'var(--primary-container)';

          setTimeout(() => {
            icon.textContent = originalIcon || 'shopping_cart';
            icon.classList.remove('icon-fill');
            icon.style.color = '';
          }, 1500);
        });
    }
  });

  // 9. SHARE FUNCTIONALITY
  const shareBtn = document.getElementById('btn-share');
  if (shareBtn) {
    shareBtn.addEventListener('click', (e) => {
      e.preventDefault();
      if (navigator.share) {
        navigator.share({
          title: 'Belagavi Organics',
          text: 'Eat clean, green and healthy. Directly sourced organic products from 2500+ farmers.',
          url: window.location.origin
        }).catch(console.error);
      } else {
        const url = window.location.href;
        navigator.clipboard.writeText(url).then(() => {
          alert('Link copied to clipboard! Share it with your friends.');
        });
      }
    });
  }

  // 10. CATEGORY PAGE LOGIC
  const categoryGrid = document.getElementById('category-grid');
  if (categoryGrid) {
      const urlParams = new URLSearchParams(window.location.search);
      const categoryQuery = urlParams.get('c');
      if (!categoryQuery) {
          window.location.href = 'index.html#products';
          return;
      }
      const pageTitle = document.getElementById("page-title");
      if (pageTitle) {
          const decoded = decodeURIComponent(categoryQuery);
          pageTitle.textContent = decoded.charAt(0).toUpperCase() + decoded.slice(1);
          pageTitle.setAttribute('data-category', categoryQuery);
      }
      fetchProducts(categoryQuery);
  }

  // 11. Load offers (if container exists)
  loadOffersFromSheet();
});

// COMMON WHATSAPP FUNCTION
const WHATSAPP_NUMBER = "918884063030";
const REMOTE_IMAGE_BASE = "https://belagavi-organics.github.io/Belagavi-Organics/images/";

function openWhatsApp(message) {
  const encodedMessage = encodeURIComponent(message || "");
  const isMobile = /Android|iPhone|iPad|iPod|Opera Mini|IEMobile/i.test(navigator.userAgent);
  const baseUrl = isMobile ? "https://api.whatsapp.com/send?phone=" : "https://web.whatsapp.com/send?phone=";
  const url = baseUrl + WHATSAPP_NUMBER + "&text=" + encodedMessage;
  window.open(url, '_blank');
}

// SHEET CONSTANTS
const SHEET_ID = "1Bj8I0emuVaQ3UwhWdBdGrEgIgJRBM4GHjaYCjcPICmA";
const PRODUCTS_SHEET_NAME = "sheet 1";
const OFFERS_SHEET_NAME = "Offers";
const URL_PRODUCTS = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json&sheet=${encodeURIComponent(PRODUCTS_SHEET_NAME)}`;
const URL_OFFERS = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json&sheet=${encodeURIComponent(OFFERS_SHEET_NAME)}`;

// OFFERS loader
async function loadOffersFromSheet() {
  const container = document.getElementById("offers-container");
  if (!container) return;

  try {
    const res = await fetch(URL_OFFERS);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const text = await res.text();
    const jsonStr = text.substring(text.indexOf("{"), text.lastIndexOf("}") + 1);
    const json = JSON.parse(jsonStr);
    const rows = json.table.rows || [];
    container.innerHTML = "";
    let created = 0;

    rows.forEach((row, idx) => {
      const c = row.c || [];
      const active = (c[0]?.v || "").toString().trim().toLowerCase();
      if (active !== "yes") return;
      
      const title = c[1]?.v || "";
      const desc = c[2]?.v || "";
      const img = c[3]?.v || "";
      const target = c[4]?.v || "";

      const box = document.createElement("div");
      box.className = "offer-box reveal";
      box.style.animationDelay = `${idx * 0.1}s`;
      box.innerHTML = `
        <img src="${getProductImageUrl(title, '', img)}" alt="${escapeHtml(title) || "Offer"}" onerror="this.src='https://images.unsplash.com/photo-1610348725531-843dff563e2c?auto=format&fit=crop&q=80&w=800'">
        <div class="offer-content">
          <h2>${escapeHtml(title)}</h2>
          <p>${escapeHtml(desc)}</p>
          <button class="offer-btn">Grab Now</button>
        </div>
      `;
      const btn = box.querySelector(".offer-btn");
      btn.addEventListener("click", () => {
        if (target) window.location.href = target;
        else document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
      });

      container.appendChild(box);
      created++;
    });
  } catch (err) {
    console.error("loadOffersFromSheet error:", err);
  }
}

// FETCH PRODUCTS FOR CATEGORY
async function fetchProducts(categoryQuery) {
    const grid = document.getElementById('category-grid');
    const loading = document.getElementById('loading-msg');
    if (!grid) return;
    
        if (loading) {
          loading.style.display = 'none';
        }
        grid.innerHTML = "";
        let count = 0;

        try {
            const res = await fetch(URL_PRODUCTS);
            if (!res.ok) throw new Error(`HTTP Error`);
            const text = await res.text();
            const jsonStr = text.substring(text.indexOf("{"), text.lastIndexOf("}") + 1);
            const json = JSON.parse(jsonStr);
            const rows = json.table.rows || [];

        const currentLang = localStorage.getItem("preferred_lang") || "en";
        const buyNowText = I18N_DATA[currentLang]?.btn_buy_now || "Buy Now";
        const organicText = currentLang === "en" ? "Organic" : (currentLang === "hi" ? "à¤‘à¤°à¥�à¤—à¥‡à¤¨à¤¿à¤•" : "à²¸à²¾à²µà²¯à²µ");

        rows.forEach((row, idx) => {
          const c = row.c || [];
          if (!c[0] || !c[0].v) return;
          const rowCategory = String(c[0].v).trim().toLowerCase();
          if (rowCategory !== categoryQuery.toLowerCase() && categoryQuery !== 'products') return;

          const name = c[1]?.v || "";
          const price = c[2]?.v || "";
          const unit = c[3]?.v || "";
          const desc = c[4]?.v || "";
          const img = c[5]?.v || "";
          const availability = (c[6]?.v || "Available").toString().toLowerCase();
          const isAvailable = availability !== "out of stock";

          const card = document.createElement("div");
          card.className = `product-card reveal visible`;
          card.style.animationDelay = `${(count % 4) * 0.1}s`;

          const priceHtml = price ? `â‚¹${price}${unit ? " / " + unit : ""}` : "Contact for price";
          const tagHtml = isAvailable ? `<span class="product-tag">${organicText}</span>` : `<span class="product-tag" style="background:#ffdad6; color:#ba1a1a;">Out of Stock</span>`;
          
          const imgUrl = getProductImageUrl(name, rowCategory, img);

          let actionHtml = '';
          if (isAvailable) {
              actionHtml = `
                <button class="btn-buy-now" aria-label="Buy Now">
                  <span class="material-symbols-outlined" style="font-size:18px;">chat</span> ${buyNowText}
                </button>`;
          }

          card.innerHTML = `
              <div class="product-card-image">
                <img alt="${escapeHtml(name)} - Premium Organic" src="${imgUrl}" onerror="this.src='https://images.unsplash.com/photo-1610348725531-843dff563e2c?auto=format&fit=crop&q=80&w=800'" />
                ${tagHtml}
              </div>
              <div class="product-card-body">
                <h4>${escapeHtml(name)}</h4>
                ${desc ? `<p class="product-desc" title="${escapeHtml(desc)}">${escapeHtml(desc)}</p>` : ''}
                <div class="product-card-footer">
                  <span class="product-price">${priceHtml}</span>
                  ${actionHtml}
                </div>
              </div>
          `;
          grid.appendChild(card);

          if (isAvailable) {
              const btn = card.querySelector('.btn-buy-now');
              if (btn) {
                  const whatsappMsg = `Namaste,\n\nI am interested in "${name}" ${price ? `(â‚¹${price}${unit ? " / " + unit : ""})` : ""} from Belagavi Organics.\n\nPlease share full product details.`;
                  btn.addEventListener('click', () => {
                      openWhatsApp(whatsappMsg);
                  });
              }
          }
          count++;
        });

        if (count === 0 && loading) {
            loading.style.display = 'block';
            loading.setAttribute("data-i18n", "loading_empty");
            loading.textContent = currentLang === "en" ? 'No products found.' : (currentLang === "hi" ? 'à¤•à¥‹à¤ˆ à¤‰à¤¤à¥�à¤ªà¤¾à¤¦ à¤¨à¤¹à¥€à¤‚ à¤®à¤¿à¤²à¤¾à¥¤' : 'à²¯à²¾à²µà³�à²¦à³‡ à²‰à²¤à³�à²ªà²¨à³�à²¨à²—à²³à³� à²•à²‚à²¡à³�à²¬à²‚à²¦à²¿à²²à³�à²².');
        }

    } catch (e) {
        if (loading) {
            loading.style.display = 'block';
            loading.textContent = 'Error loading products.';
        }
        console.error(e);
    }
}

function escapeHtml(str) {
  if (!str && str !== 0) return "";
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}



