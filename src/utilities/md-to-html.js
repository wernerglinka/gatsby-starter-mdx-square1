import remark from "remark";
import recommended from "remark-preset-lint-recommended";
import remarkHtml from "remark-html";

/** convert a markdown string from a frontmatter field into an HTML string so it can be rendered */
function mdStringToHTML(mdString) {
  return remark()
    .use(recommended)
    .use(remarkHtml)
    .processSync(mdString)
    .toString();
}

export default mdStringToHTML;
