module.exports = {
  resolves: {
    fallback: { crypto: require.resolve('crypto-browserify') },
  },
};
