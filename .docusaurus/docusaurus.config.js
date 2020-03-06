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
          "position": "right"
        },
        {
          "href": "https://github.com/radicle-dev/radicle-registry",
          "label": "code",
          "position": "right"
        },
        {
          "to": "docs/faq",
          "label": "FAQ",
          "position": "right"
        }
      ]
    },
    "footer": {
      "style": "dark",
      "links": [
        {
          "title": "Get involved",
          "items": [
            {
              "label": "Radicle is free and open source software, we welcome all contributors. "
            },
            {
              "label": "Follow us on twitter.",
              "href": "https://twitter.com/radicle_xyz"
            },
            {
              "label": "Contribute to the development on github.",
              "href": "https://github.com/radicle-dev"
            },
            {
              "label": "Join the conversation on discourse.",
              "href": "https://radicle.community/"
            },
            {
              "label": "Drop in the #radicle channel on freenode.",
              "href": "irc://freenode:1/radicle"
            }
          ]
        },
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
        }
      ],
      "copyright": "supported by monadic.xyz"
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
          "sidebarPath": "/Users/julien-mini/code/radicle/radicle-run/sidebars.js",
          "editUrl": "https://github.com/radicle-dev/radicle-dev-hub/edit/master/website/"
        },
        "theme": {
          "customCss": "/Users/julien-mini/code/radicle/radicle-run/src/css/custom.css"
        }
      }
    ]
  ]
};