import cron from "cron";
import puppeteer from "puppeteer";

export const startScraping = (): Promise<{
  newsTitle: string;
  newsImage: string;
  newsUrl: string;
}> => {
  return new Promise(async (resolve, reject) => {
    try {
      const browser = await puppeteer.launch();
      const page = await browser.newPage();

      await page.goto("https://vnexpress.net/");

      const newsTitle = await page.$eval(
        "h3.title-news a",
        (element) => element.textContent
      );
      const newsImage = await page.$eval("img.lazy", (element) =>
        element.getAttribute("data-ll-status") === "loaded"
          ? element.getAttribute("src")
          : ""
      );
      const newsUrl = await page.$eval("h3.title-news a", (element) =>
        element.getAttribute("href")
      );

      console.log("Scraped Data:", { newsTitle, newsImage, newsUrl });

      await browser.close();

      resolve({ newsTitle, newsImage, newsUrl });
    } catch (error) {
      console.error("Error occurred during scraping:", error);
      reject(error);
    }
  });
};
