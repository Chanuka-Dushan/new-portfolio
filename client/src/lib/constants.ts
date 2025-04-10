export interface ProjectType {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  tags: string[];
  links: {
    icon: string;
    url: string;
  }[];
}

export const projects: ProjectType[] = [
  {
    id: 1,
    title: "Ecommex.one",
    description: "Woked as Fullstack Developer in this Project for 6 months",
    category: "Web",
    image: "/src/images/ecommex.png",
    tags: ["Php", "Node", "Express","Prisma","MySQL","Html","css","Javascript"],
    links: [
      { icon: "fas fa-link", url: "https://ecommex.one/user/view/index-en.php" }

    ]
  },
  {
    id: 2,
    title: "Ecommex Mobile App",
    description: "Mobile Application To Manage Ecommex Admin Dashboard.Worked As The Main Developer for this project",
    category: "Mobile",
    image: "/src/images/ecomMobile.png",
    tags: ["Flutter", "Socket.io", "Firebase"],
    links: [
      { icon: "fas fa-link", url: "https://ecommex.one/user/view/index-si.php" },

    ]
  },
  {
    id: 3,
    title: "WhatsApp Monitor",
    description: "Application for Monitoring Whatsapp Contacts and fetch data From labels anc categorized By Saved or unsaved manner",
    category: "Mobile",
    image: "/src/images/whatsappTrack.png",
    tags: ["Flutter", "Firebase"],
    links: [
      { icon: "fab fa-github", url: "https://github.com/Chanuka-Dushan/WhatsApp-Number-Tracker" }
    ]
  },
  {
    id: 4,
    title: "Hotel Reservation System For Weddings",
    description: "A modern Event management Website for wedding events.",
    category: "Web",
    image: "/src/images/hotelreserve.png",
    tags: ["Html", "Css", "Javascript","Jwt Auth","Mysql"],
    links: [

      { icon: "fab fa-github", url: "https://github.com/Chanuka-Dushan/Hotel-Reservation-Sytem-for-Weddings" }
    ]
  },


  {
    id: 5,
    title: "Easy Rent",
    description: "A weather forecasting app with beautiful visualizations and location-based alerts.",
    category: "Web",
    image: "/src/images/easyrent.png",
    tags: ["Mongo DB", "React", "Vite","Tailwind CSS","Node js","Express"],
    links: [

      { icon: "fab fa-github", url: "https://github.com/Chanuka-Dushan/EasyRent" }
    ]
  }
  // {
  //   id: 5,
  //   title: "RecipeHub",
  //   description: "A recipe sharing platform with social features and ingredient-based search.",
  //   category: "Web",
  //   image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80",
  //   tags: ["Vue.js", "Express", "PostgreSQL"],
  //   links: [
  //     { icon: "fas fa-link", url: "https://example.com/recipehub" },
  //     { icon: "fab fa-github", url: "https://github.com/example/recipehub" }
  //   ]
  // },
  // {
  //   id: 6,
  //   title: "CodeLearn",
  //   description: "An interactive learning platform for programming with hands-on exercises and real-time feedback.",
  //   category: "UI/UX",
  //   image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
  //   tags: ["React.js", "TypeScript", "GraphQL"],
  //   links: [
  //     { icon: "fas fa-link", url: "https://example.com/codelearn" },
  //     { icon: "fab fa-github", url: "https://github.com/example/codelearn" }
  //   ]
  // },

  // {
  //   id: 6,
  //   title: "PortfolioBuilder",
  //   description: "A web application that allows users to create professional portfolios with customizable templates.",
  //   category: "Web",
  //   image: "https://images.unsplash.com/photo-1539185441755-769473a23570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80",
  //   tags: ["Next.js", "Tailwind CSS", "Vercel"],
  //   links: [
  //     { icon: "fas fa-link", url: "https://example.com/portfoliobuilder" },
  //     { icon: "fab fa-github", url: "https://github.com/example/portfoliobuilder" }
  //   ]
  // },
  // {
  //   id: 9,
  //   title: "FinTrack",
  //   description: "A personal finance tracker with budget planning tools and expense visualization.",
  //   category: "UI/UX",
  //   image: "https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
  //   tags: ["Figma", "Adobe XD", "Prototype"],
  //   links: [
  //     { icon: "fas fa-link", url: "https://example.com/fintrack" },
  //     { icon: "fab fa-github", url: "https://github.com/example/fintrack" }
  //   ]
  // }
];
