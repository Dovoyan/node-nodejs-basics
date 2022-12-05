import fs from 'fs';

const rename = async () => {
    try {
        await fs.promises.rename('./files/wrongFilename.txt', './files/properFilename.md', {
            recursive: true
        });
    } catch {
        throw new Error('FS operation failed')
    }

};

await rename();