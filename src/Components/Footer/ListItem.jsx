/* eslint-disable react/prop-types */
export default function Widged({ title, pageList }) {
  return (
    <div className="mb-10 w-full">
      <h4 className="mb-9 text-lg font-semibold text-white">{title}</h4>

      <ul>
        {pageList.map((item, index) => (
          <li key={index}>
            <a
              href="javascript:void(0)"
              className="mb-3 inline-block text-base text-gray-7 hover:text-primary"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
