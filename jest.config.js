// jest.config.js
const nextJest = require("next/jest");

const createJestConfig = nextJest({
  // 테스트 환경에서 next.config.js 및 .env 파일을 로드하기 위해 Next.js 앱의 경로를 제공합니다
  //   dir: "./",
});

// Jest에 전달할 사용자 정의 구성 추가
/** @type {import('jest').Config} */
const customJestConfig = {
  // 각 테스트가 실행되기 전에 추가 설정 옵션을 더할 수 있습니다
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  //   testEnvironment: "jest-environment-jsdom",
};

// createJestConfig은 next/jest에서 Next.js 구성을 비동기적으로 로드할 수 있도록 이렇게 내보내집니다
module.exports = createJestConfig(customJestConfig);
