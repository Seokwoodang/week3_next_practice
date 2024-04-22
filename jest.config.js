// jest.config.js
const nextJest = require("next/jest");

const createJestConfig = nextJest({});

// Jest에 전달할 사용자 정의 구성 추가
/** @type {import('jest').Config} */
const customJestConfig = {
  collectCoverageFrom: ["./components/**/*.ts"],
  coverageThreshold: {
    global: {
      statements: 95,
      branches: 90,
      functions: 95,
      lines: 90,
    },
  },
};

// createJestConfig은 next/jest에서 Next.js 구성을 비동기적으로 로드할 수 있도록 이렇게 내보내집니다
module.exports = createJestConfig(customJestConfig);
