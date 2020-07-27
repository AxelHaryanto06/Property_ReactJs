import React from 'react'
import './CSS/About.css'

function AboutComp() {
    return (
        <div>
            <div className="box"></div>
            <p className="logo-box">KUYPROPERTY</p>
            <div>
                <div className="about-box"></div>
                <p className="aboutlogo-box">KUYPROPERTY</p>
                <p className="about-text">KuyProperty merupakan situs yang menghubungkan penjual dan pembeli dalam bidang property. semua property yang Anda daftarkan harus berupa property yang ingin Anda jual</p>
            </div>
            <div>
                <div className="picture">
                    <img className="picture-1" src="https://images.unsplash.com/photo-1526666361175-e3595627c376?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=749&q=80"></img>
                    <img className="picture-2" src="https://images.unsplash.com/photo-1522198428577-adf2d374b05b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"></img>
                    <img className="picture-3" src="https://images.unsplash.com/photo-1525072124541-6237cc05f4f7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=811&q=80"></img>                    
                </div>
            </div>
            <div>
                <p className="aman">Aman</p>
                <p className="nyaman">Nyaman</p>
                <p className="damai">Damai</p>
            </div>
        </div>
    )
}

export default AboutComp
