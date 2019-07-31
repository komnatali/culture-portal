import React from "react"

import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const Bold = ({ children }) => <strong>{children}</strong>
const Text = ({ children }) => <p>{children}</p>
const HEADING_1 = ({ children }) => <h1>{children}</h1>
const HEADING_2 = ({ children }) => <h2>{children}</h2>
const HEADING_3 = ({ children }) => <h3>{children}</h3>
const HEADING_4 = ({ children }) => <h4>{children}</h4>
const HEADING_5 = ({ children }) => <h5>{children}</h5>

const options = {
  renderMark: {
    [MARKS.BOLD]: text => <Bold>{text}</Bold>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
    [BLOCKS.HEADING_1]: (node, children) => <HEADING_1>{children}</HEADING_1>,
    [BLOCKS.HEADING_2]: (node, children) => <HEADING_2>{children}</HEADING_2>,
    [BLOCKS.HEADING_3]: (node, children) => <HEADING_3>{children}</HEADING_3>,
    [BLOCKS.HEADING_4]: (node, children) => <HEADING_4>{children}</HEADING_4>,
    [BLOCKS.HEADING_5]: (node, children) => <HEADING_5>{children}</HEADING_5>,
  },
}

export default function RenderRichText(json) { return documentToReactComponents(json, options); }