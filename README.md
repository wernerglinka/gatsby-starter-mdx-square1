# Gatsby Starter Square1

live site here: https://gatsby-square1.netlify.app/

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

### Global styles

Styling uses gatsby-plugin-global-styles for creating independent **global CSS styles**, and automatically placing them at the top of the <head> element.

Install:

- gatsby-plugin-global-styles
- @nfront/global-styles

### Components are styled with Emotion styled

Install:

- @emotion/cache
- @emotion/core
- @emotion/styled
- @emotion/styled-base
- emotion-theming

### Typography

- gatsby-plugin-prefetch-google-fonts

## Content

Content is written in MDX, pages are located in the content/pages directory.
Generally, page content is accessed via the page context in the page template.

Content for components is stored in json files and located in the content/data directory.
Generally, component content is accessed with hooks (using static graphql queries).

Shortcodes may be inserted in MDX content

Syntax Highlighting is available

Install:

- gatsby-plugin-mdx
- @mdx-js/mdx
- @mdx-js/react
- prism-react-renderer

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

Using implementation from https://github.com/ryanwiemer/gatsby-using-page-transitions

Install:

- framer-motion

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

### CTA Banner

Renders a full width banner with a single Call-to-Action. Includes a header, sub title and a link button
