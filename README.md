# Website

This website is built using <a href="https://v2.docusaurus.io/" target="_blank" rel="noopener noreferrer">Docusaurus 2</a>, a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

```
$ GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

### Cloudfare

We have Cloudflare set up on `radicle.run` to:

- manage DNS records
- offer SSL certificates for all sub-domains
- benefict from its CDN features (speed, caching, security)
