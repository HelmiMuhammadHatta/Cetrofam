import fs from 'fs/promises';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function convertImages() {
  const assetsDir = path.join(__dirname, 'public', 'assets');
  try {
    const files = await fs.readdir(assetsDir);
    for (const file of files) {
      if (file.endsWith('.png') || file.endsWith('.jpg') || file.endsWith('.jpeg')) {
        const ext = path.extname(file);
        const baseName = path.basename(file, ext);
        const webpPath = path.join(assetsDir, `${baseName}.webp`);
        
        try {
          await sharp(path.join(assetsDir, file))
            .webp({ quality: 80 })
            .toFile(webpPath);
            
          console.log(`Converted ${file} to ${baseName}.webp`);
        } catch (e) {
          console.log(`Failed to convert ${file}: ${e.message}`);
        }
      }
    }
    console.log('Conversion complete!');
  } catch (error) {
    console.error('Error converting images:', error);
  }
}

convertImages();
