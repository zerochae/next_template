import Account from "./Account";
import { render } from "@testing-library/react";

it("matches snapshot", () => {
  const utils = render(<Account name="gray" mbti="INFP" />);
  expect(utils.container).toMatchSnapshot();
});

it("shows the props correctly",()=>{
  const utils = render(<Account name="gray" mbti="INFP"/>)
  utils.getByText("gray")
  utils.getByText("INFP")
})