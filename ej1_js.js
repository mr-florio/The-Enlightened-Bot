let nombre_usuario = prompt(
  "¡Hola! Soy un bot recién nacido ¿Cuál es tu nombre?"
);

let respuesta_nombre =
  "¡Gusto en conocerte " +
  nombre_usuario +
  "! Tu nombre es algo extraño en mi mundo, pero me acostumbraré.";
alert(respuesta_nombre);

let edad_usuario = prompt("Sigamos conociéndonos. ¿En qué año naciste?");

let respuesta_edad =
  "Oh, veo que tienes aproximádamente " +
  (2021 - parseInt(edad_usuario)) +
  " años. Me contaron que la vida humana es corta y frágil... ¡Espero que aproveches bien el tiempo que te queda!";

alert(respuesta_edad);

let preguntalibre = prompt("¿Tu que piensas acerca de eso?");
let respuestalibre =
  "Bien, tu opinión me parece interesante. Hoy eh aprendido algo nuevo.";
alert(respuestalibre);

let problema_usuario = prompt(
  "Si quieres, antes de irte, cuéntame un problema que te esté preocupando y te enseñaré algo que de seguro te ayudará."
);
let respuesta_problema = "Entiendo... Dejame pensar...";
alert(respuesta_problema);

let detalle_problema = prompt(
  "¿Puedes comentarme algún detalle más sobre el problema?"
);
let respuesta_detalle =
  "Bien. Tengo la respuesta para tí. Se que un ser humano llamado Buddha dijo que todo en este mundo es impermanente, pasajero, con un principio y un final. Por lo tanto, tu problema tarde o temprano dejará de existir. ¡No te preocupes! Que tengas un gran día.";
alert(respuesta_detalle);
