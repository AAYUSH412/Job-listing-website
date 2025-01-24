# React Jobs Website

A full-stack React application for job listings with a JSON-server backend.

## Features

- View job listings
- Add new job listings
- Edit existing jobs
- Delete jobs 
- Responsive design using Tailwind CSS
- Loading states with React Spinners
- Toast notifications for user feedback
- Backend API using JSON Server

## Tech Stack

- React
- React Router DOM
- Tailwind CSS
- JSON Server
- React Icons
- React Toastify
- React Spinners
- Vercel for deployment

## Getting Started

1. Install dependencies:
    ```sh
    npm install
    ```

2. Run development server:
    ```sh
    npm run dev
    ```

3. Start JSON Server:
    ```sh
    npm run server
    ```

The app will be available at [http://localhost:5173](http://localhost:5173) and the API will run on [http://localhost:3001](http://localhost:3001).

## Deployment

This project is configured for deployment on Vercel:

1. Push your code to GitHub.
2. Connect your repository to Vercel.
3. Vercel will automatically build and deploy your application.

## Environment Variables

Create a `.env` file in the root directory with the following content:
```
VITE_API_URL=https://job-listing-website-one.vercel.app
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run server` - Start JSON Server
- `npm run lint` - Run ESLint