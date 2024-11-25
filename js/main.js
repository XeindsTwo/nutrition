const pricingButtons = document.querySelectorAll(".pricing__btn");
const pricingCards = document.querySelectorAll(".pricing__price");

function updatePrices(period) {
  pricingCards.forEach((card) => {
    const totalElement = card.querySelector(".pricing__total");
    const basePrice = parseFloat(totalElement.dataset.basePrice);
    let newPrice;
    let timeUnit;

    if (period === "Monthly") {
      newPrice = basePrice;
      timeUnit = "/month";
    } else if (period === "Yearly") {
      newPrice = (basePrice * 12 * 0.5).toFixed(0);
      timeUnit = "/year";
    } else if (period === "Half a Year") {
      newPrice = (basePrice * 12 * 0.25).toFixed(0);
      timeUnit = "/half a year"
    }

    totalElement.textContent = `$${newPrice}`;
    card.querySelector(".pricing__date").textContent = timeUnit;
  })
}

pricingButtons.forEach((button) => {
  button.addEventListener("click", () => {
    pricingButtons.forEach((btn) => btn.classList.remove("pricing__btn--active"));
    button.classList.add("pricing__btn--active");
    const selectedPeriod = button.textContent.trim();
    updatePrices(selectedPeriod);
  });
});

/*
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
console.log("Есть ли ровно один призывник? " + uniqueEligible);*/