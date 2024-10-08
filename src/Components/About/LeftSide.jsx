import Button from "../Button";
import Heading from "../Heading";
export default function LeftSide() {
  return (
    <div className="w-full px-4 lg:w-1/2">
      <Heading
        title={"Innovative Tools for Real Estate Excellence"}
        // subTitle={}
        description={`
                    The main ‘thrust’ is to focus on educating our clients on how to best navigate the real estate market
            with interactive guides and personalized consultations led by industry experts.
            
            The main ‘thrust' is to focus on educating attendees on how to
            best protect highly vulnerable business applications with
            interactive panel.
                `}
        textAlign=""
      />
      <Button
        styleClass={
          "inline-flex items-center justify-center rounded-md border border-primary bg-primary px-7 py-3 text-center text-base font-medium text-white hover:border-blue-dark hover:bg-blue-dark"
        }
        btnText={" Know More"}
        url={"javascript:void(0)"}
      />
    </div>
  );
}
