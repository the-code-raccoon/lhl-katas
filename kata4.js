const instructorWithLongestName = function(instructors) {

  let longest = instructors[0];

  instructors.forEach(instructor => {
    if (longest.name.length < instructor.name.length) longest = instructor;
  });

  return longest;
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));
