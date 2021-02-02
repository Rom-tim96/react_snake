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

    static directions = {
        'up' : { axis : 'y', d : 1 },
        'right' : { axis : 'x', d : 1 },
        'down' : { axis : 'y', d : -1 },
        'left' : { axis : 'x', d : -1 }
    }

    constructor(space){
        super(space)

        // this.eated = []
        this.moveDir = Snake.directions['right']
    }

    move(){
        this.body[0][this.currentDir.axis] = (this.body[0][this.currentDir.axis] + 1)%10
    }

    // move(dir = this.currDir){
    //     //Двигаем голову дальше в текущем направлении
    //     this.body.unshift(this.body[0][X], this.body[0][Y]);
    //     this.body[0][dir.axis] += dir.d; // * 1

    //     //Компенсируем приращение
    //     this.body.pop();
    // }
}

class Space {

    constructor({x, y}){
        this.board = []
        for(let i = 1; i <= x; ++i){   
            board[i] = []         
            for(let j = 1; j <= y; ++j){           
                board[i][j] = {
                    pos : { x: i, y: j },
                    content : 'empty'
                }
            }
        }

        this.content = new Array(dimensions.x).fill('').map(row => new Array(dimensions.y))
        this.filledSection = new WeakSet
    }

    getPos(pos){
        this.filledSection.add()
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
