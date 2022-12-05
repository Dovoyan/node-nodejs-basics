const parseArgs = () => {
    const res = process.argv.reduce(function (acc, currentValue, index, array) {
        if (currentValue.startsWith("--")) {
            console.log(1)
            return acc + process.argv[index] + " is " + process.argv[index + 1] + ", "
        }
        return acc
    }, "");
    console.log(res.slice(0, -2))
};

parseArgs();