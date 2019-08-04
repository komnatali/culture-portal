import React from "react"

import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import { Typography, Box } from '@material-ui/core'

const Bold = ({ children }) => <Box fontWeight="fontWeightMedium" component='strong'>{children}</Box>
const Text = ({ children }) => <Typography variant='body1'>{children}</Typography>
const HEADING1 = ({ children }) => <Typography variant='h1' color='primary'>{children}</Typography>
const HEADING2 = ({ children }) => <Typography variant='h2' color='primary'>{children}</Typography>
const HEADING3 = ({ children }) => <Typography variant='h3' color='primary'>{children}</Typography>
const HEADING4 = ({ children }) => <Typography variant='h4' color='primary'>{children}</Typography>
const HEADING5 = ({ children }) => <Typography variant='h5' color='primary'>{children}</Typography>

const options = {
  renderMark: {
    [MARKS.BOLD]: text => <Bold>{text}</Bold>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
    [BLOCKS.HEADING_1]: (node, children) => <HEADING1>{children}</HEADING1>,
    [BLOCKS.HEADING_2]: (node, children) => <HEADING2>{children}</HEADING2>,
    [BLOCKS.HEADING_3]: (node, children) => <HEADING3>{children}</HEADING3>,
    [BLOCKS.HEADING_4]: (node, children) => <HEADING4>{children}</HEADING4>,
    [BLOCKS.HEADING_5]: (node, children) => <HEADING5>{children}</HEADING5>,
  },
}

export default function RenderRichText(json) { return documentToReactComponents(json, options); }