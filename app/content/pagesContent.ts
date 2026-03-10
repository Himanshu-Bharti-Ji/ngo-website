// app/content/pagesContent.ts
// Static content for all pages - edit here to update site content

import { NGO } from "./ngoImages";

export const aboutContent = {
  hero: {
    image: NGO.childlineRecognition,
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
    image: NGO.childlineCommunityMeet,
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
      imageUrl: NGO.bookDistribution,
    },
    {
      key: "healthcare",
      title: "Health, Gender & Leprosy Support",
      description:
        "Promotion of educational and health status of women and children, control of female foeticide (Kopal Project under the PNDT Act), and long‑term educational and social welfare support for leprosy‑affected families.",
      imageUrl: NGO.awarenessProgram,
    },
    {
      key: "community",
      title: "Governance, Rights & Community Institutions",
      description:
        "Strengthening Panchayati Raj institutions, Mahila Mandals, youth and community‑based organisations to claim rights, participate in local governance and safeguard children in distress.",
      imageUrl: NGO.childlineCommunityMeet,
    },
    {
      key: "skills",
      title: "SHGs & Livelihood Skills",
      description:
        "Formation and nurturing of women’s Self Help Groups (SHGs), leadership development, and skill‑building for sustainable livelihoods and financial inclusion.",
      imageUrl: NGO.sewingTraining,
    },
    {
      key: "family",
      title: "Support for Leprosy‑Affected Families",
      description:
        "Educational, social welfare and psycho‑social support for families affected by leprosy, addressing stigma, exclusion and long‑term rehabilitation.",
      imageUrl: NGO.childlineRecognition,
    },
    {
      key: "environment",
      title: "Sustainable Agriculture & Environment",
      description:
        "Revival of agriculture‑based livelihoods through scientific, area‑specific Packages of Practices (PoPs), organic manuring, composting, biogas and fruit tree plantation along bunds.",
      imageUrl: NGO.farmVisit,
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
    image: NGO.sewingCertificates,
    title: "Our Impact",
    subtitle:
      "Stories of change from West Champaran, East Champaran, Sitamarhi and neighbouring regions",
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
    image: NGO.childlineSportsDay,
    title: "Our Team",
    subtitle:
      "Led by experienced social activists with deep roots in West Champaran",
  },
  president: {
    name: "Mr. Abdul Majeed",
    position: "President, Jan Vikas",
    image: NGO.communityWorkshop,
    highlight:
      "Founder and president of Jan Vikas with over 34 years of experience in social development.",
    bio: "Mr. Abdul Majeed is a qualified and widely respected social worker with around 34 years of experience in education, economic planning, social organisation, integrated development and livelihood promotion. He has served as Programme Officer, Coordinator, Resource Person and Consultant with organisations such as IGSSS, NEG, D.K. Austria, Development Alternatives, PACS and SDTT. He leads Jan Vikas with a strong commitment to team work and result‑oriented grassroots action.",
  },
  members: [
    {
      name: "Programme Coordination Team",
      position: "Child Protection & Education",
      bio: "Social workers and community organisers who run CHILDLINE 1098, Railway CHILDLINE, Bridge Course Residential Camps and learning centres for Dalit, minority and leprosy‑affected children.",
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
      text: "We are grounded in solidarity with children, women, farmers and leprosy‑affected families in our working areas.",
    },
    {
      title: "Field‑driven learning",
      icon: "eye",
      text: "Programmes are continuously refined based on field realities and community feedback from West Champaran and neighbouring districts.",
    },
    {
      title: "Transparency",
      icon: "users",
      text: "We maintain accountable and transparent systems to build trust with communities, partners and government institutions.",
    },
  ],
};

