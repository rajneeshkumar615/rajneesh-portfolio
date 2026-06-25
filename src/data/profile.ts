export const profile = {
  name: "Rajneesh Kumar",
  role: "Full Stack Engineer",
  tagline: "Engineering secure web systems",
  location: "Lucknow, Uttar Pradesh, India",
  email: "kumarajneesh008@gmail.com",
  phone: "+91-6388860757",
  links: {
    github: "https://github.com/rajneeshkumar615",
    linkedin: "https://www.linkedin.com/in/rajneesh-kumar615/",
    leetcode: "https://leetcode.com/u/Rajneesh_Kumar615/",
    gfg: "https://www.geeksforgeeks.org/profile/uchihaitacipvy",
  },
  summary:
    "Building secure, scalable web applications with modern JavaScript technologies — JWT authentication, RBAC, AWS, and the MERN stack. Currently pursuing a BCA and building production-grade software, backed by 500+ solved DSA problems and strong CS fundamentals.",
};

export const stats = [
  { label: "Features Built",  value: 8,   suffix: "+" },
  { label: "REST APIs",       value: 10,  suffix: "+" },
  { label: "DSA Problems",    value: 500, suffix: "+" },
  { label: "Internships",     value: 2,   suffix: "" },
];

export const about = {
  eyebrow: "About",
  heading: "Backend-focused engineer who thinks in systems.",
  paragraphs: [
    "Most engineers think about features. I think about what happens when a feature breaks under real load, receives malformed input, or gets hit by a user who shouldn't have access. That concern — designing for the failure case first — is where backend engineering actually lives.",
    "My work centers on API design, authentication, authorization, and the database decisions that determine whether an application scales gracefully or collapses under its own weight. I've built JWT-based auth systems that verify at the boundary rather than per-route, RBAC middleware where new roles are configuration rather than new code, and MongoDB indexing strategies derived from real query profiles instead of guesswork.",
    "I care about production ownership — not just writing the code, but understanding the deployment pipeline that ships it, the infrastructure that runs it, and the observability that tells you when something is wrong. A feature that can't be deployed reliably isn't finished.",
    "I'm currently pursuing a BCA while building production-grade software. The two aren't at odds — the coursework covers the theory, and the systems I build are where the theory meets real constraints.",
  ],
  focusAreas: [
    "Authentication & authorization (JWT, RBAC, Passport.js, sessions)",
    "API design and REST architecture",
    "Database design & query performance (MongoDB, SQL)",
    "Deployment pipelines, CI/CD, containerization",
    "Security-first backend engineering",
    "Full-stack ownership from schema to production",
  ],
};

export const experience = [
  {
    id: "sipher",
    company: "Sipher Web Private Limited",
    role: "Full Stack Developer Intern",
    location: "Lucknow, UP",
    start: "Jun 2025",
    end: "Jul 2025",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB"],
    points: [
      "Developed 8+ full-stack features end to end, delivering modular REST APIs and reusable frontend components for scalable application development.",
      "Optimized feed and pagination workflows through MongoDB compound indexing and React rendering improvements, cutting redundant database operations and improving responsiveness.",
    ],
  },
  {
    id: "nielit",
    company: "NIELIT Lucknow · Govt. of India",
    role: "Artificial Intelligence Intern",
    location: "Lucknow, UP",
    start: "Jun 2024",
    end: "Aug 2024",
    stack: ["Python", "scikit-learn", "Pandas"],
    points: [
      "Built and evaluated supervised machine learning models, applying cross-validation and performance metrics to compare classification approaches.",
      "Prepared training datasets through preprocessing, feature transformation, and normalization pipelines.",
    ],
  },
];

