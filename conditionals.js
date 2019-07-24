function calculateTicketCost(age) {
  let cost;

  if (age < 12) {
    cost = 25;
  } else if (age <= 60) {
    cost = 50;
  } else {
    cost = 35;
  }

  return cost;
}


function calculateGrade(mark) {
  if (mark < 50) {
    return 'F';
  }

  if (mark < 70) {
    return 'C';
  }

  if (mark < 85) {
    return 'B';
  }

  return 'A';
}

function calculateDiscount(customer, total) {
  // discount factor of 1 is no discount
  let discount = 1;

  if (customer.type === 'wholesale') {
    if (total > 5000) {
      discount = 0.9;
    } else {
      discount = 0.95;
    }
  } else {
    if (total > 1000) {
      discount = 0.96;
    } else {
      discount = 0.98;
    }
  }

  return total * discount;
}
