import React from "react";
import { Link } from "react-router-dom";

const Country = ({ country }) => {
    const { name, flags } = country;
    return (
        <Link
            target="blank"
            to={`/country/${name.common}`}
            className="flex items-center gap-3 rounded border p-2 transition hover:bg-slate-100 hover:text-rose-600 hover:shadow-lg">
            <img src={flags.png} alt={name.common} className="h-10 w-14 border" />
            <h4 className="text-lg font-semibold lg:text-xl">{name.common}</h4>
        </Link>
    );
};

export default Country;
