
const tubuhUlar = [
  {
    x: 100,
    y: 100
  }
];
const apel = {
  x: 380,
  y: 380
};
let panjangUlar: number = 1;

if (
  tubuhUlar[0].x === apel.x &&
  tubuhUlar[0].y === apel.y
) {
  panjangUlar = panjangUlar + 1;
  console.log("Apel Dimakan");
  console.log("Panjang Ular: ", panjangUlar);
  apel.x = Math.floor(Math.random() * 400);
  apel.y = Math.floor(Math.random() * 400);

  console.log("posisi Apel baru: ", apel.x, apel.y);
}

const canvas = document.getElementById("gameCanvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d")!;
ctx.fillStyle = "green";
ctx.fillRect(
  100,
  100,
  20,
  20);
  ctx.fillStyle = "red";
  ctx.fillRect(
  apel.x,
  apel.y,
  20,
  20);