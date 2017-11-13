<!DOCTYPE html>
<html>
  <head>
    <!--p5js download: https://p5js.org/download/-->
    <!--Content Delivery Network (CDN): https://cdnjs.com/libraries/p5.js-->
    <title>Word Frequency</title>
    <!--p5 core library, minified-->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.13/p5.min.js" type="text/javascript"></script>
    <!--p5 interaction with the DOM-->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.13/addons/p5.dom.min.js" type="text/javascript"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.4.3/p5.min.js"></script>
  <script src="./rita-full.js"></script>

    <script>

var playfair
var column
var input, button, greeting;
var dictionary = [];
  var verbArray = [];
  var wordCount;
  var noWord = ["and","the","to"];



function preload() {
  playfair = loadFont('playfair-display/PlayfairDisplay-Regular.otf');
  playfairB = loadFont('playfair-display/PlayfairDisplay-Black.otf');
  avenir = loadFont('avenir_font/Avenir Medium.otf');
  avenirR = loadFont('avenir_font/Avenir Book.otf');
}

function setup() {
        loadStrings('LinkedInBios.txt', analyze);
        createCanvas(displayWidth, displayHeight);
        background(255);
        input = createInput();
        input.position((displayWidth/12)*2+10, displayHeight/2);
        button = createButton('submit');
        button.position(input.x + input.width, displayHeight/2);
        button.mousePressed(greet);
        textFont(avenir);
        greeting = createElement('h4', 'Select Industry');
        textFont(avenir);
         greeting.position(displayWidth/12, displayHeight/2-20);
}

function analyze(qual) {
      qual.forEach(function(phrases){
      var wordPOS = phrases.toLowerCase().split(' ');
      wordPOS.forEach(function(word)  {
        
        wordCount = dictionary.filter(function(element) { 
              return element.word == word;
            });
            
            if (wordCount.length)   {
                wordCount[0].count++;
            }
            else
            {
                var posWord = RiTa.getPosTags(word);
                dictionary.push({word: word, pos: posWord[0], count: 1});  //
}
        dictionary.sort(function(a, b) {
                   return b.count - a.count;  //b.count-a.count is descending and a.count-b.count is ascenting
                 });
      
    });
    
});

display();
}


function display(){
      dictionary.forEach(function(element, index){
        if (element.pos == "vb" && element.word !== "been" || element.pos == "vbn" && element.word !== "been") {
          verbArray.push(element.word);
          }
          else {
            return;
          }
    });
  for (var k=0; k<verbArray.length; k++) {
    textSize(19);
    fill(50);
    rect(column*7, column/4, column*5, column*6);
    text(verbArray[k], column*7, column/4, column*5, column*6);
  }
    } 
    
    
function draw() {
    column = width/12
    stroke(2);
    noFill(15);
    textFont(avenir);
    textSize(55);
    textAlign(LEFT);
    fill(15);
    text("autoBIO", column, (height)/6.5);
    textSize(18);
    text("Extracting bios from LinkedIn public profiles, autoBIO uses Rita to conduct text analysis based on industry.  Users can generate the top 20 verbs and nouns based on industry.  In addition, you can create random bios and word clouds.", column, column*2, column*4, column*3);
    
    // textSize(48);
    // textAlign(CENTER, CENTER);
    // text("Point", column*2, ((height/3)+(column*2))+20);
    // text("Line", column*4.5, ((height/3)+(column*2))+20);
    // text("Area", column*7, ((height/3)+(column*2))+20);
    // text("(cartesian)", column*7, ((height/3)+(column*2))+70);
    // text("Area", column*9.5, ((height/3)+(column*2))+20);
    // text("(geographic)", column*9.5, ((height/3)+(column*2))+70);
    // textSize(24);
    // textAlign(LEFT);
    // text("Library Description", column, (height*.8));
    // text("Research Project Description", column*6, (height*.8));
    // textFont(avenirR);
    // textSize(18);
    // text("Bertin Revisited is a library of both adopted and digitally", column, (height*.8)+(column*.3));
    // text("revisted illustrations based on the system created by", column, (height*.8)+(column*.6));
    // text("Jaques Bertin in Semiology of Graphics.", column, (height*.8)+(column*.9));
    // text("This library will be used to serve as a foundation to explore", column*6, (height*.8)+(column*.3));
    // text("and explain how we can use visual variables to better", column*6, (height*.8)+(column*.6));
    // text("communicate uncertainty in data and statstical error.", column*6, (height*.8)+(column*.9));
    // noFill();
    // rect(column, height/3, column*2, column*2);
    // rect(column*3.5, height/3, column*2, column*2);
    // rect(column*6, height/3, column*2, column*2);
    // rect(column*8.5, height/3, column*2, column*2);
    fill(15);
    
    push();
    translate((column*3.5)+(column/2), (height/3)+(column/2));
    scale(column/150,column/150, column/150);
    drawLine();
    pop();
    noLoop();
}

