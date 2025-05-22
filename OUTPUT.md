# OUTPUT.md

## Automatically Copying Traced Files

Next.js can automatically create a standalone folder that copies only the necessary files for a production deployment including select files in node_modules.

To leverage this automatic copying you can enable it in your next.config.js:

```js
module.exports = {
  output: 'standalone',
}
```

This will create a folder at .next/standalone which can then be deployed on its own without installing node_modules.

Additionally, a minimal server.js file is also output which can be used instead of next start. This minimal server does not copy the public or .next/static folders by default as these should ideally be handled by a CDN instead, although these folders can be copied to the standalone/public and standalone/.next/static folders manually, after which server.js file will serve these automatically.

To copy these manually, you can use the cp command-line tool after you next build:

```bash
cp -r public .next/standalone/ && cp -r .next/static .next/standalone/.next/
```

To start your minimal server.js file locally, run the following command:

```bash
node .next/standalone/server.js
```

### Good to know

next.config.js is read during next build and serialized into the server.js output file. If the legacy serverRuntimeConfig or publicRuntimeConfig options are being used, the values will be specific to values at build time.
If your project needs to listen to a specific port or hostname, you can define PORT or HOSTNAME environment variables before running server.js. For example, run PORT=8080 HOSTNAME=0.0.0.0 node server.js to start the server on <http://0.0.0.0:8080>.

Source: [https://nextjs.org/docs/pages/api-reference/config/next-config-js/output]
