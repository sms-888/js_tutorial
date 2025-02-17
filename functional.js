let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];

// Return a URL-friendly version of a string
// Example: "North Dakota" -> "north-dakota"
function urlify(string) {
    return string.toLowerCase().split(/\s+/).join("-");
}

// urls: Imperative version
function imperativeUrls(elements) {
    let urls = [];
    elements.forEach(function(element) {
        urls.push(urlify(element));
    });
    return urls;
}

console.log(imperativeUrls(states));

// urls: Functional version
function functionalUrls(elements) {
    return elements.map(element => urlify(element));
}

console.log(functionalUrls(states));

// Return Full url for each state
function fullUrls(elements) {
    return elements.map(element => `https://example.com/${urlify(element)}`);
}

console.log(fullUrls(states));

// singles: Imperative version
function imperativeSingles(elements) {
    let singles = [];
    elements.forEach(function (element) {
        if (element.split(/\s+/).length === 1) {
            singles.push(element);
        }
    });
    return singles;
}

console.log(imperativeSingles(states));

// singles: Functional version
function functionalSingles(elements) {
    return elements.filter(element => element.split(/\s+/).length === 1);
}

console.log(functionalSingles(states));

// dakotas: using includes
function includesDakotas(elements) {
    return elements.filter(element => element.toLowerCase().includes("dakota"));
}

console.log(includesDakotas(states));

// dakotas: using array length
function lengthDakotas(elements) {
    return elements.filter(element => element.split(/\s+/).length === 2);
}

console.log(lengthDakotas(states));

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// sum: Imperative solution
function imperativeSum(elements) {
    let total = 0;
    elements.forEach( function(n) {
        total += n;
    });
    return total;
}

console.log(imperativeSum(numbers));

// sum: functional solution
function functionalSum(elements) {
    return elements.reduce((total, n) => {return total += n;});
}

console.log(functionalSum(numbers));

// lengths: imperative solution
function imperativeLengths(elements) {
    lengths = {};
    elements.forEach(function (element) {
        lengths[element] = element.length;
    });
    return lengths;
}

console.log(imperativeLengths(states));

// lengths: functional solution
function functionalLengths(elements) {
    return elements.reduce((lengths, element) => {
        lengths[element] = element.length; 
        return lengths 
    }, {});
}

console.log(functionalLengths(states));

// product:
function functionalProd(elements) {
    return elements.reduce((total, element) => total *= element);
}

console.log(functionalProd(numbers));