import fs from 'fs';

const write = async () => {
    let writeableStream = fs.createWriteStream("./files/fileToWrite.txt");

    process.stdin.on('data', data => {
        // console.log(`You typed ${data.toString()}`);
        writeableStream.write(data.toString())
        process.exit();
    });
};

await write();