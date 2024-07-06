// Requires Node.js and the `sharp` library to be installed.
const sharp = require('sharp');
const fs = require('fs');

const directory = 'E:/Genesys/content';

fs.readdir(directory, (err, files) => {
  if (err) {
    console.error('Error reading directory:', err);
    return;
  }

  files.forEach((file) => {
    const filePath = `${directory}/${file}`;
    const outputFilePath = `${directory}/${file.replace(/\.[^/.]+$/, '')}.webp`;

    sharp(filePath)
      .toFile(outputFilePath, (err) => {
        if (err) {
          console.error('Error converting file:', err);
        } else {
          console.log(`File converted: ${file}`);
        }
      });
  });
});
