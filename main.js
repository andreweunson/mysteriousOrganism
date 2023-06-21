// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

function pAequorFactory(specimenNum, dna){
  return {
    specimenNum,
    dna,
    mutate() {
      //randomly select a base to mutate, randomize the base and ensure
      //it actually changed
      let numIndex = Math.floor(Math.random() * 15);
      let chosenBase = this.dna[numIndex];
      do{
        this.dna[numIndex] = returnRandBase();
      }while(this.dna[numIndex] === chosenBase);
    },
    compareDna(pAequor){
      //Compare two pAequor object and print a message defining how many
      //elements they share at the same index
      let counter = 0;
      for(let i = 0; i < this.dna.length; i++){
        if(this.dna[i] === pAequor.dna[i]){
          counter++;
        }
      }
      console.log(`Specimen \#${this.specimenNum} and specimen \#${pAequor.specimenNum} have `+ Math.floor(counter/15 * 100) + '% DNA in common.');
    },
    willLikelySurvive(){
      let counter = 0;
      for(let i = 0; i < this.dna.length; i++){
        if(this.dna[i] === 'C' || this.dna[i] === 'G'){
          counter++;
        }
      }
      return (counter/15 > 0.6);
    }
  }
}

//Alloting 30 organisms into an array to later be studied
let numToStudy = 30;
let particpantArray = [];
for(let i = 0; i < numToStudy; i++){
  particpantArray.push(pAequorFactory(i, mockUpStrand()));
}
