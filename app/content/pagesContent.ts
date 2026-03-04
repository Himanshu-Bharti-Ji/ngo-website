// app/content/pagesContent.ts
// Static content for all pages - edit here to update site content

import { NGO } from "./homeContent";

export const aboutContent = {
  hero: {
    image:
      "https://images.pexels.com/photos/6995216/pexels-photo-6995216.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop",
    title: "About Jan Vikas",
    subtitle:
      "A grassroots organisation from Bettiah, West Champaran, building a justice-based and self-reliant society since 1991.",
  },
  mission: {
    title: "Our Mission",
    text: "To fight inequality, casteism, superstition, unemployment, poverty and illiteracy, and to uphold the rights and dignity of the most marginalized communities.",
  },
  vision: {
    title: "Our Vision",
    text: "A self-reliant and liberated community where every person – irrespective of caste, gender or economic status – can live with justice, equality and human values.",
  },
  values: {
    title: "Our Core Identity",
    text: "Justice, equality, dignity, participation of the poor and marginalized, secular and inclusive approach, and deep commitment to grassroots social change.",
  },
  story: {
    title: "Our Story",
    paragraphs: [
      "Jan Vikas was established in 1991 at Bettiah (West Champaran, Bihar) by a group of awakened social activists who believed that lasting change begins with organised communities. From the beginning, the organisation has been committed to challenging deep‑rooted social evils and creating a society based on equality and moral values.",
      "Over more than 35 years of work, Jan Vikas has walked alongside children, youth, women, farmers, Dalit and minority communities and leprosy‑affected families. The organisation has focused on issues such as child protection, education of Dalit and minority girls, control of female foeticide, promotion of self‑help groups, sustainable agriculture and the rights of leprosy‑affected families.",
      "Today, Jan Vikas works primarily in the districts of West Champaran, East Champaran and Sitamarhi in Bihar, and in the Nepal‑bordering areas of Eastern Uttar Pradesh. With a small but committed team and strong community institutions, Jan Vikas continues to build a justice‑based, people‑centred development process.",
    ],
  },
  achievements: [
    "More than three decades of continuous work with children, women, farmers, Dalit and minority communities and leprosy‑affected families.",
    "Implementation of key child protection interventions such as CHILDLINE 1098 and Railway CHILDLINE at Narkatiyaganj Railway Station.",
    "Innovative work on control of female foeticide through the Kopal Project under the PNDT Act.",
    "Formation and strengthening of Self Help Groups (SHGs) with women, focusing on empowerment and skill development.",
    "Promotion of sustainable and low‑cost agriculture in Nepal‑bordering districts of Eastern Uttar Pradesh and Northern Bihar.",
  ],
};

