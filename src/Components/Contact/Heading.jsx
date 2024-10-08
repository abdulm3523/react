export function Heading({ subtitle, title }) {
  return (
    <div className="ud-contact-title mb-12 lg:mb-[150px]">
      <span className="mb-6 block text-base font-medium text-dark dark:text-white">
        {subtitle}
      </span>
      <h2 className="max-w-[260px] text-[35px] font-semibold leading-[1.14] text-dark dark:text-white">
        {title}
      </h2>
    </div>
  );
}
