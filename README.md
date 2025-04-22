## Swag Labs

> A modern, full featured eCommerce application built to showcase online shopping functionalities including product browsing, cart management, user authentication and order processing.

## Prerequisites

* Google Chrome Version 135.0.7049.96 (Official Build) (64-bit)
* Node.js version : v22.14.0
* Git version : git version 2.49.0.windows.1
* Allure version : 2.33.0

 
## Installation

* Pull down this repo:

   `https://github.com/amrutak1611/SwagLabs.git`


* Change directory to SwagLabs:

   `cd SwagLabs`

* Install the dependencies:

   `npm install`


## Folder Structure

The following file and folder are stored in the root directory of the repository.
```bash
SWAGLABS
├── allure-report
├── pages
├── tests
├── utils
├── videos
└── visual
```

* `utils` folder contains testData.json file
* `videos` folder contains all the videos for the different users in .webm format. 
* `visual` folder contains snapshots for visual comparisons.

 
## Building the Website
`npx playwright test tests/WebCartApp.spec.js`


## Allure-Report
`allure open ./allure-report`

## Video-Report

[![Sauce-Demo](https://github.com/amrutak1611/SwagLabs1/blob/main/visual/WebCartApp.spec.js-snapshots/LoginPage-chromium-win32.png)](https://github.com/amrutak1611/SwagLabs1/blob/main/videos/Standard_User.mp4)

## Contribution

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
