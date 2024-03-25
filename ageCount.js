function calculateAge(birthYear, targetYear) {
    let age = targetYear - birthYear;

    if (age > 0) {
        if (age === 1) {
            return `You are ${age} year old.`;
        } else {
            return `You are ${age} years old.`;
        }
    } else if (age < 0) {
        if (age === -1) {
            return `You will be born in ${-age} year.`;
        } else {
            return `You will be born in ${-age} years.`;
        }
    } else {
        return "You were born this very year!";
    }
}