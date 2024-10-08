import { FbIcon, InsIcon, TwIcon } from "../Icon";

export default function SocialIcon({ url }) {
  return (
    <div className="flex items-center justify-center gap-5">
      <FbIcon url={url} />
      <TwIcon url={url} />
      <InsIcon url={url} />
    </div>
  );
}
