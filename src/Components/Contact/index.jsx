import { EmailIcon, MapIcon } from "../Icon";
import Form from "./Form";
import { Heading } from "./Heading";
import { Items } from "./Items";

export default function Contact() {
  return (
    <section id="contact" className="relative py-20 md:py-[120px]">
      <div className="absolute left-0 top-0 -z-[1] h-full w-full dark:bg-dark"></div>
      <div className="absolute left-0 top-0 -z-[1] h-1/2 w-full bg-[#E9F9FF] dark:bg-dark-700 lg:h-[45%] xl:h-1/2"></div>
      <div className="container px-4">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div className="ud-contact-content-wrapper">
              <Heading
                subtitle={"CONTACT US"}
                title={"Let's talk about your problem."}
              />
              <div className="mb-12 flex flex-wrap justify-between lg:mb-0">
                <div className="mb-8 flex w-[330px] max-w-full">
                  <MapIcon />
                  <Items
                    title={" Our Location"}
                    desc={
                      "401 Broadway, 24th Floor, Orchard Cloud View, London"
                    }
                  />
                </div>
                <div className="mb-8 flex w-[330px] max-w-full">
                  <EmailIcon />
                  <Items
                    title={"How Can We Help?"}
                    desc={`info@yourdomain.com
                        contact@yourdomain.com`}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <Form />
          </div>
        </div>
      </div>
    </section>
  );
}
