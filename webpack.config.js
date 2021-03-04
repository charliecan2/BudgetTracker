const config = {
    entry: ["./public/src/index.js", "./public/src/db.js"],
    output: {
      path: __dirname + "/dist",
      filename: "bundle.js"
    },
    mode: "development"
};
  
module.exports = config;