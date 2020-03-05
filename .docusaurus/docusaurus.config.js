export default {
  "plugins": [],
  "themes": [],
  "customFields": {},
  "themeConfig": {
    "disableDarkMode": true,
    "navbar": {
      "title": "Radicle Registry",
      "logo": {
        "alt": "Radicle Logo",
        "src": "img/logo.svg"
      },
      "links": [
        {
          "to": "docs/intro",
          "label": "Docs",
          "position": "left"
        },
        {
          "href": "https://radicle.community",
          "label": "Community",
          "position": "left"
        },
        {
          "href": "https://radicle.xyz/towards-decentralized-code-collaboration.html",
          "label": "Blog",
          "position": "left"
        },
        {
          "to": "docs/faq",
          "label": "FAQ",
          "position": "left"
        },
        {
          "href": "https://github.com/radicle-dev",
          "label": "GitHub",
          "position": "right"
        }
      ]
    },
    "footer": {
      "style": "dark",
      "links": [
        {
          "title": "Docs",
          "items": [
            {
              "label": "Intro",
              "to": "docs/intro"
            },
            {
              "label": "Design",
              "to": "docs/design"
            },
            {
              "label": "RAD Token",
              "to": "docs/token"
            }
          ]
        },
        {
          "title": "Community",
          "items": [
            {
              "label": "Stack Overflow",
              "href": "https://stackoverflow.com/questions/tagged/radicle"
            },
            {
              "label": "Forum",
              "href": "https://radicle.community/"
            }
          ]
        },
        {
          "title": "Social",
          "items": [
            {
              "label": "Blog",
              "href": "https://radicle.xyz/towards-decentralized-code-collaboration.html"
            },
            {
              "label": "GitHub",
              "href": "https://github.com/radicle-dev"
            },
            {
              "label": "Twitter",
              "href": "https://twitter.com/radicle_xyz"
            }
          ]
        }
      ],
      "copyright": "Radicle, suprted by monadic.xyz with <3"
    }
  },
  "title": "Radicle Registry Documentation",
  "tagline": "The Radicle Registry Developer Hub",
  "url": "https://radicle-run.github.io",
  "baseUrl": "/",
  "favicon": "img/favicon.ico",
  "organizationName": "radicle-dev",
  "projectName": "radicle-run",
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "sidebarPath": "/home/onur/Downloads/test/radicle-run/sidebars.js",
          "editUrl": "https://github.com/radicle-dev/radicle-dev-hub/edit/master/website/"
        },
        "theme": {
          "customCss": "/home/onur/Downloads/test/radicle-run/src/css/custom.css"
        }
      }
    ]
  ]
};