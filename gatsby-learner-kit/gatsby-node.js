const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const deps = require("./package.json").dependencies;
var path = require("path");

exports.onCreateWebpackConfig = ({ actions }) => {
    actions.setWebpackConfig({
        experiments: {
          topLevelAwait: true,
        },
        plugins: [
            new ModuleFederationPlugin(
                {
                  name: 'gatsby',
                  filename:
                    'remoteEntry.js',
                  remotes: {
                    MFE2:
                      'MFE2@http://localhost:8082/remoteEntry.js',
                    MFE1: 
                      'MFE1@http://localhost:8083/remoteEntry.js',
                  },
                }
            ),
        ]
    });
};
