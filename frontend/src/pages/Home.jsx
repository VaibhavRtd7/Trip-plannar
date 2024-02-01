/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { getCall } from "../api";
import Header2 from "../components/Header2";
// import PlaceCard from "./Places.jsx";
import PlaceDetail from "./PlaceDetail";
import { useParams } from "react-router-dom";
import { useNavigate} from "react-router-dom"
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


const PlaceCard = ({ place }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <>
      <Card id="homePlaces" isPressable onPress={onOpen} className=" h-[100%] ">
        <CardHeader className=" top-1 flex-col items-start">
          <p className="text-xl text-pink-900 uppercase font-bold">
            {place.city.name}
          </p>
          <h4 className="text-gray-900/90 font-medium text-2xl">{place.name}</h4>
        </CardHeader>
        <Image
          removeWrapper
          alt={place.name}
          className="z-0 w-full h-full object-cover"
          src={place.image}
        />
      </Card>

      <Modal className="h-[100vh] w-[100%]" size="2xl" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent className="h-[100vh] w-[100%]">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                {place.name} - {place.city.name}
              </ModalHeader>
              <ModalBody>
                <Image
                  removeWrapper
                  alt={place.name}
                  className="z-0 w-[100vw] object-cover"
                  src={place.image}
                />
                <p>{place.description}</p>
              </ModalBody>
              <ModalFooter className="gap-10">
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>

                <Button color="primary">
                  Book  
                </Button>
                <Button color="primary" >
                  More Details
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};



export default function App() {
  const [places, setPlaces] = useState([]);
  
  useEffect(() => {
    (async()=>{
      const data = await getCall("places");
      setPlaces(data);
      // console.log("Places " , data)
    })()
  }, [])

  // console.log("Places :- ", places)x
  
  return (
    <>
    <Header2 />
    <div className="mt-[50px] md:px-10 px-4 my-5 grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 max-sm:grid-cols-1 gap-10">
      {places.map((place) => (
        <PlaceCard key={place._id} place={place} />
        ))}
    </div>

     
    </>
  );
}










// const PlaceCard = ({ place }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const openModal = () => {
//     setIsOpen(true);
//   };

//   const closeModal = () => {
//     setIsOpen(false);
//   };

//   return (
//     <>
//     {

//       <div id="homePlaces" className="card-container h-80vh" onClick={openModal}>
//         <div className="card-header">
//           <p className="text-xl text-pink-900 uppercase font-bold">{place.city.name}</p>
//           <h4 className="text-gray-900/90 font-medium text-2xl">{place.name}</h4>
//         </div>
//         <img
//           alt={place.name}
//           className="card-image w-full h-full object-cover"
//           src={place.image}
//         />
//       </div>

//     }

//       {isOpen && ( 
//         <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
//           <div className="modal bg-white w-2/3">
//             <div className="modal-header p-4">
//               {place.name} - {place.city.name}
//             </div>
//             <div className="modal-body p-4">
//               <img
//                 alt={place.name}
//                 className="modal-image w-full object-cover"
//                 src={place.image}
//               />
//               <p className="mt-4">{place.description}</p>
//             </div>
//             <div className="modal-footer p-4 flex justify-end gap-4">
//               <button className="button danger" onClick={closeModal}>
//                 Close
//               </button>
//               <button className="button primary">Book</button>
//               <button className="button primary">More Details</button>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };


