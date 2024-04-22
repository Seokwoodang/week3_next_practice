import { add, subtract, multiple, divide } from "./calculator";

it("덧셈 계산 테스트", () => {
  expect(add(2, 4)).toBe(6);
});

it("뺄셈 계산 테스트", () => {
  expect(subtract(2, 4)).toBe(-2);
});

it("곱셈 계산 테스트", () => {
  expect(multiple(2, 4)).toBe(8);
});

it("나눗셈 계산 테스트", () => {
  expect(divide(2, 4)).toBe(0.5);
});
