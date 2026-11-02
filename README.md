# 📚 Social Shelf — Community Book Rental & Library Platform

A full-stack community book sharing, rental, and library management platform built with **React**, **Java**, **Spring Boot**, and **Tailwind CSS**.

🌐 **Live Demo:** [https://pradyumnasangamkar.github.io/Social-Shelf/](https://pradyumnasangamkar.github.io/Social-Shelf/)  
💻 **Repository:** [https://github.com/pradyumnasangamkar/Social-Shelf](https://github.com/pradyumnasangamkar/Social-Shelf)

---

## 🌟 Highlights & Core Features

- **Book Rental & Circulation System:**
  - Real-time catalog browsing with genre filtering, instant search, and stock availability checks.
  - Active rental tracking with due-date calculations and one-click return workflows.

- **Community Book Donation Portal:**
  - Peer-to-peer donation submissions with physical condition assessment and donor notes.
  - Admin moderation panel to inspect, approve, and catalog donated inventory.

- **Campus Events & Literary Workshops:**
  - Interactive event scheduling for book club readings, workshops, and author interactions.
  - RSVP and attendee registration tracking.

- **Modern & Responsive UI:**
  - Styled with **Tailwind CSS**, featuring dark and light mode themes, responsive design across mobile and desktop, and clean UI components.

---

## 🛠️ Technology Stack

| Layer | Technologies |
| :--- | :--- |
| **Frontend** | React.js, Tailwind CSS, Lucide Icons, HTML5, CSS3 |
| **Backend** | Java, Spring Boot (REST APIs, Spring Data, Spring Security) |
| **Database** | MySQL / MongoDB (Users, Books, Rentals, Donations, Events) |
| **Architecture** | Client-Server Architecture (RESTful API Services) |

---

## 🏗️ Architecture & Modules

1. **Frontend Client (React & Tailwind CSS):**
   - Single Page Application (SPA) offering catalog exploration, rental requests, donation forms, and community event registration.
   - Client-side routing, responsive layouts, and state management.

2. **Backend API (Java & Spring Boot):**
   - RESTful endpoints for Book Management, User Rentals, Donation Submissions, and Event Registrations.
   - Service layer handling business logic, availability validation, and transaction management.

3. **Database Layer:**
   - Relational / document data model managing book catalog metadata, user records, and rental histories.

---

## 🚀 Getting Started

### Frontend Setup (React):
```bash
git clone https://github.com/pradyumnasangamkar/Social-Shelf.git
cd Social-Shelf
npm install
npm run dev
```

### Backend Setup (Spring Boot):
```bash
cd backend
mvn clean install
mvn spring-boot:run
```

---

## 📄 License
This project is open source and available under the [MIT License](LICENSE).
