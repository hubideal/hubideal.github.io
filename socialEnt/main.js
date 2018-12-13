//----------------------
// See documentation at:
// http://www.jasondavies.com/wordcloud/about/
//----------------------
// See basic example at:
// https://github.com/jasondavies/d3-cloud/blob/master/examples/simple.html
//----------------------

// Get the content of data.csv
d3.csv("words10clusters0.csv", function(data) {
  
  data.forEach(function(d) {
    d.freq = +d.freq;
  });

  //sorts the array by the most repeated word
  jsu.sortBy(data, { prop: "freq", desc: true });
  var w = 1294, h = 712,
    maxFont = 76,
    maxSize = data[14].freq || 1,
    sizeOffset = maxFont / maxSize;

  var fill = d3.scale.category20b(),
    layout = d3.layout.cloud()
    .size([w, h])
    .words(data)
    .spiral("rectangular")
    .rotate(function () { return (~~(Math.random() * 2) * -30) || 60; })
    //.text(function (d) { return d.text; })
    .font("Impact")
    .fontSize(function (d) {
        return Math.max(10, Math.min(d.freq * sizeOffset, maxFont));
    })
    .on("end", onDraw);
  layout.start();

  //callback fired when all words have been placed
  function onDraw() {
      var svg = d3.select("#tag-cloud-wrapper").append("svg").attr({ width: w, height: h, "id": "svg-node" }),
          vis = svg.append("g").attr("transform", "translate(" + [w >> 1, (h >> 1) - 10] + ")scale(2)");
      var text = vis.selectAll("text").data(data);
      text.enter().append("text")
          .style("font-family", function (d) { return d.font; })
          .style("font-size", function (d) { return (d.freq/3) + "px"; })
          .style("fill", function (d, i) { return fill(i); })
          .style({ cursor: "pointer", opacity: 1e-6 })
          .attr("text-anchor", "middle")
          .attr("transform", function (d) {
              return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
          })
          .text(function (d) { return d.word; })
          .on("click", function (d) {
              //[this] is the <text> element of svg
              var show = !this.classList.contains("current");
              toogleFade.apply(this, [show, d]);
          })
          .transition()
              .duration(1000)
              .style("opacity", 1);
      vis.transition()
          .delay(450)
          .duration(750)
          .attr("transform", "translate(" + [w >> 1, (h >> 1) + 10] + ")scale(1)");
  }//end onDraw
  
  //determines wheter to show or hide the elements in svg
  function toogleFade(show, d) {
    var element = d3.select(this),
        svg = d3.select("#svg-node"),
        time1 = 700,
        time2 = 1000;
    show = !!show;
    element.attr({ "class": show ? "current" : null, "data-role": "animation" })
      .transition()
      .duration(time1)
      .attr("transform", "translate(" + [d.x, d.y] + ")rotate(" + (show ? 0 : d.rotate) + ")scale(" + (+!show || 3) + ")");
    //   .each("end", function() { 
    //     show && setTimeout(function() { 
    //       alert("tag: " + d.word);
    //     }, time2 - time1);
    //   });
    svg.selectAll("text:not([data-role='animation'])")
      .transition()
      .duration(time2)
      .style("opacity", +!show)
      .style("visibility", show ? "hidden" : "visible")
      .each("end", function() { element.attr("data-role", null); });
  }//end toogleFade
  
});
