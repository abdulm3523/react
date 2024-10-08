import BlogList from "./BlogList";
import Widged from "./ListItem";
import Widged1 from "./Widged1";
export default function Footer() {
  return (
    <footer className="relative z-10 bg-[#090E34] pt-20 lg:pt-[100px]">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-4/12 xl:w-3/12">
            <Widged1
              decription={
                "We create digital experiences for brands and companies by using technology."
              }
            />
          </div>
          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
            <Widged
              title={"About Us"}
              pageList={["Home", "Features", "About"]}
            />
          </div>
          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-3/12 xl:w-2/12">
            <Widged
              title={"Features"}
              pageList={[
                "How it works",
                "Privacy policy",
                "Terms of Service",
                "Refund policy",
              ]}
            />
          </div>

          <div className="w-full px-4 md:w-2/3 lg:w-6/12 xl:w-3/12">
            <div className="mb-10 w-full">
              <h4 className="mb-9 text-lg font-semibold text-white">
                Latest blog
              </h4>
              <div className="flex flex-col gap-8">
                <BlogList
                  imgLink={
                    "https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/2017/07/27163529/hotel-style-bedroom-ideas-warm-light-options.png"
                  }
                  title={"I think really important to design with..."}
                />
                <BlogList
                  imgLink={
                    "https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/2017/07/27163531/hotel-style-bedroom-ideas-layered-bedding.png"
                  }
                  title={"I think really important to design with..."}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
