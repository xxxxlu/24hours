import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [
      {
        id: 1,
        name: 'Kemei Rechargeable KM-580A 7 in 1 Mens Grooming Kit',
        price: 4100,
        regularPrice: 4300,
        savings: 200,
        image: 'https://24hours.pk/cdn/shop/products/kemei-7-in-1-rechargeable-grooming-kit-multi-functional-hair-clipper-and-trimmer-km5-3302_1024x1024@2x.jpg?v=1573961819',
        images: [
          'https://24hours.pk/cdn/shop/products/kemei-7-in-1-rechargeable-grooming-kit-multi-functional-hair-clipper-and-trimmer-km5-3302_1024x1024@2x.jpg?v=1573961819',
        ],
        category: 'Men Grooming',
        description: [
          'Contains main shaver with 4 kinds of different replaceable heads: Shaving head, Nose Hair Trimmer and Clipper head.',
          'Multifunctional and convenient.',
          'Precision cutting system shaves even the shortest stubble.',
          'Fast and easy way to remove unwanted hair from your face.',
          'Safety steel cutting head, not to hurt the hair.',
          'Professional grade blades to define your facial style.',
          'Ultra close shave & ability to with precision.',
          'With the shaving head, you obtain a smooth result in a comfortable and gentle way.',
          'Remove smoothly and safety.',
          'Shave completely and keep your face clean for a whole day.',
          'Model No: Km- 580a'
        ]
      },
      {
        id: 2,
        name: 'Micro Touch Max All in One Personal Trimmer',
        price: 1850,
        regularPrice: 1999,
        savings: 149,
        image: 'https://24hours.pk/cdn/shop/products/24-96591566766110_360x.jpg?v=1573729105',
        images: [
          'https://24hours.pk/cdn/shop/products/24-96591566766110_360x.jpg?v=1573729105',
        ],
        category: 'Men Grooming',
        description: [
          'Owered by one AAA battery (not included).',
          '2 comb attachments for trimming eyebrows/mustaches. The 2mm/4mm Comb is for trimming shorter.',
          'Eyebrows/mustache hairs. The 6mm Comb is for trimming longer eyebrows/mustache hairs.',
          'Trims hair with micro precision.',
          'Rubber non-slip grip.',
          'Built-in LED light.'
        ]
      },
      {
        id: 3,
        name: 'Kemei KM-5018 Professional Trimmer Machine',
        price: 2599,
        regularPrice: 2799,
        savings: 200,
        image: 'https://24hours.pk/cdn/shop/products/Untitled-1_aacef725-ab62-48e6-a665-c45dd5372659_360x.jpg?v=1586851232',
        images: [
          'https://24hours.pk/cdn/shop/products/Untitled-1_aacef725-ab62-48e6-a665-c45dd5372659_360x.jpg?v=1586851232',
        ],
        category: 'Men Grooming',
        description: [
          'Product details of Kemei KM-5018 Professional Trimmer Machine for Men.',
          'Power Supply: Electric Power: 5W.',
          'Voltage: 220-240V.',
          'Freighter: 50HZ.',
          'Product Size: 18*4.5.',
          'Skin-friendly & High Performance.',
          'This cordless trimmer comes with blades that have rounded tips for a smooth contact against your skin.',
          'Effortless Trimming.',
          'This trimmer comes with a selecting wheel that allows you to adjust and lock-in the length settings.',
          'This trimmer is designed for a long use and comes with a 1-year guarantee on buying.',
          'This trimmer can be used for up to 1 month on a single 10-hour charge.'
        ]
      },
      {
        id: 4,
        name: 'Kemei KM-680A 8 in 1 Grooming Kit Shaver & Trimmer for Men',
        price: 4200,
        regularPrice: 4500,
        savings: 300,
        image: 'https://24hours.pk/cdn/shop/products/s-l640_f298878f-4b16-4460-92b7-ae25c7bfc88c_1024x1024@2x.jpg?v=1573955066',
        images: [
          'https://24hours.pk/cdn/shop/products/s-l640_f298878f-4b16-4460-92b7-ae25c7bfc88c_1024x1024@2x.jpg?v=1573955066',
        ],
        category: 'Men Grooming',
        description: [
          'KM-680A 8 in 1 trimmer for men.',
          'Multifunctional grooming kit for face, body and hair trimming.',
          'Includes 8 different attachments for versatile styling and grooming options.',
          'Rechargeable battery for cordless operation.',
          'Waterproof design for easy cleaning.',
          'LED display indicates battery level.',
          'Self-sharpening blades for long-lasting performance.',
          'Ergonomic design for comfortable handling.'
        ]
      },
      {
        id: 5,
        name: 'Smart Swab cross I-ears Painless Cordless Ear Cleaner',
        price: 750,
        regularPrice: 1125,
        savings: 375,
        image: 'https://24hours.pk/cdn/shop/products/24-94191566763012_1024x_764ade4f-d35f-4ac0-a431-8686b7fec719_360x.jpg?v=1573996633',
        images: [
          'https://24hours.pk/cdn/shop/products/24-94191566763012_1024x_764ade4f-d35f-4ac0-a431-8686b7fec719_360x.jpg?v=1573996633'
        ],
        category: 'Men Grooming',
        description: [
          'Painless, Cordless Ear Cleaner',
          'Safe and effective way to clean ears',
          'Soft spiral design removes ear wax without causing discomfort',
          'Replaces traditional cotton swabs with a safer alternative',
          'Includes multiple replacement heads',
          'Portable and easy to use',
          'Suitable for both men and women'
        ]
      },
      {
        id: 6,
        name: 'Dingling RF-608B Rechargeable Electric Hair Trimmer For Men',
        price: 1900,
        regularPrice: 2000,
        savings: 100,
        image: 'https://24hours.pk/cdn/shop/products/s-l400_654f7708-13ec-4827-8913-933522a3e7f9_360x.jpg?v=1579264596',
        images: [
          'https://24hours.pk/cdn/shop/products/s-l400_654f7708-13ec-4827-8913-933522a3e7f9_360x.jpg?v=1579264596'
        ],
        category: 'Men Grooming',
        description: [
          'Rechargeable Electric Hair Trimmer for Men',
          'Cordless operation with long battery life',
          'Precision blades for clean and even cutting',
          'Multiple length settings for versatile styling',
          'Includes attachment combs for different hair lengths',
          'Easy to clean and maintain',
          'Ergonomic design for comfortable handling'
        ]
      },
      {
        id: 7,
        name: 'Dinglong RF-609 Men\'s Rechargeable Electric Trimmer',
        price: 3500,
        regularPrice: 3800,
        savings: 300,
        image: 'https://24hours.pk/cdn/shop/products/32_1200x1200_d1e30707-9cac-4ea0-b8b8-9b94792b956f_360x.jpg?v=1578999214',
        images: [
          'https://24hours.pk/cdn/shop/products/32_1200x1200_d1e30707-9cac-4ea0-b8b8-9b94792b956f_360x.jpg?v=1578999214'
        ],
        category: 'Men Grooming',
        description: [
          'Rechargeable Electric Trimmer for Men',
          'Professional quality hair and beard trimmer',
          'High-precision stainless steel blades',
          'Powerful motor for efficient trimming',
          'Adjustable cutting lengths',
          'LCD display shows battery status',
          'Waterproof design for wet and dry use',
          'Includes cleaning brush and charging stand'
        ]
      },
      {
        id: 8,
        name: 'Caboki Hair Building Fibers LuckyFine Disposable Powder Conceal',
        price: 1450,
        regularPrice: 1650,
        savings: 200,
        image: 'https://24hours.pk/cdn/shop/products/24-30431558425401_360x.jpg?v=1573838296',
        images: [
          'https://24hours.pk/cdn/shop/products/24-30431558425401_360x.jpg?v=1573838296'
        ],
        category: 'Men Grooming',
        description: [
          'Hair building fibers to conceal thinning hair',
          'Made from natural keratin protein',
          'Creates natural-looking volume and fullness',
          'Resistant to wind, rain, and perspiration',
          'Works with all hair types and textures',
          'Easy to apply and remove',
          'Available in multiple shades to match natural hair color'
        ]
      },
      {
        id: 9,
        name: 'Luma Smile Tooth Polisher & Whitener Hygiene Kit',
        price: 650,
        regularPrice: 800,
        savings: 150,
        image: 'https://24hours.pk/cdn/shop/products/24-32051566555369_360x.jpg?v=1573232241',
        images: [
          'https://24hours.pk/cdn/shop/products/24-32051566555369_360x.jpg?v=1573232241'
        ],
        category: 'Men Grooming',
        description: [
          'Professional tooth polishing and whitening system',
          'Removes stains from coffee, tea, wine, and tobacco',
          'Gentle on teeth and enamel',
          'Easy to use at home',
          'Includes polishing cups and whitening paste',
          'Battery-operated for cordless convenience',
          'Results visible after first use'
        ]
      },
      {
        id: 10,
        name: 'Electric Nose Hair Trimmer',
        price: 1600,
        regularPrice: 1824,
        savings: 224,
        image: 'https://24hours.pk/cdn/shop/products/c8a49efcd005fc5100969a8d38da876e_360x.png?v=1578268098',
        images: [
          'https://24hours.pk/cdn/shop/products/c8a49efcd005fc5100969a8d38da876e_360x.png?v=1578268098'
        ],
        category: 'Men Grooming',
        description: [
          'Precision nose and ear hair trimmer',
          'Painless and effective removal of unwanted hair',
          'Stainless steel blades for durability',
          'Washable for easy cleaning',
          'Compact design for travel',
          'Battery operated',
          'LED light for better visibility'
        ]
      },
      {
        id: 11,
        name: 'Kemei Men Grooming Kit 10 in 1 Set',
        price: 3999,
        regularPrice: 4499,
        savings: 500,
        image: 'https://24hours.pk/cdn/shop/products/km-725-professional-hair-kemei-original-imaf87z3wnufuman-800x800_360x.jpg?v=1573877407',
        images: [
          'https://24hours.pk/cdn/shop/products/km-725-professional-hair-kemei-original-imaf87z3wnufuman-800x800_360x.jpg?v=1573877407'
        ],
        category: 'Men Grooming',
        description: [
          'Complete grooming solution with 10 attachments',
          'Includes trimmer, shaver, nose hair trimmer, and more',
          'Precision blades for multiple grooming needs',
          'Rechargeable with long battery life',
          'Waterproof for wet and dry use',
          'LED display for battery status',
          'Travel-friendly design with storage case'
        ]
      },
      {
        id: 12,
        name: 'Kemei Professional Hair Clipper KM-028',
        price: 2900,
        regularPrice: 3650,
        savings: 750,
        image: 'https://24hours.pk/cdn/shop/products/Kemei-KM-028-battery-rechargeable-dual-use-electric-hair-clipper_360x.jpg?v=1579264472',
        images: [
          'https://24hours.pk/cdn/shop/products/Kemei-KM-028-battery-rechargeable-dual-use-electric-hair-clipper_360x.jpg?v=1579264472'
        ],
        category: 'Men Grooming',
        description: [
          'Professional grade hair clipper',
          'Powerful motor for smooth cutting',
          'Titanium blade for durability and precision',
          'Adjustable cutting lengths',
          'Cordless operation with long battery life',
          'Quick charging capability',
          'Includes guide combs and accessories',
          'Ergonomic design for comfortable use'
        ]
      },
      {
        id: 13,
        name: 'GEMEI Mens Body Hair Trimmer Shaver Male Grooming Clipper',
        price: 1999,
        regularPrice: 2499,
        savings: 500,
        image: 'https://24hours.pk/cdn/shop/products/s-l640_360x.png?v=1573929625',
        images: [
          'https://24hours.pk/cdn/shop/products/s-l640_360x.png?v=1573929625'
        ],
        category: 'Men Grooming',
        description: [
          'All-in-one body groomer for men',
          'Trims and shaves body hair with precision',
          'Safe for sensitive areas',
          'Waterproof for shower use',
          'Rechargeable lithium battery',
          'Multiple length settings',
          'Ergonomic non-slip grip',
          'Includes cleaning brush and charging base'
        ]
      },
      {
        id: 14,
        name: 'Kemei KM-9020 Exclusive Rechargeable Hair Clipper & Trimmer',
        price: 2900,
        regularPrice: 3700,
        savings: 800,
        image: 'https://24hours.pk/cdn/shop/products/km-9020_3_360x.jpg?v=1578998475',
        images: [
          'https://24hours.pk/cdn/shop/products/km-9020_3_360x.jpg?v=1578998475'
        ],
        category: 'Men Grooming',
        description: [
          'Premium rechargeable hair clipper and trimmer',
          'Professional cutting system for precise results',
          'Adjustable blade with multiple length settings',
          'High-capacity lithium battery',
          'LCD display shows battery level',
          'Quiet operation with minimal vibration',
          'Includes guide combs, oil, and cleaning brush',
          'Suitable for home and professional use'
        ]
      },
      {
        id: 15,
        name: 'Rechargeable Cordless Hair & Beard Trimmer 3Watts',
        price: 1150,
        regularPrice: 1714,
        savings: 564,
        image: 'https://24hours.pk/cdn/shop/products/24-2611566759797_360x.jpg?v=1573728910',
        images: [
          'https://24hours.pk/cdn/shop/products/24-2611566759797_360x.jpg?v=1573728910'
        ],
        category: 'Men Grooming',
        description: [
          '3-watt powerful motor for efficient trimming',
          'Cordless operation for maximum flexibility',
          'Precision blades for clean cutting',
          'Multiple length settings for customized styling',
          'Rechargeable battery with indicator light',
          'Compact and lightweight design',
          'Includes attachment combs and accessories'
        ]
      },
      {
        id: 16,
        name: 'Kemei KM-719 Professional High Quality Advanced Shaving System',
        price: 2899,
        regularPrice: 3000,
        savings: 101,
        image: 'https://24hours.pk/cdn/shop/products/24-46551552897359-1_360x.jpg?v=1573929666',
        images: [
          'https://24hours.pk/cdn/shop/products/24-46551552897359-1_360x.jpg?v=1573929666'
        ],
        category: 'Men Grooming',
        description: [
          'Advanced shaving system for precise grooming',
          'Gold-plated housing for premium look and feel',
          'Dual-blade cutting system for close shaves',
          'Floating heads adapt to facial contours',
          'Cordless with long battery life',
          'Quick charge capability',
          'Pop-up trimmer for detailing',
          'Washable for easy maintenance'
        ]
      },
      {
        id: 17,
        name: 'Kemei KM-5017 Hair Clipper & Trimmer',
        price: 2299,
        regularPrice: 2399,
        savings: 100,
        image: 'https://24hours.pk/cdn/shop/products/24-77711553142280-1_360x.jpg?v=1573877391',
        images: [
          'https://24hours.pk/cdn/shop/products/24-77711553142280-1_360x.jpg?v=1573877391'
        ],
        category: 'Men Grooming',
        description: [
          'Versatile hair clipper and beard trimmer',
          'High-precision titanium blade',
          'Adjustable cutting lengths',
          'Cordless operation with fast charging',
          'Ergonomic design for comfortable handling',
          'LED display indicates battery status',
          'Includes attachment combs and accessories',
          'Suitable for home and salon use'
        ]
      },
      {
        id: 18,
        name: 'Kemei 5017 Powerful Rechargeable Electric Hair Clipper Trimmer',
        price: 2299,
        regularPrice: 2303,
        savings: 4,
        image: 'https://24hours.pk/cdn/shop/products/24-44211553073875-1_360x.jpg?v=1573922226',
        images: [
          'https://24hours.pk/cdn/shop/products/24-44211553073875-1_360x.jpg?v=1573922226'
        ],
        category: 'Men Grooming',
        description: [
          'Powerful electric hair clipper with rechargeable battery',
          'Self-sharpening stainless steel blades',
          'Precision cutting with adjustable settings',
          'Long-lasting charge for extended use',
          'Low noise motor for quiet operation',
          'Easy to clean with detachable head',
          'Includes guide combs and maintenance accessories'
        ]
      },
      {
        id: 19,
        name: 'Dingling Hair and Beard Trimmer',
        price: 1999,
        regularPrice: 2099,
        savings: 100,
        image: 'https://24hours.pk/cdn/shop/products/DINGLING-2-in-1-Hair-Beard-Trimmer-RF-_E2_80_93-612_3_360x.jpg?v=1573644779',
        images: [
          'https://24hours.pk/cdn/shop/products/DINGLING-2-in-1-Hair-Beard-Trimmer-RF-_E2_80_93-612_3_360x.jpg?v=1573644779'
        ],
        category: 'Men Grooming',
        description: [
          'Multi-functional hair and beard trimmer',
          'Professional quality for home use',
          'Precision cutting with adjustable length settings',
          'Rechargeable battery with long runtime',
          'Ergonomic design for comfortable grip',
          'Includes attachment combs for different styles',
          'Easy to clean and maintain'
        ]
      },
      {
        id: 20,
        name: 'Hair and Beard Comb Straightener',
        price: 1099,
        regularPrice: 2499,
        savings: 1400,
        image: 'https://24hours.pk/cdn/shop/products/s-l640_360x.png?v=1573929625',
        images: [
          'https://24hours.pk/cdn/shop/products/s-l640_360x.png?v=1573929625'
        ],
        category: 'Men Grooming',
        description: [
          'Innovative beard and hair straightening comb',
          'Ceramic heating elements for fast straightening',
          'Adjustable temperature settings for different hair types',
          'Anti-scald design for safety',
          'Quick heat-up for immediate use',
          'USB rechargeable for convenience',
          'Portable design for travel use',
          'Suitable for all beard and hair types'
        ]
      },
      {
        id: 21,
        name: 'Shaver With Trimmer For Men Brown',
        price: 2250,
        regularPrice: 2446,
        savings: 196,
        image: 'https://24hours.pk/cdn/shop/products/24-50491567771325_360x.jpg?v=1572930409',
        images: [
          'https://24hours.pk/cdn/shop/products/24-50491567771325_360x.jpg?v=1572930409'
        ],
        category: 'Men Grooming',
        description: [
          'Dual-function shaver and trimmer in one device',
          'Premium brown finish for elegant appearance',
          'Triple blade system for close shaves',
          'Pop-up trimmer for detailing and edging',
          'Rechargeable with quick charge option',
          'Waterproof for wet and dry use',
          'Ergonomic design for comfortable handling',
          'Travel lock feature for safe transportation'
        ]
      },
      {
        id: 22,
        name: 'Kemei KM-7012 Professional Hair Trimmer',
        price: 2899,
        regularPrice: 3099,
        savings: 200,
        image: 'https://24hours.pk/cdn/shop/products/Untitled-1-Recovered_fc40c756-8315-4185-930b-fbd1cdcf06bb_360x.jpg?v=1573922342',
        images: [
          'https://24hours.pk/cdn/shop/products/Untitled-1-Recovered_fc40c756-8315-4185-930b-fbd1cdcf06bb_360x.jpg?v=1573922342'
        ],
        category: 'Men Grooming',
        description: [
          'Professional-grade hair trimmer for precision cutting',
          'Powerful motor for efficient trimming',
          'Self-sharpening stainless steel blades',
          'Multiple length settings for versatile styling',
          'Cordless operation with long battery life',
          'Quick charge capability for convenience',
          'LCD display shows battery level',
          'Includes attachment combs and maintenance kit'
        ]
      },
      {
        id: 23,
        name: 'Kemei KM-725 Professional Hair Cordless Trimmer For Men',
        price: 2999,
        regularPrice: 3499,
        savings: 500,
        image: 'https://24hours.pk/cdn/shop/products/km-725-professional-hair-kemei-original-imaf87z3wnufuman-800x800_360x.jpg?v=1573877407',
        images: [
          'https://24hours.pk/cdn/shop/products/km-725-professional-hair-kemei-original-imaf87z3wnufuman-800x800_360x.jpg?v=1573877407'
        ],
        category: 'Men Grooming',
        description: [
          'Professional cordless hair trimmer',
          'Precision titanium blade for sharp cutting',
          'Adjustable length settings from 0.8mm to 2mm',
          'Long-lasting lithium battery',
          'Fast charging with indicator light',
          'Low noise operation for comfortable use',
          'Ergonomic design for easy handling',
          'Includes guide combs, cleaning brush, and oil'
        ]
      },
      {
        id: 24,
        name: 'Philips BT3203 Series 3000 Beard Trimmer',
        price: 3200,
        regularPrice: 3500,
        savings: 300,
        image: 'https://m.media-amazon.com/images/I/41L+XNqU4pL._AC_UL640_FMwebp_QL65_.jpg',
        images: [
          'https://m.media-amazon.com/images/I/41L+XNqU4pL._AC_UL640_FMwebp_QL65_.jpg'
        ],
        category: 'Men Grooming',
        description: [
          'Philips Series 3000 beard and stubble trimmer',
          'Innovative lift and trim technology',
          'Self-sharpening stainless steel blades',
          '10 length settings from 0.5mm to 10mm',
          '45 minutes of cordless use after 10-hour charge',
          'Detachable head for easy cleaning',
          'Ergonomic design for comfortable handling',
          'Includes comb attachment and cleaning brush'
        ]
      },
      {
        id: 25,
        name: 'Braun Series 3 ProSkin 3040s Electric Shaver',
        price: 4500,
        regularPrice: 4999,
        savings: 499,
        image: 'https://m.media-amazon.com/images/I/61XMTpyhNDL._AC_UL640_FMwebp_QL65_.jpg',
        images: [
          'https://m.media-amazon.com/images/I/61XMTpyhNDL._AC_UL640_FMwebp_QL65_.jpg'
        ],
        category: 'Men Grooming',
        description: [
          'Braun Series 3 ProSkin electric shaver',
          'Triple action cutting system',
          'Pressure-sensitive blades for skin protection',
          'Waterproof design for wet and dry use',
          'Precision trimmer for detailed styling',
          'Rechargeable NiMH battery with 45 minutes runtime',
          'LED display showing battery status',
          'Quick 5-minute charge for one shave'
        ]
      },
      {
        id: 26,
        name: 'Gillette Fusion5 ProGlide Styler 3-in-1 Groomer',
        price: 2800,
        regularPrice: 3100,
        savings: 300,
        image: 'https://m.media-amazon.com/images/I/81tCzV57FKL._AC_UL640_FMwebp_QL65_.jpg',
        images: [
          'https://m.media-amazon.com/images/I/81tCzV57FKL._AC_UL640_FMwebp_QL65_.jpg'
        ],
        category: 'Men Grooming',
        description: [
          'Gillette Fusion5 ProGlide Styler 3-in-1 grooming tool',
          'Precision edging blade for clean lines',
          'Fusion5 ProGlide razor for close shaving',
          'Adjustable trimmer with 3 combs for different lengths',
          'Waterproof for use in shower',
          'Battery-powered with indicator light',
          'Slim, ergonomic design for easy handling',
          'Includes 1 Fusion5 ProGlide blade refill'
        ]
      },
      {
        id: 27,
        name: 'Wahl Lithium Ion Stainless Steel Groomer',
        price: 3900,
        regularPrice: 4200,
        savings: 300,
        image: 'https://m.media-amazon.com/images/I/81drOrfKBBL._AC_UL640_FMwebp_QL65_.jpg',
        images: [
          'https://m.media-amazon.com/images/I/81drOrfKBBL._AC_UL640_FMwebp_QL65_.jpg'
        ],
        category: 'Men Grooming',
        description: [
          'Wahl professional-grade stainless steel groomer',
          'Lithium ion technology for extended battery life',
          'Self-sharpening precision blades',
          '12 attachment guides for versatile styling',
          '4 interchangeable heads for complete grooming',
          '3-hour runtime with 1-hour quick charge',
          'LED charging indicator',
          'Includes storage case and maintenance accessories'
        ]
      },
      {
        id: 28,
        name: 'Remington PG6025 All-in-One Grooming Kit',
        price: 2500,
        regularPrice: 2750,
        savings: 250,
        image: 'https://m.media-amazon.com/images/I/713nNKKCqqL._AC_UL640_FMwebp_QL65_.jpg',
        images: [
          'https://m.media-amazon.com/images/I/713nNKKCqqL._AC_UL640_FMwebp_QL65_.jpg'
        ],
        category: 'Men Grooming',
        description: [
          'Remington PG6025 all-in-one grooming kit',
          'Surgical steel blades for long-lasting sharpness',
          '8 attachments for full-body grooming',
          'Lithium power with 65 minutes runtime',
          'Washable attachments for easy cleaning',
          'Textured grip for secure handling',
          'Storage stand keeps all attachments organized',
          'Includes beard and stubble combs, ear and nose trimmer'
        ]
      },
      {
        id: 29,
        name: 'Panasonic ER-GB42 Beard and Hair Trimmer',
        price: 2100,
        regularPrice: 2300,
        savings: 200,
        image: 'https://m.media-amazon.com/images/I/51+wfG+U3jL._AC_UL640_FMwebp_QL65_.jpg',
        images: [
          'https://m.media-amazon.com/images/I/51+wfG+U3jL._AC_UL640_FMwebp_QL65_.jpg'
        ],
        category: 'Men Grooming',
        description: [
          'Panasonic ER-GB42 precision beard and hair trimmer',
          '19 length settings from 1mm to 10mm',
          'Sharp 45° angle blades for efficient cutting',
          'Washable design for easy maintenance',
          'Ergonomic grip for comfortable handling',
          'Rechargeable battery with 50 minutes runtime',
          'Charging indicator light',
          'Includes cleaning brush and AC adapter'
        ]
      },
      {
        id: 30,
        name: 'Philips Norelco OneBlade Hybrid Trimmer and Shaver',
        price: 1950,
        regularPrice: 2200,
        savings: 250,
        image: 'https://m.media-amazon.com/images/I/711EtP79nPL._AC_UL640_FMwebp_QL65_.jpg',
        images: [
          'https://m.media-amazon.com/images/I/711EtP79nPL._AC_UL640_FMwebp_QL65_.jpg'
        ],
        category: 'Men Grooming',
        description: [
          'Philips Norelco OneBlade hybrid electric trimmer and shaver',
          'Revolutionary technology for styling, trimming, and shaving',
          'Dual protection system for comfortable experience',
          'Replaceable blade lasts up to 4 months',
          'Three stubble combs (1mm, 3mm, 5mm)',
          'Wet and dry use for versatility',
          'Rechargeable NiMH battery with 45 minutes runtime',
          'LED charging indicator'
        ]
      },
      {
        id: 31,
        name: 'Conair Man Battery-Powered Ear and Nose Hair Trimmer',
        price: 950,
        regularPrice: 1100,
        savings: 150,
        image: 'https://24hours.pk/cdn/shop/products/97a7a8d0efdd6d24c98b9dbfb846f966_360x.jpg?v=1662555499',
        images: [
          'https://24hours.pk/cdn/shop/products/97a7a8d0efdd6d24c98b9dbfb846f966_360x.jpg?v=1662555499'
        ],
        category: 'Men Grooming',
        description: [
          'Conair Man dedicated ear and nose hair trimmer',
          'Innovative 3-blade cutting system',
          'Stainless steel blades for durability',
          'Rotary blade design for safe trimming',
          'Battery-powered for cordless convenience',
          'Compact design for travel and storage',
          'Washable for easy cleaning',
          'Includes protective cap and cleaning brush'
        ]
      }
    ],
    cart: [],
    checkoutInfo: {
      address: '',
      city: '',
      zipCode: '',
      country: '',
      phone: ''
    }
  },
  mutations: {
    ADD_TO_CART(state, { product, quantity }) {
      const existItem = state.cart.find(item => item.product.id === product.id)

      if (existItem) {
        existItem.quantity += quantity
      } else {
        state.cart.push({
          product,
          quantity
        })
      }
    },
    REMOVE_FROM_CART(state, productId) {
      state.cart = state.cart.filter(item => item.product.id !== productId)
    },
    UPDATE_CART_QUANTITY(state, { productId, quantity }) {
      const item = state.cart.find(item => item.product.id === productId)
      if (item) {
        item.quantity = quantity
      }
    },
    CLEAR_CART(state) {
      state.cart = []
    },
    SET_CHECKOUT_INFO(state, info) {
      state.checkoutInfo = info
    }
  },
  actions: {
    addToCart({ commit }, { product, quantity }) {
      commit('ADD_TO_CART', { product, quantity })
    },
    removeFromCart({ commit }, productId) {
      commit('REMOVE_FROM_CART', productId)
    },
    updateCartQuantity({ commit }, { productId, quantity }) {
      commit('UPDATE_CART_QUANTITY', { productId, quantity })
    },
    clearCart({ commit }) {
      commit('CLEAR_CART')
    },
    setCheckoutInfo({ commit }, info) {
      commit('SET_CHECKOUT_INFO', info)
    }
  },
  getters: {
    totalPrice: state => {
      return state.cart.reduce((total, item) => {
        return total + (item.product.price * item.quantity)
      }, 0)
    },
    cartItemCount: state => {
      return state.cart.reduce((count, item) => count + item.quantity, 0)
    },
    getProductById: state => id => {
      return state.products.find(product => product.id === parseInt(id))
    }
  }
})
