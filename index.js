import { downloadFile } from "./downloadFile.js";
import { fileUrls } from "./filesToDownload.js";

const filesThatFailed = [];
const getDestinationFromUrl = (url) => {
  return url.split("/").splice(-1).join("/");
};

for (const [index, url] of fileUrls.entries()) {
  const destination = getDestinationFromUrl(url);
  console.log(`Downloading file ${index} with destination ${destination}`);
  try {
    await downloadFile(url, `./files/${destination}`);
    console.log(`Downloaded file ${index} with destination ${destination}`);
  } catch (err) {
    console.log(
      `Download for file ${index} with destination ${destination} failed. Retry.`
    );
    filesThatFailed.push(url);
  }
}

console.log(filesThatFailed);
