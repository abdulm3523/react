import Svg from "./svg"
export default function ServItem({heading,description,path}) {
    return (
         <div className="w-full px-4 md:w-1/2 lg:w-1/4">
                <div className=" group mb-12">
                <Svg svgPath={path} />
                    <h4 className="mb-3 text-xl font-bold text-dark dark:text-white">{heading} </h4>
                    <p className="mb-8 text-body-color dark:text-dark-6 lg:mb-9">{description}</p>
                    <a href="javascript:void(0)"
                    className="text-base font-medium text-dark hover:text-primary dark:text-white dark:hover:text-primary">
                        Learn More</a>
                </div>
        </div>
    )
}