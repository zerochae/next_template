import { observable } from "mobx";

export interface PageProps {
  name: String;
  changeName: (content: string) => void;
}

export const page = observable<PageProps>({
  name: "",
  changeName(content: string) {
    page.name = content;
  },
});

export const useStore = () => ({ page });
