import { sum } from "./Home.jsx";
import { sumFromModal } from "../components/Modal";

describe("sum test", () => {
  it("sum from home", () => {
    const result = sum(3, 7);
    expect(result).toBe(10);
  });
  it("sum from modal", () => {
    const result = sumFromModal(3, 10);
    expect(result).toBe(13);
  });
});
