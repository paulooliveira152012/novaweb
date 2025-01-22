import '../styles/servicesNova.css';
import { useState, useEffect } from 'react';

const services = [
    "We specialize in creating modern, user-friendly, and responsive websites that captivate your audience. Our design process focuses on blending aesthetic beauty with functionality, ensuring your website not only looks amazing but also provides an exceptional user experience across all devices.",
    "texto 2",
    "texto 3",
    "texto 4"
];

const Services = () => {
    const [selectedOption, setSelectedOption] = useState("Web Design");
    const [display, setDisplay] = useState("");
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        if (selectedOption === "Web Design") {
            setDisplay(services[0])  
        } else if (selectedOption === "Development") {
            setDisplay(services[1]);
        } else if (selectedOption === "Visual Identity") {
            setDisplay(services[2]);
        } else if (selectedOption === "Social Media") {
            setDisplay(services[3]);
        }

        // Trigger animation
        if (selectedOption) {
            setAnimate(true);

            // Remove animation class after the animation duration
            const timer = setTimeout(() => setAnimate(false), 1000); // Match animation duration
            return () => clearTimeout(timer); // Cleanup timeout on component unmount
        }
    }, [selectedOption]);

    return (
        <div className='servicesContainer'>

        <h3 className='servicesTitle'>Creative and technological solutions to <br /> strengthen your online presence</h3>

        <div className="ServicesWrapper">
            {/* Left container */}
            <div>
                {/* <h3>Services:</h3> */}
                <ul>
                    <p>Services:</p>
                    <li 
                        onClick={() => setSelectedOption('Web Design')}
                        className={selectedOption === 'Web Design' ? 'selected' : ''}
                    >
                        Web Design
                    </li>
                    <li 
                        onClick={() => setSelectedOption('Development')}
                        className={selectedOption === 'Development' ? 'selected' : ''}
                    >
                        Development
                    </li>
                    <li 
                        onClick={() => setSelectedOption('Visual Identity')}
                        className={selectedOption === "Visual Identity" ? 'selected' : ''}
                    >
                        Visual Identity</li>
                    <li 
                        onClick={() => setSelectedOption('Social Media')}
                        className={selectedOption === "Social Media" ? 'selected' : ''}
                    >
                        Social Media
                    </li>
                </ul>
            </div>

            {/* Right container */}
            <div className={animate ? 'animated' : ''}>
                <div className='serviceDefinitionContainer'>
                    <p className='serviceDefinition'>{display}</p>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Services;
