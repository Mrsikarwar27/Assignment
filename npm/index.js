import  os  from 'os';


console.log(`This system has ${os.cpus().length} CPU cores.`);
console.log(`The system uptime is ${os.uptime()} seconds.`);

console.log(`The system architecture is ${os.arch()}.`);
console.log(`The operating system platform is ${os.platform()}.`);

console.log(`The total system memory is ${os.totalmem()} bytes.`);
console.log(`The free system memory is ${os.freemem()} bytes.`);        
console.log(`The system hostname is ${os.hostname()}.`);
console.log(`The system release version is ${os.release()}.`);



