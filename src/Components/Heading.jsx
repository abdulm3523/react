export default function Heading({title,subTitle,description}) {
    return (
         <div class="-mx-4 flex flex-wrap">
            <div class="w-full px-4">
                <div class="mx-auto mb-12 max-w-[485px] text-center lg:mb-[70px]">
                        <span class="mb-2 block text-lg font-semibold text-primary">
                        {title}
                        </span>
                        <h2 class="mb-3 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px] md:leading-[1.2]">
                        {subTitle}
                        </h2>
                        <p class="text-base text-body-color dark:text-dark-6">
                        {description}
                        </p>
                </div>
            </div>
        </div>
    )
}