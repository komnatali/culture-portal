import React from 'react';
import ModalVideo from 'react-modal-video';

export default class VideoInformation extends React.Component {

  constructor () {
    super()
    this.state = {
      isOpen: false
    }
    this.openModal = this.openModal.bind(this)
  }

  openModal () {
    this.setState({isOpen: true})
  }

  render () {
    const linkImage = `https://img.youtube.com/vi/${this.props.videolink}/hqdefault.jpg` 
    
    return (
      <div>
        <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId={this.props.videolink} onClose={() => this.setState({isOpen: false})} />
        <img  src={linkImage}  onClick={this.openModal}/>          
      </div>
    )
  }
}