export const projects = [
  {
    id: "zarrin-blogs",
    name: "Zarrin Blogs",
    year: "2025",
    tagline: "Full-stack blogging platform with JWT auth and RBAC.",
    description:
      "A content platform exposing 10+ REST APIs for content management, engagement, search, and category-based discovery — with Docker-containerized deployment and role-based moderation.",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Redux", "Docker", "AWS", "CI/CD"],
    highlights: [
      "JWT authentication verified at the API boundary, not per individual route",
      "RBAC middleware where admin/user permissions are data — new roles require no code changes",
      "Docker-containerized API with CI/CD pipeline through GitHub Actions",
      "Redux state architecture separating server-derived and local UI state",
    ],
    screenshots: ["Admin Dashboard", "Blog Feed", "Authentication Flow"],
    link: "/projects/zarrin-blogs",
    repo: "https://github.com/rajneeshkumar615/Zarrin-Blogs",
    live: "https://zarrin-blogs.vercel.app/",
  },
  {
    id: "staynest",
    name: "StayNest",
    year: "2024",
    tagline: "Property rental platform — MVC, session auth, Cloudinary media pipeline.",
    description:
      "A full-stack rental platform built with MVC architecture, session-based authentication via Passport.js, ownership-verified authorization, and a Cloudinary media pipeline through Multer.",
    stack: ["Node.js", "Express.js", "MongoDB Atlas", "Passport.js", "Cloudinary", "Multer", "EJS"],
    highlights: [
      "Passport.js session authentication with server-side state for secure login flows",
      "Ownership verification middleware — hosts can only modify listings they created",
      "Multer → Cloudinary pipeline with signed uploads and CDN-backed delivery",
      "MVC architecture: clean separation of routes, controllers, and models",
    ],
    screenshots: ["Desktop View", "Mobile View", "Listing Detail"],
    link: "/projects/staynest",
    repo: "https://github.com/rajneeshkumar615/StayNest",
    live: "https://stay-nest-psi.vercel.app/listings",
  },
];

export const github = {
  username: "rajneeshkumar615",
};

export const engineeringHighlights = [
  {
    id: "jwt-auth",
    title: "JWT authentication across 10+ API routes",
    detail:
      "Implemented stateless access + refresh token authentication with middleware-level verification at the API boundary — one middleware, every route, zero duplication.",
  },
  {
    id: "rbac",
    title: "Role-based access control for admin/user workflows",
    detail:
      "Designed authorization as data, not branching logic. New roles are a config change, not a code change. Admin and user permission surfaces are fully separated.",
  },
  {
    id: "passport",
    title: "Passport.js session authentication on StayNest",
    detail:
      "Server-side session auth via Passport.js with ownership-scoped middleware — a host can only modify listings they created, enforced at the route level.",
  },
  {
    id: "indexing",
    title: "MongoDB query optimization with compound indexes",
    detail:
      "Profiled real access patterns on a high-traffic feed and designed compound indexes aligned to the actual query shape — not indexed fields in isolation.",
  },
  {
    id: "docker",
    title: "Dockerized API for consistent environments",
    detail:
      "Containerized the Zarrin Blogs API service — same build locally, same build in CI, same build in production. No environment-specific surprises.",
  },
  {
    id: "cicd",
    title: "CI/CD pipeline via GitHub Actions",
    detail:
      "Automated build, lint, and deploy steps so every push to main goes through the same process. Failed checks block deployment.",
  },
  {
    id: "cloudinary",
    title: "Cloudinary media pipeline via Multer",
    detail:
      "Multer handles multipart parsing server-side before forwarding to Cloudinary for processing and CDN delivery. Only the resulting URL touches MongoDB.",
  },
  {
    id: "aws",
    title: "AWS-backed cloud deployment infrastructure",
    detail:
      "Cloud-backed hosting with environment-separated config, no secrets in source control, and infrastructure designed around what breaks in production — not what works in development.",
  },
  {
    id: "rest",
    title: "20+ resource-oriented REST APIs",
    detail:
      "Designed endpoints around resources not actions, with public read/authenticated write boundaries enforced at the route level, not scattered through handler logic.",
  },
  {
    id: "ownership",
    title: "Authorization middleware for ownership verification",
    detail:
      "Ownership checks run as middleware before any mutation handler — a user can only modify resources they created. Enforced once, consistently, across all protected routes.",
  },
  {
    id: "deployment",
    title: "Production deployment architecture",
    detail:
      "Full deployment stack: Vercel for frontend, Render for containerized API, MongoDB Atlas for database, Cloudinary for media — each layer independently scalable.",
  },
  {
    id: "redux",
    title: "Redux architecture for multi-role state",
    detail:
      "Separated server-derived state from local UI state in Redux slices. Memoized selectors prevent re-renders from unrelated state updates — critical when admin and user views share the same store.",
  },
];

