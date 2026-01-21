# RBAC Configuration Tool

This project is a Role-Based Access Control (RBAC) configuration tool built as part of a Full Stack Developer Intern assignment. It allows administrators to manage users, roles, and permissions using a secure backend system.

---

## 🚀 Features

- Custom authentication using JWT and bcrypt
- Create and manage permissions
- Create and manage roles
- Assign permissions to roles (RBAC mapping)
- PostgreSQL database with Prisma ORM
- REST APIs built using Next.js App Router

---

## 🧠 RBAC Explained for a Kid (≤ 50 words)

Think of an online game.
Players can play matches, moderators can mute players, and admins can change game rules.
RBAC works the same way: each user gets a role, and the role decides what actions the user is allowed to perform.

---

## 🛠 Tech Stack

- **Frontend / Backend:** Next.js (App Router, TypeScript)
- **Database:** PostgreSQL (Supabase)
- **ORM:** Prisma
- **Authentication:** JWT + bcrypt
- **Deployment:** Vercel

---

## 🔐 Test Credentials

You can use the following credentials to test the APIs:

Email: test@example.com
Password: password123



## ▶️ Running Locally

1. Clone the repository

2. Install dependencies
npm install

3. Add environment variables

Create a .env file in the root directory:

DATABASE_URL=your_database_url
JWT_SECRET=your_jwt_secret

4️. Generate Prisma client
npx prisma@5.22.0 generate

5️. Start the development server
npm run dev


The application will be available at:
http://localhost:3000




---

# Project Structure 

rbac-config-tool/
│
├── src/                          # Main application source code
│   │
│   ├── app/                      # Next.js App Router (pages + APIs)
│   │   │
│   │   ├── api/                  # Backend API routes
│   │   │   │
│   │   │   ├── auth/             # Authentication related APIs
│   │   │   │   ├── signup/       # User signup endpoint
│   │   │   │   │   └── route.ts  # Creates user, hashes password, returns JWT
│   │   │   │   └── login/        # User login endpoint
│   │   │   │       └── route.ts  # Verifies user credentials and returns JWT
│   │   │   │
│   │   │   ├── permissions/      # Permission management APIs
│   │   │   │   └── route.ts      # Create and list permissions
│   │   │   │
│   │   │   └── roles/            # Role management and RBAC logic
│   │   │       ├── route.ts      # Create and list roles
│   │   │       └── assign/
│   │   │           └── route.ts  # Assign permissions to roles (core RBAC)
│   │   │
│   │   ├── layout.tsx            # Global layout for the Next.js app
│   │   └── page.tsx              # Default home page (not core to backend)
│   │
│   └── lib/                      # Reusable helper logic
│       ├── prisma.ts             # Initializes Prisma client for DB access
│       └── auth.ts               # JWT helper functions (sign & verify token)
│
├── prisma/                       # Database-related configuration
│   └── schema.prisma             # Database schema (tables & relations)
│
├── public/                       # Static files (icons, images)
│
├── README.md                     # Project documentation
├── package.json                  # Project dependencies and scripts
└── tsconfig.json                 # TypeScript configuration




