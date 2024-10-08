import Heading from "../Heading";
import Members from "./Members";

export default function Team() {
  const member = [
    {
      profile:
        "https://abdulmalik-dev.com/wp-content/uploads/2024/10/cropped-IMG_20241002_090839-scaled-1.jpg",
      name: "Abdul Malik",
      title: "Developer",
    },
    {
      profile:
        "https://cdn.tailgrids.com/1.0/assets/images/team/image-07/image-02.png",
      name: "Stuard Ferrel",
      title: "Digital Marketer",
    },
    {
      profile:
        "https://cdn.tailgrids.com/1.0/assets/images/team/image-07/image-03.png",
      name: "Eva Hudson",
      title: "Creative Designer",
    },
    {
      profile:
        "https://cdn.tailgrids.com/1.0/assets/images/team/image-07/image-04.png",
      name: "Jackie Sanders",
      title: "Founder of Facebook",
    },
  ];

  return (
    <section
      id="team"
      className="overflow-hidden bg-gray-1 pb-12 pt-20 dark:bg-dark-2 lg:pb-[90px] lg:pt-[120px]"
    >
      <div className="container mx-auto">
        <Heading
          title={"Our Clients"}
          subTitle={"Our Team Members"}
          description={`There are many variations of passages of Lorem Ipsum available
                    but the majority have suffered alteration in some form.`}
          textAlign={"text-center"}
        />

        <div className="-mx-4 flex flex-wrap justify-center">
          <Members member={member} />
        </div>
      </div>
    </section>
  );
}
