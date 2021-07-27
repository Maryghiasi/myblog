import React from "react";
import propTypes from 'prop-types';
import MainMenu from '../components/MainMenu'
import BodyMenu from '../components/BodyMenu'
import Footer from '../components/FooterMenue'
import img_lights_wide from '../assets/img/img_lights_wide.jpg'
import styel from '../styles/styel.css'



class Homepage extends React.Component {
    render(){
        // var
        const {
        //
        } = this.props

        return(
            <>
            <MainMenu />
            <img src={img_lights_wide} className='slideshow' alt='asd'></img>
            <BodyMenu/>
            <Footer/>
            </>
        )
    }
}

Homepage.propTypes = {

}
Homepage.defaultProps = {}

export default Homepage;