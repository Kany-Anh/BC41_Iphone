import { danhSachSanPham } from "../../DSMH/js/controller-v2.js";
import {
  batLoading,
  tatLoading,
  renderIphone,
  layThongTinTuFrom,
  showThongTinLenForm,
} from "./controller.js";

const BASE_URL = "https://63e0e26465b57fe6064ba37f.mockapi.io";
let iphone = [];
console.log("🚀 ~ file: main.js:11 ~ iphone", iphone);

const fetchIphoneList = () => {
  batLoading();
  axios({
    url: `${BASE_URL}/DSSP`,
    method: "GET",
  })
    .then((res) => {
      tatLoading();
      iphone.push(...res.data);
      renderIphone(res.data);
    })
    .catch((err) => {
      tatLoading();
      console.log("🚀 ~ file: main.js:63 ~ fetchIphoneList ~ err", err);
    });
};
fetchIphoneList();

const themIphone = () => {
  batLoading();
  axios({
    url: `${BASE_URL}/DSSP`,
    method: "POST",
    data: layThongTinTuFrom(),
  })
    .then((res) => {
      tatLoading();
      fetchIphoneList();
    })
    .catch((err) => {
      tatLoading();
      console.log("🚀 ~ file: main.js:63 ~ fetchIphoneList ~ err", err);
    });
};
window.themIphone = themIphone;

const xoaIphone = (iphopneid) => {
  axios({
    url: `${BASE_URL}/DSSP/${iphopneid}`,
    method: "DELETE",
  })
    .then((res) => {
      tatLoading();
      fetchIphoneList();
    })
    .catch((err) => {
      tatLoading();
      console.log("🚀 ~ file: main.js:63 ~ fetchIphoneList ~ err", err);
    });
};
window.xoaIphone = xoaIphone;

const suaIphone = (iphopneid) => {
  axios({
    url: `${BASE_URL}/DSSP/${iphopneid}`,
    method: "GET",
  })
    .then((res) => {
      $("#myModal").modal("toggle");
      tatLoading();
      showThongTinLenForm(res.data);
    })
    .catch((err) => {
      tatLoading();
      console.log("🚀 ~ file: main.js:63 ~ fetchIphoneList ~ err", err);
    });
};
window.suaIphone = suaIphone;

const capNhatIphone = () => {
  axios({
    url: `${BASE_URL}/DSSP/${layThongTinTuFrom().id}`,
    method: "PUT",
    data: layThongTinTuFrom(),
  })
    .then((res) => {
      tatLoading();
      fetchIphoneList();
    })
    .catch((err) => {
      tatLoading();
      console.log("🚀 ~ file: main.js:63 ~ fetchIphoneList ~ err", err);
    });
};
window.capNhatIphone = capNhatIphone;

const searchIphone = () => {
  console.log("hello");
  let search = document.getElementById("searchIphone").value;
  let newArr = iphone.filter((item) => {
    return item.id == search;
  });

  renderIphone(newArr);
  if (search == "") renderIphone(iphone);
};
window.searchIphone = searchIphone;
