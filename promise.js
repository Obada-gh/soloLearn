//Promise.all  wait all to finish
//Promise.race  the fastest one

let myPromise = new Promise(function(resolve,reject){

    // clean the room

    let isClean = true;

    if(isClean){
        resolve('clean')
    }else{
        reject('not clean')
    }



});

myPromise.then(function(fromResolve){
    console.log('the room is ' + fromResolve)
}).catch(function(fromReject){
    console.log('the room is ' + fromReject)
})

//----------------------------------------------------------------------
let cleanRoom = function(){
    return new Promise(function(resolve,reject){
        resolve('cleaned the room');
    });
};



let removeGarbage = function(){
    return new Promise(function(resolve,reject){
        resolve('remove Garbage');
    });
};




let winIcecream = function(){
    return new Promise(function(resolve,reject){
        resolve('win Ice Cream');
    });
};


class Human{

    constructor(eye,hand){
        this.eye = eye;
        this.hand = hand;
    }

}

class Anemal extends Human{
    super(leg,head) {
        this.leg=leg;
        this.head=head;

    }

}


let obada = new Human('blue','strong');

console.log(obada);

let animal = new Anemal('green','weak hand')

console.log(animal)
