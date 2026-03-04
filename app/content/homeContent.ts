// app/content/homeContent.ts

export const NGO = {
  bookDistribution:
    "https://res.cloudinary.com/himanshubharti/image/upload/v1772623006/Jan%20Vikas/book-distribution.jpg",
  communityWorkshop:
    "https://res.cloudinary.com/himanshubharti/image/upload/v1772623007/Jan%20Vikas/community-workshop.jpg",
  childCircle:
    "https://res.cloudinary.com/himanshubharti/image/upload/v1772623007/Jan%20Vikas/child-circle.jpg",
  awarenessProgram:
    "https://res.cloudinary.com/himanshubharti/image/upload/v1772623007/Jan%20Vikas/awareness-program.jpg",
  farmVisit:
    "https://res.cloudinary.com/himanshubharti/image/upload/v1772623008/Jan%20Vikas/farm-visit.jpg",
  farmerField:
    "https://res.cloudinary.com/himanshubharti/image/upload/v1772623008/Jan%20Vikas/farmer-field.jpg",
};

// derived arrays for convenience
export const ngoActivities = [
  {
    key: "bookDistribution",
    label: "Book distribution",
    image: NGO.bookDistribution,
  },
  {
    key: "communityWorkshop",
    label: "Community workshop",
    image: NGO.communityWorkshop,
  },
  { key: "childCircle", label: "Child circle", image: NGO.childCircle },
  {
    key: "awarenessProgram",
    label: "Awareness program",
    image: NGO.awarenessProgram,
  },
  { key: "farmVisit", label: "Farm visit", image: NGO.farmVisit },
  { key: "farmerField", label: "Farmer field", image: NGO.farmerField },
];

export const heroSlides = [
  {
    id: 1,
    // use our own photo for hero background so it's specific to Jan Vikas work
    image: NGO.bookDistribution,
    eyebrow: "Children first",
    title: "Protect every child.\nKeep every girl in school.",
    subtitle:
      "Bridge Course Residential Camps, learning centres, CHILDLINE 1098 and Railway CHILDLINE protecting children in and around West Champaran.",
    primaryCta: { label: "Support our child work", href: "/get-involved" },
    secondaryCta: { label: "Know what we do", href: "/what-we-do" },
    badge: "Since 1991 in West Champaran",
  },
  {
    id: 2,
    image: NGO.awarenessProgram,
    eyebrow: "Women, health & dignity",
    title: "When women are\nhealthy and informed.",
    subtitle:
      "Kopal Project on female foeticide, health promotion and support to leprosy‑affected families so women and children can live with dignity.",
    primaryCta: { label: "Stand with women", href: "/get-involved" },
    secondaryCta: { label: "See our impact", href: "/impact" },
    badge: "Working with women’s groups",
  },
  {
    id: 3,
    image: NGO.farmVisit,
    eyebrow: "Farmers & the land",
    title: "Reviving agriculture‑based\nlivelihoods on the border.",
    subtitle:
      "Supporting small farmers in Nepal‑bordering districts of Eastern Uttar Pradesh and Northern Bihar with sustainable, low‑cost agriculture and SHG‑based livelihoods.",
    primaryCta: { label: "Support livelihoods", href: "/get-involved" },
    secondaryCta: { label: "Explore programmes", href: "/what-we-do" },
    badge: "Sustainable agriculture & SHGs",
  },
];

export const missionStrip = {
  title:
    "We stand with children, women, farmers and leprosy‑affected families.",
  description:
    "From Bettiah in West Champaran to neighbouring districts of Bihar and Eastern Uttar Pradesh, Jan Vikas works with the most marginalised communities for justice‑based development.",
  tags: [
    "Child protection & education",
    "Women’s health & rights",
    "Sustainable agriculture & SHGs",
  ],
};

