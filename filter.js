function oddIntegers(numbers) {
  const odds = [];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 1) {
      odds.push(numbers[i]);
    }
  }

  return odds;
}

function longStrings(strings, minimumLength) {
  const longs = [];

  for (let i = 0; i < strings.length; i++) {
    if (strings[i].length >= minimumLength) {
      longs.push(strings[i]);
    }
  }

  return longs;
}

function getNotEmptyPhoneNumbers(phoneNumbers) {
  const notEmpty = [];

  for (let i = 0; i < phoneNumbers.length; i++) {
    if (phoneNumbers[i].phone !== undefined) {
      notEmpty.push(phoneNumbers[i]);
    }
  }

  return notEmpty;
}
