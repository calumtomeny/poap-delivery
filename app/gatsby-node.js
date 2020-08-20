exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /ethers/,
            use: loaders.null(),
          },
          {
            test: /web3/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}
