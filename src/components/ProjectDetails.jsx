

const ProjectDetails = () => {
    return (
        <div className="p-6 shadow rounded-lg my-4 bg-gray-200 dark:bg-gray-800">
            <h2 className="font-semibold">Main Tech Stack:</h2>
            <p>Node.js, Express.js, MongoDB, React, Redux</p>
            <h2 className="font-semibold">Brief Description:</h2>
            <p>A full-stack e-commerce application for managing products, orders, and user accounts.</p>
            <p className="font-semibold">Live Link:</p>
            <a href="https://assignment-11-6b184.web.app">https://assignment-11-6b184.web.app</a>
            <p className="font-semibold">GitHub Link:</p>
            <a href="https://github.com/Nazim1247/Assignment-11-client">https://github.com/Nazim1247/Assignment-11-client</a>
            <p className="font-semibold">Details:</p>
            <p>
                This project features user authentication, product search and filter, a cart system, and payment gateway integration. Admins can manage products and orders via a dedicated admin panel.

            </p>
            <h2 className="font-semibold">Challenges Faced:</h2>
            <p>1. Setting up secure user authentication and authorization (JWT).</p>
            <p>2. Implementing a real-time inventory system to avoid over-ordering.</p>
            <p>3. Integrating a payment gateway (Stripe) for seamless checkout.</p>
            <h2 className="font-semibold">Improvements Planned:</h2>
            <p>1. Adding a recommendation system based on user behavior and purchase history.</p>
            <p>2. Improving product page load times by implementing server-side rendering (SSR).</p>
            <p>3. Adding a notification system to alert users about new deals or updates.</p>
        </div>
    );
};

export default ProjectDetails;