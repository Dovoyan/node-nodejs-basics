import fs from 'fs';
import crypto from 'crypto'

const calculateHash = async () => {
    try {
        let files = await fs.promises.readFile("./files/fileToCalculateHashFor.txt", 'utf8');
        const hash = crypto.createHash('sha256')
            .update(files)
            .digest('base64');
        console.log(Buffer.from(hash, 'utf8').toString('hex'))
    } catch {
        throw new Error('FS operation failed')
    }
};

await calculateHash();