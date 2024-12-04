import React, { Component } from 'react';
import { connect } from 'react-redux';
import './SpecialtySection.scss';
import { withRouter } from 'react-router';
import * as actions from '../../../../store/actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FormattedMessage } from 'react-intl';
import { LANGUAGES, path } from "../../../../utils";
import { switchLanguageOfWebsite } from "../../../../store/actions";

class SpecialtySection extends Component {

    constructor(props) {
        super(props);
        this.state = {
            arrSpecialty: [],
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.specialtiesData !== this.props.specialtiesData) {
            this.setState({
                arrSpecialty: this.props.arrSpecialty,
            })
        }
    }

    componentDidMount() {
        this.props.loadSpecialties();
    }

    handleViewDetailArticleOfASpecialty = (specialty) => {
        // console.log("Check this doctor: ", doctor);
        this.props.history.push(`/detail-specialty-article/${specialty.id}`);
    }

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
        let arrSpecialty = this.props.specialtiesData;
        let { language } = this.props;
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 3,
            nextArrow: <this.SampleNextArrow />,
            prevArrow: <this.SamplePrevArrow />,
            autoplay: true,
            className: 'specialty-section-slider',
            autoplaySpeed: 6000,
            speed: 1000,
            pauseOnHover: true,
            pauseOnDotsHover: true,
        };

        return (
            <div className="specialty-section">
                <div className="specialty-contents">
                    <div className="specialty-section-title">
                        <div className="title-text">
                            <FormattedMessage id="specialty-section.specialty-section-title" />
                        </div>
                        <div className="spacing"></div>
                        <div className="more-detail-button"><a href={path.ALL_SPECIALTIES} className="button">
                            <FormattedMessage id="specialty-section.button-more-detail" />
                        </a></div>
                    </div>
                    <Slider {...settings}>
                        <div className="item-content">
                            <div className="item-of-slider">
                                <div className="image-of-item-1 image-css"></div>
                                <div className="item-content"><FormattedMessage id="Cơ Xương Khớp" />
                                </div>
                            </div>
                        </div>

                        <div className="item-content">
                            <div className="item-of-slider">
                                <div className="image-of-item-2 image-css"></div>
                                <div className="item-content"><FormattedMessage id="Thần Kinh" />
                                </div>
                            </div>
                        </div>
                        <div className="item-content">
                            <div className="item-of-slider">
                                <div className="image-of-item-3 image-css"></div>
                                <div className="item-content"><FormattedMessage id="Tiêu Hóa" />
                                </div>
                            </div>
                        </div>
                        <div className="item-content">
                            <div className="item-of-slider">
                                <div className="image-of-item-4 image-css"></div>
                                <div className="item-content"><FormattedMessage id="Tim Mạch" />
                                </div>

                            </div>
                        </div>
                        <div className="item-content">
                            <div className="item-of-slider">
                                <div className="image-of-item-5 image-css"></div>
                                <div className="item-content"><FormattedMessage id="Tai Mũi Họng" />
                                </div>
                            </div>
                        </div>
                        <div className="item-content">
                            <div className="item-of-slider">
                                <div className="image-of-item-6 image-css"></div>
                                <div className="item-content"><FormattedMessage id="Cột Sống" />
                                </div>
                            </div>
                        </div>
                        <div className="item-content">
                            <div className="item-of-slider">
                                <div className="image-of-item-7 image-css"></div>
                                <div className="item-content"><FormattedMessage id="Y Học Cổ Truyền" />
                                </div>
                            </div>
                        </div>
                        <div className="item-content">
                            <div className="item-of-slider">
                                <div className="image-of-item-8 image-css"></div>
                                <div className="item-content"><FormattedMessage id="Châm Cứu" />
                                </div>
                            </div>
                        </div>
                        <div className="item-content">
                            <div className="item-of-slider">
                                <div className="image-of-item-9 image-css"></div>
                                <div className="item-content"><FormattedMessage id="Sản Phụ Khoa" />
                                </div>
                            </div>
                        </div>
                        <div className="item-content">
                            <div className="item-of-slider">
                                <div className="image-of-item-10 image-css"></div>
                                <div className="item-content"><FormattedMessage id="Siêu Âm Thai" />
                                </div>
                            </div>
                        </div>
                        <div className="item-content">
                            <div className="item-of-slider">
                                <div className="image-of-item-11 image-css"></div>
                                <div className="item-content"><FormattedMessage id="Nhi Khoa" />
                                </div>
                            </div>
                        </div>
                        <div className="item-content">
                            <div className="item-of-slider">
                                <div className="image-of-item-12 image-css"></div>
                                <div className="item-content"><FormattedMessage id="Da Liễu" />
                                </div>
                            </div>
                        </div>
                        <div className="item-content">
                            <div className="item-of-slider">
                                <div className="image-of-item-13 image-css"></div>
                                <div className="item-content"><FormattedMessage id="Viêm Gan" />
                                </div>
                            </div>
                        </div>
                        <div className="item-content">
                            <div className="item-of-slider">
                                <div className="image-of-item-14 image-css"></div>
                                <div className="item-content"><FormattedMessage id="Sưc Khỏe Tâm Thần" />
                                </div>
                            </div>
                        </div>
                        <div className="item-content">
                            <div className="item-of-slider">
                                <div className="image-of-item-15 image-css"></div>
                                <div className="item-content"><FormattedMessage id="Dị Ứng Miễn Dịch" />
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
        specialtiesData: state.admin?.specialties || [],
    };
};

const mapDispatchToProps = dispatch => {
    return {
        loadSpecialties: () => dispatch(actions.fetchSpecialties()),
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SpecialtySection));
