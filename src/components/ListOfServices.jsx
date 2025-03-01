import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/style.css";

const services = [
    "WEBSITES",
    "SOCIAL MEDIA",
    "LANDING PAGES",
    "E-COMMERCES"
];

const ListOfServices = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % services.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="ListOfServicesContainer">
            {services.map((service, index) => (
                <Link key={index} to={`/our-services?scrollTo=${service}`}>
                    <h2 className={`listOfServicesH2 ${index === activeIndex ? "highlighted" : ""}`}>
                        {service}
                    </h2>
                </Link>
            ))}
        </div>
    );
};

export default ListOfServices;
