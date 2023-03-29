import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <div className="text-center">
        <p className="text-2xl font-bold text-orange-600">Services</p>
        <h2 className="text-5xl mt-3 font-semibold">Our Service Area</h2>
        <p className="lg:w-1/2 lg:mx-auto mt-2 w-50 mb-5 lg:p-10 ">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> 
        {
            services.map(service => <ServiceCard
                key={service._id}
                service={service}
            ></ServiceCard>)
        }
      </div>
    </div>
  );
};

export default Services;
