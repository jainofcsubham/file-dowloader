# 🛠️ FileDownloader - A Simple Node.js Tool for Sequential File Downloads

Welcome to **FileDownloader**, a streamlined Node.js utility for downloading multiple files sequentially! If you’ve got a list of URLs and need to ensure every file downloads in order without overwhelming your network, this tool has you covered. 🎉

___


## 🚀 Features
- **Sequential Downloads**: Ensures one file downloads at a time to avoid overloading.
- **Retry-Friendly**: At the end of the process, any failed downloads are logged for easy retry.
- **Simple Setup**: Designed with ease of use in mind—just plug in your file URLs and hit ```npm start```.

___

## 🛠️  Getting Started

Follow these simple steps to start downloading your files in no time:

### 1️⃣Clone the Repository

```bash
git clone https://github.com/jainofcsubham/file-dowloader.git
cd FileDownloader
```

### 2️⃣ Install Dependencies

```bash
npm install
```
###  3️⃣ Add File URLs

Add the URLs of the files you want to download in the ```fileUrls``` variable inside ```filesToDownload.js```.

Example:
```javascript

const fileUrls = [
    'https://example.com/file1.mp4',
    'https://example.com/file2.pdf',
    // Add more URLs here
];
```

### 4️⃣ Start the Download Process
Run the tool:

```bash
npm start
```

___

## 🔍 How It Works
- **Sequential Processing**: Downloads each file one at a time from the URLs specified in ```fileUrls```.
- **Failed Downloads Handling**: If a file fails to download, its URL is saved to a list that gets logged at the end of the process.
- **Automatic Directory Creation**: Ensures necessary directories are created for your downloads.

___

## 📜 Example Output
Here's what you can expect in the terminal:

```bash
Downloading file 0 with destination ./videos/sample-file-1.mp4
Downloaded file 0 with destination ./videos/sample-file-1.mp4
Downloading file 1 with destination ./videos/sample-file-2.pdf
Download for file 1 with destination ./videos/sample-file-2.pdf failed. Retry.
Files that failed to download: [
  'https://example.com/file2.pdf'
]
```

___

## 📂 File Structure

```bash
FileDownloader/
├── filesToDownload.js   # Place your file URLs here
├── downloader.js        # Core file download logic
├── package.json         # Node.js configuration
└── README.md            # This guide
```

___

## 🧑‍💻 Contributing
We welcome contributions to enhance **FileDownloader!** Feel free to:

- Report issues
- Submit pull requests
- Suggest new features

___

## ✨ Feedback

If you find this tool helpful, give it a ⭐ on GitHub. We'd love to hear how you're using **FileDownloader!** 😊