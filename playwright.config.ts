import { PlaywrightTestConfig} from '@playwright/test';

const config: PlaywrightTestConfig = {
  testDir: 'test-cases',
  //sets timeout for each test case
  timeout: 120000,
  //number of retries if test case fails
  retries: 0,
  //Reporters
  reporter: [['html', { outputFolder: 'html-report', open: 'never' }]],

  projects: [
    {
      name: 'Chrome',
      use: {
        // Configure the browser to use.
        browserName: 'chromium',
        //Chrome Browser Config
        channel: 'chrome',
        //Browser Mode
        headless: false,
        //Browser height and width
        viewport: { width: 1500, height: 730 },
        ignoreHTTPSErrors: true,
        //Enable File Downloads in Chrome
        acceptDownloads: true,
        //Artifacts
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
        trace: 'retain-on-failure',
        //Slows down execution by ms
        launchOptions: {
          slowMo: 0
        }
      },
    },
    {
      name: 'Firefox',
      use: {
        browserName: 'firefox',
        headless: false,
        viewport: { width: 1500, height: 730 },
        ignoreHTTPSErrors: true,
        acceptDownloads: true,
        screenshot: 'only-on-failure',
        video: 'on',
        trace: 'retain-on-failure',
        launchOptions: {
          slowMo: 1000
        }
      },
    }
  ],
};
export default config;