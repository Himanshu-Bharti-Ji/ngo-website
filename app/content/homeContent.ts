import { BookOpen, Heart, Sprout } from "lucide-react";
import { NGO } from "./ngoImages";

// derived arrays for convenience
export const ngoActivities = [
  {
    key: "bookDistribution",
    label: "Book distribution",
    image: NGO.bookDistribution,
    desc: "Distributing learning materials to children from Dalit, minority and leprosy‑affected families so they can continue schooling",
  },
  {
    key: "communityWorkshop",
    label: "Community workshop",
    image: NGO.communityWorkshop,
    desc: "Village‑level meetings on rights, health, agriculture and social issues for women, farmers and youth",
  },
  {
    key: "childCircle",
    label: "Child circle",
    image: NGO.childCircle2,
    desc: "Children’s groups where boys and girls learn about protection, life skills and leadership",
  },
  {
    key: "awarenessProgram",
    label: "Awareness program",
    image: NGO.childlineCommunityMeet,
    desc: "Campaigns on female foeticide, child marriage, health and hygiene led by Mahila Mandals and youth volunteers",
  },
  {
    key: "farmVisit",
    label: "Farm visit",
    image: NGO.farmVisit,
    desc: "Exposure visits for farmers to demonstration plots to learn scientific and organic farming practices",
  },
  {
    key: "farmerField",
    label: "Farmer field",
    image: NGO.farmerField,
    desc: "Field‑level support to farmers on crop planning, PoPs and low‑cost inputs",
  },
];

export const heroSlides = [
  {
    id: 1,
    // use our own photo for hero background so it's specific to Jan Vikas work
    image: NGO.bookDistribution,
    eyebrow: "Children first",
    title: "Protect every child.\nKeep every girl in school.",
    subtitle:
      "Bridge Course Residential Camps, community learning centres, CHILDLINE 1098 and Railway CHILDLINE at Narkatiyaganj Railway Station safeguard children in and around West Champaran from abuse, trafficking and early marriage while helping them stay in school",
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
      "Through the Kopal Project, Jan Vikas prevents female foeticide under the PNDT Act, improves women’s and children’s health, and supports leprosy‑affected families to live with dignity",
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
      "Jan Vikas works with small and marginal farmers in Nepal‑bordering districts of Eastern Uttar Pradesh and Northern Bihar to promote scientific, area‑specific agricultural PoPs, organic manuring and SHG‑based livelihoods that reduce the cost of cultivation",
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
      "Bridge Course Residential Camps, learning centres and CHILDLINE services for out‑of‑school and at‑risk children, helping them return to school and stay protected from abuse, trafficking and child marriage",
    // use book distribution image from cloudinary
    imageUrl: NGO.bookDistribution,
    footerLabel: "Education",
    Icon: BookOpen,
  },
  {
    key: "healthcare",
    title: "Women’s Health & Leprosy Support",
    description:
      "Promotion of women’s and children’s health, control of female foeticide through the Kopal Project, and long‑term support to leprosy‑affected families.",
    // awareness program photo represents health outreach
    imageUrl: NGO.awarenessProgram,
    footerLabel: "Healthcare",
    Icon: Heart,
  },
  {
    key: "community",
    title: "Sustainable Agriculture & SHGs",
    description:
      "Women’s Self Help Groups, Mahila Mandals and small farmers adopt sustainable, low‑cost agriculture, use crop‑wise PoPs and strengthen local governance institutions",
    // farm visit image fits community & agriculture
    imageUrl: NGO.farmVisit,
    footerLabel: "Community",
    Icon: Sprout,
  },
];

