import { describe, expect, it } from "vitest";
import { DistrictModel as MyModel } from "./mymodel";
describe("my model", () => {
  it("should be defined", () => {
    expect(MyModel).toBeDefined();
  });
  it("should match snapshot", () => {
    expect(
      MyModel.create({
        id: "1",
        name: "my 1",
      })
    ).toMatchSnapshot();
  });
});
