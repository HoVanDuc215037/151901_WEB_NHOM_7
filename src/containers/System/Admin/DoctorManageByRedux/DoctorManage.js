import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { LANGUAGES, CRUD_ACTIONS } from "../../../../utils";
import { connect } from 'react-redux';
import './DoctorManage.scss';
import * as actions from "../../../../store/actions";
import 'react-markdown-editor-lite/lib/index.css';

import Select from 'react-select';
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';

const mdParser = new MarkdownIt(/* Markdown-it options */);

class DoctorManage extends Component {
    constructor(props) {
        super(props);
        this.state = {

            //save to markdown table in db
            markdownContent: '',
            htmlContent: '',
            selectedDoctor: null,
            description: '',
            listDoctors: [],
            selectedDoctorDetails: {},
            hadOldDataForEdit: false,
            isSelectDisabled: true,

            //save to doctor_infor table in db
            priceList: [], selectedPrice: '',
            paymentMethodList: [], selectedPaymentMethod: '',
            vietnamProvinceList: [], selectedProvince: '',
            clinicList: [], selectedClinic: '',
            specialtyList: [], selectedSpecialty: '',
            medicalFacilityList: [], selectedMedicalFacility: '',
            clinicName: '',
            clinicAddress: '',
            note: '',
        }
        this.timeoutId = null;
        //biến này để tránh một lỗi khá dị là khi setTimout chưa hết tgian của nó mà user lại 
        //unmount component này thì sẽ bị lỗi (ko ảnh hưởng đến trải nghiệm j lắm nhưng dev ngứa mắt)
        //nên biến này sẽ để hủy hàm setTimout khi component này unmount
        //giá trị của bién này bằng số dịch vụ dược gọi lên từ server nên khi unmount thì nên hủy dịch vụ
        //đó đi để tránh lộ thông tin
    }

    componentDidMount() {
        this.enableSelectAfterDelay();
        this.props.fetchAllDoctorsForDoctorArticlePage();
        //lấy extra data cho doctor
        this.props.getRequiredDataForDoctorArticleManagePage();
        this.props.getBriefInfoOfMedicalFaclityAction('ALL');
    }

    enableSelectAfterDelay = () => {
        this.timeoutId = setTimeout(() => {
            this.setState({ isSelectDisabled: false });
        }, 2000);
    }

    componentWillUnmount() {
        if (this.timeoutId) {
            clearTimeout(this.timeoutId);
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.allDoctorsForDoctorArticlePage !== this.props.allDoctorsForDoctorArticlePage) {
            let selectData = this.buildDataForDoctorSelectBox(this.props.allDoctorsForDoctorArticlePage, 'doctorSelection')
            this.setState({
                listDoctors: selectData,
            })
        }

        if (prevProps.detailsOfADoctor !== this.props.detailsOfADoctor) {
            this.setState({
                selectedDoctorDetails: this.props.detailsOfADoctor,
            });
        }

        if (prevProps.allRequiredDoctorData !== this.props.allRequiredDoctorData) {
            let { resPaymentMethod, resPrice, resProvince, resSpecialty } = this.props.allRequiredDoctorData;
            let selectPriceData = this.buildDataForDoctorSelectBox(resPrice, 'priceSelection');
            let selectPaymentMethodData = this.buildDataForDoctorSelectBox(resPaymentMethod, 'paymentMethodSelection');
            let selectProvinceData = this.buildDataForDoctorSelectBox(resProvince, 'provinceSelection');
            let selectSpecialtyData = this.buildDataForDoctorSelectBox(resSpecialty, 'specialtySection');
            this.setState({
                priceList: selectPriceData,
                paymentMethodList: selectPaymentMethodData,
                vietnamProvinceList: selectProvinceData,
                specialtyList: selectSpecialtyData,
            });
        }
        if (prevProps.language !== this.props.language) {
            let selectData = this.buildDataForDoctorSelectBox(this.props.allDoctorsForDoctorArticlePage, 'doctorSelection')
            let { resPaymentMethod, resPrice, resProvince } = this.props.allRequiredDoctorData;
            let selectPriceData = this.buildDataForDoctorSelectBox(resPrice, 'priceSelection');
            let selectPaymentMethodData = this.buildDataForDoctorSelectBox(resPaymentMethod, 'paymentMethodSelection');
            let selectProvinceData = this.buildDataForDoctorSelectBox(resProvince, 'provinceSelection');
            this.setState({
                priceList: selectPriceData,
                paymentMethodList: selectPaymentMethodData,
                vietnamProvinceList: selectProvinceData,
                listDoctors: selectData,
            });
        }
        if (prevProps.medicalFacility !== this.props.medicalFacility) {
            let selectData = this.buildDataForDoctorSelectBox(this.props.medicalFacility, 'medicalFacilitySelection')
            this.setState({
                medicalFacilityList: selectData,
            })
        }
    }

