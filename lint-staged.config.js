module.exports = {
  '*.{js,jsx,ts,tsx,html}': [
    'eslint --fix',
    'eslint --max-warnings=0',
    'prettier --write',
  ],
  '*.{css,md,json}': ['prettier --write'],
};
