class Character {
    constructor(name,energy,id){
        this.name=name;
        this.energy=energy;
        this.id=id;
    }
    
    display = function(){
    document.getElementById(this.id).innerHTML = `<p> Name: ${this.name} </p> <p> Energy: ${this.energy} </p>`;     
    
    }
    
    attack = function (opponent,item){
        let newEnergy = opponent.energy - item.iHitPoints;
        opponent.energy = newEnergy;
        opponent.display();
        console.log(opponent);
        document.getElementById("console").innerHTML = `<p> ${this.name} is attacking ${opponent.name} with a ${item.iName} ${item.img} ... </p>`;

        //print game over on the HTML console when energy = 0
        if (opponent.energy <= 0) {
            document.getElementById(opponent.id).innerHTML = "<p> You died. </P>";
            document.getElementById("console").innerHTML = `<p>${this.name} has won. Game Over for ${opponent.name}`;
        }

    }
        
    
}


   
   
const character1= new Character("Pokemon",100,"c1");
const character2 = new Character("pokemonfem",100,"c2");

character1.display();
character2.display();

class item {
    constructor(iName, iHitPoints, img) {
        this.iName=iName;
        this.iHitPoints=iHitPoints;
        this.img=img;
    }
}
 

const item1 = new item('Archen.png',20,'<img class="imgitem" src="img/Archen.png">');
const item2 = new item('Ekans.png',5,`<img class="imgitem" src="img/Ekans.png">`);
const item3 = new item('Hypnomade.png',10,`<img class="imgitem" src="img/Hypnomade.png">`);

const items = [item1,item2,item3];
function selectItem(){
    let selection = Math.floor(Math.random()*3);
    return items[selection];
    
}
//reset function ---global

const restart = function(){
    character1.energy=100;
    character2.energy=100;
    document.getElementById("console").innerHTML =`<p>${character1.name}'s energy has been restored!</p> 
    <p>${character2.name}'s energy has been restored!</p>`;
    character1.display();
    character2.display();
  
    
   

}