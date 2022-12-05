const parseEnv = () => {
    let arr = Object.entries(process.env);
    let str = "";
    const res = arr.filter(element => element[0].startsWith("RSS_"))
    res.forEach(element => {

        str += element.join("=")
        str += "; "
    });

    console.log(str.slice(0, -2))
};

parseEnv();