/* eslint-disable react/prop-types */
import { FbIcon, InsIcon, LinkIcon, TwIcon } from "../Icon";
import Logo from "../Logo";
export default function Widged1({ decription }) {
  return (
    <div className="mb-10 w-full">
      <a href="javascript:void(0)" className="mb-6 inline-block  max-h-[100px]">
        <Logo logoUrl={"../../../src/assets/images/logo/logo.svg"} />
      </a>
      <p className="mb-8 lg:max-w-[270px] text-base text-gray-7">
        {decription}
      </p>
      <div className="-mx-3 flex items-center">
        <FbIcon />
        <TwIcon />
        <InsIcon />
        <LinkIcon />
      </div>
    </div>
  );
}
