

const Project3Details = () => {
    return (
        <div className="p-6 border shadow rounded-lg my-4">
            <h2 className="font-semibold">Main Tech Stack:</h2>
            <p>Frontend: React, Tailwind CSS</p>
            <p>Backend: Node.js, Express.js</p>
            <p>Database: MongoDB</p>
            <p>Authentication: Firebase/JWT</p>
            <p>Hosting: Vercel (Frontend), Firebase (Backend)</p>
            
            <h2 className="font-semibold">Brief Description:</h2>
            <p>Dream House is a real estate marketplace where users can browse, wishlist, and purchase properties, while agents can list and manage properties. Admins oversee the platform’s operations, ensuring smooth transactions and user management.</p>
            <p className="font-semibold">Live Link:</p>
            <a href="https://assignment-12-2f479.web.app">https://assignment-12-2f479.web.app</a>
            <p className="font-semibold">GitHub Link:</p>
            <a href="https://github.com/Nazim1247/Assignment-12-client">https://github.com/Nazim1247/Assignment-12-client</a>
            
            <h2 className="font-semibold">Challenges Faced:</h2>
            <p>1. Implementing role-based authentication (User, Agent, Admin)
            </p>
            <p>2. Managing real-time property status updates</p>
            <p>3. Ensuring a secure and optimized checkout process</p>
            <h2 className="font-semibold">Improvements Planned:</h2>
            <p>1. Adding AI-powered property recommendations</p>
            <p>2. Integrating 3D property tours</p>
            <p>3. Implementing a bidding system for property auctions</p>
        </div>
    );
};

export default Project3Details;