import Heading from "../Heading";
import Card from "./CardItems";
const Properties = () => {
  const roomsDate = [
    {
      img: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg",
      title: "Modern Skyline Hotel",
      cost: "$20000",
      bedrooms: "3",
      bathrooms: "2",
    },
    {
      img: "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg",
      title: "Coastal Paradise Resort",
      cost: "$25000",
      bedrooms: "4",
      bathrooms: "4",
    },
    {
      img: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg",
      title: "Seaside Serenity Inn",
      cost: "$5000",
      bedrooms: "5",
      bathrooms: "3",
    },
    {
      img: "https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/2017/07/27163531/hotel-style-bedroom-ideas-layered-bedding.png",
      title: "City Center Boutique Stay",
      cost: "$60000",
      bedrooms: "5",
      bathrooms: "2",
    },
    {
      img: "https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/2017/07/27163529/hotel-style-bedroom-ideas-warm-light-options.png",
      title: "Urban Escape Hotel",
      cost: "$70000",
      bedrooms: "6",
      bathrooms: "3",
    },
    {
      img: "https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/2017/07/27163528/hotel-style-bedroom-ideas-double-layer-drapery.png",
      title: "Mountain View Retreat",
      cost: "$70600",
      bedrooms: "7",
      bathrooms: "5",
    },
    //     {
    //     img: "https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/2017/07/27163527/hotel-style-bedroom-ideas-lounge-chairs.png",
    //     title: 'Luxury Downtown Hotel',
    //     cost: '$6000',
    //     bedrooms: '6',
    //     bathrooms:'4'

    // }
  ];

  return (
    <section>
      <div className="container">
        <Heading
          subTitle={"Properties"}
          title={"Grab your Dream Property"}
          description={
            "There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
          }
          textAlign={"text-center"}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card CardsDate={roomsDate} />
        </div>
      </div>
    </section>
  );
};

export default Properties;
