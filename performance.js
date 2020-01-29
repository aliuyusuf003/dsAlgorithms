//#1 -- For loop in Javascript.
const fish = ['dory', 'bruce', 'marlin', 'nemo'];
const nemo = ['nemo'];
const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank'];
// const large = new Array(10).fill('nemo');
// const large = new Array(1000000000).fill('nemo');

function findNemo2(fish) {
  let t0 = performance.now();
  for (let i = 0; i < fish.length; i++) {
    if (fish[i] === 'nemo') {
      console.log('Found NEMO!');
    }
  }
  let t1 = performance.now();
  console.log("Call to find Nemo took " + (t1 - t0) + " milliseconds.");
}

findNemo2(everyone)





// What is the Big O of the below function? (Hint, you may want to go line by line)
function anotherFunChallenge(input) {
  let a = 5;//O(1)
  let b = 10;//O(1)
  let c = 50;//O(1)
  for (let i = 0; i < input.length; i++) {//O(n)
    let x = i + 1;//O(n)
    let y = i + 2;//O(n)
    let z = i + 3;//O(n)

  }
  for (let j = 0; j < input.length; j++) {//O(n)
    let p = j * 2;//O(n)
    let q = j * 2;//O(n)
  }
  let whoAmI = "I don't know";//O(1)
}

//ssBIG O of  O(4 + 7n);