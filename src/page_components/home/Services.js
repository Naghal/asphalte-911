import React from "react";

import ServiceCard from './ServiceCard';
import FissureImage from './FissureImage';
import PotholeImage from './PotholeImage';
import ScellantImage from './ScellantImage';

const Services = () => {

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full bg-white">
                <ServiceCard path="/scellant" image={FissureImage} title="Réparation de fissure" details="Réparation de fissure selon la méthode la plus optimale pour vos besoin: Au bitume ou au sable polymère" />
                <ServiceCard path="/scellant" image={ScellantImage} title="Application de scellant au bitume" details="Application sous pression de scellant au bitume de qualitée supérieure" />
                <ServiceCard path="/reparation" image={PotholeImage} title="Réparation d'asphalte" details="Réparation d'asphalte à chaud" />
        </div>
    );
}
export default Services;
