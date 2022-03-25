const botCreator= (name, status, moods) => {
  return {
    name,
    status: ['active', 'offline'],
    moods: ['calm', 'angry', 'violent'],
	mindSet() {
		let moodVals= this.moods.toString();//retrieve the list of moods as a string
		console.log("These are a list of moods a bot has: " +moodVals);//show what are the options
		
		let mood=prompt("Enter one of the moods above: ", "calm");//user gets to pick one of the moods
		//calm is the default mood.
		for(let i=0; i < this.moods.length; i++){
			if(mood===this.moods[0]){
				console.log(this.name+ " is not going to hurt you.\n");
				break;//to exit the loop and prevent repeated printing.
			}
			else if(mood===this.moods[1]){
				console.log(this.name+ " eyes are glowing. It looks like it might harm you if you engage it.\n");
				break;
			}
			else if(mood===this.moods[2]){
				console.log(this.name+ " eyes are glowing and it screams. It will kill you if it catches you.\n");
				break;
			}
		}
	}
  }
};

const foxie=botCreator('Foxie');
console.log(foxie['status'][0]);
foxie.mindSet();
