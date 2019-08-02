import { Component } from '@angular/core';
import "snapsvg-cjs";
import { RESOURCE_CACHE_PROVIDER } from '@angular/platform-browser-dynamic';
declare var Snap: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
 
  ngOnInit() {
    this.createSvg();
  }
  // var routes = Snap("#routes")
  //Create svg
 createSvg() {
  var s = Snap("#components");
  var routes= Snap("#routes");
  var comp= Snap.select(".node-container");
  var comp2= Snap.select(".node-container2");
  comp2.drag();
  comp.drag();

  // var x = 20;
  // var y = 20;
  // var radius = 20;
  // var c1='red';
  // var c2='blue';
  // var c3='green';
  // var c4='yellow';
  // var c5='black';
    // for(var _i = 0; _i < 5; _i++){
    //   var component=s.circle(x, y, radius).attr({fill: 'c'+_i,'class':_i });
    //   // var text = s.text(70, 135, "Hello!");
    //   // text.attr({
    //   //     'font-size':100
    //   // });
    //   // component.attr({
    //   //     width: (text.node.clientWidth + 50)
    //   // });
    //   component.click( function(event){
    //     console.log('clicked element'+event.target.attributes.class.nodeValue)
    //     // var app=routes.circle(s.select('.'))
    //     // routes.append(app);
        
    // });
    //   x=x+60;
     
    
    // }
    // var circle1 = s.circle(linex1, liney1, radius);
    // var circle2 = s.circle(linex2, liney2, radius);
    // mySet.push( circle1 ,circle2);
  }
   
    // var routes = Snap("#routes")
    // var linex1 = 60;
    // var liney1 = 150;
    // var linex2 = 120;
    // var liney2 = 150;
    // var linex3 = 180
    // var linex4 = 150

    // var radius = 20;

    // var circle1 = s.circle(linex1, liney1, radius);
    // var circle2 = s.circle(linex2, liney2, radius);
    // // var file = Snap(circle1.node.cloneNode(true));
    // // s.append(file);
    // var line = s.line(linex3, liney1, linex4, liney2);
    // var dix;
    // var diy;
    // line.attr({
    //   stroke: "#000",
    //   strokeWidth: 10,
    //   strokeLinecap: "round"
    // });


    // var move1 = function (dx, dy) {
    //   dix = dx;
    //   diy = dy;
    //   this.attr({
    //     // transform: this.data('origTransform') + (this.data('origTransform') ? "T" : "t") + [dx, dy]
    //     cx: linex1 + dx,
    //     cy: liney1 + dy

    //   });


    // }
    // var move2 = function (dx, dy) {
    //   // dix=dx;
    //   // diy=dy;
    //   this.attr({
    //     // transform: this.data('origTransform') + (this.data('origTransform') ? "T" : "t") + [dx, dy]
    //     cx: linex2 + dx,
    //     cy: liney2 + dy

    //   });
    // }
    // var move3 = function (dx, dy) {
     
    //   this.attr({
    //     // transform: this.data('origTransform') + (this.data('origTransform') ? "T" : "t") + [dx, dy]
    //     cx: linex3 + dx,
    //     cy: liney1 + dy,
    //     dx: linex4 +dx,
    //     dy: liney2 + dy,


    //   });
    // }
    // var moveRoutes = function (dx, dy) {
    //   this.attr({
    //     // transform: this.data('origTransform') + (this.data('origTransform') ? "T" : "t") + [dx, dy]
    //     cx: linex1 + dx,
    //     cy: liney1 + dy

    //   });
    // }
    // var moveRoutes2 = function (dx, dy) {
    //   this.attr({
    //     // transform: this.data('origTransform') + (this.data('origTransform') ? "T" : "t") + [dx, dy]
    //     cx: linex2 + dx,
    //     cy: liney2 + dy

    //   });
    // }
    // var startRoutes = function () {

    // }
    // var stopRoutes = function () {
    //   linex1 = +this.attr('cx');
    //   liney1 = +this.attr('cy');
    // }
    // var stopRoutes2 = function () {
    //   linex2 = +this.attr('cx');
    //   liney2 = +this.attr('cy');
    // }

    // var start = function () {
    //   // this.data('origTransform', this.transform().local );
    // }
    // var stop2 = function () {
    //   this.attr({
    //     cx: linex2,
    //     cy: liney2
    //   })
    //   // linex2 = +line.attr('x2');
    //   // liney2 = +line.attr('y2');
    //   var circle4 = routes.circle(linex2, linex2, radius);
    //   circle4.drag(moveRoutes2, startRoutes, stopRoutes2);

    // }
    // var stop3 = function () {
    //   this.attr({
    //     cx: linex3,
    //     cy: liney1,
    //     dx:linex4,
    //     dy:liney2
    //   })
    //   var line = s.line(linex3, liney1, linex4, liney2);
    //   // linex2 = +line.attr('x2');
    //   // liney2 = +line.attr('y2');
    //   var circle4 = routes.line(linex3, liney1, linex4, liney2);
    //   circle4.drag(moveRoutes, startRoutes, stopRoutes);

    // }
    // var stop = function () {
    //   this.attr({
    //     cx: linex1,
    //     cy: liney1
    //   })
    //   var circle4 = routes.circle(linex1, liney1, radius);
    //   circle4.drag(moveRoutes, startRoutes, stopRoutes);

    // }

    // circle1.drag(move1, start, stop);
    // circle2.drag(move2, start, stop2);
    // line.drag()
    // circle1.snapTo(4,5,6);
    
  // }
}
