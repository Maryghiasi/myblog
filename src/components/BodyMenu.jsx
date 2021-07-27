import React from 'react';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import {PropTypes} from 'prop-types';

import bodyStyle from '../styles/bodyStyle.css';
import news1 from '../assets/img/news1.jpg';
import news2 from '../assets/img/news2.jpg';
import news3 from '../assets/img/news3.jpg';
import fonts from '../fonts/BYekan.ttf'

class Mycards extends React.Component {

    // this function handles paging
    openInNewTab = (chertopert) => {
        const newWindow = window.open(chertopert)
        if (newWindow) newWindow.opener = null
    };


    render() {

        //var
        const {
            title,
            buttonLabel,
            content,
            address,
            ax
        } = this.props;

        return (
            <Card className='mycard'>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="140"
                        image={ax}
                        title="Contemplative Reptile"
                    />
                    <CardContent className='right2left'>
                        <Typography gutterBottom variant="h5" component="h2"  >
                            {title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p" >
                          {content}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    {/* this button goes to full content */}
                    <Button size="small" color="primary" onClick={() => this.openInNewTab(address)}>
                        {buttonLabel}
                    </Button>

                </CardActions>
            </Card>
        )
    };
};


Mycards.propTypes = {
    title: PropTypes.string,
    buttonLabel: PropTypes.string,
    content: PropTypes.string,
    address: PropTypes.string,
    ax:PropTypes.string
}
Mycards.defaultProps = {
    buttonLabel: 'ادامه مطلب'
}


class BodyMenu extends React.Component {
    render() {

        const {
  

        } = this.props;
        return (
            <div className='mainbody'>
                <div className='sotoon'>
                    <Mycards
                        title='امروز در خیابان جمهوری تهران چه خبر بود؟'
                        content='معاون امنیتی استانداری: تجمع به خاطر قطعی برق در پاساژ علاءالدین بود / فارس: چندین نفر شعار سیاسی دادند / صداوسیما: جمعیت متفرق شد'
                        address='https://www.entekhab.ir/fa/news/629796/%D8%A7%D9%85%D8%B1%D9%88%D8%B2-%D8%AF%D8%B1-%D8%AE%DB%8C%D8%A7%D8%A8%D8%A7%D9%86-%D8%AC%D9%85%D9%87%D9%88%D8%B1%DB%8C-%D8%AA%D9%87%D8%B1%D8%A7%D9%86-%DA%86%D9%87-%D8%AE%D8%A8%D8%B1-%D8%A8%D9%88%D8%AF'
                        ax={news1}
                    />
                </div>
                <div className='sotoon'>
                    <Mycards
                        title='آمار مبتلایان به کرونا'
                        content='بنابر اعلام مرکز روابط عمومی و اطلاع رسانی وزارت بهداشت، تا کنون ۸ میلیون و ۲۴۱ هزار و ۸۵۲ نفر دُز اول واکسن کرونا و دو میلیون و ۴۲۶ هزار و ۶۹۷ نفر نیز دُز دوم را تزریق کرده اند و مجموع واکسن های تزریق شده در کشور به ۱۰ میلیون و ۶۶۸ هزار و ۵۴۹ دُز رسید'
                        address='https://www.entekhab.ir/fa/news/629772/%D8%A2%D8%AE%D8%B1%DB%8C%D9%86-%D8%A2%D9%85%D8%A7%D8%B1-%DA%A9%D8%B1%D9%88%D9%86%D8%A7-%D8%AF%D8%B1-%D8%A7%DB%8C%D8%B1%D8%A7%D9%86-%DB%B4-%D9%85%D8%B1%D8%AF%D8%A7%D8%AF-%DB%B1%DB%B4%DB%B0%DB%B0-%D9%81%D9%88%D8%AA-%DB%B3%DB%B2%DB%B2-%D9%86%D9%81%D8%B1-%D8%AF%D8%B1-%D8%B4%D8%A8%D8%A7%D9%86%D9%87-%D8%B1%D9%88%D8%B2-%DA%AF%D8%B0%D8%B4%D8%AA%D9%87'
                        ax={news2}
                         />
                        
                </div>
                <div className='sotoon'>

                    <Mycards
                        title='روسیه-از-تولید-اسپوتنیک-در-ایرانم '
                        content='مرتضی خاتمی عضو کمیسیون بهداشت و درمان مجلس، گفت: در حال حاضر خط تولید واکسن اسپوتنیک در داخل کشور ما هم در حال راه اندازی است؛ منتها روس‌ها در این تولید هم سهم عمده‌ای را برای خودشان قائل هستند؛ در حالیکه انتظار این بود که تمام تولید این خط داخلی برای خودمان باشد اما روسیه از خطوط تولید در هر کشور سهم عمده‌ای را دریافت می‌کند.'
                        address='https://www.entekhab.ir/fa/news/629766/%D8%B1%D9%88%D8%B3%DB%8C%D9%87-%D8%A7%D8%B2-%D8%AA%D9%88%D9%84%DB%8C%D8%AF-%D8%A7%D8%B3%D9%BE%D9%88%D8%AA%D9%86%DB%8C%DA%A9-%D8%AF%D8%B1-%D8%A7%DB%8C%D8%B1%D8%A7%D9%86-%D8%B3%D9%87%D9%85-%D8%B9%D9%85%D8%AF%D9%87%E2%80%8C%D8%A7%DB%8C-%D9%87%D9%85-%D8%A8%D8%B1%D8%A7%DB%8C-%D8%AE%D9%88%D8%AF-%D9%82%D8%A7%D8%A6%D9%84-%D8%A7%D8%B3%D8%AA-%D9%85%DB%8C%D8%B2%D8%A7%D9%86-%D9%88%D8%A7%DA%A9%D8%B3%D9%86%DB%8C-%DA%A9%D9%87-%D8%B1%D9%88%D8%B3%DB%8C%D9%87-%D8%AA%D8%B9%D9%87%D8%AF-%DA%A9%D8%B1%D8%AF%D9%87%E2%80%8C-%D8%AA%D8%A7-%D8%A7%DB%8C%D9%86-%D9%84%D8%AD%D8%B8%D9%87-%D8%AF%D8%B3%D8%AA-%D9%85%D8%A7-%D8%B1%D8%A7-%D8%A8%D9%87-%D8%AE%D9%88%D8%A8%DB%8C-%D9%86%DA%AF%D8%B1%D9%81%D8%AA%D9%87-%DA%86%D8%B1%D8%A7-%DA%86%D9%86%DB%8C%D9%86-%D9%82%D8%B1%D8%A7%D8%B1%D8%AF%D8%A7%D8%AF%DB%8C-%D8%A8%D8%A7-%D8%B1%D9%88%D8%B3%DB%8C%D9%87-%D8%A8%D8%B3%D8%AA%D9%87-%D8%B4%D8%AF-%DA%86%D8%A7%D8%B1%D9%87%E2%80%8C%D8%A7%DB%8C-%D9%86%D8%AF%D8%A7%D8%B4%D8%AA%DB%8C%D9%85-%D8%AC%D8%B2-%D8%A7%DB%8C%D9%86%DA%A9%D9%87-%D8%A8%D9%87-%D9%87%D8%B1-%D8%B7%D8%B1%DB%8C%D9%82-%D9%85%D9%85%DA%A9%D9%86-%D9%88%D8%A7%DA%A9%D8%B3%D9%86-%D8%AA%D9%87%DB%8C%D9%87-%DA%A9%D9%86%DB%8C%D9%85'
                        ax={news3}
                         />
                       
                </div>

            </div>
        )
    };

};



export default BodyMenu;



