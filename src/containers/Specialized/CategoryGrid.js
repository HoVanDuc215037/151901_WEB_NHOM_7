// components/CategoryGrid.js
import React from "react";
import "./CategoryGrid.scss";
import boneJointIcon from "../../assets/specialty-image/101627-co-xuong-khop.png";
import boneJointIcon2 from "../../assets/specialty-image/101739-than-kinh.png";
import boneJointIcon3 from "../../assets/specialty-image/101713-tieu-hoa.png";
import boneJointIcon4 from "../../assets/specialty-image/101713-tim-mach.png";
import boneJointIcon5 from "../../assets/specialty-image/101713-tai-mui-hong.png";
import boneJointIcon6 from "../../assets/specialty-image/101627-cot-song.png";
import boneJointIcon7 from "../../assets/specialty-image/101739-y-hoc-co-truyen.png";
import boneJointIcon8 from "../../assets/specialty-image/101627-cham-cuu.png";
import boneJointIcon9 from "../../assets/specialty-image/101713-san-phu-khoa.png";
import boneJointIcon10 from "../../assets/specialty-image/101713-sieu-am-thai.png";
import boneJointIcon11 from "../../assets/specialty-image/101655-nhi-khoa.png";
import boneJointIcon12 from "../../assets/specialty-image/101638-da-lieu.png";
import boneJointIcon13 from "../../assets/specialty-image/101739-viem-gan.png";
import boneJointIcon14 from "../../assets/specialty-image/101713-suc-khoe-tam-than.png";
import boneJointIcon15 from "../../assets/specialty-image/101638-di-ung-mien-dich.png";



// Danh sách các mục
const categories = [
  { id: 1, title: "Cơ Xương Khớp", icon: boneJointIcon  },
  { id: 2, title: "Thần kinh", icon: boneJointIcon2  },
  { id: 3, title: "Tiêu hoá", icon: boneJointIcon3  },
  { id: 4, title: "Tim mạch", icon: boneJointIcon4  },
  { id: 5, title: "Tai Mũi Họng", icon: boneJointIcon5  },
  { id: 6, title: "Cột sống", icon:boneJointIcon6  },
  { id: 7, title: "Y học Cổ truyền", icon: boneJointIcon7  },
  { id: 8, title: "Châm cứu", icon: boneJointIcon8  },
  { id: 9, title: "Sản Phụ khoa", icon: boneJointIcon9  },
  { id: 10, title: "Siêu âm thai", icon: boneJointIcon10  },
  { id: 11, title: "Nhi khoa", icon: boneJointIcon11  },
  { id: 12, title: "Da liễu", icon: boneJointIcon12  },
  { id: 13, title: "Bệnh Viêm gan", icon: boneJointIcon13  },
  { id: 14, title: "Sức khỏe tâm thần", icon: boneJointIcon14  },
  { id: 15, title: "Dị ứng miễn dịch", icon: boneJointIcon15  },

];

const CategoryGrid = () => {
  return (
    <div className="container">
    <h1 className="title">Khám Chuyên khoa</h1>
    <div className="category-grid">
      {categories.map((category) => (
        <div key={category.id} className="category-card">
          <img src={category.icon} alt={category.title} className="category-icon" />
          <p className="category-title">{category.title}</p>
        </div>
      ))}
    </div>
  </div>
  );
};

export default CategoryGrid;
