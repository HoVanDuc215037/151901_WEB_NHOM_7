import React, { Component } from 'react';
import { connect } from 'react-redux';
import './EliteDoctorSection.scss';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FormattedMessage } from 'react-intl';
import { LANGUAGES } from "../../../../utils";
import { switchLanguageOfWebsite } from "../../../../store/actions";

class EliteDoctorSection extends Component {

    SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={`${className} slider-button-next override`}
                style={style}
                onClick={onClick}
            />
        );
    }

    // Định nghĩa hàm SamplePrevArrow
    SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={`${className} slider-button-prev override`}
                style={style}
                onClick={onClick}
            />
        );
    }

    render() {
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 2,
            nextArrow: <this.SampleNextArrow />,  // Sử dụng SampleNextArrow
            prevArrow: <this.SamplePrevArrow />,  // Sử dụng SamplePrevArrow
            autoplay: true,
            className: 'elite-doctor-section-slider',
            // dotsClass: 'elite-doctor-section-dots-of-slider',
            autoplaySpeed: 8000,
            speed: 1000,
            pauseOnHover: true,
            // fade: true,
            // focusOnSelect: true,
            pauseOnDotsHover: true,
        };

        return (
            <div className="elite-doctor-section">
                <div className="elite-doctor-section-contents">
                    <div className="elite-doctor-section-section-title">
                        <div className="title-text">
                            <FormattedMessage id="elite-doctor-section.elite-doctor-section-title" />
                        </div>
                        <div className="spacing"></div>
                        <div className="more-detail-button"><a href="#" className="button">
                            <FormattedMessage id="elite-doctor-section.more-detail-button" />
                        </a></div>
                    </div>

                    <Slider {...settings}>
                        <div className="item-content">
                            <div className="item-of-slider">
                                <div className="image-of-item-1 image-css"></div>
                                <div className="item-content">Bùi Tá Đức
                                </div>
                            </div>
                        </div>

                        <div className="item-content">
                            <div className="item-of-slider">
                                <div className="image-of-item-2 image-css"></div>
                                <div className="item-content">Phạm Quang Đức
                                </div>
                            </div>
                        </div>
                        <div className="item-content">
                            <div className="item-of-slider">
                                <div className="image-of-item-3 image-css"></div>
                                <div className="item-content">Phan Trung Đức
                                </div>
                            </div>
                        </div>
                        <div className="item-content">
                            <div className="item-of-slider">
                                <div className="image-of-item-4 image-css"></div>
                                <div className="item-content">Hồ Văn Đức
                                </div>

                            </div>
                        </div>
                        <div className="item-content">
                            <div className="item-of-slider">
                                <div className="image-of-item-1 image-css"></div>
                                <div className="item-content">Bùi Tá Đức
                                </div>
                            </div>
                        </div>
                        <div className="item-content">
                            <div className="item-of-slider">
                                <div className="image-of-item-2 image-css"></div>
                                <div className="item-content">Phan Trung Đức
                                </div>
                            </div>
                        </div>

                    </Slider>
                </div>
            </div >
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(EliteDoctorSection);
