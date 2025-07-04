# 📊 Cypress Code Coverage Setup

<img width="1265" alt="image" src="https://github.com/user-attachments/assets/5c241856-87e9-4dac-afad-b6d570da07b7" />


This repository demonstrates how to set up **code coverage in Cypress** using the official `@cypress/code-coverage` plugin and `babel-plugin-istanbul`. 

It includes a simple **Frontend Single Page Application (SPA)** called **Expense Tracker**, built with React. We have written **end-to-end (E2E) tests using Cypress**, and integrated code coverage reporting to visualize which parts of the application code are executed during test runs.

## Tech Stack

- [Cypress](https://docs.cypress.io/) (v14)
- React (Webpack + Babel)
- `@cypress/code-coverage`
- `babel-plugin-istanbul`
- `nyc` (Istanbul CLI)
- Optional: [LambdaTest](https://www.lambdatest.com/) for cloud-based parallel execution

## Pre-requisites

- Node.js and npm are installed on your system
- (Optional) Procure the LambdaTest User Name and Access Key by navigating to [LambdaTest Account Page](https://accounts.lambdatest.com/security/username-accesskey). 

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/harita-gr/expense_tracker_cypress.git
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the application
We are running our React application in localhost.

```bash
npm run start
```

### 4. Run the tests

Now open another terminal and run the Cypress tests.

```bash
npx cypress run
```
After the test run is completed, the raw coverage data should be saved in the `.nyc_output/` folder.

### 5. Generate the HTML report

```bash
npx nyc report --reporter=html && open coverage/index.html
```

The generated report will be available at `coverage/index.html`.

<img width="989" alt="image" src="https://github.com/user-attachments/assets/2b58d935-53db-4e69-b72e-5f1c0f7c23a7" />

## 🚀 Running Cypress Tests in Parallel Using LambdaTest

### 1. Update the LambdaTest configuration file `lambdatest-config.json`

- Update the auth access by providing your LambdaTest username and access key
  
 ``` 
  "lambdatest_auth": {
     "username": "YOUR LAMBDATEST USERNAME",
     "access_key": "YOUR LAMBDATEST ACCESSKEY"
  },
```

- Configure the browser, OS and device your want to run your tests on. Lambdatest supports all major browsers and 3000+ browser versions.

 ``` 
  "browsers": [
     {
        "browser": "Chrome",
        "platform": "Windows 10",
        "versions": [
           "latest-1"
        ]
     },
     {
        "browser": "Firefox",
        "platform": "Windows 10",
        "versions": [
           "latest-1"
        ]
     }
  ],
```

- Modify run settings.

  The `run_settings` object defines how your Cypress tests are executed, including parallelization, test selection, and required dependencies.
    

```
  "run_settings": {
     "build_name": "cypress-code-coverage",
     "parallels": 3,
     "specs": "cypress/e2e/**/*.cy.js",
     "ignore_files": "",
     "network": false,
     "headless": false,
     "npm_dependencies": {
       "cypress": "14",
       "@cypress/code-coverage": "^3.14.5",
       ...
     }
  },
```

  Here's a detailed explanation of each major setting:

  -   **`build_name`**: `cypress-code-coverage`
      -   This is a descriptive name for your test run. It's particularly useful when integrating with Continuous Integration/Continuous Delivery (CI/CD) pipelines or reporting dashboards to easily identify specific test executions.
  
  -   **`parallels`**: `3`
      -   This setting specifies the number of parallel jobs or machines that will run your Cypress tests concurrently. Running tests in parallel can significantly reduce the overall execution time of your test suite, especially for large projects. A value of `3` means your tests will be distributed across three parallel processes.
  
  -   **`specs`**: `cypress/e2e/**/*.cy.js`
      -   This defines the glob pattern that tells Cypress where to find your test files.
      -   In essence, this setting tells Cypress to run all files ending in `.cy.js` within the `cypress/e2e` directory and any of its subdirectories.
  
  -   **`ignore_files`**: `""`
      -   This setting allows you to specify a glob pattern for files that Cypress should explicitly ignore when discovering test files. An empty string `""` means that no files are being explicitly ignored based on this setting, beyond the default Cypress ignore patterns.
  
  -   **`network`**: `false`
      -   This setting controls whether the Cypress test runner has access to the network during test execution. When set to `false`, Cypress will block all network requests initiated by your application under test. This can be useful for isolating tests and ensuring they don't depend on external network resources, but it's more common to have it set to `true` for typical end-to-end testing where network interactions are expected.
      -  **Caution:** Setting this to `false` will likely cause most web applications to not function correctly during tests unless they are specifically designed to work offline or are served entirely from memory.
  
  -   **`headless`**: `false`
      -   This setting determines whether Cypress runs in headless mode.
          -   `false`: Cypress will open a visible browser window during test execution. This is useful for debugging and observing test runs in real-time.
          -   `true`: Cypress will run the tests in the background without a visible browser UI. This is typically preferred for CI/CD environments as it consumes fewer resources and is often faster.
      -   Currently, your configuration is set to run tests with a visible browser.
  
  -   **`npm_dependencies`**: `{ ... }`
      -   This object lists the Node Package Manager (NPM) dependencies required for your Cypress test environment. These packages are essential for running Cypress itself, enabling code coverage, and handling JavaScript transpilation.


- Configure tunnel settings

```
  "tunnel_settings": {
     "tunnel": true,
      ...
  }
```

This section describes how your test environment connects, potentially through a secure tunnel.

tunnel: A boolean (true/false) indicating whether a secure tunnel should be established for your test run. 
        - Setting this to `false` allows your test to run in local grid.
        - Setting this to `true` allows your test to run in LambdaTest Cloud.



### 2. Run the tests

```
npx lambdatest-cypress run --cy="--config-file cypress.config.js"
```

### 3. Go to LambdaTest Dashboard to see the report.
<img width="838" alt="image" src="https://github.com/user-attachments/assets/3a4c8e41-30b1-4dcb-97a8-d619b55df1c2" />
