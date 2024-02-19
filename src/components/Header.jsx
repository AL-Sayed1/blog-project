import React from 'react'
import { images } from '../constants'

const Header = () => {
  return (
    <section>
        <Header>
            <div>
                <img src={images.Logo} alt='logo' />
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">Article</a></li>
                    <li><a href="">Pages</a></li>
                    <li><a href="">Pricing</a></li>
                    <li><a href="">Faq</a></li>
                </ul>
            </div>
            <div>
            
            </div>
        </Header>
    </section>
  )
}

export default Header

