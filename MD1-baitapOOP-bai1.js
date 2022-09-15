class Rectangle {
    Wight;
    Height;

    constructor(x, y, wight, height) {
        this.Wight;
        this.Height;
        this.x;
        this.y;
    }

    getx(x) {
        this.x = x;
    }

    setx() {
        return this.x;
    }

    gety(y) {
        this.y = y;
    }

    sety() {
        return this.y;
    }

    getWight(Wight) {
        this.Wight = Wight;
    }

    setWight() {
        return this.Wight;
    }

    getHeight(Height) {
        this.Height = Height;
    }

    setHeight() {
        return this.Height;
    }

    getArea() {
        return this.Height * this.Wight;
    }

    getChuvi() {
        return (this.Wight + this.Height) * 2;
    }

    DrawRectang(ctx) {
        ctx.beginPath();
        ctx.fillRect(this.x,this.y,this.width,this.height);
        ctx.closePath();
    }
}
