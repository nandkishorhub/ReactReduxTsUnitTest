module.exports = {
  roots: ["<rootDir>/src"],
//   transform: {
//     "^.+\\.tsx?$": "ts-jest",
//   },
  transform: { "^.+\\.(js|ts|tsx|jsx|mjs)$": "<rootDir>/node_modules/babel-jest" },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  transformIgnorePatterns: ["<rootDir>/node_modules/(?!lodash-es)"],
  globals: {
    Request,
    Response,
  },
};
