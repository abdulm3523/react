const Svg = (props) =>{
    return (
        <div className="relative z-10 mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-[14px] bg-primary">
            <span
                className="absolute left-0 top-0 -z-[1] mb-8 flex h-[70px] w-[70px] rotate-[25deg] items-center justify-center rounded-[14px] bg-primary bg-opacity-20 duration-300 group-hover:rotate-45">
                
            </span>
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                
                {
                    props.svgPath.map((d,index) => (
                        <path key={index} d={d}
                        fill="white" />
                    ))
                }
            </svg>
        </div>
    )
}

export default Svg