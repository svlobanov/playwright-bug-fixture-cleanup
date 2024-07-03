import { expect } from '@playwright/test';
import { test } from '../fixtures/player';

test('has title', async ({ page, player }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
  await page.getByRole('button', {name: 'some-random-non-existent-name1'}).click();
});