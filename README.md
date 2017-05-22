# Reproduction for absolute paths getting prefixed with `./`

```bash
yarn install
yarn start
````

## Expected: 

Everything should build without errors. less should be able to resolve the import in `src/main.less`.

## Actual

Build fails.
For some reason the absolute path which is passed in as a global variable into less-loader is prefixed with `./`.
