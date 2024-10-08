/* eslint-disable react/prop-types */
export default function BlogList({ imgLink, title }) {
  return (
    <a href="blog-details.html" className="group flex items-center gap-[22px]">
      <div className="overflow-hidden rounded">
        <img className="h-[50px] w-[100%]" src={imgLink} alt="blog" />
      </div>
      <span className="max-w-[180px] text-base text-gray-7 group-hover:text-white">
        {title}
      </span>
    </a>
  );
}
