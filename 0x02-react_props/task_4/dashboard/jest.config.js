module.exports = {
  verbose: true,
  moduleNameMapper: {
    "^[./a-zA-Z0-9$_-]+\\.(?:ico|gif|png|jpg|jpeg)$": "file-loader",
    "^[./a-zA-Z0-9$_-]+\\.(css|sass)$": "css-loader",
  },
};