function drawLine() {
    strokeWeight(7);
    beginShape();
    noFill();
    smooth();
    beginShape();
    vertex(10.2669565243687, 0.33333333333303);
    bezierVertex(10.2669565243687,0.33333333333303, 10.111, 12, 12.778, 32, 16.333, 43.556);
    bezierVertex(16.333, 43.556, 20.778, 53.333, 28.333, 64, 35.4444, 70.667);
    bezierVertex(35.4444, 70.667, 45.667, 77.3333, 51.889, 79.111, 78.7605278735209, 83.3888888888878); 
    bezierVertex(78.7605278735209, 83.3888888888878, 81.667, 83.556, 90.556, 84, 99.444, 85.333);
    bezierVertex(99.444, 85.333, 113.667, 89.778, 121.667, 92.444, 129.222, 96.4444);
    bezierVertex(129.222, 96.4444, 139.889, 104.778, 148.778, 114.222, 156.779, 130.222);
    bezierVertex(156.779, 130.222, 161.333333333332, 156.333333333332)
    endShape();

    
    //bezierVertex(68.6047791274814, 13.5234318061721, 68.3158762005496, 10.1242109175637, 62.327218939372,  2.40774955727738, 57.1373754635524, 0.6607361509459);
    //bezierVertex(57.1373754635524, 0.66073615094592, 52.1445629416176, 2.24968996578446, 47.525780039954,  8.44795977697322, 43.7652830932284, 14.226355228646);
    //bezierVertex(43.7652830932284, 14.2263552286468, 39.8528383680232, 20.0165040319034, 36.0054950676795, 22.7958891656172, 34.9234286677356, 23.047784301435);
    //bezierVertex(34.9234286677356, 23.0477843014351, 28.7221055821738, 21.8429868002067, 23.8735304435477, 17.3909407554247, 20.3773207151844, 14.555147255038);
    //bezierVertex(20.3773207151844, 14.5551472550387, 14.3075530592114, 8.42320295411719, 6.40454555188717, 0.76146169740332, 4.20280678242671, 0.8094657080464);
    //bezierVertex(4.20280678242671, 0.80946570804645, 0.89983247204509, 4.61341215291213, 1.05222595839314, 7.10801452534088, 5.1338168196271,  10.618539548152);
    //bezierVertex(5.1338168196271,  10.6185395481525, 11.6843713223298, 16.341575976875, 19.1328376661213, 23.5283345927246, 22.455961832612,  26.8428850243936);
    //bezierVertex(22.455961832612,  26.8428850243936, 25.2954157527356, 29.2733405588924, 29.9332623169248, 31.6300858385994, 31.1327043047113, 31.479022456836);
    //bezierVertex(31.1327043047113, 31.479022456836, 37.9078043257687, 31.2956084047555, 42.3073831844758, 29.2325986483129, 45.7668132399258, 24.8960014699596);
    //bezierVertex(45.7668132399258, 24.8960014699596, 51.33124785774,   16.5593586679679, 54.3501500827706, 11.5579443351253, 56.9466475910176, 9.4453627390003);
    //bezierVertex(56.9466475910176, 9.4453627390003, 59.6206070210728, 11.3037048461101, 60.3241797030414, 14.4404775000021, 60.1996482227296, 24.5953943245959);
    //bezierVertex(60.1996482227296, 24.5953943245959, 58.8125281272705, 28.277920470452, 54.9837361008795, 31.7582812481605, 46.4831043889399, 39.7152195509598);
    //bezierVertex(46.4831043889399, 39.7152195509598, 38.4218704449522, 47.4929692526521, 33.5897022691952, 52.2536135988312, 25.9408604077507, 60.288554288098);
    //bezierVertex(25.9408604077507, 60.2885542880986, 24.3964300013495, 63.9591094927027, 25.1253518796402, 69.4751900710698, 26.3340484473383, 72.988589383206);
    //bezierVertex(26.3340484473383, 72.9885893832061, 32.6247693008509, 76.2719051689865, 40.8752150087194, 75.7527993923295, 50.5088431409577, 74.395496100410);
    //bezierVertex(50.5088431409577, 74.3954961004101, 57.4783314542874, 71.5285486728799, 63.4850697149732, 66.9937974971954, 71.4143390348299, 61.089810692955);
    //bezierVertex(71.4143390348299, 61.0898106929553, 78.9356487842515, 55.494485361306, 84.4460228980997, 51.2362345014762, 91.2578780254944, 42.646692843583);
    //bezierVertex(91.2578780254944, 42.646692843583, 95.6383511075464, 35.9557052672508, 98.6990235298117, 34.772596542608, 102.37680832661,  39.255866704746);
    //bezierVertex(102.37680832661,  39.255866704746, 101.936392800536, 45.6335111211165, 100.050002683317, 50.6113099559579, 93.5207824966119, 58.120876882328);
    //bezierVertex(93.5207824966119, 58.120876882328, 85.636308572276,  66.462268052398, 83.098946320576,  69.4432254469384, 77.7238006758771, 74.794976692815);
    //bezierVertex(77.7238006758771, 74.794976692815, 77.9125562033578, 77.9265061376109, 82.717048377147,  80.7281205125664, 83.8998587933756, 80.2706136690203);
    //bezierVertex(83.8998587933756, 80.2706136690203, 85.4407726699819, 78.3807070220073, 88.3098538800614, 75.7994899236701, 93.0284402491206, 70.875147956941);
    //bezierVertex(93.0284402491206, 70.875147956941, 100.418052097229, 63.5346692596713, 106.405558238875, 57.1619521964285, 109.072323171843, 53.0807280790714);
    //bezierVertex(109.072323171843, 53.0807280790714, 111.220564906943, 44.1280994555027, 111.888158084455, 40.8520062428952, 109.335353985346, 33.302581802662);
    //bezierVertex(109.335353985346, 33.3025818026626, 104.705481029635, 27.0625312657075, 97.0873017638251, 25.2143667398423, 93.1418395612573, 27.13312156542);
    //bezierVertex(93.1418395612573, 27.13312156542, 89.0385897542792, 29.5479703055053, 83.3516240772942, 37.7121241624563, 80.5629317210105, 42.3286118440747);
    //bezierVertex(80.5629317210105, 42.3286118440747, 76.0014591302888, 46.5770150166727, 70.8079868203295, 50.8066493256492, 66.7268118361217, 53.596970094934);
    //bezierVertex(66.7268118361217, 53.5969700949345, 57.85441062885,   60.2684026772322, 54.4613313840964, 62.8642053023477, 50.163444109583,  65.464429911035);
    //bezierVertex(50.163444109583,  65.4644299110359, 45.645657908979,  66.17228419615, 35.9237375046832, 66.6858940789325, 34.1923414212979, 63.4570037862368);
    //bezierVertex(34.1923414212979, 63.4570037862368, 36.2746254109097, 60.7723473673441, 44.1906007039534, 53.0433166942175, 51.787835209464,  45.821445423073);
    //bezierVertex(51.787835209464,  45.8214454230738, 61.0252536133385, 37.4345990694555, 65.8742534027679, 32.825898992246, 68.5400075966327, 28.8787838101025);
    //bezierVertex(68.5400075966327, 28.8787838101025, 68.6040421302187, 21.212710250755, 68.6047791274814, 13.523431806);
    endShape();
}

function greet() {
  var name = input.value();
  input.value('');

}

</script>
  </head>
  <body>

  </body>
</html>
    

 