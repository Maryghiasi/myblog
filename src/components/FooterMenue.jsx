import React from 'react';

import {PropTypes} from 'prop-types';

import footerStyle from '../styles/footerStyle.css';



class FooterMenue extends React.Component {
    render() {

        const {
            footerLabel1,
            footerLabel2,
            footerLabel3

        } = this.props;
        return (

            <div className='right2left'>
             <div className='mainfooter'>
                
                <div className='sotoonfooter' >
                     <p>{footerLabel1}</p>
                     <a href="https://www.farsnews.ir/social/public-health/">سلامت</a>
                   <hr/>
                  <a href="htttps://www.google.com/">بهداشت عمومی تغذیه</a>

                </div>
                <div  className='sotoonfooter'>
                 <p>{footerLabel2}</p>
                   <a href="https://www.w3schools.com/">w3schools</a>
                   <hr/>
                  <a href="htttps://www.google.com/">google</a>
                   

                </div>
                <div className='sotoonfooter'>
                    <p>{footerLabel3}</p>
  
                </div>

              </div>
            </div>
        )
    };
};
FooterMenue.propTypes = {
    footerLabel1: PropTypes.string,
    footerLabel2: PropTypes.string,
    footerLabel3: PropTypes.string
}
FooterMenue.defaultProps = {
    footerLabel1:'اخبار',
    footerLabel2:'لینک مفید',
    footerLabel3:' تمامی حقوق این سایت برای بلاگ قیاسی  محفوظ است. نقل مطالب با ذکر منبع بلامانع است'

}

export default FooterMenue;



