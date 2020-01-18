# Philippine Banks
List of Philippine banks from Bangko Sentral ng Pilipinas (BSP).

* See [demo](docs/index.html)

The list is available in CSV and JSON format:

* [banks.csv](src/banks.csv)
* [banks.json](src/banks.json)

The banks are grouped into 4: 

 * Universal and commercial banks
 * Thrift banks
 * Rural and cooperative banks
 * Non-banks with quasi-banking functions

## Install

You can also install this as a node module and use in your software applications.

#### Choose 1 of 3 options:

Install from NPM:

    npm install ph-banks

Install latest from GitHub:

    npm install github:kosinix/ph-banks

Tied to a specific version/release from GitHub:

    npm install github:kosinix/ph-banks#1.0.0
    
#### Quickstart

Then include the module

    const phBanks = require('ph-banks')

    console.log(phBanks)

## License
MIT

## Source

http://www.bsp.gov.ph/banking/directory.asp

Last updated: Jan 6, 2020

