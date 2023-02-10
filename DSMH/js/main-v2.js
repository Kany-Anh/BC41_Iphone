import {
  danhSachSanPham,
  soLuongIphone,
  tangGiamSoLuong,
  gioiHanSoLuong,
} from "./controller-v2.js";

let iphone2 = [
  {
    id: "1",
    name: "iphoneX",
    price: 1000,
    screen: "screen 68",
    backCamera: "2 camera 12 MP",
    frontCamera: "7 MP",
    img: "https://cdn.tgdd.vn/Products/Images/42/114115/iphone-x-64gb-hh-600x600.jpg",
    desc: "Thiết kế mang tính đột phá",
    type: "Iphone",
  },
  {
    id: "2",
    name: "Samsung Galaxy M51 ",
    price: 3500,
    screen: "screen 69",
    backCamera: " Chính 64 MP & Phụ 12 MP, 5 MP, 5 MP",
    frontCamera: " 32 MP",
    img: "https://cdn.tgdd.vn/Products/Images/42/217536/samsung-galaxy-m51-trang-new-600x600-600x600.jpg",
    desc: "Thiết kế đột phá, màn hình tuyệt đỉnh",
    type: "Samsung",
  },
  {
    id: "3",
    name: "Samsung Galaxy M22",
    price: 4500,
    screen: "screen 70",
    backCamera: "Chính 12 MP & Phụ 64 MP, 12 MP",
    frontCamera: " 32 MP",
    img: "https://cdn.tgdd.vn/Products/Images/42/217536/samsung-galaxy-m51-trang-new-600x600-600x600.jpg",
    desc: "Thiết kế mang tính đột phá",
    type: "Samsung",
  },
  {
    id: "4",
    name: "Iphone 11",
    price: 1000,
    screen: "screen 54",
    backCamera: "Camera: Chính 12 MP & Phụ 64 MP, 12 MP",
    frontCamera: "32 MP",
    img: "https://didongviet.vn/pub/media/catalog/product//i/p/iphone-11-pro-max-256gb-didongviet_23.jpg",
    desc: "Thiết kế đột phá, màn hình tuyệt đỉnh",
    type: "Iphone",
  },
];

danhSachSanPham(iphone2);
window.danhSachSanPham = danhSachSanPham;

const filterIphone = () => {
  let filter = document.getElementById("type").value;
  let newArr = iphone2.filter((item) => {
    return item.type == filter;
  });
  danhSachSanPham(newArr);
  if (filter == "0") {
    danhSachSanPham(iphone2);
  }
};
window.filterIphone = filterIphone;

soLuongIphone(iphone2);
window.soLuongIphone = soLuongIphone;

window.tangGiamSoLuong = tangGiamSoLuong;

window.gioiHanSoLuong = gioiHanSoLuong;
