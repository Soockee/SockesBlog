<p align="center">
  <a href="https://not-so-dark.net">
    <img
      src="https://github.com/Soockee/SockesBlog/blob/master/img/Logo.png"
      height="160"
      alt="not-so-dark.net"
      title="not-so-dark.net"
    />
  </a>
</p>
<p align="center">
  <h1>not-so-dark.net<h1>
</p>

# Usage


# Cloning
git clone https://github.com/Soockee/SockesBlog
cd SockesBlog

THEN
# switch to gatsby
cd gatsby

# Install dependencies
npm i

# Start dev server
gatsby develop

# Build for production
gatsby build

# Format with Prettier
npm format

```

## Folder structure
```bash
├──.circleci # Circleci integration
├── config # Theme and site metadata
├── content # Post markdown and images
├── src
│   ├── components
│   ├── layouts
│   ├── pages
│   ├── style
│   └── templates # For Post and Tag page generation
├── static # Images for logo and favicon, and robots.txt
├── gatsby-config.js # Plugin loading and configuration
└── gatsby-node.js # Generate posts/tags and modify webpack
```
