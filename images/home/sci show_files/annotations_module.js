(function(g){var window=this;var Soa=function(a,b,c,d){var e=a||window.document;return g.Fk(e,b,function(a){var b=g.lf(a.target,function(a){return a===e||d(a)},!0);
b&&b!==e&&!b.disabled&&(a.currentTarget=b,c.call(b,a))})},i4=function(a,b,c,d){return Soa(a,b,c,function(a){return g.ih(a,d)})},j4=function(a,b){if(/^\d+px?$/.test(b))return(0,window.parseInt)(b,10);
var c=a.style.left,d=a.runtimeStyle.left;a.runtimeStyle.left=a.currentStyle.left;a.style.left=b;var e=a.style.pixelLeft;a.style.left=c;a.runtimeStyle.left=d;return+e},k4=function(a){var b=g.Yl(a.g).Ua(),b=new g.zf(0,0,b.width,b.height);
if(a.B.o&&!g.M1(a)){if(g.U(a.g).Ob){var c=g.m1(a)?69:48;b.top+=c;b.height-=c}a.A&&(b.height-=g.m1(a.A.A)?72:50)}return b},Toa=function(a,b,c,d){c=(0,g.z)(c,d||a.o);
b=i4(b,"change",c,"iv-card-poll-choice-input");a.g.push(b)},Uoa=function(a,b,c){c=(0,g.z)(c,a.o);
b=g.Hk(b,"mouseleave",c);a.g.push(b);return b},l4=function(a){var b={};
void 0!==a.g?b.trackingParams=a.g:(b.veType=a.A,null!=a.o&&(b.veCounter=a.o));return b},m4=function(a){a.Ra("cardstatechange",g.gm(a)&&g.hm(a)?1:0)},n4=function(a){if(window.document.createEvent){var b=window.document.createEvent("HTMLEvents");
b.initEvent("click",!0,!0);a.dispatchEvent(b)}else b=window.document.createEventObject(),a.fireEvent("onclick",b)},p4=function(a,b){if("none"==(a.currentStyle?a.currentStyle[b+"Style"]:null))return 0;
var c=a.currentStyle?a.currentStyle[b+"Width"]:null;return c in o4?o4[c]:j4(a,c)},q4=function(a,b){var c=a.currentStyle?a.currentStyle[b]:null;
return c?j4(a,c):0},Voa=function(a,b){var c=!1,d=a.subscribe("ROOT_MENU_REMOVED",function(a){c||(c=!0,this.ud(d),b.apply(void 0,arguments))},a)},r4=function(a,b){g.Vc.call(this);
this.yi=a;this.An=b;this[g.vc]=!1},s4=function(a,b){var c=":"+(g.nw.getInstance().g++).toString(36);
b.setAttribute("result",c);a.appendChild(b);return c},t4=function(a,b,c){var d=window.document.createElementNS("http://www.w3.org/2000/svg",a);
b&&g.Gb(b,function(a,b){d.setAttribute(b,a)});
for(var e=2;e<arguments.length;e++)d.appendChild(arguments[e]);return d},y4=function(a,b,c,d){r4.call(this,a,b);
a=this.An;b=this.na();c?(b.setAttribute("stroke",c.g),b.setAttribute("stroke-opacity",c.o),c=c.ub(),g.y(c)&&-1!=c.indexOf("px")?b.setAttribute("stroke-width",(0,window.parseFloat)(c)/Woa(a)):b.setAttribute("stroke-width",c)):b.setAttribute("stroke","none");this.fill=d;c=this.An;a=this.na();if(d instanceof u4)a.setAttribute("fill",d.H),a.setAttribute("fill-opacity",d.J);else if(d instanceof v4){b="lg-"+d.C+"-"+d.F+"-"+d.D+"-"+d.G+"-"+d.g+"-"+d.o;var e=b in c.o?c.o[b]:null;if(!e){var e=w4(c,"linearGradient",
{x1:d.C,y1:d.F,x2:d.D,y2:d.G,gradientUnits:"userSpaceOnUse"}),f="stop-color:"+d.g;g.qa(d.A)&&(f+=";stop-opacity:"+d.A);f=w4(c,"stop",{offset:"0%",style:f});e.appendChild(f);f="stop-color:"+d.o;g.qa(d.B)&&(f+=";stop-opacity:"+d.B);d=w4(c,"stop",{offset:"100%",style:f});e.appendChild(d);e=x4(c,b,e)}a.setAttribute("fill","url(#"+e+")")}else a.setAttribute("fill","none")},Xoa=function(a,b){return b},Yoa=function(a,b){var c=s4(a,t4("feOffset",{"in":b,
dx:"-7",dy:"-7"})),c=s4(a,t4("feGaussianBlur",{"in":c,stdDeviation:"3"})),c=s4(a,t4("feColorMatrix",{"in":c,type:"matrix",values:"0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.5 0"})),d=s4(a,t4("feColorMatrix",{"in":b,type:"matrix",values:"0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 100 0"})),d=s4(a,t4("feGaussianBlur",{"in":d,stdDeviation:"1"})),c=s4(a,t4("feComposite",{operator:"out","in":c,in2:d}));return s4(a,t4("feComposite",{operator:"over","in":b,in2:c}))},Zoa=function(a,b){var c=s4(a,t4("feGaussianBlur",
{"in":b,
stdDeviation:"1.8"})),c=s4(a,t4("feDiffuseLighting",{"in":c,surfaceScale:"4",diffuseConstant:"1"},t4("feDistantLight",{azimuth:"270",elevation:"15","lighting-color":"white"}))),c=s4(a,t4("feComposite",{"in":c,in2:b,operator:"in"}));return s4(a,t4("feComposite",{in2:c,"in":b,operator:"arithmetic",k2:1,k3:.5,k4:0}))},z4=function(a,b,c,d){y4.call(this,a,b,c,d)},A4=function(a,b){r4.call(this,a,b)},B4=function(){},D4=function(){C4||(C4=new g.Gd(400),C4.start());
return C4},apa=function(a){var b=[];
$oa(a,function(a,d){switch(a){case 0:b.push("M");Array.prototype.push.apply(b,d);break;case 1:b.push("L");Array.prototype.push.apply(b,d);break;case 2:b.push("C");Array.prototype.push.apply(b,d);break;case 3:var c=d[3];b.push("A",d[0],d[1],0,180<Math.abs(c)?1:0,0<c?1:0,d[4],d[5]);break;case 4:b.push("Z")}});
return b.join(" ")},E4=function(a,b,c,d){y4.call(this,a,b,c,d)},F4=function(a,b){r4.call(this,a,b)},G4=function(a,b,c,d,e){g.ow.call(this,e);
this.width=a;this.height=b;this.A=c||null;this.O=d||null},Woa=function(a){var b=a.Yg();
return b?b.width/(a.A?new g.ve(a.A,a.O):a.Yg()).width:0},u4=function(a,b){this.H=a;
this.J=null==b?1:b},v4=function(a,b,c,d,e,f,k,l){this.C=a;
this.F=b;this.D=c;this.G=d;this.g=e;this.o=f;this.A=g.p(k)?k:null;this.B=g.p(l)?l:null},H4=function(a,b,c){var d=(c="xy"==c||"yy"==c)?360:640;
return(d+((c?a.height:a.width)-d)*b)/d},I4=function(a,b,c){var d=(c="xx"==c||"xy"==c)?640:360;
return(d+((c?a.width:a.height)-d)*b)/d},J4=function(a){a=a.replace(/^(https?:)?\/\//,"");
a=a.split("/",1);return!a||1>a.length||!a[0]?[]:a[0].toLowerCase().split(".").reverse()},bpa=function(a){return(new g.od(function(b){try{var c={gapiHintOverride:a.gapiHintOverride,
_c:{jsl:{h:a.gapiHintParams}},callback:b},d=g.ra(c)?{callback:c}:c||{};d._c&&d._c.jsl&&d._c.jsl.h||g.ac(d,{_c:{jsl:{h:g.ah("GAPI_HINT_PARAMS",void 0)}}});if(d.gapiHintOverride||g.ah("GAPI_HINT_OVERRIDE")){var e=g.Kh(window.document.location.href).gapi_jsh;e&&g.ac(d,{_c:{jsl:{h:e}}})}g.hu("client",d)}catch(f){g.fh(f)}})).then(function(){})},cpa=function(a){var b={};
a.analyticsChannelData&&(b.analyticsDatas=(0,g.Q)(a.analyticsChannelData,function(a){return{tabName:a.tabName,cardName:a.cardName,isChannelScreen:a.isChannelScreen,insightId:a.insightId,externalChannelId:a.externalChannelId,externalContentOwnerId:a.externalContentOwnerId}}));
return{playbackData:{clientPlaybackNonce:a.clientPlaybackNonce},analyticsChannelData:b,externalLinkData:a.externalLinkData}},dpa=function(a){var b=t4("filter",{filterUnits:"userSpaceOnUse"}),c="SourceGraphic";
(0,g.F)(a,function(a){a:{switch(a){case "bevel":a=Zoa;break a;case "dropshadow":a=Yoa;break a}a=Xoa}c=a(b,c)});
return b},K4=function(a,b,c,d,e){G4.call(this,a,b,c,d,e);
this.o={};this.N=g.qc&&!g.oc(526);this.J=new g.Fv(this)},w4=function(a,b,c){a=a.H.g.createElementNS("http://www.w3.org/2000/svg",b);
c&&L4(a,c);return a},L4=function(a,b){for(var c in b)a.setAttribute(c,b[c])},M4=function(a,b,c,d){b=w4(a,"path",{d:apa(b)});
c=new E4(b,a,c,d);a.C.na().appendChild(c.na())},x4=function(a,b,c){if(b in a.o)return a.o[b];
var d="_svgdef_"+epa++;c.setAttribute("id",d);a.o[b]=d;a.G.appendChild(c);return d},N4=function(){this.Aa=[];
this.Ia=[];this.Md=[]},O4=function(a,b,c){0==g.Va(a.Aa)?a.Md.length-=2:(a.Aa.push(0),a.Ia.push(1));
a.Md.push(b,c);a.pd=a.Ce=[b,c]},P4=function(a,b,c,d){var e=a.pd[0]-b*Math.cos(d*Math.PI/180)+b*Math.cos((d+90)*Math.PI/180),f=a.pd[1]-c*Math.sin(d*Math.PI/180)+c*Math.sin((d+90)*Math.PI/180);
a.Aa.push(3);a.Ia.push(1);a.Md.push(b,c,d,90,e,f);a.cj=!1;a.pd=[e,f]},$oa=function(a,b){for(var c=a.Md,d=0,e=0,f=a.Aa.length;e<f;e++){var k=a.Aa[e],l=fpa[k]*a.Ia[e];
b(k,c.slice(d,d+l));d+=l}},Q4=function(a,b,c,d,e,f,k,l,m,n,q){this.x=a;
this.y=b;this.hj=c;this.A=d;this.t=e;this.H=f;this.C=k;this.D=l;this.B=m;this.o=n;this.g=q},T4=function(a,b){var c=R4(b,S4(a,new g.zf(a.x,a.y,a.hj,a.A),b.g)),d=b.g,e=c.clone();
d&&!d.contains(c)&&(c.width<d.width?e.left=g.oe(c.left,d.left,d.left+d.width-c.width):(e.left=d.left,e.width=d.width),c.height<d.height?e.top=g.oe(c.top,d.top,d.top+d.height-c.height):(e.top=d.top,e.height=d.height));return e},S4=function(a,b,c){var d=a.C,e=a.D,f=a.g?a.g:"xy",k=I4(c,a.B,f);
a=H4(c,a.o,f);var f=640*b.width*k/100,l=360*b.height*a/100;return new g.zf(0==d?640*b.left*k/100:0<d?d:c.width+d-f,0==e?360*b.top*a/100:0<e?e:c.height+e-l,f,l)},gpa=function(a,b,c,d){this.value=a;
this.target=b;this.showLinkIcon=c;this.g=d},U4=function(a){return a.value?a.value:null},hpa=function(a){if(null==a)return 0;
if("never"==a)return-1;a=a.split(":");if(3<a.length)return 0;var b=0,c=1;(0,g.F)(a,function(a){a=(0,window.parseFloat)(a);0>a&&(c=-c);b=60*b+Math.abs(a)});
return c*b},V4=function(a,b){return g.y(a)?(0,window.parseFloat)(a):b},W4=function(a,b){return"true"==a||"false"==a?"true"==a:b},X4=function(a,b,c){for(var d in b)if(b[d]==a)return a;
return c},Y4=function(a){return g.y(a)?a:""},$4=function(a){this.g=a||g.fq();
Z4||(Z4=bpa(this.g))},ipa=function(a,b,c,d){var e={path:"/youtubei/"+a.g.innertubeApiVersion+"/"+b,
headers:{"X-Goog-Visitor-Id":g.ah("VISITOR_DATA")},method:"POST",body:g.uf(c)},f=(0,g.z)(a.B,a);Z4.then(function(){f();g.u("gapi.client.request")(e).execute(d||g.w)})},a5=function(a,b,c){b.eventTimeMs=Math.round((0,g.xl)());
b.lactMs=g.Rk();c&&(b.clientData=cpa(c));g.Kq({endpoint:"log_interaction",Jv:b},a)},jpa=function(a){return g.Xa(a,function(a){return"dropshadow"==a})?new g.yf(0,7,7,0):new g.yf(0,0,0,0)},kpa=function(a){a=(0,g.Ye)(a,function(a){return a in b5});
g.wb(a,function(a,c){return b5[a]-b5[c]});
return a},c5=function(a,b,c){this.A=a;
this.g=b;this.o=null==c?1:c},d5=function(a,b,c){this.id=a;
this.timestamp=b.timestamp||0;this.type=b.card_type;this.teaserText=b.teaser_text;this.teaserDurationMs=b.teaser_duration_ms;this.startMs=b.start_ms;this.autoOpen=b.auto_open||!1;this.hd=b.session_data||{};this.Mb=c;this.sponsored=b.sponsored||!1;a=b.tracking||{};this.o={PE:a.impression,click:a.click,close:a.close,CK:a.teaser_impression,Zo:a.teaser_click};b=b.tracking_params||{};this.C=new g.bq(b.card);this.F=new g.bq(b.teaser);this.D=new g.bq(b.icon)},lpa=function(a,b,c,d,e,f,k,l){this.C=a;
this.F=b;this.D=c;this.G=d;this.g=e;this.o=f;this.A=k;this.B=l},e5=function(a,b,c,d,e,f,k,l,m,n,q,t,v){Q4.call(this,a,b,c,d,e,l,m,n,q,t,v);
this.F=f;this.G=k},f5=function(a,b){if(!a)return null;
var c=V4(a.x,0),d=V4(a.y,0),e=V4(a.w,0),f=V4(a.h,0),k=hpa(a.t),l=V4(a.scaleSlope,1);return b(c,d,e,f,k,V4(a.d,0),V4(a.px,0),V4(a.py,0),V4(a.scaleSlopeX,l),V4(a.scaleSlopeY,l),X4(a.scaleDimension,mpa,"xy"))},npa=function(a,b,c){c=c.replace(/\/(u|b)\/[0-9]+/g,"");
var d=/^[0-9]+$/;a&&d.test(a)&&(c="/b/"+a+c);b&&d.test(b)&&(c="/u/"+b+c);return c},g5=function(a){var b;
(b=a)&&!(b=1<a.length?"/"==a.charAt(0)&&"/"!=a.charAt(1):"/"==a)&&(b=J4(a),b="com"==b[0]&&"youtube"==b[1]||"be"==b[0]&&"youtu"==b[1]);return b?-1==a.indexOf("/redirect?"):!1},h5=function(a){if(!a)return null;
var b=Y4(a.value);if(!b)return null;var c=X4(a.target,opa,"current");return null==c?null:new gpa(b,c,W4(a.show_link_icon,!0),null!=a.pause_on_navigation?a.pause_on_navigation:!0)},i5=function(a,b,c,d,e){a=(0,window.parseFloat)(a);
if(null!=a&&!(0,window.isNaN)(a)){if(d)return g.oe(a,b,c);if(a>=b&&a<=c)return a}return e},j5=function(a,b){if(null==a)return b;
var c=(0,window.parseInt)(a,0);if((0,window.isNaN)(c))return b;c=c.toString(16);return"#"+"000000".substring(0,6-c.length)+c},k5=function(a,b){g.cc.call(this,a);
this.x=b.o[0];this.y=b.o[1];this.z=b.o[2];this.duration=b.duration;this.progress=b.progress;this.fps=b.F;this.state=b.g},l5=function(a){a=g.ua(a);
delete g.aw[a];g.Tb(g.aw)&&g.Zv&&g.Zv.stop()},m5=function(){return g.zm("enable_youtubei_innertube")?g.Rq:$4},n5=function(a){return new g.zf(a.left,a.top,a.right-a.left,a.bottom-a.top)},ppa=function(a,b){var c=a.top-b.y,d=b.x-a.left-a.width,e=b.y-a.top-a.height,f=a.left-b.x,k=Math.max(c,d,e,f);
if(0>k)return"i";switch(k){case c:return"t";case d:return"r";case e:return"b";case f:return"l"}return"i"},o5=function(a,b,c){if(c.length&&(b=g.De("g",void 0,b),b.length)){var d=kpa(c);
if(d){c="effects:"+(d?d.join("|"):"");var e=c in a.o?a.o[c]:null;e?a=e:(d=dpa(d),a=0<d.childNodes.length?x4(a,c,d):null)}else a=null;a&&b[0].setAttribute("filter","url(#"+a+")")}},p5=function(a,b){var c=g.Af(a);
c.expand(jpa(b));return n5(c)},q5=function(a,b,c,d){var e=a.G;
e?a=new v4(e.C*b/100,e.F*c/100,e.D*b/100,e.G*c/100,e.g,e.o,e.A,e.B):(b=a.o,a=new u4(a.bgColor,d?Math.max(b,.9):b));return a},r5=function(a,b,c){var d=new N4;
O4(d,a.left+b+c,a.top+c);d.dc(a.left+a.width-b-c,a.top+c);P4(d,b,b,-90);d.dc(a.left+a.width-c,a.top+a.height-b-c);P4(d,b,b,0);d.dc(a.left+b+c,a.top+a.height-c);P4(d,b,b,90);d.dc(a.left+c,a.top+b+c);P4(d,b,b,180);d.close();return d},s5=function(){this.g=!1;
this.C=this.o=null},t5=function(a,b,c){a.o?(a.o.setSize(b,c),a.o.clear()):(b=new K4(b,c,void 0,void 0,void 0),a.o=b,a.o.Ak(),a.C=g.M("DIV"),b=a.o.na(),a.C.appendChild(b));
return a.o},u5=function(a,b){this.start=a<b?a:b;
this.end=a<b?b:a},v5=function(a,b){var c="ivTriggerCondition:"+a;
return b?c+":"+b:c},qpa=function(a){this.merchant=g.D(a.merchant);
this.price=g.D(a.price)},w5=function(a,b,c){d5.call(this,a,b,c);
this.imageUrl=b.image_url;this.displayDomain=b.display_domain;this.showLinkIcon=b.show_link_icon;this.g=b.button_icon_url;this.title=b.title;this.customMessage=b.custom_message;this.url=h5({pause_on_navigation:b.pause_on_navigation,target:b.target||"new",value:b.url});this.A=null;b.signin_url&&(this.A=h5({target:"current",value:b.signin_url}));this.H=b.signin_title||null;this.G=b.signin_message||null},rpa=function(a,b){this.state=a;
this.g=b},spa=function(a,b,c,d){this.type=a;
this.o=b;this.g=c;this.A=d},x5=function(a){return a.o&&a.o.length?a.o[0]:a.g&&a.g.length?a.g[0]:a.A&&a.A.length?a.A[0]:null},tpa=function(a,b,c,d,e,f,k,l,m,n,q,t,v,x){this.B=a;
this.bgColor=b;this.D=c;this.g=d;this.o=e;this.H=f;this.C=k;this.textAlign=l;this.textSize=m;this.F=n;this.padding=q;this.effects=t;this.A=v;this.G=x},upa=function(a){if(!a)return null;
var b=V4(a.sx,0),c=V4(a.sy,0);return f5(a,function(a,e,f,k,l,m,n,q,t,v,x){return new e5(a,e,f,k,l,b,c,m,n,q,t,v,x)})},y5=function(a){return a?f5(a,function(a,c,d,e,f,k,l,m,n,q,t){return new Q4(a,c,d,e,f,k,l,m,n,q,t)}):null},z5=function(a,b){return b?b:g5(a)?"current":"new"},A5=function(a,b,c,d){(a=U4(a))?g5(a)?d=g.Nh(a,{feature:"iv",
src_vid:c,annotation_id:b}):(a?(b=J4(a),b="com"==b[0]&&"google"==b[1]&&"plus"==b[2]):b=!1,b&&d?(d=g.va(npa,d.pageId,d.oc),a=new g.jg(a),g.ng(a,d(a.A)),d=a.toString()):d=a):d=null;return d},vpa=function(a){function b(a){return(0,g.Ye)(a.split(/ +/),function(a){return""!=a})}
return null==a?[]:b(a)},wpa=function(a){function b(a){return null!=a&&!(0,window.isNaN)(a)}
return(a=a?new g.yf((0,window.parseFloat)(a.top),(0,window.parseFloat)(a.right),(0,window.parseFloat)(a.bottom),(0,window.parseFloat)(a.left)):null)&&b(a.top)&&b(a.right)&&b(a.bottom)&&b(a.left)?a:null},B5=function(a,b){if(null==a)return null;
if(g.oa(a)){var c=[];(0,g.F)(a,function(a){(a=b(a))&&c.push(a)});
return c}var d=b(a);return d?[d]:[]},C5=function(a){var b=/.+/;
return g.y(a)&&null!=b&&null!=a&&a.match(b)?a:""},D5=function(a){return g.na(a)&&a.length?a[0]:a},E5=function(a,b,c,d){g.bw.call(this);
if(!g.na(a)||!g.na(b))throw Error("Start and end parameters must be arrays");if(a.length!=b.length)throw Error("Start and end points must be the same length");this.A=a;this.G=b;this.duration=c;this.D=d;this.o=[];this.progress=this.F=0;this.C=null},G5=function(a,b){b<a.startTime&&(a.endTime=b+a.endTime-a.startTime,a.startTime=b);
a.progress=(b-a.startTime)/(a.endTime-a.startTime);1<a.progress&&(a.progress=1);a.F=1E3/(b-a.C);a.C=b;F5(a,a.progress);1==a.progress?(a.g=0,l5(a),a.gd(),a.Ri()):a.ib()&&a.wo()},F5=function(a,b){g.ra(a.D)&&(b=a.D(b));
a.o=Array(a.A.length);for(var c=0;c<a.A.length;c++)a.o[c]=(a.G[c]-a.A[c])*b+a.A[c]},H5=function(a){a5(m5(),{click:{csn:g.Zq()||"",
visualElement:l4(a)}},void 0)},I5=function(a){return"rtl"==g.Zj(a,"direction")},J5=function(){s5.call(this);
this.B=0},K5=function(a,b,c){this.g={};
this.o=!1;this.C="ivTrigger:"+a;this.A=c;xpa(b,function(a,b){var c=v5(b.state,b.g);this.A.subscribe(c,(0,g.z)(this.B,this,c,a));this.g[c]=a},this)},L5=function(a,b,c,d,e){E5.call(this,b,c,d,e);
this.element=a},M5=function(a,b,c){d5.call(this,a,b,c);
this.J=b.image_url;this.B=b.badge_symbol||"";this.priceText=b.price_text||"";this.title=b.title;this.g=b.meta_info;this.G=!!b.is_paygated;this.H=!!b.user_has_entitlement;this.url=h5({target:b.target||"new",value:b.url})},N5=function(a,b,c){d5.call(this,a,b,c);
this.G=b.image_url;this.videoDuration=b.video_duration||null;this.customMessage=b.custom_message;this.title=b.title;this.g=b.meta_info;this.B=!!b.is_live_now;this.url=h5({pause_on_navigation:b.pause_on_navigation,target:b.target||"new",value:b.url})},O5=function(a,b,c){w5.call(this,a,b,c);
this.J=b.ypc_item_type;this.B=b.ypc_item_id;this.L=b.ypc_flow_type},P5=function(a,b,c){w5.call(this,a,b,c);
this.offers=[];a=b.offers||[];for(b=0;b<a.length;b++)this.offers.push(new qpa(a[b]))},Q5=function(a,b,c){d5.call(this,a,b,c);
this.B=this.id.replace(/[^a-z0-9-]/gi,"-");this.title=b.title;this.choices=b.choices;this.g=b.hasOwnProperty("old_vote")?b.old_vote:null;this.A=null;b.signin_url&&(this.A=h5({target:"current",value:b.signin_url}));this.G=b.hasOwnProperty("xsrf_token")?b.xsrf_token:null},R5=function(a,b,c){d5.call(this,a,b,c);
this.B=b.image_url;this.playlistVideoCount=b.playlist_video_count;this.customMessage=b.custom_message;this.title=b.title;this.g=b.meta_info;this.url=h5({pause_on_navigation:b.pause_on_navigation,target:b.target||"new",value:b.url})},S5=function(a,b){return g.y3&&a.dataset?b in a.dataset?a.dataset[b]:null:a.getAttribute("data-"+String(b).replace(/([A-Z])/g,"-$1").toLowerCase())},T5=function(a,b,c){w5.call(this,a,b,c);
this.J=b.ypc_flow_type;this.B=b.innertube_request_params},U5=function(a,b,c){d5.call(this,a,b,c);
this.channelId=b.channel_id;this.customMessage=b.custom_message;this.profileImageUrl=b.image_url;this.title=b.title;this.g=b.meta_info;this.url=h5({pause_on_navigation:b.pause_on_navigation,target:b.target||"new",value:b.url})},ypa=function(a,b,c,d){this.g=a||[];
this.A=b||[];this.B=c;this.o=d;this.value=!1},xpa=function(a,b,c){(0,g.F)(a.g,g.va(b,!1),c);
(0,g.F)(a.A,g.va(b,!0),c)},V5=function(a){if(!a)return null;
var b=X4(a.state,zpa);a=C5(a.ref);return b?new rpa(b,a):null},Apa=function(a,b){this.o=a;
this.g=b},Cpa=function(a){if(!a)return null;
var b=X4(a.type,Bpa,"rect"),c=B5(a.rectRegion,y5),d=B5(a.anchoredRegion,upa);a=B5(a.shapelessRegion,y5);return new spa(b,c,d,a)},W5=function(a){if(!a)return null;
var b=j5(a.fgColor,"#1A1A1A"),c=j5(a.bgColor,"#FFF"),d=j5(a.borderColor,"#000"),e=i5(a.borderWidth,0,5,!1,0),f=i5(a.bgAlpha,0,1,!1,.8),k=j5(a.highlightFontColor,"#F2F2F2"),l=i5(a.highlightWidth,0,5,!1,3),m=Y4(a.textAlign),n=i5(a.textSize,3.3,30.1,!0,3.6107),q=Y4(a.fontWeight),t=wpa(a.padding),v=vpa(a.effects),x=i5(a.cornerRadius,0,10,!0,0);if(a=D5(a.gradient)){var A=i5(a.x1,0,100,!0,0),G=i5(a.y1,0,100,!0,0),I=i5(a.x2,0,100,!0,100),K=i5(a.y2,0,100,!0,100),$a=j5(a.color1,"#FFF"),sb=j5(a.color2,"#000");
a=new lpa(A,G,I,K,$a,sb,i5(a.opacity1,0,100,!0,100),i5(a.opacity2,0,100,!0,0))}else a=null;return new tpa(b,c,d,e,f,k,l,m,n,q,t,v,x,a)},Dpa=function(a,b,c){this.type=a;
this.trigger=b;this.url=c},X5=function(a,b){this.oa=a;
this.context=b;this.pp=!1;this.N=0},Y5=function(a,b,c,d,e,f){b=new g.Am(b,c,{id:d});
b.namespace="annotations_module";e&&(b.g||(b.g=new g.Ff)).subscribe("onEnter",e,a);f&&(b.g||(b.g=new g.Ff)).subscribe("onExit",f,a);g.nm(a.context.o,[b])},Epa=function(a){return(0,g.E)()-a.N},Fpa=function(a,b,c,d,e,f,k,l){var m=(0,g.z)(function(){l&&this.context.o.kd();
g.iv(b,"current"==c?"_top":void 0,d)},a);
"new"==c&&(m(),m=null);var n={};n.interval=Epa(a);Z5(a.context.logger,e,m,n,f,k);g5(b)||(a=d.itct)&&H5(new g.bq(a))},$5=function(a){var b=g.Zq()||"",c=m5();
a=(0,g.Q)(a,function(a){return l4(a)});
a5(c,{visibilityUpdate:{csn:b,visualElements:a}})},Jpa=function(a){var b=g.Zj(a,"fontSize"),c;
c=(c=b.match(Gpa))&&c[0]||null;if(b&&"px"==c)return(0,window.parseInt)(b,10);if(g.Ke){if(String(c)in Hpa)return j4(a,b);if(a.parentNode&&1==a.parentNode.nodeType&&String(c)in Ipa)return a=a.parentNode,c=g.Zj(a,"fontSize"),j4(a,b==c?"1em":b)}c=g.M("SPAN",{style:"visibility:hidden;position:absolute;line-height:0;padding:0;margin:0;border:0;height:1em;"});a.appendChild(c);b=c.offsetHeight;g.We(c);return b},Lpa=function(a,b){Kpa(a,function(c){return new K5(a.id,c,b)})},a6=function(a,b){return b?new g.zf(a.x+
b.left,a.y+b.top,b.width,b.height):null},b6=function(){J5.call(this)},c6=function(){s5.call(this)},d6=function(){s5.call(this)},e6=function(a,b,c){X5.call(this,a,b);
this.annotation=c;this.isActive=!1},f6=function(a,b,c,d,e){if(2!=b.length||2!=c.length)throw Error("Start and end points must be 2D");
L5.apply(this,arguments)},g6=function(a,b,c){this.g=a;
this.A=b;this.C=c;this.B=new g.Jt(null)},Mpa=function(a,b){var c=["ul",
"",{role:"radiogroup"}];(0,g.F)(b.choices,function(a){c.push(["li",b.B+"-"+a.index.toString(),["label","",["input","iv-card-poll-choice-input",{type:"checkbox",role:"radio",name:b.B+a.index.toString(),value:a.index.toString(),"data-poll-choice-index":a.index.toString()}],["span","iv-card-poll-choice-text",["span","iv-card-poll-choice-percent"],h6(this,"span",void 0,a.desc)]],["div","iv-card-poll-result",["div","iv-card-poll-result-bar"]]])},a);
var d={};b.A&&(d["aria-label"]=g.P("YTP_DRAWER_POLL_TITLE_ARIA_LABEL",{POLL_TITLE:b.title}));var e=["iv-card","iv-card-poll"],d=[["div","iv-card-content",h6(a,"h2",d,b.title),["form","",["fieldset","",c]]]];b.A&&(e.push("iv-card-unavailable"),d.push(["div",["iv-card-sign-in"],["h2","",g.P("YTP_DRAWER_POLL_SIGNIN_TITLE")],["a",["iv-card-sign-in-button","iv-button"],{href:U4(b.A)},["span",["iv-button-content"],g.P("YTP_SIGN_IN")]]]));e=new g.V(["div",e].concat(d));d=e.element;i6(b,d);Toa(a.g.g,d,g.va(a.F,
b),a);(0,g.F)(g.Ee("iv-card-poll-choice-input",d),function(a){this.g.g.S(a,"focus",g.va(this.o,!0));this.g.g.S(a,"blur",g.va(this.o,!1))},a);
b.A&&a.A(g.L("iv-card-sign-in-button",d),b.A,b.id,b.hd,b.Mb,b.o.click,5);return e},n6=function(a,b,c,d){var e=j6(a,b.url,b.id),f=b.displayDomain?["div",
"iv-card-image-text",b.displayDomain]:"",k=k6(a,b),l=["iv-card"];b.A&&l.push("iv-card-unavailable");e=["div",l,["a","iv-click-target",{href:e},l6(b.imageUrl,f),["div","iv-card-content",h6(a,"h2",void 0,b.title),k]]];b.A&&(e=e.concat([["div",["iv-card-sign-in"],h6(a,"h2",void 0,b.H||""),["p","",b.G],["a",["iv-card-sign-in-button","iv-button"],{href:U4(b.A)},h6(a,"span","iv-button-content",g.P("YTP_SIGN_IN"))]]]));e=new g.V(e);m6(a,e,b,c,d);return e},p6=function(a,b,c){var d=j6(a,b.url,b.id),e=["yt-badge",
"standalone-ypc-badge-renderer-icon",b.H?"standalone-ypc-badge-renderer-icon-purchased":"standalone-ypc-badge-renderer-icon-available"],f={},e=b.G&&b.B?["span",e,f,b.B]:"";c=["div",["iv-card",c],["a","iv-click-target",{href:d},l6(b.J,e?["div","iv-card-image-text",e,b.priceText]:""),["div","iv-card-content",["h2","iv-card-primary-link",b.title],o6(a,b)]]];c=new g.V(c);m6(a,c,b);return c},q6=function(a,b){return b.customMessage?h6(a,"div","iv-card-message",b.customMessage):""},l6=function(a,b){var c=
["div",
"iv-card-image",{style:"background-image: url("+a+");"}];b&&c.push(b);return c},o6=function(a,b){if(!b.g||0==b.g.length)return"";
var c=["ul","iv-card-meta-info"];(0,g.F)(b.g,function(a){c.push(h6(this,"li","",a))},a);
return c},h6=function(a,b,c,d){c?g.y(c)?c={"class":c}:g.na(c)&&(c={"class":c.join(" ")}):c={};
c.dir=g.Kt(a.B,d);return[b,c,d]},k6=function(a,b){if(!b.customMessage)return"";
var c=["iv-card-action","iv-card-primary-link"],d={};b.g&&(c.push("iv-card-action-icon"),d.style="background-image: url("+b.g+");");d.dir=g.Kt(a.B,b.customMessage);c=["div",c,d,["span","",b.customMessage]];b.showLinkIcon&&(c.push("\u00a0"),c.push(["span","iv-card-link-icon"]));return c},i6=function(a,b){var c=0;
(0,g.F)(a.choices,function(a){c+=a.count});
for(var c=c||1,d=0;d<a.choices.length;d++){var e=a.choices[d],f=g.L(a.B+"-"+e.index.toString(),b),e=e.count/c;null==a.g&&(e=0);g.O(f.getElementsByTagName("label")[0],"iv-card-poll-choice-checked",a.g==d);f.getElementsByTagName("input")[0].checked=a.g==d;g.ef(g.L("iv-card-poll-choice-percent",f),g.P("YTP_DRAWER_POLL_PERCENT",{PERCENT:Math.floor(100*e).toFixed(0)}));g.Vj(g.L("iv-card-poll-result-bar",f),"transform","scaleX("+e.toFixed(2)+")")}g.O(b,"iv-card-poll-voted",null!=a.g);g.O(b,"iv-card-poll-expanded",
null!=a.g&&1<a.choices.length)},r6=function(a,b,c,d){d?(c&&a.g.videoData.o||a.g.o.kd(),a.g.o.isFullscreen()&&g.$l(a.g.o),Z5(a.g.logger,b.Mb,d,void 0,b.o.click,5)):b.url&&a.C(b.url,b.id,b.hd,b.Mb,b.o.click||[],5)},j6=function(a,b,c){return b?A5(b,c,a.g.videoData.videoId,a.g.C):null},m6=function(a,b,c,d,e){c.A&&s6(a,g.Ee("iv-card-sign-in-button",b.element),c,c.A,e);
c.url&&s6(a,g.Ee("iv-click-target",b.element),c,c.url,d)},s6=function(a,b,c,d,e){(0,g.F)(b,function(a){if(e){var b=(0,g.z)(function(a){a.stopPropagation();
a.preventDefault();e();return!1},this);
this.g.g.S(a,"click",b)}else d&&this.A(a,d,c.id,c.hd,c.Mb,c.o.click,5)},a)},t6=function(a,b,c,d,e,f,k,l,m,n,q,t,v,x,A){this.id=a;
this.author=b;this.type=c;this.style=d;this.B=e;this.o=f;this.A=k||[];this.F=l||[];this.g=m;this.D=n;this.C=q;this.htmlBlob=v;this.data=x;this.Mb=A},u6=function(a){return(a=Npa(a,function(a){return"openUrl"==a.type&&null!=a.url}))?a.url:null},w6=function(a){return v6(a,function(a){return"click"==a.trigger})},v6=function(a,b){return(0,g.xh)(a.A,b,void 0)},Opa=function(a,b,c){(0,g.F)(a.A,b,c)},Npa=function(a,b){return g.Xa(a.A,b,void 0)},Ppa=function(a,b,c){(0,g.F)(a.F,b,c)},Kpa=function(a,b){(0,g.Q)(a.F,
b,void 0)},x6=function(a){return(a=Qpa(a))?x5(a):null},Qpa=function(a){a.o?(a=a.o,a=a.g.length?a.g[0]:null):a=null;
return a},Rpa=function(a,b){var c=x6(a);
return c&&b?H4(b,c.o,c.g?c.g:"xy"):1},Spa=function(a){if(!a)return null;
var b=B5(a.condition,V5),c=B5(a.notCondition,V5),d=W4(a.show_delay,!1);a=W4(a.hide_delay,!1);return b||c?new ypa(b,c,d,a):null},Tpa=function(a,b){this.g=a;
this.o=b||null},R4=function(a,b){var c;
c=a.o?T4(a.o,new Tpa(a.g)):a.g;var d=b.clone(),e=c.left;c=c.top;e instanceof g.se?(d.left+=e.x,d.top+=e.y):(d.left+=e,g.qa(c)&&(d.top+=c));return d},Wpa=function(a){if(!a)return null;
var b=X4(a.type,Upa),c=X4(a.trigger,Vpa),d=h5(D5(a.url));D5(a.subscribeData);return b?new Dpa(b,c,d):null},Xpa=function(a){return 3*a*a-2*a*a*a},Ypa=function(a){return Math.pow(a,3)},Zpa=function(a,b){return(b&8&&I5(a)?b^4:b)&-9},$pa=function(a,b,c){var d=m5();
a={csn:a,parentVisualElement:l4(b),visualElements:(0,g.Q)(c,function(a){return l4(a)})};
a5(d,{attachChild:a},void 0)},aqa=function(a){var b=0;
-1!=a.indexOf("h")&&(a=a.split("h"),b=3600*a[0],a=a[1]);-1!=a.indexOf("m")&&(a=a.split("m"),b=60*a[0]+b,a=a[1]);-1!=a.indexOf("s")?(a=a.split("s"),b=1*a[0]+b):b=1*a+b;return b},y6=function(a,b){b.match(/\sstyle\s*=/);
a.innerHTML=b},z6=function(a,b,c){this.A=a;
this.annotation=b;this.g=c;this.o=null;this.C=this.isVisible=!1;Lpa(b,a)},bqa=function(a){g.Gf(a.A,"resize",a.D,a);
g.Gf(a.A,"onVideoAreaChange",a.B,a)},A6=function(a){a.o&&(a.o.stop(),a.o=null)},cqa=function(a,b,c,d,e){this.g=a;
this.$=b;this.D=c;this.fa=d;this.da=e;this.N=!1;this.F=new g.Uv(this);this.P=this.C=this.G=this.O=this.o=null;this.ca=!1;this.ba=this.J=this.L=null;this.vo=new g.lw(this.mN,100,this);this.H=new g.Ld(this.Jt,500,this);this.V=this.A=this.B=null},dqa=function(a,b){var c=(0,g.z)(function(a,c,f){c=f?B6(this,c,(0,g.z)(f,this)):B6(this,c);
this.F.S(b,a,c)},a);
c("mouseover","d",a.fy);c("mouseout","c",a.Of);c("click","a");c("touchend","a")},eqa=function(a){if(a.g.C){var b;
v6(a.g,function(a){return"close"==a.type})?b=a.o:(a.B=g.M("DIV","annotation-close-button"),g.R(a.B,!1),g.ch(a.B,"annotation_id",a.g.id),a.o.appendChild(a.B),b=a.B);
var c=function(a){a.stopPropagation()};
a.F.S(b,"click",B6(a,"b",c));a.F.S(b,"touchend",B6(a,"b",c))}},B6=function(a,b,c){return(0,g.z)(function(a){if(this.da)c&&c(a);
else if(a.event.target instanceof window.Element){var d=a.event.target;g.R(d,!1);try{var f=window.document.elementFromPoint(a.event.clientX,a.event.clientY);if(g.nf(f,"annotation")){var k=window.document.createEvent("MouseEvent");k.initMouseEvent(a.event.type,a.event.bubbles,a.event.cancelable,a.event.view,a.event.detail,a.event.screenX,a.event.screenY,a.event.clientX,a.event.clientY,a.event.ctrlKey,a.event.altKey,a.event.shiftKey,a.event.metaKey,a.event.button,a.event.relatedTarget);f.dispatchEvent(k)}}finally{g.R(d,
!0)}}d=g.ok(a.target);a=new g.se(a.clientX,a.clientY);"c"==b&&d.contains(a)||this.fa.Lb(b,this.g)},a)},D6=function(a){if(a.o||a.A){var b=x6(a.g);
if(b){var c=C6(a);if(a.o){var b=T4(b,c),d=g.fZ(g.Yl(a.D));g.mk(a.o,b.width,b.height);g.bk(a.o,b.left,b.top);a.O=new g.zf(d.left+b.left,d.top+b.top,b.width,b.height);var e;e=(e=x6(a.g))&&d?I4(d,e.B,e.g?e.g:"xy"):1;var f=Rpa(a.g,d),d=a.g.g;d.padding?d=d.padding:(d="speech"==a.g.style?1.6:.8,d=new g.yf(d,d,d,d));d=new g.yf(360*d.top*f/100,640*d.right*e/100,360*d.bottom*f/100,640*d.left*e/100);a.C&&(d.right+=1.5*c.g.height/100);a.o.style.padding=d.top+"px "+d.right+"px "+d.bottom+"px "+d.left+"px";"label"==
a.g.style&&a.G&&(a.G.style.padding=a.o.style.padding);var d=c.g,k=!1,l=0,m=0,n;n=g.fZ(g.Yl(a.D));var q=k4(a.D.app.B.J);g.Bf(n,q)?n=null:(q.top+=20,q.height-=40,"player_relative"!=a.g.D&&(q.left-=n.left,q.top-=n.top),n=q);n&&(l=n.top-(b.top+b.height),m=b.top-(n.top+n.height),k=0<l||0<m);if(k&&n){d=n;e=l;var f=m,t;a.C&&(m=fqa(a,23,b,e,f),a.B&&(t=43-m.width,0<t&&(b.left+m.left-t>d.left&&(m.left-=t),m.width+=t)),t=m,g.mk(a.C,m.width,m.height),g.bk(a.C,m.left,m.top));a.B&&(t?b=new g.se(t.left+t.width-
23-18,a.ca?t.top+2:t.top+t.height-18-2):(t=fqa(a,18,b,e,f),b=new g.se(t.left,t.top),g.mk(a.B,t.width,t.height)),g.bk(a.B,b));a.P=new g.zf(a.O.left+t.left,a.O.top+t.top,t.width,t.height);a.L=a.F.S(g.Yl(a.D),"mousemove",a.CH)}else a.C&&(t=e/f*d.height*4.2/100,t=new g.ve(t,t),"highlight"==a.g.type||"label"==a.g.style?(e=1.5*d.height/100,t=new g.zf(b.width-t.width-e,b.height-t.height-e,t.width,t.height)):t=new g.zf(b.width-t.width-3*d.height/100,(b.height-t.height)/2,t.width,t.height),g.mk(a.C,t.width,
t.height),g.bk(a.C,t.left,t.top)),a.B&&(t=9<=d.left+d.width-(b.left+b.width),e=9<=b.top-d.top,g.bk(a.B,t&&e?new g.se(b.width-9,-9):t?new g.se(b.width-9,45<b.height?9:b.height-9):e?new g.se(45<b.width?b.width-9-18:-9,-9):b.width/d.width>b.height/d.height?new g.se(45<b.width?b.width-9-18:-9,b.height-9):new g.se(-9,45<b.height?9:b.height-9)))}a.A&&a.A.A(a.g,c);if(a.o){c=a.o;b=a.g.g;c.style.color="highlightText"==a.g.style?b.H:b.B;t=g.fZ(g.Yl(a.D));c.style.fontSize=360*b.textSize*Rpa(a.g,t)/100+"px";
t=a.g.style;c.style.textAlign=b.textAlign?b.textAlign:"title"==t||"highlightText"==t?"center":"left";b.F&&(c.style.fontWeight=b.F);a=a.o;c=a.style.overflow;t=(b=g.L("annotation-link-icon",a))?g.qk(b):!1;e=(d=g.L("annotation-close-button",a))?g.qk(d):!1;t&&g.R(b,!1);e&&g.R(d,!1);m=f="";if(l=g.L("inner-text",a))f=l.style.overflow,m=l.style.position,l.style.overflow="visible",l.style.position="static";a.style.overflow="scroll";if(a.scrollHeight>a.offsetHeight||a.scrollWidth>a.offsetWidth){n=k=Jpa(a);
for(var q=5,v=Math.floor(k/2);v;)a.scrollHeight<=a.offsetHeight&&a.scrollWidth<=a.offsetWidth?(q=n,n=Math.min(n+v,k)):n=Math.max(n-v,q),v=Math.floor(v/2),a.style.fontSize=n+"px";n!=q&&(a.scrollHeight>a.offsetHeight||a.scrollWidth>a.offsetWidth)&&(a.style.fontSize=q+"px")}a.style.overflow=c;l&&(l.style.overflow=f,l.style.position=m);e&&g.R(d,!0);t&&g.R(b,!0)}}}},fqa=function(a,b,c,d,e){var f=0<e;
b=new g.zf(0,c.height-b,Math.max(c.width,b),b);0<d&&(b.top=c.height,20<d&&(b.height+=d-20),g.N(a.o,"annotation-extend-down"));f&&(b.top=-b.height,20<e&&(c=e-20,b.top-=c,b.height+=c),g.N(a.o,"annotation-extend-up"),a.ca=!0);return b},E6=function(a){return"label"!=a.g.style||a.A.g},C6=function(a){var b;
b=g.fZ(g.Yl(a.D));if("player_relative"==a.g.D){var c=g.Yl(a.D).Ua();b=new g.zf(-b.left,-b.top,c.width,c.height)}else b=new g.zf(0,0,b.width,b.height);return new Tpa(b,a.V?x6(a.V):null)},F6=function(a,b,c){e6.call(this,a,b,c);
this.F=this.B=this.G=!1;this.D=5E3;this.A=null;this.bi=g.M("DIV","iv-promo-contents");this.g=this.o=this.$c=null;this.C=new g.Ld(function(){this.$c.setAttribute("aria-hidden",!0);g.R(this.o,!1);g.R(this.g,!0)},700,this)},gqa=function(a){var b=a.annotation.data,c;
if("cta"==a.annotation.style)c=6;else if("video"==a.annotation.style||"playlist"==a.annotation.style)c=7;a.D=b.collapse_delay_ms||a.D;var d=["iv-promo","iv-promo-inactive"];a.na().setAttribute("aria-hidden",!0);a.na().setAttribute("aria-label",g.P("YTP_INVIDEO_PROMOTION_ARIA_LABEL"));a.na().tabIndex=0;var e=u6(a.annotation),f;if(b.image_url){f=g.M("DIV",["iv-promo-img","iv-click-target"]);var k=g.M("IMG",{src:b.image_url,"aria-hidden":"true"});f.appendChild(k);b.video_duration&&!b.is_live?(k=g.M("SPAN",
"iv-promo-video-duration",b.video_duration),f.appendChild(k)):b.playlist_length&&(k=g.M("SPAN","iv-promo-playlist-length",b.playlist_length.toString()),f.appendChild(k));e&&a.Ch(f,e,a.annotation.id,b.session_data,a.annotation.Mb,void 0,c)}e?a.$c=g.M("A",{href:U4(e),"class":"iv-promo-txt"}):a.$c=g.M("DIV","iv-promo-txt");var l,m,n,q;switch(a.annotation.style){case "cta":case "website":l=g.M("P",null,g.M("STRONG",null,b.text_line_1));m=g.M("P",null,g.M("SPAN","iv-promo-link",b.text_line_2));b.text_line_3&&
(d.push("iv-promo-website-card-cta"),n=g.M("P",null,g.M("SPAN","iv-promo-action-text",b.text_line_3)));g.N(a.$c,"iv-click-target");e&&a.Ch(a.$c,e,a.annotation.id,b.session_data,a.annotation.Mb,void 0,c);break;case "playlist":case "video":l=g.M("P",null,g.M("SPAN",null,b.text_line_1));m=g.M("P",null,g.M("STRONG",null,b.text_line_2));b.is_live&&(l=m,m=g.M("SPAN",["yt-badge","iv-promo-badge-live"],g.P("YTP_LIVE_NOW")));g.N(a.$c,"iv-click-target");e&&a.Ch(a.$c,e,a.annotation.id,b.session_data,a.annotation.Mb,
void 0,c);d.push("iv-promo-video");break;case "vote":l=g.M("P",null,g.M("STRONG",null,b.text_line_1)),m=g.M("P",null,g.M("SPAN",null,b.text_line_2)),q=g.M("DIV","iv-promo-button-container"),c=g.M("BUTTON",["iv-button","iv-promo-button"],g.M("SPAN","iv-button-content",b.button_text)),a.context.g.S(c,"click",function(a){a.stopPropagation();Z5(this.context.logger,this.annotation.Mb,null,{contest_vote:"1"},(b.tracking||{}).vote);a=this.annotation.data;this.$c=g.L("iv-promo-txt",this.bi);var c=g.L("iv-promo-button-container",
this.bi),d=g.M("DIV",["iv-promo-txt","iv-click-target"]),e=g.M("P",null,g.M("STRONG",null,a.text_line_3)),f=g.M("P",null,a.text_line_4);g.Se(d,e,f);g.We(c);g.Xe(d,this.$c);g.kh(this.na(),"iv-promo-with-button");(c=u6(this.annotation))&&this.Ch(d,c,this.annotation.id,a.session_data,this.annotation.Mb)},a),q.appendChild(c),d.push("iv-promo-with-button")}l&&a.$c.appendChild(l);
m&&a.$c.appendChild(m);n&&a.$c.appendChild(n);a.bi.appendChild(a.$c);q&&a.bi.appendChild(q);l=g.M("DIV","iv-promo-actions");a.g=g.M("BUTTON",["iv-promo-expand","ytp-button"]);a.g.title=g.P("YTP_EXPAND");a.context.g.S(a.g,"click",g.va(a.Gn,5E3),a);l.appendChild(a.g);g.R(a.g,!1);a.context.g.S(a.na(),"mouseover",a.oD,a);a.context.g.S(a.na(),"mouseout",a.nD,a);a.context.g.S(a.na(),"touchend",g.va(a.Gn,5E3),a);a.o=g.M("BUTTON",["iv-promo-close","ytp-button"]);a.o.title=g.P("YTP_CLOSE");a.context.g.S(a.o,
"click","cta"==a.annotation.style&&b.text_line_3?a.dD:a.pN,a);l.appendChild(a.o);g.jh(a.na(),d);f&&g.Re(a.na(),f);g.Re(a.na(),a.bi);g.Re(a.na(),l)},hqa=function(a){a.B||a.F||a.A||(g.N(a.na(),"iv-promo-collapsed"),a.B=!0,a.C.start())},iqa=function(a){a.C.stop();
a.B&&(g.lh(a.na(),["iv-promo-collapsed","iv-promo-collapsed-no-delay"]),a.B=!1,a.$c&&a.$c.removeAttribute("aria-hidden"),g.R(a.g,!1),g.R(a.o,!0))},jqa=function(a,b){a.A||(a.A=g.Id(function(){G6(this);
hqa(this)},b,a))},G6=function(a){a.A&&(g.Kd(a.A),a.A=null)},H6=function(a,b,c){e6.call(this,a,b,c);
this.H=b;this.o=null;this.F=!1;this.A=null;this.B=!1;this.G=0;this.g=this.D=this.C=null},I6=function(a,b,c){X5.call(this,b,c);
this.X=a;this.L=null;this.Mk=this.ga=this.B=this.la=!1;this.Va=null;this.Nm=new g.Ld(g.w,c.C.useTabletControls?4E3:3E3);this.fa=new g.Ld(g.w);this.C=new g6(c,(0,g.z)(this.Ch,this),(0,g.z)(this.Ok,this));a=["div","iv-drawer",["div","iv-drawer-header",{"aria-role":"heading"},["span","iv-drawer-header-text"],["button",["iv-drawer-close-button","ytp-button"],{"aria-label":g.P("YTP_DRAWER_CLOSE_BUTTON_ARIA_LABEL"),tabindex:"0"}]],["div","iv-drawer-content"]];this.H=new g.V(a);this.D=this.H.element;this.da=
new g.wv(this.H,330);this.pa=g.L("iv-drawer-header-text",this.D);this.A=g.L("iv-drawer-content",this.D);a=["iv-drawer-teaser"];a.push("iv-exp-cards-teaser-prominent");a=["div",a,["div","iv-drawer-teaser-box"],["div","iv-drawer-teaser-text"],["button","iv-drawer-open-button",{"aria-label":g.P("YTP_CARDS_BUTTON_ARIA_LABEL"),"aria-haspopup":"true"},["span"]]];new g.V(a);this.o=[];this.ba=this.J=this.F=this.O=this.g=null;this.ca=[];Y5(this,0,1E3*c.videoData.lengthSeconds,"",this.VB,this.vC);this.G=this.$=
this.P=null},pqa=function(a,b){var c=b&&b.data&&b.data.card_type;
if(c&&kqa[c]){c=new kqa[c](b.id,b.data,b.Mb);a.la||(g.jh(a.na(),["html5-stop-propagation","iv-drawer-manager"]),g.tm(a.X,a.D,6),lqa(a),a.J=g.L("ytp-cards-button"),a.ba=g.L("iv-drawer-close-button",a.D),a.la=!0);mqa(a,c.id);var d=nqa(a,c);if(d){var e={Ub:c,Rm:d.element,pu:!1},f=oqa(a,e);g.pb(a.o,f,0,e);d.Ha(a.A,f);a.Tj();c.autoOpen?Y5(a,c.startMs,0x8000000000000,c.id,g.va(a.pK,e)):(d=1E3*a.context.o.getCurrentTime(),5E3>d&&d>c.startMs&&a.mw(e),Y5(a,c.startMs,c.startMs+1,c.id,g.va(a.mw,e)),J6(a))}}},
qqa=function(a,b){b.data.autoOpenMs&&Y5(a,b.data.autoOpenMs,0x8000000000000,"",a.nN);
b.data.autoCloseMs&&Y5(a,b.data.autoCloseMs,0x8000000000000,"",a.Zj);var c=b.data.headerText;g.ef(a.pa,c);a.J&&a.J.setAttribute("title",c);b.data.eventId&&(a.L=b.data.eventId);a.P=new g.bq(b.data.trackingParams);a.G=new g.bq(b.data.closeTrackingParams);a.$=new g.bq(b.data.iconTrackingParams)},mqa=function(a,b){var c=rqa(a,b);
c&&(c==a.g&&(a.g=null),a.X.yx(c.Ub.id),g.We(c.Rm),g.gb(a.o,c),a.Tj(),J6(a))},M6=function(a,b,c,d){if(!a.B){a.da.show();
a.O=new g.Ld(function(){g.N(this.context.o.getRootNode(),"ytp-iv-drawer-open")},0,a);
a.O.start();a.B=!0;a.N=(0,g.E)();K6(a.context.logger,a.L,7,void 0,d&&d.Ub?d.Ub.Mb:void 0);a.P&&a.G&&$5([a.P,a.G]);var e={TRIGGER_TYPE:b};(0,g.F)(a.o,function(a){a.pu||(a.pu=!0,L6(this.context.logger,a.Ub.Mb,a.Ub.o.PE,e));$5([a.Ub.C])},a);
m4(a.X);c&&(a.F=new g.Ld(function(){this.V=this.J;this.ba.focus()},330,a),a.F.start())}},lqa=function(a){a.context.g.S(g.L("iv-drawer-close-button",a.D),"click",a.nC,a);
a.context.g.S(a.A,"touchend",function(){this.Nm.start()},a);
a.context.g.S(a.A,"scroll",a.AC,a);a.Va=g.Fk(a.A,"mousewheel",(0,g.z)(a.oN,a));a.context.A.subscribe("onHideControls",function(){this.Mk=!0},a);
a.context.A.subscribe("onShowControls",function(){this.Mk=!1},a);
a.context.A.subscribe("onVideoAreaChange",function(){this.Mk=g.ih(this.X.getRootNode(),"ytp-autohide")},a);
a.ca.push(g.Hi("iv-teaser-shown",a.iF,a));a.ca.push(g.Hi("iv-teaser-clicked",a.hF,a))},nqa=function(a,b){switch(b.type){case "simple":return n6(a.C,b);
case "collaborator":var c=a.C,d=["div",["iv-card","iv-card-channel"],["a",["iv-click-target","g-hovercard"],{href:j6(c,b.url,b.id),"data-ytid":b.channelId},l6(b.profileImageUrl),["div","iv-card-content",q6(c,b),["h2","iv-card-primary-link",b.title],o6(c,b)]]],d=new g.V(d);m6(c,d,b);return d;case "donation":return c=a.C,d=(0,g.z)(c.D,c,b),n6(c,b,d,d);case "episode":return p6(a.C,b,"iv-card-episode");case "movie":return p6(a.C,b,"iv-card-movie");case "playlist":return c=a.C,d=["div",["iv-card","iv-card-playlist"],
["a","iv-click-target",{href:j6(c,b.url,b.id)},l6(b.B,["div","iv-card-image-overlay",["span","iv-card-playlist-video-count",b.playlistVideoCount.toString()]]),["div","iv-card-content",q6(c,b),h6(c,"h2","iv-card-primary-link",b.title),o6(c,b)]]],d=new g.V(d),m6(c,d,b),d;case "poll":return Mpa(a.C,b);case "productListing":var c=a.C,d=j6(c,b.url,b.id),e=!g.cb(b.offers),f=["iv-card"],k="",l=k6(c,b);e&&(f.push("iv-card-product-listing"),k="iv-card-primary-link",l=b.offers[0],e=["div",null],l.price&&e.push(["div",
"iv-card-offer-price",l.price]),l.merchant&&e.push(["div","iv-card-offer-merchant",l.merchant]),l=e);e=b.sponsored?["div","iv-card-sponsored",g.P("YTP_SPONSORED"),["div","iv-ad-info-container",["div","iv-ad-info","{{adInfo}}"],["div","iv-ad-info-icon-container",["div","iv-ad-info-icon"],["div","iv-ad-info-callout"]]]]:"";d=["div",f,{tabindex:"0"},["a",["iv-card-image","iv-click-target"],{style:"background-image: url("+b.imageUrl+");",href:d,"aria-hidden":"true",tabindex:"-1"}],["div","iv-card-content",
e,["a","iv-click-target",{href:d},h6(c,"h2",k,b.title),l]]];d=new g.V(d);f=g.Pe("span");g.ef(f,g.P("YTP_SPONSORED_PRODUCT_INFO"));d.xc(f,"adInfo");m6(c,d,b);return d;case "tip":return c=a.C,d=(0,g.z)(c.G,c,b),n6(c,b,d,d);case "video":return c=a.C,d=j6(c,b.url,b.id),f=b.videoDuration?["span","iv-card-video-duration",b.videoDuration]:"",k=b.B?["span",["yt-badge","yt-badge-live"],g.P("YTP_LIVE_NOW")]:"",d=["div",["iv-card","iv-card-video"],["a","iv-click-target",{href:d},l6(b.G,f),["div","iv-card-content",
q6(c,b),h6(c,"h2","iv-card-primary-link",b.title),o6(c,b),k]]],d=new g.V(d),m6(c,d,b),d}return null},oqa=function(a,b){if(0==a.o.length)return 0;
var c=g.Ya(a.o,function(a){return b.Ub.startMs>a.Ub.startMs||b.Ub.startMs==a.Ub.startMs&&b.Ub.timestamp>=a.Ub.timestamp?!0:!1});
return-1==c?0:c+1},sqa=function(a){return a.g?"productListing"==a.g.Ub.type:(0,g.qj)(a.o,function(a){return"productListing"==a.Ub.type})},J6=function(a){g.O(a.X.getRootNode(),"ytp-cards-shopping-active",sqa(a))},tqa=function(a,b){if(a.H.g){var c=new E5([0,
a.A.scrollTop],[0,b.Rm.offsetTop],600,Xpa);g.Hv(a.context.B,c,"animate",function(a){this.A.scrollTop=a.y},void 0,a);
g.Hv(a.context.B,c,"finish",function(a){this.A.scrollTop=a.y},void 0,a);
c.play()}else a.H.Cb(!0),a.A.scrollTop=b.Rm.offsetTop,a.H.Cb(!1)},N6=function(a){return a.g&&a.g.Ub?a.g.Ub:a.o[0]&&a.o[0].Ub?a.o[0].Ub:null},rqa=function(a,b){return g.Xa(a.o,function(a){return a.Ub.id==b},a)},wqa=function(a){if(!a)return null;
var b=C5(a.id),c=C5(a.author),d=X4(a.type,uqa),e=X4(a.style,O6),f=Y4(D5(a.TEXT)),k=Y4(a.data),k=0!=k.length?g.qf(k):{},l;var m=D5(a.segment);m?(C5(m.timeRelative),l=C5(m.spaceRelative),l=(m=B5(m.movingRegion,Cpa))?new Apa(l,m):null):l=null;var m=B5(a.action,Wpa),n=B5(a.trigger,Spa),q=W5(D5(a.appearance));q||(q=W5({}));var t=X4(a.coordinate_system,vqa,"video_relative"),v=W4(a.closeable,!0),x=Y4(a.html_blob);a=Y4(a.log_data);return b&&d?new t6(b,c,d,e,f,l,m,n,q,t,v,0,x,k,a):null},xqa=function(a,b,c,
d,e,f,k){this.g=a;
this.B=b;this.C=c;this.videoData=d;this.logger=e;this.o=f;this.A=k},yqa=function(a){this.X=a;
this.g={}},L6=function(a,b,c,d){if(b){var e=P6(a,b);
a.g[b]=e["p-time"];e["iv-event"]=e.link||e["l-class"]||e["link-id"]?2:7;b=Q6(a,"cta_annotation_shown",e,c);R6(a,e,zqa(b,d))}},Z5=function(a,b,c,d,e,f){if(b){var k=P6(a,b);
k["iv-event"]=3;k["i-time"]=a.g[b]||"";g.ac(k,d||{});b=Q6(a,"cta_annotation_clicked",k,e);R6(a,k,b,c,f)}},S6=function(a,b){if(b){var c=P6(a,b);
c["iv-event"]=4;c["i-time"]=a.g[b]||"";var d=Q6(a,"cta_annotation_closed",c);R6(a,c,d)}},zqa=function(a,b){return b?(0,g.Q)(a,g.va(function(a,b){return g.iw(b,a)},b||{})):a},Q6=function(a,b,c,d){d=g.kb(d||[]);
if(30==c["a-type"]){a:{c=c["a-id"];a=a.X.getVideoData();if(a.dl){if((b=a.dl[b])&&g.dt.test(b)){a=g.Ca("[ANNOTATION_ID]");0<=b.indexOf("[ANNOTATION_ID]")?b=b.replace("[ANNOTATION_ID]",c):0<=b.indexOf(a)&&(b=b.replace(a,c));break a}}else if(a.za){b=g.Mh(a.za,{label:b,value:"a_id="+c});break a}b=""}b&&d.push(b)}return d},R6=function(a,b,c,d,e){var f=1,k,l=-1;
if(d){var m=!1;k=function(){f--;f||m||((0,window.clearTimeout)(l),m=!0,d())};
l=(0,window.setTimeout)(function(){m=!0;d()},1E3)}(0,g.F)(c||[],function(a){f++;
g.Si(a,k)});
e&&(f++,0!=e&&a.X.Eg(e,k));Aqa(a,b,k)},P6=function(a,b){var c={};
if(b){var d=new g.qg(b);(0,g.F)(d.sb(),function(a){c[a]=(0,window.escape)(d.get(a,""))})}c["p-time"]=a.X.getCurrentTime().toFixed(2);
c.ps=g.U(a.X).o;return c},K6=function(a,b,c,d,e){e=P6(a,e);
e["iv-event"]=c;b&&(e.ei=b);e["a-id"]||(e["a-id"]="card:drawer");e["a-type"]=51;R6(a,e,d)},T6=function(a,b,c,d){c&&(c=P6(a,c),c["iv-event"]=b,R6(a,c,d))},Aqa=function(a,b,c){g.em(a.X,"iv",b,c)},Bqa=function(a){a=U4(a);
a=a.replace(/https?:\/\//g,"");return g5(a)?(a=g.Kh(a))&&a.v?a.v:null:null},Cqa=function(a){a=U4(a);
if(!a)return null;a=a.replace(/https?:\/\//g,"");var b;(b=!g5(a))||(b=g.Uf(g.Tf(a)[5]||null)||"",b=b.split("/"),b="/"+(1<b.length?b[1]:""),b="/watch"!=b);if(b)return null;b=g.Kh(a);if(!b||!b.v)return null;if(b.t)return aqa(b.t);a=a.split("#",2);return!a||2>a.length?null:(a=g.Ih(a[1]))&&a.t?aqa(a.t):-1},Dqa=function(a,b,c,d,e,f,k){a=a.clone();
var l=Zpa(b,c);c=g.nk(b);k=k?k.clone():c.clone();a=g.Nv(a,k,l,d,e,f);if(a.status&496)return a.status;g.bk(b,g.Ef(a.rect));k=g.Df(a.rect);g.we(c,k)||(d=k,f=g.He(g.Be(g.ze(b)).g),!g.Ke||g.oc("10")||f&&g.oc("8")?(b=b.style,g.Rj?b.MozBoxSizing="border-box":g.qc?b.WebkitBoxSizing="border-box":b.boxSizing="border-box",b.width=Math.max(d.width,0)+"px",b.height=Math.max(d.height,0)+"px"):(e=b.style,f?(g.Ke?(f=q4(b,"paddingLeft"),c=q4(b,"paddingRight"),k=q4(b,"paddingTop"),l=q4(b,"paddingBottom"),f=new g.yf(k,
c,l,f)):(f=g.Yj(b,"paddingLeft"),c=g.Yj(b,"paddingRight"),k=g.Yj(b,"paddingTop"),l=g.Yj(b,"paddingBottom"),f=new g.yf((0,window.parseFloat)(k),(0,window.parseFloat)(c),(0,window.parseFloat)(l),(0,window.parseFloat)(f))),g.Ke&&!g.pc(9)?(c=p4(b,"borderLeft"),k=p4(b,"borderRight"),l=p4(b,"borderTop"),b=p4(b,"borderBottom"),b=new g.yf(l,k,b,c)):(c=g.Yj(b,"borderLeftWidth"),k=g.Yj(b,"borderRightWidth"),l=g.Yj(b,"borderTopWidth"),b=g.Yj(b,"borderBottomWidth"),b=new g.yf((0,window.parseFloat)(l),(0,window.parseFloat)(k),
(0,window.parseFloat)(b),(0,window.parseFloat)(c))),e.pixelWidth=d.width-b.left-f.left-f.right-b.right,e.pixelHeight=d.height-b.top-f.top-f.bottom-b.bottom):(e.pixelWidth=d.width,e.pixelHeight=d.height)));return a.status},U6=function(a){return"creator-endscreen-editor"===a},Eqa=function(a,b){function c(a){return a.baseUrl}
function d(a){if(a&&a.runs)return(0,g.Q)(a.runs,function(a){return a.text}).join("")}
function e(a){var b=[];a.videoId&&b.push("v="+a.videoId);a.playlistId&&b.push("list="+a.playlistId);a.startTimeSeconds&&b.push("t="+a.startTimeSeconds);return"/watch?"+b.join("&")}
var f={};f.startMs=(0,window.parseInt)(a.startMs,10);f.impressionUrls=(0,g.Q)(a.impressionUrls||[],c);f.skip=a.skipEndscreen;f.visualElement=new g.bq(a.trackingParams);f.elements=(0,g.Q)(a.elements||[],function(f,l){var k=f.endscreenElementRenderer,n={},q=k.style,t=k.endpoint;n.id="element-"+l;n.type=q;n.title=d(k.title);n.metadata=d(k.metadata);n.callToAction=d(k.callToAction);n.fn=k.image;n.Pj=k.animatedImage;n.left=(0,window.parseFloat)(k.left);n.width=(0,window.parseFloat)(k.width);n.top=(0,window.parseFloat)(k.top);
n.aspectRatio=(0,window.parseFloat)(k.aspectRatio);n.startMs=(0,window.parseInt)(k.startMs,10);n.endMs=(0,window.parseInt)(k.endMs,10);t&&(n.hd={itct:t.click_tracking_params},n.clickUrls=(0,g.Q)(t.loggingUrls||[],c));k.title.accessibility&&(n.Vh=k.title.accessibility.accessibilityData.label);n.impressionUrls=(0,g.Q)(k.impressionUrls||[],c);n.Kt=(0,g.Q)(k.hovercardShowUrls||[],c);n.visualElement=new g.bq(a.trackingParams);if("VIDEO"==q)t&&(n.targetUrl=e(t.watchEndpoint)),n.Ii=!1,n.dj=b,n.videoDuration=
d(k.videoDuration);else if("PLAYLIST"==q)n.targetUrl=e(t.watchEndpoint),n.Ii=!1,n.dj=b,n.playlistLength=d(k.playlistLength);else if("CHANNEL"==q)if(q=t.browseEndpoint.browseId,n.channelId=q,n.targetUrl="/channel/"+q,n.Ii=!1,n.dj="new",n.po=!!k.hovercardButton,n.po){n.htmlBlob=k.htmlBlob;var k=k.hovercardButton.subscribeButtonRenderer,v;k.subscribed?(v=d(k.subscriberCountWithUnsubscribeText),q=d(k.subscriberCountText)):(v=d(k.subscriberCountText),q=d(k.subscriberCountWithSubscribeText));t=d(k.unsubscribedButtonText);
t.match(/[0-9]/)||v&&"0"!==v&&(t+=" "+v);v=d(k.subscribedButtonText);v.match(/[0-9]/)||q&&(v+=" "+q);n.subscribeButton={subscribed:k.subscribed,feature:"endscreen",subscribeText:t,unsubscribeText:v,enabled:k.enabled}}else n.subscribersText=d(k.subscribersText);else"WEBSITE"==q&&(n.targetUrl=t.urlEndpoint.url,n.Ii=!0,n.dj="new",n.Lt=k.icon.thumbnails[0].url);return n});
return f},Fqa=function(a){var b={};
b.startMs=a.startMs;b.impressionUrls=a.impressionUrls;b.skip=a.skip||!1;b.visualElement=new g.bq(a.trackingParams);b.elements=(0,g.Q)(a.elements||[],function(a){var b={};b.id=a.id;b.type=a.type;b.title=a.title;b.metadata=a.metadata;b.callToAction=a.callToAction;b.imageUrl=a.imageUrl;b.fn=a.displayImages;b.Pj=a.animatedDisplayImages;b.Lt=a.iconUrl;b.left=a.left;b.width=a.width;b.top=a.top;b.aspectRatio=a.aspectRatio;b.startMs=a.startMs;b.endMs=a.endMs;b.videoDuration=a.videoDuration;b.playlistLength=
a.playlistLength;b.channelId=a.channelId;b.htmlBlob=a.htmlBlob;b.subscribeButton=a.subscribeButton;b.subscribersText=a.subscribersText;b.po=a.isSubscribe;b.targetUrl=a.targetUrl;b.Ii="WEBSITE"==b.type;b.hd=a.sessionData||[];b.dj=a.targetTab;b.Vh=a.accessibilityStr;b.TE=a.isPlaceholder;b.impressionUrls=a.impressionUrls;b.Kt=a.hoverUrls;b.NW=a.dismissUrls;b.clickUrls=a.clickUrls;b.visualElement=new g.bq(b.hd.itct);return b});
return b},Gqa=function(){var a=g.ah("ROOT_VE_TYPE",void 0);
return a?new g.bq(void 0,a,void 0):null},Jqa=function(a,b,c){if(!(a.nodeName in Hqa))if(3==a.nodeType)c?b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g,"")):b.push(a.nodeValue);
else if(a.nodeName in Iqa)b.push(Iqa[a.nodeName]);else for(a=a.firstChild;a;)Jqa(a,b,c),a=a.nextSibling},Kqa=function(a,b,c,d){if(null!=a)for(a=a.firstChild;a;){if(b(a)&&(c.push(a),d)||Kqa(a,b,c,d))return!0;
a=a.nextSibling}return!1},V6=function(a){g.ju.call(this,a);
this.G=0;this.A={};this.H={};this.ka=new yqa(a);this.D=new g.Qn(this);g.J(this,this.D);this.D.U(this.g,"onVideoAreaChange",(0,g.z)(this.aa,this,"onVideoAreaChange"));this.D.U(this.g,"onHideControls",(0,g.z)(this.aa,this,"onHideControls"));this.D.U(this.g,"onShowControls",(0,g.z)(this.aa,this,"onShowControls"));this.D.U(this.g,"resize",(0,g.z)(this.aa,this,"resize"));this.D.U(this.g,"presentingplayerstatechange",(0,g.z)(this.aa,this,"presentingplayerstatechange"));this.subscribe("onHideControls",this.aH,
this);this.subscribe("onShowControls",this.II,this);this.subscribe("presentingplayerstatechange",this.fI,this);this.subscribe("resize",this.Co,this);this.subscribe("d",this.HM,this);this.subscribe("c",this.Of,this);this.subscribe("a",this.PF,this);this.subscribe("b",this.pG,this);g.U(this.g).F.subscribe("vast_info_card_add",this.Gv,this);this.g.addEventListener("crn_annotations_module",this.Rx,this);this.g.addEventListener("crx_annotations_module",this.Sx,this);this.J=g.M("DIV",["video-legacy-annotations",
"html5-stop-propagation"]);this.O=g.M("DIV","video-custom-annotations");this.B=new g.V(["div",["ytp-player-content","ytp-iv-player-content"]]);g.J(this,this.B);g.tm(this.g,this.B.element,5);this.B.ma();this.C=new g.V(["div",["ytp-iv-video-content"]]);g.J(this,this.C);a=g.M("DIV","video-annotations",this.J,this.O);this.C.element.appendChild(a);this.F=this.o=null;this.L=[];a=g.U(this.g);var b=this.g.getVideoData();(1!=(a.Jg||b.zd)||b.lr)&&null===a.F.get(b.videoId)||this.load()},Lqa=function(a,b){for(var c=
{},d=0;d<b.attributes.length;d++){var e=b.attributes[d];
c[e.name]=e.nodeValue}for(d=0;d<b.childNodes.length;d++)if(e=b.childNodes[d],e.tagName){var f;if(c[e.tagName])f=c[e.tagName];else if("html_blob"==e.tagName||"data"==e.tagName){g.U(a.g).experiments.g("text_content_for_xml_node_value")&&e.textContent?c[e.tagName]=e.textContent.trim():0<e.childNodes.length&&(f=e.childNodes[0].nodeValue,c[e.tagName]="string"==typeof f?f.trim():f);continue}else f=[],c[e.tagName]=f;e&&"TEXT"==e.tagName?1==e.childNodes.length&&3==e.childNodes[0].nodeType?f.push(e.childNodes[0].nodeValue):
f.push(""):e&&f.push(Lqa(a,e))}return c},Mqa=function(a,b,c){return!(a.loaded&&a.G==b&&a.g.getVideoData().videoId==c)},Oqa=function(a,b){var c=Nqa(a,b);
if(!c&&"marker"!=b.type)return null;Ppa(b,function(a){a=(0,g.z)(this.fJ,this,b.id,a);this.subscribe("ivTrigger:"+b.id,a)},a);
return new z6(a.ca,b,c)},Pqa=function(a,b){var c=V6.o(),d=null;
switch(b.type){case "branding":if(g.U(a.g).ff)break;a.B.element.appendChild(c);d=new H6(c,W6(a),b);break;case "promotion":g.tm(a.g,c,5),d=new F6(c,W6(a),b)}d&&d.ul();return d},Sqa=function(a){var b=a.g.getVideoData();
if(b.sa){var c=g.U(a.g),d=c.F.get(b.videoId);if(d){var e={format:"XML",wc:{}};c.experiments.g("disable_iv_cors")||(e.method="POST",e.withCredentials=!0);"gaming"==c.o&&(e.wc.gaming="1");e.gd=(0,g.z)(function(a,b,c){Mqa(this,a,b)||(a=g.ni(c)&&c.responseXML?c.responseXML:null)&&X6(this,a)},a,a.G,b.videoId);
g.lq()&&(e.gd=Qqa(a,e.gd));e.Ib={ic_only:"1"};Rqa(e,d);g.Pi(b.sa,e)}}},Rqa=function(a,b){a.method="POST";
a.Ib=a.Ib||{};b.fg&&(a.Ib.ic_xml=b.fg);b.Gh&&(a.Ib.ic_track=b.Gh)},Tqa=function(a){var b=new g.V(["div"]);
g.R(b.element,!1);var c=new I6(a.g,b.element,W6(a));b.Ha(a.B.element);c.ul();return c},W6=function(a){a.F||(a.F=new xqa(new g.Uv(a),new g.Fv(a),g.U(a.g),a.g.getVideoData(),a.ka,a.g,a.ca));
return a.F},X6=function(a,b){var c=!1;
Uqa(b);for(var d=b.getElementsByTagName("annotation"),e=0;e<d.length;e++){var f=Lqa(a,d[e]),k=null;try{k=wqa(f)}catch(l){}k&&(V6.A(k)?(f=Pqa(a,k))&&(a.H[k.id]=f):V6.B(k)?(a.o||(a.o=Tqa(a)),"card"==k.type?pqa(a.o,k):qqa(a.o,k),c=!0):(f=Oqa(a,k))&&(a.A[k.id]=f))}c&&(m4(a.g),a.Co());g.Gb(a.A,function(a){if(a.g){var b=a.annotation;(a=a.g)&&b.o&&b.o.o&&(b=this.A[b.o.o])&&(a.V=b.annotation)}},a)},Uqa=function(a){if((a=a.getElementsByTagName("annotations"))&&!(1>a.length)&&(a=a[0].getAttribute("itct"))){var b=
g.Zq();
if(b){var c=Gqa();c&&$pa(b,c,[new g.bq(a)])}}},Wqa=function(a,b,c,d){d?Vqa(a,b,c):Y6(a,b,c)},Y6=function(a,b,c){if(b=a.A[b])A6(b),c&&c.o?(a=(0,g.z)(a.Ht,a,b),b.o=new g.Ld(a,2E3),b.o.start()):a.Ht(b)},Vqa=function(a,b,c){if(b=a.A[b])A6(b),c&&c.B?(a=(0,g.z)(a.Aw,a,b),b.o=new g.Ld(a,2E3),b.o.start()):a.Aw(b)},Xqa=function(a,b,c){if("new"==b.target)return!1;
var d=U4(b);if(!d)return!1;d=d.replace(/https?:\/\//g,"");if(!g5(d))return!1;d=g.Kh(d);if(d.list||d.p)return!1;b=Bqa(b);if(!b)return!1;if(c==b)return!0;a=g.U(a.g);return a.C&&a.gb?!0:!1},Nqa=function(a,b){if(Yqa(b)){var c=b.C||v6(b,function(a){return"click"==a||"rollOut"==a||"rollOut"==a});
return new cqa(b,(0,g.z)(a.J.appendChild,a.J),a.g,a.ca,c)}return null},Yqa=function(a){if("highlight"==a.type||"widget"==a.type)return!0;
if("text"==a.type)for(var b in O6)if(a.style==O6[b])return!0;return!1},Z6=function(a,b,c,d){a.aa(v5(b,d),c,d)},Qqa=function(a,b){return(0,g.z)(function(){if(!this.isDisposed()){var a=Array.prototype.slice.call(arguments,0);
a.unshift(b);b=g.va.apply(window,a);this.L.push(g.mq(b,1,void 0))}},a)},$6=function(a,b,c,d,e,f,k){var l,m;
if(l=c.offsetParent){var n="HTML"==l.tagName||"BODY"==l.tagName;n&&"static"==g.Zj(l,"position")||(m=g.fk(l),n||(n=(n=I5(l))&&g.Rj?-l.scrollLeft:!n||g.Ts&&g.oc("8")||"visible"==g.Zj(l,"overflowX")?l.scrollLeft:l.scrollWidth-l.clientWidth-l.scrollLeft,m=g.ue(m,new g.se(n,l.scrollTop))))}l=m||new g.se;m=g.ok(a);(n=g.gk(a))&&g.Cf(m,n5(n));var n=g.Be(a),q=g.Be(c);if(n.g!=q.g){var t=n.g.body,q=g.ik(t,g.pf(q)),q=g.ue(q,g.fk(t));!g.Ke||g.pc(9)||g.He(n.g)||(q=g.ue(q,g.Le(n.g)));m.left+=q.x;m.top+=q.y}a=Zpa(a,
b);b=m.left;a&4?b+=m.width:a&2&&(b+=m.width/2);b=new g.se(b,m.top+(a&1?m.height:0));b=g.ue(b,l);e&&(b.x+=(a&4?-1:1)*e.x,b.y+=(a&1?-1:1)*e.y);var v;k&&(v=g.gk(c))&&(v.top-=l.y,v.right-=l.x,v.bottom-=l.y,v.left-=l.x);return Dqa(b,c,d,f,v,k,void 0)},a7=function(a,b,c,d,e,f,k){this.date=g.qa(a)?new Date(a,b||0,c||1,d||0,e||0,f||0,k||0):new Date(a&&a.getTime?a.getTime():(0,g.E)())},b7=function(a){return(a=g.Ce(a))?g.qk(a)&&!g.ih(a,"hid"):!1},c7=function(a){g.ju.call(this,a);
this.o=null;this.F=!1;this.B=null;this.A={};this.D={};this.C=null;this.J=!1;this.L=null;this.O=g.U(this.g).experiments.g("enable_creator_endscreen_moving_thumbs_on_hover");this.G=[];this.P=g.U(this.g).experiments.g("enable_creator_endscreen_html5_renderers");a=g.U(a).g;this.N="embedded"==a||"profilepage"==a;this.H=new g.Jt(null);this.g.addEventListener("crn_creatorendscreen",this.Tx,this);this.g.addEventListener("crx_creatorendscreen",this.Ux,this);this.load()},d7=function(a,b){g.qm(a.g,"creatorendscreen");
a.C&&(a.C.dispose(),a.C=null);for(var c in a.A){var d=a.A[c];d.dispose()}a.A={};a.D={};0<a.G.length&&(a.G.forEach(function(a){a.dispose()}),a.G.length=0);
if((a.o=b)&&b.elements){Zqa(a);c=[];d=new g.Am(b.startMs,0x7ffffffffffff,{id:"ytp-ce-in-endscreen",namespace:"creatorendscreen"});c.push(d);a.C=new g.V(["div","ytp-ce-shadow"]);g.tm(a.g,a.C.element,5);for(var e=0;e<b.elements.length;++e){var f=b.elements[e],d=$qa(a,f);a.A[f.id]=d;a.D[f.id]=f;g.tm(a.g,d.element,5);var k=new g.Am(f.startMs,f.endMs,{id:"ytp-ce-element-"+f.id,namespace:"creatorendscreen"});c.push(k);ara(a,d,f)}g.nm(a.g,c);a.Np()}},Zqa=function(a){var b=Gqa();
b&&$pa(g.Zq()||"",b,[a.o.visualElement])},$qa=function(a,b){var c=null;
switch(b.type){case "VIDEO":c=["div",["ytp-ce-element","ytp-ce-video"],{tabindex:0,"aria-label":b.Vh,"aria-hidden":!0},["div","ytp-ce-element-shadow"],["div","ytp-ce-covering-image",e7(f7(a,b,!1)),["div","ytp-ce-covering-animated-image",e7(f7(a,b,!0))]],["div","ytp-ce-covering-shadow-top"],["a","ytp-ce-covering-overlay",{href:b.targetUrl,tabindex:"-1"},["div",["ytp-ce-video-title","yt-ui-ellipsis","yt-ui-ellipsis-2"],{dir:g.Kt(a.H,b.title||"")},b.title],["div","ytp-ce-video-duration",b.videoDuration]]];
c=new g.V(c);break;case "PLAYLIST":c=["div",["ytp-ce-element","ytp-ce-playlist"],{tabindex:0,"aria-label":b.Vh,"aria-hidden":!0},["div","ytp-ce-element-shadow"],["div","ytp-ce-covering-image",e7(f7(a,b,!1)),["div","ytp-ce-covering-animated-image",e7(f7(a,b,!0))]],["div","ytp-ce-covering-shadow-top"],["a","ytp-ce-covering-overlay",{href:b.targetUrl,tabindex:"-1"},["div",["ytp-ce-playlist-title","yt-ui-ellipsis","yt-ui-ellipsis-2"],{dir:g.Kt(a.H,b.title||"")},b.title],["div","ytp-ce-playlist-count",
["div","ytp-ce-playlist-icon"],["div","ytp-ce-playlist-count-text",b.playlistLength]]]];c=new g.V(c);break;case "CHANNEL":var c=["div",["ytp-ce-element","ytp-ce-channel",b.po?"ytp-ce-channel-this":"ytp-ce-channel-that"],{tabindex:0,"aria-label":b.Vh,"aria-hidden":!0},["div","ytp-ce-element-shadow"],["div","ytp-ce-expanding-overlay",["div","ytp-ce-expanding-overlay-hider"],["div","ytp-ce-expanding-overlay-background"],["div","ytp-ce-expanding-overlay-content",["div","ytp-ce-expanding-overlay-body",
["div","ytp-ce-expanding-overlay-body-padding",["a",["ytp-ce-channel-title","ytp-ce-link"],b.title,{href:b.targetUrl,target:"_blank",tabindex:"-1",dir:g.Kt(a.H,b.title||"")}],b.htmlBlob||b.subscribeButton?["div","ytp-ce-subscribe-container",["div","ytp-ce-channel-subscribe"]]:"",b.subscribersText?["div","ytp-ce-channel-subscribers-text",b.subscribersText]:"",b.metadata?["div",["ytp-ce-channel-metadata","yt-ui-ellipsis","yt-ui-ellipsis-3"],b.metadata]:""]]]],["div","ytp-ce-expanding-image",e7(f7(a,
b,!1))]],c=new g.V(c),d=g.De("div","ytp-ce-channel-subscribe",c.element)[0];if(b.subscribeButton){g.N(d,"ytp-ce-subscribe-button");var e=new g.uu(b.subscribeButton.subscribeText,b.subscribeButton.unsubscribeText,b.subscribeButton.enabled,b.channelId,!!b.subscribeButton.subscribed,b.subscribeButton.feature,null,a.g);d.appendChild(e.element);a.G.push(e)}else b.htmlBlob&&y6(d,b.htmlBlob);break;case "WEBSITE":c=["div",["ytp-ce-element","ytp-ce-website"],{tabindex:0,"aria-label":b.Vh,"aria-hidden":!0},
["div","ytp-ce-element-shadow"],["div","ytp-ce-expanding-overlay",["div","ytp-ce-expanding-overlay-hider"],["div","ytp-ce-expanding-overlay-background"],["div","ytp-ce-expanding-overlay-content",["div","ytp-ce-expanding-overlay-body",["div","ytp-ce-expanding-overlay-body-padding",["div","ytp-ce-website-title",{dir:g.Kt(a.H,b.title||"")},b.title],["div","ytp-ce-website-metadata",b.metadata],["a",["ytp-ce-website-goto","ytp-ce-link"],b.callToAction,{href:b.targetUrl,target:"_blank",tabindex:"-1"}]]]]],
["div","ytp-ce-expanding-image",e7(f7(a,b,!1))],["div","ytp-ce-expanding-icon",e7(b.Lt)]],c=new g.V(c)}b.TE&&g.N(c.element,"ytp-ce-placeholder");return c},bra=function(a,b,c){a.O&&(a=g.L("ytp-ce-covering-animated-image",b.element))&&(a.style.display=c?"block":"none")},e7=function(a){return a?{style:"background-image: url("+a+")"}:{}},f7=function(a,b,c){var d;
b.fn&&(d=b.fn.thumbnails);!U6(g.U(a.g).o)&&a.L&&b.Pj&&b.Pj.thumbnails&&(!a.O||c)&&(d=b.Pj.thumbnails);return d?d[d.length-1].url:null},ara=function(a,b,c){b.S("mouseenter",(0,g.z)(a.Mp,a,b,c));
b.S("mouseleave",(0,g.z)(a.Vx,a,b,c));b.S("click",(0,g.z)(function(a){g.N(a.element,"ytp-ce-element-hover")},a,b));
b.S("click",(0,g.z)(a.Zu,a,c));b.S("keypress",(0,g.z)(a.Zu,a,c));b.S("focus",(0,g.z)(function(a,b){g.N(a.element,"ytp-ce-force-expand");this.Mp(a,b)},a,b,c));
b.S("blur",(0,g.z)(function(a,b){g.kh(a.element,"ytp-ce-force-expand");this.Vx(a,b)},a,b,c));
b.S("touchstart",(0,g.z)(a.Mp,a,b,c));var d=g.L("ytp-ce-expanding-overlay-hider",b.element);d&&b.U(d,"touchstart",function(a){a=a||window.event;a.cancelBubble=!0;a.stopPropagation&&a.stopPropagation();g.kh(b.element,"ytp-ce-element-hover");g.kh(b.element,"ytp-ce-force-expand")});
var e=(0,g.z)(function(a,b,c){c=g.Ze(c);(0,g.F)(c,function(c){e(c);g.kf(c)&&(a.U(c,"focus",(0,g.z)(function(a,b){g.N(a.element,"ytp-ce-force-expand");g7(this,b.id,!0)},this,a,b)),a.U(c,"click",(0,g.z)(function(a,b){g.N(a.element,"ytp-ce-force-expand");
g7(this,b.id,!0);this.J=!0},this,a,b)),a.U(c,"blur",(0,g.z)(function(a,b){this.J?(this.J=!1,a.element.focus()):(g.kh(a.element,"ytp-ce-force-expand"),g7(this,b.id,!1))},this,a,b)))},this)},a,b,c);
e(b.element)},g7=function(a,b,c){g.O(a.C.element,"ytp-ce-shadow-show",c);
for(var d in a.A)d!=b&&g.O(a.A[d].element,"ytp-ce-element-shadow-show",c)},h7=function(a,b,c){function d(){k||(f++,f==e.length&&(l.stop(),c&&c()))}
if(!b||U6(g.U(a.g).o))c&&c();else{var e=cra(a,b),f=0,k=!1,l=new g.Ld(function(){k=!0;c&&c()},1E3,a);
l.start();for(a=0;a<e.length;a++)g.Si(e[a],d)}},i7=function(a,b,c){h7(a,b.clickUrls,c);
b.Ii&&H5(b.visualElement)},cra=function(a,b){for(var c=a.g.getVideoData().clientPlaybackNonce,d=a.g.getCurrentTime().toFixed(2),c={CPN:c,
AD_CPN:c,MT:d},d=[],e=0;e<b.length;e++)d.push(dra(b[e],c));return d},dra=function(a,b){return a.replace(/%5B[a-zA-Z_:]+%5D|\[[a-zA-Z_:]+\]/g,function(a){var c=(0,window.unescape)(a),c=c.substring(1,c.length-1);
return b[c]?(0,window.escape)(b[c]):a})},era=function(a,b){var c=new window.Image;
c.onload=(0,g.z)(function(){this.L=0<c.width&&0<c.height;b()},a);
c.onerror=(0,g.z)(function(){this.L=!1;b()},a);
c.src="data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA"},fra=function(){g.O(window.document.body,"hide-players",!1);
(0,g.F)(g.Ee("preserve-players"),function(a){g.kh(a,"preserve-players")})},gra=function(a,b){var c=g.De(a,null,b);
return c.length?c[0]:null},j7=function(a,b){a=g.Ce(a);
b=g.Ce(b);return!!g.lf(a,function(a){return a===b},!0,void 0)},k7=function(a){var b=a.__yt_uid_key;
b||(b=(0,g.e3)(),a.__yt_uid_key=b);return b},l7=function(a,b){a&&(a.dataset?delete a.dataset[g.bh(b)]:a.removeAttribute("data-"+b))},m7=function(a){if(g.c3&&null!==a&&"innerText"in a)a=a.innerText.replace(/(\r\n|\r|\n)/g,"\n");
else{var b=[];Jqa(a,b,!0);a=b.join("")}a=a.replace(/ \xAD /g," ").replace(/\xAD/g,"");a=a.replace(/\u200B/g,"");g.c3||(a=a.replace(/ +/g," "));" "!=a&&(a=a.replace(/^\s*/,""));return a},n7=function(a,b){var c=[];
return Kqa(a,b,c,!0)?c[0]:void 0},o7=function(a){g.cq.call(this,1,arguments);
this.g=a},p7=function(a,b,c,d,e){g.cq.call(this,2,arguments);
this.source=e||null},hra=function(a,b,c){g.cq.call(this,1,arguments);
this.g=a;this.o=b},q7=function(a,b,c,d,e,f,k){g.cq.call(this,1,arguments);
this.g=d||null;this.source=k||null},r7=function(a,b,c){var d;
switch(a){case "mouseover":case "mouseout":d=3;break;case "mouseenter":case "mouseleave":d=9}return g.lf(c,function(a){return g.ih(a,b)},!0,d)},t7=function(a){var b="mouseover"==a.type&&"mouseenter"in s7||"mouseout"==a.type&&"mouseleave"in s7,c=a.type in s7||b;
if("HTML"!=a.target.tagName&&c){if(b){var b="mouseover"==a.type?"mouseenter":"mouseleave",c=s7[b],d;for(d in c.o){var e=r7(b,d,a.target);e&&!g.lf(a.relatedTarget,function(a){return a==e},!0)&&c.Lb(d,e,b,a)}}if(b=s7[a.type])for(d in b.o)(e=r7(a.type,d,a.target))&&b.Lb(d,e,a.type,a)}},u7=function(a){this.C=a;
this.F={};this.H=[];this.G=[]},Z=function(a,b){return"yt-uix"+(a.C?"-"+a.C:"")+(b?"-"+b:"")},v7=function(a,b,c){a.H.push(g.Hi(b,c,a))},w7=function(a,b,c){a.G.push(g.Cq(b,c,a))},ira=function(a,b){g.ch(a,"tooltip-text",b)},x7=function(){u7.call(this,"button");
this.g=null;this.A=[];this.o={}},jra=function(a,b,c,d,e){var f=b7(c),k=9==d.keyCode;
k||32==d.keyCode||13==d.keyCode?(d=y7(a,c))?(b=g.af(d),"a"==b.tagName.toLowerCase()?g.fv(b.href):n4(b)):k&&z7(a,b):f?27==d.keyCode?(y7(a,c),z7(a,b)):e(b,c,d):(a=g.ih(b,Z(a,"reverse"))?38:40,d.keyCode==a&&(n4(b),d.preventDefault()))},y7=function(a,b){var c=Z(a,"menu-item-highlight"),d=g.L(c,b);
d&&g.kh(d,c);return d},kra=function(a,b,c){g.N(c,Z(a,"menu-item-highlight"));
var d=c.getAttribute("id");d||(d=Z(a,"item-id-"+g.ua(c)),c.setAttribute("id",d));b.setAttribute("aria-activedescendant",d)},lra=function(a,b,c,d){var e=b.length;
a=(0,g.ab)(b,a);if(-1==a)if(38==d.keyCode)a=e-c;else{if(37==d.keyCode||38==d.keyCode||40==d.keyCode)a=0}else 39==d.keyCode?(a%c==c-1&&(a-=c),a+=1):37==d.keyCode?(0==a%c&&(a+=c),--a):38==d.keyCode?(a<c&&(a+=e),a-=c):40==d.keyCode&&(a>=e-c&&(a-=e),a+=c);return a},A7=function(a,b){var c=b.iframeMask;
c||(c=window.document.createElement("iframe"),c.src='javascript:""',c.className=Z(a,"menu-mask"),g.vv(c),b.iframeMask=c);return c},B7=function(a,b,c,d){var e=g.nf(b,Z(a,"group")),f=!!a.wa(b,"button-menu-ignore-group"),e=e&&!f?e:b,f=9,k=8,l=g.ok(b);
if(g.ih(b,Z(a,"reverse"))){f=8;k=9;l=l.top+"px";try{c.style.maxHeight=l}catch(q){}}g.ih(b,"flip")&&(g.ih(b,Z(a,"reverse"))?(f=12,k=13):(f=13,k=12));var m;a.wa(b,"button-has-sibling-menu")?m=g.ek(e):a.wa(b,"button-menu-root-container")&&(m=mra(a,b));g.Ke&&!g.oc("8")&&(m=null);var n;m&&(n=g.ok(m),n=new g.yf(-n.top,n.left,n.top,-n.left));m=new g.se(0,1);g.ih(b,Z(a,"center-menu"))&&(m.x-=Math.round((g.nk(c).width-g.nk(b).width)/2));d&&(m.y+=g.Le(window.document).y);if(a=A7(a,b))b=g.nk(c),a.style.width=
b.width+"px",a.style.height=b.height+"px",$6(e,f,a,k,m,n,197),d&&g.Vj(a,"position","fixed");$6(e,f,c,k,m,n,197)},mra=function(a,b){if(a.wa(b,"button-menu-root-container")){var c=a.wa(b,"button-menu-root-container");
return g.nf(b,c)}return window.document.body},z7=function(a,b){if(b){var c=C7(a,b);
if(c){a.g=null;b.setAttribute("aria-pressed","false");b.setAttribute("aria-expanded","false");b.removeAttribute("aria-activedescendant");g.vv(c);a.Pg(b,"button-menu-action",!1);var d=A7(a,b),e=k7(c).toString();delete a.o[e];g.oi(function(){d&&d.parentNode&&(g.vv(d),d.parentNode.removeChild(d));c.originalParentNode&&(c.parentNode.removeChild(c),c.originalParentNode.appendChild(c),c.originalParentNode=null,c.activeButtonNode=null)},1)}var e=g.nf(b,Z(a,"group")),f=[Z(a,"active")];
e&&f.push(Z(a,"group-active"));g.lh(b,f);g.Ki("yt-uix-button-menu-hide",b);g.Gk(a.A);a.A.length=0}},nra=function(a,b,c){var d=Z(a,"menu-item-selected");
(0,g.F)(g.Ee(d,b),function(a){g.kh(a,d)});
g.N(c.parentNode,d)},C7=function(a,b){if(!b.widgetMenu){var c=a.wa(b,"button-menu-id"),c=c&&g.Ce(c),d=Z(a,"menu");
c?g.jh(c,[d,Z(a,"menu-external")]):c=g.L(d,b);b.widgetMenu=c}return b.widgetMenu},ora=function(a,b){if(a.wa(b,"button-toggle")){var c=g.nf(b,Z(a,"group")),d=Z(a,"toggled"),e=g.ih(b,d);
if(c&&a.wa(c,"button-toggle-group")){var f=a.wa(c,"button-toggle-group");(0,g.F)(g.Ee(Z(a),c),function(a){a!=b||"optional"==f&&e?(g.kh(a,d),a.removeAttribute("aria-pressed")):(g.N(b,d),a.setAttribute("aria-pressed","true"))})}else e?b.removeAttribute("aria-pressed"):b.setAttribute("aria-pressed","true"),g.ph(b,d)}},D7=function(a){a.g&&z7(a,a.g)},E7=function(a){u7.call(this,a);
this.A=null},pra=function(a,b,c){var d=c||b,e=Z(a,"card");
c=a.ac(d);var f=g.Ce(Z(a,"card")+k7(d));if(f)return a=g.L(Z(a,"card-body"),f),g.cf(a,c)||(g.We(c),a.appendChild(c)),f;f=window.document.createElement("div");f.id=Z(a,"card")+k7(d);f.className=e;(d=a.wa(d,"card-class"))&&g.jh(f,d.split(/\s+/));d=window.document.createElement("div");d.className=Z(a,"card-border");b=a.wa(b,"orientation")||"horizontal";e=window.document.createElement("div");e.className="yt-uix-card-border-arrow yt-uix-card-border-arrow-"+b;var k=window.document.createElement("div");k.className=
Z(a,"card-body");a=window.document.createElement("div");a.className="yt-uix-card-body-arrow yt-uix-card-body-arrow-"+b;g.We(c);k.appendChild(c);d.appendChild(a);d.appendChild(k);f.appendChild(e);f.appendChild(d);window.document.body.appendChild(f);return f},qra=function(a,b,c){var d=a.wa(b,"orientation")||"horizontal",e=g.L(Z(a,"anchor"),b)||b,f=a.wa(b,"position"),k=!!a.wa(b,"force-position"),l=a.wa(b,"position-fixed"),d="horizontal"==d,m="bottomright"==f||"bottomleft"==f,n="topright"==f||"bottomright"==
f,q,t;
n&&m?(t=13,q=8):n&&!m?(t=12,q=9):!n&&m?(t=9,q=12):(t=8,q=13);var v=I5(window.document.body),f=I5(b);v!=f&&(t^=4);var x;d?(f=b.offsetHeight/2-12,x=new g.se(-12,b.offsetHeight+6)):(f=b.offsetWidth/2-6,x=new g.se(b.offsetWidth+6,-12));var A=g.nk(c),f=Math.min(f,(d?A.height:A.width)-24-6);6>f&&(f=6,d?x.y+=12-b.offsetHeight/2:x.x+=12-b.offsetWidth/2);A=null;k||(A=10);b=Z(a,"card-flip");a=Z(a,"card-reverse");g.O(c,b,n);g.O(c,a,m);A=$6(e,t,c,q,x,null,A);!k&&A&&(A&48&&(n=!n,t^=4,q^=4),A&192&&(m=!m,t^=1,q^=
1),g.O(c,b,n),g.O(c,a,m),$6(e,t,c,q,x));l&&(e=(0,window.parseInt)(c.style.top,10),k=g.Le(window.document).y,g.Vj(c,"position","fixed"),g.Vj(c,"top",e-k+"px"));v&&(c.style.right="",e=g.ok(c),e.left=e.left||(0,window.parseInt)(c.style.left,10),k=g.Ie(window),c.style.left="",c.style.right=k.width-e.left-e.width+"px");e=g.L("yt-uix-card-body-arrow",c);k=g.L("yt-uix-card-border-arrow",c);d=d?m?"top":"bottom":!v&&n||v&&!n?"left":"right";e.setAttribute("style","");k.setAttribute("style","");e.style[d]=f+
"px";k.style[d]=f+"px";m=g.L("yt-uix-card-arrow",c);n=g.L("yt-uix-card-arrow-background",c);m&&n&&(c="right"==d?g.nk(c).width-f-13:f+11,f=c/Math.sqrt(2),m.style.left=c+"px",m.style.marginLeft="1px",n.style.marginLeft=-f+"px",n.style.marginTop=f+"px")},F7=function(a){a.A&&a.df(a.A)},rra=function(a){var b=a.cardMask;
b||(b=window.document.createElement("iframe"),b.src='javascript:""',g.jh(b,["yt-uix-card-iframe-mask"]),a.cardMask=b);b.style.position=a.style.position;b.style.top=a.style.top;b.style.left=a.offsetLeft+"px";b.style.height=a.clientHeight+"px";b.style.width=a.clientWidth+"px";window.document.body.appendChild(b)},G7=function(){u7.call(this,"kbd-nav")},sra=function(a,b,c){b&&c&&(g.N(c,Z(a)),a=b.id,a||(a="kbd-nav-"+Math.floor(1E6*Math.random()+1),b.id=a),b=a,g.y3&&c.dataset?c.dataset.kbdNavMoveOut=b:c.setAttribute("data-"+
"kbdNavMoveOut".replace(/([A-Z])/g,"-$1").toLowerCase(),b))},tra=function(a,b){if(b){var c=g.mf(b,"LI");
c&&(g.N(c,Z(a,"highlight")),H7=g.Fk(b,"blur",(0,g.z)(function(a){g.kh(a,Z(this,"highlight"));g.Gk(H7)},a,c)))}},ura=function(a){if("UL"!=a.tagName.toUpperCase())return[];
a=(0,g.Ye)(g.Ze(a),function(a){return"LI"==a.tagName.toUpperCase()});
return(0,g.Ye)((0,g.Q)(a,function(a){return b7(a)?n7(a,function(a){return g.sa(a)&&1==a.nodeType?g.kf(a):!1}):!1}),function(a){return!!a})},I7=function(){u7.call(this,"menu");
this.o=this.g=null;this.A={};this.D={};this.B=null},J7=function(a){var b=I7.getInstance();
if(g.ih(a,Z(b)))return a;var c=b.Dd(a);return c?c:g.nf(a,Z(b,"content"))==b.g?b.o:null},vra=function(a,b,c){var d=K7(a,b);
d&&g.mk(d,g.nk(c));if(c==a.g){var e=9,f=8;g.ih(b,Z(a,"reversed"))&&(e^=1,f^=1);g.ih(b,Z(a,"flipped"))&&(e^=4,f^=4);a=new g.se(0,1);d&&$6(b,e,d,f,a,null,197);$6(b,e,c,f,a,null,197)}},xra=function(a,b,c){L7(a,b)&&!c?M7(a,b):(wra(a,b),!a.g||j7(b,a.g)?a.yz(b):Voa(a.B,(0,g.z)(a.yz,a,b)))},wra=function(a,b){if(b){var c=g.nf(b,Z(a,"content"));
c&&(0,g.F)(g.Ee(Z(a),c),function(a){!j7(a,b)&&L7(this,a)&&N7(this,a)},a)}},M7=function(a,b){if(b){var c=[];
c.push(b);var d=O7(a,b);d&&(d=g.Ee(Z(a),d),d=g.kb(d),c=c.concat(d),(0,g.F)(c,function(a){L7(this,a)&&N7(this,a)},a))}},N7=function(a,b){if(b){var c=O7(a,b);
g.lh(P7(a,b),[Z(a,"trigger-selected"),"yt-uix-button-toggled"]);g.N(c,Z(a,"content-hidden"));var d=O7(a,b);d&&g.Ge(d,{"aria-expanded":"false"});(d=K7(a,b))&&d.parentNode&&g.We(d);c&&c==a.g&&(a.o.appendChild(c),a.g=null,a.o=null,a.B&&a.B.Lb("ROOT_MENU_REMOVED"));g.Ki("yt-uix-menu-hide",b);c=g.ua(b).toString();g.Gk(a.A[c]);delete a.A[c]}},yra=function(a,b){var c=O7(a,b);
if(c){(0,g.F)(c.children,function(a){"LI"==a.tagName&&g.Ge(a,{role:"menuitem"})});
g.Ge(c,{"aria-expanded":"true"});var d=c.id;d||(d="aria-menu-id-"+g.ua(c),c.id=d);(c=P7(a,b))&&g.Ge(c,{"aria-controls":d})}},zra=function(a,b,c){var d=O7(a,b);
d&&g.ih(b,Z(a,"checked"))&&(a=g.mf(c,"LI"))&&(a=g.L("yt-ui-menu-item-checked-hid",a))&&((0,g.F)(g.Ee("yt-ui-menu-item-checked",d),function(a){g.mh(a,"yt-ui-menu-item-checked","yt-ui-menu-item-checked-hid")}),g.mh(a,"yt-ui-menu-item-checked-hid","yt-ui-menu-item-checked"))},L7=function(a,b){var c=O7(a,b);
return c?!g.ih(c,Z(a,"content-hidden")):!1},Ara=function(a){(0,g.F)(g.De("UL",null,a),function(a){a.tabIndex=0;
var b=G7.getInstance();g.jh(a,[Z(b),Z(b,"list")])})},O7=function(a,b){var c=g.dh(b,"menu-content-id");
return c&&(c=g.Ce(c))?(g.jh(c,[Z(a,"content"),Z(a,"content-external")]),c):b==a.o?a.g:g.L(Z(a,"content"),b)},K7=function(a,b){var c=g.ua(b).toString(),d=a.D[c];
if(!d){d=g.Pe("IFRAME");d.src='javascript:""';var e=[Z(a,"mask")];(0,g.F)(g.hh(b),function(a){e.push(a+"-mask")});
g.jh(d,e);a.D[c]=d}return d||null},P7=function(a,b){return g.L(Z(a,"trigger"),b)},Bra=function(a,b){return j7(b,a.g)||j7(b,a.o)},Q7=function(){E7.call(this,"clickcard");
this.g={};this.o={}},R7=function(){E7.call(this,"hovercard")},S7=function(a,b,c,d,e,f){this.g=a;
this.F=null;this.A=g.L("yt-dialog-fg",this.g)||this.g;if(a=g.L("yt-dialog-title",this.A)){var k="yt-dialog-title-"+g.ua(this.A);a.setAttribute("id",k);this.A.setAttribute("aria-labelledby",k)}this.A.setAttribute("tabindex","-1");this.J=g.L("yt-dialog-focus-trap",this.g);this.L=!1;this.B=new g.Ff;this.G=[];this.G.push(i4(this.g,"click",(0,g.z)(this.mG,this),"yt-dialog-dismiss"));this.G.push(g.Fk(this.J,"focus",(0,g.z)(this.MC,this),!0));Cra(this);this.O=b;this.P=c;this.N=d;this.H=e;this.V=f;this.D=
this.C=null},Dra=function(a,b){a.isDisposed()||a.B.subscribe("post-all",b)},Cra=function(a){a=g.L("yt-dialog-fg-content",a.g);
var b=[];g.Gb(Era,function(a){b.push("yt-dialog-show-"+a)});
g.lh(a,b);g.N(a,"yt-dialog-show-content")},Fra=function(){return(0,g.xh)(g.Ee("yt-dialog"),function(a){return b7(a)})},Gra=function(a){var b=g.De("iframe",null,a.g);
(0,g.F)(b,function(a){var b=g.dh(a,"onload");b&&(b=g.u(b))&&g.Fk(a,"load",b);if(b=g.dh(a,"src"))a.src=b},a);
return g.kb(b)},Hra=function(a){(0,g.F)(window.document.getElementsByTagName("iframe"),function(b){-1==(0,g.ab)(a,b)&&g.N(b,"iframe-hid")})},Ira=function(){(0,g.F)(g.Ee("iframe-hid"),function(a){g.kh(a,"iframe-hid")})},Jra=function(a){g.oi((0,g.z)(function(){this.A&&this.A.focus()},a),0)},T7=function(){u7.call(this,"overlay");
this.B=this.o=this.A=this.g=null},Lra=function(a){a.B||(a.B=g.Hi("yt-uix-overlay-hide",Kra));
a.g&&Dra(a.g,function(){var a=T7.getInstance();a.A=null;a.g.dispose();a.g=null})},Mra=function(a){if(a.g){var b=a.A;
a.g.dismiss("overlayhide");b&&a.Pg(b,"overlay-hidden");a.A=null;a.o&&(g.Gk(a.o),a.o=null);a.g=null}},Nra=function(a,b){var c;
if(a)if(c=g.L("yt-dialog",a)){var d=g.Ce("body-container");d&&(d.appendChild(c),a.overlayContentNode=c,c.overlayParentNode=a)}else c=a.overlayContentNode;else b&&(c=g.nf(b,"yt-dialog"));return c},Ora=function(){var a=T7.getInstance();
if(a.A)a=g.L("yt-dialog-fg-content",a.A.overlayContentNode);else a:{if(a=g.Ee("yt-dialog-fg-content"))for(var b=0;b<a.length;b++){var c=g.nf(a[b],"yt-dialog");if(b7(c)){a=a[b];break a}}a=null}return a},Kra=function(){Mra(T7.getInstance())},Pra=function(a){a=g.nf(a,"yt-uix-button-subscription-container");
return g.L("yt-dialog",g.L("unsubscribe-confirmation-overlay-container",a))},Qra=function(a,b){g.Gk(U7);
U7.length=0;V7[b]||(V7[b]=Pra(a));T7.getInstance().show(V7[b]);var c=Ora();return new g.od(function(a){U7.push(i4(c,"click",function(){a()},"overlay-confirmation-unsubscribe-button"))})},Rra=function(a){var b=window.document.location.protocol+"//"+window.document.domain+"/post_login",b=g.cg(b,"mode","subscribe"),b=g.cg("/signin?context=popup","next",b),b=g.cg(b,"feature","sub_button");
if(b=window.open(b,"loginPopup","width=375,height=440,resizable=yes,scrollbars=yes",!0)){var c=g.Hi("LOGGED_IN",function(b){g.Ii(g.ah("LOGGED_IN_PUBSUB_KEY",void 0));g.$g("LOGGED_IN",!0);a(b)});
g.$g("LOGGED_IN_PUBSUB_KEY",c);b.moveTo((window.screen.width-375)/2,(window.screen.height-440)/2)}},Sra=function(){var a=g.ah("PLAYER_CONFIG");
return a&&a.args&&void 0!==a.args.authuser?!0:!(!g.ah("SESSION_INDEX")&&!g.ah("LOGGED_IN"))},W7=function(){u7.call(this,"tooltip");
this.g=0;this.o={}},Tra=function(a,b,c){ira(b,c);
a=a.wa(b,"content-id");(a=g.Ce(a))&&g.ef(a,c)},Ura=function(a,b){return a.wa(b,"tooltip-text")||b.title},Xra=function(a,b){if(b){var c=Ura(a,b);
if(c){var d=g.Ce(X7(a,b));if(!d){d=window.document.createElement("div");d.id=X7(a,b);d.className=Z(a,"tip");var e=window.document.createElement("div");e.className=Z(a,"tip-body");var f=window.document.createElement("div");f.className=Z(a,"tip-arrow");var k=window.document.createElement("div");k.setAttribute("aria-hidden","true");k.className=Z(a,"tip-content");var l=Vra(a,b),m=X7(a,b,"content");k.id=m;g.ch(b,"content-id",m);e.appendChild(k);l&&d.appendChild(l);d.appendChild(e);d.appendChild(f);var n=
m7(b),m=X7(a,b,"arialabel"),f=window.document.createElement("div");g.N(f,Z(a,"arialabel"));f.id=m;n=b.hasAttribute("aria-label")?b.getAttribute("aria-label"):"rtl"==window.document.body.getAttribute("dir")?c+" "+n:n+" "+c;g.ef(f,n);b.setAttribute("aria-labelledby",m);m=g.Ah()||window.document.body;m.appendChild(f);m.appendChild(d);Tra(a,b,c);(c=(0,window.parseInt)(a.wa(b,"tooltip-max-width"),10))&&e.offsetWidth>c&&(e.style.width=c+"px",g.N(k,Z(a,"normal-wrap")));k=g.ih(b,Z(a,"reverse"));Wra(a,b,d,
e,l,k)||Wra(a,b,d,e,l,!k);var q=Z(a,"tip-visible");g.oi(function(){g.N(d,q)},0)}}}},Wra=function(a,b,c,d,e,f){g.O(c,Z(a,"tip-reverse"),f);
var k=0;f&&(k=1);var l=g.nk(b);f=new g.se((l.width-10)/2,f?l.height:0);var m=g.fk(b);Dqa(new g.se(m.x+f.x,m.y+f.y),c,k);var m=g.Ie(window),n=g.jk(c);c=g.nk(d);var q=Math.floor(c.width/2),k=!!(m.height<n.y+l.height),l=!!(n.y<l.height);f=!!(n.x<q);m=!!(m.width<n.x+q);n=(c.width+3)/-2- -5;a=a.wa(b,"force-tooltip-direction");if("left"==a||f)n=-5;else if("right"==a||m)n=20-c.width-3;a=Math.floor(n)+"px";d.style.left=a;e&&(e.style.left=a,e.style.height=c.height+"px",e.style.width=c.width+"px");return!(k||
l)},X7=function(a,b,c){a=Z(a)+k7(b);
c&&(a+="-"+c);return a},Vra=function(a,b){var c=null;
g.V2&&g.ih(b,Z(a,"masked"))&&((c=g.Ce("yt-uix-tooltip-shared-mask"))?(c.parentNode.removeChild(c),g.uv(c)):(c=window.document.createElement("iframe"),c.src='javascript:""',c.id="yt-uix-tooltip-shared-mask",c.className=Z(a,"tip-mask")));return c},Yra=function(a){var b=g.Ce("yt-uix-tooltip-shared-mask"),c=b&&g.lf(b,function(b){return b==a},!1,2);
b&&c&&(b.parentNode.removeChild(b),g.vv(b),window.document.body.appendChild(b))},Y7=function(){u7.call(this,"subscription-button")},Zra=function(a,b){if(!a.wa(b,"ypc-enabled"))return null;
var c=a.wa(b,"ypc-item-type"),d=a.wa(b,"ypc-item-id");return{itemType:c,itemId:d,subscriptionElement:b}},$ra=function(a,b){var c=a.wa(b,Z7.EB),d=!!a.wa(b,"is-subscribed"),c="-"+c,e=$7.Tz+c;
g.O(b,$7.Sz+c,!d);g.O(b,e,d);a.wa(b,Z7.eA)&&!a.wa(b,Z7.dA)&&(c=Z(W7.getInstance()),g.O(b,c,!d),b.title=d?"":a.wa(b,Z7.fA));d?g.oi(function(){g.N(b,$7.nq)},1E3):g.kh(b,$7.nq)},asa=function(a,b){return(0,g.Ye)(g.Ee(Z(a)),function(a){return b==this.wa(a,"channel-external-id")},a)},bsa=function(a,b){var c=(0,g.z)(function(a){a.discoverable_subscriptions&&g.$g("SUBSCRIBE_EMBED_DISCOVERABLE_SUBSCRIPTIONS",a.discoverable_subscriptions);
this.jq(b)},a);
Rra(c)},csa=function(a,b){if(!a.wa(b,"show-unsub-confirm-dialog"))return!1;
var c=a.wa(b,"show-unsub-confirm-time-frame");return"always"==c||"ten_minutes"==c&&(c=(0,window.parseInt)(a.wa(b,"subscribed-timestamp"),10),(new a7).getTime()<1E3*(c+600))?!0:!1},o4={thin:2,
medium:4,thick:6},fpa=[2,2,6,6,0];g.B(r4,g.Vc);g.h=r4.prototype;g.h.An=null;g.h.yi=null;g.h.na=function(){return this.yi};
g.h.addEventListener=function(a,b,c,d){g.Gc(this.yi,a,b,c,d)};
g.h.removeEventListener=function(a,b,c,d){g.Pc(this.yi,a,b,c,d)};
g.h.R=function(){r4.M.R.call(this);var a=this.yi;if(a)if(g.xc(a))a.Rd&&g.Dc(a.Rd);else if(a=g.Jc(a)){var b=0,c;for(c in a.g)for(var d=a.g[c].concat(),e=0;e<d.length;++e)g.Qc(d[e])&&++b}};
g.B(y4,r4);y4.prototype.fill=null;var C4;g.B(z4,y4);g.B(A4,r4);var epa=0;g.B(E4,z4);g.B(F4,A4);F4.prototype.clear=function(){g.Te(this.na())};
F4.prototype.setSize=function(a,b){L4(this.na(),{width:a,height:b})};
g.B(G4,g.ow);G4.prototype.C=null;G4.prototype.Yg=function(){return this.ke?g.nk(this.na()):g.qa(this.width)&&g.qa(this.height)?new g.ve(this.width,this.height):null};
G4.prototype.resume=function(){};
g.B(u4,B4);g.B(v4,B4);var Z4=null,b5={bevel:1,dropshadow:2};g.B(K4,G4);g.h=K4.prototype;g.h.Ak=function(){var a=w4(this,"svg",{width:this.width,height:this.height,overflow:"hidden"}),b=w4(this,"g");this.G=w4(this,"defs");this.C=new F4(b,this);a.appendChild(this.G);a.appendChild(b);this.g=a;this.A&&(this.na().setAttribute("preserveAspectRatio","none"),this.N?this.Dl():this.na().setAttribute("viewBox","0 0 "+(this.A?this.A+" "+this.O:"")))};
g.h.Dl=function(){if(this.ke){var a=this.Yg();if(0==a.width)this.na().style.visibility="hidden";else{this.na().style.visibility="";var b=a.width/this.A,a=a.height/this.O;this.C.na().setAttribute("transform","scale("+b+" "+a+") translate(0 0)")}}};
g.h.setSize=function(a,b){g.mk(this.na(),a,b)};
g.h.Yg=function(){if(!g.Rj)return this.ke?g.nk(this.na()):K4.M.Yg.call(this);var a=this.width,b=this.height,c=g.y(a)&&-1!=a.indexOf("%"),d=g.y(b)&&-1!=b.indexOf("%");if(!this.ke&&(c||d))return null;var e,f;c&&(e=this.na().parentNode,f=g.nk(e),a=(0,window.parseFloat)(a)*f.width/100);d&&(e=e||this.na().parentNode,f=f||g.nk(e),b=(0,window.parseFloat)(b)*f.height/100);return new g.ve(a,b)};
g.h.clear=function(){this.C.clear();g.Te(this.G);this.o={}};
g.h.Tg=function(){var a=this.Yg();K4.M.Tg.call(this);a||this.dispatchEvent("resize");if(this.N){var a=this.width,b=this.height;"string"==typeof a&&-1!=a.indexOf("%")&&"string"==typeof b&&-1!=b.indexOf("%")&&this.J.S(D4(),"tick",this.Dl);this.Dl()}};
g.h.hi=function(){K4.M.hi.call(this);this.N&&this.J.Da(D4(),"tick",this.Dl)};
g.h.R=function(){delete this.o;delete this.G;delete this.C;this.J.dispose();delete this.J;K4.M.R.call(this)};
g.h=N4.prototype;g.h.Ce=null;g.h.pd=null;g.h.cj=!0;g.h.clear=function(){this.Aa.length=0;this.Ia.length=0;this.Md.length=0;delete this.Ce;delete this.pd;delete this.cj;return this};
g.h.dc=function(a){var b=g.Va(this.Aa);if(null==b)throw Error("Path cannot start with lineTo");1!=b&&(this.Aa.push(1),this.Ia.push(0));for(b=0;b<arguments.length;b+=2){var c=arguments[b],d=arguments[b+1];this.Md.push(c,d)}this.Ia[this.Ia.length-1]+=b/2;this.pd=[c,d]};
g.h.close=function(){var a=g.Va(this.Aa);if(null==a)throw Error("Path cannot start with close");4!=a&&(this.Aa.push(4),this.Ia.push(1),this.pd=this.Ce);return this};
g.h.clone=function(){var a=new this.constructor;a.Aa=this.Aa.concat();a.Ia=this.Ia.concat();a.Md=this.Md.concat();a.Ce=this.Ce&&this.Ce.concat();a.pd=this.pd&&this.pd.concat();a.cj=this.cj;return a};
g.h.transform=function(a){if(!this.cj)throw Error("Non-simple path");a.transform(this.Md,0,this.Md,0,this.Md.length/2);this.Ce&&a.transform(this.Ce,0,this.Ce,0,1);this.pd&&this.Ce!=this.pd&&a.transform(this.pd,0,this.pd,0,1);return this};
g.h.isEmpty=function(){return 0==this.Aa.length};
var mpa={BW:"xx",DW:"xy",GW:"yx",HW:"yy"},opa={UQ:"current",OT:"new"};$4.prototype.B=function(){var a=g.u("gapi.config.update");a("googleapis.config/auth/useFirstPartyAuth",!0);var b=this.g.apiaryHost;g.C(g.D(b))||a("googleapis.config/root",(-1==b.indexOf("://")?"//":"")+b);b=this.g.Hm;g.C(g.D(b))||a("googleapis.config/root-1p",(-1==b.indexOf("://")?"//":"")+b);a("googleapis.config/sessionIndex",g.ah("SESSION_INDEX"));g.u("gapi.client.setApiKey")(this.g.innertubeApiKey)};
$4.prototype.o=function(){return{context:g.gq(this.g)}};
$4.prototype.A=function(a,b,c){var d,e=!1;0<c.timeout&&(d=g.oi(function(){e||(e=!0,c.Xc&&c.Xc())},c.timeout));
ipa(this,a,b,function(a){if(!e)if(e=!0,d&&g.qi(d),a)c.Eb&&c.Eb(a);else if(c.onError)c.onError()})};
c5.prototype.ub=function(){return this.A};
g.B(e5,Q4);g.B(k5,g.cc);var Gpa=/[^\d]+$/;s5.prototype.na=function(){return this.C};
s5.prototype.A=function(){};
u5.prototype.clone=function(){return new u5(this.start,this.end)};
g.B(w5,d5);var zpa={CLOSED:"closed",fU:"playerControlShow",sB:"rollOver",wB:"shown"},Bpa={Oz:"anchored",CU:"rect",YU:"shapeless"};g.B(E5,g.bw);g.h=E5.prototype;
g.h.play=function(a){if(a||0==this.g)this.progress=0,this.o=this.A;else if(this.ib())return!1;l5(this);this.startTime=a=(0,g.E)();-1==this.g&&(this.startTime-=this.duration*this.progress);this.endTime=this.startTime+this.duration;this.C=this.startTime;this.progress||this.Tk();this.Qd("play");-1==this.g&&this.Qd("resume");this.g=1;var b=g.ua(this);b in g.aw||(g.aw[b]=this);g.$v();G5(this,a);return!0};
g.h.stop=function(a){l5(this);this.g=0;a&&(this.progress=1);F5(this,this.progress);this.Qd("stop");this.Ri()};
g.h.pause=function(){this.ib()&&(l5(this),this.g=-1,this.Qd("pause"))};
g.h.R=function(){0==this.g||this.stop(!1);this.Qd("destroy");E5.M.R.call(this)};
g.h.destroy=function(){this.dispose()};
g.h.OF=function(a){G5(this,a)};
g.h.wo=function(){this.Qd("animate")};
g.h.Qd=function(a){this.dispatchEvent(new k5(a,this))};
var Ipa={em:1,ex:1},Hpa={cm:1,"in":1,mm:1,pc:1,pt:1};g.B(J5,s5);
J5.prototype.A=function(a,b){var c=x6(a);if(c){var d=T4(c,b);if(!(0>=d.width||0>=d.height)){var e;if(e=(c=(c=Qpa(a))&&c.g?c.g:null)&&c.length?c[0]:null){var f=g.Ef(R4(b,S4(e,new g.zf(e.F,e.G,e.hj,e.A),b.g))),k=d.clone(),c=new g.zf(f.x,f.y,1,1),l=Math.max(k.left+k.width,c.left+c.width),m=Math.max(k.top+k.height,c.top+c.height);k.left=Math.min(k.left,c.left);k.top=Math.min(k.top,c.top);k.width=l-k.left;k.height=m-k.top;var c=a.g,k=p5(k,c.effects),l=t5(this,k.width,k.height),m=q5(c,k.width,k.height,
this.g),d=new g.zf(d.left-k.left,d.top-k.top,d.width,d.height),n=new g.se(f.x-k.left,f.y-k.top);this.B=17*H4(b.g,e.o,e.g?e.g:"xy");e=c.A;var f=a.g,q=this.g&&w6(a),t=q?f.g+1:f.g,q=(f=t?new c5(t,q?f.B:f.D):null)?f.ub()/2:0,t=ppa(d,n),v=this.D(d,e,n,t),x=n.x,n=n.y,A=d.width,G=d.height,I=d.left,d=d.top,K=new N4;O4(K,I+e+q,d+q);"t"==t&&(K.dc(v.start,d+q),K.dc(x,n),K.dc(v.end,d+q));K.dc(I+A-e-q,d+q);P4(K,e,e,-90);"r"==t&&(K.dc(I+A-q,v.start),K.dc(x,n),K.dc(I+A-q,v.end));K.dc(I+A-q,d+G-e-q);P4(K,e,e,0);
"b"==t&&(K.dc(v.end,d+G-q),K.dc(x,n),K.dc(v.start,d+G-q));K.dc(I+e+q,d+G-q);P4(K,e,e,90);"l"==t&&(K.dc(I+q,v.end),K.dc(x,n),K.dc(I+q,v.start));K.dc(I+q,d+e+q);P4(K,e,e,180);K.close();M4(l,K,f,m);if(m=this.na())g.N(m,"annotation-shape"),g.N(m,"annotation-speech-shape"),g.bk(m,k.left,k.top),g.mk(m,k.width,k.height),o5(l,m,c.effects)}}}};
J5.prototype.D=function(a,b,c,d){function e(a,c,d,e){a=Math.min(Math.max(e-2*b,0),a);c=g.oe(c-a/2,d+b,d+e-a-b);return new u5(c,c+a)}
return"t"==d||"b"==d?e(this.B,c.x,a.left,a.width):"l"==d||"r"==d?e(this.B,c.y,a.top,a.height):new u5(0,0)};
K5.prototype.B=function(a,b,c,d){this.g[a]=b?!c:c;a=g.Jb(this.g,function(a){return a});
this.o!=a&&(this.o=a,this.A.Lb(this.C,a,d))};
g.B(L5,E5);L5.prototype.B=g.w;L5.prototype.wo=function(){this.B();L5.M.wo.call(this)};
L5.prototype.Ri=function(){this.B();L5.M.Ri.call(this)};
L5.prototype.Tk=function(){this.B();L5.M.Tk.call(this)};
g.B(M5,d5);g.B(N5,d5);g.B(O5,w5);g.B(P5,w5);g.B(Q5,d5);g.B(R5,d5);g.B(T5,w5);g.B(U5,d5);var Vpa={lm:"click",CLOSE:"close",gS:"hidden",NU:"rollOut",sB:"rollOver",wB:"shown"},Upa={CLOSE:"close",VT:"openUrl",FB:"subscribe"};g.h=X5.prototype;g.h.ul=function(){this.context.A.subscribe("resize",this.Tj,this)};
g.h.na=function(){return this.oa};
g.h.Ch=function(a,b,c,d,e,f,k){this.context.g.S(a,"click",g.va(this.Ok,b,c,d,e,f||[],k||0),this);this.context.g.S(a,"touchstart",g.va(function(){this.pp=!1}),this);
this.context.g.S(a,"touchmove",g.va(function(){this.pp=!0}),this)};
g.h.Ok=function(a,b,c,d,e,f,k){if(this.pp)return!1;k&&(k.stopPropagation(),k.preventDefault());(b=A5(a,b,this.context.videoData.videoId))&&Fpa(this,b,z5(b,a.target),c,d,e,f,a.g);return!1};
g.h.show=function(){this.N=(0,g.E)()};
g.h.Yl=function(){};
g.h.destroy=function(){g.We(this.na())};
g.h.Tj=function(){};
g.B(b6,J5);b6.prototype.D=function(a,b,c,d){function e(a,c,d,e){a=Math.min(Math.max(e-2*b,0),a);c=c<=d+e/2?Math.max(d+e/4-a/2,d+b):Math.min(d+3*e/4-a/2,d+e-a-b);return new u5(c,c+a)}
return"t"==d||"b"==d?e(this.B,c.x,a.left,a.width):"l"==d||"r"==d?e(this.B,c.y,a.top,a.height):new u5(0,0)};
g.B(c6,s5);c6.prototype.A=function(a,b){var c=x6(a);if(c){var d=T4(c,b);if(!(0>=d.width||0>=d.height)){var c=a.g,e=p5(d,c.effects),f=t5(this,e.width,e.height),k=q5(c,d.width,d.height,this.g),d=new g.zf(0,0,d.width,d.height),l=c.A,m=a.g,n=this.g&&w6(a),q=n?m.g+1:m.g,n=(m=q?new c5(q,n?m.B:m.D):null)?m.ub()/2+1:0,d=r5(d,l,n);M4(f,d,m,k);if(k=this.na())g.N(k,"annotation-shape"),g.N(k,"annotation-popup-shape"),g.bk(k,e.left,e.top),g.mk(k,e.width,e.height),o5(f,k,c.effects)}}};
g.B(d6,s5);d6.prototype.A=function(a,b){var c=x6(a);if(c){var d=T4(c,b);if(!(0>=d.width||0>=d.height)){var e=a.g,c=p5(d,e.effects),f=t5(this,c.width,c.height),k=new g.zf(0,0,d.width,d.height),l=e.A,d=new c5(!e.C&&this.g?1:e.C,e.bgColor),m=new u4("#000",0),n=d?d.ub()/2+1:0,k=r5(k,l,n);M4(f,k,d,m);f=this.na();g.N(f,"annotation-shape");e=e.o;g.pk(f,this.g?Math.max(e,.9):e);g.bk(f,c.left,c.top);g.mk(f,c.width,c.height)}}};
g.B(e6,X5);e6.prototype.ul=function(){e6.M.ul.call(this);var a=this.annotation.data;"start_ms"in a&&"end_ms"in a&&Y5(this,this.annotation.data.start_ms,this.annotation.data.end_ms,this.annotation.id,this.show,this.Yl)};
g.B(f6,L5);f6.prototype.B=function(){this.element.style.left=Math.round(this.o[0])+"px";this.element.style.top=Math.round(this.o[1])+"px"};
var kqa={collaborator:U5,donation:T5,episode:M5,movie:M5,playlist:R5,poll:Q5,productListing:P5,simple:w5,tip:O5,video:N5};g6.prototype.o=function(a,b){var c=g.mf(b.target,"label");c&&g.O(c,"iv-card-poll-choice-focused",a)};
g6.prototype.F=function(a,b){var c=g.nf(b.target,"iv-card-poll");if(c)if(a.A)g.L("iv-card-sign-in-button",c).click();else{var d=(0,window.parseInt)(S5(b.target,"pollChoiceIndex"),10);if(null==a.g)a.choices[d].count++,a.g=d;else if(a.g!=d){var e=a.choices[a.g];e.count=Math.max(e.count-1,0);a.choices[d].count++;a.g=d}else e=a.choices[a.g],e.count=Math.max(e.count-1,0),a.g=null;i6(a,c);g.Qi(this.g.videoData.sa,{wc:{action_poll_vote:1},Ib:{poll_id:a.id,index:d,session_token:a.G}});c={};c["link-id"]=d;
Z5(this.g.logger,a.Mb,void 0,c,a.o.click,5);H5(a.C)}};
g6.prototype.D=function(a){var b=g.u("yt.www.ypc.bootstrap.api.loadOffersForInnertubeRequestParams");b&&(b=g.va(b,a.J,a.B));r6(this,a,!0,b)};
g6.prototype.G=function(a){var b=g.u("yt.www.ypc.bootstrap.api.loadOffers");b&&(b=g.va(b,a.J,a.B,a.L));r6(this,a,!1,b)};
var vqa={mW:"video_relative",gU:"player_relative"},uqa={Rz:"branding",sQ:"card",DR:"drawer",iS:"highlight",dT:"marker",vU:"promotion",TEXT:"text",xW:"widget"},O6={Oz:"anchored",Rz:"branding",CHANNEL:"channel",TQ:"cta",jS:"highlightText",JS:"label",PLAYLIST:"playlist",qU:"popup",jV:"speech",FB:"subscribe",FV:"title",VIDEO:"video",rW:"vote",uW:"website"};t6.prototype.showLinkIcon=function(){return v6(this,function(a){return null!=a.url&&a.url.showLinkIcon})};
var Iqa={IMG:" ",BR:"\n"},Hqa={SCRIPT:1,STYLE:1,HEAD:1,IFRAME:1,OBJECT:1};z6.prototype.show=function(){this.isVisible=!0;this.g&&(this.g.show(),this.A.subscribe("resize",this.D,this),this.A.subscribe("onVideoAreaChange",this.B,this))};
z6.prototype.destroy=function(){if(this.g){bqa(this);var a=this.g;g.Vv(a.F);a.vo.dispose();a.H.dispose();a.o&&g.We(a.o);a.A&&a.A.na()&&g.We(a.A.na())}A6(this)};
z6.prototype.B=function(){D6(this.g)};
z6.prototype.D=function(){D6(this.g)};
g.h=cqa.prototype;g.h.fy=function(){this.N||(this.B&&g.R(this.B,!0),this.C&&g.R(this.C,!0),this.A&&(this.A.g=!0,g.pk(this.o,E6(this)?1:0),this.A.A(this.g,C6(this))),this.H.isActive()&&this.H.stop(),this.N=!0,this.J=Uoa(this.F,g.Yl(this.D),function(a){this.vo.stop();this.Of(a)}))};
g.h.Of=function(){this.N&&(this.P?this.H.start():this.Jt(),this.A&&(this.A.g=!1,g.pk(this.o,E6(this)?1:0),this.A.A(this.g,C6(this))),this.N=!1,this.J&&(this.F.Da(this.J),this.J=null))};
g.h.Jt=function(){this.B&&g.R(this.B,!1);this.C&&g.R(this.C,!1)};
g.h.CH=function(a){this.ba=a;this.vo.$g()};
g.h.mN=function(){var a=this.ba,b=new g.se(a.clientX,a.clientY),c=g.fk(this.D.getRootNode()),d=a6(c,this.O),c=(this.C&&g.qk(this.C)||this.B&&g.qk(this.B))&&a6(c,this.P);d&&d.contains(b)||c&&c.contains(b)?this.fy():this.Of(a)};
g.h.show=function(){var a=this.g.g,a=(a&&0==a.o||"title"==this.g.style||"highlightText"==this.g.style?!1:!0)&&!this.A,b=!this.o,c="widget"==this.g.type;if(a){var d=C6(this),e=null;"highlight"==this.g.type||"label"==this.g.style?e=new d6:"popup"==this.g.style?e=new c6:"anchored"==this.g.style?e=new J5:"speech"==this.g.style&&(e=new b6);e&&(e.A(this.g,d),this.A=e,d=e.na())&&(g.R(d,!1),g.N(d,"annotation-type-"+this.g.type.toLowerCase()),this.$(d))}if(b){d=["annotation"];"highlightText"!=this.g.style||
d.push("annotation-no-mouse");d.push("annotation-type-"+this.g.type.toLowerCase());this.o=g.M("DIV",d);g.R(this.o,!1);this.g.B&&(this.G=g.M("DIV","inner-text"),"label"==this.g.style&&(g.N(this.G,"label-text"),this.G.style.backgroundColor=this.g.g.bgColor),g.ef(this.G,this.g.B),this.o.appendChild(this.G));g.ch(this.o,"annotation_id",this.g.id);this.$(this.o);dqa(this,this.o);if(w6(this.g)&&this.g.showLinkIcon()){if(e=u6(this.g))d=this.o,e=new g.jg(U4(e)),d.title=e.o+e.A;this.C=g.M("SPAN","annotation-link-icon");
g.R(this.C,!1);this.o.appendChild(this.C)}eqa(this);w6(this.g)||(this.o.style.cursor="default")}c&&("subscribe"==this.g.style?g.L("yt-uix-subscription-button",this.o)||y6(this.o,this.g.htmlBlob):this.g.htmlBlob&&y6(this.o,this.g.htmlBlob));if(a||b){a:{a=this.g.o.g;if(a.length&&(a=x5(a[0]))){a=a.H;break a}a=0}this.o&&(this.o.style.zIndex=a);this.A&&this.A.na()&&(this.A.na().style.zIndex=a)}g.R(this.o,!0);g.pk(this.o,E6(this)?1:0);D6(this);this.A&&this.A.na()&&g.R(this.A.na(),!0)};
g.B(F6,e6);g.h=F6.prototype;g.h.show=function(){this.isActive||(F6.M.show.call(this),this.G||(gqa(this),this.G=!0),g.R(this.na(),!0),this.annotation&&this.annotation.Mb&&L6(this.context.logger,this.annotation.Mb),g.kh(this.na(),"iv-promo-inactive"),this.na().removeAttribute("aria-hidden"),this.isActive=!0,G6(this),iqa(this),jqa(this,this.D))};
g.h.Yl=function(){this.isActive&&(g.N(this.na(),"iv-promo-inactive"),this.isActive=!1,this.na().setAttribute("aria-hidden",!0))};
g.h.Ok=function(a,b,c,d,e,f,k){return this.B?!1:F6.M.Ok.call(this,a,b,c,d,e,f,k)};
g.h.Gn=function(a,b){b.stopPropagation();iqa(this);jqa(this,a);this.$c.focus()};
g.h.oD=function(a){this.F=!0;this.Gn(500,a)};
g.h.nD=function(){this.F=!1;hqa(this)};
g.h.pN=function(a){a.stopPropagation();this.Yl();S6(this.context.logger,this.annotation.Mb)};
g.h.dD=function(a){a.stopPropagation();G6(this);this.B=!0;g.N(this.na(),"iv-promo-collapsed-no-delay");this.C.start();S6(this.context.logger,this.annotation.Mb)};
g.h.destroy=function(){this.C.dispose();F6.M.destroy.call(this)};
g.B(H6,e6);g.h=H6.prototype;g.h.yK=function(a,b,c,d){this.A.stop();if(!this.B){var e=g.nk(a);this.g||(g.lk(a,e.width),g.lk(b,e.width));g.bk(c,e.width,e.height-Math.max(Math.min(e.height,d)/2+Math.round(10),20));this.B=!0;g.R(a,!0);this.C=new g.Ld(function(){g.N(this.na(),"iv-branding-active")},0,this);
this.C.start()}};
g.h.aE=function(a,b){g.kh(this.na(),"iv-branding-active");this.D=new g.Ld((0,g.z)(function(){g.R(a,!1);this.g||g.lk(b,0)},this),250);
this.D.start();this.B=!1};
g.h.show=function(){if(!this.isActive){H6.M.show.call(this);if(!this.F){g.N(this.na(),"iv-branding");var a=this.annotation.data;this.G=a.image_width;this.o=g.M("IMG",{src:a.image_url,"class":"branding-img iv-click-target",width:a.image_width,height:a.image_height});g.R(this.o,!1);var b=g.M("DIV","branding-img-container",this.o);this.na().appendChild(b);var c=g.M("DIV","iv-branding-context-name");g.ef(c,a.channel_name);var d=g.M("DIV","iv-branding-context-subscribe");if(a.use_standalone_subscribe_button){if(b=
a.standalone_subscribe_button_data)this.g=new g.uu(b.subscribeText,b.unsubscribeText,!!b.enabled,a.channel_id,!!b.subscribed,b.feature,a.session_data.itct,this.H.o),this.g.Ha(d)}else this.annotation.htmlBlob?y6(d,this.annotation.htmlBlob):a.num_subscribers&&g.ef(d,a.num_subscribers);b=g.M("DIV","iv-branding-context-subscribe-caret");c=g.M("DIV","branding-context-container-inner",b,c,d);g.R(c,!1);d=g.M("DIV","branding-context-container-outer",c);g.Vj(d,"right",this.G+"px");this.na().appendChild(d);
var e=u6(this.annotation);e&&this.Ch(this.o,e,this.annotation.id,a.session_data,this.annotation.Mb);this.A=new g.Ld(g.va(this.aE,c,d),500,this);this.context.g.S(this.na(),"mouseover",(0,g.z)(this.yK,this,c,d,b,a.image_height));this.context.g.S(this.na(),"mouseout",(0,g.z)(this.A.start,this.A,void 0));this.F=!0}L6(this.context.logger,this.annotation.Mb);g.R(this.na(),!0);this.isActive=!0;if(this.o){var a=this.o,f,b=g.ok(a).width,c=g.qa(void 0)?void 0:b;f=f||0;g.bk(a,c);f=new f6(a,[c,a.offsetTop],[c-
b-f,a.offsetTop],200,Ypa);this.context.B.S(f,"begin",g.va(g.R,a,!0));f.play()}}};
g.h.Yl=function(){this.isActive&&(g.R(this.na(),!1),this.isActive=!1)};
g.h.destroy=function(){this.g&&(this.g.dispose(),this.g=null);H6.M.destroy.call(this)};
g.B(I6,X5);g.h=I6.prototype;g.h.isAvailable=function(){var a;if(a=!!this.o.length)(a=this.X.getRootNode())?(a=g.nk(a),a=177<a.width&&177<a.height):a=!1;return a};
g.h.VB=function(){this.ga&&M6(this,"YOUTUBE_DRAWER_AUTO_OPEN")};
g.h.vC=function(){(this.ga=this.B)&&this.Zj()};
g.h.nN=function(){M6(this,"YOUTUBE_DRAWER_AUTO_OPEN")};
g.h.Zj=function(){this.B&&(g.yv(this.da),g.kh(this.context.o.getRootNode(),"ytp-iv-drawer-open"),this.B=!1,m4(this.X),this.F&&this.F.stop(),this.F=new g.Ld(function(){this.V&&(this.V.focus(),this.V=null)},330,this),this.F.start())};
g.h.Tj=function(){var a=this.isAvailable();g.R(this.na(),a);g.O(this.context.o.getRootNode(),"ytp-iv-drawer-enabled",a);m4(this.X)};
g.h.destroy=function(){var a=g.Ml(this.X).o;a&&a.Kp(!1,void 0);this.X.getRootNode().removeChild(this.D);g.Ii(this.ca);g.Gk(this.Va);this.O&&this.O.dispose();this.F&&this.F.dispose();I6.M.destroy.call(this)};
g.h.oN=function(a){this.Nm.start();a.preventDefault();a=a||window.event;var b=0;"MozMousePixelScroll"==a.type?b=0==(a.axis==a.HORIZONTAL_AXIS)?a.detail:0:window.opera?b=a.detail:b=0==a.wheelDelta%120?"WebkitTransform"in window.document.documentElement.style?window.chrome&&0==window.navigator.platform.indexOf("Mac")?a.wheelDeltaY/-30:a.wheelDeltaY/-1.2:a.wheelDelta/-1.6:a.wheelDeltaY/-3;if(a=b)this.A.scrollTop+=a};
g.h.mw=function(a){if(!g.ih(this.X.getRootNode(),"ytp-cards-teaser-shown")){this.g!=a&&(this.g=a,J6(this));if(g.qk(this.na())){var b;2==this.context.o.Xa()?b=1==((0,window.isNaN)(void 0)?this.context.o.rx():void 0):(b=(0,window.isNaN)(void 0)?this.context.o.nj():void 0,b=1==b||0==b&&0===this.context.o.getCurrentTime());if(b&&a.Ub.teaserDurationMs){b={teaserText:a.Ub.teaserText,durationMs:a.Ub.teaserDurationMs};var c=g.Ml(this.X).o;c&&c.Kp(!0,b)}}this.fa.isActive()||((!this.B||!this.Nm.isActive()&&
this.Mk)&&tqa(this,a),this.fa.start(910+a.Ub.teaserDurationMs))}};
g.h.pK=function(a){this.B||(this.g=a,J6(this),tqa(this,a),M6(this,"YOUTUBE_DRAWER_AUTO_OPEN",!1,a))};
g.h.nC=function(){this.B&&(K6(this.context.logger,this.L,4,N6(this).o.close),this.G&&H5(this.G),this.Zj())};
g.h.AC=function(){g.O(this.D,"iv-drawer-scrolled",0<this.A.scrollTop)};
g.h.iF=function(){var a=N6(this);T6(this.context.logger,8,a.Mb,a.o.CK);a&&$5([a.F,a.D])};
g.h.hF=function(a){var b=N6(this);this.g?a?(a=this.context.logger,T6(a,9,b.Mb,b.o.Zo),a.X.Eg(4,void 0),H5(b.F)):(a=this.context.logger,T6(a,12,b.Mb,b.o.Zo),a.X.Eg(4,void 0),H5(b.D)):(a=this.context.logger,K6(a,this.L,12,b.o.Zo),a.X.Eg(4,void 0),this.$&&H5(this.$))};
var dsa=["ytp-ce-top-left-quad","ytp-ce-top-right-quad","ytp-ce-bottom-left-quad","ytp-ce-bottom-right-quad"];g.B(V6,g.ju);V6.C="AnnotationsModule";V6.A=function(a){switch(a.type){case "branding":case "promotion":return!0}return!1};
V6.B=function(a){return"card"==a.type||"drawer"==a.type};
V6.o=function(){var a=g.M("DIV",["annotation","annotation-type-custom"]);g.R(a,!1);return a};
V6.g=function(a){switch(a){case "annotation-editor":case "live-dashboard":return!0}return!1};
g.h=V6.prototype;g.h.FM=function(a,b){if(!V6.g(g.U(this.g).o))return null;switch(a){case "loadCustomAnnotationsXml":var c=g.Rv(b);c&&X6(this,c);return!0;case "removeCustomAnnotationById":return b&&this.o&&(mqa(this.o,b),m4(this.g)),!0}return null};
g.h.GM=function(){return V6.g(g.U(this.g).o)?["loadCustomAnnotationsXml","removeCustomAnnotationById"]:[]};
g.h.Co=function(){if(this.C){var a=g.fZ(g.Yl(this.g),!0);g.mk(this.C.element,a.width,a.height);g.bk(this.C.element,a.left,a.top)}if(this.o){var b=k4(this.g.app.B.J),a=this.o,b=b.width;g.O(a.D,"iv-drawer-small",426>=b);g.O(a.D,"iv-drawer-big",1280<=b)}};
g.h.fI=function(a){g.S(a.state,2)&&(this.tj()&&this.Qx()&&2!=this.g.Xa()&&this.Lp(!1),this.Kp(!1))};
g.h.load=function(){V6.M.load.call(this);this.B.show();this.G++;var a=this.g.getVideoData(),b=a.videoId,c=(0,g.z)(this.TG,this,b,this.G);g.lq()&&(c=Qqa(this,c));c={format:"XML",gd:c,wc:{}};a.isPharma&&(c.wc.pharma="1");c.method="POST";c.withCredentials=!0;var d=g.U(this.g);"gaming"==d.o&&(c.wc.gaming="1");(b=d.F.get(b))&&Rqa(c,b);a.sa&&(b=b&&b.fg,a.bl&&!b||g.Pi(a.sa,c));g.tm(this.g,this.C.element,5);this.Co()};
g.h.unload=function(){Aqa(this.ka,{"iv-event":1});g.qm(this.g,"annotations_module");g.Gb(this.A,function(a){a.destroy()});
g.Gb(this.H,function(a){a.destroy()});
this.F=null;this.o&&(this.o.destroy(),this.o=null,m4(this.g));this.A={};this.H={};this.B.ma();V6.M.unload.call(this);this.C.detach()};
g.h.TG=function(a,b,c){if(!Mqa(this,b,a)&&(a=g.ni(c)&&c.responseXML?c.responseXML:null)){X6(this,a);g.N(this.g.getRootNode(),"iv-module-loaded");a=[];for(var d in this.A){b=this.A[d].annotation;if(b.o)if(c=b.o,c.g.length)if(c=c.g[0].o||c.g[0].g||c.g[0].A,!c||2>c.length)c=null;else{var e=c.length-1;c=0>=c[0].t&&0>=c[e].t?null:{start:c[0].t,end:c[e].t}}else c=null;else c=null;if(e=c)if(c=1E3*e.start,e=1E3*e.end,0==c&&(c++,e++),!(e<c)){var f={id:d,namespace:"annotations_module"};"marker"==b.type&&(f.style=
"ytp-chapter-marker",f.tooltip=b.B,f.visible=!0);b=new g.Am(c,e,f);a.push(b)}}g.nm(this.g,a)}};
g.h.Gv=function(a){a==this.g.getVideoData().videoId&&(this.loaded?Sqa(this):this.load())};
g.h.Rx=function(a){a=a.getId();var b=this.A[a];b&&!b.C&&(b=b.annotation,Vqa(this,a),L6(this.ka,b.Mb))};
g.h.Sx=function(a){Y6(this,a.getId())};
g.h.Ht=function(a){if(a){a.isVisible=!1;if(a.g){bqa(a);var b=a.g;b.o&&g.R(b.o,!1);b.A&&b.A.na()&&g.R(b.A.na(),!1);b.L&&(b.F.Da(b.L),b.L=null)}Z6(this,"shown",!1,a.annotation.id);this.ck(a.annotation,"hidden")}};
g.h.Aw=function(a){a&&(a.show(),Z6(this,"shown",!0,a.annotation.id),this.ck(a.annotation,"shown"))};
g.h.fJ=function(a,b,c){var d=this.A[a];if(d&&b.value!=c){b.value=c;var e=!1;Ppa(d.annotation,function(a){e|=a.value});
Wqa(this,a,b,e)}};
g.h.PF=function(a){if(a&&a.id){var b=u6(a);if(b){var c=U4(b);if(c){var d=(0,g.z)(this.ck,this,a,"click"),e=this.g.getVideoData();if("new"==z5(c,b.target)||Xqa(this,b,e.videoId))d(),d=null;Z5(this.ka,a.Mb,d)}}}};
g.h.ck=function(a,b){Opa(a,function(c){if(c.trigger==b&&"openUrl"==c.type&&c.url){var d=this.g.getVideoData(),e;if(!(e=!Xqa(this,c.url,d.videoId))){e=Bqa(c.url);var f=Cqa(c.url);if(e){if(d.videoId==e)this.g.Ic(f||0);else{var k=W6(this).o;g.E2(k.app,e,void 0,void 0,void 0,void 0);f&&g.lm(W6(this).o)&&W6(this).o.Ic(f)}e=!0}else e=!1;e=!e}e&&(d=A5(c.url,a.id,d.videoId,g.U(this.g)))&&(this.g.kd(),e=z5(d,c.url.target),c=d,d="current"==e?"_top":void 0,e=g.Kh(c),f=null,"ei"in e&&(f={ei:e.ei},c=g.hg(c,"ei")),
g.iv(c,d,f))}},this)};
g.h.aH=function(){Z6(this,"playerControlShow",!1)};
g.h.II=function(){Z6(this,"playerControlShow",!0)};
g.h.HM=function(a){Z6(this,"rollOver",!0,a.id)};
g.h.Of=function(a){Z6(this,"rollOver",!1,a.id)};
g.h.pG=function(a){a&&a.id&&(this.A[a.id].C=!0,Y6(this,a.id),S6(this.ka,a.Mb),this.ck(a,"close"),Z6(this,"closed",!0,a.id))};
g.h.tj=function(){return!!this.o&&this.o.isAvailable()};
g.h.Qx=function(){this.tj();return!!this.o&&this.o.B};
g.h.Lp=function(a,b,c){this.tj();this.o&&(b=!!b,a?g.p(c)?M6(this.o,c,b):M6(this.o,"YOUTUBE_DRAWER_AUTO_OPEN",b):this.o.Zj())};
g.h.Kp=function(a,b){this.g.Ra(a?"cardsteasershow":"cardsteaserhide",b)};
g.h.R=function(){g.U(this.g).F.Ka("vast_info_card_add",this.Gv,this);this.g.removeEventListener("crn_annotations_module",this.Rx,this);this.g.removeEventListener("crx_annotations_module",this.Sx,this);g.kh(this.g.getRootNode(),"ytp-iv-drawer-open");for(var a=this.L,b=0,c=a.length;b<c;b++)g.nq(a[b]);this.L.length=0;V6.M.R.call(this)};
g.B(a7,g.Dv);g.h=a7.prototype;g.h.getHours=function(){return this.date.getHours()};
g.h.getMinutes=function(){return this.date.getMinutes()};
g.h.getSeconds=function(){return this.date.getSeconds()};
g.h.getUTCHours=function(){return this.date.getUTCHours()};
g.h.getUTCMinutes=function(){return this.date.getUTCMinutes()};
g.h.yk=function(a,b){var c=g.Dv.prototype.yk.call(this,a);return a?c+" "+g.Ka(this.getHours(),2)+":"+g.Ka(this.getMinutes(),2)+":"+g.Ka(this.getSeconds(),2)+(b?g.Ev(this):""):c+"T"+g.Ka(this.getHours(),2)+g.Ka(this.getMinutes(),2)+g.Ka(this.getSeconds(),2)+(b?g.Ev(this):"")};
g.h.toString=function(){return this.yk()};
g.h.clone=function(){var a=new a7(this.date);a.fk=this.fk;a.hk=this.hk;return a};
g.B(c7,g.ju);g.h=c7.prototype;g.h.load=function(){c7.M.load.call(this);this.g.addEventListener("resize",this.Np,this);var a=U6(g.U(this.g).o)?function(){}:(0,g.z)(this.IC,this);
era(this,a)};
g.h.unload=function(){d7(this,null);this.g.removeEventListener("resize",this.Np,this);this.B&&(this.B.abort(),this.B=null);c7.M.unload.call(this)};
g.h.IM=function(a,b){if(!U6(g.U(this.g).o))return null;var c;switch(a){case "loadCustomEndscreenRenderer":return c=Eqa(b,"new"),d7(this,c),!0;case "loadCustomEndscreenJson":return(c=Fqa(b))&&d7(this,c),!0;case "unloadCustomEndscreenJson":return d7(this,null),!0}return null};
g.h.IC=function(){var a=this.g.getVideoData(),b=a.videoId;this.B&&this.B.abort();b={method:"POST",gd:(0,g.z)(this.PG,this,b),wc:{v:b},withCredentials:!0};this.P&&(b.wc.r=1);"gaming"==g.U(this.g).o&&(b.wc.gaming="1");this.N&&(b.wc.ptype="embedded");var c=this.g.getVideoData().Uw;c&&(b.Ib={ad_tracking:c});if(a=g.wt(a))this.B=g.Pi(a,b)};
g.h.PG=function(a,b){var c=this.B=null;if(200==b.status){var d=b.responseText;")]}"==d.substring(0,3)&&(d=d.substring(3),c=JSON.parse(d),c=this.P?Eqa(c,this.N?"new":"current"):Fqa(c))}d7(this,c)};
g.h.Np=function(){if(this.o&&this.o.elements){var a=this.g.Ex(),b=a.width,c=a.height;if(0!=b&&0!=c){var d=b/c,e;e=k4(this.g.app.B.J).width;for(var f=null,k=-1,l=0;l<g.s3.length;l++){var m=Math.abs(e-g.s3[l]);if(-1==k||f>=m)k=l,f=m}e=g.t3[k];for(f=0;f<this.o.elements.length;++f){var l=this.o.elements[f].id,k=this.A[l],m=this.D[l],n=m.width*d/m.aspectRatio,l=Math.round(n*c),q=a.left+Math.round(m.left*b),t=a.top+Math.round(m.top*c);g.mk(k.element,Math.round(m.width*b),l);g.bk(k.element,q,t);g.lh(k.element,
dsa);q=m.left+m.width/2;m=m.top+n/2;g.N(k.element,.5>=q&&.5>=m?"ytp-ce-top-left-quad":.5<q&&.5>=m?"ytp-ce-top-right-quad":.5>=q&&.5<m?"ytp-ce-bottom-left-quad":"ytp-ce-bottom-right-quad");g.lh(k.element,g.t3);g.N(k.element,e);(k=g.De("div","ytp-ce-expanding-overlay-body",k.element)[0])&&g.Vj(k,"height",l+"px")}}}};
g.h.Tx=function(a){if(this.o)if("ytp-ce-in-endscreen"==a.getId())this.F=!1,this.o.skip&&1==this.g.nj()?(a=this.g,(a=g.Wl(a.app,a.playerType||1))&&g.OU(a,!0),this.g.Ic(window.Infinity),this.F=!0):(h7(this,this.o.impressionUrls),$5([this.o.visualElement]));else if(!this.F){a=a.getId().substring(15);var b=this.A[a],c=this.D[a];g.N(b.element,"ytp-ce-element-show");b.element.removeAttribute("aria-hidden");h7(this,c.impressionUrls);$5([c.visualElement]);g.U(this.g).ob&&this.g.ya("endscreenelementshown",
a)}};
g.h.Ux=function(a){if("ytp-ce-in-endscreen"!=a.getId()&&!this.F){a=a.getId().substring(15);var b=this.A[a];g.kh(b.element,"ytp-ce-element-show");b.element.setAttribute("aria-hidden",!0);g.U(this.g).ob&&this.g.ya("endscreenelementhidden",a)}};
g.h.Zu=function(a,b){if(a.targetUrl&&(!b||"keypress"!=b.type||13==b.keyCode)){for(var c=b.target;c&&!g.ih(c,"ytp-ce-element");){g.ih(c,"subscribe-label")&&i7(this,a);if(g.ih(c,"ytp-ce-channel-subscribe"))return;c=g.bf(c)}if(!c||g.ih(c,"ytp-ce-element-hover"))b.preventDefault(),b.stopPropagation(),b.ctrlKey||b.metaKey||"new"==a.dj?(i7(this,a),this.cw(),this.g.kd(),g.iv(a.targetUrl,void 0,a.hd)):(c=(0,g.z)(this.cw,this,g.va(g.hv,a.targetUrl,a.hd)),i7(this,a,c))}};
g.h.Mp=function(a,b){g.ih(a.element,"ytp-ce-element-hover")||("VIDEO"==b.type||"PLAYLIST"==b.type?g.N(a.element,"ytp-ce-element-hover"):(new g.Ld(function(){g.N(a.element,"ytp-ce-element-hover")},200)).start(),h7(this,b.Kt),g7(this,b.id,!0),bra(this,a,!0))};
g.h.Vx=function(a,b){g.kh(a.element,"ytp-ce-element-hover");g.kh(a.element,"ytp-ce-force-expand");g7(this,b.id,!1);bra(this,a,!1)};
g.h.cw=function(a){this.g.Eg(17,a)};
g.h.R=function(){this.g.removeEventListener("crn_creatorendscreen",this.Tx,this);this.g.removeEventListener("crx_creatorendscreen",this.Ux,this);c7.M.R.call(this)};g.B(o7,g.cq);g.B(p7,g.cq);g.B(hra,g.cq);g.B(q7,g.cq);
var esa=new g.dq("subscription-subscribe",p7),fsa=new g.dq("subscription-subscribe-loading",o7),gsa=new g.dq("subscription-subscribe-loaded",o7),hsa=new g.dq("subscription-subscribe-success",hra),isa=new g.dq("subscription-unsubscribe",q7),jsa=new g.dq("subscription-unsubscirbe-loading",o7),ksa=new g.dq("subscription-unsubscribe-loaded",o7),lsa=new g.dq("subscription-unsubscribe-success",o7),msa=new g.dq("subscription-enable-ypc",o7),nsa=new g.dq("subscription-disable-ypc",o7);var s7={},osa="ontouchstart"in window.document;g.Fk(window.document,"blur",t7,!0);g.Fk(window.document,"change",t7,!0);g.Fk(window.document,"click",t7);g.Fk(window.document,"focus",t7,!0);g.Fk(window.document,"mouseover",t7);g.Fk(window.document,"mouseout",t7);g.Fk(window.document,"mousedown",t7);g.Fk(window.document,"keydown",t7);g.Fk(window.document,"keyup",t7);g.Fk(window.document,"keypress",t7);g.Fk(window.document,"cut",t7);g.Fk(window.document,"paste",t7);
osa&&(g.Fk(window.document,"touchstart",t7),g.Fk(window.document,"touchend",t7),g.Fk(window.document,"touchcancel",t7));g.h=u7.prototype;g.h.Dd=function(a){return g.nf(a,Z(this))};
g.h.unregister=function(){g.Ii(this.H);this.H.length=0;g.Eq(this.G);this.G.length=0};
g.h.init=g.w;g.h.dispose=g.w;g.h.addBehavior=function(a,b,c){c=Z(this,c);var d=(0,g.z)(b,this);a in s7||(s7[a]=new g.Ff);s7[a].subscribe(c,d);this.F[b]=d};
g.h.removeBehavior=function(a,b,c){if(a in s7){var d=s7[a];g.Gf(d,Z(this,c),this.F[b]);0>=d.sc()&&(d.dispose(),delete s7[a])}delete this.F[b]};
g.h.Pg=function(a,b,c){var d=this.wa(a,b);if(d&&(d=g.u(d))){var e=g.ob(arguments,2);g.pb(e,0,0,a);d.apply(null,e)}};
g.h.wa=function(a,b){return g.dh(a,b)};g.B(x7,u7);g.la(x7);g.h=x7.prototype;g.h.register=function(){this.addBehavior("click",this.uz);this.addBehavior("keydown",this.ju);this.addBehavior("keypress",this.ku);v7(this,"page-scroll",this.rD)};
g.h.unregister=function(){this.removeBehavior("click",this.uz);this.removeBehavior("keydown",this.ju);this.removeBehavior("keypress",this.ku);D7(this);this.o={};x7.M.unregister.call(this)};
g.h.uz=function(a){a&&!a.disabled&&(ora(this,a),this.click(a))};
g.h.ju=function(a,b,c){if(!(c.altKey||c.ctrlKey||c.shiftKey)&&(b=C7(this,a))){var d=function(a){var b="";a.tagName&&(b=a.tagName.toLowerCase());return"ul"==b||"table"==b},e;
d(b)?e=b:e=n7(b,d);if(e){e=e.tagName.toLowerCase();var f;"ul"==e?f=this.rF:"table"==e&&(f=this.qF);f&&jra(this,a,b,c,(0,g.z)(f,this))}}};
g.h.rD=function(){var a=this.o;if(0!=g.Kb(a))for(var b in a){var c=a[b],d=g.nf(c.activeButtonNode||c.parentNode,Z(this));if(void 0==d||void 0==c)break;B7(this,d,c,!0)}};
g.h.ku=function(a,b,c){c.altKey||c.ctrlKey||c.shiftKey||(a=C7(this,a),b7(a)&&c.preventDefault())};
g.h.qF=function(a,b,c){var d=y7(this,b);if(d){var e=gra("table",b);b=g.De("td",null,e);d=lra(d,b,g.De("td",null,gra("tr",e)).length,c);-1!=d&&(kra(this,a,b[d]),c.preventDefault())}};
g.h.rF=function(a,b,c){if(40==c.keyCode||38==c.keyCode){var d=y7(this,b);d&&(b=(0,g.Ye)(g.De("li",null,b),b7),kra(this,a,b[lra(d,b,1,c)]),c.preventDefault())}};
g.h.wz=function(a){if(a){var b=C7(this,a);if(b){a.setAttribute("aria-pressed","true");a.setAttribute("aria-expanded","true");b.originalParentNode=b.parentNode;b.activeButtonNode=a;b.parentNode.removeChild(b);var c;this.wa(a,"button-has-sibling-menu")?c=a.parentNode:c=mra(this,a);c.appendChild(b);b.style.minWidth=a.offsetWidth-2+"px";var d=A7(this,a);d&&c.appendChild(d);(c=!!this.wa(a,"button-menu-fixed"))&&(this.o[k7(a).toString()]=b);B7(this,a,b,c);g.Li("yt-uix-button-menu-before-show",a,b);g.uv(b);
d&&g.uv(d);this.Pg(a,"button-menu-action",!0);g.N(a,Z(this,"active"));b=(0,g.z)(this.vz,this,a,!1);d=(0,g.z)(this.vz,this,a,!0);c=(0,g.z)(this.KK,this,a,void 0);this.g&&C7(this,this.g)==C7(this,a)||D7(this);g.Ki("yt-uix-button-menu-show",a);g.Gk(this.A);this.A=[g.Fk(window.document,"click",d),g.Fk(window.document,"contextmenu",b),g.Fk(window,"resize",c)];this.g=a}}};
g.h.KK=function(a,b){var c=C7(this,a);if(c){b&&(b instanceof g.ge?c.innerHTML=g.he(b):g.ef(c,b));var d=!!this.wa(a,"button-menu-fixed");B7(this,a,c,d)}};
g.h.Uc=function(a){return g.L(Z(this,"content"),a)};
g.h.vz=function(a,b,c){c=g.Ik(c);var d=g.nf(c,Z(this));if(d){var d=C7(this,d),e=C7(this,a);if(d==e)return}var d=g.nf(c,Z(this,"menu")),e=d==C7(this,a),f=g.ih(c,Z(this,"menu-item")),k=g.ih(c,Z(this,"menu-close"));if(!d||e&&(f||k))z7(this,a),d&&b&&this.wa(a,"button-menu-indicate-selected")&&((a=g.L(Z(this,"content"),a))&&g.ef(a,m7(c)),nra(this,d,c))};
g.h.isToggled=function(a){return g.ih(a,Z(this,"toggled"))};
g.h.click=function(a){if(C7(this,a)){var b=C7(this,a);if(b){var c=g.nf(b.activeButtonNode||b.parentNode,Z(this));c&&c!=a?(z7(this,c),g.oi((0,g.z)(this.wz,this,a),1)):b7(b)?z7(this,a):this.wz(a)}a.focus()}this.Pg(a,"button-action")};g.B(E7,u7);g.h=E7.prototype;g.h.Dd=function(a){var b=u7.prototype.Dd.call(this,a);return b?b:a};
g.h.register=function(){v7(this,"yt-uix-kbd-nav-move-out-done",this.df)};
g.h.dispose=function(){E7.M.dispose.call(this);F7(this)};
g.h.wa=function(a,b){var c=E7.M.wa.call(this,a,b);return c?c:(c=E7.M.wa.call(this,a,"card-config"))&&(c=g.u(c))&&c[b]?c[b]:null};
g.h.show=function(a){var b=this.Dd(a);if(b){g.N(b,Z(this,"active"));var c=pra(this,a,b);if(c){c.cardTargetNode=a;c.cardRootNode=b;qra(this,a,c);var d=Z(this,"card-visible"),e=this.wa(a,"card-delegate-show")&&this.wa(b,"card-action");this.Pg(b,"card-action",a);this.A=a;g.vv(c);g.oi((0,g.z)(function(){e||(g.uv(c),g.Ki("yt-uix-card-show",b,a,c));rra(c);g.N(c,d);g.Ki("yt-uix-kbd-nav-move-in-to",c)},this),10)}}};
g.h.df=function(a){if(a=this.Dd(a)){var b=g.Ce(Z(this,"card")+k7(a));b&&(g.kh(a,Z(this,"active")),g.kh(b,Z(this,"card-visible")),g.vv(b),this.A=null,b.cardTargetNode=null,b.cardRootNode=null,b.cardMask&&(g.We(b.cardMask),b.cardMask=null))}};
g.h.JK=function(a,b){var c=this.Dd(a);if(c){if(b){var d=this.ac(c);if(!d)return;b instanceof g.ge?d.innerHTML=g.he(b):g.ef(d,b)}g.ih(c,Z(this,"active"))&&(c=pra(this,a,c),qra(this,a,c),g.uv(c),rra(c))}};
g.h.isActive=function(a){return(a=this.Dd(a))?g.ih(a,Z(this,"active")):!1};
g.h.ac=function(a){var b=a.cardContentNode;if(!b){var c=Z(this,"content"),d=Z(this,"card-content");(b=(b=this.wa(a,"card-id"))?g.Ce(b):g.L(c,a))||(b=window.document.createElement("div"));var e=b;g.kh(e,c);g.N(e,d);a.cardContentNode=b}return b};var H7;g.B(G7,u7);g.la(G7);g.h=G7.prototype;g.h.register=function(){this.addBehavior("keydown",this.zt);v7(this,"yt-uix-kbd-nav-move-in",this.Bu);v7(this,"yt-uix-kbd-nav-move-in-to",this.vF);v7(this,"yt-uix-kbd-move-next",this.Cu);v7(this,"yt-uix-kbd-nav-move-to",this.ik)};
g.h.unregister=function(){this.removeBehavior("keydown",this.zt);g.Gk(H7)};
g.h.zt=function(a,b,c){var d=c.keyCode;if(a=g.nf(a,Z(this)))switch(d){case 13:case 32:this.Bu(a);break;case 27:c.preventDefault();c.stopImmediatePropagation();a:{for(c=S5(a,"kbdNavMoveOut");!c;){c=g.nf(a.parentElement,Z(this));if(!c)break a;c=S5(c,"kbdNavMoveOut")}c=g.Ce(c);this.ik(c);g.Ki("yt-uix-kbd-nav-move-out-done",c)}break;case 40:case 38:if((b=c.target)&&g.ih(a,Z(this,"list")))switch(d){case 40:this.Cu(b,a);break;case 38:d=window.document.activeElement==a,a=ura(a),b=a.indexOf(b),0>b&&!d||(b=
d?a.length-1:(a.length+b-1)%a.length,a[b].focus(),tra(this,a[b]))}c.preventDefault()}};
g.h.Bu=function(a){var b=S5(a,"kbdNavMoveIn"),b=g.Ce(b);sra(this,a,b);this.ik(b)};
g.h.vF=function(a){sra(this,g.of(),a);this.ik(a)};
g.h.ik=function(a){if(a)if(g.kf(a))a.focus();else{var b=n7(a,function(a){return g.sa(a)&&1==a.nodeType?g.kf(a):!1});
b?b.focus():(a.setAttribute("tabindex","-1"),a.focus())}};
g.h.Cu=function(a,b){var c=window.document.activeElement==b,d=ura(b),e=d.indexOf(a);0>e&&!c||(c=c?0:(e+1)%d.length,d[c].focus(),tra(this,d[c]))};g.B(I7,u7);g.la(I7);g.h=I7.prototype;g.h.register=function(){this.addBehavior("click",this.xz);this.addBehavior("mouseenter",this.lD);v7(this,"page-scroll",this.zD);v7(this,"yt-uix-kbd-nav-move-out-done",function(a){a=this.Dd(a);M7(this,a)});
this.B=new g.Ff};
g.h.unregister=function(){this.removeBehavior("click",this.xz);this.o=this.g=null;g.Gk(g.Cb(g.Mb(this.A)));this.A={};g.Gb(this.D,function(a){g.We(a)},this);
this.D={};g.Eb(this.B);this.B=null;I7.M.unregister.call(this)};
g.h.xz=function(a,b,c){a&&(b=P7(this,a),!b.disabled&&j7(c.target,b)&&xra(this,a))};
g.h.lD=function(a,b,c){a&&g.ih(a,Z(this,"hover"))&&j7(c.target,P7(this,a))&&xra(this,a,!0)};
g.h.zD=function(){this.g&&this.o&&vra(this,this.o,this.g)};
g.h.yz=function(a){if(a){var b=O7(this,a);if(b){g.Li("yt-uix-menu-before-show",a,b);this.g?j7(a,this.g)||M7(this,this.o):(this.o=a,this.g=b,g.ih(a,Z(this,"sibling-content"))||(g.We(b),window.document.body.appendChild(b)),b.style.minWidth=P7(this,a).offsetWidth-2+"px");var c=K7(this,a);c&&g.Ue(c,b);g.kh(b,Z(this,"content-hidden"));vra(this,a,b);g.jh(P7(this,a),[Z(this,"trigger-selected"),"yt-uix-button-toggled"]);g.Ki("yt-uix-menu-show",a);Ara(b);yra(this,a);g.Ki("yt-uix-kbd-nav-move-in-to",b);var d=
(0,g.z)(this.eP,this,a),e=(0,g.z)(this.oF,this,a),c=g.ua(a).toString();this.A[c]=[g.Fk(b,"click",e),g.Fk(window.document,"click",d)];g.ih(a,Z(this,"indicate-selected"))&&(d=(0,g.z)(this.pF,this,a),this.A[c].push(g.Fk(b,"click",d)));g.ih(a,Z(this,"hover"))&&(a=(0,g.z)(this.dP,this,a),this.A[c].push(g.Fk(window.document,"mousemove",a)))}}};
g.h.dP=function(a,b){var c=g.Ik(b);c&&(j7(c,P7(this,a))||Bra(this,c)||N7(this,a))};
g.h.eP=function(a,b){var c=g.Ik(b);if(c){if(Bra(this,c)){var d=g.nf(c,Z(this,"content")),e=g.mf(c,"LI");e&&d&&g.cf(d,e)&&g.Li("yt-uix-menu-item-clicked",c);c=g.nf(c,Z(this,"close-on-select"));if(!c)return;d=J7(c)}M7(this,d||a)}};
g.h.oF=function(a,b){var c=g.Ik(b);c&&zra(this,a,c)};
g.h.pF=function(a,b){var c=g.Ik(b);if(c){var d=P7(this,a);if(d&&(c=g.mf(c,"LI")))if(c=m7(c).trim(),d.hasChildNodes()){var e=x7.getInstance();(d=g.L(Z(e,"content"),d))&&g.ef(d,c)}else g.ef(d,c)}};g.B(Q7,E7);g.la(Q7);g.h=Q7.prototype;g.h.register=function(){Q7.M.register.call(this);this.addBehavior("click",this.gs,"target");this.addBehavior("click",this.es,"close")};
g.h.unregister=function(){Q7.M.unregister.call(this);this.removeBehavior("click",this.gs,"target");this.removeBehavior("click",this.es,"close");for(var a in this.g)g.Gk(this.g[a]);this.g={};for(a in this.o)g.Gk(this.o[a]);this.o={}};
g.h.gs=function(a,b,c){c.preventDefault();b=g.mf(c.target,"button");b&&b.disabled||(a=(b=this.wa(a,"card-target"))?g.y(b)?window.document.getElementById(b):b:a,b=this.Dd(a),this.wa(b,"disabled")||(g.ih(b,Z(this,"active"))?(this.df(a),g.kh(b,Z(this,"active"))):(this.show(a),g.N(b,Z(this,"active")))))};
g.h.show=function(a){Q7.M.show.call(this,a);var b=this.Dd(a),c=g.ua(a).toString();if(!g.dh(b,"click-outside-persists")){if(this.g[c])return;var b=g.Fk(window.document,"click",(0,g.z)(this.hs,this,a)),d=g.Fk(window,"blur",(0,g.z)(this.hs,this,a));this.g[c]=[b,d]}a=g.Fk(window,"resize",(0,g.z)(this.JK,this,a,void 0));this.o[c]=a};
g.h.df=function(a){Q7.M.df.call(this,a);a=g.ua(a).toString();var b=this.g[a];b&&(g.Gk(b),this.g[a]=null);if(b=this.o[a])g.Gk(b),delete this.o[a]};
g.h.hs=function(a,b){var c="yt-uix"+(this.C?"-"+this.C:"")+"-card",d=null;b.target&&(d=g.nf(b.target,c)||g.nf(J7(b.target),c));(d=d||g.nf(window.document.activeElement,c)||g.nf(J7(window.document.activeElement),c))||this.df(a)};
g.h.es=function(a){(a=g.nf(a,Z(this,"card")))&&(a=a.cardTargetNode)&&this.df(a)};g.B(R7,E7);g.la(R7);g.h=R7.prototype;g.h.register=function(){this.addBehavior("mouseenter",this.xu,"target");this.addBehavior("mouseleave",this.zu,"target");this.addBehavior("mouseenter",this.yu,"card");this.addBehavior("mouseleave",this.Au,"card")};
g.h.unregister=function(){this.removeBehavior("mouseenter",this.xu,"target");this.removeBehavior("mouseleave",this.zu,"target");this.removeBehavior("mouseenter",this.yu,"card");this.removeBehavior("mouseleave",this.Au,"card")};
g.h.xu=function(a){if(a8!=a){a8&&(this.df(a8),a8=null);var b=(0,g.z)(this.show,this,a),c=(0,window.parseInt)(this.wa(a,"delay-show"),10),b=g.oi(b,-1<c?c:200);g.ch(a,"card-timer",b.toString());a8=a;a.alt&&(g.ch(a,"card-alt",a.alt),a.alt="");a.title&&(g.ch(a,"card-title",a.title),a.title="")}};
g.h.zu=function(a){var b=(0,window.parseInt)(this.wa(a,"card-timer"),10);g.qi(b);this.Dd(a).isCardHidable=!0;b=(0,window.parseInt)(this.wa(a,"delay-hide"),10);b=-1<b?b:200;g.oi((0,g.z)(this.bE,this,a),b);if(b=this.wa(a,"card-alt"))a.alt=b;if(b=this.wa(a,"card-title"))a.title=b};
g.h.bE=function(a){this.Dd(a).isCardHidable&&(this.df(a),a8=null)};
g.h.yu=function(a){a&&(a.cardRootNode.isCardHidable=!1)};
g.h.Au=function(a){a&&this.df(a.cardTargetNode)};
var a8=null;var Era={LOADING:"loading",cA:"content",yW:"working"};g.h=S7.prototype;
g.h.show=function(){if(!this.isDisposed()){this.F=window.document.activeElement;if(!this.N){this.o||(this.o=g.Ce("yt-dialog-bg"),this.o||(this.o=g.Pe("div"),this.o.id="yt-dialog-bg",this.o.className="yt-dialog-bg",window.document.body.appendChild(this.o)));var a;var b=window,c=b.document;a=0;if(c){a=c.body;var d=c.documentElement;if(d&&a)if(b=g.Ie(b).height,g.He(c)&&d.scrollHeight)a=d.scrollHeight!=b?d.scrollHeight:d.offsetHeight;else{var c=d.scrollHeight,e=d.offsetHeight;d.clientHeight!=e&&(c=a.scrollHeight,
e=a.offsetHeight);a=c>b?c>e?c:e:c<e?c:e}else a=0}this.o.style.height=a+"px";g.uv(this.o)}this.It();a=Gra(this);Hra(a);this.C=g.Fk(window.document,"keydown",(0,g.z)(this.ZE,this));a=this.g;d=g.Hi("player-added",this.It,this);g.ch(a,"player-ready-pubsub-key",d);this.P&&(this.D=g.Fk(window.document,"click",(0,g.z)(this.JJ,this)));g.uv(this.g);this.A.setAttribute("tabindex","0");Jra(this);this.H||g.N(window.document.body,"yt-dialog-active");D7(x7.getInstance());F7(Q7.getInstance());F7(R7.getInstance());
g.Ki("yt-ui-dialog-show-complete",this)}};
g.h.It=function(){if(!this.V){var a=this.g;g.O(window.document.body,"hide-players",!0);a&&g.O(a,"preserve-players",!0)}};
g.h.mG=function(a){a=a.currentTarget;a.disabled||(a=g.dh(a,"action")||"",this.dismiss(a))};
g.h.dismiss=function(a){if(!this.isDisposed()){this.B.Lb("pre-all");this.B.Lb("pre-"+a);g.vv(this.g);F7(Q7.getInstance());F7(R7.getInstance());this.A.setAttribute("tabindex","-1");Fra()||(g.vv(this.o),this.H||g.kh(window.document.body,"yt-dialog-active"),fra(),Ira());this.C&&(g.Gk(this.C),this.C=null);this.D&&(g.Gk(this.D),this.D=null);var b=this.g;if(b){var c=g.dh(b,"player-ready-pubsub-key");c&&(g.Ii(c),l7(b,"player-ready-pubsub-key"))}this.B.Lb("post-all");g.Ki("yt-ui-dialog-hide-complete",this);
"cancel"==a&&g.Ki("yt-ui-dialog-cancelled",this);this.B&&this.B.Lb("post-"+a);this.F&&this.F.focus()}};
g.h.setTitle=function(a){g.ef(g.L("yt-dialog-title",this.g),a)};
g.h.ZE=function(a){g.oi((0,g.z)(function(){this.O||27!=a.keyCode||this.dismiss("cancel")},this),0);
9==a.keyCode&&a.shiftKey&&g.ih(window.document.activeElement,"yt-dialog-fg")&&a.preventDefault()};
g.h.JJ=function(a){"yt-dialog-base"==a.target.className&&this.dismiss("cancel")};
g.h.isDisposed=function(){return this.L};
g.h.dispose=function(){b7(this.g)&&this.dismiss("dispose");g.Gk(this.G);this.G.length=0;g.oi((0,g.z)(function(){this.F=null},this),0);
this.J=this.A=null;this.B.dispose();this.B=null;this.L=!0};
g.h.MC=function(a){a.stopPropagation();Jra(this)};
g.ka("yt.ui.Dialog",S7,void 0);g.B(T7,u7);g.la(T7);g.h=T7.prototype;g.h.register=function(){this.addBehavior("click",this.Uo,"target");this.addBehavior("click",this.zz,"close");Lra(this)};
g.h.unregister=function(){T7.M.unregister.call(this);this.removeBehavior("click",this.Uo,"target");this.removeBehavior("click",this.zz,"close");this.B&&(g.Ii(this.B),this.B=null);this.o&&(g.Gk(this.o),this.o=null)};
g.h.Uo=function(a){if(!this.g||!b7(this.g.g)){var b=this.Dd(a);a=Nra(b,a);b||(b=a?a.overlayParentNode:null);if(b&&a){var c=!!this.wa(b,"disable-shortcuts")||!1,d=!!this.wa(b,"disable-outside-click-dismiss")||!1;this.g=new S7(a,c);this.A=b;var e=g.L("yt-dialog-fg",a);if(e){var f=this.wa(b,"overlay-class")||"",k=this.wa(b,"overlay-style")||"default",l=this.wa(b,"overlay-shape")||"default",f=f?f.split(" "):[];f.push(Z(this,k));f.push(Z(this,l));g.jh(e,f)}this.g.show();g.Ki("yt-uix-kbd-nav-move-to",e||
a);Lra(this);c||d||(c=(0,g.z)(function(a){g.ih(a.target,"yt-dialog-base")&&Mra(this)},this),this.o=g.Fk(g.L("yt-dialog-base",a),"click",c));
this.Pg(b,"overlay-shown");g.Ki("yt-uix-overlay-shown",b)}}};
g.h.ac=function(a){return g.L("yt-dialog-content",a.overlayContentNode||a)};
g.h.zz=function(a){a&&a.disabled||g.Ki("yt-uix-overlay-hide")};
g.h.show=function(a){this.Uo(a)};var V7={},U7=[];g.ka("yt.pubsub.publish",g.Ki,void 0);g.B(W7,u7);g.la(W7);g.h=W7.prototype;g.h.register=function(){this.addBehavior("mouseover",this.Rk);this.addBehavior("mouseout",this.wg);this.addBehavior("focus",this.Os);this.addBehavior("blur",this.Or);this.addBehavior("click",this.wg);this.addBehavior("touchstart",this.Jw);this.addBehavior("touchend",this.Bl);this.addBehavior("touchcancel",this.Bl)};
g.h.unregister=function(){this.removeBehavior("mouseover",this.Rk);this.removeBehavior("mouseout",this.wg);this.removeBehavior("focus",this.Os);this.removeBehavior("blur",this.Or);this.removeBehavior("click",this.wg);this.removeBehavior("touchstart",this.Jw);this.removeBehavior("touchend",this.Bl);this.removeBehavior("touchcancel",this.Bl);this.dispose();W7.M.unregister.call(this)};
g.h.dispose=function(){for(var a in this.o)this.wg(this.o[a]);this.o={}};
g.h.Rk=function(a){if(!(this.g&&1E3>(0,g.E)()-this.g)){var b=(0,window.parseInt)(this.wa(a,"tooltip-hide-timer"),10);b&&(l7(a,"tooltip-hide-timer"),g.qi(b));var b=(0,g.z)(function(){Xra(this,a);l7(a,"tooltip-show-timer")},this),c=(0,window.parseInt)(this.wa(a,"tooltip-show-delay"),10)||0,b=g.oi(b,c);
g.ch(a,"tooltip-show-timer",b.toString());a.title&&(ira(a,Ura(this,a)),a.title="");b=g.ua(a).toString();this.o[b]=a}};
g.h.wg=function(a){var b=(0,window.parseInt)(this.wa(a,"tooltip-show-timer"),10);b&&(g.qi(b),l7(a,"tooltip-show-timer"));b=(0,g.z)(function(){if(a){var b=g.Ce(X7(this,a));b&&(Yra(b),g.We(b),l7(a,"content-id"));b=g.Ce(X7(this,a,"arialabel"));g.We(b)}l7(a,"tooltip-hide-timer")},this);
b=g.oi(b,50);g.ch(a,"tooltip-hide-timer",b.toString());if(b=this.wa(a,"tooltip-text"))a.title=b;b=g.ua(a).toString();delete this.o[b]};
g.h.Os=function(a){this.g=0;this.Rk(a)};
g.h.Or=function(a){this.g=0;this.wg(a)};
g.h.Jw=function(a,b,c){c.changedTouches&&(this.g=0,(a=r7(b,Z(this),c.changedTouches[0].target))&&this.Rk(a))};
g.h.Bl=function(a,b,c){c.changedTouches&&(this.g=(0,g.E)(),(a=r7(b,Z(this),c.changedTouches[0].target))&&this.wg(a))};g.B(Y7,u7);g.la(Y7);Y7.prototype.register=function(){this.addBehavior("click",this.jq);w7(this,fsa,this.dv);w7(this,gsa,this.Az);w7(this,hsa,this.SI);w7(this,jsa,this.dv);w7(this,ksa,this.Az);w7(this,lsa,this.gJ);w7(this,msa,this.LG);w7(this,nsa,this.IG)};
Y7.prototype.unregister=function(){this.removeBehavior("click",this.jq);Y7.M.unregister.call(this)};
var $7={nq:"hover-enabled",Sz:"yt-uix-button-subscribe",Tz:"yt-uix-button-subscribed",nQ:"ypc-enabled",aA:"yt-uix-button-subscription-container",bA:"yt-subscription-button-disabled-mask-container"},Z7={DQ:"channel-external-id",dA:"subscriber-count-show-when-subscribed",eA:"subscriber-count-tooltip",fA:"subscriber-count-title",lS:"href",uS:"insecure",Gq:"is-subscribed",cU:"parent-url",XU:"clicktracking",xB:"show-unsub-confirm-dialog",$U:"show-unsub-confirm-time-frame",EB:"style-type",jr:"subscribed-timestamp",
kr:"subscription-id",xV:"target",RB:"ypc-enabled"};g.h=Y7.prototype;
g.h.jq=function(a){var b=this.wa(a,"href"),c=this.wa(a,"insecure"),d=Sra(),c=c&&!0;if(b)a=this.wa(a,"target")||"_self",window.open(b,a);else if(!c)if(d){var b=this.wa(a,"channel-external-id"),d=this.wa(a,"clicktracking"),c=Zra(this,a),e=this.wa(a,"parent-url");if(this.wa(a,"is-subscribed")){var f=this.wa(a,"subscription-id"),k=new q7(b,f,c,a,d,e);csa(this,a)?Qra(a,b).then(function(){g.yq(isa,k)}):g.yq(isa,k)}else g.yq(esa,new p7(b,c,d,e))}else bsa(this,a)};
g.h.dv=function(a){this.Lg(a.g,this.ow,!0)};
g.h.Az=function(a){this.Lg(a.g,this.ow,!1)};
g.h.SI=function(a){this.Lg(a.g,this.uw,!0,a.o)};
g.h.gJ=function(a){this.Lg(a.g,this.uw,!1)};
g.h.LG=function(a){this.Lg(a.g,this.DC)};
g.h.IG=function(a){this.Lg(a.g,this.yC)};
g.h.uw=function(a,b,c){b?(g.ch(a,Z7.Gq,"true"),c&&g.ch(a,Z7.kr,c),this.wa(a,Z7.xB)&&(b=new a7,g.ch(a,Z7.jr,(b.getTime()/1E3).toString()))):(l7(a,Z7.Gq),l7(a,Z7.jr),l7(a,Z7.kr));$ra(this,a)};
g.h.ow=function(a,b){var c=g.nf(a,$7.aA);g.O(c,$7.bA,b);a.setAttribute("aria-busy",b?"true":"false");a.disabled=b};
g.h.DC=function(a){var b=!!this.wa(a,"ypc-item-type"),c=!!this.wa(a,"ypc-item-id");!this.wa(a,"ypc-enabled")&&b&&c&&(g.N(a,"ypc-enabled"),g.ch(a,Z7.RB,"true"))};
g.h.yC=function(a){this.wa(a,"ypc-enabled")&&(g.kh(a,"ypc-enabled"),l7(a,"ypc-enabled"))};
g.h.aC=function(a,b,c){var d=g.ob(arguments,2);(0,g.F)(a,function(a){b.apply(this,g.jb(a,d))},this)};
g.h.Lg=function(a,b,c){var d=asa(this,a);this.aC.apply(this,g.jb([d],g.ob(arguments,1)))};var b8=window.yt&&window.yt.uix&&window.yt.uix.widgets_||{};g.ka("yt.uix.widgets_",b8,void 0);window._exportCheck==g.ya&&(g.ka("ytmod.player.annotations_module",V6,void 0),g.ka("ytmod.player.creatorendscreen",c7,void 0));var c8=Y7.getInstance(),d8=Z(c8);d8 in b8||(c8.register(),v7(c8,"yt-uix-init-"+d8,c8.init),v7(c8,"yt-uix-dispose-"+d8,c8.dispose),b8[d8]=c8);})(_yt_player);
