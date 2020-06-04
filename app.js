// Тоглогчийн ээлжийг хадгалах хувьсагч, 1-р тоглогч 0, 2-р тоглогчийг 1 гэж тэмдэглэе.
var activePlayer = 1;
//Тоглогчдын цуглуулсан оноог хадгалах хувьсагч
var scores = [0, 0];
//Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
var roundScore = 0;

// Програм эхлэхэд бэлтгэе
/* querySelector нь ДОМ-с ID болон Класс ... бүгдэнгээс нь хайдаг учир удаан ажиллагаатай

document.querySelector("#score-0").textContent = 0;
document.querySelector("#score-1").textContent = 0;

document.querySelector("#current-0").textContent = 0;
document.querySelector("#current-1").textContent = 0;
*/
// getElemenById нь ДОМ-с зөвхөн ID -аар хайдаг учир маш хурдан ажилладаг
document.getElementById("score-0").textContent = 0;
document.getElementById("score-1").textContent = 0;
document.getElementById("current-0").textContent = 0;
document.getElementById("current-1").textContent = 0;

//Програм ажиллаж эхлэхэд шооны зураг огт байхгүй буюу шоо орхиогүй байх тул зураггүй байна. Мөн dice классыг олон дахин хайхын оронд нэг удаа хайж олоод түүнийгээ хувьсагчид агуулсанаар програм маань маш цэгцтэй болж өгнө.
var DiceDom = document.querySelector(".dice");
DiceDom.style.display = "none";

// Roll Dice дарахад шоо санамсаргүй бууна. Энэ нь зөвхөн нэг л газар ашиглагдах тул anomymous функцийг ашиглах болно.
document.querySelector(".btn-roll").addEventListener(click, function() {
  //Шооны аль талаараа буусныг хадгалах хувьсагч хэрэгтэй. 1-6 гэсэн утгыг энэ хувьсагчид санамсаргүй үүсгэж өгнө.
  var diceNumber = Math.floor(Math.random() * 6) + 1;
  // Шоог орхиж эхлэх үед санамсаргүй буусан шооны тоотой зурагыг харуулна.
  DiceDom.style.display = "block";
  DiceDom.src = "dice-" + diceNumber + ".png";
});
