import Card from "@/components/common/Card";
import React from "react";
import { FaHome, FaKey } from "react-icons/fa"; // Ejemplo de íconos, puedes usar otros

const CardsContainer: React.FC = () => {
  return (
    <div
      className="bg-white p-8 sm:p-16 isolate overflow-hidden"
      id="home-about"
      style={{background: '#fafafa'}}
    >
      <div className="relative isolate -z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
          <Card
            title="Lease An Apartment or Home"
            description="Over thousands of apartments, townhomes, condos, and single-family homes available, we will be able to find the best fit for your household."
            icon={<FaHome className="text-4xl text-blue-500" />}
            linkText="Find A Home"
            linkHref="/lease"
          />
          <Card
            title="Buy or Sell A Property"
            description="We are licensed real estate agents that can help guide you to the best path for your purchase or listing."
            icon={<FaKey className="text-4xl text-blue-500" />}
            linkText="Find A Home"
            linkHref="/buy-sell"
          />
        </div>
      </div>
    </div>
  );
};

export default CardsContainer;
