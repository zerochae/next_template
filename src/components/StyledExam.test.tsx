import { render, screen } from "@testing-library/react";
import { matchers } from "@emotion/jest";
import StyledExam from "./StyledExam";

expect.extend(matchers);

describe("style test suite", () => {
  test("styled test case", () => {
    render(<StyledExam>헤딩</StyledExam>);
    const headingEl = screen.getByRole("heading", { level: 1 });
    expect(headingEl).toBeInTheDocument();
  });

  test("snapshot", () => {
    render(<StyledExam>헤딩</StyledExam>);
    const headingEl = screen.getByRole("heading", { level: 1 });
    expect(headingEl).toMatchSnapshot();
  });

  test("style rule", () => {
    render(<StyledExam>헤딩</StyledExam>);
    const headingEl = screen.getByRole("heading", { level: 1 });
    expect(headingEl).toHaveStyleRule("color", "red");
  });

  test("to have style", () => {
    render(<StyledExam>헤딩</StyledExam>);
    const headingEl = screen.getByRole("heading", { level: 1 });
    expect(headingEl).toHaveStyle("color:red");
  });
});
