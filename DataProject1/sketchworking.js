// p5 calls setup() exactly once when the canvas loads

var dataLine = [];



function setup() {
    createCanvas(displayWidth, displayHeight);
    loadTable('wiid.csv', 'header', showData);

    // frameRate(5);
    // noLoop();
}

function draw() {
            background('lightgray');
            var counter = 1;
            fill('black');
            line(width/10, height*.75, (width*17)/20, height*.75);
            textSize(32);
            text("THE DIRTY WAR 1976-1983",width/3, height*.85)
            var count2 = dataLine.length;
            fill(80,80,80);
            textSize(12);
            for (var j=0; j<count2; j++) {
                console.log(dataLine[j].sourceText);
                fill(80,80,80);
                if (dataLine[j].sourceText == ("Fishlow et al. 1993") && dataLine[j].yearText == ("1976" | "1977"| "1978" | "1979" | "1980" | "1981" | "1982" | "1983")){
                    var giniNum = Number(dataLine[j].giniText);
                    var giniHeight = ((height*.25)+(height*.5)*(1-(giniNum/100)));
                    fill(128,0,0);
                    rect((width/16)*counter + (width/40), giniHeight, width/22, (height-(giniHeight+(height*.25))));
                    text(dataLine[j].yearText, (width/16)*counter + (width/25), height*.78 );
                    text(giniNum, (width/16)*counter + (width/25), giniHeight-(height/50));
                }
                
                else if (dataLine[j].sourceText == ("Fishlow et al. 1993") && dataLine[j].yearText == ("1974" | "1975" | "1985" | "1986" | "1987" | "1988")){
                    var giniNum = Number(dataLine[j].giniText);
                    var giniHeight = ((height*.25)+(height*.5)*(1-(giniNum/100)));
                    fill(80,80,80);
                    rect((width/16)*counter + (width/40), giniHeight, width/22, (height-(giniHeight+(height*.25))));
                    text(dataLine[j].yearText, (width/16)*counter + (width/25), height*.78 );
                    text(giniNum, (width/16)*counter + (width/25), giniHeight-(height/50));
                }
                else {
                    return;}
                counter ++;
                }
                  
            noLoop();        
                }
                
            

  

function showData(data) {
    var count = data.getRowCount();
    console.log(count);
    
    for (var i=0; i<count; i++) {
        var country = data.getString(i, 0);
        var year = data.getString(i, 3);
        var gini = data.getString(i, 8);
        var source = data.getString(i, 9);
        if ((country == 'Argentina' && year == "1974") || (country == 'Argentina' && year == "1975") || (country == 'Argentina' && year == "1976") || (country == 'Argentina' && year == "1977") || (country == 'Argentina' && year == "1978") || (country == 'Argentina' && year == "1979") || (country == 'Argentina' && year == "1980") || (country == 'Argentina' && year == "1981") || (country == 'Argentina' && year == "1982") || (country == 'Argentina' && year == "1983") || (country == 'Argentina' && year == "1984")|| (country == 'Argentina' && year == "1985")|| (country == 'Argentina' && year == "1986"|| (country == 'Argentina' && year == "1987")|| (country == 'Argentina' && year == "1988")))
            dataLine.push(new enterData(country, year, gini, source))
    }
    
         
    }


function enterData(_country, _year, _gini, _source) {
    var private = {};
           private.countryText = _country;
            private.yearText = _year;
            private.giniText = _gini;
            private.sourceText = _source;
            return private;
            //needs to happen outside the function
            }
 
//for (var j=0; j<10; j++) {
//    if (dataLine.yearText[j] == "1974"){
//    console.log(dataLine.countryText[j]);
//        }
//    }






//this.enterData = function() {
//    this.Year=Year;
//    this.Country=Country;
//    this.Gini=Gini;
//    this.Source=Source;
    


        
 
 
 
    //for (var i=0; i<dataLine.length; i++) {   
        //text(Country[i] + ' | ' + Year[i] + ' | ' + Gini[i] + ' | ' + Source[i], width/2, 30 * (i + 1));
        
    //}



//<!DOCTYPE html>
//<html>
//    <head>
//        <!--p5 core library CDN-->
//        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.min.js"></script>
//
//        <script>
//            // globals
//           var quantity = 100;
//           var paddleColor;
//            var score = 0;
//            var pongBalls = [];
//
//            // p5 calls setup() exactly once when the canvas loads
//            function setup() {
//                createCanvas(500, 500);
//                rectMode(CENTER);
//                for (var i=0; i<quantity; i++) {
//                    pongBalls.push(new PongBall(random(width), random(height)));
//                
//                }
//
//                // paddle color
//                paddleColor = color(255, 255, 0);
//
//             }
//
//            function draw() {
//                background('lightgray');
//                fill('black');
//
//                for (var i=0; i<quantity; i++) {
//                    pongBalls[i].update();
//                    
//                }
//                fill(paddleColor);
//                rect(mouseX, height - 30, width / 6, 10, 5);
//                fill('black');
//                text(score, mouseX, height-25);
//            }
//            
//            function PongBall(myX, myY) {
//            
//                this.x = myX;
//                this.y = myY;
//                this.xSpeed = random(-2.5, 2.5);
//                this.ySpeed = random(-2.5, 2.5);
//
//               
//               
//                
//                this.update = function() {
//        
//                    this.x += this.xSpeed;
//                    this.y += this.ySpeed;
//
//                    // boundaries
//                    // horizontal boundary
//                    if (this.x > width - 5 || this.x < 5) {
//                        this.xSpeed = this.xSpeed * -1; // xSpeed *= -1;
//                    }
//
//                    // top boundary
//                    if (this.y + this.ySpeed < 5) {
//                        this.ySpeed = this.ySpeed * -1; // xSpeed *= -1;
//                    }
//
//                    // paddel boundary
//                    if (this.y >= height - 40 && abs(mouseX-this.x) < width/12 && this.y < height - 40 + this.ySpeed) {
//                        this.ySpeed = this.ySpeed * -1  // ySpeed *= -1;
//                        // fun items
//                        this.xSpeed *= 1.2;
//                        this.ySpeed *= 1.2;
//                        paddleColor = color(random(255), 0, 0);
//                        score++;
//
//                    }
//
//                    ellipse(this.x, this.y, 10, 10);
//                }
//                }
//            
//
//        </script>
//    </head>
//    <body>
//
//    </body>
//</html>//


//                    if(dataLine[j].yearText == ("1976" | "1977"| "1978" | "1979" | "1980" | "1981" | "1982" | "1983")){
//                        fill(128,0,0);}
//                    else {
//                        fill(80,80,80);
//                    }