
function Card() {
  //  console.log("In Card Class")
  return (
    
    <div className="mx-4 border-dashed border-2 border-stone-400  overflow-hidden bg-stone-200 rounded shadow-md">
      <img
        className="object-cover w-full h-56"
        src="https://plus.unsplash.com/premium_photo-1697729701846-e34563b06d47?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGdvYXxlbnwwfHwwfHx8MA%3D%3D"
        alt="card-image"
      />
      <div className="p-4">
        <h5 className="text-xl font-semibold text-blue-gray mb-2">
          Goa - The Beautiful City
        </h5>
        <p className="text-blue-gray">
          The place is close to Barceloneta Beach and bus stop just 2 min by
          walk and near to Naviglio where you can enjoy the main night life in
          Barcelona.
        </p>
      </div>

     </div>
  );
}

export default Card;
