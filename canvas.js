var canvas = document.querySelector('canvas');
// console.log(canvas);

// Set the screen to fit
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');


// JavaScript OOP
class Circle {
    constructor(x, y, dx, dy, radius) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
    }

    draw() {
        // drawing circles
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.strokeStyle = 'blue';
        c.stroke();

        // // drawing squares
        // c.beginPath();
        // c.moveTo(this.x, this.y);
        // c.lineTo(this.x + this.radius, this.y);
        // c.lineTo(this.x + this.radius, this.y + this.radius);
        // c.lineTo(this.x, this.y + this.radius);
        // c.lineTo(this.x, this.y);
        // c.strokeStyle = 'blue';
        // c.stroke(); 

        // // drawing boxes
        // // layout 1
        // c.beginPath();
        // c.moveTo(this.x, this.y);
        // c.lineTo(this.x + this.radius, this.y);
        // c.lineTo(this.x + this.radius, this.y + this.radius);
        // c.lineTo(this.x, this.y + this.radius);
        // c.lineTo(this.x, this.y);
        // c.strokeStyle = 'blue';
        // c.stroke();

        // // layout 2
        // c.beginPath();
        // c.moveTo(this.x + 10, this.y + 10);
        // c.lineTo(this.x + this.radius + 10, this.y + 10);
        // c.lineTo(this.x + this.radius + 10, this.y + this.radius + 10);
        // c.lineTo(this.x + 10, this.y + this.radius + 10);
        // c.lineTo(this.x + 10, this.y + 10);
        // c.strokeStyle = 'blue';
        // c.stroke();

        // // box connector
        // c.beginPath();
        // c.moveTo(this.x, this.y);
        // c.lineTo(this.x + 10, this.y + 10);
        // c.moveTo(this.x + this.radius, this.y + this.radius);
        // c.lineTo(this.x + this.radius + 10, this.y + this.radius + 10);
        // c.moveTo(this.x + this.radius, this.y);
        // c.lineTo(this.x + this.radius + 10, this.y + 10);
        // c.moveTo(this.x, this.y + this.radius);
        // c.lineTo(this.x + 10, this.y + this.radius + 10);
        
        // c.stroke();
    };

    update() {
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }

        if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }

        this.x += this.dx;
        this.y += this.dy;

        this.draw();
    };
}


var circleArray = [];

for (var i = 0; i < 100; i++) {
    var radius = 30;
    var x = Math.random() * (innerWidth - radius * 2) + radius;
    var y = Math.random() * (innerHeight - radius * 2) + radius;
    var dx = (Math.random() - 0.5) * 14; // speed
    var dy = (Math.random() - 0.5) * 14;

    circleArray.push(new Circle(x, y, dx, dy, radius));
}


function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);

    for (var i = 0; i < circleArray.length; i++) {
        circleArray[i].update();
    }
}

animate();