export const impactStats = [
  { number: "1991", label: "Year Jan Vikas was founded", icon: "calendar" },
  { number: "35+", label: "Years of grassroots experience", icon: "star" },
  { number: "3", label: "Core districts in Bihar", icon: "map" },
  { number: "0.35", label: "Acres of community campus land", icon: "heart" },
];

export const services = [
  {
    key: "education",
    title: "Education & Child Protection",
    description:
      "Bridge Course Residential Camps, learning centres and CHILDLINE services that protect children from abuse, trafficking and child marriage while enabling learning.",
    // use book distribution image from cloudinary
    imageUrl: NGO.bookDistribution,
  },
  {
    key: "healthcare",
    title: "Women’s Health & Leprosy Support",
    description:
      "Promotion of women’s and children’s health, control of female foeticide through the Kopal Project, and long‑term support to leprosy‑affected families.",
    // awareness program photo represents health outreach
    imageUrl: NGO.awarenessProgram,
  },
  {
    key: "community",
    title: "Sustainable Agriculture & SHGs",
    description:
      "Women’s Self Help Groups, Mahila Mandals and small farmers adopting sustainable, low‑cost agriculture and strengthening local governance.",
    // farm visit image fits community & agriculture
    imageUrl: NGO.farmVisit,
  },
];

// ── NEW: Featured story (large pull quote) ──
export const featuredStory = {
  quote:
    "We started with a handful of committed people in Bettiah. Today, communities themselves lead the struggle for justice and dignity.",
  name: "Team Jan Vikas",
  detail: "Grassroots organisation based in West Champaran, Bihar",
  image:
    "https://images.pexels.com/photos/6646907/pexels-photo-6646907.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
};

// ── NEW: Impact stories for rotating cards ──
export const impactStories = [
  {
    name: "Priya, 14",
    location: "Rajasthan",
    program: "Education",
    quote:
      "I read better than anyone in my class now. I want to become a doctor.",
    image:
      "https://images.pexels.com/photos/8500300/pexels-photo-8500300.jpeg?auto=compress&cs=tinysrgb&w=600&h=700&fit=crop",
  },
  {
    name: "Meera Devi, 32",
    location: "Uttar Pradesh",
    program: "Livelihood",
    quote:
      "My tailoring business now earns enough to send both my children to school.",
    image:
      "https://images.pexels.com/photos/6647003/pexels-photo-6647003.jpeg?auto=compress&cs=tinysrgb&w=600&h=700&fit=crop",
  },
  {
    name: "Ramesh, 55",
    location: "Madhya Pradesh",
    program: "Healthcare",
    quote:
      "The health camp found my diabetes early. I am healthy and now I help organize camps in my village.",
    image:
      "https://images.pexels.com/photos/8472016/pexels-photo-8472016.jpeg?auto=compress&cs=tinysrgb&w=600&h=700&fit=crop",
  },
  {
    name: "Sunita, 28",
    location: "Bihar",
    program: "Women's Empowerment",
    quote:
      "Through the self-help group I found my voice — and the courage to start my own enterprise.",
    image:
      "https://images.pexels.com/photos/7100371/pexels-photo-7100371.jpeg?auto=compress&cs=tinysrgb&w=600&h=700&fit=crop",
  },
];

