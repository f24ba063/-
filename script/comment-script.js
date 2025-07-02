/**
 * 
 */
let likeCount = 0;

document.addEventListener("DOMContentLoaded", function () {
  const favorImg = document.getElementById("favor");
  const favorCount = document.getElementById("favor-count");

  favorImg.addEventListener("click", function () {
    likeCount++;
    favorCount.textContent = likeCount;
  });
});