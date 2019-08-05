import React from 'react';
import ModalVideo from 'react-modal-video';
import './css/modal-video.min.css';
import { Typography } from '@material-ui/core';

export default class VideoInformation extends React.Component {

  constructor() {
    super()
    this.state = {
      isOpen: false
    }
    this.openModal = this.openModal.bind(this)
  }

  openModal() {
    this.setState({ isOpen: true })
  }

  render() {
    const linkImage = `https://img.youtube.com/vi/${this.props.videolink}/hqdefault.jpg`
    const StyleButtonVideo = {
      display: "block",
      margin: "100px auto",
      maxWidth: "800px",
      height: "550px",
      cursor: "pointer"
    }

    return (
      <div style={StyleButtonVideo}>
        <Typography gutterBottom variant="h4" component="h3" align="center" >Video</Typography>
        <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId={this.props.videolink} onClose={() => this.setState({ isOpen: false })} />
        <img style={{ maxWidth: "100%", height: "550px" }} src={linkImage} onClick={this.openModal} alt='' />
      </div>
    )
  }
}