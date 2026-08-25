export type Project = {
  id: string
  title: string
  category: string
  year: string
  description: string
  longDescription: string
  tags: string[]
  image: string
  color: string
  links: {
    live?: string
    github?: string
  }
  features: string[]
  problem?: string
  solution?: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    id: "liberty",
    title: "Liberty",
    category: "Web Platform",
    year: "2024",
    description: "A modern platform built to deliver seamless digital experiences.",
    longDescription: "Liberty is a modern, high-performance web platform focused on clean architecture, responsive design and delightful micro-interactions. Built with Next.js and Tailwind, it demonstrates production-grade patterns for scalable SaaS.",
    tags: ["Next.js", "Tailwind CSS", "TypeScript", "Supabase"],
    image: "https://images.unsplash.com/photo-1559028006-448665bd9609?w=1200&q=80&auto=format&fit=crop",
    color: "from-violet-600 to-indigo-600",
    links: { live: "#", github: "#" },
    features: ["Server components", "Optimistic UI", "Auth & Roles", "Realtime with Supabase"],
    problem: "Need for a fast, modern marketing + product platform that feels premium.",
    solution: "Built a modular Next.js architecture with edge caching and supabase backend.",
    featured: true,
  },
  {
    id: "innoventory",
    title: "Innoventory",
    category: "AI / Inventory",
    year: "2023",
    description: "Product recognition and inventory management system using AI & Computer Vision.",
    longDescription: "Innoventory automates stock tracking via camera-based product recognition. Uses Python, Django, MySQL and OpenCV to detect products, update inventory and generate analytics.",
    tags: ["Python", "Django", "MySQL", "OpenCV"],
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&q=80&auto=format&fit=crop",
    color: "from-cyan-600 to-blue-600",
    links: { github: "#" },
    features: ["OpenCV detection", "Django REST APIs", "Inventory dashboard", "Stock alerts"],
    problem: "Manual inventory is error-prone and time-consuming for retail.",
    solution: "AI vision pipeline that identifies products from images and syncs to DB.",
    featured: true,
  },
  {
    id: "yourplatform",
    title: "YourPlatform",
    category: "SaaS Concept",
    year: "2024",
    description: "A SaaS platform for managing projects, customers and business growth.",
    longDescription: "YourPlatform explores multi-tenant SaaS patterns: billing, workspaces, dashboards and role-based access. Designed as a template for future products.",
    tags: ["Next.js", "PostgreSQL", "Tailwind", "Supabase"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80&auto=format&fit=crop",
    color: "from-fuchsia-600 to-purple-600",
    links: { live: "#", github: "#" },
    features: ["Multi-tenancy", "Stripe billing", "Analytics", "Team workspaces"],
    featured: true,
  },
  {
    id: "smart-estimator",
    title: "SmartBuild Estimator",
    category: "Full-Stack Tool",
    year: "2024",
    description: "Construction cost estimation tool with dynamic calculations.",
    longDescription: "A practical tool for contractors to estimate material & labor costs with real-time updates and printable reports.",
    tags: ["React", "Node.js", "MongoDB"],
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&q=80&auto=format&fit=crop",
    color: "from-emerald-600 to-teal-600",
    links: { github: "#" },
    features: ["Dynamic forms", "PDF export", "Cost breakdown", "Responsive"],
  },
]

export const moreProjects = projects
