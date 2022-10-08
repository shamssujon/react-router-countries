import React from "react";
import { useLoaderData } from "react-router-dom";

const CountryDetails = () => {
    const country = useLoaderData();
    console.log(country[0]);
    const { name, area, flags, population, region } = country[0];
    return (
        <section className="py-12">
            <div className="container">
                <img src={flags.png} alt="" />
                <h2 className="text-4xl">{name.common}</h2>
                <p>
                    <span className="font-bold">Official Name:</span> <span>{name.official}</span>
                </p>
                <p>
                    <span className="font-bold">Area:</span> <span>{area}</span>
                </p>
                <p>
                    <span className="font-bold">Population:</span> <span>{population}</span>
                </p>
                <p>
                    <span className="font-bold">Region:</span> <span>{region}</span>
                </p>
                <p>
                    <span className="font-bold">Area:</span> <span>{area}</span>
                </p>
            </div>
        </section>
    );
};

export default CountryDetails;
