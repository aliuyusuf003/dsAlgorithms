// hash tables
class HashTable {
  constructor(size){
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i =0; i < key.length; i++){
        hash = (hash + key.charCodeAt(i) * i) % this.data.length
    }
    return hash;
  }
  set(par,value) {
     this.data[par] = value;
  }
  get(par){
    return this.data[par];
  }
}

const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000)
myHashTable.get('grapes')
myHashTable.set('apples', 9)
console.log(myHashTable.get('grapes'));


let user = {
  name:'Yusuf',
  laptop: 'Hp',
  phone:'iphone5',
  bestfood:'Plantain',
  practise:function(){
    return 'Sofware development'
  }
}
user.name//------------O(1);
user.practise//-------------O(1)


console.log(user.practise);

//Map --> Gives you some order
//Set --> No duplicate keys