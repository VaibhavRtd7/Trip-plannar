/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { getCall } from "../api";
import { useParams } from "react-router-dom";

import {
  Card,
  CardHeader,
  CardBody,
  Image,
  Button,
  useDisclosure,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Tab,
  Tabs,
} from "@nextui-org/react";
const HotelCard = ({ hotel }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  // console.log("HotelCard :- ", hotel)
  return (
  <>
    <Card isPressable onPress={onOpen} className=" h-[300px] ">
    <CardHeader className="absolute z-10 top-1 flex-col items-start">
      <p className="text-tiny text-white/60 uppercase font-bold">
        {hotel.city.name}
      </p>
      <h4 className="text-white/90 font-medium text-xl">{hotel.name}</h4>
    </CardHeader>
    <Image
      removeWrapper
      alt={hotel.name}
      className="z-0 w-full h-full object-cover"
      src={hotel.image}
    />
  </Card>
  <Modal size="2xl" isOpen={isOpen} onOpenChange={onOpenChange}>
    <ModalContent>
      {(onClose) => (
        <>
          <ModalHeader className="flex flex-col gap-1">
            {hotel.name} - {hotel.city.name}
          </ModalHeader>
          <ModalBody>
            <Image
              removeWrapper
              alt={hotel.name}
              className="z-0 w-52 h-full object-cover"
              src={hotel.image}
            />
            <p>{hotel.description}</p>
            <h4> <span className="text-sky-400/100"> Location :- </span>  {hotel.location}</h4>
            <h4> <span className="text-sky-400/100">{hotel.type} Price :  </span> {hotel.price}</h4>
          </ModalBody>
          <ModalFooter>
            <Button color="danger" variant="light" onPress={onClose}>
              Close
            </Button>
            <Button color="primary" onPress={onClose}>
              OK
            </Button>
          </ModalFooter>
        </>
      )}
    </ModalContent>
  </Modal>
  </>
  );
};

function Hotels() {

  const [hotels, setHotels] = useState([]);
  // const { city } = useParams();

  useEffect(() => {
    (async () => {
      const data = await getCall(`hotels`);
      setHotels(data);
    })();
  }, [])

  return (
    <div className="md:px-10 px-4 my-5 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 max-sm:grid-cols-1 gap-4">
      {hotels.map((hotel) => (
        <HotelCard key={hotel._id} hotel={hotel} />
      ))}
    </div>
  );
}

export default Hotels;
