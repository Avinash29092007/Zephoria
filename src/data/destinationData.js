// src/data/destinationData.js

const destinationData = {
  madurai: {
    id: "madurai",
    name: "Madurai",
    state: "Tamil Nadu, India",

    tagline: "Where ancient culture meets living traditions.",

    description:
      "Madurai is one of South India's most important cultural destinations, known for its historic temples, traditional food, vibrant markets and rich Tamil heritage.",

    image:
      "https://images.unsplash.com/photo-1600100397608-f010b0c0f1f7?auto=format&fit=crop&w=1600&q=85",

    bestTime: "October – March",

    seasonDescription:
      "October to March is generally more comfortable for sightseeing. Temperatures are usually more suitable for walking around temples, markets and heritage areas.",

    crowdLevel: "Moderate",

    weather: "Comfortable mornings • Warm afternoons",

    travelTip:
      "Start sightseeing early in the morning to avoid stronger afternoon heat and larger crowds at popular attractions.",

    intercityTransportPerPerson: 700,

    foodPerPersonPerDay: 700,

    localTransportPerPersonPerDay: 350,

    activitiesPerPerson: 500,

    highlights: [
      {
        name: "Meenakshi Amman Temple",
        type: "Heritage & Temple",
        description:
          "The iconic temple complex is the heart of Madurai and one of the city's most important cultural landmarks.",
        tag: "Must Visit"
      },
      {
        name: "Thirumalai Nayakkar Palace",
        type: "History",
        description:
          "A historic palace known for its grand architecture, massive pillars and Indo-Saracenic design.",
        tag: "Popular"
      },
      {
        name: "Gandhi Memorial Museum",
        type: "Museum",
        description:
          "A museum that presents important parts of India's freedom movement and modern history.",
        tag: "Culture"
      },
      {
        name: "Vaigai River",
        type: "Nature & City",
        description:
          "An important part of Madurai's identity and a good place to understand the city's geography.",
        tag: "Local"
      }
    ],

    hiddenSpots: [
      {
        name: "Samanar Hills",
        description:
          "A rocky historical site associated with Jain heritage, caves and ancient inscriptions.",
        bestFor: "History • Photography • Quiet exploration",
        crowd: "Low–Moderate"
      },
      {
        name: "Keeladi",
        description:
          "An archaeological site near Madurai connected with discoveries related to ancient Tamil civilisation.",
        bestFor: "History • Archaeology • Learning",
        crowd: "Low–Moderate"
      },
      {
        name: "Azhagar Koyil",
        description:
          "A beautiful temple area surrounded by hills and greenery outside the busy city centre.",
        bestFor: "Culture • Nature • Photography",
        crowd: "Moderate"
      }
    ],

    hotels: [
      {
        name: "Heritage Comfort Stay",
        area: "Central Madurai",
        rating: 4.4,
        distance: "1.8 km from major attractions",
        price: 2800,
        rooms: [
          "Standard Room",
          "Deluxe Room",
          "Family Room"
        ],
        amenities: [
          "Wi-Fi",
          "Breakfast",
          "Air Conditioning",
          "Parking"
        ]
      },
      {
        name: "Temple View Residency",
        area: "Temple District",
        rating: 4.2,
        distance: "0.9 km from Meenakshi Temple",
        price: 3500,
        rooms: [
          "Deluxe Room",
          "Premium Room",
          "Family Suite"
        ],
        amenities: [
          "Wi-Fi",
          "Breakfast",
          "Restaurant",
          "Room Service"
        ]
      },
      {
        name: "Madurai Grand",
        area: "City Centre",
        rating: 4.6,
        distance: "3.2 km from Meenakshi Temple",
        price: 5200,
        rooms: [
          "Executive Room",
          "Premium Room",
          "Suite"
        ],
        amenities: [
          "Wi-Fi",
          "Breakfast",
          "Pool",
          "Restaurant"
        ]
      }
    ],

    dressGuide: [
      {
        activity: "Temple Visit",
        recommendation:
          "Traditional or modest clothing is recommended. Avoid very short or revealing clothing.",
        example: "Kurta + pants / Saree / Salwar / Long dress"
      },
      {
        activity: "City Sightseeing",
        recommendation:
          "Light and comfortable clothing works well during daytime sightseeing.",
        example: "Cotton shirt + trousers / T-shirt + comfortable pants"
      },
      {
        activity: "Outdoor Exploration",
        recommendation:
          "Choose breathable clothing and comfortable walking shoes.",
        example: "T-shirt + lightweight pants + walking shoes"
      }
    ],

    foods: [
      "Jigarthanda",
      "Madurai-style Parotta",
      "Kari Dosa",
      "Idli & Dosa",
      "Kothu Parotta",
      "South Indian Meals"
    ],

    localTransport: [
      "Auto",
      "City Bus",
      "Cab",
      "Rental Car"
    ]
  },

  munnar: {
    id: "munnar",
    name: "Munnar",
    state: "Kerala, India",

    tagline: "Tea gardens, misty hills and peaceful escapes.",

    description:
      "Munnar is a hill destination famous for tea plantations, mountain landscapes, cool weather, waterfalls and nature experiences.",

    image:
      "https://images.unsplash.com/photo-1593693411515-c20261bcad6e?auto=format&fit=crop&w=1600&q=85",

    bestTime: "September – March",

    seasonDescription:
      "The cooler months are generally comfortable for exploring viewpoints, tea plantations and outdoor attractions. Monsoon months can bring heavier rain and slippery roads.",

    crowdLevel: "Moderate",

    weather: "Cool mornings • Pleasant afternoons",

    travelTip:
      "Carry a light jacket because temperatures can feel considerably cooler than nearby cities.",

    intercityTransportPerPerson: 900,

    foodPerPersonPerDay: 800,

    localTransportPerPersonPerDay: 500,

    activitiesPerPerson: 1000,

    highlights: [
      {
        name: "Tea Gardens",
        type: "Nature",
        description:
          "Walk through the famous green tea plantations covering the hills around Munnar.",
        tag: "Must Visit"
      },
      {
        name: "Eravikulam National Park",
        type: "Wildlife",
        description:
          "A protected mountain landscape known for its biodiversity and scenic views.",
        tag: "Nature"
      },
      {
        name: "Mattupetty Dam",
        type: "Scenic",
        description:
          "A popular scenic location surrounded by hills and greenery.",
        tag: "Popular"
      },
      {
        name: "Top Station",
        type: "Viewpoint",
        description:
          "A high-altitude viewpoint offering expansive mountain scenery.",
        tag: "Photography"
      }
    ],

    hiddenSpots: [
      {
        name: "Kolukkumalai",
        description:
          "A high-altitude tea region known for dramatic mountain views and tea plantation experiences.",
        bestFor: "Sunrise • Photography • Nature",
        crowd: "Moderate"
      },
      {
        name: "Pothamedu View Point",
        description:
          "A quieter viewpoint surrounded by tea, coffee and cardamom plantations.",
        bestFor: "Sunset • Photography • Relaxation",
        crowd: "Low–Moderate"
      },
      {
        name: "Lockhart Gap",
        description:
          "A scenic mountain location offering dramatic valley views.",
        bestFor: "Nature • Road Trip • Photography",
        crowd: "Low"
      }
    ],

    hotels: [
      {
        name: "Munnar Valley Retreat",
        area: "Munnar Town",
        rating: 4.3,
        distance: "2.5 km from town centre",
        price: 3200,
        rooms: [
          "Standard Room",
          "Deluxe Room",
          "Valley View Room"
        ],
        amenities: [
          "Wi-Fi",
          "Breakfast",
          "Parking",
          "Restaurant"
        ]
      },
      {
        name: "Tea Garden Resort",
        area: "Tea Plantation Area",
        rating: 4.5,
        distance: "5 km from town centre",
        price: 4800,
        rooms: [
          "Garden Room",
          "Premium Room",
          "Cottage"
        ],
        amenities: [
          "Breakfast",
          "Garden",
          "Restaurant",
          "Bonfire"
        ]
      },
      {
        name: "Mountain Mist Luxury",
        area: "Munnar Hills",
        rating: 4.7,
        distance: "7 km from town",
        price: 7200,
        rooms: [
          "Premium Room",
          "Mountain Suite",
          "Luxury Cottage"
        ],
        amenities: [
          "Wi-Fi",
          "Breakfast",
          "Restaurant",
          "Mountain View"
        ]
      }
    ],

    dressGuide: [
      {
        activity: "Hill Sightseeing",
        recommendation:
          "Wear comfortable layered clothing because weather can change during the day.",
        example: "T-shirt + jacket + jeans + walking shoes"
      },
      {
        activity: "Rainy Weather",
        recommendation:
          "Carry a waterproof jacket or umbrella and shoes with good grip.",
        example: "Rain jacket + quick-dry pants + grip shoes"
      },
      {
        activity: "Tea Plantation",
        recommendation:
          "Choose comfortable clothes suitable for walking on uneven paths.",
        example: "Light shirt + cargo pants + walking shoes"
      }
    ],

    foods: [
      "Kerala Parotta",
      "Appam & Stew",
      "Puttu & Kadala Curry",
      "Kerala Meals",
      "Tea",
      "Fresh Cardamom Products"
    ],

    localTransport: [
      "Cab",
      "Rental Car",
      "Tourist Bus",
      "Auto"
    ]
  },

  jaipur: {
    id: "jaipur",
    name: "Jaipur",
    state: "Rajasthan, India",

    tagline: "Royal architecture, colourful markets and desert culture.",

    description:
      "Jaipur is known for royal palaces, forts, traditional crafts, colourful markets and Rajasthan's distinctive culture.",

    image:
      "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1600&q=85",

    bestTime: "October – March",

    seasonDescription:
      "The cooler season is generally more comfortable for exploring forts, markets and outdoor attractions. Summer afternoons can be very hot.",

    crowdLevel: "High at major attractions",

    weather: "Cool mornings • Warm afternoons",

    travelTip:
      "Start fort and outdoor sightseeing early and keep water with you during daytime travel.",

    intercityTransportPerPerson: 1500,

    foodPerPersonPerDay: 900,

    localTransportPerPersonPerDay: 450,

    activitiesPerPerson: 1200,

    highlights: [
      {
        name: "Amber Fort",
        type: "Fort",
        description:
          "A spectacular hill fort known for its architecture, courtyards and panoramic views.",
        tag: "Must Visit"
      },
      {
        name: "Hawa Mahal",
        type: "Architecture",
        description:
          "One of Jaipur's most recognisable landmarks with its distinctive pink facade.",
        tag: "Popular"
      },
      {
        name: "City Palace",
        type: "Royal Heritage",
        description:
          "A historic palace complex showcasing royal architecture and collections.",
        tag: "Culture"
      },
      {
        name: "Jantar Mantar",
        type: "Science & History",
        description:
          "A historic astronomical observation site featuring large-scale instruments.",
        tag: "Learning"
      }
    ],

    hiddenSpots: [
      {
        name: "Panna Meena Ka Kund",
        description:
          "A historic stepwell with geometric architecture near Amber Fort.",
        bestFor: "Photography • Architecture",
        crowd: "Moderate"
      },
      {
        name: "Garh Ganesh Temple",
        description:
          "A hilltop temple offering views across Jaipur.",
        bestFor: "Sunrise • City Views",
        crowd: "Low–Moderate"
      },
      {
        name: "Khazana Mahal",
        description:
          "A lesser-known architectural experience away from the busiest tourist routes.",
        bestFor: "Photography • Exploration",
        crowd: "Low"
      }
    ],

    hotels: [
      {
        name: "Pink City Residency",
        area: "Central Jaipur",
        rating: 4.3,
        distance: "2 km from city attractions",
        price: 3000,
        rooms: [
          "Standard Room",
          "Deluxe Room",
          "Family Room"
        ],
        amenities: [
          "Wi-Fi",
          "Breakfast",
          "Restaurant",
          "Parking"
        ]
      },
      {
        name: "Royal Heritage Stay",
        area: "Old Jaipur",
        rating: 4.6,
        distance: "1.5 km from major attractions",
        price: 5200,
        rooms: [
          "Heritage Room",
          "Premium Room",
          "Royal Suite"
        ],
        amenities: [
          "Breakfast",
          "Restaurant",
          "Room Service",
          "Heritage View"
        ]
      },
      {
        name: "Rajputana Palace",
        area: "Jaipur City",
        rating: 4.8,
        distance: "4 km from city centre",
        price: 8500,
        rooms: [
          "Executive Room",
          "Luxury Room",
          "Royal Suite"
        ],
        amenities: [
          "Wi-Fi",
          "Breakfast",
          "Pool",
          "Restaurant"
        ]
      }
    ],

    dressGuide: [
      {
        activity: "Fort & Palace Visit",
        recommendation:
          "Light breathable clothing with comfortable walking shoes works well.",
        example: "Cotton shirt + trousers + sneakers"
      },
      {
        activity: "Temple Visit",
        recommendation:
          "Modest clothing is recommended, especially around religious places.",
        example: "Kurta + pants / Long dress / Salwar"
      },
      {
        activity: "Market Exploration",
        recommendation:
          "Wear comfortable clothing because markets involve plenty of walking.",
        example: "Cotton T-shirt + trousers + comfortable shoes"
      }
    ],

    foods: [
      "Dal Baati Churma",
      "Ghewar",
      "Pyaaz Kachori",
      "Laal Maas",
      "Gatte Ki Sabzi",
      "Rajasthani Thali"
    ],

    localTransport: [
      "Auto",
      "Cab",
      "City Bus",
      "Metro"
    ]
  },

  varanasi: {
    id: "varanasi",
    name: "Varanasi",
    state: "Uttar Pradesh, India",

    tagline: "Ancient ghats, spiritual traditions and timeless streets.",

    description:
      "Varanasi is one of India's oldest living cities, famous for its ghats, temples, spiritual traditions, narrow streets and Ganga riverfront.",

    image:
      "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1600&q=85",

    bestTime: "October – March",

    seasonDescription:
      "The cooler months are generally more comfortable for walking through the old city and exploring the riverfront.",

    crowdLevel: "High around major ghats",

    weather: "Pleasant mornings • Warm afternoons",

    travelTip:
      "Early mornings are usually a better time for peaceful riverfront experiences before the busiest hours.",

    intercityTransportPerPerson: 1200,

    foodPerPersonPerDay: 750,

    localTransportPerPersonPerDay: 300,

    activitiesPerPerson: 600,

    highlights: [
      {
        name: "Dashashwamedh Ghat",
        type: "Riverfront",
        description:
          "One of the most famous ghats and an important location for the evening Ganga Aarti.",
        tag: "Must Visit"
      },
      {
        name: "Kashi Vishwanath Temple",
        type: "Temple",
        description:
          "One of the most important Shiva temples and a major pilgrimage destination.",
        tag: "Spiritual"
      },
      {
        name: "Assi Ghat",
        type: "Riverfront",
        description:
          "A popular ghat known for sunrise experiences and a lively atmosphere.",
        tag: "Popular"
      },
      {
        name: "Sarnath",
        type: "History",
        description:
          "A major Buddhist heritage site located outside central Varanasi.",
        tag: "Heritage"
      }
    ],

    hiddenSpots: [
      {
        name: "Manikarnika Ghat View Area",
        description:
          "A historically important area where visitors can understand the city's traditional relationship with the river.",
        bestFor: "Culture • History",
        crowd: "High"
      },
      {
        name: "Ramnagar Fort",
        description:
          "A historic fort across the Ganga offering a different perspective of the city.",
        bestFor: "History • Photography",
        crowd: "Moderate"
      },
      {
        name: "Kedar Ghat",
        description:
          "A colourful riverside ghat with a calmer atmosphere than some of the busiest locations.",
        bestFor: "Photography • Riverfront",
        crowd: "Moderate"
      }
    ],

    hotels: [
      {
        name: "Ganga View Residency",
        area: "Near Riverfront",
        rating: 4.3,
        distance: "1 km from major ghats",
        price: 3000,
        rooms: [
          "Standard Room",
          "River View Room",
          "Family Room"
        ],
        amenities: [
          "Wi-Fi",
          "Breakfast",
          "Restaurant",
          "River View"
        ]
      },
      {
        name: "Kashi Heritage House",
        area: "Old City",
        rating: 4.5,
        distance: "0.8 km from major ghats",
        price: 4500,
        rooms: [
          "Heritage Room",
          "Deluxe Room",
          "Premium Room"
        ],
        amenities: [
          "Breakfast",
          "Wi-Fi",
          "Restaurant",
          "Heritage Setting"
        ]
      },
      {
        name: "Ganga Luxury Retreat",
        area: "Varanasi",
        rating: 4.7,
        distance: "3.5 km from old city",
        price: 7000,
        rooms: [
          "Premium Room",
          "Executive Room",
          "Suite"
        ],
        amenities: [
          "Wi-Fi",
          "Breakfast",
          "Pool",
          "Restaurant"
        ]
      }
    ],

    dressGuide: [
      {
        activity: "Temple Visit",
        recommendation:
          "Modest and respectful clothing is recommended.",
        example: "Kurta + pants / Long dress / Salwar"
      },
      {
        activity: "Ghats",
        recommendation:
          "Wear comfortable clothing and footwear because the area involves walking and steps.",
        example: "Cotton shirt + lightweight pants + sandals"
      },
      {
        activity: "Morning Boat Ride",
        recommendation:
          "Carry a light layer during cooler mornings.",
        example: "Light shirt + jacket + comfortable pants"
      }
    ],

    foods: [
      "Kachori Sabzi",
      "Banarasi Tamatar Chaat",
      "Lassi",
      "Banarasi Paan",
      "Thandai",
      "Samosa"
    ],

    localTransport: [
      "Auto",
      "E-Rickshaw",
      "Cab",
      "Boat"
    ]
  }
};

export default destinationData;
