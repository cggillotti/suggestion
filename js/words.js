const SUGGESTIONS = {
    words : [
        "A mysterious act of God's love",
        "A capable hand",
        "Toothpase",
        "Brut",
        "Great day",
        "Red Vines",
        "Papaya Dog",
        "Hoodoo",
        "On the rocks",
        "Mail Pouch",
        "Shake Hands With Danger",
        "Chirping",
        "Hidden films",
        "Front Row",
        "Egg Carton",
        "Hanging Ferns",
        "Decent Docent",
        "Complimentary Breakfast",
        "Wild Applause",
        "Vole",
        "Sailor Suit",
        "Pterodactyl",
        "Dilly Beans",
        "Viaducts",
        "Big Popcorn Tin",
        "Last scoop",
        "Airport",
        "Crown flung",
        "Bluebirds",
        "Nightlight",
        "Excuse Me Baby",
        "Nurse Joy",
        "Bag of Steaks",
        "Rise from the Swamp",
        "Gain Luster",
        "Wait in the Car",
        "Famously Late",
        "Piss River",
        "Friends of Mine",
        "How do you get the cups from up there?",
        "Born to rule",
        "Winning the game",
        "Losing the game",
        "Pay the toll",
        "Shack Rockin' Tonight",
        "Big Shot",
        "Baby it takes two",
        "Celebrate Joel Jones ",
        "Kissimmee FL ",
        "Dallas",
        "Parade Route",
        "Bunk Beds",
        "Merch Table",
        "Strawberry Jam",
        "Mixer",
        "Moving day",
        "Umbrella Rental",
        "A quartet of dipping sauces",
        "Brat",
        "Cauldren",
        "Lock out",
        "Cowboy on the Moon",
        "Family Recipe",
        "Rainbow Sprinkles ",
        "Lifeguard Chair",
        "Snack Bar",
        "Tan lines",
        "Spring Mix",
        "Dive Bar",
        "Cordial ",
        "Sunday Paper",
        "Dealer's Couch ",
        "Leftovers",
        "Tiny Burgers",
        "Board game shelf",
        "Library Card",
        "Roller Rink",
        "House show",
        "Job Fair",
        "Above ground pool",
        "Corked Wine",
        "Bleach ",
        "Rental Car Smell",
        "Hayride",
        "Bento Box",
        "At the chalet ",
        "Flood",
        "Air Freshener Tree",
        "Creek",
        "Portcullis ",
        "Juiced",
        "Cut in line",
        "High Visibility",
        "Cute Little Donkey",
        "Book Club",
        "Walmart Parking Lot",
        "State Forrest",
        "Bay Window",
        "Lobster Roll",
        "An authentic experience",
        "Bringer Show",
        "Tool Tightened",
        "Jammy Egg",
        "Impulse Buy",
        "Very Scary. Very.",
        "Meet After Mass",
        "Cookies for Sale",
        "Cozy Mystery",
        "Cruel Shoes",
        "Cow Town",
        "Planned Community",
        "Grand Prize",
        "Succulents",
        "Walk it off",
        "Gravy",
        "Turkey",
        "Hand Dryer ",
        "Coopers Rock WV",
        "Red Lentils",
        "Arc Welder",
        "Blast of Cold Air",
        "Honeysuckle",
        "Lapse in Judgement",
        "For the Table",
        "Bug Spray",
        "Waxed and Polished",
        "Heavenly Coincidence",
        "Some Friends of Mine",
        "Moody Fucker",
        "Scone",
        "Drag",
        "Clementine",
        "Mr. Horrible",
        "Rooting For You",
        "Thunderstorm",
        "Out of Service",
        "Instrument in storage",
        "Vinyl",
        "If We Wait",
        "Banquet ",
        "Graveyard Shift",
        "Gold Medallion",
        "Charming Face",
        "Slashed Last Night",
        "Watch Out"
        ],
places : ["Bus Stop",
    "Pizza Parlor",
    "Arcade",
    "Army Base",
    "Art Gallery",
    "Baseball Diamond",
    "Bat Cave",
    "Behind a Waterfall",
    "Brewery",
    "Car Wash",
    "Circus",
    "Clock Tower",
    "Cow Pasture",
    "Cyber Space",
    "Double Decker Bus",
    "Dungeon",
    "Elephant Graveyard",
    "Emergency Room",
    "Fire Station",
    "Gas Station",
    "Ghost Town",
    "Heaven",
    "Helicopter",
    "Jazz Club",
    "Junkyard",
    "Kick Boxing Studio",
    "Lost City",
    "Marina",
    "Meat Packing Plant",
    "No Man's Land",
    "An Oasis",
    "Ocean Floor",
    "Oil Rig",
    "Orchestra Pit",
    "Pier",
    "Pirate Ship",
    "Police Station",
    "Quick Sand Pit",
    "Rain Forrest",
    "Recording Studio",
    "The Red Carpet",
    "Roller Rink",
    "Shooting Range",
    "Slaughter House",
    "Space Station",
    "Submarine",
    "Super Market",
    "Swamp",
    "Sweat Shop",
    "Tree House",
    "University",
    "A Villa",
    "Veranda",
    "Vineyard",
    "Wildlife Reserve",
    "Bus Stop",
    "Coffee Shop",
    "Dive bar",
    "Theme Hotel",
    "Work Conference",
    "BBQ",
    "Anniversery Party",
    "Dogpark",
    "Coat Room",
    "Wine Bar",
    "Cafeteria",
    "Campsite",
    "High School",
    "Biodome",
    "Tanker",
    "Truck Stop",
    "Library",
    "Spice Store",
    "Woodshop",
    "Museum Backroom",
    "Artist Studio",
    "Underground Tunnel",
    "Cliffside",
    "Expensive Meal",
    "Airport Food Court",
    "Waiting Room",
    "Painting Class",
    "Bookstore",
    "Fairgrounds",
    "GoKart Track",
    "Chemical Warehouse",
    "Cousin's Place",
    "Basement",
    "Attic",
    "Master Bedroom",
    "Armory ",
    "Archery Range",
    "Ball Pit",
    "Factory Command Center",
    "Factory Line",
    "Farmers' Market",
    "Port",
    "Auction House",
    "Lake",
    "Creek",
    "White sand beach",
    "Volcano"
],
    jobs: ["Bus Driver","Conman",
    "Accountant",
    "Administrative Assistant",
    "Aeronautical & Aerospace Engineer",
    "Agricultural Inspector",
    "Air Crew Officer",
    "Air Traffic Controller",
    "Aircraft Mechanic",
    "Airport Administrator",
    "Ambulance Drivers",
    "Amusement Park Attendants",
    "Anesthesiologist (MD)",
    "Animal Breeder",
    "Animal Control Worker",
    "Animal Husbandry Worker Supervisor",
    "Animal Keepers and Groomers",
    "Animal Kennel Supervisor",
    "Animal Scientist",
    "Animal Trainer",
    "Animator",
    "Answering Service Operator",
    "Anthropology and Archeology Professor",
    "Aquarium Curator",
    "Architecture Professor",
    "Art Appraiser",
    "Art Director",
    "Art Therapist",
    "Art, Drama, and Music Professor",
    "Athletic Trainer",
    "ATM Machine Servicer",
    "Barback",
    "Bartender",
    "Camp Counselor ",
    "Fish Farmer",
    "Jester",
    "Land Surveyor",
    "Landscape Architect",
    "Landscape Contractor",
    "Lathe Operator",
    "Law Clerks",
    "Law Professor",
    "Legal Assistant",
    "Loan Officer",
    "Locomotive Engineers",
    "Mail Clerk",
    "Makeup Artists - Theatrical",
    "Manicurists and Pedicurists",
    "Marine Engineer",
    "Math Professor",
    "Meat Packers",
    "Mechanical Engineer",
    "Medical Examiner/Coroner",
    "Medical Photographer",
    "Mine Inspector",
    "Mining Engineer",
    "Model Maker",
    "Motion Picture Director",
    "Motion Picture Projectionist",
    "Motorboat Mechanic",
    "Motorcycle Mechanic",
    "Museum Curator",
    "Music Director",
    "Music Teacher",
    "Musical Instrument Tuner",
    "Newspaper Editor",
    "Newspaper/Magazines Writer",
    "Nuclear Engineer",
    "Office Clerk",
    "Ophthalmologist",
    "Oral and Maxillofacial Surgeons",
    "Order Clerk",
    "Ordinary Seamen",
    "Orthodontist",
    "Outdoor Education Teacher",
    "Overhead Door Installer",
    "Painter (Industrial)",
    "Park Naturalist",
    "Pest Control Workers",
    "Petroleum Engineer",
    "Pharmacy Technician",
    "Physical Education Instructor",
    "Physical Therapist",
    "Physics Professor",
    "Pilot (Airlines)",
    "Plastic Surgeon",

    "Plumber ",
    "Poets and Lyricists",
    "Police Artist",
    "Police Officer",
    "Political Scientist",
    "Mail Carriers",
    "Power Plant Operators",
    "Preschool Teacher",

    "Professional Athlete ",
    "Property Managers",
    "Psychiatrist (MD)",
    "Public Relations Specialist",
    "Quarry Worker",
    "Radar Technicians",
    "Radiation Therapists",
    "Radio & TV Announcer",
    "Radio Operators",
    "Radiologist",
    "Rail Yard Engineers",
    "Railroad Conductors",
    "Railroad Engineer",
    "Real Estate Broker",
    "Referee or Umpire",
    "Restaurant Manager",
    "Safety Inspector",
    "School Nurse",
    "Screen Writer",
    "Securities Broker",
    "Security Guard",
    "Server",
    "Set Designer",
    "Sewing Machine Operators",
    "Sheet Metal Workers",
    "Ship Builder",
    "Ship Carpenters and Joiners",
    "Ship Mate",
    "Ship Pilot",
    "Skin Care Specialists",
    "Soil Engineer",
    "Special Forces",
    "Special Forces Officers",
    "Speech Writer",
    "Sport Psychologist",
    "Sports Agent",
    "Sportswriter",
    "Stained Glass Artist",
    "Steel Workers",
    "Stress Analyst Engineer",
    "Structural Engineer",
    "Subway and Streetcar Conductor",
    "Surgeons",
    "Survey Researchers",
    "Surveying Technicians",
    "Switchboard Operator",
    "Systems Accountant",
    "Systems Analyst",
    "Tax Accountant",
    "Taxi Driver or Chauffeur",
    "Tour Guide",
    "Town Clerk",
    "Traffic Agent",
    "Travel Agent",
    "Travel Writer ",
    "Treasurer ",
    "Treatment Plant Operators",
    "Tree Trimmers and Pruners",
    "Truck Driver, Long Distance",
    "TV Producer",
    "Umpire",
    "Ushers and Lobby Attendants",
    "Vending Machine Mechanic",
    "Veterinarian",
    "Video Engineer",
    "Waiters and Waitresses",
    "Warehouse Stock Clerk",
    "Watch Repairers",
    "Weather Observer",
    "Web Art Director",
    "Wholesale Buyers",
    "Wildlife Biologist",
    "Wildlife Control Agent",
    "Writer /Author",
    "Zoo Veterinarian",
    "Zoologist",
    "Nurse",
    "Drug Dealer",
    "Babysitter",
    "Life Coach",
    "Yoga Instructor",
    "Outdoorsperson",
    "Classical Musician",
    "Wanderer",
    "Cartographer",
    "Dictionary Editor",
    "Test Proctor"

]
}