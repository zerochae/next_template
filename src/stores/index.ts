import { observable } from "mobx";

export interface PageProps {
  name: String;
  changeName: (content: string) => void;
}

export const page = observable<PageProps>({
  name: "",
  changeName(content: string) {
    this.name = content;
  },
});

export const useStore = () => ({ page });
