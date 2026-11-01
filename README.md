# 📚 Social Shelf — Full-Stack Community Book Rental & Library Platform

A modern, full-stack community book sharing, rental, and library management platform built with **Next.js 15 (App Router)**, **React 19**, **TypeScript**, **MongoDB**, and **NextAuth.js**.

---

## 🌟 Highlights & Core Features

- **Multi-Role Authentication & Access Control:**
  - Role-based workflows for **Students/Readers**, **Volunteers**, and **System Administrators**.
  - Secure credential-based login with BCrypt hashing, JWT session strategies, and OAuth providers (Google & GitHub).

- **Book Rental & Circulation System:**
  - Real-time catalog browsing with categorized search and stock availability checks.
  - Active rental tracking with due-date calculations, fine management, and one-click return workflows.

- **Book Donation & Review Pipeline:**
  - Peer-to-peer donation submissions with physical condition assessment and donor notes.
  - Admin moderation panel to inspect, approve, and catalog donated inventory.

- **Campus Events & Community Engagement:**
  - Interactive event scheduling for book club readings, workshops, and author interactions.
  - Seamless RSVP and registration tracking.

- **Media & Cloud File Storage:**
  - Integration with **ImageKit** for optimized book cover image uploads and CDN delivery.

- **Polished UI/UX:**
  - Styled with **Tailwind CSS**, Radix UI primitives, dynamic animations (Framer Motion / Tabler Icons), and dark/light theme switching.

---

## 🛠️ Technology Stack

| Layer | Technologies |
| :--- | :--- |
| **Frontend** | Next.js 15, React 19, TypeScript, Tailwind CSS, Lucide Icons, Sonner Toasts |
| **Backend** | Next.js App Router API Routes, NextAuth.js 4 (JWT + Custom MongoDB Adapter) |
| **Database** | MongoDB & Mongoose (Users, Books, Rentals, Donations, Events) |
| **Media & Storage** | ImageKit.io SDK for automated image transformations and storage |
| **Email Service** | Nodemailer for automated notifications and password reset |
| **DevOps & Tooling** | Git, GitHub, Vercel |

---

## 📂 Project Structure

```text
social-shelf/
├── public/                 # Static assets, SVG icons, sample avatars
├── src/
│   ├── app/                # Next.js 15 App Router pages & API routes
│   │   ├── admin/          # Admin dashboard (books, donations, events, users)
│   │   ├── student/        # Student dashboard (rental history, wishlist)
│   │   ├── rent-books/     # Catalog & rental checkout
│   │   ├── donation/       # Book donation intake
│   │   ├── events/         # Campus workshops & reading sessions
│   │   └── api/            # Serverless REST endpoints
│   ├── components/         # Reusable UI components & layouts
│   ├── dbConfig/           # MongoDB connection & custom adapter
│   ├── models/             # Mongoose schemas (Book, User, RentedBooks, Donate, Event)
│   └── utils/              # Auth options, mail service, helper functions
└── package.json            # Dependencies & scripts
```

---

## ⚙️ Environment Configuration

Create a `.env.local` file in the root directory:

```env
# MongoDB Connection
MONGODB_URL=mongodb+srv://<username>:<password>@cluster0.mongodb.net/Social?retryWrites=true&w=majority

# NextAuth Configuration
NEXTAUTH_SECRET=your_nextauth_jwt_secret_key_here
NEXTAUTH_URL=http://localhost:3000

# OAuth Providers (Optional)
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
GITHUB_ID=your_github_client_id
GITHUB_SECRET=your_github_client_secret

# ImageKit Configuration (Optional for image uploads)
NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT=https://ik.imagekit.io/your_id

# Email Service (Optional for notifications)
GMAIL_ADDRESS=your_email@gmail.com
GMAIL_APP_PASSWORD=your_gmail_app_password
```

---

## 🚀 Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/pradyumnasangamkar/Social-Shelf.git
   cd Social-Shelf
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Production Build:**
   ```bash
   npm run build
   npm run start
   ```

---

## ☁️ Deployment on Vercel

The easiest way to deploy Social Shelf is on **[Vercel](https://vercel.com)**:

1. Sign in to [Vercel](https://vercel.com) using your GitHub account.
2. Click **"Add New Project"** and import `pradyumnasangamkar/Social-Shelf`.
3. Add your environment variables (e.g., `MONGODB_URL`, `NEXTAUTH_SECRET`).
4. Click **Deploy**. Vercel will build and host the application with automated CI/CD.
