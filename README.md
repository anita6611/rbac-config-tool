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


