// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [  
  { text: "Pasa el tiempo aquí", time: 10 },  
  { text: "Mas mi espíritu se encuentra quieto en ti", time: 15 },  
  { text: "Mi amiga ansiedad", time: 20 },  
  { text: "Se ha quedado afuera y no nos vemos más", time: 25 },  
  { text: "Desde el día que buscando", time: 30 },  
  { text: "Fui encontrado por tu amor", time: 35 },  
  { text: "Ya no hay duda", time: 40 },  
  { text: "No hay vacío en mi interior", time: 45 },  
  { text: "Que pase el mundo", time: 50 },  
  { text: "Con sus años, sus minutos y segundos", time: 55 },  
  { text: "Que la eternidad la pasaremos juntos", time: 60 },  
  { text: "Que mi vida y mi morir se encuentre en ti, ah-ah", time: 65 },  
  { text: "Ay, sin comparación", time: 70 },  
  { text: "No hay nada mejor que ser hallado aquí", time: 75 },  
  { text: "Descansando en tu interminable amor", time: 80 },  
  { text: "En tu gran amor por mí", time: 85 },  
  { text: "Ye-re-te-te-re-tem", time: 90 },  
  { text: "Los ojos de mi fe", time: 95 },  
  { text: "Me han dejado ver", time: 100 },  
  { text: "Que pase lo que pase", time: 105 },  
  { text: "Permaneces siempre fiel", time: 110 },  
  { text: "Dios tú eres fiel", time: 115 },  
  { text: "Que pase el mundo", time: 120 },  
  { text: "Con sus años, sus minutos y segundos", time: 125 },  
  { text: "Que la eternidad la pasaremos juntos", time: 130 },  
  { text: "Que mi vida y mi morir se encuentra en ti", time: 135 },  
  { text: "Solo en ti", time: 140 },  
  { text: "Que pase el mundo", time: 145 },  
  { text: "Que ya nada que en el hay me satisface", time: 150 },  
  { text: "El tesoro más hermoso en mi alma yace", time: 155 },  
  { text: "Y en sus ojos veo la luz para seguir, para seguir", time: 160 },  
  { text: "Ah-ah-ah", time: 165 },  
  { text: "Uh-uh-uh-uh", time: 170 },  
  { text: "Para-rara-rai-ra-rai-rara-rarai (hmm)", time: 175 },  
  { text: "Solamente en ti", time: 180 },  
  { text: "Desde el día que buscando", time: 185 },  
  { text: "Fui encontrado por tu amor", time: 190 },  
  { text: "Ya no hay duda", time: 195 },  
  { text: "No hay vacío en mi interior", time: 200 }  
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);