export const whatWeDoContent = {
  hero: {
    image:
      "https://images.pexels.com/photos/7100371/pexels-photo-7100371.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop",
    title: "What We Do",
    subtitle:
      "Programmes rooted in child protection, women’s empowerment, sustainable agriculture and rights-based development.",
  },
  programs: [
    {
      key: "education",
      title: "Education & Child Protection",
      description:
        "Bridge course residential camps, learning centres and CHILDLINE interventions that protect children from abuse, child labour, trafficking and early marriage, while ensuring access to joyful education.",
      imageUrl:
        "https://images.pexels.com/photos/8500300/pexels-photo-8500300.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop",
    },
    {
      key: "healthcare",
      title: "Health, Gender & Leprosy Support",
      description:
        "Promotion of educational and health status of women and children, control of female foeticide (Kopal Project under the PNDT Act), and long‑term educational and social welfare support for leprosy‑affected families.",
      imageUrl:
        "https://images.pexels.com/photos/6646932/pexels-photo-6646932.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop",
    },
    {
      key: "community",
      title: "Governance, Rights & Community Institutions",
      description:
        "Strengthening Panchayati Raj institutions, Mahila Mandals, youth and community‑based organisations to claim rights, participate in local governance and safeguard children in distress.",
      imageUrl:
        "https://images.pexels.com/photos/8844781/pexels-photo-8844781.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop",
    },
    {
      key: "skills",
      title: "SHGs & Livelihood Skills",
      description:
        "Formation and nurturing of women’s Self Help Groups (SHGs), leadership development, and skill‑building for sustainable livelihoods and financial inclusion.",
      imageUrl:
        "https://images.pexels.com/photos/6647003/pexels-photo-6647003.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop",
    },
    {
      key: "family",
      title: "Support for Leprosy‑Affected Families",
      description:
        "Educational, social welfare and psycho‑social support for families affected by leprosy, addressing stigma, exclusion and long‑term rehabilitation.",
      imageUrl:
        "https://images.pexels.com/photos/7100371/pexels-photo-7100371.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop",
    },
    {
      key: "environment",
      title: "Sustainable Agriculture & Environment",
      description:
        "Revival of agriculture‑based livelihoods through scientific, area‑specific Packages of Practices (PoPs), organic manuring, composting, biogas and fruit tree plantation along bunds.",
      imageUrl:
        "https://images.pexels.com/photos/7750326/pexels-photo-7750326.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop",
    },
  ],
  programDetails: [
    {
      title: "Education & Child Protection",
      intro:
        "Education is central to breaking cycles of child marriage, child labour and exclusion. Jan Vikas focuses on Dalit and minority girls, children in distress and children from leprosy‑affected families:",
      items: [
        "Bridge Course Residential Camps and learning centres for school dropouts and out‑of‑school children.",
        "Child protection services through CHILDLINE 1098 and Railway CHILDLINE at Narkatiyaganj Railway Station.",
        "Joyful, activity‑based teaching and teacher training support.",
        "Education centres and special support for children from leprosy‑affected families.",
        "Community awareness on the importance of girls’ education.",
      ],
    },
    {
      title: "Health, Gender & Leprosy Support",
      intro:
        "Health and gender justice are closely linked. Our work focuses on women, children and families facing stigma and neglect:",
      items: [
        "Kopal Project – control of female foeticide under the PNDT Act through community monitoring and awareness.",
        "Promotion of women’s and children’s health through camps, counselling and linkages to public health services.",
        "Holistic educational and social welfare support for leprosy‑affected families.",
        "Reducing stigma and discrimination through door‑to‑door contact and community dialogue.",
        "Linkages with government schemes for health and social security.",
      ],
    },
    {
      title: "Livelihoods, SHGs & Sustainable Agriculture",
      intro:
        "Economic and ecological security go hand in hand in Jan Vikas’ work with farmers, women and landless families:",
      items: [
        "Formation and strengthening of women’s Self Help Groups (SHGs) and Mahila Mandals.",
        "Skill‑building and small enterprise promotion for women and youth.",
        "Revival of agriculture‑based livelihoods in Nepal‑bordering districts of Eastern Uttar Pradesh and Northern Bihar.",
        "Promotion of low‑cost, scientific and area‑specific agricultural Packages of Practices (PoPs).",
        "Organic manuring, composting, biogas promotion and fruit tree plantation for soil health and environmental conservation.",
      ],
    },
  ],
};