// ── NEW: Featured story (large pull quote) ──
export const featuredStory = {
  quote:
    "We began in 1991 with a small team in Bettiah. Today, women’s groups, children’s collectives and farmers’ organizations themselves lead the struggle for justice and dignity",
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
  {
    src: NGO.bookDistribution,
    alt: "NGO volunteers distributing books to children",
    label: "Book distribution drive",
    span: "col-span-2 row-span-2",
  },
  {
    src: NGO.communityWorkshop,
    alt: "Community development workshop with villagers",
    label: "Community workshop",
    span: "",
  },
  {
    src: NGO.childCircle,
    alt: "Child protection circle where children learn about safety and leadership",
    label: "Child protection circle",
    span: "",
  },
  {
    src: NGO.awarenessProgram,
    alt: "Health and social awareness program",
    label: "Mahila Mandal awareness meet",
    span: "col-span-2",
  },
  {
    src: NGO.farmVisit,
    alt: "NGO team visiting farmers for field support",
    label: "Farmer field visit",
    span: "",
  },
  {
    src: NGO.farmerField,
    alt: "Farmers working in agricultural field",
    label: "Sustainable farming plot",
    span: "",
  },
  {
    src: NGO.childlineRecognition,
    alt: "Recognition ceremony for Childline community partners",
    label: "Childline recognition",
    span: "row-span-2",
  },
  {
    src: NGO.sewingTraining,
    alt: "Women learning tailoring in vocational training",
    label: "Tailoring training class",
    span: "row-span-2",
  },
  {
    src: NGO.sewingCertificates,
    alt: "Women receiving sewing training certificates",
    label: "Skill certificates",
    span: "col-span-2",
  },
  {
    src: NGO.childlineCommunityMeet,
    alt: "Community meeting organized under Childline initiative",
    label: "Childline village meet",
    span: "col-span-2",
  },
  {
    src: NGO.schoolSportsActivity,
    alt: "School children performing physical activities",
    label: "School sports activity",
    span: "col-span-2",
  },
  {
    src: NGO.childlineSportsDay,
    alt: "Childline team and children celebrating sports day",
    label: "Childline sports day",
    span: "col-span-2",
  },
  {
    src: NGO.childCircle2,
    alt: "Child protection discussion circle under tree",
    label: "Outdoor child circle",
    span: "row-span-2",
  },
  {
    src: NGO.girlsDrawingClass,
    alt: "Girls participating in drawing competition",
    label: "Girls drawing class",
    span: "row-span-2",
  },
  {
    src: NGO.childrenArtActivity,
    alt: "Children drawing and doing art activities in classroom",
    label: "Children art activity",
    span: "col-span-2 row-span-2",
  },
  {
    src: NGO.govtOfficeMeeting,
    alt: "Government office coordination meeting for child welfare",
    label: "Govt coordination meet",
    span: "col-span-2 row-span-2",
  },
  {
    src: NGO.dcpcReviewMeeting,
    alt: "District Child Protection Committee review meeting",
    label: "DCPC review meeting",
    span: "col-span-2 row-span-2",
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
    title: "Bridge Course camps re‑enroll 120 out‑of‑school children",
    summary:
      "Bridge Course Residential Camps in West Champaran helped 120 children rejoin nearby government schools this academic year.",
    image: NGO.bookDistribution,
    href: "/news",
  },
  {
    date: "Feb 2024",
    category: "Health",
    title: "Health awareness camps in 10 villages",
    summary:
      "Kopal Project teams organised mother‑child health and PNDT awareness sessions with Mahila Mandals across 10 villages of West Champaran.",
    image: NGO.awarenessProgram,
    href: "/news",
  },
  {
    date: "Jan 2024",
    category: "Livelihoods",
    title: "Women complete sewing and tailoring training",
    summary:
      "Women from SHGs at the Jan Vikas training centre received certificates in basic sewing, opening up new livelihood options.",
    image: NGO.sewingCertificates,
    href: "/news",
  },
];

// ── NEW: Scrolling photo strip ──
export const photoStrip = [
  NGO.bookDistribution,
  NGO.sewingCertificates,
  NGO.childCircle2,
  NGO.communityWorkshop,
  NGO.sewingTraining,
  NGO.childlineSportsDay,
  NGO.schoolSportsActivity,
  NGO.childlineCommunityMeet,
  NGO.childCircle,
  NGO.girlsDrawingClass,
  NGO.childrenArtActivity,
  NGO.awarenessProgram,
  NGO.farmVisit,
  NGO.farmerField,
  NGO.childlineRecognition,
  NGO.govtOfficeMeeting,
  NGO.dcpcReviewMeeting,
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
