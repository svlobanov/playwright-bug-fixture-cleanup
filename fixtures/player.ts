import { Page, test as baseTest } from '@playwright/test';

export class Player {

    constructor(public readonly page: Page) {
    }

}

type PlayerFixtures = {
    player: Player;
};

export const test = baseTest.extend<PlayerFixtures>({

    player: async ({ page }, use) => {
        console.log("player fixture start");
        const player = new Player(page);

        await use(player);

        // Clean up the fixture.
        console.log("player fixture cleanup");
        // if comment this line, then video is saved
        await page.getByRole('button', {name: 'some-random-non-existent-name2'}).click();
    },
});
