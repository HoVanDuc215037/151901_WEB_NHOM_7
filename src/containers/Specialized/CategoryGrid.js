import React from "react";
import CategoryCard from "./CategoryCard"; 
import { useIntl } from 'react-intl';
import "../Specialized//CategoryGrid.scss"; 
import coXuongKhop from '../../assets/specialty-image/101627-co-xuong-khop.png';
import thanKinh from '../../assets/specialty-image/101739-than-kinh.png';
import tieuHoa from '../../assets/specialty-image/101713-tieu-hoa.png';
import timMach from '../../assets/specialty-image/101713-tim-mach.png';
import taiMuiHong from '../../assets/specialty-image/101713-tai-mui-hong.png';
import cotSong from '../../assets/specialty-image/101627-cot-song.png';
import yHocCoTruyen from '../../assets/specialty-image/101739-y-hoc-co-truyen.png';
import chamCuu from '../../assets/specialty-image/101627-cham-cuu.png';
import sanPhuKhoa from '../../assets/specialty-image/101713-san-phu-khoa.png';
import sieuAmThai from '../../assets/specialty-image/101713-sieu-am-thai.png';
import nhiKhoa from '../../assets/specialty-image/101655-nhi-khoa.png';
import daLieu from '../../assets/specialty-image/101638-da-lieu.png';
import viemGan from '../../assets/specialty-image/101739-viem-gan.png';
import sucKhoeTamThan from '../../assets/specialty-image/101713-suc-khoe-tam-than.png';
import diUngMienDich from '../../assets/specialty-image/101638-di-ung-mien-dich.png';
import {path} from '../../utils/constant'


const categories = [
  { id: 1, titleId: "specialty.bone-and-joint-disease", icon: coXuongKhop, link: path.SPECIALTY_ARTICLE },
  { id: 2, titleId: "specialty.neurology", icon: thanKinh },
  { id: 3, titleId: "specialty.gastric-disease", icon: tieuHoa },
  { id: 4, titleId: "specialty.cardiology", icon: timMach },
  { id: 5, titleId: "specialty.ent", icon: taiMuiHong },
  { id: 6, titleId: "specialty.spine", icon: cotSong },
  { id: 7, titleId: "specialty.traditional-medicine", icon: yHocCoTruyen },
  { id: 8, titleId: "specialty.acupuncture", icon: chamCuu },
  { id: 9, titleId: "specialty.obstetrics-and-gynecology", icon: sanPhuKhoa },
  { id: 10, titleId: "specialty.fetal-ultrasound", icon: sieuAmThai },
  { id: 11, titleId: "specialty.pediatrics", icon: nhiKhoa },
  { id: 12, titleId: "specialty.dermatology", icon: daLieu },
  { id: 13, titleId: "specialty.hepatitis", icon: viemGan },
  { id: 14, titleId: "specialty.mental-health", icon: sucKhoeTamThan },
  { id: 15, titleId: "specialty.immune-system", icon: diUngMienDich },
];


const CategoryGrid = () => {
  const intl = useIntl(); 
  return (
    <div className="specialized">
    <h1 className="title">{intl.formatMessage({ id: "specialty-section.specialty-section-title" })}</h1>
    <div className="category-grid">
      {categories.map((category) => (
        <CategoryCard
          key={category.id}
          title={intl.formatMessage({ id: category.titleId, defaultMessage: "N/A" })}
          icon={category.icon}
        />
      ))}
    </div>
  </div>
  );
};

export default CategoryGrid;
