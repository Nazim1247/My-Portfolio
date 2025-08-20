

const Project2Details = () => {
    return (
        <div className="p-6 shadow rounded-lg my-4 bg-gray-200 dark:bg-gray-800">
            <h2 className="font-semibold text-primary text-xl">Main Tech Stack:</h2>
            <p>Next.js, MongoDB, React, NextAuth, Tailwind CSS</p>
            <h2 className="font-semibold text-primary text-xl">Brief Description:</h2>
            <p>A full-featured job portal web application that allows users to search and apply for jobs and for admins to manage job listings and applicants. Built with modern technologies and responsive design principles.</p>
            <p className="font-semibold text-primary text-xl">Live Link:</p>
            <a href="https://job-finder-portal-five.vercel.app">https://job-finder-portal-five.vercel.app</a>
            <p className="font-semibold text-primary text-xl">GitHub Link:</p>
            <a href="https://github.com/Nazim1247/Job-Finder-Portal">https://github.com/Nazim1247/Job-Finder-Portal</a>
            <p className="font-semibold text-primary text-xl">Details:</p>
            <p>
                A full-featured job portal web application that allows users to search and apply for jobs and for admins to manage job listings and applicants. Built with modern technologies and responsive design principles with features
                User Registration & Login (Authentication).Search Jobs by Category & Location. 
                Update User Profile.
                View Previously Applied Jobs.
                Save Favorite Jobs.
                Mobile Responsive UI.
                Dark Mode Toggle.
            </p>
            <h2 className="font-semibold text-primary text-xl">Challenges Faced:</h2>
            <p>1. Setting up secure user authentication and authorization (JWT).</p>
            <p>2. Implementing a real-time inventory system to avoid over-ordering.</p>
            <p>3. Integrating a payment gateway (Stripe) for seamless checkout.</p>
            <h2 className="font-semibold text-primary text-xl">Improvements Planned:</h2>
            <p>1. Adding a recommendation system based on user behavior and Application history.</p>
            <p>2. Improving Find JOb page load times by implementing server-side rendering (SSR).</p>
            <p>3. Adding a notification system to alert users about new deals or updates.</p>
        </div>
    );
};

export default Project2Details;