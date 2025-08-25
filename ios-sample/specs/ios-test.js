describe("Proverbial APK", () => {
  before(async () => {
    // Click allow button at the start of the test
    try {
      // Try different possible button texts for iOS permissions
      const buttonSelectors = [
        '//*[@label="Allow"]',
        '//*[@label="OK"]',
        '//*[@label="Continue"]',
        '//*[@name="Allow"]',
        '//*[@name="OK"]'
      ];

      for (const selector of buttonSelectors) {
        try {
          const button = await $(selector);
          await button.waitForDisplayed({ timeout: 3000 });
          await button.click();
          console.log(`Clicked permission button: ${selector}`);
          break; // Exit loop if button is found and clicked
        } catch (e) {
          // Continue to next selector
        }
      }
    } catch (error) {
      console.log("Permission button not found or already handled:", error.message);
    }
  });

  it("Changes color", async () => {
    var color = await $("id=color");
    await color.waitForDisplayed({ timeout: 30000 });
    await color.click();
    await color.click();
  });

  it("Changes text", async () => {
    var text = await $("id=Text");
    await text.waitForDisplayed({ timeout: 30000 });
    await text.click();
  });

  it("Toast", async () => {
    var toast = await $("id=toast");
    await toast.waitForDisplayed({ timeout: 30000 });
    await toast.click();
  });

  it("Notification", async () => {
    var nf = await $("id=notification");
    await nf.waitForDisplayed({ timeout: 30000 });
    await nf.click();
  });

  it("Geolocation", async () => {
    var geo = await $("id=geoLocation");
    await geo.waitForDisplayed({ timeout: 30000 });
    await geo.click();
    await browser.pause(10000);
    await driver.back();
  });
});
