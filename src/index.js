const messages = [
  "Ferna",
  "Stereo",
  "Laser",
  "Humo",
  "Luces",
  "Sonido",
  "Color",
  "Bareta",
  "Perico",
];

const randomMsg = () => {
  const message = messages[Math.floor(Math.random() * messages.length)];
  console.log(message);
};

module.exports = { randomMsg };
