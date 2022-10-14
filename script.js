
let tail = [

]
let eclicked = false
let mousePos = [0,0]
let size = 15
let deltaAll = 0
function mouseMove(x,y) {
    mousePos=[x,y]
}
function keyPressed(key) {
    if(key=="e")eclicked=!eclicked
}

function setup() {
    createCanvas(1200, 600,"",`
    
    
    <input type="number" id="size" placeholder="'15' napis size">
    <button onclick="zmenSize()">nastavit</button>
    `)
    objects.new("trojuhelnik1", [
        []
    ], "hsl(40,40%,48%)", false, 3)
    for(let i=0;i<size;i++) {
        tail.push([0,0])
    }
    
}   

function changedScene() { }

function update(game, delta) {
    deltaAll+=delta
    setBackground("#000")  
    render(tail, `hsl(${deltaAll*60},37%,48%)`, eclicked, 5)
    tail.shift()
    tail.push(mousePos)
}

function zmenSize() {
    let velikost = document.getElementById("size").value
    document.querySelector("body").style.background = `hsl(40,50%,${velikost*2}%)`
    size = velikost
    tail = []
    for(let i=0;i<size;i++) {
        tail.push([0,0])
    }
}