// ── Photo wall: 10 images in a masonry-style grid ──
export const homeGalleryImages = [
  // user-supplied images from Cloudinary (NGO activities)
  {
    src: NGO.bookDistribution,
    alt: "Book distribution event",
    label: "Book distribution",
    span: "col-span-2 row-span-2",
  },
  {
    src: NGO.communityWorkshop,
    alt: "Community workshop session",
    label: "Community workshop",
    span: "",
  },
  {
    src: NGO.childCircle,
    alt: "Child circle meeting",
    label: "Child circle",
    span: "",
  },
  {
    src: NGO.awarenessProgram,
    alt: "Health awareness program",
    label: "Awareness program",
    span: "",
  },
  {
    src: NGO.farmVisit,
    alt: "Participants on a farm visit",
    label: "Farm visit",
    span: "",
  },
  {
    src: NGO.farmerField,
    alt: "Farmers working in a field",
    label: "Farmer field",
    span: "",
  },
  {
    src: "https://images.pexels.com/photos/6995216/pexels-photo-6995216.jpeg?auto=compress&cs=tinysrgb&w=1000&h=700&fit=crop",
    alt: "Teacher supporting students in a rural classroom",
    label: "Rural classroom · Rajasthan",
    span: "col-span-2 row-span-2",
  },
  {
    src: "https://images.pexels.com/photos/7100371/pexels-photo-7100371.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
    alt: "Women attending a self-help group meeting",
    label: "Women self-help group",
    span: "",
  },
  {
    src: "https://images.pexels.com/photos/8472016/pexels-photo-8472016.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
    alt: "Health worker checking a child at outreach camp",
    label: "Village health camp",
    span: "",
  },
  {
    src: "https://images.pexels.com/photos/7750326/pexels-photo-7750326.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
    alt: "Volunteers planting trees with children",
    label: "Tree plantation drive",
    span: "",
  },
  {
    src: "https://images.pexels.com/photos/6647003/pexels-photo-6647003.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
    alt: "Children smiling in front of a learning center",
    label: "Community learning center",
    span: "",
  },
  {
    src: "https://images.pexels.com/photos/6646962/pexels-photo-6646962.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
    alt: "Volunteer talking to a child",
    label: "Child protection program",
    span: "",
  },
  {
    src: "https://images.pexels.com/photos/8500300/pexels-photo-8500300.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
    alt: "Classroom infrastructure support",
    label: "School infrastructure",
    span: "",
  },
  {
    src: "https://images.pexels.com/photos/8844781/pexels-photo-8844781.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
    alt: "Community development project",
    label: "Community development",
    span: "",
  },
  {
    src: "https://images.pexels.com/photos/8468470/pexels-photo-8468470.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
    alt: "Women empowerment drive",
    label: "Women empowerment",
    span: "",
  },
  // additional images from our cloudinary collection – more specific to Jan Vikas activities
  {
    src: NGO.bookDistribution,
    alt: "Book distribution event",
    label: "Book distribution",
    span: "",
  },
  {
    src: NGO.communityWorkshop,
    alt: "Community workshop",
    label: "Community workshop",
    span: "",
  },
  {
    src: NGO.childCircle,
    alt: "Child circle activity",
    label: "Child protection program",
    span: "",
  },
  {
    src: NGO.awarenessProgram,
    alt: "Health awareness program",
    label: "Awareness program",
    span: "",
  },
  {
    src: NGO.farmVisit,
    alt: "Farm visit with farmers",
    label: "Farm visit",
    span: "",
  },
  {
    src: NGO.farmerField,
    alt: "Farmer working field",
    label: "Farmer field",
    span: "",
  },
];

export const homeVideos = [
  {
    id: 1,
    title: "Education changes everything",
    label: "Education · Child rights",
    thumbnail: "https://img.youtube.com/vi/oaTgSHAWm7U/hqdefault.jpg",
    url: "https://www.youtube.com/embed/oaTgSHAWm7U",
  },
  {
    id: 2,
    title: "Clean water, healthy communities",
    label: "Health · Water & sanitation",
    thumbnail: "https://img.youtube.com/vi/UE9UvT5ujyg/hqdefault.jpg",
    url: "https://www.youtube.com/embed/UE9UvT5ujyg",
  },
  {
    id: 3,
    title: "Empowering women to lead",
    label: "Livelihood · Women empowerment",
    thumbnail: "https://img.youtube.com/vi/Air2xT8LJ2k/hqdefault.jpg",
    url: "https://www.youtube.com/embed/Air2xT8LJ2k",
  },
  {
    id: 4,
    title: "Community transformation stories",
    label: "Community · Long-term impact",
    thumbnail: "https://img.youtube.com/vi/oqd5brlze7A/hqdefault.jpg",
    url: "https://www.youtube.com/embed/oqd5brlze7A",
  },
];

