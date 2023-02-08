export const danhSachSanPham = (value) => {
  let danhSach = "";
  value.forEach((item) => {
    danhSach += ` 
    <div class='col-3'>
      <div class="card text-white bg-warning">
      <img class="card-img-top" src="${item.img}" alt="">
      <div div class="card-body">
        <h4 class="card-title">${
          item.name.length > 13 ? item.name.substr(0, 13) + "..." : item.name
        }</h4>
        <button class='btn btn-success'>add to cart</button>
      </div>
      </div>
     </div>
    `;
  });
  document.getElementById("danhSachSanPham").innerHTML = danhSach;
};

// let dem=0
// export const
