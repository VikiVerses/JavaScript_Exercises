class Roommate {
    constructor(name){
        this.name = name
        this.chore = []
    }

    getLoad() {
        let total = 0;                         

        for (let i = 0; i < this.chore.length; i++) {
            const currentChore = this.chore[i];   
            if (currentChore && currentChore.time) {
            total += currentChore.time; 
            }
        }
        return total;                          
    }

    addChore(incomplete_chores, roommates){
        for (let chore of incomplete_chores){
            roommates.sort((a, b) => a.getLoad()- b.getLoad());
            roommates[0].chore.push(chore)
        }
        return roommates
    }
}

class Chore {
    constructor(name, time, status){
        this.name = name
        this.time = time
        this.status = status
    }
}

const chores = [
    new Chore("dishes", 30, false),
    new Chore("vacuum", 20, false),
    new Chore("groceries", 40, false),
    new Chore("plants", 5, false),
    new Chore("bathroom", 60, false)
]

const roommates = [
    new Roommate("Amy"),
    new Roommate("Carol"),
    new Roommate("Jack")
]

chores.sort((a, b) => b.time - a.time);
console.log(chores);

/* total_time = 0;

for (const chore in chores){ 
    if (chores[chore].status == false){
        total_time += chores[chore].time;
    }
}
console.log(total_time);
*/

incomplete_chores = [];

for (const chore in chores){
    if (chores[chore].status == false){
        incomplete_chores.push(chores[chore])
    }
}
    
console.log(incomplete_chores);

roommates[0].addChore(incomplete_chores, roommates);

roommates.forEach(({ name, chore }) => {
  const total = chore.reduce((sum, { time = 0 }) => sum + time, 0);
  const list  = chore.map(({ name, time }) => `${name}(${time})`).join(", ");
  console.log(`${name} → total ${total} mins: ${list}`);
});