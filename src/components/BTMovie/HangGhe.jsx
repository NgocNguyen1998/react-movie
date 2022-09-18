import React, { Component } from 'react'

export default class HangGhe extends Component {
    renderGhe = () => {
        return this.props.hangGhe.danhSachGhe.map((ghe, index) => {

            let cssGheDaDat = '';
            let disable = false
            if (ghe.daDat) {
                cssGheDaDat = 'gheDuocChon'
                disable = true
            }
            return <button disabled={disable} className={`ghe ${cssGheDaDat}`} key={index} style={{marginLeft:'16px'}}>
                {ghe.soGhe}
            </button>
        })
    }
    renderSoHang = () => {
        return this.props.hangGhe.danhSachGhe.map((hang,index)=>{
            return <span className='rowNumber 'key={index}>
                {hang.soGhe}
            </span>
        })
    }
    renderHangGhe = () => {
        if (this.props.soHangGhe === 0) {
            return <div>
               
                {this.renderSoHang()}
            </div>
        } else {
            return <div>
                {this.props.hangGhe.hang}
                {this.renderGhe()}
            </div>
        }

    }
    render() {
        return (
            <div className='text-warning text-left ml-3 mt-2'>
                {this.renderHangGhe()}
            </div>
        )
    }
}
