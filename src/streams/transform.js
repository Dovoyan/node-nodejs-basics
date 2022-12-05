import fs from 'fs';

const transform = async () => {


    process.stdin.on('data', data => {
        console.log(`You typed ${data.toString()}`);
        process.exit();
    });
};

await transform();