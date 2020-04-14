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

Content is written in MDX, pages are located in the content/pages directory.
Generally, page content is accessed via the page context in the page template.

Content for components is stored in json files and located in the content/data directory.
Generally, component content is accessed with hooks (using static graphql queries).

Install:

- gatsby-plugin-mdx
- @mdx-js/mdx
- @mdx-js/react

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

Using the react transition group node module.

Source: https://github.com/christiannwamba/Gatsby-page-transitions/blob/master/package.json

Install:

- react-transition-group

## Smooth scroll to anchor links

source: https://medium.com/@chrisfitkin/how-to-smooth-scroll-links-in-gatsby-3dc445299558

Install:

- smooth-scroll

## Components

### Section Wrapper

Renders a page section with a background color, in a container, both or full page width depending on two booleans `hasBackground`and`inContainer`.

### Media Component

Renders a combination of an image and text in a page section

- order of representation is determined by the boolean `imageLeft`
- the text may consist of a title, sub title, body text and a CTA
- the CTA may be internal or external, which is determined by the boolean `isExternal`

### Media Component with Video

Renders a combination of a video thumbnail and text in a page section. Upon clicking the thumbnail the video is played either in situ or in a modal.

- video playback type is determined by the boolean `isModal`
- otherwise same as media component

### Video Component

Renders a video in a page section. Upon clicking the thumbnail the video is played either in situ or in a modal.

- video playback type is determined by the boolean `isModal`
