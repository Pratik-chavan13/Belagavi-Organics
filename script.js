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
    nav_mission: "हमारा लक्ष्य",
    nav_range: "ऑर्गेनिक रेंज",
    nav_network: "किसान नेटवर्क",
    nav_contact: "संपर्क",
    btn_shop: "अभी खरीदें",
    hero_badge: "100% प्रमाणित ऑर्गेनिक",
    hero_title: "शुद्ध खाएं, स्वस्थ रहें। तंदुरुस्ती महसूस करें।",
    hero_desc: "यदि आपने आज भोजन किया है, तो एक किसान को धन्यवाद दें। हम सीधे बेलगावी जिले के 2500 से अधिक छोटे और सीमांत किसानों से अपने जैविक बाजरा, दालें और तेल मंगवाते हैं।",
    hero_btn_explore: "उत्पाद देखें",
    hero_btn_story: "हमारी कहानी",
    section_range_title: "खेत से ताज़ा ऑर्गेनिक उत्पाद",
    section_range_desc: "शुद्ध रूप से जैविक, स्वच्छता से साफ, और सीधे हमारे किसानों के खेतों से।",
    section_community_title: "समुदाय से जुड़ा हुआ",
    section_community_desc: "जागरूक उपभोक्ताओं को समर्पित जैविक किसानों के साथ जोड़ना।",
    bento_mission_title: "हमारा लक्ष्य",
    bento_mission_desc: "किसानों के लिए सामाजिक और आर्थिक स्थिरता पैदा करना और आपकी मेज पर शुद्ध, रसायन मुक्त भोजन पहुंचाना। हर दाने को स्वच्छता से साफ किया जाता है और नैतिक रूप से प्राप्त किया जाता है।",
    stat_farmers: "किसान नेटवर्क",
    bento_sourcing_title: "किसानों से सीधे प्राप्त",
    bento_sourcing_desc: "बिचौलियों को हटाकर, हम यह सुनिश्चित करते हैं कि सबसे शुद्ध जैविक उत्पाद आप तक पहुँचें, जबकि बिक्री की पूरी राशि सीधे किसानों की मदद के लिए जाती है।",
    bento_sourcing_btn: "बेलगावी ऑर्गेनिक्स क्यों चुनें?",
    footer_desc: "धरती का पोषण करना, किसानों को सशक्त बनाना और आपकी मेज तक शुद्धतम जैविक उपहार पहुँचाना।",
    btn_back_home: "मुख्य पृष्ठ",
    category_subtitle: "प्रकृति के हृदय से शुद्ध अच्छाई",
    loading: "लोड हो रहा है...",
    btn_buy_now: "अभी खरीदें",
    loading_empty: "कोई उत्पाद नहीं मिला।",
    category_sweeteners: "मिठास (गुड़)",
    category_rice: "प्रीमियम चावल",
    category_dry_nuts: "मेवे (Dry Nuts)",
    category_pulses_dal: "दालें और दलहन",
    category_oils: "कोल्ड प्रेस्ड तेल",
    category_spices: "मसाले",
    category_millets: "जैविक बाजरा (Millets)",
    category_pickles: "पारंपरिक अचार"
  },
  kn: {
    nav_mission: "ನಮ್ಮ ಗುರಿ",
    nav_range: "ಸಾವಯವ ಶ್ರೇಣಿ",
    nav_network: "ರೈತ ಜಾಲ",
    nav_contact: "ಸಂಪರ್ಕಿಸಿ",
    btn_shop: "ಈಗ ಖರೀದಿಸಿ",
    hero_badge: "100% ಪ್ರಮಾಣೀಕೃತ ಸಾವಯವ",
    hero_title: "ಶುದ್ಧವಾಗಿ ತಿನ್ನಿರಿ, ಆರೋಗ್ಯವಾಗಿರಿ. ಚೈತನ್ಯ ಅನುಭವಿಸಿ.",
    hero_desc: "ನೀವು ಇಂದು ಆಹಾರ ಸೇವಿಸಿದ್ದರೆ, ಒಬ್ಬ ರೈತನಿಗೂ ವಂದಿಸಿ. ನಾವು ಬೆಳಗಾವಿ ಜಿಲ್ಲೆಯ 2500ಕ್ಕೂ ಹೆಚ್ಚು ಸಣ್ಣ ರೈತರಿಂದ ನೇರವಾಗಿ ಸಾವಯವ ಸಿರಿಧಾನ್ಯಗಳು, ಬೇಳೆಕಾಳುಗಳು ಮತ್ತು ಎಣ್ಣೆಗಳನ್ನು ಸಂಗ್ರಹಿಸುತ್ತೇವೆ.",
    hero_btn_explore: "ಉತ್ಪನ್ನಗಳನ್ನು ನೋಡಿ",
    hero_btn_story: "ನಮ್ಮ ಕಥೆ",
    section_range_title: "ಹೊಲದಿಂದ ತಾಜಾ ಸಾವಯವ ಉತ್ಪನ್ನಗಳು",
    section_range_desc: "ಶುದ್ಧ ಸಾವಯವ, ನೈರ್ಮಲ್ಯಯುತ ಸ್ವಚ್ಛತೆ, ಮತ್ತು ನೇರವಾಗಿ ನಮ್ಮ ರೈತರ ಹೊಲಗಳಿಂದ.",
    section_community_title: "ಸಮುದಾಯದೊಂದಿಗೆ ಬಾಂಧವ್ಯ",
    section_community_desc: "ಸಾವಯವ ರೈತರನ್ನು ಸೃಜನಶೀಲ ಗ್ರಾಹಕರೊಂದಿಗೆ ಸಂಪರ್ಕಿಸುವುದು.",
    bento_mission_title: "ನಮ್ಮ ಗುರಿ",
    bento_mission_desc: "ರೈತರಿಗೆ ಸಾಮಾಜಿಕ ಮತ್ತು ಆರ್ಥಿಕ ಸುಸ್ಥಿರತೆಯನ್ನು ನಿರ್ಮಿಸುವುದು ಮತ್ತು ನಿಮ್ಮ ಮನೆಗೆ ವಿಷರಹಿತ ವಿಶುದ್ಧ ಆಹಾರವನ್ನು ತಲುಪಿಸುವುದು ನಮ್ಮ ಉದ್ದೇಶ.",
    stat_farmers: "ರೈತರ ಜಾಲ",
    bento_sourcing_title: "ರೈತರಿಂದ ನೇರ ಸಂಗ್ರಹಣೆ",
    bento_sourcing_desc: "ದಲ್ಲಾಳಿಗಳಿಲ್ಲದೆ, ರೈತರ ಶ್ರಮಕ್ಕೆ ತಕ್ಕ ಬೆಲೆ ಸಿಗುವಂತೆ ಮತ್ತು ಗ್ರಾಹಕರಿಗೆ ಶುದ್ಧ ರೈತ ಉತ್ಪನ್ನಗಳು ತಲುಪುವಂತೆ ನಾವು ಕಾಳಜಿ ವಹಿಸುತ್ತೇವೆ.",
    bento_sourcing_btn: "ಬೆಳಗಾವಿ ಆರ್ಗ್ಯಾನಿಕ್ಸ್ ಏಕೇ?",
    footer_desc: "ಭೂಮಿಯ ಪೋಷಣೆ, ರೈತರ ಸಬಲೀಕರಣ ಮತ್ತು ನಿಮ್ಮ ಮನೆಗೆ ಶುದ್ಧ ಸಾವಯವ ಆಹಾರವನ್ನು ತಲುಪಿಸುವುದು ನಮ್ಮ ಕರ್ತವ್ಯ.",
    btn_back_home: "ಮುಖಪುಟಕ್ಕೆ",
    category_subtitle: "ನಿಸರ್ಗದ ಮಡಿಲಿನಿಂದ ಶುದ್ಧ ಸಾವಯವ",
    loading: "ಕಾಯಲಾಗುತ್ತಿದೆ...",
    btn_buy_now: "ಈಗ ಖರೀದಿಸಿ",
    loading_empty: "ಯಾವುದೇ ಉತ್ಪನ್ನಗಳು ಕಂಡುಬಂದಿಲ್ಲ.",
    category_sweeteners: "ಸಿಹಿ ಪದಾರ್ಥಗಳು (ಬೆಲ್ಲ)",
    category_rice: "ಪ್ರೀಮಿಯಂ ಅಕ್ಕಿ",
    category_dry_nuts: "ಒಣ ಹಣ್ಣುಗಳು",
    category_pulses_dal: "ಬೇಳೆಕಾಳುಗಳು",
    category_oils: "ಗಾಣದ ಎಣ್ಣೆಗಳು",
    category_spices: "ಮಸಾಲೆ ಪದಾರ್ಥಗಳು",
    category_millets: "ಸಾವಯವ ಸಿರಿಧಾನ್ಯಗಳು",
    category_pickles: "ಸಾಂಪ್ರದಾಯಿಕ ಉಪ್ಪಿನಕಾಯಿ"
  },
  mr: {
    nav_mission: "आमचे ध्येय",
    nav_range: "सेंद्रिय श्रेणी",
    nav_network: "शेतकरी नेटवर्क",
    nav_contact: "संपर्क",
    btn_shop: "आत्ता खरेदी करा",
    hero_badge: "100% प्रमाणित सेंद्रिय",
    hero_title: "शुद्ध खा, निरोगी राहा. आरोग्य अनुभवा.",
    hero_desc: "जर तुम्ही आज जेवलात, तर एका शेतकऱ्याचे आभार माना. आम्ही बेळगाव जिल्ह्यातील 2500 पेक्षा अधिक लहान शेतकऱ्यांकडून थेट सेंद्रिय तृणधान्ये, कडधान्ये आणि तेले मागवतो.",
    hero_btn_explore: "उत्पादने पहा",
    hero_btn_story: "आमची कहाणी",
    section_range_title: "शेतातून ताजे सेंद्रिय उत्पाद",
    section_range_desc: "पूर्णपणे सेंद्रिय, स्वच्छतेने धुतलेले आणि थेट आमच्या शेतकऱ्यांच्या शेतातून.",
    section_community_title: "समाजाशी जोडलेले",
    section_community_desc: "जागरूक ग्राहकांना समर्पित सेंद्रिय शेतकऱ्यांशी जोडणे.",
    bento_mission_title: "आमचे ध्येय",
    bento_mission_desc: "शेतकऱ्यांसाठी सामाजिक व आर्थिक स्थिरता निर्माण करणे आणि तुमच्या थाळीत शुद्ध, रसायनमुक्त अन्न पोहोचवणे. प्रत्येक धान्य स्वच्छतेने प्रक्रिया केलेले आणि नैतिकरीत्या प्राप्त केलेले आहे.",
    stat_farmers: "शेतकरी नेटवर्क",
    bento_sourcing_title: "शेतकऱ्यांकडून थेट",
    bento_sourcing_desc: "दलालांना वगळून, आम्ही हे सुनिश्चित करतो की सगळ्यात शुद्ध सेंद्रिय उत्पादने तुमच्यापर्यंत पोहोचतात आणि विक्रीतील संपूर्ण नफा थेट शेतकऱ्यांना मिळतो.",
    bento_sourcing_btn: "बेळगाव ऑर्गेनिक्स का निवडावे?",
    footer_desc: "पृथ्वीचे पोषण, शेतकऱ्यांचे सक्षमीकरण आणि तुमच्या घरापर्यंत सर्वात शुद्ध सेंद्रिय भरपूर पोहोचवणे.",
    btn_back_home: "मुख्यपृष्ठ",
    category_subtitle: "निसर्गाच्या हृदयातून शुद्ध चांगुलपणा",
    loading: "लोड होत आहे...",
    btn_buy_now: "आत्ता खरेदी करा",
    loading_empty: "कोणतेही उत्पाद सापडले नाही.",
    category_sweeteners: "गोडवा (गूळ)",
    category_rice: "प्रीमियम तांदूळ",
    category_dry_nuts: "सुका मेवा",
    category_pulses_dal: "डाळी व कडधान्ये",
    category_oils: "थंड दाब तेले",
    category_spices: "मसाले",
    category_millets: "सेंद्रिय धान्ये",
    category_pickles: "पारंपरिक लोणचे"
  }
};

