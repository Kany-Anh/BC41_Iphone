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
            gioiHanSoLuong();
          }
        }
      });
      console.log(cart);
      renderGioHang();
    });
  });
};

const renderGioHang = () => {
  let cartList = "";
  cart.forEach((item) => {
    cartList += ` <tr>
                  <td><img class='w-100 p-2' src="${item.img}" alt=""></td>
                  <td>${item.name}</td>
                  <td>${item.price}</td>
                  <td class=' text-center gioHangIphone' id='${item.id}'>
                  <button onclick='tangGiamSoLuong(false)' class="btn btn-primary">
                  Giảm
                  </button><br />
                  ${item.amount}
                  <button onclick='tangGiamSoLuong(true)' class="btn btn-success">
                  Tăng
                  </button></td>
                  <td>
                  <button class='btn btn-danger'>Xóa</button>
                  </td>
                  </tr>
                 `;
  });
  document.getElementById("tblDanhSachIphone").innerHTML = cartList;
};

export const tangGiamSoLuong = (value) => {
  let gioHangIphone = document.querySelectorAll(".gioHangIphone");
  gioHangIphone.forEach((i) => {
    cart.forEach((item) => {
      if (item.id === i.id) {
        if (value == true) {
          renderGioHang();
          return (item.amount += 1);
        } else {
          renderGioHang();
          return (item.amount -= 1);
        }
      }
    });
  });
};

const gioiHanSoLuong = () => {
  if (cart.length > 0) {
    cart.forEach((i) => {
      console.log(i);
      if (i.amount > 10) {
        $("#gioiHanSoLuong").modal("show");
      }
    });
  }
};