export const impactContent = {
  hero: {
    image:
      "https://images.pexels.com/photos/8472016/pexels-photo-8472016.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop",
    title: "Our Impact",
    subtitle: "Stories of change from West Champaran, East Champaran, Sitamarhi and neighbouring regions",
  },
  stats: [
    { number: "35+", label: "Years of grassroots work" },
    { number: "3", label: "Core districts in Bihar" },
    { number: "0.35", label: "Acres of community campus" },
    { number: "Many", label: "Community institutions nurtured" },
  ],
  stories: [
    {
      title: "From dropout to confident learner",
      icon: "award",
      text: "A Dalit girl from a remote village in West Champaran had dropped out of school and was at risk of early marriage. Through Jan Vikas’ Bridge Course Residential Camp, she re‑entered education in a child‑friendly environment. Today she is back in mainstream school and inspires other girls in her hamlet to continue their education.",
    },
    {
      title: "Child in distress finds safety",
      icon: "heart",
      text: "A runaway child reached Narkatiyaganj Railway Station frightened and alone. Railway CHILDLINE, run by Jan Vikas, intervened with care and protection, coordinated with stakeholders and safely reunited the child with his family, preventing trafficking and further harm.",
    },
    {
      title: "Women’s groups gain voice and income",
      icon: "trending",
      text: "Women from a leprosy‑affected colony, earlier excluded from village decisions, formed Self Help Groups with support from Jan Vikas. They began savings, accessed small loans, and started income‑generating activities. Over time, their confidence grew and their voices are now heard in Gram Sabha and Panchayat spaces.",
    },
    {
      title: "Low‑cost farming, better livelihoods",
      icon: "users",
      text: "Small and marginal farmers in Nepal‑bordering blocks of Eastern Uttar Pradesh and Northern Bihar were struggling with high input costs. Through Jan Vikas’ agriculture‑based livelihood revival project, they adopted scientific, area‑specific PoPs, organic manures and composting. Their costs reduced, soil health improved and farm incomes became more stable.",
    },
  ],
  byNumbers: {
    education: [
      "Bridge Course Residential Camps and learning centres for school‑dropout and out‑of‑school children.",
      "Special learning support for Dalit and minority girls to prevent child marriage and child labour.",
      "Education centres for children from leprosy‑affected families.",
      "Teacher support for joyful, activity‑based learning.",
    ],
    healthcare: [
      "Promotion of women’s and children’s health through health awareness and linkages to public services.",
      "Kopal Project interventions addressing female foeticide under the PNDT Act.",
      "Support and accompaniment to leprosy‑affected families in accessing treatment and entitlements.",
      "Community awareness on nutrition, hygiene and preventive health.",
    ],
    livelihood: [
      "Formation and strengthening of women’s SHGs and Mahila Mandals.",
      "Skill development and small enterprise promotion with women and youth.",
      "Revival of agriculture‑based livelihoods in Nepal‑bordering districts of Eastern Uttar Pradesh and Northern Bihar.",
      "Support for alternative livelihoods for leprosy‑affected and landless families.",
    ],
    community: [
      "Work focused in the districts of West Champaran, East Champaran and Sitamarhi (Bihar).",
      "Community‑based institutions such as SHGs, youth groups and issue‑based forums promoted.",
      "Training and accompaniment on Panchayati Raj, local governance and rights.",
      "Environmental conservation through tree plantation, composting and promotion of organic practices.",
    ],
  },
};

export const teamContent = {
  hero: {
    image:
      "https://images.pexels.com/photos/6646962/pexels-photo-6646962.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop",
    title: "Our Team",
    subtitle: "Led by experienced social activists with deep roots in the field",
  },
  members: [
    {
      name: "Mr. Abdul Majeed",
      position: "President, Jan Vikas",
      bio: "Mr. A. Majeed is a qualified and widely respected social worker with around 34 years of experience in education, economic planning, social organisation, integrated development and livelihood promotion. He has served as Programme Officer, Coordinator, Resource Person and Consultant with organisations such as IGSSS, NEG, D.K. Austria, Development Alternatives, PACS and SDTT. He leads Jan Vikas with a strong commitment to team work and result‑oriented grassroots action.",
    },
    {
      name: "Programme Coordination Team",
      position: "Child Protection & Education",
      bio: "A dedicated team of social workers and community organisers who run CHILDLINE 1098, Railway CHILDLINE, Bridge Course Residential Camps and learning centres for Dalit, minority and leprosy‑affected children.",
    },
    {
      name: "Women’s Collectives & SHG Team",
      position: "Women’s Empowerment & SHGs",
      bio: "Field animators and community leaders who facilitate Mahila Mandals and Self Help Groups, build leadership among women and strengthen their access to livelihoods and rights.",
    },
    {
      name: "Agriculture & Livelihood Team",
      position: "Sustainable Agriculture & Livelihoods",
      bio: "Staff and community resource persons who support farmers in adopting low‑cost, scientific agricultural practices, organic manuring and livelihood diversification.",
    },
    {
      name: "Community Organisers",
      position: "Governance & Rights",
      bio: "Grassroots leaders who accompany Panchayats, youth groups and community‑based institutions to participate in local governance and claim their rights.",
    },
    {
      name: "Support & Administration",
      position: "Finance, Administration & Documentation",
      bio: "Back‑end staff ensuring transparent use of resources, documentation, reporting and coordination with partners and networks.",
    },
  ],
  culture: [
    {
      title: "Compassion",
      icon: "heart",
      text: "We are driven by genuine care for the communities we serve. Every team member is committed to making a real difference.",
    },
    {
      title: "Excellence",
      icon: "eye",
      text: "We strive for excellence in all our programs and initiatives. Quality outcomes for our beneficiaries is our priority.",
    },
    {
      title: "Transparency",
      icon: "users",
      text: "We maintain complete transparency in our operations and financial management, building trust with all stakeholders.",
    },
  ],
};

