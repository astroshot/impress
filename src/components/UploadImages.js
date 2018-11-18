import React, { Component } from 'react'
import { Upload, Button, Icon } from 'antd'
import './upload_images.css'
import '../config/Config'
import Config from '../config/Config';

class UploadImages extends Component {
  state = {
    fileList: [],
  }

  handleChange = (info) => {
    console.log(info)
    let fileList = info.fileList

    // 1. Limit the number of uploaded files
    // Only to show two recent uploaded files, and old ones will be replaced by the new
    fileList = fileList.slice(-2)

    // 2. Read from response and show file link
    fileList = fileList.map((file) => {
      if (file.response) {
        console.log(file.response)
        // Component will show file.url as link
        file.url = file.response.url
      }
      return file;
    })

    // 3. Filter successfully uploaded files according to response from server
    fileList = fileList.filter((file) => {
      if (file.response) {
        return file.response.status === 'success'
      }
      return true
    })

    this.setState({ fileList })
  }

  render() {
    const props = {
      action: Config.urls['upload_images'] + '/images/actions/upload',
      accept: 'image/jpeg,image/png',
      listType: 'picture-card',
      onChange: this.handleChange,
      multiple: true,
    }
    return (
      <Upload {...props} fileList={this.state.fileList}>
        <Button>
          <Icon type="upload"/> Upload
        </Button>
      </Upload>
    )
  }
}

export default UploadImages
