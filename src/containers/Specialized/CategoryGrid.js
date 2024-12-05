import React from "react";
import CategoryCard from "./CategoryCard"; 
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
  { id: 1, title: "Cơ Xương Khớp", icon: coXuongKhop, Link:path.SPECIALTY_ARTICLE},
  { id: 2, title: "Thần kinh", icon: thanKinh },
  { id: 3, title: "Tiêu hoá", icon: tieuHoa },
  { id: 4, title: "Tim mạch", icon: timMach },
  { id: 5, title: "Tai Mũi Họng", icon: taiMuiHong },
  { id: 6, title: "Cột sống", icon: cotSong },
  { id: 7, title: "Y học Cổ truyền", icon: yHocCoTruyen },
  { id: 8, title: "Châm cứu", icon: chamCuu },
  { id: 9, title: "Sản Phụ khoa", icon: sanPhuKhoa },
  { id: 10, title: "Siêu âm thai", icon: sieuAmThai },
  { id: 11, title: "Nhi khoa", icon: nhiKhoa },
  { id: 12, title: "Da liễu", icon: daLieu },
  { id: 13, title: "Bệnh Viêm gan", icon: viemGan },
  { id: 14, title: "Sức khỏe tâm thần", icon: sucKhoeTamThan },
  { id: 15, title: "Dị ứng miễn dịch", icon: diUngMienDich },
];


const CategoryGrid = () => {
  return (
    <div className="container">
      <h1 className="title">Khám Chuyên khoa</h1>
      <div className="category-grid">
        {categories.map((category) => (
          <CategoryCard key={category.id} title={category.title} icon={category.icon} link={category.link} />
        ))}
      </div>
    </div>
  );
};

export default CategoryGrid;
