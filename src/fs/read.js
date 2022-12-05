import fs from 'fs';

const read = async () => {
    try {
        let files = await fs.promises.readFile("./files/fileToRead.txt", 'utf8');
        console.log(files)
    } catch {
        throw new Error('FS operation failed')
    }
};

await read();