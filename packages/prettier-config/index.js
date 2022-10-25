/*
 * BY-Health Front-End Team (https://www.by-health.com/)
 *
 * Copyright © 2016-present BY-Health Co Ltd. All rights reserved.
 */

module.exports = {
  overrides: [
    {
      files: '*.{js,jsx,ts,tsx,cjs,mjs}',
      options: {
        printWidth: 100,
        singleQuote: true,
        trailingComma: 'all',
      },
    },
    {
      files: '*.{yml,yaml}',
      options: {
        singleQuote: true,
      },
    },
  ],
};
