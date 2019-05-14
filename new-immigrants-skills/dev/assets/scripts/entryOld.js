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

var width = window.innerWidth,
    height = window.innerHeight;

//2
var container2 = d3.select('#scatter-scroll');
var graphic2 = container2.select('.scroll__figure2');
var chart2 = graphic2.select('.figure__chart2');
var text2 = container2.select('.scroll__text2');
var step2 = text2.selectAll('.step2');

// initialize the scrollama
var scroller2 = scrollama();

var simulation;



var svg2 = d3.select('.scroll__figure2')
		  .append("svg")
		  .attr("id", "svg2");


var skillData = d3.csv('assets/skillsDV.csv');

	Promise.all([skillData]).then(change);

	function change(data) {
	  var skillDV = data['0'];
	  var col = [...new Set(skillDV.map(d => d.col))];
	  var row = [...new Set(skillDV.map(d => d.row))];
	  var margin = {top: 20, right: 20, bottom: 20, left: 40};
	  // var widthDiv;
	  var rad;
	  var widthSplit;
	  var simulation;
	  

	  var commas = d3.format(",");

	  var margin = 10;
	  var marginTop = 100;
	  
	  var x = d3.scaleLinear()
    .domain([0, 28])
    .range([50, width-250]);

		var y = d3.scaleLinear()
    .domain([0, 28])
    .range([height-5, 50]);

	// var colScale = d3.scalePoint()
	// 	.range([margin*2, width/2])
	// 	.domain(col)
	// 	.padding(0.5);

	// var rowScale = d3.scalePoint()
	// 	.range([marginTop, height])
	// 	.domain(row)
	// 	.padding(0.5);
		
		
	// var xColForce = d3.forceX(d => colScale(d.col));
	// var yRowForce = d3.forceY(d => rowScale(d.row)); 
	
	// var chargeForce = d3.forceManyBody().strength(0);
	// var centerXForce = d3.forceX(d => splitScale(d.row));
	// var centerYForce = d3.forceY(height);
	// var forceCollide = d3.forceCollide()
		
	// simulation = d3.forceSimulation()
	//   .force('charge', chargeForce)
	//   .force('collide', forceCollide)
	//   .force('x', xColForce)
 //   .force('y', yRowForce);
    
 // simulation.force('x', xColForce);
 //   // simulation.alpha(5);
	  
	// simulation.force('y', yRowForce);
	// // simulation.alpha(7);


var points = svg2.selectAll("dot")
							.data(skillDV)

points
	.enter()
	.append("circle")
	.attr('r', 5)
  .attr('fill', "#6B7CF2")
  .attr("cx", function(d) { return x(d.col); })
  .attr("cy", function(d) { return y(d.row); });



    

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
			.delay(600)
			.duration(750)
			.attr("fill", function(d) {
				if (d.edtext == "noHS") {
			        return "#777777";
			      } else {
			        return "#2873ed";
			      }
		});
	}

	// // update graphic1 based on step 2
	if (step2._groups[0][1].className === 'step2 is-active') {

		svg2.selectAll('circle')
			.attr("fill", function(d) {
				if (d.degtext === "engineering") {
			      	return "#2873ed";
			      }
			     else {
			     	return "#87D8F7"
			     }
		});
	}

	// // update graphic1 based on step 3
	if (step2._groups[0][2].className === 'step2 is-active') {
		svg2.selectAll('circle')
			.attr("fill", function(d) {
				if (d.degtext === "business") {
			      	return "#ed2828";
			      }
			    else if (d.degtext === "na") {
			     	return "#6063ED"
			     }
			     else if (d.degtext === "other") {
			     	return "#F9C9B5"
			     }
			     else {
			     	return "#ffffff"
			     }
		});


	}

	// Step 4
	if (step2._groups[0][3].className === 'step2 is-active') {

        svg2.selectAll('circle')
			.attr("fill", function(d) {
				if (d.proftext === "other") {
			        return "#FFA538";
			      }
			    else if (d.degtext === "na") {
			     	return "#6063ED"
			     }
			    else {
			     	return "#888888"
			     }
		});
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






