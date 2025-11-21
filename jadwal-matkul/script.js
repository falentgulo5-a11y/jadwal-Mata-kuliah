const jadwal = {
  Senin: ["Matematika Diskrit (08:00-10:00)"],
  Selasa: ["Pemrograman Dasar (10:00-12:00)"],
  Rabu: ["Basis Data (08:00-10:00)"],
  Kamis: ["Algoritma & Struktur Data (10:00-12:00)"],
  Jumat: ["Sistem Operasi (08:00-10:00)"],
  Sabtu: ["Praktikum Pemrograman (10:00-12:00)"],
  Minggu: ["Libur / Review Materi"]
};

const list = document.getElementById("jadwal-list");

for (let hari in jadwal) {
  const li = document.createElement("li");
  li.innerHTML = `<strong>${hari}:</strong> ${jadwal[hari].join(", ")}`;
  list.appendChild(li);
}