export const projectDetails: Record<
  string,
  {
    overview: string;
    architecture: { layer: string; detail: string }[];
    apiDesign: string[];
    challenges: { problem: string; solution: string }[];
    performance: string[];
    lessons: string[];
  }
> = {
  "staynest": {
    overview:
      "StayNest is a property rental platform supporting listings, search, and booking — built solo across the full MERN stack with MVC architecture, session-based authentication via Passport.js, and a Cloudinary media pipeline.",
    architecture: [
      { layer: "Client (EJS)", detail: "Server-rendered views — listing search, booking flow, host dashboard" },
      { layer: "Express MVC", detail: "Routes → controllers → models — clean separation, no logic in route handlers" },
      { layer: "Passport.js", detail: "Session authentication — login state managed server-side" },
      { layer: "Auth Middleware", detail: "Ownership verification before every mutation" },
      { layer: "MongoDB Atlas", detail: "Listings, bookings, reviews — compound indexes on search fields" },
      { layer: "Cloudinary", detail: "Image storage via Multer — CDN-backed delivery" },
    ],
    apiDesign: [
      "Resource-oriented routes (/listings, /bookings, /users) — no action-based URLs",
      "Auth middleware centralizes session checks at the boundary, not per handler",
      "Ownership-based authorization — middleware verifies resource creator before any mutation",
      "Protected routes gate booking and listing-management flows behind authenticated sessions",
    ],
    challenges: [
      {
        problem: "Image uploads were blocking the request thread and storing large binary data in MongoDB.",
        solution:
          "Offloaded uploads through Multer → Cloudinary with signed server-issued requests. MongoDB stores only the resulting CDN URL — no binary data in the database.",
      },
      {
        problem: "Search needed to filter on price, location, and availability simultaneously.",
        solution:
          "Built compound query filters server-side with indexed fields, avoiding full collection scans on every search request.",
      },
    ],
    performance: [
      "Compound indexes on listing fields used in search and filter queries",
      "Paginated listing results — full result sets never returned",
      "Cloudinary CDN delivery cuts image load time independent of server location",
    ],
    lessons: [
      "Authorization rules belong at the middleware boundary, not duplicated across route handlers",
      "Schema design around real query patterns matters more than normalizing for its own sake",
      "Session-based auth has different operational tradeoffs than token-based — know which fits the use case",
    ],
  },
  "zarrin-blogs": {
    overview:
      "Zarrin Blogs is a full-stack blogging platform with JWT authentication, role-based access control, Docker containerization, and a CI/CD pipeline — built to support real editorial workflows with a separated admin moderation surface.",
    architecture: [
      { layer: "React Client", detail: "Redux + Context API — server state and local UI state separated" },
      { layer: "Express API", detail: "JWT-secured REST endpoints — 10+ routes" },
      { layer: "RBAC Middleware", detail: "Role-gated moderation surface — admin vs user permissions as data" },
      { layer: "MongoDB", detail: "Posts, categories, users, engagement — indexed for discovery" },
      { layer: "Docker", detail: "Containerized API — consistent across local, CI, and production" },
      { layer: "CI/CD", detail: "GitHub Actions → build, lint, deploy to Render/Vercel" },
    ],
    apiDesign: [
      "Public read endpoints separated from authenticated write endpoints — clear permission boundaries",
      "JWT verified at the boundary via centralized middleware, not inside individual handlers",
      "Moderation actions exposed as a distinct, role-gated API surface from public content routes",
      "Category and search endpoints designed with pagination from day one",
    ],
    challenges: [
      {
        problem: "Admins needed elevated moderation permissions without giving all authenticated users the same access.",
        solution:
          "Built RBAC middleware where permissions are checked as data against the user's role claim — new roles are configuration, not new code branches.",
      },
      {
        problem: "The feed re-rendered on every state update, including updates from unrelated slices.",
        solution:
          "Restructured Redux slices and added memoized selectors so feed components only re-render when their own data changes.",
      },
    ],
    performance: [
      "Memoized Redux selectors prevent unnecessary feed component re-renders",
      "MongoDB category and search fields indexed for fast, paginated discovery queries",
      "Docker-based builds ensure reproducible production artifacts with no environment drift",
    ],
    lessons: [
      "State management architecture matters as much as the API once an app has multiple user roles and views",
      "Designing moderation as a first-class API concern from the start prevents permission retrofitting later",
      "Containerization pays for itself the first time a 'works on my machine' bug is eliminated",
    ],
  },
};

