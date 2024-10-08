import ServItem from "../Features/ServItems";
import Heading from "../Heading";
import PatternSvg from "./PatternSvg";
import QuestionIcon from "./QuestionIcon";

export default function Faq() {
  return (
    <section className="relative z-20 overflow-hidden bg-white pb-8 pt-20 dark:bg-dark lg:pb-[50px] lg:pt-[120px]">
      <div className="container mx-auto">
        <Heading
          title={"Any Questions? Look Here"}
          subTitle={"FAQ"}
          description={`There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.`}
          textAlign={"text-center"}
        />

        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-1/2">
            <div className="mb-12 flex lg:mb-[70px]">
              <QuestionIcon />
              <ServItem
                heading={"Can I move my booking to a future date?"}
                description={`Moving your booking to a future date depends on the policies of the reservation. Please sign in using either your Booking.com account or confirmation number and PIN, select the booking you want to change, and you’ll see what options are available.`}
                widthClass={"w-full"}
              />
            </div>
            <div className="mb-12 flex lg:mb-[70px]">
              <QuestionIcon />
              <ServItem
                heading={"Can I give my reservation to someone else?"}
                description={`Please contact the property directly if you would like to transfer the reservation to someone else.

                    Each property will have its own policies around this type of change to a reservation and can inform you appropriately what those policies are.`}
                widthClass={"w-full"}
              />
            </div>
          </div>

          <div className="w-full px-4 lg:w-1/2">
            <div className="mb-12 flex lg:mb-[70px]">
              <QuestionIcon />
              <ServItem
                heading={"Thinking of booking a car?"}
                description={`With the vast majority of Booking.com car rental bookings, you can cancel for free up to 48 hours before you pick up the car. So if you’re thinking about renting a car, you can always book it now, and change or cancel your rental later on.`}
                widthClass={"w-full"}
              />
            </div>

            <div className="mb-12 flex lg:mb-[70px]">
              <QuestionIcon />
              <ServItem
                heading={"Is TailGrids Well-documented?"}
                description={`It takes 2-3 weeks to get your first blog post ready. That
                    includes the in-depth research & creation of your monthly
                    content ui/ux strategy that we do writing your first blog
                    post.`}
                widthClass={"w-full"}
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <PatternSvg
          color={"#13C296"}
          positionClass={"absolute left-4 top-4 -z-[1]"}
        />
        <PatternSvg
          color={"#3758F9"}
          positionClass={"absolute bottom-4 right-4 -z-[1]"}
        />
      </div>
    </section>
  );
}
