import { downloadFile } from "./downloadFile.js";
import { fileUrls } from "./filesToDownload.js";

const filesThatFailed = [];
const getDestinationFromUrl = (url) => {
  return url.split("/").splice(6).join("/");
};

for (const [index, url] of fileUrls.entries()) {
  const destination = getDestinationFromUrl(url);
  console.log(`Downloading file ${index} with destination ${destination}`);
  try {
    await downloadFile(url, `./videos/${destination}`);
    console.log(`Downlaoded file ${index} with destination ${destination}`);
  } catch (err) {
    console.log(
      `Download for file ${index} with destination ${destination} failed. Retry.`
    );
    filesThatFailed.push(url);
  }
}

console.log(filesThatFailed);