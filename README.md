# rotate-table

Given a CSV file representing a series of tables, this program implements a rotation engine that parses, verifies and rotates each table, and finally outputs a CSV file with all valid and rotated tables.

The input is a CSV file with the columns id and json (sample added in the repo). The json column contains a table represented in a continous array.

The program can be called using the following command:

`node cli.js input.csv > output.csv`

## Unit tests

Unit tests where added testing common scenarios and error states.

A more conprehensive unit test was added with cases of tables of row sizes 1 to 100 to test for completeness and performance.

Unit tests can be run with the following command:

`npm run test`
