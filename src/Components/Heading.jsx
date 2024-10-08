/* eslint-disable react/prop-types */

export default function Heading({ title, subTitle, description, textAlign }) {
  return (
    <div className="-mx-4 flex flex-wrap">
      <div className="w-full px-4">
        <div
          className={textAlign + " mx-auto mb-12 max-w-[600px] lg:mb-[70px]"}
        >
          {subTitle ? (
            <span className="mb-2 block text-lg font-semibold text-primary">
              {subTitle}
            </span>
          ) : (
            ""
          )}
          <h2 className="mb-3 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px] md:leading-[1.2]">
            {title}
          </h2>
          <p className="text-base text-body-color dark:text-dark-6">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
