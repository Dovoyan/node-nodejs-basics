import { Worker } from 'worker_threads'
import os from 'os'

const performCalculations = async () => {
    let cpuLen = (os.cpus().length);
    let threads = [];

    for (let i = 0; i < cpuLen; i++) {

        const promise = new Promise((resolve, reject) => {
            const worker = new Worker("./worker.js", { workerData: 10 + i });
            worker.once('message', (message) => {
                resolve(message)
            });
        });
        threads.push(promise);
    }
    let res = await Promise.allSettled(threads)


    let finalres = res.map((el) => {
        let obj = {}
        if (el.status === 'fulfilled') {
            obj.status = 'resolved'
            obj.data = el.value;
        } else {
            obj.status = 'error'
            obj.data = null
        }
        return obj
    })

    console.log(finalres)
};

await performCalculations();