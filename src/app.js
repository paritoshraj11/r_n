const http = require("http");
const fs = require("fs");

const PORT = 5000;

const requestListener = (req, res) => {
  const url = req.url;
  const method = req.method;
  console.log("::::::", { url, method });
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
    // fs.writeFileSync("msg.text", "Dummy data");
    res.statusCode = 302;
    res.setHeader("Location", "/"); //set location header to redirect client side to specific url
    return res.end();
  }

  res.write(
    `<html><head><title>My App </title></head><body><h1>this is testing app </h1></body></html`
  );
  res.end();
};
const server = http.createServer(requestListener);

const listeningListener = () => {
  console.log(`:: server started to listen at port ${PORT}   `);
};

server.listen(PORT, listeningListener);