    handleEditorChange = ({ html, text }) => {
        this.setState({
            markdownContent: text,
            htmlContent: html,
        })
    }

    handleOnChangeAtDescriptionArea = (event) => {
        this.setState({
            description: event.target.value,
        })
    }

    handleSaveMarkdownContent = () => {
        let { hadOldDataForEdit } = this.state;
        this.props.saveDoctorDetails({
            htmlContent: this.state.htmlContent,
            markdownContent: this.state.markdownContent,
            description: this.state.description,
            doctorId: this.state.selectedDoctor.value,
            action: hadOldDataForEdit === true ? CRUD_ACTIONS.EDIT : CRUD_ACTIONS.CREATE,

            selectedPrice: this.state.selectedPrice.value,
            selectedPaymentMethod: this.state.selectedPaymentMethod.value,
            selectedProvince: this.state.selectedProvince.value,
            clinicName: this.state.clinicName,
            clinicAddress: this.state.clinicAddress,
            selectedMedicalFacility: this.state.selectedMedicalFacility.value,
            note: this.state.note,
            clinicId: -1,
            specialtyId: this.state.selectedSpecialty.value,
        })
    }

    handleChangeSelectDoctorInfor = async (selectedOption, name) => {
        let stateName = name.name;
        let stateCopy = { ...this.state };
        stateCopy[stateName] = selectedOption;
        this.setState({
            ...stateCopy,
        })
    }

    handleOnChangeText = (event, id) => {
        let stateCopy = { ...this.state };
        stateCopy[id] = event.target.value;
        this.setState({
            ...stateCopy,
        })
    }

    handleChangeOnSelectBox = async (selectedDoctor) => {
        console.log(selectedDoctor);
        this.setState({ selectedDoctor });
        let { priceList, paymentMethodList, vietnamProvinceList, specialtyList, medicalFacilityList } = this.state;
        await this.props.fetchDoctorDetailsForDoctorManagePage(selectedDoctor.value);
        let { selectedDoctorDetails } = this.state;
        if (selectedDoctorDetails && selectedDoctorDetails.ArticleMarkdown) {
            let tempMarkdown = selectedDoctorDetails.ArticleMarkdown;

            let tempClinicAddress = '', tempClinicName = '', tempNote = '', tempPaymentId = '',
                tempPriceId = '', tempProvinceId = '', tempSelectedPaymentMethod = '',
                tempSelectedPrice = '', tempSelectedProvince = '', tempSpecialtyId = '', tempSelectedSpecialty = '',
                tempMedicalFacilityId = '', tempSelectedMedicalFacility = '';

            if (selectedDoctorDetails.Doctor_infor) {
                tempClinicAddress = selectedDoctorDetails.Doctor_infor.clinicAddress;
                tempClinicName = selectedDoctorDetails.Doctor_infor.clinicName;
                tempNote = selectedDoctorDetails.Doctor_infor.note;
                tempPaymentId = selectedDoctorDetails.Doctor_infor.paymentId;
                tempPriceId = selectedDoctorDetails.Doctor_infor.priceId;
                tempProvinceId = selectedDoctorDetails.Doctor_infor.provinceId;
                tempSpecialtyId = selectedDoctorDetails.Doctor_infor.specialtyId;
                tempMedicalFacilityId = selectedDoctorDetails?.Doctor_specialty_medicalFacility?.ComplexMedicalFacility?.id;
                tempSelectedPaymentMethod = paymentMethodList.find(item => {
                    return item && item.value === tempPaymentId;
                })
                tempSelectedPrice = priceList.find(item => {
                    return item && item.value === tempPriceId;
                })
                tempSelectedProvince = vietnamProvinceList.find(item => {
                    return item && item.value === tempProvinceId;
                })
                tempSelectedSpecialty = specialtyList.find(item => {
                    return item && item.value === tempSpecialtyId;
                })
                tempSelectedMedicalFacility = medicalFacilityList.find(item => {
                    return item && item.value === tempMedicalFacilityId;
                })
            }

            this.setState({
                htmlContent: tempMarkdown.htmlContent,
                markdownContent: tempMarkdown.markdownContent,
                description: tempMarkdown.description,
                hadOldDataForEdit: true,
                selectedPrice: tempSelectedPrice,
                selectedPaymentMethod: tempSelectedPaymentMethod,
                selectedProvince: tempSelectedProvince,
                clinicName: tempClinicName,
                clinicAddress: tempClinicAddress,
                note: tempNote,
                selectedSpecialty: tempSelectedSpecialty,
                selectedMedicalFacility: tempSelectedMedicalFacility ? tempSelectedMedicalFacility : '',
            })
        } else {
            this.setState({
                htmlContent: '',
                markdownContent: '',
                description: '',
                hadOldDataForEdit: false,
                clinicName: '',
                clinicAddress: '',
                note: '',
                selectedPaymentMethod: '',
                selectedPrice: '',
                selectedProvince: '',
                selectedSpecialty: '',
            })
        }
    };

