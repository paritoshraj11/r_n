const fs = require("fs");
//this file is created for raw request parsing
const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  res.setHeader("Content-Type", "text/html");
  if (url === "/") {
    res.write(
      `<html>
           <head>
               <title>My App </title>
           </head>
           <body>
             <p>Form test </p>
             <form action="/message" method="POST"  >
               <input name="message" />
               <button type="submit">Submit</button>
             </form>
           </body>
        </html`
    );
    return res.end();
  }
  if (url === "/message" && method === "POST") {
    let chunks = [];
    req.on("data", chunk => {
      chunks.push(chunk);
    });
    req.on("end", () => {
      let buffer = Buffer.concat(chunks).toString();
      fs.writeFileSync("testing1.txt", buffer);
    });
    res.statusCode = 302;
    res.setHeader("Location", "/"); //set location header to redirect client side to specific url
    return res.end();
  }

  res.write(
    `<html><head><title>My App </title></head><body><h1>this is testing app </h1></body></html`
  );
  res.end();
};

module.exports = requestHandler;
