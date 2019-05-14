'use strict';

if (!Array.prototype.find) {
  Object.defineProperty(Array.prototype, 'find', {
    value: function(predicate) {
     // 1. Let O be ? ToObject(this value).
      if (this == null) {
        throw new TypeError('"this" is null or not defined');
      }

      var o = Object(this);

      // 2. Let len be ? ToLength(? Get(O, "length")).
      var len = o.length >>> 0;

      // 3. If IsCallable(predicate) is false, throw a TypeError exception.
      if (typeof predicate !== 'function') {
        throw new TypeError('predicate must be a function');
      }

      // 4. If thisArg was supplied, let T be thisArg; else let T be undefined.
      var thisArg = arguments[1];

      // 5. Let k be 0.
      var k = 0;

      // 6. Repeat, while k < len
      while (k < len) {
        // a. Let Pk be ! ToString(k).
        // b. Let kValue be ? Get(O, Pk).
        // c. Let testResult be ToBoolean(? Call(predicate, T, « kValue, k, O »)).
        // d. If testResult is true, return kValue.
        var kValue = o[k];
        if (predicate.call(thisArg, kValue, k, o)) {
          return kValue;
        }
        // e. Increase k by 1.
        k++;
      }

      // 7. Return undefined.
      return undefined;
    },
    configurable: true,
    writable: true
  });
}

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var w = window.innerWidth, h = window.innerHeight;

    
    var radius = 5;


    var color2 = d3.interpolate('#a983cd', '#a983cd')
    var color3 = d3.scaleOrdinal()
         .domain(['0', '1', '2', '3', '4'])
         .range(['#909090','#86d8f8' ,'#cebbee','#a983cd', '#6a7ef1']);
    var color4 = d3.scaleOrdinal()
         .domain(['1', '2', '0'])
         .range(["#ff7150", "#a983cd", '#E8EDED']);
    var color5 = d3.scaleOrdinal()
         .domain(['0','1', '2', '3', '4', '5', '6', '7', '8', '9', '10'])
         .range(['#E8EDED', "#6a7ef1", '#cebbee', '#a983cd','#86d8f8', "#d2eaee",'#a0a1a5',"#ff7150",'#facab6','#dfb182', '#bd874b','#f0ce22', '#F4F721' ]);
    var color6 = d3.scaleOrdinal()
         .domain(['0','1', '2', '3', '4', '5', '6', '7', '8', '9', '10'])
         .range(['#E8EDED', "#6a7ef1", "#ff7150",'#a983cd','#facab6','#a0a1a5','#bd874b','#cebbee','#dfb182','#86d8f8' ,'#05ce7c', "#d9eeef",'#05ce7c' ]);
    var color7 = d3.scaleOrdinal()
         .domain(['0', '1', '2'])
         .range(["#21D177", "#F7594C", "#F2BC02"]);
    var centerScale = d3.scalePoint().padding(2).range([50, w*.86]);
    var centerScale2 = d3.scalePoint().padding(7).range([100, w*.86]);
    var forceStrength = .15;
    var forceStrength2 = .05;
    var forceStrength3 = .05;
    var angle = 0;
    // var t = d3.transition()
    // .duration(10);
    
    var svg = d3.select("body").append("svg")
      .attr("width", w)
      .attr("height", h)

      var svg2 = d3.select('.scroll__figure2')
      .append("svg")
      .attr("id", "svg2");
  
    
    var circleID = "all";

    var container2 = d3.select('#scatter-scroll');
    var graphic2 = container2.select('.scroll__figure2');
    var chart2 = graphic2.select('.figure__chart2');
    var text2 = container2.select('.scroll__text2');
    var step2 = text2.selectAll('.step2');

