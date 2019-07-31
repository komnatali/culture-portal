import React from "react"

import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import { Typography, Box } from '@material-ui/core'

const Bold = ({ children }) => <Box fontWeight="fontWeightMedium" component='strong'>{children}</Box>
const Text = ({ children }) => <Typography variant='body1'>{children}</Typography>
const HEADING_1 = ({ children }) => <Typography variant='h1' color='primary'>{children}</Typography>
const HEADING_2 = ({ children }) => <Typography variant='h2' color='primary'>{children}</Typography>
const HEADING_3 = ({ children }) => <Typography variant='h3' color='primary'>{children}</Typography>
const HEADING_4 = ({ children }) => <Typography variant='h4' color='primary'>{children}</Typography>
const HEADING_5 = ({ children }) => <Typography variant='h5' color='primary'>{children}</Typography>

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