export function batLoading() {
  document.getElementById("loading").style.display = "flex";
}

export function tatLoading() {
  document.getElementById("loading").style.display = "none";
}

export const renderIphone = (value) => {
  let danhSachIphone = "";
  value.forEach((iphone) => {
    danhSachIphone += `<tr>
                       <td>${iphone.id}</td>
                       <td>${iphone.name}</td>
                       <td>${iphone.price}</td>
                       <td>${iphone.screen}</td>
                       <td>${iphone.backCamera}</td>
                       <td>${iphone.frontCamera}</td>
                       <td>${iphone.img}</td>
                       <td>${iphone.desc}</td>
                       <td>${iphone.type}</td>
                       <td>
                       <button onclick='xoaIphone(${iphone.id})' class='btn btn-danger'>Xóa</button>
                       <button onclick='suaIphone(${iphone.id})' class='btn btn-warning mt-2'>Sửa</button>
                       </td>
                       </tr>`;
  });
  document.getElementById("tblDanhSachIphone").innerHTML = danhSachIphone;
};

export const layThongTinTuFrom = () => {
  let id = document.getElementById("id").value;
  let name = document.getElementById("name").value;
  let price = document.getElementById("price").value;
  let screen = document.getElementById("screen").value;
  let backCamera = document.getElementById("backCamera").value;
  let frontCamera = document.getElementById("frontCamera").value;
  let img = document.getElementById("img").value;
  let desc = document.getElementById("desc").value;
  let type = document.getElementById("type").value;
  return {
    id,
    name,
    price,
    screen,
    backCamera,
    frontCamera,
    img,
    desc,
    type,
  };
};

export const showThongTinLenForm = (iphone) => {
  document.getElementById("id").value = iphone.id;
  document.getElementById("name").value = iphone.name;
  document.getElementById("price").value = iphone.price;
  document.getElementById("screen").value = iphone.screen;
  document.getElementById("backCamera").value = iphone.backCamera;
  document.getElementById("frontCamera").value = iphone.frontCamera;
  document.getElementById("img").value = iphone.img;
  document.getElementById("desc").value = iphone.desc;
  document.getElementById("type").value = iphone.type;
};

// export const danhSachSanPhamCuaHang = (value) => {
//   let danhSach = "";
//   value.forEach((item) => {
//     danhSach += `<button>${item.name}<img src="${item.img}" alt=""></button>`;
//   });
//   document.getElementById("danhSachSanPhamCuaHang").innerHTML = danhSach;
// };
