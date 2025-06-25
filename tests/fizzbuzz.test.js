import { expect, describe, it } from "vitest";
import { fizzBuzz } from "../src/intro";

describe("fizzBuzz", () => {
  it("the number is divisible by 3 and 5", () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
    expect(fizzBuzz(45)).toBe("FizzBuzz");
    expect(fizzBuzz(75)).toBe("FizzBuzz");
  });
  it("the number is divisible by 3 and no 5", () => {
    expect(fizzBuzz(3)).toBe("Fizz");
    expect(fizzBuzz(9)).toBe("Fizz");
    expect(fizzBuzz(27)).toBe("Fizz");
    expect(fizzBuzz(81)).toBe("Fizz");
    expect(fizzBuzz(18)).toBe("Fizz");
  });
  it("the number is divisible by 5 and no 3", () => {
    expect(fizzBuzz(5)).toBe("Buzz");
    expect(fizzBuzz(25)).toBe("Buzz");
    expect(fizzBuzz(125)).toBe("Buzz");
    expect(fizzBuzz(10)).toBe("Buzz");
    expect(fizzBuzz(20)).toBe("Buzz");
    expect(fizzBuzz(35)).toBe("Buzz");
  });
  it("it should arg if it isn't divisible by 3 or 5", () => {
    expect(fizzBuzz(1)).toBe("1");
  });
});
