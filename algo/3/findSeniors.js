/*
Voici un exemple de tableau de personnes. Écris une fonction qui à partir d'un tableau similaire reçu en paramètre renverra un nouveau tableau,
lui-même contenant deux sous-tableaux :
- Le premier contient uniquement des devs web seniors
- Le second ne contient que des data analysts seniors
(Étant donné qu'une personne est senior si elle a 5 ans d'expérience ou plus)

const persons = [
  { name: 'Mary', experience: 2, job: 'web dev' },
  { name: 'Tony', experience: 6, job: 'data analyst' },
  { name: 'John', experience: 2, job: 'data analyst' },
  { name: 'Jane', experience: 6, job: 'web dev' },
  { name: 'Maggie', experience: 2, job: 'web dev' },
  { name: 'Leonardo', experience: 2, job: 'data analyst' },
  { name: 'Carla', experience: 4, job: 'data analyst' },
  { name: 'Mickael', experience: 7, job: 'web dev' },
  { name: 'Penelope', experience: 7, job: 'web dev' },
  { name: 'Homer', experience: 5, job: 'data analyst' },
  { name: 'Leonardo', experience: 2, job: 'data analyst' },
  { name: 'Carla', experience: 4, job: 'web dev' },
  { name: 'Lisa', experience: 3, job: 'web dev' },
  { name: 'Millie', experience: 5, job: 'data analyst' },
  { name: 'Penelope', experience: 7, job: 'web dev' },
];

*/

function findSeniors(persons) {
  // Your code here !
  const seniorDev = [];
  const seniorData = [];
  for (let i = 0; i < persons.length; i++) {
    if (persons[i].job === "web dev" && persons[i].experience >= 5)
      seniorDev.push(persons[i]);
    else if (persons[i].job === "data analyst" && persons[i].experience >= 5)
      seniorData.push(persons[i]);
  }

  return [seniorDev, seniorData];
}

module.exports = findSeniors;
