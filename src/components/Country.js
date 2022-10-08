import React from "react";
import { Link } from "react-router-dom";

const Country = ({ country }) => {
    const { name, flags } = country;
    return (
        <Link className="flex items-center rounded border p-2 gap-3 transition hover:shadow-lg hover:bg-slate-100 hover:text-rose-600">
            <img src={flags.png} alt={name.common} className="w-14 h-auto border aspect-video" />
            <h4 className="text-lg font-semibold lg:text-xl">{name.common}</h4>
        </Link>
    );
};

export default Country;
