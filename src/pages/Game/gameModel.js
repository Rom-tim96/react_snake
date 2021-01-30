const SPEED = 300;
const START_LEN = 3,
      XMAX = 30, YMAX = 30,
      X = 0, Y = 1;


class Pos {
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
}

class Unit {
    constructor(space){// пространство и место, которое в нем занимает юнит
        this.space = space;
        this.place = [];
    }
}

class Snake extends Unit {

    static ;

    constructor(place){
        super(place)

        this.eated = []
        this.moveDir = Snake.directions['right']
    }

    move(dir = this.currDir){
        //Двигаем голову дальше в текущем направлении
        this.body.unshift(this.body[0][X], this.body[0][Y]);
        this.body[0][dir.axis] += dir.d; // * 1

        //Компенсируем приращение
        this.body.pop();
    }
}

class Space {

    constructor(dimensions = {x: 10, y: 10}){
        this.content = new Array(dimensions.x).fill('').map(row => new Array(dimensions.y))
    }

    getRndPos(){//Вынести в библиотеку
    
        // Рандомить координаты по почереди + запоминать неудавшиеся попытки / сужать выборку
        let x = 0 , y = 0;
        do{
            x = Math.round(Math.random() * 10)
            y = Math.round(Math.random() * 10)
        }while(this.space[x][y] != "empty")
    
        return {x: x, y: y}
    }
}
