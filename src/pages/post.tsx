import Button from "components/Button";
import { NextPage } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { useQuery } from "react-query";
import { useRecoilState } from "recoil";
import { pageNameState } from "../states";
import { useStore } from "stores";
import { atom, useAtomValue, useSetAtom } from "jotai";

const name_atom = atom("");

const PostPage: NextPage = () => {
  const [pageName, setPageName] = useRecoilState(pageNameState);
  const { name, changeName } = useStore().page;
  const nameAtom = useAtomValue(name_atom);
  const setNameAtom = useSetAtom(name_atom);

  return (
    <Suspense fallback={<div>loading</div>}>
      {/* <Error statusCode={500}> */}
      <div>
        <div>
          <span>
            pageName: {pageName} {name} {nameAtom}
          </span>
          <Button
            pageName={"post"}
            setPageName={setPageName}
            changeName={changeName}
            setNameAtom={setNameAtom}
          />
        </div>
        {/* <div>{JSON.stringify(data)}</div> */}
        <Link href="/">
          <button>Index Pages 이동</button>
        </Link>
      </div>
      {/* </Error> */}
    </Suspense>
  );
};

export default PostPage;
