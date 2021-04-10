/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from "gatsby";

const ServiceCard = ({
    path, image, title, details
}) => {
    const Image = image;
    return (
        <div className="lg:m-4 shadow-md hover:shadow-lg hover:bg-gray-100 rounded-lg bg-white my-12 mx-8">
            <Image />
            <div className="p-4">
                <h3 className="font-medium text-gray-600 lg:text-2xl text-xl my-2 uppercase font-bold">{title}</h3>
                <p className="text-justify">{details}</p>
                <div className="mt-5">
                <Link to={path} className="hover:bg-yellow-400 rounded-full py-2 px-3 font-semibold bg-yellow-300 text-white">
                    Plus de détails
                </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
