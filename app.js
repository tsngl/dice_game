//Програмд ашиглагдах глобаль хувьсагчидыг энд зарлая
//Аль тоглогч шоо шидэх вэ гэдгийг энд хадгална
var activePlayer;

//2 тоглогчийн цуглуулсан оноонууд
var scores;

//Идэвхитэй тоглогчийн цуглуулж байгаа ээлжийн оноо
var roundScore;

//Шооны зургийг үзүүлэх элемэтнийг ДОМ-с хайж олоод энд хадгална
var DiceDom = document.querySelector(".dice");

// Тоглоомыг эхлүүлнэ.
initGame();

// Тоглоомыг шинээр эхлэхэд бэлтгэнэ.
function initGame() {
  // Тоглогчийн ээлжийг хадгалах хувьсагч, 1-р тоглогч 0, 2-р тоглогчийг 1 гэж тэмдэглэе.
  activePlayer = 0;

  //Тоглогчдын цуглуулсан оноог хадгалах хувьсагч
  scores = [0, 0];

  //Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
  roundScore = 0;

  // getElemenById нь ДОМ-с зөвхөн ID -аар хайдаг учир маш хурдан ажилладаг.Ингээд програм эхлэхэд бэлтгэе.
  document.getElementById("score-0").textContent = 0;
  document.getElementById("score-1").textContent = 0;
  document.getElementById("current-0").textContent = 0;
  document.getElementById("current-1").textContent = 0;

  // Тоглогчидын нэрийг буцааж гаргах
  document.getElementById("name-0").textContent = "Player 1";
  document.getElementById("name-1").textContent = "Player 2";

  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");

  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");

  document.querySelector(".player-0-panel").classList.add("active");

  // Тоглоом эхлэхэд шооны зураг дэлгэцэнд харагдахгүй байх ёстой.
  DiceDom.style.display = "none";
}

// ROLL DICE эвент листэнэр. Энэ нь зөвхөн нэг л газар ашиглагдах тул anomymous функцийг ашиглах болно.
document.querySelector(".btn-roll").addEventListener("click", function() {
  //Шооны аль талаараа буусныг хадгалах хувьсагч хэрэгтэй. 1-6 гэсэн утгыг энэ хувьсагчид санамсаргүй үүсгэж өгнө.
  var diceNumber = Math.floor(Math.random() * 6) + 1;

  // Шоог орхиж эхлэх үед санамсаргүй буусан шооны тоотой зурагыг харуулна.
  DiceDom.style.display = "block";
  DiceDom.src = "dice-" + diceNumber + ".png";

  // Буусан тоо нь 1-с ялгаатай бол  идэвхитэй тоглогчийн цуглуулсан оноог нэмэгдүүлнэ.
  if (diceNumber !== 1) {
    roundScore = roundScore + diceNumber;
    document.getElementById("current-" + activePlayer).textContent = roundScore;
  } else {
    //1 буусан тул тоглогчийн ээлжийг солино.
    switchToNextPlayer();
  }
});
// HOLD эвент листэнэр.
document.querySelector(".btn-hold").addEventListener("click", function() {
  // Уг тоглогчийн цуглуулсан ээлжний оноог глобаль оноо нь дээр нь нэмж өгнө
  scores[activePlayer] = scores[activePlayer] + roundScore;

  //Дэлгэц дээр оноог нь өөрчлөн харуулна.
  document.getElementById("score-" + activePlayer).textContent =
    scores[activePlayer];

  //Уг тоглогчийг хожсон эсэхийг шалгах (оноо нь 100-с их буюу тэнцүү байх)
  if (scores[activePlayer] >= 10) {
    // Ялагч гэсэн тэкстийг нэрнийх нь оронд гаргана.
    document.getElementById("name-" + activePlayer).textContent = "WINNER!!!";
    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.add("winner");
    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.remove("active");
  } else {
    // Тоглогчийн ээлжийг солино.
    switchToNextPlayer();
  }
});

// Энэ функц нь тоглогчийн ээлжийг дараачийн тоглогч руу шилжүүлнэ
function switchToNextPlayer() {
  // Энэ тоглогчийн ээлжиндээ цуглуулсан оноог 0 болгоно.
  roundScore = 0;
  document.getElementById("current-" + activePlayer).textContent = 0;

  // Тоглогчийн ээлжийг нөгөө тоглогчид шилжүүлнэ.
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

  // Улаан цэгийг идэвхитэй тоглогчид шилжүүлэх
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");

  // Тоглогчийн ээлж солигдоход шоог түр алга болгоно.
  DiceDom.style.display = "none";
}

//New Game буюу Шинэ тоглоом эхлүүлэх товчны эвент листенер
document.querySelector(".btn-new").addEventListener("click", initGame);