// initialize the scrollama
    var scroller2 = scrollama();

    
   
            
            

        
    var skillData = d3.csv('assets/dataDB2.csv');  
    
    
    
    Promise.all([skillData]).then(change);
  
    
   function change(data){
     
   data = data['0']
     
     
     
    // var ID = [...new Set(skillDV.map(d => d.ID))];
     //var Education = [...new Set(skillDV.map(d => d.Education))];
  
      
      
      
       var simulation = d3.forceSimulation()
            .force("collide",d3.forceCollide( function(d){
                return d.r }).iterations(16) 
            )
            .force("charge", d3.forceManyBody().strength(-7))
            .force("x", d3.forceX().x(w*.5))
            .force("y", d3.forceY().y(h*.5));
            
             var circles = svg2.selectAll("circle")
                        .data(data, function(d){ return d.ID ;})
                        .enter()
                        .append("circle")
            

      data.forEach(function(d){
        d.r = radius
        d.x = w
        d.y = h
      });
                        
                    //     .attr("cx", function(d){ console.log(d.ID); })
                        // .attr("cy", function(d){ return h; })
                        
               
    
                        
      
      
      function ticked(data) {
                        
        if (step2._groups[0][0].className === 'step2 is-active') {

        function all(){
          d3.selectAll("text").remove();
      
            svg2.selectAll('circle')
              .attr("r", function(d){ return d.r; })
              .attr("cx", function(d){ return d.x;})
              .attr("cy", function(d){ return d.y -h*.15;})
              .style("fill", function(d){ return color2(d.ID);})
              .style("stroke", function(d){ return color2(d.ID);});
              
        svg2.append("text")
        .attr("x", w*.333)             
        .attr("y", h*.1)
        .attr("text-anchor", "center")  
        .attr('class', "domTitle")
        .attr('fill', '#111111')
        .text('Recent Immigrants, 2017');
        
        
        svg2.append("text")
        .attr("x", w*.333)             
        .attr("y", h*.67)
        .attr("text-anchor", "center")  
        .attr('class', "domQuote")
        .attr('fill', '#111111')
        .text('In 2017, the United States was home to more than half a million');
        
        
        svg2.append("text")
        .attr("x", w*.333)             
        .attr("y", h*.7)
        .attr("text-anchor", "center")  
        .attr('class', "domQuote")
        .attr('fill', '#111111')
        .text('new immigrants (ages 16+), or those who had arrived within the last year.');
        
        
        svg2.append("text")
        .attr("x",w*.333)             
        .attr("y", h*.73)
        .attr("text-anchor", "center")  
        .attr('class', "domQuote")
        .attr('fill', '#111111')
        .text('In this brief, we highlight the unique talents and skills');
        
         svg2.append("text")
        .attr("x", w*.333)             
        .attr("y", h*.77)
        .attr("text-anchor", "center")  
        .attr('class', "domQuote")
        .attr('fill', '#111111')
        .text('these New Americans brought with them.');
        
      
              
              svg2.on('click', function() {
                d3.event.stopPropagation();
                splitBubbles("Education");
                
                
              })
        }
        all()
      }  
            
          if (step2._groups[0][1].className === 'step2 is-active') {

          function Education() {
          circleID = "Education"
          
          d3.selectAll("text").remove();
                
          svg2.selectAll('circle')
              .transition()
              .duration(100)
              .attr("cx", function(d){ return d.x*1.3; })
              // .attr("cy", function(d){ return d.y; })
              .attr("cy", function(d){ return d.y*1.3; })
              .style("fill", function(d){ return color3(d.Education);})
              .style("stroke", function(d){ return color3(d.Education); });
          
           svg2.append("text")
        .attr("x", w*.333)             
        .attr("y", h/10)
        .attr("text-anchor", "center")  
        .attr('class', "domTitle")
        .attr('fill', '#111111')
        .text('Recent Immigrants by Degree');
        
        svg2.append("text")
        .attr("x", w*.22)             
        .attr("y", h*.7)
        .attr("text-anchor", "center")  
        .attr('class', "degree")
        .attr('fill','#6a7ef1')
        .text('Masters Degree');
        
        svg2.append("text")
        .attr("x", w*.37)             
        .attr("y", h*.7)
        .attr("text-anchor", "center")  
        .attr('class', "degree")
        .attr('fill','#a983cd')
        .text('Bachelors Degree');
        
        svg2.append("text")
        .attr("x", w*.54)             
        .attr("y", h*.7)
        .attr("text-anchor", "center")  
        .attr('class', "degree")
        .attr('fill','#cebbee')
        .text('Some College');
        
        svg2.append("text")
        .attr("x", w*.67)             
        .attr("y", h*.7)
        .attr("text-anchor", "center")  
        .attr('class', "degree")
        .attr('fill','#86d8f8')
        .text('High School Degree');
        
        svg2.append("text")
        .attr("x", w*.85)             
        .attr("y", h*.7)
        .attr("text-anchor", "center")  
        .attr('class', "degree")
        .attr('fill', '#909090')
        .text('No Degree');
          
          svg2.on('click', function() {
    
               
                splitBubbles("STEM");
        
        })
        }
        Education()
      }
        
        
if (step2._groups[0][2].className === 'step2 is-active') {

        function STEM() {
           d3.selectAll("text").remove();
           circleID = "STEM"
           svg2.selectAll('circle')
              .transition()
              .duration(100)
              // .attr("cx", function(d){ if (d.STEM != "0") {return d.x+w/4;} else {return 0;} })
              // .attr("cy", function(d){ if (d.STEM != "0") {return d.y;} else {return 0;} })
              .attr("cx", function(d) {return d.x*1.1;})
              .attr("cy", function(d){ return d.y;})
              .attr('opacity', function(d){ if (d.STEM == "0") {return .5;} })
              .style("fill", function(d){ return color4(d.STEM);})
              .style("stroke", function(d){ return color4(d.STEM); });
          svg2.on('click', function() {
                d3.event.stopPropagation();
                splitBubbles("FieldNew");
        })
         svg2.append("text")
        .attr("x", w*.3)             
        .attr("y", h*.1)
        .attr("text-anchor", "center")  
        .attr('class', "domTitle")
        .attr('fill', '#111111')
        .text('STEM Degrees');
        
        svg2.append("text")
        .attr("x", w*.32)             
        .attr("y", h*.46)
        .attr("text-anchor", "center")  
        .attr('class', "degree")
        .attr('fill', "#a983cd")
        .text('STEM');
        
        svg2.append("text")
        .attr("x", w*.45)             
        .attr("y", h*.46)
        .attr("text-anchor", "center")  
        .attr('class', "degree")
        .attr('fill', "#ff7150")
        .text('Non STEM Degrees');
        
        svg2.append("text")
        .attr("x", w*.67)             
        .attr("y", h*.7)
        .attr("text-anchor", "center")  
        .attr('class', "degree")
        .attr('fill', '#999999')
        .text('No College Degree');
        
        }
        STEM()
}
    

    if (step2._groups[0][3].className === 'step2 is-active') {
        
        function FieldNew() {
           d3.selectAll("text").remove();
          circleID == "FieldNew"
           svg2.selectAll('circle')
              .transition()
              .duration(100)
              .style('opacity', '1')
              .attr("cx", function(d){ 
                  if (d.FieldNew == "0") {return d.x;}
                  else if (d.FieldNew == '7'||d.FieldNew == '8'||d.FieldNew == '9'||d.FieldNew == '10'){return (d.x*1.7-w*.5) }
                  else {return (d.x*1.7);}
                  
              })
              .attr("cy", function(d) {return d.y*.9;})
              .style("fill", function(d){ return color5(d.FieldNew);})
              .style("stroke", function(d){ return color5(d.FieldNew); })
              
      svg2.append("text")
        .attr("x", w*.2)             
        .attr("y", h*.08)
        .attr("text-anchor", "center")  
        .attr('class', "professions")
        .attr('fill',  "#6a7ef1")
        .text('Engineering');
        
      svg2.append("text")
        .attr("x", w*.33)             
        .attr("y", h*.08)
        .attr("text-anchor", "center")  
        .attr('class', "professions")
        .attr('fill', '#cebbee')
        .text('Medical & Health');
        
      svg2.append("text")
        .attr("x", w*.45)             
        .attr("y", h*.08)
        .attr("text-anchor", "center")  
        .attr('class', "professions")
        .attr('fill', '#a983cd')
        .text('Biology');
        
      svg2.append("text")
        .attr("x", w*.45)             
        .attr("y", h*.1)
        .attr("text-anchor", "center")  
        .attr('class', "professions")
        .attr('fill', '#a983cd')
        .text('& Life Sciences');
        
      svg2.append("text")
        .attr("x", w*.55)             
        .attr("y", h*.08)
        .attr("text-anchor", "center")  
        .attr('class', "professions")
        .attr('fill', '#86d8f8')
        .text('Physical');
        
      svg2.append("text")
        .attr("x", w*.55)             
        .attr("y", h*.1)
        .attr("text-anchor", "center")  
        .attr('class', "professions")
        .attr('fill', '#86d8f8')
        .text('Sciences');
        
      svg2.append("text")
        .attr("x", w*.65)             
        .attr("y", h*.08)
        .attr("text-anchor", "center")  
        .attr('class', "professions")
        .attr('fill', "#d2eaee")
        .text('Computer');
        
      svg2.append("text")
        .attr("x", w*.65)             
        .attr("y", h*.1)
        .attr("text-anchor", "center")  
        .attr('class', "professions")
        .attr('fill', "#d2eaee")
        .text('Sciences');
        
      svg2.append("text")
        .attr("x", w*.77)             
        .attr("y", h*.08)
        .attr("text-anchor", "center")  
        .attr('class', "professions")
        .attr('fill','#a0a1a5')
        .text('Other STEM');
        
        
      svg2.append("text")
        .attr("x", w*.32)             
        .attr("y", h*.58)
        .attr("text-anchor", "center")  
        .attr('class', "professions")
        .attr('fill', "#ff7150")
        .text('Business');
        
      svg2.append("text")
        .attr("x", w*.45)             
        .attr("y", h*.58)
        .attr("text-anchor", "center")  
        .attr('class', "professions")
        .attr('fill','#facab6')
        .text('Social Sciences');
        
      svg2.append("text")
        .attr("x", w*.55)             
        .attr("y", h*.58)
        .attr("text-anchor", "center")  
        .attr('class', "professions")
        .attr('fill','#dfb182')
        .text('Education');
         
      svg2.append("text")
        .attr("x", w*.66)             
        .attr("y", h*.58)
        .attr("text-anchor", "center")  
        .attr('class', "professions")
        .attr('fill','#bd874b')
        .text('Other,');
        
      svg2.append("text")
        .attr("x", w*.66)             
        .attr("y", h*.6)
        .attr("text-anchor", "center")  
        .attr('class', "professions")
        .attr('fill','#bd874b')
        .text('Non-STEM');
                
              }
        
        FieldNew();
      }

        
if (step2._groups[0][4].className === 'step2 is-active') {
              
        function profession(){
        d3.selectAll("text").remove();
          circleID == "profession"
            svg2.selectAll('circle')
              .style("opacity",function(d){ if (d.profession == "0") {return '0';} else {return '1';}})
              .transition()
              .duration(75)
              .attr("cx", function(d){ if (d.profession == "11") {return d.x+w*.15}
                                        else {return d.x+w*.08}
              })
              .attr("cy", function(d){ return d.y;})
              .style("fill", function(d){ return color6(d.profession);})
              .style("stroke", function(d){ return color6(d.profession);});
              

            
            
      svg2.append("text")
        .attr("x", w*.3)             
        .attr("y", h*.1)
        .attr("text-anchor", "center")  
        .attr('class', "domTitle")
        .attr('fill', "#999999")
        .text('Top 10 Most Common Occupations.');  
        
        
        svg2.append("text")
        .attr("x", w*.2)             
        .attr("y", h*.19)
        .attr("text-anchor", "center")  
        .attr('class', "professions")
        .attr('fill', "#6a7ef1")
        .text('Software');
        
        
         svg2.append("text")
        .attr("x",  w*.2)             
        .attr("y", h*.205)
        .attr("text-anchor", "center")  
        .attr('class', "professions")
        .attr('fill', "#6a7ef1")
        .text('Developers');
        
        
        // 
        svg2.append("text")
        .attr("x", w*.31)             
        .attr("y", h*.19)
        .attr("text-anchor", "center")  
        .attr('class', "professions")
        .attr('fill', '#a983cd')
        .text('Physical');
        
        svg2.append("text")
        .attr("x", w*.31)             
        .attr("y", h*.205)
        .attr("text-anchor", "center")  
        .attr('class', "professions")
        .attr('fill', '#a983cd')
        .text('Scientists');
          
        
        
        svg2.append("text")
        .attr("x", w*.42)             
        .attr("y", h*.19)
        .attr("text-anchor", "center")  
        .attr('class', "professions")
        .attr('fill', '#a0a1a5')
        .text('Computer');
        
         svg2.append("text")
        .attr("x", w*.42)             
        .attr("y", h*.205)
        .attr("text-anchor", "center")  
        .attr('class', "professions")
        .attr('fill', '#a0a1a5')
        .text('Scientists');
        
        svg2.append("text")
        .attr("x", w*.54)             
        .attr("y", h*.19)
        .attr("text-anchor", "center")  
        .attr('class', "professions")
        .attr('fill', '#cebbee')
        .text('Physicians');
        
        svg2.append("text")
        .attr("x", w*.65)             
        .attr("y", h*.19)
        .attr("text-anchor", "center")  
        .attr('class', "professions")
        .attr('fill', '#86d8f8')
        .text('Nurses');
        

        svg2.append("text")
        .attr("x", w*.25)             
        .attr("y", h/1.84)
        .attr("text-anchor", "center")  
        .attr('class', "professions")
        .attr('fill', "#ff7150")
        .text('Cashiers');
        
        svg2.append("text")
        .attr("x", w*.36)             
        .attr("y", h/1.84)
        .attr("text-anchor", "center")  
        .attr('class', "professions")
        .attr('fill','#facab6')
        .text('Managers');
        
        svg2.append("text")
        .attr("x", w*.83)             
        .attr("y", h*.6)
        .attr("text-anchor", "center")  
        .attr('class', "professions")
        .attr('fill', '#999999')
        .text('Other');
        
         svg2.append("text")
        .attr("x", w*.83)             
        .attr("y", h*.615)
        .attr("text-anchor", "center")  
        .attr('class', "professions")
        .attr('fill', '#999999')
        .text('Occupations');
          
        
        svg2.append("text")
        .attr("x", w*.47)             
        .attr("y", h/1.84)
        .attr("text-anchor", "center")  
        .attr('class', "professions")
        .attr('fill', '#bd874b')
        .text('Accountants');
        
        
        svg2.append("text")
        .attr("x", w*.58)             
        .attr("y", h/1.84)
        .attr("text-anchor", "center")  
        .attr('class', "professions")
        .attr('fill', '#dfb182')
        .text('CEOs');
        
        svg2.append("text")
        .attr("x", w*.7)             
        .attr("y", h*.54)
        .attr("text-anchor", "center")  
        .attr('class', "professions")
        .attr('fill', '#05ce7c')
        .text('Postsecondary');
        
        svg2.append("text")
        .attr("x", w*.7)             
        .attr("y", h*.56)
        .attr("text-anchor", "center")  
        .attr('class', "professions")
        .attr('fill', '#05ce7c')
        .text('Educators');
        
        }
        
       profession()
        }
        
      

          
if (step2._groups[0][5].className === 'step2 is-active') {
          function professionExtra(){
             d3.selectAll("text").remove();
            circleID == "professionExtra";
            svg2.selectAll('circle')
              .style("opacity",function(d){ if (d.professionExtra == "0") {return 0;} else {return 1;}})
              .transition()
              .duration(125)
              .attr('class', "profession")
              .attr("r", function(d){ return d.r; },)
              .attr("cx", function(d){return d.x + w/4;})
              .attr("cy", function(d) {return d.y;})
              .style("fill", function(d){ return color6(d.profession);})
              .style("stroke", function(d){ return color6(d.profession); });
              
              svg2.on('click', function() {
                circleID == "professionExtra2";
                 splitBubbles("professionExtra2");
              });
        }

        professionExtra()
      }

if (step2._groups[0][6].className === 'step2 is-active') {
        
        function professionExtra2() {
          circleID == "professionExtra2";
          svg2.selectAll('circle')
              .style("opacity",function(d){ if (d.professionExtra == "0") {return 0;} else {return 1;}})
              .transition()
              .duration(100)
              .attr('class', "profession")
              .attr("r", function(d){ if (d.postsecondary == "0" && d.professionExtra2 != "0") {return d.r;} else if (d.postsecondary == "1") {return d.r+7;} else {return d.r}})
              .attr("cx", function(d){
                if (d.professionExtra2 == '1' && d.profession =='10') {return (d.x-w*.05);} 
                else if (d.professionExtra2 == "0" && d.postsecondary =='0') {return 0;} 
                else if (d.professionExtra2 == "1" && d.postsecondary =='0'){return d.x + w*.2;}
                else 
                {return d.x + w*.45;}
              })
              .attr("cy", function(d){
              { if (d.postsecondary == "0" && d.professionExtra2 == "1") {return d.y+h*.1;} else if (d.postsecondary == "1") {return d.y+h*.1;} else {return 0}}
              })
              .style("fill", function(d){ return color6(d.profession);})
              .style("stroke", function(d){ return "snow"; });
        
        svg2.append("text")
        .attr("x", w*.39)             
        .attr("y", h*.25)
        .attr("text-anchor", "center")  
        .attr('class', "postsecond")
        .attr('fill', '#939393')
        .text('Postsecondary'); 
        
        svg2.append("text")
        .attr("x", w*.39)             
        .attr("y", h*.28)
        .attr("text-anchor", "center")  
        .attr('class', "postsecond")
        .attr('fill', '#939393')
        .text('Educators'); 
        
        svg2.on('click', function() {
                circleID == "professionExtra3";
                 splitBubbles("professionExtra3");
              });
               
      } 
      professionExtra2()

    }

if (step2._groups[0][7].className === 'step2 is-active') {
      
      function professionExtra3(){
             d3.selectAll("text").remove();
            circleID == "professionExtra3";
            svg2.selectAll('circle')
              .style("opacity",function(d){ if (d.professionExtra == "0") {return 0;} else {return 1;}})
              .transition()
              .duration(100)
              .attr('class', "profession")
              .attr("r", function(d){ return d.r; },)
              .attr("cx", function(d){return d.x + w/4;})
              .attr("cy", function(d) {return d.y;})
              .style("fill", function(d){ return color6(d.profession);})
              .style("stroke", function(d){ return color6(d.profession); });
              
              svg2.on('click', function() {
                circleID == "engineering";
                 splitBubbles("engineering");
              });
        }
        professionExtra3()
      }
        
 
 if (step2._groups[0][8].className === 'step2 is-active') {       
         function engineering() {
          circleID == "engineering";
          svg2.selectAll('circle')
              .style("opacity",function(d){ if (d.professionExtra == "0") {return 0;} else {return 1;}})
              .transition()
              .duration(100)
              .attr('class', "profession")
              .attr("r", function(d){ if (d.engineering == "0" && d.professionExtra3 != "0") {return d.r;} else if (d.engineering == "1") {return d.r+7;} else {return d.r}})
              .attr("cx", function(d){
                if (d.professionExtra2 == '1' && d.engineering =='1') {return (d.x*1.2);} 
                else if (d.professionExtra2 == "0" && d.engineering =='0') {return 0;} 
                else if (d.professionExtra2 == "1" && d.engineering =='0'){return d.x;}
                else 
                {return 0;}
              })
              .attr("cy", function(d){
              { if (d.engineering == "0" && d.professionExtra2 == "1") {return d.y + h*.4;} else if (d.engineering == "1") {return d.y*1.2;} else {return 0}}
              })
              .style("fill", function(d){ return color6(d.profession);})
              .style("stroke", function(d){ return "snow"; });
        
        svg2.append("text")
        .attr("x", w*.6)             
        .attr("y", h*.2)
        .attr("text-anchor", "center")  
        .attr('class', "postsecond")
        .attr('fill', '#939393')
        .text('Engineering'); 
        
        
        svg2.on('click', function() {
                circleID == "professionExtra";
                 splitBubbles("professionExtra");
              });
           
           
      }
      engineering();
        
    }  
        
        
      
      }  //ticked
      
      

        simulation
            .nodes(data)
            .on("tick", ticked);
            
                       
      
      
      function groupBubbles() {
        
        if (circleID == "professionExtra2") {
          simulation.force('x', d3.forceX().strength(function(d){
               { if (d.postsecondary == "1") {return forceStrength2;} else {return forceStrength}}
              }).force("charge", d3.forceManyBody().strength(10)).x(w))
          simulation.force('y', d3.forceY().strength(function(d){
               { if (d.postsecondary == "1") {return forceStrength2;} else {return forceStrength}}
              }).force("charge", d3.forceManyBody().strength(10)).y(h));
          simulation.alpha(1).restart();
        }
        
        else if (circleID == "engineering") {
          simulation.force('x', d3.forceX().strength(function(d){
               { if (d.engineering == "1") {return forceStrength3;} else {return .15}}
              }).force("charge", d3.forceManyBody().strength(10)).x(w))
          simulation.force('y', d3.forceY().strength(function(d){
               { if (d.engineering == "1") {return forceStrength3;} else {return .15}}
              }).force("charge", d3.forceManyBody().strength(10)).y(h));
          simulation.alpha(1).restart();
        }

        // @v4 Reset the 'x' force to draw the bubbles to the center.
        else {
        simulation.force('x', d3.forceX().strength(forceStrength).x(w))
        simulation.force('y', d3.forceY().strength(forceStrength).y(h))
      
        // @v4 We can reset the alpha value and restart the simulation
        simulation.alpha(1).restart();
        }
        
      }
      
      
      
      function splitBubbles(byVar) {
        
        circleID = byVar
        
        if (byVar == "professionExtra2"){
          
          centerScale2.domain(data.map(function(d){ return d[byVar]; }));
        
          simulation.force('x', d3.forceX().strength(function(d){
               { if (d.postsecondary == "1" ) {return forceStrength2;} else {return forceStrength}}
              }).x(function(d){{return centerScale2(d[byVar]);}}));
          
          
          simulation.force('y', d3.forceY().strength(function(d){
               { if (d.postsecondary == "1") {return forceStrength2;} else {return forceStrength}}
              }).y(function(d){ 
          
          if (circleID == "postsecondary"){
           { return h*.3;}
          }
           
           
          else{
             return h*.3;
        }
      
        }));
        
        simulation.alpha(1).restart();
        }
        
        
        else if (byVar == "engineering") {
          
                    centerScale2.domain(data.map(function(d){ return d[byVar]; }));
        
          simulation.force('x', d3.forceX().strength(function(d){
               { if (d.engineering == "1") {return forceStrength3;} else {return .15}}
              }).x(function(d){{return centerScale2(d[byVar]);}}));
          
          
          simulation.force('y', d3.forceY().strength(function(d){
               { if (d.engineering == "1") {return forceStrength3;} else {return .15}}
              }));
        
        simulation.alpha(1).restart();
        
        }
        
        
        
        else{
          
        centerScale.domain(data.map(function(d){ return d[byVar]; }));
        
         simulation.force('x', d3.forceX().strength(forceStrength).x(function(d){ 
          if (circleID=="profession") {return centerScale(d[byVar]);}
          else {return centerScale(d[byVar]);}}
        ));
        
        
        
        // @v4 Reset the 'x' force to draw the bubbles to their year centers
       
        
        simulation.force('y', d3.forceY().strength(forceStrength).y(function(d){ 
          
          if (circleID == "Education"){
           if (d.Education =="0") {
             return h*.38;
           }
           else if (d.Education =="1") {
             return h*.36;
           }
           else if (d.Education =="2") {
             return h*.34;
           }
           else if (d.Education =="3") {
             return h*.32;
           }
           else if (d.Education =="4") {
             return h*.3;
           }
          }
           
           
        else if (circleID == "STEM"){
            
              if (d.STEM =="1" | d.STEM =="2") {
             return h*.3;
           }
           else {return h*.65;}
      
        }
          
        
      else if (circleID == "FieldNew"){
           if (d.FieldNew =="1") {
             return h*.2;
           }
           else if (d.FieldNew =="1") {
             return h*.2;
           }
           else if (d.FieldNew =="2") {
             return h*.2;
           }
           else if (d.FieldNew =="3") {
             return h*.2;
           }
           else if (d.FieldNew=="4") {
             return h*.2;
           }
           else if (d.FieldNew =="5") {
             return h*.2;
           }
           else if (d.FieldNew =="6") {
             return h*.2;
           }
           else if (d.FieldNew =="7") {
             return h*.55;
           }
           else if (d.FieldNew =="8") {
             return h*.55;
           }
           else if (d.FieldNew =="9") {
             return h*.55;
           }
           else if (d.FieldNew =="10") {
             return h*.55;
           }
           else {return h*.8;}
        
        }
          
          
        else if (circleID == "profession"){
           if (d.profession =="1") {
             return h*.3;
           }
           else if (d.profession =="2") {
             return h*.46;
           }
            else if (d.profession =="3") {
             return h*.3;
           }
            else if (d.profession =="4") {
             return h*.46;
           }
            else if (d.profession =="5") {
             return h*.3;
           }
            else if (d.profession =="6") {
             return h*.46;
           }
           else if (d.profession =="7") {
             return  h*.3;
           }
           else if (d.profession =="8") {
             return h*.46;
           }
           else if (d.profession =="9") {
             return h*.3;
           }
           else if (d.profession =="10") {
             return h*.46;
           }
           else if (d.profession=="0") {
              return h/2;
            }
           else if (d.profession=="11") {
              return h*.65;
            }
            else {return 0;}
            }
        
        else if (circleID == "professionExtra"){
           if (d.professionExtra =="1") {
             return h/3;
           }
           else if (d.professionExtra =="1"){return 0;}
           else {return 0;}
        }
        
        else if (circleID == "professionExtra2"){
           if (d.postsecondary =="1") {
             return h/10;
           }
           else if (d.postsecondary !="1"){return h/3;}
           else {return 0;}
        }
        
        else if (circleID == "professionExtra3"){
           if (d.professionExtra =="1") {
             return h/3;
           }
           else if (d.professionExtra =="1"){return 0;}
           else {return 0;}
        }
        
        else if (circleID == "engineering"){
           if (d.engineering =="1") {
             return h/10;
           }
           else if (d.engineering !="1"){return h/3;}
           else {return 0;}
        }
        
        else {
            
             return 375;
      
        }
          
    
        }));
        
        
        simulation.alpha(1).restart();
        }
       

        // @v4 We can reset the alpha value and restart the simulation
        
        
      } //splitbubbles end

      
    }

    function handleResize2() {

  // 1. update height of step elements
  var stepHeight2 = Math.floor(window.innerHeight * 0.75);
  step2.style('height', stepHeight2 + 'px');

  // 2. update width/height of graphic element
  var bodyWidth2 = d3.select('body').node().offsetWidth;

  graphic2.style('width', bodyWidth2 + 'px').style('height', window.innerHeight + 'px');

  var chartMargin2 = 32;
  var textWidth2 = text2.node().offsetWidth;
  var chartWidth2 = graphic2.node().offsetWidth - textWidth2 - chartMargin2;

  chart2.style('width', chartWidth2 + 'px').style('height', Math.floor(window.innerHeight2 / 2) + 'px');

  // 3. tell scrollama to update new element dimensions
  scroller2.resize();
}
// scrollama event handlers
function handleStepEnter2(response) {

  step2.classed('is-active', function (d, j) {
    return j === response.index;
  });

  // update graphic based on step
  chart2.select('p').text(response.index + 1);
  // var someData = d3.csv("<LINK TO DATA HERE>");
  // var otherData = d3.json("<LINK TO DATA HERE>");

  // Promise.all([someData, otherData).then(next);

  // // update graphic1 based on step 1
  if (step2._groups[0][0].className === 'step2 is-active') {
    svg2.selectAll('circle')
    .transition()
      .delay(300)
      .duration(350)

    }
      

  // // update graphic1 based on step 2
  if (step2._groups[0][1].className === 'step2 is-active') {

    svg2.selectAll('circle')

  }

  // // update graphic1 based on step 3
  if (step2._groups[0][2].className === 'step2 is-active') {
    svg2.selectAll('circle')


  }

  // Step 4
  if (step2._groups[0][3].className === 'step2 is-active') {

        svg2.selectAll('circle')
   
  }

  if (step2._groups[0][4].className === 'step2 is-active') {

        svg2.selectAll('circle')
      
  }

  if (step2._groups[0][5].className === 'step2 is-active') {

        svg2.selectAll('circle')
    //   .attr("fill", function(d) {
    //     if (d.proftext === "other") {
    //           return "#FFA538";
    //         }
    //       else if (d.degtext === "na") {
    //         return "#6063ED"
    //        }
    //       else {
    //         return "#888888"
    //        }
    // });
  }

  if (step2._groups[0][6].className === 'step2 is-active') {

        svg2.selectAll('circle')
    //   .attr("fill", function(d) {
    //     if (d.proftext === "other") {
    //           return "#FFA538";
    //         }
    //       else if (d.degtext === "na") {
    //         return "#6063ED"
    //        }
    //       else {
    //         return "#888888"
    //        }
    // });
  }

  if (step2._groups[0][7].className === 'step2 is-active') {

        svg2.selectAll('circle')
    //   .attr("fill", function(d) {
    //     if (d.proftext === "other") {
    //           return "#FFA538";
    //         }
    //       else if (d.degtext === "na") {
    //         return "#6063ED"
    //        }
    //       else {
    //         return "#888888"
    //        }
    // });
  }

   if (step2._groups[0][8].className === 'step2 is-active') {

        svg2.selectAll('circle')
    //   .attr("fill", function(d) {
    //     if (d.proftext === "other") {
    //           return "#FFA538";
    //         }
    //       else if (d.degtext === "na") {
    //         return "#6063ED"
    //        }
    //       else {
    //         return "#888888"
    //        }
    // });
  }



    // clustStart("simulation.alpha(1).restart();");
    // simulation
  //           .force('x', centerXForce)
  //           .force('y', centerYForce);

}

function handleContainerEnter2(response) {
  // response = { direction }

  // sticky the graphic (old school)
  graphic.classed('is-fixed', true);
  graphic.classed('is-bottom', false);
}

function handleContainerExit2(response) {
  // response = { direction }

  // un-sticky the graphic, and pin to top/bottom of container
  graphic.classed('is-fixed', false);
  graphic.classed('is-bottom', response.direction === 'down');
}

function init() {
  // 1. force a resize on load to ensure proper dimensions are sent to scrollama

  scroller2.setup({
    // container: '#flipped-scroll',
    // graphic: '.scroll__figure2',
    // text: '.scroll__text2',
    step: '.scroll__text2 .step2',
    offset: 0.75,
    debug: false
  }).onStepEnter(handleStepEnter2)
  // .OnStepExit(handleStepExit2)
  .onContainerEnter(handleContainerEnter2).onContainerExit(handleContainerExit2);
}

// kick things off
init();
}