function updateLanguage(lang) {
  const translations = I18N_DATA[lang];
  if (!translations) return;

  // Batch all DOM writes in one paint — prevents slow one-by-one text updates
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

    // 3. Update dynamically generated product cards (no data-i18n — built via innerHTML)
    const organicMap = { en: "ORGANIC", hi: "ऑर्गेनिक", mr: "सेंद्रिय", kn: "ಸಾವಯವ" };
    const organicText = organicMap[lang] || "ORGANIC";
    const buyNowText  = translations.btn_buy_now || "Buy Now";

    document.querySelectorAll('.product-tag').forEach(tag => {
      // Only update the "organic" tag, not "Out of Stock"
      const txt = tag.textContent.trim();
      const isOrganic = Object.values(organicMap).some(v => txt === v) || txt === "Organic";
      if (isOrganic) tag.textContent = organicText;
    });

    document.querySelectorAll('.btn-buy-now').forEach(btn => {
      // Find & replace the text node only — preserves the icon <span> inside
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
        const organicText = currentLang === "en" ? "Organic" : (currentLang === "hi" ? "ऑर्गेनिक" : "ಸಾವಯವ");

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

          const priceHtml = price ? `₹${price}${unit ? " / " + unit : ""}` : "Contact for price";
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
                  const whatsappMsg = `Namaste,\n\nI am interested in "${name}" ${price ? `(₹${price}${unit ? " / " + unit : ""})` : ""} from Belagavi Organics.\n\nPlease share full product details.`;
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
            loading.textContent = currentLang === "en" ? 'No products found.' : (currentLang === "hi" ? 'कोई उत्पाद नहीं मिला।' : 'ಯಾವುದೇ ಉತ್ಪನ್ನಗಳು ಕಂಡುಬಂದಿಲ್ಲ.');
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



