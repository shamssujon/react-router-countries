import React from "react";
import { useLoaderData } from "react-router-dom";
import Country from "./Country";

const Homepage = () => {
    const countries = useLoaderData();
    return (
        <section className="py-20">
            <div className="container">
                <h2 className="text-center text-5xl font-bold">
                    Total countries: {countries.length}
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 mt-12">
                    {/* {countries.map((country) => console.log(country))} */}
                    {countries.map((country) => (
                        <Country key={country.cca3} country={country}></Country>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Homepage;