// ── NEW: Latest news for homepage ──
export const homeNews = [
  {
    date: "Feb 2024",
    category: "Education",
    title: "500 children receive scholarships in latest batch",
    image:
      "https://images.pexels.com/photos/8500300/pexels-photo-8500300.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    href: "/news",
  },
  {
    date: "Feb 2024",
    category: "Healthcare",
    title: "Health camps reach 10 new villages in Madhya Pradesh",
    image:
      "https://images.pexels.com/photos/6646932/pexels-photo-6646932.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    href: "/news",
  },
  {
    date: "Jan 2024",
    category: "Livelihood",
    title: "300 skill training graduates secure employment",
    image:
      "https://images.pexels.com/photos/6647003/pexels-photo-6647003.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    href: "/news",
  },
];

// ── NEW: Scrolling photo strip ──
export const photoStrip = [
  "https://images.pexels.com/photos/6646907/pexels-photo-6646907.jpeg?auto=compress&cs=tinysrgb&w=500&h=350&fit=crop",
  "https://images.pexels.com/photos/8500300/pexels-photo-8500300.jpeg?auto=compress&cs=tinysrgb&w=500&h=350&fit=crop",
  "https://images.pexels.com/photos/6818005/pexels-photo-6818005.jpeg?auto=compress&cs=tinysrgb&w=500&h=350&fit=crop",
  "https://images.pexels.com/photos/8472016/pexels-photo-8472016.jpeg?auto=compress&cs=tinysrgb&w=500&h=350&fit=crop",
  "https://images.pexels.com/photos/7100371/pexels-photo-7100371.jpeg?auto=compress&cs=tinysrgb&w=500&h=350&fit=crop",
  "https://images.pexels.com/photos/8844781/pexels-photo-8844781.jpeg?auto=compress&cs=tinysrgb&w=500&h=350&fit=crop",
  "https://images.pexels.com/photos/6647003/pexels-photo-6647003.jpeg?auto=compress&cs=tinysrgb&w=500&h=350&fit=crop",
  "https://images.pexels.com/photos/6646962/pexels-photo-6646962.jpeg?auto=compress&cs=tinysrgb&w=500&h=350&fit=crop",
  "https://images.pexels.com/photos/7750326/pexels-photo-7750326.jpeg?auto=compress&cs=tinysrgb&w=500&h=350&fit=crop",
  "https://images.pexels.com/photos/8468470/pexels-photo-8468470.jpeg?auto=compress&cs=tinysrgb&w=500&h=350&fit=crop",
  // add cloudinary activity images for more specific content
  NGO.bookDistribution,
  NGO.communityWorkshop,
  NGO.childCircle,
  NGO.awarenessProgram,
  NGO.farmVisit,
  NGO.farmerField,
];

// ── NEW: Testimonial from donor/volunteer ──
export const testimonials = [
  {
    text: "Visiting a Jan Vikas learning centre in Bettiah changed my perspective on what grassroots education can look like. These children are hungry to learn — they just need the tools.",
    name: "Arjun Mehta",
    role: "Corporate donor, Bangalore",
    image:
      "https://images.pexels.com/photos/6646962/pexels-photo-6646962.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
  },
  {
    text: "As a volunteer, I've seen how a single health camp can completely transform a community's relationship with preventive care. The impact is real and immediate.",
    name: "Dr. Sneha Joshi",
    role: "Medical volunteer, Mumbai",
    image:
      "https://images.pexels.com/photos/6646932/pexels-photo-6646932.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
  },
  {
    text: "My CSR team partnered with Jan Vikas and we saw transparent fund utilization and genuine impact. Rare in this space.",
    name: "Ritu Sharma",
    role: "CSR Head, Delhi",
    image:
      "https://images.pexels.com/photos/8468470/pexels-photo-8468470.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
  },
];
