// var lap1 = 30;
// var lap2 = 30;
// var lap3 = 10;
// function sum() {

//   console.log(lap1 + lap2 + lap3);
// }
// sum();
// console.log(lop);

//craete a function that increments the lapscompleted variable with one
// let lapcompleted = 0;
// function incrementlap() {
//   lapcompleted = lapcompleted + 1;
// }
// incrementlap();
// incrementlap();
// incrementlap();
// console.log(lapcompleted);

//increment the count on clicks
const date = new Date("2021-03-25");
let pre_counts = "";
var span_pre_count = document.getElementById("saved-count");
let count = 0;
var count_el = document.getElementById("countEL");
function clicks() {
  count = count + 1;
  count_el.innerHTML = count;
}
function save() {
  pre_counts = pre_counts + "-" + count;
  span_pre_count.innerHTML = datetime + "/Counts:" + pre_counts;
  count = 0;
  count_el.innerHTML = 0;
}

//For getting current date
// For todays date;
Date.prototype.today = function () {
  return (
    (this.getDate() < 10 ? "0" : "") +
    this.getDate() +
    "/" +
    (this.getMonth() + 1 < 10 ? "0" : "") +
    (this.getMonth() + 1) +
    "/" +
    this.getFullYear()
  );
};

// For the time now
Date.prototype.timeNow = function () {
  return (
    (this.getHours() < 10 ? "0" : "") +
    this.getHours() +
    ":" +
    (this.getMinutes() < 10 ? "0" : "") +
    this.getMinutes() +
    ":" +
    (this.getSeconds() < 10 ? "0" : "") +
    this.getSeconds()
  );
};
var newDate = new Date();
var datetime = newDate.today() + " " + newDate.timeNow();
