// app/content/homeContent.ts

export const heroSlides = [
  {
    id: 1,
    image: "https://images.pexels.com/photos/6646907/pexels-photo-6646907.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
    eyebrow: "Education for every child",
    title: "Give every child\na fair chance.",
    subtitle: "Community learning centers, scholarships, and after-school programs reaching the most underserved corners of India.",
    primaryCta: { label: "Support education", href: "/get-involved" },
    secondaryCta: { label: "See our impact", href: "/impact" },
    badge: "10,000+ children educated",
  },
  {
    id: 2,
    image: "https://images.pexels.com/photos/6818005/pexels-photo-6818005.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
    eyebrow: "Healthcare that reaches everyone",
    title: "No family\nleft behind.",
    subtitle: "Mobile health camps and awareness drives bring essential care to remote villages that doctors never reach.",
    primaryCta: { label: "Fund a health camp", href: "/get-involved" },
    secondaryCta: { label: "View health stories", href: "/media" },
    badge: "50,000+ people treated",
  },
  {
    id: 3,
    image: "https://images.pexels.com/photos/8468470/pexels-photo-8468470.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
    eyebrow: "Women & livelihoods",
    title: "When women rise,\nvillages rise.",
    subtitle: "Self-help groups and skills training programs help women lead change — for themselves and entire communities.",
    primaryCta: { label: "Empower women", href: "/get-involved" },
    secondaryCta: { label: "Our community work", href: "/what-we-do" },
    badge: "3,000+ women trained",
  },
];

export const missionStrip = {
  title: "We stand with the most vulnerable communities.",
  description:
    "From remote villages to urban slums, Udaan Foundation partners with local leaders to create lasting change.",
  tags: ["Child education", "Primary healthcare", "Women & livelihoods"],
};

export const impactStats = [
  { number: "50,000+", label: "Lives impacted", icon: "heart" },
  { number: "500+", label: "Programs delivered", icon: "star" },
  { number: "120+", label: "Partner communities", icon: "map" },
  { number: "25+", label: "Years of service", icon: "calendar" },
];

export const services = [
  {
    key: "education",
    title: "Education",
    description:
      "Learning centers, after-school support, and scholarships to keep children in school and help them thrive.",
    imageUrl:
      "https://images.pexels.com/photos/8500300/pexels-photo-8500300.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&fit=crop",
  },
  {
    key: "healthcare",
    title: "Healthcare",
    description:
      "Mobile health camps, nutrition support, and awareness sessions that reach families where they are.",
    imageUrl:
      "https://images.pexels.com/photos/6646932/pexels-photo-6646932.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&fit=crop",
  },
  {
    key: "community",
    title: "Community Development",
    description:
      "Women's self-help groups, livelihood training, and local leadership for long-term sustainable change.",
    imageUrl:
      "https://images.pexels.com/photos/8844781/pexels-photo-8844781.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&fit=crop",
  },
];

// ── NEW: Featured story (large pull quote) ──
export const featuredStory = {
  quote: "I never thought a girl from our village could become a teacher. Udaan made me believe it was possible.",
  name: "Priya Kumari",
  detail: "Scholarship recipient, 2019 — now a primary school teacher in Rajasthan",
  image: "https://images.pexels.com/photos/6646907/pexels-photo-6646907.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
};

// ── NEW: Impact stories for rotating cards ──
export const impactStories = [
  {
    name: "Priya, 14",
    location: "Rajasthan",
    program: "Education",
    quote: "I read better than anyone in my class now. I want to become a doctor.",
    image: "https://images.pexels.com/photos/8500300/pexels-photo-8500300.jpeg?auto=compress&cs=tinysrgb&w=600&h=700&fit=crop",
  },
  {
    name: "Meera Devi, 32",
    location: "Uttar Pradesh",
    program: "Livelihood",
    quote: "My tailoring business now earns enough to send both my children to school.",
    image: "https://images.pexels.com/photos/6647003/pexels-photo-6647003.jpeg?auto=compress&cs=tinysrgb&w=600&h=700&fit=crop",
  },
  {
    name: "Ramesh, 55",
    location: "Madhya Pradesh",
    program: "Healthcare",
    quote: "The health camp found my diabetes early. I am healthy and now I help organize camps in my village.",
    image: "https://images.pexels.com/photos/8472016/pexels-photo-8472016.jpeg?auto=compress&cs=tinysrgb&w=600&h=700&fit=crop",
  },
  {
    name: "Sunita, 28",
    location: "Bihar",
    program: "Women's Empowerment",
    quote: "Through the self-help group I found my voice — and the courage to start my own enterprise.",
    image: "https://images.pexels.com/photos/7100371/pexels-photo-7100371.jpeg?auto=compress&cs=tinysrgb&w=600&h=700&fit=crop",
  },
];

// ── Photo wall: 10 images in a masonry-style grid ──
export const homeGalleryImages = [
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
    image: "https://images.pexels.com/photos/8500300/pexels-photo-8500300.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    href: "/news",
  },
  {
    date: "Feb 2024",
    category: "Healthcare",
    title: "Health camps reach 10 new villages in Madhya Pradesh",
    image: "https://images.pexels.com/photos/6646932/pexels-photo-6646932.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    href: "/news",
  },
  {
    date: "Jan 2024",
    category: "Livelihood",
    title: "300 skill training graduates secure employment",
    image: "https://images.pexels.com/photos/6647003/pexels-photo-6647003.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
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
];

// ── NEW: Testimonial from donor/volunteer ──
export const testimonials = [
  {
    text: "Visiting an Udaan learning center changed my perspective on what grassroots education can look like. These children are hungry to learn — they just need the tools.",
    name: "Arjun Mehta",
    role: "Corporate donor, Bangalore",
    image: "https://images.pexels.com/photos/6646962/pexels-photo-6646962.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
  },
  {
    text: "As a volunteer, I've seen how a single health camp can completely transform a community's relationship with preventive care. The impact is real and immediate.",
    name: "Dr. Sneha Joshi",
    role: "Medical volunteer, Mumbai",
    image: "https://images.pexels.com/photos/6646932/pexels-photo-6646932.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
  },
  {
    text: "My CSR team partnered with Udaan and we saw transparent fund utilization and genuine impact. Rare in this space.",
    name: "Ritu Sharma",
    role: "CSR Head, Delhi",
    image: "https://images.pexels.com/photos/8468470/pexels-photo-8468470.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
  },
];