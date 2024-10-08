import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

export default function About() {
  return (
    <section
      id="about"
      className="bg-gray-1 pb-8 pt-20 dark:bg-dark-2 lg:pb-[70px] lg:pt-[120px]"
    >
      <div className="container">
        <div>
          <div className="-mx-4 flex flex-wrap items-center">
            <LeftSide />
            <RightSide />
          </div>
        </div>
      </div>
    </section>
  );
}
