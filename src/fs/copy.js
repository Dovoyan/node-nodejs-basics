import fs from 'fs';

const copy = async () => {
    try {
        await fs.promises.mkdir('./files_copy');
        await fs.promises.cp("./files", "./files_copy", {
            recursive: true,
        })
    } catch (e) {
        throw new Error('FS operation failed')
    }


};

copy();