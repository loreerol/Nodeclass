const args = Array.from(process.argv);

args.splice(0, 2);

args.forEach((arg) => {
    console.log(arg)
});