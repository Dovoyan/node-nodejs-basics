import fs from 'fs';

const read = async () => {
    const stream = new fs.ReadStream("./files/fileToRead.txt", { encoding: 'utf-8' });
    let data = ""

    stream.on('readable', function () {
        data = stream.read();
        if (data != null) process.stdout.write(data)
    });
};

await read();