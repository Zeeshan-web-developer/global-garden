/**
 * @Author: ZEESHAN AHMAD
 * @Date:   2021-10-25 22:11:45
 * @Last Modified by:   ZEESHAN AHMAD
 * @Last Modified time: 2021-10-25 22:27:57
 */
export default function set() {
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1; //January is 0!
  var yyyy = today.getFullYear();

  if (dd < 10) {
    dd = "0" + dd;
  }

  if (mm < 10) {
    mm = "0" + mm;
  }

  today = yyyy + "-" + mm + "-" + dd;
  document.getElementById("birthday").setAttribute("max", today);
}
