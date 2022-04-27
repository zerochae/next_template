import Button from "components/Button";
import { NextPage } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { useQuery } from "react-query";
import { useRecoilState } from "recoil";
import { pageNameState } from "../states";
import Error from "next/error";

const PostPage: NextPage = () => {
  const [pageName, setPageName] = useRecoilState(pageNameState);

  const { data } = useQuery(
    ["pageName", pageName],
    async () => {
      const fetchData = await fetch("http://localhost:3000/api/hello2");
      return await fetchData.json();
    },
    {
      suspense: true,
      useErrorBoundary: true,
    }
  );

  return (
    <Suspense fallback={<div>loading</div>}>
      <Error statusCode={500}>
        <div>
          <div>
            <span>pageName: {pageName}</span>
            <Button pageName={"post"} setPageName={setPageName} />
          </div>
          <div>{JSON.stringify(data)}</div>
          <Link href="/">
            <button>Index Pages 이동</button>
          </Link>
        </div>
      </Error>
    </Suspense>
  );
};

export default PostPage;
