#

# Halo Demo - Test Automation

End-to-End test automation project using WebdriverIO with Cucumber + Typescript for Swag Labs website.

## Environment Requirements

Before getting started, make sure you have installed:

- **Node.js** (version 18.x or higher)
- **npm** (comes with Node.js)
- **Git** for version control
- **Java JDK** (version 8 or higher) - Required for Allure reports

### Verify installation:

```bash
node --version
npm --version
git --version
java -version
```

## Steps to Clone the Project

1. Clone the repository:

```bash
git clone <REPOSITORY_URL>
```

2. Navigate to the project directory:

```bash
cd webdriverIO-demo
```

## Steps to Install Dependencies

1. Install project dependencies:

```bash
npm install
```

2. Verify that WebdriverIO was installed correctly:

```bash
npx wdio --version
```

## Environment Configuration

Create a `.env` file in the root directory of the project to configure the base URL:

1. **Create the .env file**:

```bash
touch .env
```

2. **Add the following content to .env**:

```env
BASE_URL=https://www.saucedemo.com
```

**Note**: The `.env` file should not be committed to version control. Make sure it's included in your `.gitignore` file.

## Project Structure

```
webdriverIO-demo/
├── config/                      # WebdriverIO configurations
│   ├── wdio.shared.conf.ts     # Shared configuration
│   ├── wdio.chrome.conf.ts     # Chrome specific configuration
│   ├── wdio.firefox.conf.ts    # Firefox specific configuration
│   └── wdio.cross-browser.conf.ts # Multi-browser configuration
├── src/
│   ├── features/               # .feature files (Gherkin/BDD)
│   │   └── login.feature
│   ├── page-objects/           # Page Object Model
│   │   ├── page.ts
│   │   ├── login.page.ts
│   │   └── products.page.ts
│   ├── step-definitions/       # Cucumber step definitions
│   │   ├── login.steps.ts
│   │   └── products.steps.ts
│   └── support/               # Utilities and helpers
│       ├── assert.ts
│       ├── command.ts
│       └── locate.ts
├── .env                        # Environment variables (BASE_URL)
├── .gitignore                  # Git ignore file
├── package.json
├── tsconfig.json
└── README.md
```

## Execution Scripts

### Available Scripts from package.json

| Script               | Description                       | Command                   |
| -------------------- | --------------------------------- | ------------------------- |
| **Cross-browser**    | Run tests on multiple browsers    | `npm run wdio`            |
| **Chrome**           | Run tests only on Chrome          | `npm run wdio:chrome`     |
| **Firefox**          | Run tests only on Firefox         | `npm run wdio:firefox`    |
| **Smoke Tests**      | Run tests tagged with @smoke      | `npm run wdio:smoke`      |
| **Regression Tests** | Run tests tagged with @regression | `npm run wdio:regression` |
| **Allure Report**    | Generate and serve Allure report  | `npm run allure:serve`    |

### Usage Examples

```bash
# Run all tests on multiple browsers
npm run wdio

# Run all tests only on Chrome
npm run wdio:chrome

# Run all tests only on Firefox
npm run wdio:firefox

# Run only smoke tests (cross-browser)
npm run wdio:smoke

# Run only regression tests (cross-browser)
npm run wdio:regression

# Generate and serve Allure HTML report (after test execution)
npm run allure:serve
```

## Test Reports

This project uses **Allure** for generating comprehensive test reports with:

- Test execution history
- Screenshots on failures
- Step-by-step execution details
- Trend analysis

### Generating Reports

1. **Run tests first** (they generate the allure-results):

```bash
npm run wdio:chrome
```

2. **Generate and serve the report**:

```bash
npm run allure:serve
```

The report will automatically open in your default browser at `http://localhost:some-port`.

## Available Tags

- `@smoke` - Smoke tests for critical functionalities
- `@regression` - Complete regression tests
- `@product` - Product-related functionality tests
- `@cart` - Shopping cart functionality tests
- `@checkout` - Checkout process tests

## Troubleshooting

### Common Issues

1. **Java JDK not found**: Make sure Java JDK is installed and available in your PATH

   ```bash
   java -version
   ```

2. **Allure command not found**: The allure command is bundled with the project dependencies

3. **Browser driver issues**: WebdriverIO automatically manages browser drivers

4. **BASE_URL not configured**: Make sure you have created the `.env` file with the correct BASE_URL

   ```bash
   # Check if .env file exists
   ls -la .env

   # Verify BASE_URL is set
   cat .env
   ```

### Logs and Debugging

- **Console output**: Real-time execution logs during test runs
- **Allure reports**: Comprehensive HTML reports with screenshots and execution details
- **allure-results/**: Raw test execution data (automatically generated)

## Contributing

1. Create a branch for your feature: `git checkout -b feature/new-functionality`
2. Make your changes and commits: `git commit -m "Description of changes"`
3. Push to the branch: `git push origin feature/new-functionality`
4. Create a Pull Request

## Additional Resources

- [WebdriverIO Documentation](https://webdriver.io/)
- [Cucumber.js Guide](https://cucumber.io/docs/cucumber/)
- [Swag Labs Demo Site](https://www.saucedemo.com/)

---

**Note:** This project uses TypeScript and ES Modules. Make sure your environment supports these technologies.
