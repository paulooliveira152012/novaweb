import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/style.css";

const services = [
    "Websites",
    "Social Media",
    "Landing Pages",
    "E-Commerces"
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
                    <h2 className={index === activeIndex ? "highlighted" : ""}>
                        {service}
                    </h2>
                </Link>
            ))}
        </div>
    );
};

export default ListOfServices;