export const galleryContent = {
  hero: {
    image:
      "https://images.pexels.com/photos/6995216/pexels-photo-6995216.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop",
    title: "Photo Gallery",
    subtitle: "Visual documentation of our programs and community impact",
  },
  images: [
    // cloudinary photos from the NGO collection
    {
      id: 1,
      src: NGO.bookDistribution,
      title: "Book distribution event",
      category: "Education",
      description: "Teachers and volunteers handing out books to children",
    },
    {
      id: 2,
      src: NGO.communityWorkshop,
      title: "Community workshop",
      category: "Community",
      description: "Local residents participating in a skills workshop",
    },
    {
      id: 3,
      src: NGO.farmVisit,
      title: "Farm visit",
      category: "Community",
      description: "Small farmers learning sustainable practices",
    },
    {
      id: 4,
      src: "https://images.pexels.com/photos/6995216/pexels-photo-6995216.jpeg?auto=compress&cs=tinysrgb&w=1000&h=700&fit=crop",
      title: "Education Program - Students in Classroom",
      category: "Education",
      description: "Children participating in our literacy program",
    },
    {
      id: 2,
      src: "https://images.pexels.com/photos/8472016/pexels-photo-8472016.jpeg?auto=compress&cs=tinysrgb&w=1000&h=700&fit=crop",
      title: "Health Camp Activity",
      category: "Healthcare",
      description: "Free medical check-up camp in rural village",
    },
    {
      id: 3,
      src: "https://images.pexels.com/photos/7100371/pexels-photo-7100371.jpeg?auto=compress&cs=tinysrgb&w=1000&h=700&fit=crop",
      title: "Community Gathering",
      category: "Community",
      description: "Village members at our community development event",
    },
    {
      id: 4,
      src: "https://images.pexels.com/photos/6647003/pexels-photo-6647003.jpeg?auto=compress&cs=tinysrgb&w=1000&h=700&fit=crop",
      title: "Skill Training Workshop",
      category: "Livelihood",
      description: "Women learning tailoring and vocational skills",
    },
    {
      id: 5,
      src: "https://images.pexels.com/photos/8500300/pexels-photo-8500300.jpeg?auto=compress&cs=tinysrgb&w=1000&h=700&fit=crop",
      title: "School Infrastructure Development",
      category: "Education",
      description: "New classroom built through our initiative",
    },
    {
      id: 6,
      src: "https://images.pexels.com/photos/6646932/pexels-photo-6646932.jpeg?auto=compress&cs=tinysrgb&w=1000&h=700&fit=crop",
      title: "Scholarship Distribution",
      category: "Education",
      description: "Distributing scholarships to deserving students",
    },
    {
      id: 7,
      src: "https://images.pexels.com/photos/8468470/pexels-photo-8468470.jpeg?auto=compress&cs=tinysrgb&w=1000&h=700&fit=crop",
      title: "Women Empowerment Drive",
      category: "Community",
      description: "Women beneficiaries of our programs",
    },
    {
      id: 8,
      src: "https://images.pexels.com/photos/7750326/pexels-photo-7750326.jpeg?auto=compress&cs=tinysrgb&w=1000&h=700&fit=crop",
      title: "Environmental Awareness",
      category: "Environment",
      description: "Tree plantation drive in community",
    },
    {
      id: 9,
      src: "https://images.pexels.com/photos/6646962/pexels-photo-6646962.jpeg?auto=compress&cs=tinysrgb&w=1000&h=700&fit=crop",
      title: "Children at Learning Center",
      category: "Education",
      description: "Happy children at our learning center",
    },
  ],
  categories: [
    {
      title: "Education",
      description:
        "Images from our education programs, learning centers, and scholarship distributions.",
    },
    {
      title: "Healthcare",
      description:
        "Health camps, medical services, and wellness initiatives across communities.",
    },
    {
      title: "Community",
      description:
        "Community gatherings, development projects, and village transformations.",
    },
  ],
};

