import React, { Component } from 'react'
import UploadImages from '../components/UploadImages'
import './impress.css'

class ImpressPayment extends Component {
  render() {
    return <div className="impress">
      <div>Pay</div>
      <div className="upload">
        <UploadImages>
          上传图片
        </UploadImages>
      </div>
    </div>
  }
}

export default ImpressPayment
