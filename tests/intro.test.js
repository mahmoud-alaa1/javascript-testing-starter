import { describe, test, it, expect } from "vitest";
import { max } from "../src/intro";

describe("max", () => {
  it("should return the first number if it is greater than the second", () => {
    expect(max(2, 1)).toBe(2);
  });
  it("should return the second number if it is greater than the first", () => {
    expect(max(1, 2)).toBe(2);
  });
  it("should return the first number they are equal", () => {
    expect(max(1, 1)).toBe(1);
  });
});