export const mediaContent = {
  hero: {
    image:
      "https://images.pexels.com/photos/6646907/pexels-photo-6646907.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop",
    title: "Video Stories",
    subtitle: "Watch inspiring stories of change and community transformation",
  },
  videos: [
    {
      id: 1,
      title: "Education Transforms Lives",
      description:
        "A powerful story of how our education program changed the life of a village girl.",
      duration: "5:32",
      category: "Education",
      thumbnail: "https://img.youtube.com/vi/oaTgSHAWm7U/hqdefault.jpg",
      url: "https://www.youtube.com/embed/oaTgSHAWm7U",
    },
    {
      id: 2,
      title: "Health Camp Success Story",
      description:
        "Witness how a free health camp identified and treated critical health issues in a remote village.",
      duration: "4:15",
      category: "Healthcare",
      thumbnail: "https://img.youtube.com/vi/UE9UvT5ujyg/hqdefault.jpg",
      url: "https://www.youtube.com/embed/UE9UvT5ujyg",
    },
    {
      id: 3,
      title: "Community Empowerment Initiative",
      description:
        "Women from a village share their success stories of economic empowerment through our programs.",
      duration: "6:48",
      category: "Community",
      thumbnail: "https://img.youtube.com/vi/Air2xT8LJ2k/hqdefault.jpg",
      url: "https://www.youtube.com/embed/Air2xT8LJ2k",
    },
    {
      id: 4,
      title: "Skill Training - A Path to Success",
      description:
        "Meet the beneficiaries of our vocational training program who now run successful businesses.",
      duration: "5:12",
      category: "Livelihood",
      thumbnail: "https://img.youtube.com/vi/oqd5brlze7A/hqdefault.jpg",
      url: "https://www.youtube.com/embed/oqd5brlze7A",
    },
    {
      id: 5,
      title: "Annual Report 2023",
      description:
        "Our comprehensive annual report highlights the year's achievements and impact across communities.",
      duration: "8:45",
      category: "Organization",
      thumbnail: "https://img.youtube.com/vi/oaTgSHAWm7U/hqdefault.jpg",
      url: "https://www.youtube.com/embed/oaTgSHAWm7U",
    },
    {
      id: 6,
      title: "Environmental Awareness Drive",
      description:
        "Join us as we organize environmental conservation and awareness initiatives in villages.",
      duration: "4:32",
      category: "Environment",
      thumbnail: "https://img.youtube.com/vi/UE9UvT5ujyg/hqdefault.jpg",
      url: "https://www.youtube.com/embed/UE9UvT5ujyg",
    },
  ],
  videoCategories: [
    { title: "Education Stories", count: "8 Videos", description: "Stories of educational transformation and student success" },
    { title: "Healthcare Initiatives", count: "6 Videos", description: "Health camps and wellness programs in action" },
    { title: "Community Voices", count: "5 Videos", description: "Testimonials from community beneficiaries" },
  ],
};

