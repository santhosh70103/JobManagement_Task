import Navbar from "./Navbar";
import FilterSection from "./FilterSection";
import JobFormModal from "./JobFormModal"; // Import the modal
import { useState } from "react";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false); // Modal state

    return (
        <div className="fixed top-0 left-0 w-full text-white p-4 shadow-md z-50 bg-white">
            <div className="p-4">
                {/* Pass openModal to Navbar */}
                <Navbar openModal={() => setIsOpen(true)} />
            </div>
            <div>
                {/* Render JobFormModal with state */}
                <JobFormModal isOpen={isOpen} closeModal={() => setIsOpen(false)} />
            </div>
            <div className="p-4 border-t">
                <FilterSection />
            </div>
        </div>
    );
}
