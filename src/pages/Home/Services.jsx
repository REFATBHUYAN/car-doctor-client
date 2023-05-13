import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";


const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    console.log(services);
    return (
        <div>
            <div className="text-center space-y-4">
                <h3 className="text-3xl font-bold text-orange-600">Our Services</h3>
                <h3 className="text-5xl">Our Service Area</h3>
                <p className="w-3/4 mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, quod distinctio id repellendus quisquam placeat quam obcaecati perspiciatis dolore explicabo officia, impedit veritatis ipsum maiores enim, libero porro aliquam dignissimos.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;