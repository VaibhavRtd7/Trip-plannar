/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useState } from "react";
import { getCall } from "../api";
import Header2 from "../components/Header2";
import { Card, CardHeader, Image } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

const CityCard = ({ city }) => {
  const navigate = useNavigate();
  return (
    <Card
      isPressable
      onPress={() => {
        navigate(`/places/city/${city._id}`);
      }}
      isFooterBlurred
      className=" h-[70vh]"
    >
      <CardHeader className="absolute z-10 top-1 flex-col items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">
          {city.country}
        </p>
        <h4 className="text-white/90 font-medium text-3xl">{city.name}</h4>
      </CardHeader>
      <Image
        removeWrapper
        alt={city.name}
        className="z-0 w-full h-full object-cover"
        src={city.image}
      />
    </Card>
  );
};

export default function Destination() {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await getCall("city");
      setCities(data);
    })();
  }, []);

  return (
    <>
      <Header2 />
      <div className="md:px-10 px-4 my-5 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 max-sm:grid-cols-1 gap-7">
        {cities.map((city) => (
          <CityCard city={city} key={city._id} />
        ))}
      </div>
    </>
  );
}
