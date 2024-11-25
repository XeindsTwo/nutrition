const people = [
  {
    name: 'Павел Бойко', age: 66, fit: true, education: "secondary"
  },
  {
    name: 'Роберт Калайджан', age: 20, fit: true, education: "primary"
  },
  {
    name: 'Варосян Алекс', age: 43, fit: true, education: "higher"
  },
  {
    name: 'Адонис Мантарджиев', age: 66, fit: true, education: "primary"
  },
];

function isEligibleForConscription(person) {
  return person.age >= 18 && person.age <= 27 && person.fit && person.education === 'Среднее' || person.education === 'Высшее';
}

const eligibleForService = people.filter(isEligibleForConscription);
console.log(eligibleForService);

const allEligible = people.every(isEligibleForConscription); // квантор всеобщности
console.log("Все люди являются призывниками? " + allEligible);

const existsEligible = people.some(isEligibleForConscription); // квантор существования
console.log("Есть ли хотя бы один призывник? " + existsEligible);

const uniqueEligible = people.filter(isEligibleForConscription).length === 1; // квантор единственности
console.log("Есть ли ровно один призывник? " + uniqueEligible);