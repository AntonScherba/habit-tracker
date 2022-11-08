module.exports = {
  '*.{js,jsx,ts,tsx,md,html,css}': [
    'eslint --fix',
    'prettier --write',
    'npm run test -- --bail --watchAll=false --findRelatedTests --passWithNoTests --coverage',
  ],
  '*.json': ['prettier --write'],
};