export const newsContent = {
  hero: {
    image:
      "https://images.pexels.com/photos/6647003/pexels-photo-6647003.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop",
    title: "News & Updates",
    subtitle: "Stay informed about our latest programs and initiatives",
  },
  items: [
    { date: "2024-02-15", title: "500 Children Receive Scholarships", description: "We are proud to announce our latest scholarship batch benefiting 500 deserving children across rural India.", category: "Education" },
    { date: "2024-02-01", title: "Health Camp in 10 Villages", description: "Our comprehensive health camp reached 2,000 people in 10 villages, providing free medical check-ups and awareness.", category: "Healthcare" },
    { date: "2024-01-20", title: "Skill Training Graduates Get Jobs", description: "Proud moment! 300 graduates from our skill training program have secured employment with sustainable income.", category: "Livelihood" },
    { date: "2024-01-10", title: "New Learning Center Inaugurated", description: "We opened a new state-of-the-art learning center in Uttar Pradesh to serve 500+ children in the region.", category: "Education" },
    { date: "2023-12-25", title: "Community Festival Brings People Together", description: "Our annual community festival celebrated by 5,000+ people, strengthening bonds and building awareness.", category: "Community" },
    { date: "2023-12-10", title: "Women Empowerment Program Success", description: "Women from our program successfully started 50 micro-businesses, contributing to their family income.", category: "Livelihood" },
  ],
};

export const getInvolvedContent = {
  hero: {
    image:
      "https://images.pexels.com/photos/8468470/pexels-photo-8468470.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop",
    title: "Get Involved",
    subtitle: "Join us in making a real difference in communities across India",
  },
  donationImpact: [
    { amount: "₹100", text: "Provides meals for 5 children for a day" },
    { amount: "₹500", text: "Covers school supplies for one child for a month" },
    { amount: "₹2,000", text: "Medical check-up camp for 50 people" },
    { amount: "₹10,000", text: "One year scholarship for a deserving child" },
    { amount: "₹50,000", text: "Vocational training for 10 individuals" },
  ],
  volunteerOpportunities: [
    { title: "Education Support", text: "Teach, tutor, or facilitate learning programs in schools and centers." },
    { title: "Health Awareness", text: "Assist in health camps and awareness programs (medical knowledge helpful but not required)." },
    { title: "Community Projects", text: "Help in community development and infrastructure projects." },
    { title: "Administrative", text: "Support office operations, data management, and coordination." },
    { title: "Translation & Outreach", text: "Help with language support and community outreach activities." },
  ],
  partnershipTypes: [
    { title: "Corporate Partnerships", text: "CSR initiatives, employee volunteering programs, and resource sharing." },
    { title: "Educational Institutions", text: "Collaborate on research, student projects, and community engagement." },
    { title: "Healthcare Partners", text: "Hospitals and clinics for medical services and healthcare camps." },
    { title: "Government Agencies", text: "Collaborate on public health and development initiatives." },
  ],
};

export const contactContent = {
  hero: {
    image:
      "https://images.pexels.com/photos/6646932/pexels-photo-6646932.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop",
    title: "Contact Jan Vikas",
    subtitle: "Reach our team in Bettiah, West Champaran",
  },
  address: {
    line1: "Imli Chowk, Baswaria, P.O. Bettiah",
    city: "Dist. West Champaran, Bihar, India - 845438",
  },
  officeHours: {
    weekdays: "Monday - Saturday: 10:00 AM - 5:00 PM",
    saturday: "Saturday: 10:00 AM - 5:00 PM",
    sunday: "Sunday & public holidays: Closed",
  },
  formSubjects: ["Donation Inquiry", "Volunteer", "Program Information", "General Inquiry", "Other"],
};
