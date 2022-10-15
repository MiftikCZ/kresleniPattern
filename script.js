
let tail = [

]
let eclicked = false
let qclicked = true
let xclicked = false
let wclicked = true
let mousePos = [0,0]
let size = 15
let deltaAll = 0
function mouseMove(x,y) {
    if(xclicked) {
        mousePos=[x+(Math.cos(x)*(180/3.14)*1),y+(Math.sin(y)*(180/3.14)*1)]
    } else {
        mousePos=[x,y]
    }
}
function keyPressed(key) {
    if(key=="e")eclicked=!eclicked
    if(key=="q")qclicked=!qclicked
    if(key=="x")xclicked=!xclicked
    if(key=="w")wclicked=!wclicked
}

function setup() {
    createCanvas(1200, 600,"",`
    
    
    <input type="number" id="size" placeholder="'15' napis size">
    <button onclick="zmenSize()">nastavit</button>
    `)
    for(let i=0;i<size;i++) {
        tail.push([0,0])
    }
    
}   

function changedScene() { }

function update(game, delta) {
    deltaAll+=delta
    if(qclicked) setBackground("#000")
    render(tail, `hsl(${deltaAll*60},37%,48%)`, eclicked, 5,wclicked)
    tail.shift()
    tail.push(mousePos)
}

function zmenSize() {
    let velikost = document.getElementById("size").value
    document.querySelector("body").style.background = `hsl(40,${20*(Math.cos(deltaAll)*57)+50}%,${velikost*2}%)`
    size = velikost
    tail = []
    for(let i=0;i<size;i++) {
        tail.push([0,0])
    }
}