export const skills = {
  Languages: ["JavaScript", "TypeScript", "Java", "Python", "C++"],
  Frontend: ["React.js", "Redux", "Context API", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"],
  Backend: ["Node.js", "Express.js", "REST APIs", "JWT", "Socket.io", "Redis"],
  Databases: ["MongoDB", "MySQL", "PostgreSQL"],
  "Cloud & DevOps": ["Docker", "Git", "GitHub", "GitHub Actions", "CI/CD", "Vercel", "Render", "AWS"],
  "CS Fundamentals": ["Data Structures & Algorithms", "OOP", "DBMS", "Operating Systems", "Computer Networks"],
};

export const techMeta: Record<
  string,
  { color: string; glow: string; category: string; proficiency: string }
> = {
  JavaScript:    { color: "#F7DF1E", glow: "rgba(247,223,30,0.35)",  category: "Language",      proficiency: "Primary language — every production project" },
  TypeScript:    { color: "#3178C6", glow: "rgba(49,120,198,0.35)",  category: "Language",      proficiency: "Type-safe API contracts and frontend state" },
  Java:          { color: "#F89820", glow: "rgba(248,152,32,0.35)",  category: "Language",      proficiency: "OOP, data structures, CS coursework" },
  Python:        { color: "#3776AB", glow: "rgba(55,118,171,0.35)",  category: "Language",      proficiency: "ML evaluation during NIELIT internship" },
  "C++":         { color: "#00599C", glow: "rgba(0,89,156,0.35)",    category: "Language",      proficiency: "DSA — 500+ problems across LeetCode & GfG" },
  "React.js":    { color: "#61DAFB", glow: "rgba(97,218,251,0.35)",  category: "Frontend",      proficiency: "Primary frontend framework on both projects" },
  Redux:         { color: "#764ABC", glow: "rgba(118,74,188,0.35)",  category: "Frontend",      proficiency: "State architecture for multi-role applications" },
  "Tailwind CSS":{ color: "#06B6D4", glow: "rgba(6,182,212,0.35)",   category: "Frontend",      proficiency: "Design system for every interface shipped" },
  "Node.js":     { color: "#339933", glow: "rgba(51,153,51,0.35)",   category: "Backend",       proficiency: "Runtime for every API shipped to production" },
  "Express.js":  { color: "#aaaaaa", glow: "rgba(170,170,170,0.25)", category: "Backend",       proficiency: "REST API layer — 20+ endpoints across two platforms" },
  JWT:           { color: "#FB015B", glow: "rgba(251,1,91,0.30)",    category: "Backend",       proficiency: "Access + refresh token auth across production routes" },
  "Socket.io":   { color: "#010101", glow: "rgba(150,150,160,0.25)", category: "Backend",       proficiency: "Real-time features for engagement workflows" },
  Redis:         { color: "#DC382D", glow: "rgba(220,56,45,0.30)",   category: "Database",      proficiency: "Caching layer for high-frequency reads" },
  MongoDB:       { color: "#47A248", glow: "rgba(71,162,72,0.35)",   category: "Database",      proficiency: "Compound indexing for production query performance" },
  PostgreSQL:    { color: "#336791", glow: "rgba(51,103,145,0.35)",  category: "Database",      proficiency: "Relational schema design and SQL fundamentals" },
  MySQL:         { color: "#4479A1", glow: "rgba(68,121,161,0.35)",  category: "Database",      proficiency: "DBMS coursework and relational query design" },
  Docker:        { color: "#2496ED", glow: "rgba(36,150,237,0.35)",  category: "Cloud & DevOps","proficiency": "Containerized Zarrin Blogs API for consistent builds" },
  AWS:           { color: "#FF9900", glow: "rgba(255,153,0,0.30)",   category: "Cloud & DevOps","proficiency": "Cloud-backed deployment and hosting infrastructure" },
  Git:           { color: "#F05032", glow: "rgba(240,80,50,0.30)",   category: "Cloud & DevOps","proficiency": "Version control across every project" },
  GitHub:        { color: "#aaaaaa", glow: "rgba(170,170,170,0.25)", category: "Cloud & DevOps","proficiency": "Source control, Actions, and project management" },
  "GitHub Actions":{ color: "#2088FF", glow: "rgba(32,136,255,0.30)",category: "Cloud & DevOps","proficiency": "CI/CD pipelines for automated build & deploy" },
  "CI/CD":       { color: "#2088FF", glow: "rgba(32,136,255,0.30)",  category: "Cloud & DevOps","proficiency": "Automated pipelines from push to deployment" },
  Vercel:        { color: "#cccccc", glow: "rgba(200,200,200,0.20)", category: "Cloud & DevOps","proficiency": "Frontend deployment for production clients" },
  Render:        { color: "#46E3B7", glow: "rgba(70,227,183,0.30)",  category: "Cloud & DevOps","proficiency": "API hosting for backend services" },
};

export const dashboardMetrics = [
  { id: "dsa",         label: "DSA Problems Solved",  value: 500, suffix: "+", group: "Practice" },
  { id: "leetcode",    label: "LeetCode",             value: 190, suffix: "+", group: "Practice" },
  { id: "gfg",         label: "GeeksforGeeks",        value: 320, suffix: "+", group: "Practice" },
  { id: "internships", label: "Internships",          value: 2,   suffix: "",  group: "Experience" },
  { id: "projects",    label: "Full-Stack Projects",  value: 2,   suffix: "",  group: "Experience" },
  { id: "apis",        label: "REST APIs Built",      value: 20,  suffix: "+", group: "Engineering" },
];

export const dashboardCapabilities = [
  "JWT Authentication", "RBAC", "Docker", "CI/CD", "AWS", "MongoDB",
  "Passport.js", "Cloudinary", "Redux", "REST APIs", "MVC", "MongoDB Atlas",
];

export const projectDeployment: Record<
  string,
  {
    liveUrl: string;
    repoUrl: string;
    deploymentStack: string[];
    environmentSetup: string[];
    hostingInfrastructure: { layer: string; provider: string }[];
  }
> = {
  staynest: {
    liveUrl: "https://stay-nest-psi.vercel.app/listings",
    repoUrl: "https://github.com/rajneeshkumar615/StayNest",
    deploymentStack: ["Vercel", "MongoDB Atlas", "Cloudinary", "GitHub"],
    environmentSetup: [
      "Environment variables managed separately per environment — never committed to source control",
      "MongoDB Atlas with IP allowlisting scoped to the production API service",
      "Cloudinary credentials scoped to signed, server-issued upload tokens",
    ],
    hostingInfrastructure: [
      { layer: "Frontend", provider: "Vercel — edge-cached delivery" },
      { layer: "Database",  provider: "MongoDB Atlas — managed cluster" },
      { layer: "Media",     provider: "Cloudinary — CDN-backed image storage" },
    ],
  },
  "zarrin-blogs": {
    liveUrl: "https://zarrin-blogs.vercel.app/",
    repoUrl: "https://github.com/rajneeshkumar615/Zarrin-Blogs",
    deploymentStack: ["Vercel (Client)", "Render (API)", "MongoDB Atlas", "GitHub Actions", "Docker"],
    environmentSetup: [
      "Dockerized API service for consistent builds across local, CI, and production",
      "Separate JWT signing secrets per environment, rotated outside source control",
      "CI pipeline runs build and lint checks before any deploy step executes",
    ],
    hostingInfrastructure: [
      { layer: "Frontend", provider: "Vercel — static + SSR delivery" },
      { layer: "API",      provider: "Render — Dockerized Node.js service" },
      { layer: "Database", provider: "MongoDB Atlas — managed cluster" },
      { layer: "CI/CD",    provider: "GitHub Actions — build, lint, deploy" },
    ],
  },
};

export const projectSystems: Record<string, { name: string; detail: string }[]> = {
  staynest: [
    { name: "MVC architecture",         detail: "Routes, controllers, and models fully separated — Express + EJS following MVC so no business logic lives in route handlers." },
    { name: "Session authentication",   detail: "Passport.js manages server-side session state. Login, logout, and session persistence handled through a single authentication layer." },
    { name: "Ownership verification",   detail: "Authorization middleware checks resource ownership before any mutation — a host can only edit listings they created, enforced consistently across all mutation routes." },
    { name: "Protected routes",         detail: "Authentication middleware gates all booking and listing-management flows. Unauthenticated requests are rejected before reaching any handler." },
    { name: "Cloudinary media pipeline",detail: "Multer parses multipart uploads server-side before forwarding to Cloudinary for storage and transformation. Only the resulting CDN URL is stored in MongoDB." },
    { name: "Review system",            detail: "Review documents are nested under listings with ownership-scoped write access — only authenticated users who booked a property can leave a review." },
  ],
  "zarrin-blogs": [
    { name: "JWT authentication",       detail: "Access + refresh tokens verified at the API boundary via centralized middleware. One verification point, every protected route." },
    { name: "RBAC system",              detail: "Admin and user roles drive a single permission middleware. Permissions are data — new roles require configuration changes, not new code paths." },
    { name: "Content moderation",       detail: "Role-gated moderation endpoints are a distinct API surface from public content routes. Admin actions are separated at the router level." },
    { name: "Redux architecture",       detail: "Server-derived state and local UI state are managed in separate Redux slices. Memoized selectors prevent re-renders from unrelated state updates." },
    { name: "Docker containerization",  detail: "The API service runs in a Docker container — the same image builds locally, in CI, and in production. Environment drift is eliminated." },
    { name: "CI/CD pipeline",           detail: "GitHub Actions runs build and lint on every push to main. Deployment to Render and Vercel only executes after all checks pass." },
  ],
};

export type DiagramStep = { label: string; detail: string };
export type DiagramSpec = {
  id: string;
  title: string;
  category: string;
  steps: DiagramStep[];
};

export const architectureGallery: DiagramSpec[] = [
  {
    id: "staynest-architecture",
    title: "StayNest Architecture",
    category: "System",
    steps: [
      { label: "Client (EJS)",     detail: "Server-rendered views" },
      { label: "Express MVC",      detail: "Routes → Controllers → Models" },
      { label: "Passport.js",      detail: "Session authentication" },
      { label: "Auth Middleware",  detail: "Ownership verification" },
      { label: "MongoDB Atlas",    detail: "Listings, bookings, reviews" },
      { label: "Cloudinary",       detail: "Image storage via Multer" },
    ],
  },
  {
    id: "zarrin-architecture",
    title: "Zarrin Blogs Architecture",
    category: "System",
    steps: [
      { label: "React Client",     detail: "Redux + Context API state" },
      { label: "Express API",      detail: "JWT-secured REST endpoints" },
      { label: "RBAC Middleware",  detail: "Role-gated moderation routes" },
      { label: "MongoDB",          detail: "Posts, categories, engagement" },
      { label: "Docker",           detail: "Containerized API service" },
      { label: "CI/CD",            detail: "GitHub Actions → Render/Vercel" },
    ],
  },
  {
    id: "jwt-flow",
    title: "JWT Authentication Flow",
    category: "Security",
    steps: [
      { label: "Client login",     detail: "Credentials over HTTPS" },
      { label: "Verify hash",      detail: "Password checked against bcrypt hash" },
      { label: "Issue tokens",     detail: "Access token + refresh token" },
      { label: "Auth header",      detail: "Bearer token on each request" },
      { label: "Middleware verify",detail: "Token verified at API boundary" },
    ],
  },
  {
    id: "rbac-flow",
    title: "RBAC Authorization Flow",
    category: "Security",
    steps: [
      { label: "Auth request",     detail: "Valid token attached" },
      { label: "Resolve role",     detail: "Role read from token claims" },
      { label: "Check permission", detail: "Role vs required permission" },
      { label: "Allow / 403",      detail: "Proceed or reject" },
    ],
  },
  {
    id: "docker-workflow",
    title: "Docker Workflow",
    category: "DevOps",
    steps: [
      { label: "Dockerfile",       detail: "Node.js base image + steps" },
      { label: "Build image",      detail: "Versioned container image" },
      { label: "Local container",  detail: "Isolated environment" },
      { label: "Push registry",    detail: "On passing CI build" },
      { label: "Pull on deploy",   detail: "Platform pulls built image" },
    ],
  },
  {
    id: "cicd-pipeline",
    title: "CI/CD Pipeline",
    category: "DevOps",
    steps: [
      { label: "Push to main",     detail: "Triggers GitHub Actions" },
      { label: "Install & lint",   detail: "Deps installed, code linted" },
      { label: "Build",            detail: "Production build generated" },
      { label: "Deploy",           detail: "Shipped to Render / Vercel" },
    ],
  },
  {
    id: "request-lifecycle",
    title: "Request Lifecycle",
    category: "Backend",
    steps: [
      { label: "Client request",   detail: "HTTP to API" },
      { label: "Auth middleware",  detail: "Token / session verified" },
      { label: "Route handler",    detail: "Business logic" },
      { label: "DB query",         detail: "Indexed read/write" },
      { label: "JSON response",    detail: "Returned to client" },
    ],
  },
  {
    id: "mongo-data-flow",
    title: "MongoDB Data Flow",
    category: "Database",
    steps: [
      { label: "Write request",    detail: "Validated payload" },
      { label: "Schema validate",  detail: "Mongoose enforces shape" },
      { label: "Indexed write",    detail: "Compound index maintained" },
      { label: "Read query",       detail: "Index used, no full scan" },
    ],
  },
  {
    id: "cloudinary-pipeline",
    title: "Cloudinary Upload Pipeline",
    category: "Media",
    steps: [
      { label: "File selected",    detail: "Multipart form data" },
      { label: "Multer parses",    detail: "Server validates upload" },
      { label: "Cloudinary",       detail: "Transformation + optimization" },
      { label: "CDN URL stored",   detail: "URL saved to MongoDB" },
    ],
  },
  {
    id: "aws-deployment",
    title: "AWS Deployment Flow",
    category: "DevOps",
    steps: [
      { label: "Source push",      detail: "Code pushed to main" },
      { label: "CI build",         detail: "Artifact generated" },
      { label: "Cloud storage",    detail: "Assets and media" },
      { label: "CDN delivery",     detail: "Served to users at edge" },
    ],
  },
];

export const caseStudies = [
  {
    id: "feed-pagination",
    title: "Cutting redundant reads in a high-traffic feed",
    context: "Sipher Web · Production feature",
    problem:
      "The activity feed re-queried the full collection on every scroll event, with no indexing strategy — latency grew linearly with collection size.",
    approach: [
      "Profiled real query patterns and identified the fields driving sort and filter on every request.",
      "Designed a compound index aligned to the actual access pattern instead of indexing fields in isolation.",
      "Replaced re-render-on-scroll with cursor-based pagination and memoized list rendering on the client.",
    ],
    outcome:
      "Reduced redundant database operations and brought feed responsiveness to a flat, predictable cost independent of collection growth.",
    stack: ["MongoDB", "React.js", "Express.js"],
  },
  {
    id: "auth-architecture",
    title: "Designing a reusable JWT auth layer across two products",
    context: "StayNest & Zarrin Blogs · Cross-project architecture",
    problem:
      "Two MERN projects needed authentication and authorization with different role models — building auth twice meant duplicated bugs and duplicated maintenance.",
    approach: [
      "Defined a shared token contract (access + refresh) decoupled from any one app's role schema.",
      "Built role-based middleware where authorization rules are data, not branching logic — new roles plug in without code changes.",
      "Centralized JWT verification at the API boundary, not scattered through individual route handlers.",
    ],
    outcome:
      "Both platforms shipped working role-based access control from one auth foundation — moderation on Zarrin Blogs, ownership-based authorization on StayNest.",
    stack: ["JWT", "Express.js", "MongoDB"],
  },
];

export const navItems = [
  { label: "About",        href: "#about" },
  { label: "Experience",   href: "#experience" },
  { label: "Projects",     href: "#projects" },
  { label: "Stack",        href: "#skills" },
  { label: "Architecture", href: "#architecture-gallery" },
  { label: "Contact",      href: "#contact" },
];