    buildDataForDoctorSelectBox = (data, isBuiltFor) => {
        let result = [];
        let { language } = this.props;
        if (data && data.length > 0) {

            if (isBuiltFor === 'doctorSelection') {
                data.map((item, index) => {
                    let tempObj = {};
                    let labelInVie = `${item.lastName} ${item.firstName}`;
                    let labelInEng = `${item.firstName} ${item.lastName}`;
                    tempObj.label = language === LANGUAGES.VI ? labelInVie : labelInEng;
                    tempObj.value = item.id;
                    result.push(tempObj);
                })
            }
            if (isBuiltFor === 'priceSelection') {
                data.map((item, index) => {
                    let tempObj = {};
                    let labelInVie = `${item.value_Vie} đồng`;
                    let labelInEng = `${item.value_Eng} $ (USD)`;
                    tempObj.label = language === LANGUAGES.VI ? labelInVie : labelInEng;
                    tempObj.value = item.keyMap;
                    result.push(tempObj);
                })
            }
            if (isBuiltFor === 'paymentMethodSelection' || isBuiltFor === 'provinceSelection') {
                data.map((item, index) => {
                    let tempObj = {};
                    let labelInVie = `${item.value_Vie}`;
                    let labelInEng = `${item.value_Eng}`;
                    tempObj.label = language === LANGUAGES.VI ? labelInVie : labelInEng;
                    tempObj.value = item.keyMap;
                    result.push(tempObj);
                })
            }
            if (isBuiltFor === 'specialtySection') {
                data.map((item, index) => {
                    let tempObj = {};
                    tempObj.label = item.name;
                    tempObj.value = item.id;
                    result.push(tempObj);
                })
            }
            if (isBuiltFor === 'medicalFacilitySelection') {
                data.map((item, index) => {
                    let tempObj = {};
                    tempObj.label = item.name;
                    tempObj.value = item.id;
                    result.push(tempObj);
                })
            }

        }
        return result;
    }

    checkIfThisDoctorIsInDoctorList = (thisDoctor, doctorList) => {
        // Tìm đối tượng bác sĩ trong danh sách dựa trên trường 'name'
        let foundDoctor = doctorList.find(doctor => doctor.label === thisDoctor);

        // Nếu tìm thấy bác sĩ, trả về đối tượng chứa tên và id
        if (foundDoctor) {

            return [{
                label: foundDoctor.label,
                value: foundDoctor.value
            }];
        }

        // Nếu không tìm thấy, trả về null
        return null;
    }



