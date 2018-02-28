var s = document.getElementById('not_canvas');

var clear = document.getElementById("clear");
var toggle = document.getElementById("toggle");

//Helper for line
var firstLine = true;
var prevX = 0;
var prevY = 0;


//Clears the canvas
var clearAll = function(e){
	while (s.lastChild) {
        s.removeChild(s.lastChild);
    }
    r = document.createElementNS("http://www.w3.org/2000/svg", 'rect');
    r.setAttribute('width','500');
    r.setAttribute('height','500');
    r.setAttribute('width','500');
    r.setAttribute('stroke-width','1');
    r.setAttribute('stroke','green');
    r.setAttribute('fill','white');
    s.appendChild(r)
    
}

clear.addEventListener("click",clearAll);



//Makes the shapes

var click_shape = function(e){
	var x = e.offsetX;
    var y = e.offsetY;
    


    c = document.createElementNS("http://www.w3.org/2000/svg", 'circle')
    c.setAttribute('r','25')
    c.setAttribute('fill','yellow')
    c.setAttribute('cx',x)
    c.setAttribute('cy',y)
    s.appendChild(c)  

//  edit this
    if (!firstLine){
        l = document.createElementNS("http://www.w3.org/2000/svg", 'line')
        l.setAttribute("x1",prevX)
        l.setAttribute("y1",prevY)
        l.setAttribute("x2",x)
        l.setAttribute("y2",y)
        l.setAttribute("stroke","green")
        l.setAttribute("stroke-width","green")
        s.appendChild(l)
        
    }
    else{
        firstLine = false;
    }

    prevX = x;
    prevY = y;

    
}

s.addEventListener("click",click_shape);