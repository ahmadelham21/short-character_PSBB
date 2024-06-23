function minBusesRequired(n, familyMembers) {
  if (familyMembers.length !== n) {
    return "Input must be equal with count of family";
  }

  familyMembers.sort((a, b) => b - a); // Sort families by size in descending order

  let buses = 0;
  let i = 0;

  while (i < familyMembers.length) {
    if (familyMembers[i] > 4) {
      return "Invalid family size. No family member can be more than 4.";
    }

    if (
      i < familyMembers.length - 1 &&
      familyMembers[i] + familyMembers[i + 1] <= 4
    ) {
      i += 2; // Fit two families into one bus
    } else {
      i += 1; // Only fit one family into one bus
    }

    buses += 1;
  }

  return `Minimum bus required is: ${buses}`;
}

// Test cases
let n1 = 5;
let familyMembers1 = [1, 2, 4, 3, 3];
console.log(minBusesRequired(n1, familyMembers1));

let n2 = 8;
let familyMembers2 = [2, 3, 4, 4, 2, 1, 3, 1];
console.log(minBusesRequired(n2, familyMembers2));

let n3 = 5;
let familyMembers3 = [1, 5];
console.log(minBusesRequired(n3, familyMembers3));
