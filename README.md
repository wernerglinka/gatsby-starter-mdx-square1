# Gatsby Starter Square1

## Dev setup

Using ESLint with Prettier plugin and Airbnb config

Install:

- eslint
- eslint-config-airbnb
- eslint-config-prettier
- eslint-plugin-import
- eslint-plugin-jsx-a11y
- eslint-plugin-prettier
- eslint-plugin-react
- prettier

## Styling

### Global styles are defined in SCSS.

Install:

- node-sass
- gatsby-plugin-scss

### Components are styled with Emotion styled

Install:

- @emotion/cache
- @emotion/core
- @emotion/styled
- @emotion/styled-base
- emotion-theming

### Typography

Using [typography.js](http://kyleamathews.github.io/typography.js/) with Moraga theme

- `npm install gatsby-plugin-typography react-typography typography --save`
- `npm install typography-theme-moraga --save`

- gatsby-plugin-prefetch-google-fonts

## Content

Content is written in MDX, pages are located in the scr/pages directory.
Generally, page content is accessed with graphql in the page template.

Content for components is stored in json files and located in the src/data directory.
Generally, component content is accessed with hooks (using static graphql queries).

### Titles in title case

Install:

- ap-style-title-case

Use:

```
import titleCase from "ap-style-title-case";
...
<h2>{titleCase(item.title)}</h2>
...

```

### Content in Frontmatter fields

Install:

- remark
- remark-preset-lint-recommended
- remark-html

Use:

```
import mdStringToHTML from "../utilities/md-to-html";
...
<div dangerouslySetInnerHTML={{ __html: mdStringToHTML(fields.pageIntro) }} />
...
```

## Page Transitions

Using CSS and a couple of router events in gatsby-browser.js.

## Smooth scroll to anchor links

source: https://medium.com/@chrisfitkin/how-to-smooth-scroll-links-in-gatsby-3dc445299558

Install:

- smooth-scroll
