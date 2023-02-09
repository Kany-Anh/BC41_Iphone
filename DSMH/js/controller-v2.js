export const danhSachSanPham = (value) => {
  let danhSach = "";
  value.forEach((item) => {
    danhSach += ` 
    <div class='col-3 '>
      <div class="card text-white bg-primary p-2">
      <img class="card-img-top" src="${item.img}" alt="">
      <div div class="card-body">
        <h4 class="card-title">${
          item.name.length > 13 ? item.name.substr(0, 13) + "..." : item.name
        }</h4>
        <button id='${
          item.id
        }' class='btn btn-success iphone'  >Add to cart</button>
      </div>
      </div>
     </div>
    `;
  });
  document.getElementById("danhSachSanPham").innerHTML = danhSach;
};

export const filterIphone = (value) => {
  let filter = document.getElementById("type").value;
  let newArr = value.filter((item) => {
    return item.type == filter;
  });
  console.log("🚀 ~ file: controller-v2.js:28 ~ newArr ~ newArr", newArr);
  danhSachSanPham(newArr);
  if (filter == "0") {
    danhSachSanPham(value);
  }
};

let cart = [];
export const soLuongIphone = (arrPhone) => {
  let arrButton = document.querySelectorAll(".iphone");
  arrButton.forEach((item) => {
    item.addEventListener("click", () => {
      arrPhone.forEach((phone) => {
        if (item.id == phone.id) {
          let index = cart.findIndex((sanPham) => sanPham.id === item.id);
          if (index === -1) {
            cart.push({ ...phone, amount: 1 });
          } else {
            cart[index].amount += 1;
          }
        }
      });
      console.log(cart);
    });
  });
  let cartList = "";
  cart.forEach((item) => {
    cartList += `<img class='w-25' src="${item.img}" alt="">`;
  });
  document.getElementById("danhSachGioHang").value = cartList;
  console.log(
    "🚀 ~ file: controller-v2.js:58 ~ soLuongIphone ~ cartList",
    cartList
  );
};

export const gioiHanSoLuong = () => {
  cart.forEach((i) => {
    if (i.amount > 10) {
      alert("Không thể mua 1 lần hơn 10 sản phẩm giống nhau ");
    }
  });
};
