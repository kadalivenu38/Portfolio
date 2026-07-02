## Portfolio

This repository contains a personal portfolio web application with a React + Vite frontend and an Express + MongoDB backend. The site showcases projects, skills, and includes a contact form that saves messages to MongoDB.

**Repository structure**

- `frontend/` — React (Vite) frontend source and build config
- `backend/` — Express API, Mongoose models, and server code

**Live features**

- Responsive portfolio site (About, Skills, Projects, Contact)
- Animated skill carousels
- Project gallery with external links
- Contact form that posts to a backend API and stores messages in MongoDB

**Tech stack**

- Frontend: React, Vite, Tailwind CSS, react-icons
- Backend: Node.js, Express, Mongoose (MongoDB)
- Dev tooling: npm, Vite

**Prerequisites**

- Node.js (16+ recommended)
- npm (or yarn)
- A running MongoDB instance (Atlas or local)

**Local setup**

1. Clone the repo

```bash
git clone <your-repo-url>
cd Portfolio
```

2. Backend — install and run

```bash
cd backend
npm install
# create a .env file (see example below)
npm run dev
```

3. Frontend — install and run

```bash
cd ../frontend
npm install
npm run dev
```

The frontend dev server (Vite) will start and usually open at `http://localhost:5173`. The backend server listens on the port configured in the backend `.env` (default 5000). If you prefer the frontend contact form to post to `http://localhost:4000/contact`, set the backend port to `4000` or update the frontend environment variable described below.

**Environment variables**

Create a `.env` file in the `backend/` folder with at least the following keys:

```
PORT=4000
MONGODB_URI=<your-mongodb-connection-string>
```

For the frontend (optional), create `frontend/.env` and set the backend URL used by the contact form:

```
VITE_BACKEND_URL=http://localhost:4000/contact
```

Note: Vite requires variables to start with `VITE_` to be exposed to client code.

**API**

- POST `/contact` — Save a contact message (JSON body: `{ name, email, message }`). The backend route is implemented in `backend/routes/contactRoutes.js` and the Mongoose model is at `backend/models/Contact.js`.

Example request (JSON):

```json
{
	"name": "Jane Doe",
	"email": "jane@example.com",
	"message": "Hello!"
}
```

**Build & Deploy**

- Frontend: `npm run build` in the `frontend/` folder (Vite build output in `dist/`).
- Backend: Build is not required for Node.js code, deploy to a Node hosting provider (Heroku, Render, Railway, or a VPS). Ensure `MONGODB_URI` is set in the provider's environment.

If deploying together, serve the built frontend as static files from the backend or host them separately (Netlify, Vercel for the frontend; Heroku/Render for the API).

**Development notes**

- The frontend contact form uses `fetch` to POST JSON to the backend and expects a response containing `{ success: true }` on success.
- Tailwind custom color `darkHover` is defined in `frontend/tailwind.config.js` and used across components for consistent dark mode styling.

**Contributing**

Feel free to open issues and pull requests. For major changes, open an issue first to discuss the change.

**License**

This project is provided under the MIT License. See `LICENSE` if present.

**Contact**

If you need help running the project locally or want to report a bug, open an issue or contact the repository owner.
