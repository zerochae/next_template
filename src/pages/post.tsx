import Button from "components/Button";
import { NextPage } from "next";
import Link from "next/link";
import { useRecoilState } from "recoil";
import { pageNameState } from "../states";

const PostPage: NextPage = () => {
  const [pageName, setPageName] = useRecoilState(pageNameState);

  return (
    <div>
      <div>
        <span>pageName: {pageName}</span>
        <Button pageName={"post"} setPageName={setPageName} />
      </div>
      <div></div>
      <Link href="/">
        <button>Index Pages 이동</button>
      </Link>
    </div>
  );
};

export default PostPage;