export const galleryContent = {
  hero: {
    image: NGO.bookDistribution,
    title: "Photo Gallery",
    subtitle: "Scenes from our work with children, women and farmers",
  },
  images: [
    {
      id: 1,
      src: NGO.bookDistribution,
      title: "Book distribution drive",
      category: "Education",
      description:
        "Books distributed to children from Dalit and minority communities at Jan Vikas learning centre in West Champaran.",
    },
    {
      id: 2,
      src: NGO.communityWorkshop,
      title: "Community workshop",
      category: "Community",
      description:
        "Village‑level meeting on local governance, rights and social issues with women and community leaders.",
    },
    {
      id: 3,
      src: NGO.childCircle,
      title: "Child circle",
      category: "Child Protection",
      description:
        "Children’s circle where boys and girls discuss safety, life skills and protection from abuse and trafficking.",
    },
    {
      id: 4,
      src: NGO.childCircle2,
      title: "Outdoor child circle",
      category: "Child Protection",
      description:
        "Childline team conducting an open‑air protection session with children under a tree in the village.",
    },
    {
      id: 5,
      src: NGO.awarenessProgram,
      title: "Awareness programme",
      category: "Health",
      description:
        "Mahila Mandal‑led awareness programme on health, hygiene and social issues at community hall.",
    },
    {
      id: 6,
      src: NGO.farmVisit,
      title: "Farm visit",
      category: "Livelihoods",
      description:
        "Exposure visit for small and marginal farmers to demonstration plots on improved agriculture practices.",
    },
    {
      id: 7,
      src: NGO.farmerField,
      title: "Farmer field support",
      category: "Livelihoods",
      description:
        "Jan Vikas staff guiding farmers on crop‑wise Package of Practices and low‑cost inputs in the field.",
    },
    {
      id: 8,
      src: NGO.sewingTraining,
      title: "Tailoring training",
      category: "Women",
      description:
        "Women learning sewing and tailoring at the Jan Vikas Silai Katai training centre to improve livelihoods.",
    },
    {
      id: 9,
      src: NGO.sewingCertificates,
      title: "Skill certification",
      category: "Women",
      description:
        "Participants receiving certificates after completing sewing and tailoring course supported by Jan Vikas.",
    },
    {
      id: 10,
      src: NGO.childlineRecognition,
      title: "Childline recognition",
      category: "Child Protection",
      description:
        "Childline Se Dosti celebration recognising community partners and volunteers for child protection efforts.",
    },
    {
      id: 11,
      src: NGO.childlineSportsDay,
      title: "Childline sports day",
      category: "Child Protection",
      description:
        "Children and Childline team taking part in sports and games to build confidence and teamwork.",
    },
    {
      id: 12,
      src: NGO.schoolSportsActivity,
      title: "School sports activity",
      category: "Education",
      description:
        "Children in school uniforms participating in physical activities supported by Jan Vikas.",
    },
    {
      id: 13,
      src: NGO.childrenArtActivity,
      title: "Children’s art class",
      category: "Education",
      description:
        "Children engaged in drawing and creative activities at Jan Vikas learning centre.",
    },
    {
      id: 14,
      src: NGO.girlsDrawingClass,
      title: "Girls drawing competition",
      category: "Education",
      description:
        "Girls taking part in drawing competition to encourage creativity and confidence.",
    },
    {
      id: 15,
      src: NGO.childlineCommunityMeet,
      title: "Childline community meet",
      category: "Child Protection",
      description:
        "Childline community meeting in decorated tent to spread awareness on 1098 helpline and child rights.",
    },
    {
      id: 16,
      src: NGO.govtOfficeMeeting,
      title: "Government coordination meeting",
      category: "Governance",
      description:
        "District‑level coordination meeting with government officials on child protection and related issues.",
    },
    {
      id: 17,
      src: NGO.dcpcReviewMeeting,
      title: "DCPC review meeting",
      category: "Governance",
      description:
        "District Child Protection Committee (DCPC) and Child Advisory Board review meeting with Jan Vikas team.",
    },
  ],
  categories: [
    {
      title: "Education",
      description:
        "Learning centres, Bridge Course camps, sports and creative activities for children and adolescents.",
    },
    {
      title: "Child Protection",
      description:
        "CHILDLINE outreach, child circles and community meetings on child rights and safety.",
    },
    {
      title: "Women & Livelihoods",
      description:
        "Mahila Mandals, tailoring trainings and livelihood initiatives led by women.",
    },
    {
      title: "Livelihoods & Agriculture",
      description:
        "Farm visits, demonstration plots and support to small farmers in border districts.",
    },
    {
      title: "Governance & Organisation",
      description:
        "Partnership meetings with government, DCPC reviews and the Jan Vikas team in action.",
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
    {
      title: "Education Stories",
      count: "8 Videos",
      description: "Stories of educational transformation and student success",
    },
    {
      title: "Healthcare Initiatives",
      count: "6 Videos",
      description: "Health camps and wellness programs in action",
    },
    {
      title: "Community Voices",
      count: "5 Videos",
      description: "Testimonials from community beneficiaries",
    },
  ],
};

export const newsContent = {
  hero: {
    image: NGO.childlineCommunityMeet,
    title: "News & Updates",
    subtitle: "Stories and updates from our work in Bihar and border districts",
  },
  items: [
    {
      date: "2024-02-20",
      title: "Bridge Course camps re‑enroll 120 children",
      description:
        "Bridge Course Residential Camps run by Jan Vikas in West Champaran supported 120 out‑of‑school children to rejoin nearby government schools at the start of the new academic year.",
      category: "Education",
      image: NGO.bookDistribution,
    },
    {
      date: "2024-02-10",
      title: "Health awareness camps held in 10 villages",
      description:
        "Under the Kopal Project, Mahila Mandals and Jan Vikas teams conducted mother‑child health and PNDT awareness sessions in 10 villages across West Champaran.",
      category: "Health",
      image: NGO.awarenessProgram,
    },
    {
      date: "2024-01-30",
      title: "Women complete sewing and tailoring training",
      description:
        "Women from Self Help Groups completed basic sewing and tailoring training at the Jan Vikas centre and received certificates to support their livelihood journey.",
      category: "Livelihoods",
      image: NGO.sewingCertificates,
    },
    {
      date: "2024-01-18",
      title: "Childline community meet strengthens child protection",
      description:
        "Childline and Railway CHILDLINE teams organised a community meeting with local leaders and parents to raise awareness on the 1098 helpline and child rights.",
      category: "Child Protection",
      image: NGO.childlineCommunityMeet,
    },
    {
      date: "2023-12-12",
      title: "Farmers visit demonstration plots on improved practices",
      description:
        "Small and marginal farmers from border blocks participated in exposure visits to demonstration plots showcasing crop‑wise PoPs and organic manuring.",
      category: "Livelihoods",
      image: NGO.farmVisit,
    },
    {
      date: "2023-11-25",
      title: "Review meetings held with district child protection bodies",
      description:
        "Jan Vikas took part in District Child Protection Committee and Child Advisory Board review meetings to share field learnings and strengthen coordination.",
      category: "Governance",
      image: NGO.dcpcReviewMeeting,
    },
  ],
};

export const getInvolvedContent = {
  hero: {
    image: NGO.dcpcReviewMeeting,
    title: "Get Involved",
    subtitle: "Join us in making a real difference in communities across India",
  },
  donationImpact: [
    { amount: "₹100", text: "Provides meals for 5 children for a day" },
    {
      amount: "₹500",
      text: "Covers school supplies for one child for a month",
    },
    { amount: "₹2,000", text: "Medical check-up camp for 50 people" },
    { amount: "₹10,000", text: "One year scholarship for a deserving child" },
    { amount: "₹50,000", text: "Vocational training for 10 individuals" },
  ],
  volunteerOpportunities: [
    {
      title: "Education Support",
      text: "Teach, tutor, or facilitate learning programs in schools and centers.",
    },
    {
      title: "Health Awareness",
      text: "Assist in health camps and awareness programs (medical knowledge helpful but not required).",
    },
    {
      title: "Community Projects",
      text: "Help in community development and infrastructure projects.",
    },
    {
      title: "Administrative",
      text: "Support office operations, data management, and coordination.",
    },
    {
      title: "Translation & Outreach",
      text: "Help with language support and community outreach activities.",
    },
  ],
  partnershipTypes: [
    {
      title: "Corporate Partnerships",
      text: "CSR initiatives, employee volunteering programs, and resource sharing.",
    },
    {
      title: "Educational Institutions",
      text: "Collaborate on research, student projects, and community engagement.",
    },
    {
      title: "Healthcare Partners",
      text: "Hospitals and clinics for medical services and healthcare camps.",
    },
    {
      title: "Government Agencies",
      text: "Collaborate on public health and development initiatives.",
    },
  ],
};

export const contactContent = {
  hero: {
    image: NGO.govtOfficeMeeting,
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
  formSubjects: [
    "General Inquiry",
    "Program Participation",
    "Partnership Opportunities",
    "Volunteer Interest",
    "Media & Press",
    "Other",
  ],
};
