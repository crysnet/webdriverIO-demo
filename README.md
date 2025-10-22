# 

# Halo Demo - Test Automation

End-to-End test automation project using WebdriverIO with Cucumber + Typescript for Swag Labs website.

## Environment Requirements

Before getting started, make sure you have installed:

- **Node.js** (version 18.x or higher)
- **npm** (comes with Node.js)
- **Git** for version control

### Verify installation:

```bash
node --version
npm --version
git --version
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
├── package.json
├── tsconfig.json
└── README.md
```

## Execution Scripts

### Available Scripts from package.json

| Script | Description | Command |
|--------|-------------|---------|
| **Cross-browser** | Run tests on multiple browsers | `npm run wdio` |
| **Chrome** | Run tests only on Chrome | `npm run wdio:chrome` |
| **Firefox** | Run tests only on Firefox | `npm run wdio:firefox` |
| **Smoke Tests** | Run tests tagged with @smoke | `npm run wdio:smoke` |
| **Regression Tests** | Run tests tagged with @regression | `npm run wdio:regression` |

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
```

## Available Tags

- `@smoke` - Smoke tests for critical functionalities
- `@regression` - Complete regression tests

## Troubleshooting
### Logs and Debugging

Test execution reports are automatically generated and can be found in:
- Console output during execution

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