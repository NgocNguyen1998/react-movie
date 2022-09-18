import React, { Component } from 'react'
import { connect } from 'react-redux';

class HangGhe extends Component {
    renderGhe = () => {
        return this.props.hangGhe.danhSachGhe.map((ghe, index) => {

            let cssGheDaDat = '';
            let disable = false;
            //trang thai ghe bi dat roi
            if (ghe.daDat) {
                cssGheDaDat = 'gheDuocChon'
                disable = true
            }
            // trang thai ghe dang dat
            let cssGheDangChon = ''
            let indexGheDangDat = this.props.danhSachGheDangDat.findIndex(gheDangChon => gheDangChon.soGhe === ghe.soGhe)
            if (indexGheDangDat !== -1) {
                cssGheDangChon = 'gheDangChon'
            }
            return <button onClick={()=>{this.props.datGhe(ghe)}} disabled={disable} className={`ghe ${cssGheDaDat} ${cssGheDangChon}`} key={index} style={{ marginLeft: '12px' }}>
                {ghe.soGhe}
            </button>
        })
    }
    renderSoHang = () => {
        return this.props.hangGhe.danhSachGhe.map((hang, index) => {
            return <span className='rowNumber' key={index}>
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
               <span style={{fontSize:'20px'}} className='pr-2'>{this.props.hangGhe.hang}</span> 
                {this.renderGhe()}
            </div>
        }

    }
    render() {
        return (
            <div className='text-warning text-left  mt-2'>
                {this.renderHangGhe()}
            </div>
        )
    }
}


const mapStataToProps = state => {
    return {
        danhSachGheDangDat: state.baiTapMovie.danhSachGheDangDat
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        datGhe: (ghe) =>{
            dispatch({
                type: 'DAT_GHE',
                payload: ghe
            })
        },
       
    }
}
export default connect(mapStataToProps,mapDispatchToProps)(HangGhe)