import fs from 'fs';

const list = async () => {
    try {
        let files = await fs.promises.readdir("./files");
        files.forEach(file => {
            console.log(file)
        });
    } catch {
        throw new Error('FS operation failed')
    }
};

await list();