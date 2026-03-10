const https = require("https");

https
  .get("https://abdraman.pages.dev/", (res) => {
    let html = "";
    res.on("data", (chunk) => {
      html += chunk;
    });
    res.on("end", () => {
      const og = html.match(/<meta property="og:image" content="([^"]+)"/i);
      const tw = html.match(/<meta name="twitter:image" content="([^"]+)"/i);
      console.log("status:", res.statusCode);
      console.log("og:image:", og ? og[1] : "not found");
      console.log("twitter:image:", tw ? tw[1] : "not found");
      if (!og || !og[1]) return;

      https
        .get(og[1], (imgRes) => {
          let total = 0;
          imgRes.on("data", (chunk) => {
            total += chunk.length;
          });
          imgRes.on("end", () => {
            console.log("image status:", imgRes.statusCode);
            console.log("image type:", imgRes.headers["content-type"] || "unknown");
            console.log("image bytes:", total);
          });
        })
        .on("error", (error) => {
          console.error("image request failed:", error.message);
        });
    });
  })
  .on("error", (error) => {
    console.error("request failed:", error.message);
    process.exit(1);
  });
