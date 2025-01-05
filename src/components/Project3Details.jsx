

const Project3Details = () => {
    return (
        <div className="p-6">
            <h2 className="font-semibold">Main Tech Stack:</h2>
            <p>JavaScript, React</p>
            <h2 className="font-semibold">Brief Description:</h2>
            <p>A simple task management application to create, update, and delete tasks.</p>
            <p className="font-semibold">Live Link:</p>
            <p>https://storied-tiramisu-5162e9.netlify.app/</p>
            <p className="font-semibold">GitHub Link:</p>
            <p>https://github.com/Nazim1247/Assignment-8</p>
            <p className="font-semibold">Details:</p>
            <p>
            This project allows users to manage their daily tasks effectively. Features include:
            1. Add new tasks with a description and deadline. 
            2. Mark tasks as completed. 3. Edit or delete existing tasks
            </p>
            <h2 className="font-semibold">Challenges Faced:</h2>
            <p>1. Managing the state for dynamic task addition, deletion, and updates.
            </p>
            <p>2. Ensuring task data is persistently saved using localStorage.</p>
            <p>3. Implementing a clean and intuitive UI using pure React and CSS.</p>
            <h2 className="font-semibold">Improvements Planned:</h2>
            <p>1. Adding a due date notification system to remind users of pending tasks.</p>
            <p>2. Integrating a drag-and-drop feature for reordering tasks.</p>
            <p>3. Creating a dark mode option for better user experience.</p>
        </div>
    );
};

export default Project3Details;