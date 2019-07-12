describe(`calculateTicketCost(age: Number): Number`, () => {
  it(`returns 25 when the age is below 12`, () => {
    expect(calculateTicketCost(1)).to.equal(25);
    expect(calculateTicketCost(11)).to.equal(25);
  })

  it(`returns 50 when the age is 12 or more and less than 61`, () => {
    expect(calculateTicketCost(12)).to.equal(50);
    expect(calculateTicketCost(60)).to.equal(50);
  })

  it(`returns 35 when the age more than 60`, () => {
    expect(calculateTicketCost(61)).to.equal(35);
    expect(calculateTicketCost(10000)).to.equal(35);
  })
})

describe(`calculateGrade(mark: Number): String`, () => {
  it(`returns 'F' when the mark is below 50`, () => {
    expect(calculateGrade(1)).to.equal('F');
    expect(calculateGrade(49)).to.equal('F');
  })

  it(`returns 'C' when the mark is 50 or more and less than 70`, () => {
    expect(calculateGrade(50)).to.equal('C');
    expect(calculateGrade(69)).to.equal('C');
  })

  it(`returns 'B' when the mark is 70 or more and less than 85`, () => {
    expect(calculateGrade(70)).to.equal('B');
    expect(calculateGrade(84)).to.equal('B');
  })

  it(`returns 'A' when the mark is 85 or more`, () => {
    expect(calculateGrade(85)).to.equal('A');
    expect(calculateGrade(100)).to.equal('A');
  })
})

describe(`calculateDiscount(customer: Object, total: Number): Number`, () => {
  it(`discounts 2% from the total by default`, () => {
    expect(calculateDiscount({}, 100)).to.equal(98);
    expect(calculateDiscount({}, 85)).to.equal(83.3);
    expect(calculateDiscount({}, 1)).to.equal(0.98);
  })

  it(`discounts 4% from the total when total is above 1000`, () => {
    expect(calculateDiscount({}, 2000)).to.equal(1920);
    expect(calculateDiscount({}, 8500)).to.equal(8160);
    expect(calculateDiscount({}, 1001)).to.closeTo(961, 0.05);
  })

  context(`Given the user has a type of 'wholesale'`, () => {
    const wholesaleUser = { type: 'wholesale' };

    it(`discounts 5% from the total by default`, () => {
      expect(calculateDiscount(wholesaleUser, 100)).to.equal(95);
      expect(calculateDiscount(wholesaleUser, 85)).to.equal(80.75);
      expect(calculateDiscount(wholesaleUser, 1)).to.equal(0.95);
    })

    it(`discounts 10% from the total when total is above 5000`, () => {
      expect(calculateDiscount(wholesaleUser, 2000)).to.equal(1900);
      expect(calculateDiscount(wholesaleUser, 8500)).to.equal(7650);
      expect(calculateDiscount(wholesaleUser, 1001)).to.closeTo(951, 0.06);
    })
  })
})
