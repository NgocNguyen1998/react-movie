import React, { Component } from 'react'

export default class ThongTinGhe extends Component {
    render() {
        return (
            <div>
                <div className=' mt-5'>
                    <button className='gheDuocChon' style={{ marginLeft: '-20px' }}> </button> <span style={{ fontSize: '20px' }} className='text-light'>Ghế đã đặt</span>
                    <br />
                    <button className='gheDangChon'> </button> <span style={{ fontSize: '20px' }} className='text-light'>Ghế đang đặt</span>
                    <br />
                    <button className='ghe' style={{ marginLeft: '-2px' }}> </button> <span style={{ fontSize: '20px' }} className='text-light'>Ghế chưa đặt</span>
                </div>

                <div className='mt-5'>
                    <table class="table" border={2}>
                        <thead>
                            <tr className='text-light' style={{ fontSize: '25px' }} >
                                <th>Số ghế</th>
                                <th>Giá</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr  >
                                <th>Số ghế</th>
                                <th>Giá</th>
                                <th></th>
                            </tr>
                            <tr  >
                                <th>Số ghế</th>
                                <th>Giá</th>
                                <th></th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        )
    }
}
