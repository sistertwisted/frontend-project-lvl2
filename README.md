### Hexlet tests and linter status:
[![Actions Status](https://github.com/lasogno/frontend-project-lvl2/workflows/hexlet-check/badge.svg)](https://github.com/lasogno/frontend-project-lvl2/actions)
[![CI](https://github.com/lasogno/frontend-project-lvl2/actions/workflows/CI.yml/badge.svg)](https://github.com/lasogno/frontend-project-lvl2/actions/workflows/CI.yml)
[![Maintainability](https://api.codeclimate.com/v1/badges/32f854982deafd833fe7/maintainability)](https://codeclimate.com/github/lasogno/frontend-project-lvl2/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/32f854982deafd833fe7/test_coverage)](https://codeclimate.com/github/lasogno/frontend-project-lvl2/test_coverage)

#### Difference calculator is a CLI utility that takes, parses and calculates all diffs in JSON and YAML files. 3 formatters avaliable: plain, stylish (tree-like structure) and json.

## Installation

1. Clone this repository:
```
$ git clone git@github.com:lasogno/frontend-project-lvl2.git
```

2. Proceed to the working directory:
```
$ cd frontend-project-lvl2
```

3. Install all dependencies:
```
$ make install
```

## Usage:
```
$ gendiff [options] <filepath1> <filepath2>
```
_Options:_
```
    -V, --version        output the version number
    -f, --format <type>  output format: stylish, plain, json (default: "stylish")
    -h, --help           display help for command
```

Below you will find some screencasts with interface and formatters demonstration:

* Plain JSON files
[![asciicast](https://asciinema.org/a/WUIvvI8T72UnKnLIP6Jc4jvKD.svg)](https://asciinema.org/a/WUIvvI8T72UnKnLIP6Jc4jvKD)
* Plain YAML and JSON files
[![asciicast](https://asciinema.org/a/9m0vm9aN8d1wPLGKd5GRDcSWA.svg)](https://asciinema.org/a/9m0vm9aN8d1wPLGKd5GRDcSWA)
* Nested YAML and JSON files, stylish formatter
[![asciicast](https://asciinema.org/a/h5yNSDvnDWG181IAdfgVvSHp2.svg)](https://asciinema.org/a/h5yNSDvnDWG181IAdfgVvSHp2)
* Plain formatter
[![asciicast](https://asciinema.org/a/VqEqiclr1mAK2S0HisJBLew8l.svg)](https://asciinema.org/a/VqEqiclr1mAK2S0HisJBLew8l)
* JSON formatter
[![asciicast](https://asciinema.org/a/HqqQdxRLKMoaK33B0KN0CWK7s.svg)](https://asciinema.org/a/HqqQdxRLKMoaK33B0KN0CWK7s)
