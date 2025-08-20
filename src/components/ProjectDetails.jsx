

const ProjectDetails = () => {
    return (
        <div className="p-6 shadow rounded-lg my-4 bg-gray-200 dark:bg-gray-800">
            <h2 className="font-semibold text-primary text-xl">Main Tech Stack:</h2>
            <p>Next.js, MongoDB, React, NextAuth, Tailwind CSS</p>
            <h2 className="font-semibold text-primary text-xl">Brief Description:</h2>
            <p>A full-stack role-based learning platform built with Next.js and MongoDB, offering dynamic courses, classes, Islamic books, articles, islamic lectures, student management, and secure dashboards.</p>
            <p className="font-semibold text-primary text-xl">Live Link:</p>
            <a href="https://islamic-learning-platform.vercel.app">https://islamic-learning-platform.vercel.app</a>
            <p className="font-semibold text-primary text-xl">GitHub Link:</p>
            <a href="https://github.com/Nazim1247/Islamic-Learning-Platform">https://github.com/Nazim1247/Islamic-Learning-Platform</a>
            <p className="font-semibold text-primary text-xl">Details:</p>
            <p>
                An Islamic Learning Management System (LMS) built with Next.js, React, Tailwind CSS, MongoDB, and NextAuth. This platform allows Admins, Teachers, and Students to interact through a role-based dashboard with features such as course management, class enrollment, reviews, Blog, Result, Newsletter modules and more.
            </p>
            <h2 className="font-semibold text-primary text-xl">Challenges Faced:</h2>
            <p>1. Setting up secure user authentication and authorization (JWT).</p>
            <p>2. Implementing a real-time inventory system to avoid over-ordering.</p>
            <p>3. Integrating a payment gateway (Stripe) for seamless checkout.</p>
            <h2 className="font-semibold text-primary text-xl">Improvements Planned:</h2>
            <p>1. Adding a recommendation system based on user behavior and purchase history.</p>
            <p>2. Improving All Classes and Courses pages load times by implementing server-side rendering (SSR).</p>
            <p>3. Adding a notification system to alert users about new deals or updates.</p>
        </div>
    );
};

export default ProjectDetails;