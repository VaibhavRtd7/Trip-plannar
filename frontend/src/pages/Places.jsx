/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { getCall } from "../api";
import { useParams } from "react-router-dom";
import Hotels from "./Hotel"
// import Restorants from "./Restro"
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


// For  Home Page 

const PlaceCard = ({ place }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <>
      <Card isPressable onPress={onOpen} className="h-[70vh] ">
        <CardHeader className="absolute z-10 top-1 flex-col items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">
            {place.city.name}
          </p>
          <h4 className="text-white/90 font-medium text-xl">{place.name}</h4>
        </CardHeader>
        <Image
          removeWrapper
          alt={place.name}
          className="z-0 w-full h-full object-cover"
          src={place.image}
        />
      </Card>
      <Modal size="2xl" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-2xl">
                {place.name} - {place.city.name}
              </ModalHeader>
              <ModalBody>
                <Image
                  removeWrapper
                  alt={place.name}
                  className="z-0 w-62 h-full object-cover"
                  src={place.image}
                />
                <p>{place.description}</p>
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
function Locations() {
  const [places, setPlaces] = useState([]);
  const { city } = useParams();

  useEffect(() => {
    (async () => {
      const data = await getCall(`places/city/${city}`);
      setPlaces(data);
    })();
  }, []);
  return (
    <div className="md:px-10 px-4 my-5 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 max-sm:grid-cols-1 gap-4">
      {places.map((place) => (
        <PlaceCard key={place._id} place={place} />
      ))}
    </div>
  );
}

// const Hotels = () => {
//   return(
//     <div>
//       Hotels
//     </div>
//   )
// }


// const Restorants = () => {
//   return (
//     <div>
//       Restorants
//     </div>
//   )
// }



export default function Places() {
  const [selected, setSelected] = useState("places");

  return (
    <div className="w-full p-5 mt-24">
      <Card className="max-w-full w-full ">
        <CardBody className="overflow-hidden">
          <Tabs
            fullWidth
            size="md"
            aria-label="Tabs form"
            selectedKey={selected}
            onSelectionChange={setSelected}
          >
            <Tab key="places" title="Places">
              <Locations />
            </Tab>
            <Tab key="hotels" title="Hotels">
              <Hotels />
            </Tab>
          </Tabs>
        </CardBody>
      </Card>
    </div>
  );
}

export {PlaceCard , Locations};
