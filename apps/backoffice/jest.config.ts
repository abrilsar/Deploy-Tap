import nextJest from 'next/jest.js';
import dotenv from 'dotenv';

// load .env.test environment variables
dotenv.config({ path: '.env.local' });

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
});

// Add any custom config to be passed to Jest
const config = {
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],

  // moduleNameMapper: {
  //   '^uuid$': require.resolve('uuid'),
  // },
  // Add more setup options before each test is run
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  // moduleNameMapper: {
  //   '^@/components/(.*)$': '<rootDir>/components/$1',
  // },
};


console.log("jest", process.env.NEXTAUTH_URL)
console.log("jest", process.env.NEXT_PUBLIC_API_URL)

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config) as any;
