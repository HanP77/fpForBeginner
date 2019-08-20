// Functional Programming for Beginners Exercise

const reviews = [4.5, 4.0, 5.0, 2.0, 1.0, 5.0, 3.0, 4.0, 1.0, 5.0, 4.5, 3.0, 2.5, 2.0];

// 1. Using the reduce function, create an object that
// has properties for each review value, where the value
// of the property is the number of reviews with that score.
// for example, the answer should be shaped like this:
// { 4.5: 1, 4: 2 ...}

// My solution
const result = reviews.reduce(reducer, {});

function reducer(acc, cur) {
  if (acc[cur]) {
    return { ...acc, [cur]: acc[cur] + 1 };
  } else return { ...acc, [cur]: 1 };
}

console.log(result);

// James solution
const countGroupedByReview = reviews.reduce(groupBy, {});

function groupBy(acc, review) {
  const count = acc[review] || 0; // replace the if + make next line more readable
  return { ...acc, [review]: count + 1 };
}
//
// TIP: checkout computed properties discussed here:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#Computed_property_names
// solution can be found at:
// https://jsbin.com/dehiqux/1/edit?js,console