    render() {

        let { hadOldDataForEdit, specialtyList } = this.state;
        let { language, userInfo } = this.props;
        let tempObj = {};
        let labelInVie = `${userInfo.lastName} ${userInfo.firstName}`;
        let labelInEng = `${userInfo.firstName} ${userInfo.lastName}`;
        tempObj = language === LANGUAGES.VI ? labelInVie : labelInEng;
        let checkPresentInDoctorList = this.checkIfThisDoctorIsInDoctorList(tempObj, this.state.listDoctors);

        return (
            <div className="doctor-manage-container">
                <div className="doctor-manage-page-title title">
                    <FormattedMessage id="doctor-manage-page-for-admin.page-title" />
                </div>
                <div className="header-article-container">
                    <div className="more-info-for-a-doctor">
                        <textarea placeholder={language === LANGUAGES.VI ?
                            "Thông tin giới thiệu..."
                            :
                            "Introduction information..."
                        }
                            onChange={(event) => this.handleOnChangeText(event, 'description')}
                            value={this.state.description}
                        >

                        </textarea>
                    </div>

                    <div className="option-section">
                        <button className={hadOldDataForEdit === true ? "save-changes-of-doctor-article-button" : "save-doctor-article-button"}
                            onClick={() => this.handleSaveMarkdownContent()}
                        >
                            {hadOldDataForEdit === true ?
                                <span><FormattedMessage id="doctor-manage-page-for-admin.save-changes-button" /></span>
                                :
                                <span><FormattedMessage id="doctor-manage-page-for-admin.save-article-button" /></span>
                            }
                        </button>
                        <Select
                            value={this.state.selectedDoctor}
                            onChange={this.handleChangeOnSelectBox}
                            options={checkPresentInDoctorList ? checkPresentInDoctorList : this.state.listDoctors}
                            className="doctor-option"
                            placeholder={this.state.isSelectDisabled ? "Đang tải..." : <FormattedMessage id="doctor-manage-page-for-admin.select-doctor-placeholder" />}
                            isDisabled={this.state.isSelectDisabled}
                        />
                    </div>


                </div>

                <div className="extra-infor-container">
                    <div className="row row-in-form">
                        <div className="col-md-3 mb-3">
                            <label>Tỉnh thành</label>
                            <Select
                                value={this.state.selectedProvince}
                                onChange={this.handleChangeSelectDoctorInfor}
                                options={this.state.vietnamProvinceList}
                                className="doctor-option"
                                name="selectedProvince"
                            // placeholder={<FormattedMessage id="doctor-manage-page-for-admin.select-doctor-placeholder" />}
                            />
                        </div>
                        <div className="col-md-3 mb-3">
                            <label>Địa chỉ phòng khám</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Địa chỉ phòng khám..."
                                required
                                onChange={(event) => this.handleOnChangeText(event, 'clinicAddress')}
                                value={this.state.clinicAddress}
                            >
                            </input>
                        </div>
                        <div className="col-md-3 mb-3">
                            <label>Tên phòng khám</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Tên phòng khám..."
                                required
                                onChange={(event) => this.handleOnChangeText(event, 'clinicName')}
                                value={this.state.clinicName}
                            ></input>
                        </div>
                        <div className="col-md-3 mb-3">
                            <label>Cơ sở Y tế đang công tác</label>
                            <Select
                                value={this.state.selectedMedicalFacility}
                                onChange={this.handleChangeSelectDoctorInfor}
                                options={this.state.medicalFacilityList}
                                className="doctor-option"
                                name="selectedMedicalFacility"
                            // placeholder={<FormattedMessage id="doctor-manage-page-for-admin.select-doctor-placeholder" />}
                            />
                        </div>
                    </div>
                    <div className="row row-in-form">
                        <div className="col-md-3 mb-3">
                            <label>Chuyên khoa bác sĩ</label>
                            <Select
                                value={this.state.selectedSpecialty}
                                onChange={this.handleChangeSelectDoctorInfor}
                                options={this.state.specialtyList}
                                className="doctor-option"
                                name="selectedSpecialty"
                            // placeholder={<FormattedMessage id="doctor-manage-page-for-admin.select-doctor-placeholder" />}
                            />
                        </div>
                        <div className="col-md-3 mb-3">
                            <label>Giá khám bệnh</label>
                            <Select
                                value={this.state.selectedPrice}
                                onChange={this.handleChangeSelectDoctorInfor}
                                options={this.state.priceList}
                                className="doctor-option"
                                name="selectedPrice"
                            // placeholder={<FormattedMessage id="doctor-manage-page-for-admin.select-doctor-placeholder" />}
                            />
                        </div>
                        <div className="col-md-3 mb-3">
                            <label>Phương thức thanh toán</label>
                            <Select
                                value={this.state.selectedPaymentMethod}
                                onChange={this.handleChangeSelectDoctorInfor}
                                options={this.state.paymentMethodList}
                                className="doctor-option"
                                name="selectedPaymentMethod"
                            // placeholder={<FormattedMessage id="doctor-manage-page-for-admin.select-doctor-placeholder" />}
                            />
                        </div>
                        <div className="col-md-3 mb-3">
                            <label>Ghi chú</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Ghi chú..."
                                required
                                onChange={(event) => this.handleOnChangeText(event, 'note')}
                                value={this.state.note}
                            ></input>
                        </div>
                        <label>Bài báo giới thiệu</label>
                    </div>
                </div>

                <div className="editor-lite-for-doctor-article">
                    <MdEditor style={{ height: '500px' }}
                        renderHTML={text => mdParser.render(text)}
                        onChange={this.handleEditorChange}
                        value={this.state.markdownContent}
                    />
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        language: state.app.language,
        // allDoctorsForDoctorArticlePage: state.admin.allDoctorsForDoctorArticlePage,
        detailsOfADoctor: state.admin.detailsOfADoctor,
        medicalFacility: state.admin.medicalFacility,   
        allRequiredDoctorData: state.admin.allRequiredDoctorData,
        userInfo: state.user.userInfo,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        // fetchAllDoctorsForDoctorArticlePage: () => dispatch(actions.fetchAllDoctorsForDoctorArticlePage()),
        saveDoctorDetails: (data) => dispatch(actions.saveDoctorDetails(data)),
        fetchDoctorDetailsForDoctorManagePage: (id) => dispatch(actions.fetchDoctorDetailsForDoctorManagePage(id)),
        getBriefInfoOfMedicalFaclityAction: (id) => dispatch(actions.getBriefInfoOfMedicalFaclityAction(id)),
        getRequiredDataForDoctorArticleManagePage: () => dispatch(actions.getRequiredDataForDoctorArticleManagePage())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DoctorManage);
