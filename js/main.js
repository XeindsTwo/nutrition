const people = [
  {
    name: 'Павел Бойко', age: 20, fit: true, education: "Среднее"
  },
  {
    name: 'Роберт Калайджан', age: 27, fit: true, education: "Высшее"
  },
  {
    name: 'Варосян Алекс', age: 43, fit: true, education: "Среднее"
  },
  {
    name: 'Адонис Мантаджиев', age: 15, fit: true, education: "начальное"
  }
];

function isEligibleForConscription(person) {
  return person.age >= 18 && person.age <= 27 && person.fit && person.education === 'Среднее' || person.education === 'Высшее';
}

const eligibleForService = people.filter(isEligibleForConscription);
console.log(eligibleForService);