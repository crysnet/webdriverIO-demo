import { sharedConfig } from "./wdio.shared.conf";

export const config = {
  ...sharedConfig,
  capabilities: [
    {
      browserName: "chrome",
      "goog:chromeOptions": {
        args:
          process.env.HEADLESS === "true"
            ? [
                "--headless",
                "--no-sandbox",
                "--disable-dev-shm-usage",
                "--disable-gpu",
              ]
            : [],
      },
    },
  ],
};
