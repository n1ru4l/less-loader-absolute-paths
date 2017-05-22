# Reproduction for absolute paths getting prefixed with `./`

```bash
yarn install
yarn start
````

## Expected: 

Everything runs fine.

## Actual

For some reason the absolute path which is passed in as a global variable into less-loader is prefixed with `./`.
