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
            text("Argentina GINI Coefficient During the Dirty War", width/4, height*.2);
            text("THE DIRTY WAR 1976-1983",width/3, height*.85)
            var count2 = dataLine.length;
            fill(80,80,80);
            textSize(12);
            for (var j=0; j<count2; j++) {
                console.log(dataLine[j].sourceText);
                fill(80,80,80);
                if (dataLine[j].sourceText == "Fishlow et al. 1993") {
                    var giniNum = Number(dataLine[j].giniText);
                    var giniHeight = ((height*.25)+(height*.5)*(1-(giniNum/100)));
                    rect((width/16)*counter + (width/40), giniHeight, width/22, (height-(giniHeight+(height*.25))));
                    text(dataLine[j].yearText, (width/16)*counter + (width/25), height*.78 );
                    text(giniNum, (width/16)*counter + (width/25), giniHeight-(height/50));
                    counter ++;
                }
                  
            noLoop();  
            //textAlign(horizAlign,[vertAlign]);
            //text("Gini Coefficient", width*.07, height*.7);
            //textAlign(CENTER);
                }
            
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
