export const getChineseZodiacAnimal = () => {
  const year = new Date().getFullYear();
  const chineseZodiacAnimals = [
    "крысы 🐭",
    "быка 🐮",
    "тигра 🐯",
    "кролика 🐰",
    "дракона 🐲",
    "змеи 🐍",
    "лошади 🐴",
    "овцы 🐐",
    "обезьяны 🐵",
    "петуха 🐔",
    "собаки 🐶",
    "свиньи 🐷",
  ];

  const animalIndex = (year - 4) % 12;
  return chineseZodiacAnimals[animalIndex];
};
