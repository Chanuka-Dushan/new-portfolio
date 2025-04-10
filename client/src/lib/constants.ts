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
    title: "FitTrackr",
    description: "A fitness tracking mobile application with personalized workout plans and progress analytics.",
    category: "Mobile",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80",
    tags: ["React Native", "Firebase", "Redux"],
    links: [
      { icon: "fas fa-link", url: "https://example.com/fittrackr" },
      { icon: "fab fa-github", url: "https://github.com/example/fittrackr" }
    ]
  },
  {
    id: 2,
    title: "ShopEase",
    description: "A modern e-commerce platform with seamless checkout experience and inventory management.",
    category: "Web",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1630&q=80",
    tags: ["React.js", "Node.js", "MongoDB"],
    links: [
      { icon: "fas fa-link", url: "https://example.com/shopease" },
      { icon: "fab fa-github", url: "https://github.com/example/shopease" }
    ]
  },
  {
    id: 3,
    title: "TaskFlow",
    description: "A productivity application for task management with collaborative features and analytics.",
    category: "UI/UX",
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    tags: ["Flutter", "Firebase", "Figma"],
    links: [
      { icon: "fas fa-link", url: "https://example.com/taskflow" },
      { icon: "fab fa-github", url: "https://github.com/example/taskflow" }
    ]
  },
  {
    id: 4,
    title: "WeatherNow",
    description: "A weather forecasting app with beautiful visualizations and location-based alerts.",
    category: "Mobile",
    image: "https://images.unsplash.com/photo-1618788372246-79faff0c3742?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80",
    tags: ["Swift", "Weather API", "Core Location"],
    links: [
      { icon: "fas fa-link", url: "https://example.com/weathernow" },
      { icon: "fab fa-github", url: "https://github.com/example/weathernow" }
    ]
  },
  {
    id: 5,
    title: "RecipeHub",
    description: "A recipe sharing platform with social features and ingredient-based search.",
    category: "Web",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80",
    tags: ["Vue.js", "Express", "PostgreSQL"],
    links: [
      { icon: "fas fa-link", url: "https://example.com/recipehub" },
      { icon: "fab fa-github", url: "https://github.com/example/recipehub" }
    ]
  },
  {
    id: 6,
    title: "CodeLearn",
    description: "An interactive learning platform for programming with hands-on exercises and real-time feedback.",
    category: "UI/UX",
    image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    tags: ["React.js", "TypeScript", "GraphQL"],
    links: [
      { icon: "fas fa-link", url: "https://example.com/codelearn" },
      { icon: "fab fa-github", url: "https://github.com/example/codelearn" }
    ]
  },
  {
    id: 7,
    title: "ChatConnect",
    description: "A real-time messaging application with end-to-end encryption and group chat functionality.",
    category: "Mobile",
    image: "https://images.unsplash.com/photo-1557200134-90327ee9fafa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    tags: ["React Native", "Socket.io", "Redux"],
    links: [
      { icon: "fas fa-link", url: "https://example.com/chatconnect" },
      { icon: "fab fa-github", url: "https://github.com/example/chatconnect" }
    ]
  },
  {
    id: 8,
    title: "PortfolioBuilder",
    description: "A web application that allows users to create professional portfolios with customizable templates.",
    category: "Web",
    image: "https://images.unsplash.com/photo-1539185441755-769473a23570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80",
    tags: ["Next.js", "Tailwind CSS", "Vercel"],
    links: [
      { icon: "fas fa-link", url: "https://example.com/portfoliobuilder" },
      { icon: "fab fa-github", url: "https://github.com/example/portfoliobuilder" }
    ]
  },
  {
    id: 9,
    title: "FinTrack",
    description: "A personal finance tracker with budget planning tools and expense visualization.",
    category: "UI/UX",
    image: "https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    tags: ["Figma", "Adobe XD", "Prototype"],
    links: [
      { icon: "fas fa-link", url: "https://example.com/fintrack" },
      { icon: "fab fa-github", url: "https://github.com/example/fintrack" }
    ]
  }
];
