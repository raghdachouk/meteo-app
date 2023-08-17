import getRequest from "../getRequest";

describe("Request Test", () => {
  it("should test that getRequest returning true values", () => {
    expect(getRequest()).toEqual({ method: "GET" });
  });
});
