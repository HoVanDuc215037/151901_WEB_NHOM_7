import React from "react";
import CategoryCard from "./CategoryCard"; 
import "./CategoryGrid.css"; 

const categories = [
  { id: 1, title: "Cơ Xương Khớp", icon: require("../../assets/specialty-image/101627-co-xuong-khop.png") },
  { id: 2, title: "Thần kinh", icon: require("../../assets/specialty-image/101739-than-kinh.png") },
  { id: 3, title: "Tiêu hoá", icon: require("../../assets/specialty-image/101713-tieu-hoa.png") },
  { id: 4, title: "Tim mạch", icon: require("../../assets/specialty-image/101713-tim-mach.png") },
  { id: 5, title: "Tai Mũi Họng", icon: require("../../assets/specialty-image/101713-tai-mui-hong.png") },
  { id: 6, title: "Cột sống", icon: require("../../assets/specialty-image/101627-cot-song.png") },
  { id: 7, title: "Y học Cổ truyền", icon: require("../../assets/specialty-image/101739-y-hoc-co-truyen.png") },
  { id: 8, title: "Châm cứu", icon: require("../../assets/specialty-image/101627-cham-cuu.png") },
  { id: 9, title: "Sản Phụ khoa", icon: require("../../assets/specialty-image/101713-san-phu-khoa.png") },
  { id: 10, title: "Siêu âm thai", icon: require("../../assets/specialty-image/101713-sieu-am-thai.png") },
  { id: 11, title: "Nhi khoa", icon: require("../../assets/specialty-image/101655-nhi-khoa.png") },
  { id: 12, title: "Da liễu", icon: require("../../assets/specialty-image/101638-da-lieu.png") },
  { id: 13, title: "Bệnh Viêm gan", icon: require("../../assets/specialty-image/101739-viem-gan.png") },
  { id: 14, title: "Sức khỏe tâm thần", icon: require("../../assets/specialty-image/101713-suc-khoe-tam-than.png") },
  { id: 15, title: "Dị ứng miễn dịch", icon: require("../../assets/specialty-image/101638-di-ung-mien-dich.png") },
];

const CategoryGrid = () => {
  return (
    <div className="container">
      <h1 className="title">Khám Chuyên khoa</h1>
      <div className="category-grid">
        {categories.map((category) => (
          <CategoryCard key={category.id} title={category.title} icon={category.icon} />
        ))}
      </div>
    </div>
  );
};

export default CategoryGrid;
