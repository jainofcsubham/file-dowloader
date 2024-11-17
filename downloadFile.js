import axios from "axios";
import fs from "fs";
import path from 'path';

export const downloadFile = async (fileUrl,destinationPath) => {
    const response = await axios({
        url: fileUrl,
        method: 'GET',
        responseType: 'stream',    });

    const directory = path.dirname(destinationPath); // Extract the directory path
    fs.mkdirSync(directory, { recursive: true }); // Create directories if they don't exist

    const file = fs.createWriteStream(destinationPath);
    response.data.pipe(file);
    return new Promise((resolve, reject) => {
        file.on('finish', () => {
            resolve('Download completed!');
        });

        file.on('error', (error) => {
            reject(error);
        });
    });
}
