(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{709:function(e,t,r){"use strict";var n=r(217),l=r(41),a=r(51),o=r(53),i=r(52),c=r(1),s=r.n(c),f=r(71),p=r(60),C={tiny:{size:Object(p.key)("sizes.font.tiny","8px"),spacing:"0.36px"},small:{size:Object(p.key)("sizes.font.small","10px"),spacing:"0.42px"},normal:{size:Object(p.key)("sizes.font.normal","12px"),spacing:"1px"},big:{size:Object(p.key)("sizes.font.big","15px"),spacing:"1px"},large:{size:Object(p.key)("sizes.font.large","18px"),spacing:"1px"}},u={gradient:Object(p.palette)("gradient",0),primary:Object(p.palette)("primary",0),success:Object(p.palette)("success",0),warning:Object(p.palette)("warning",0),error:Object(p.palette)("error",0),normal:Object(p.palette)("text",0),light:Object(p.palette)("text",2),dark:Object(p.palette)("text",1),gray:Object(p.palette)("text",2),input:Object(p.palette)("text",2),white:"#fff"},L=f.d.div.withConfig({displayName:"LabelWrapper",componentId:"sc-1a9itj6-0"})(["padding:10px 0;font-size:",";font-weight:",";letter-spacing:",";color:",";cursor:",";"],(function(e){return C[e.size].size}),(function(e){return e.weight}),(function(e){return C[e.size].spacing}),(function(e){return u[e.color]}),(function(e){return e.onClick&&"pointer"})),m=function(e){Object(i.a)(r,e);var t=Object(o.a)(r);function r(){return Object(l.a)(this,r),t.apply(this,arguments)}return Object(a.a)(r,[{key:"render",value:function(){var e=this.props,t=e.loading,r=e.children,l=e.className,a=void 0===l?"":l,o=Object(n.a)(e,["loading","children","className"]);return s.a.createElement(L,Object.assign({className:"label-wrapper ".concat(a)},o),t&&"...",!t&&r)}}]),r}(c.Component);m.defaultProps={size:"normal",color:"normal",weight:"normal",loading:!1};var h=m;t.a=h},982:function(e,t,r){"use strict";var n=r(217),l=r(41),a=r(51),o=r(53),i=r(52),c=r(1),s=r.n(c);function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function p(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var C=c.createElement("defs",null,c.createElement("style",{type:"text/css"})),u=c.createElement("path",{d:"M892.66980274 489.58965411h-114.51115716V248.87950996H889.9574364c49.31574412 0 79.4476629 24.41129347 79.44766289 62.23646872V311.70776755c0 27.17297444-14.44951321 42.31290819-31.66070739 51.92947757 27.86339499 10.65220081 45.07458916 26.82776477 45.07459038 59.1788927v0.69042056c-0.04931584 44.08827479-35.80322945 66.08309695-90.14917954 66.08309573z m24.06608259-169.5475266c0-15.83035429-12.37825157-24.65787146-34.52102004-24.65787145h-52.27468845V346.22878758h48.82258573c23.37566205 0 38.17038612-7.54530896 38.17038612-25.44692368z m13.413883 96.31364741c0-16.17556397-12.0330419-26.13734422-39.45259554-26.13734422h-60.95425931v52.96510899h62.92688926c23.37566205 0 37.47996558-8.28504534 37.47996559-26.13734422z m110.71384356 73.23387919V248.87950996h52.96510899v240.71014415z m292.59030831 0L1216.87150138 336.365639v152.87880545h-52.27468844V248.87950996h48.82258693l112.7851052 148.19380914v-147.94723115h52.27468845v240.71014536z m283.02305234 0l-21.99482095-54.00073921h-101.78769593l-22.04413679 54.00073921h-53.95142337l103.1685358-242.43619491h48.82258573l103.16853582 242.43619491z m-72.88866952-178.81888631l-32.00591705 78.06682302h64.11046699z m335.64295168 178.81888631L1762.84610047 336.365639v152.87880545h-52.27468846V248.87950996h48.82258571l112.83442226 148.19380914v-147.94723115h52.27468725v240.71014536z m219.75095463 4.14252328a121.51399188 121.51399188 0 0 1-123.2893597-123.83183273v-0.69042054c0-68.40093659 51.58426791-124.47293744 125.50856764-124.47293743 45.3704842 0 72.54345865 15.13993375 94.93280631 37.13475591L2162.30362409 320.73254806c-18.54271943-16.86598451-37.47996558-27.17297444-61.54604817-27.17297444-40.58685744 0-69.78177767 33.73196902-69.78177766 74.95992995v0.69042055c0 41.27727798 28.50449969 75.6503505 69.78177766 75.65035049 27.51818532 0 44.38416983-10.99741047 63.27209894-28.15928881l33.73196902 34.02786285c-24.85513482 26.48255389-52.3240043 43.00332874-98.77943455 43.00332874z m141.38823657-4.14252328V248.87950996h181.53125266v47.09653497h-128.96067038v48.82258573h113.42621112v47.14585201h-113.42621112v50.54863648H2423.67706516v47.09653496z m-550.56096248 243.47182755c-49.66095379 0-86.64776219-38.71285916-86.64776098-87.88065575s36.39501831-88.37381294 87.88065455-88.37381295a88.76833845 88.76833845 0 0 1 66.87214918 26.53187094l-19.23314119 22.14276847c-13.61114514-12.67414661-28.20860587-21.15645409-47.68832383-21.15645409-32.64702176 0-56.269263 26.77844893-56.269263 60.36247043s23.62224125 60.85562763 56.269263 60.85562763c20.90987489 0 34.52102004-8.53162333 48.92121741-22.14276847l19.23314118 19.47971798c-18.00024641 18.49340359-37.43064974 30.18123461-69.33793632 30.18123581z m138.08408257-74.76266779v71.80372225h-29.93465663v-170.38589345h29.93465663v70.86672373h81.32166117v-70.86672373h29.93465662v170.38589345h-29.93465662v-71.80372225z m325.48390805 71.80372225h-31.66070738l-17.26051001-41.12932925h-80.63124063l-17.55640507 41.12932925h-30.674393L2050.60346373 558.28648574H2078.46685993z m-89.40944315-135.81555758l-29.19492024 68.15435739H2093.26158281z m156.72543368-34.52102003v170.38589345h-29.93465663v-170.43520929z m173.59141699 0h29.58944696v170.38589345h-25.10171402l-93.69991273-121.21809806v121.21809806h-29.58944575v-170.43520929h27.71544746L2394.08761941 677.53195383z m-871.3105584 71.21193339h-744.66773006v28.35655217h744.66773006zM86.11081483 419.41335093l-70.07767149 70.17630318L86.11081483 559.76595851l70.17630318-70.1763044z m240.61151369-100.25890611l120.33041415 120.28109832 70.17630318-70.17630318-120.33041415-120.28109832L326.87027604 178.55525926 256.69397164 248.97814164l-120.33041415 120.28109832 70.17630318 70.17630318z m240.61151368 100.25890611l-70.17630439 70.17630318 70.17630439 70.1763044 70.22561902-70.1763044z m-240.61151368 240.61151369l-120.33041537-120.28109832-70.02835566 70.17630318 120.33041415 120.28109832 70.1763044 70.22561902 70.17630318-70.22561902 120.33041415-120.28109832-70.17630318-70.17630318z m0-100.25890611l70.17630318-70.1763044-70.17630318-70.17630318-70.02835688 70.17630318z",fill:"#F0B90B","p-id":2821});function L(e){var t=e.svgRef,r=p(e,["svgRef"]);return c.createElement("svg",f({t:1542265692271,className:"icon",style:{},viewBox:"0 0 2438 1024","p-id":2820,width:304.75,height:128,ref:t},r),C,u)}var m=c.forwardRef((function(e,t){return c.createElement(L,f({svgRef:t},e))}));r.p;function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function d(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var v=c.createElement("title",null,"Combined Shape"),g=c.createElement("desc",null,"Created with Sketch."),y=c.createElement("defs",null,c.createElement("linearGradient",{x1:"35.5811785%",y1:"100%",x2:"64.4188215%",y2:"9.09203013%",id:"linearGradient-1"},c.createElement("stop",{stopColor:"#33FF99",stopOpacity:.203562063,offset:"0%"}),c.createElement("stop",{stopColor:"#00CCFF",stopOpacity:.256610577,offset:"100%"}))),b=c.createElement("g",{id:"Symbols",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},c.createElement("g",{id:"Logo/Swap-L",fill:"url(#linearGradient-1)"},c.createElement("path",{d:"M162.310812,-1.47142243 L307.591221,-142.601869 L453.689307,-0.677101963 C479.438487,24.3365477 480.034752,65.4879517 455.021102,91.2371315 C454.63154,91.6381495 454.236819,92.0341246 453.83704,92.4249581 L430.338012,115.398131 L307.591221,-2.20186907 L187.299365,115.398131 L162.956761,92.3935205 C136.865764,67.7366184 135.703201,26.597318 160.360103,0.506321307 C160.996176,-0.166747481 161.646561,-0.826145938 162.310812,-1.47142243 Z M169.796893,339.539923 C169.030449,338.795373 168.280005,338.034529 167.546074,337.257911 C139.095802,307.152915 140.437222,259.684492 170.542218,231.23422 L187.299365,215.398131 L307.591221,332.998131 L430.338012,215.398131 L453.83704,238.371304 C454.236819,238.762137 454.63154,239.158112 455.021102,239.55913 C480.034752,265.30831 479.438487,306.459714 453.689307,331.473364 L307.591221,473.398131 L169.796893,339.539923 Z M312.089828,245.398131 C268.196785,245.398131 232.614444,209.804769 232.614444,165.898131 C232.614444,121.991493 268.196785,86.3981309 312.089828,86.3981309 C355.98287,86.3981309 391.565212,121.991493 391.565212,165.898131 C391.565212,209.804769 355.98287,245.398131 312.089828,245.398131 Z",id:"Combined-Shape",transform:"translate(308.000000, 165.398131) rotate(90.000000) translate(-308.000000, -165.398131) "})));function O(e){var t=e.svgRef,r=d(e,["svgRef"]);return c.createElement("svg",h({width:"616px",height:"331px",viewBox:"0 0 616 331",ref:t},r),v,g,y,b)}var E=c.forwardRef((function(e,t){return c.createElement(O,h({svgRef:t},e))}));r.p;function j(){return(j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function w(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var x=c.createElement("title",null,"Group"),z=c.createElement("desc",null,"Created with Sketch."),R=c.createElement("defs",null,c.createElement("linearGradient",{x1:"30.2159209%",y1:"100%",x2:"69.7840791%",y2:"9.09203013%",id:"linearGradient-1"},c.createElement("stop",{stopColor:"#33FF99",offset:"0%"}),c.createElement("stop",{stopColor:"#00CCFF",offset:"100%"}))),S=c.createElement("g",{id:"Symbols",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},c.createElement("g",{id:"Logo/BEPSwap-Copy",transform:"translate(-1.000000, -2.000000)"},c.createElement("g",{id:"Group",transform:"translate(0.500000, -0.500000)"},c.createElement("g",{id:"Group-3",transform:"translate(72.500000, 6.500000)",fill:"#00CCFF",fillRule:"nonzero"},c.createElement("path",{d:"M47.7692308,26.9819136 L28.0384615,27 L28.0384615,0 L47.5851917,0 L47.5851917,5.29027577 L33.7021155,5.29027577 L33.7021155,10.7659373 L45.9184508,10.7659373 L45.9184508,16.056213 L33.7021155,16.056213 L33.7021155,21.6901306 L47.7692308,21.6901306 L47.7692308,26.9804064 L47.7692308,26.9819136 Z M22.8461538,19.5980515 C22.8461538,24.5522002 18.8526954,27.0194778 12.7824539,26.9998842 L0,27 L0,0 L12.4760937,0 C17.9674839,0 21.3482221,2.73706539 21.3482221,6.97981826 L21.3482221,7.05668516 C21.3482221,10.107247 19.7302094,11.8043482 17.8150736,12.8819923 C20.931018,14.080212 22.8461538,15.8933671 22.8461538,19.5196774 L22.8461538,19.5980515 L22.8461538,19.5980515 Z M61.0645838,15.506587 C61.0645838,18.809367 61.0645838,22.6256559 61.0645838,26.9554538 L55.0384615,27 L55.0384615,0 L67.1092609,0 C71.7689444,0 75.8076923,3.53731719 75.8076923,8.22094452 C75.8076923,12.9045718 71.7406279,15.506587 67.1651804,15.506587 L61.0645838,15.506587 Z M15.5769231,7.77744335 L15.5769231,7.73337075 C15.5769231,6.11094674 14.2453554,5.19230769 11.8443862,5.19230769 L6.23076923,5.19230769 L6.23076923,10.3846154 L11.4770572,10.3846154 C13.9876326,10.3846154 15.5769231,9.61058969 15.5769231,7.77744335 L15.5769231,7.77744335 Z M17.6538462,18.7153376 L17.6538462,18.664513 C17.6538462,16.7538285 16.2832024,15.5769231 13.1921968,15.5769231 L6.23076923,15.5769231 L6.23076923,21.8076923 L13.3850906,21.8076923 C16.0479661,21.8076923 17.6522779,20.8293202 17.6522779,18.7153376 L17.6538462,18.7153376 Z M70.6153846,7.77744335 L70.6153846,7.73337075 C70.6153846,6.11094674 69.2838169,5.19230769 66.8828477,5.19230769 L61.2692308,5.19230769 L61.2692308,10.3846154 L66.5155187,10.3846154 C69.0260941,10.3846154 70.6153846,9.61058969 70.6153846,7.77744335 L70.6153846,7.77744335 Z",id:"Shape"})),c.createElement("path",{d:"M154.694669,24.1546159 C154.774369,25.6609716 155.110245,26.8841141 155.702306,27.8240801 C156.829498,29.5835035 158.816287,30.4632021 161.662733,30.4632021 C162.937941,30.4632021 164.099273,30.2703914 165.146765,29.8847644 C167.173434,29.1376119 168.186754,27.7999881 168.186754,25.8718528 C168.186754,24.4257513 167.759793,23.3954195 166.90586,22.7808263 C166.04054,22.1782841 164.685652,21.6540801 162.841156,21.2081988 L159.442517,20.3947708 C157.222289,19.8645336 155.651074,19.2800764 154.728826,18.6413815 C153.134817,17.5327037 152.337824,15.8757373 152.337824,13.6704325 C152.337824,11.2843651 153.117738,9.32613203 154.67759,7.79567463 C156.237443,6.26521722 158.446251,5.5 161.304083,5.5 C163.934198,5.5 166.168625,6.17182457 168.007429,7.51549387 C169.846233,8.85916316 170.765621,11.0071942 170.765621,13.9596514 L167.571925,13.9596514 C167.401138,12.5376516 167.036798,11.4470664 166.478895,10.6878631 C165.442789,9.30201588 163.683712,8.60910265 161.201611,8.60910265 C159.197713,8.60910265 157.757433,9.05497725 156.880728,9.94673983 C156.004023,10.8385024 155.565677,11.8748596 155.565677,13.0558425 C155.565677,14.3573338 156.078029,15.3093363 157.10275,15.9118786 C157.774511,16.2975057 159.29449,16.7795323 161.662733,17.3579729 L165.180922,18.2075533 C166.877404,18.617282 168.186749,19.1776379 169.108998,19.8886378 C170.703007,21.1298749 171.5,22.9314493 171.5,25.2934151 C171.5,28.2338215 170.489527,30.3366625 168.468551,31.6020013 C166.447574,32.8673401 164.099292,33.5 161.423633,33.5 C158.303928,33.5 155.861715,32.6564535 154.096918,30.9693351 C152.332122,29.2942675 151.466816,27.0227172 151.500973,24.1546159 L154.694669,24.1546159 Z M177.200214,6.5 L181.945396,28.463921 L187.632762,6.5 L191.332976,6.5 L197.020343,28.463921 L201.765525,6.5 L205.5,6.5 L198.88758,33.5 L195.307281,33.5 L189.5,11.1133424 L183.658458,33.5 L180.078158,33.5 L173.5,6.5 L177.200214,6.5 Z M220.5,22.5 L216.621739,10.5 L212.5,22.5 L220.5,22.5 Z M215.201754,6.5 L219.149123,6.5 L228.5,33.5 L224.675439,33.5 L222.061404,25.4128659 L211.868421,25.4128659 L209.078947,33.5 L205.5,33.5 L215.201754,6.5 Z M231.5,6.5 L242.948496,6.5 C245.211649,6.5 247.036,7.17698438 248.421604,8.53097345 C249.807208,9.88496252 250.5,11.787258 250.5,14.237917 C250.5,16.3454836 249.882261,18.180387 248.646764,19.7426821 C247.411267,21.3049772 245.511863,22.086113 242.948496,22.086113 L234.946673,22.086113 L234.946673,33.5 L231.5,33.5 L231.5,6.5 Z M247.5,13.9381139 C247.5,12.0284777 246.811341,10.7318305 245.434003,10.0481336 C244.676467,9.68270937 243.63774,9.5 242.317791,9.5 L235.5,9.5 L235.5,18.5 L242.317791,18.5 C243.855818,18.5 245.104012,18.1640505 246.06241,17.4921415 C247.020808,16.8202324 247.5,15.6355684 247.5,13.9381139 Z",id:"SWAP",fill:"#50E3C2",fillRule:"nonzero"}),c.createElement("g",{id:"Logo/Swap",transform:"translate(0.000000, 0.000000)",fill:"url(#linearGradient-1)"},c.createElement("path",{d:"M15.7304301,4.35393783 L31.5,-11 L47.332257,4.41497274 C49.3107779,6.34134657 49.3530515,9.50688922 47.4266776,11.4854101 C47.3993159,11.5135125 47.3716245,11.541292 47.3436091,11.5687427 L43.8417722,15 L31.5,3.14883721 L19.4050633,15 L15.7800691,11.5664654 C13.775221,9.66750647 13.6893809,6.50284555 15.5883399,4.49799745 C15.6347267,4.44902403 15.6820998,4.40099432 15.7304301,4.35393783 Z M15.7304301,35.6460622 C15.6820998,35.5990057 15.6347267,35.550976 15.5883399,35.5020026 C13.6893809,33.4971544 13.775221,30.3324935 15.7800691,28.4335346 L19.4050633,25 L31.5,36.8511628 L43.8417722,25 L47.3436091,28.4312573 C47.3716245,28.458708 47.3993159,28.4864875 47.4266776,28.5145899 C49.3530515,30.4931108 49.3107779,33.6586534 47.332257,35.5850273 L31.5,51 L15.7304301,35.6460622 Z M32,28 C27.581722,28 24,24.418278 24,20 C24,15.581722 27.581722,12 32,12 C36.418278,12 40,15.581722 40,20 C40,24.418278 36.418278,28 32,28 Z",id:"Combined-Shape",transform:"translate(31.500000, 20.000000) rotate(90.000000) translate(-31.500000, -20.000000) "})))));function M(e){var t=e.svgRef,r=w(e,["svgRef"]);return c.createElement("svg",j({width:"250px",height:"35px",viewBox:"0 0 250 35",ref:t},r),x,z,R,S)}var k=c.forwardRef((function(e,t){return c.createElement(M,j({svgRef:t},e))}));r.p;function Z(){return(Z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function P(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var F=c.createElement("title",null,"Combined Shape"),G=c.createElement("desc",null,"Created with Sketch."),B=c.createElement("defs",null,c.createElement("linearGradient",{x1:"34.4049464%",y1:"100%",x2:"65.5950536%",y2:"9.09203013%",id:"linearGradient-1"},c.createElement("stop",{stopColor:"#33FF99",offset:"0%"}),c.createElement("stop",{stopColor:"#00CCFF",offset:"100%"}))),I=c.createElement("g",{id:"Symbols",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},c.createElement("g",{id:"Logo/Swap-Copy",transform:"translate(0.000000, -2.000000)",fill:"url(#linearGradient-1)"},c.createElement("path",{d:"M15.6990909,4.38527703 L31.4686608,-10.9686608 L47.3009178,4.44631194 C49.2794387,6.37268578 49.3217123,9.53822842 47.3953384,11.5167493 C47.3679767,11.5448517 47.3402853,11.5726312 47.3122699,11.6000819 L43.810433,15.0313392 L31.4686608,3.18017641 L19.3737241,15.0313392 L15.7487299,11.5978046 C13.7438818,9.69884568 13.6580417,6.53418476 15.5570007,4.52933665 C15.6033875,4.48036323 15.6507606,4.43233352 15.6990909,4.38527703 Z M15.6990909,35.6774014 C15.6507606,35.6303449 15.6033875,35.5823152 15.5570007,35.5333418 C13.6580417,33.5284936 13.7438818,30.3638327 15.7487299,28.4648738 L19.3737241,25.0313392 L31.4686608,36.882502 L43.810433,25.0313392 L47.3122699,28.4625965 C47.3402853,28.4900472 47.3679767,28.5178267 47.3953384,28.5459291 C49.3217123,30.52445 49.2794387,33.6899926 47.3009178,35.6163665 L31.4686608,51.0313392 L15.6990909,35.6774014 Z M31.9686608,28.0313392 C27.5503828,28.0313392 23.9686608,24.4496172 23.9686608,20.0313392 C23.9686608,15.6130612 27.5503828,12.0313392 31.9686608,12.0313392 C36.3869388,12.0313392 39.9686608,15.6130612 39.9686608,20.0313392 C39.9686608,24.4496172 36.3869388,28.0313392 31.9686608,28.0313392 Z",id:"Combined-Shape",transform:"translate(31.500000, 20.031339) rotate(90.000000) translate(-31.500000, -20.031339) "})));function N(e){var t=e.svgRef,r=P(e,["svgRef"]);return c.createElement("svg",Z({width:"63px",height:"36px",viewBox:"0 0 63 36",ref:t},r),F,G,B,I)}var V=c.forwardRef((function(e,t){return c.createElement(N,Z({svgRef:t},e))}));r.p;function W(){return(W=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function H(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var T=c.createElement("title",null,"LOGO/THORChain-white"),J=c.createElement("desc",null,"Created with Sketch."),A=c.createElement("defs",null,c.createElement("linearGradient",{x1:"0%",y1:"50%",x2:"100%",y2:"50%",id:"linearGradient-1"},c.createElement("stop",{stopColor:"#00CCFF",offset:"0%"}),c.createElement("stop",{stopColor:"#33FF99",offset:"100%"}))),D=c.createElement("g",{id:"Symbols",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},c.createElement("g",{id:"Footer",transform:"translate(-97.000000, -35.000000)"},c.createElement("g",{id:"LOGO/THORChain-Black",transform:"translate(97.000000, 35.000000)"},c.createElement("g",{id:"Thorchain_logo-copy"},c.createElement("path",{d:"M0,30 L20.7669527,21.1796902 L14.197219,14.4578313 L0,30 Z M7.62748535,7.74526678 L14.197219,14.4578313 L25.9328358,0 L7.62748535,7.74526678 Z",id:"Shape",fill:"url(#linearGradient-1)",fillRule:"nonzero"}),c.createElement("polygon",{id:"Path",fill:"#101921",fillRule:"nonzero",points:"36.4071715 11.0204291 33.1940299 11.0204291 33.1940299 9.31034483 41.4925373 9.31034483 41.4925373 11.0235141 38.2895158 11.0235141 38.2895158 20.6896552 36.4071715 20.6896552"}),c.createElement("polygon",{id:"Path",fill:"#101921",fillRule:"nonzero",points:"45.641791 9.31034483 47.4710319 9.31034483 47.4710319 14.230072 52.0961857 14.230072 52.0961857 9.31034483 53.9402985 9.31034483 53.9402985 20.6896552 52.0961857 20.6896552 52.0961857 15.9405663 47.4710319 15.9405663 47.4710319 20.6896552 45.641791 20.6896552"}),c.createElement("path",{d:"M61.119553,20.2573483 C60.4605541,19.9677985 59.9636898,19.4190007 59.6289601,18.6109549 C59.2942305,17.802909 59.1268657,16.6137349 59.1268657,15.0434324 C59.1268657,13.4778436 59.2966712,12.2809257 59.6362823,11.4526787 C59.9758934,10.6244317 60.4755472,10.0594729 61.1352435,9.75780249 C61.7942425,9.46017227 62.6781379,9.31102047 63.7869298,9.3103471 C64.8957217,9.30967373 65.7872881,9.45882552 66.4616288,9.75780249 C67.1255092,10.0561061 67.625163,10.6166879 67.9605899,11.4395479 C68.2960169,12.2624079 68.4633818,13.4620194 68.4626844,15.0383821 C68.4626844,16.603971 68.2925302,17.7931451 67.9522217,18.6059046 C67.6119132,19.418664 67.1150489,19.9691453 66.4616288,20.2573483 C65.8082087,20.5448779 64.9166423,20.6889795 63.7869298,20.6896528 C62.6572173,20.6903262 61.7680917,20.5462247 61.119553,20.2573483 Z M65.4417494,18.7038801 C65.8238991,18.5018687 66.0986564,18.1207404 66.2660212,17.5604953 C66.433386,17.0002501 66.5170684,16.1585357 66.5170684,15.035352 C66.5170684,13.8737861 66.4305966,13.0051368 66.2576529,12.4294041 C66.0847093,11.8536714 65.8103007,11.469513 65.4344272,11.2769287 C65.0578564,11.0863645 64.5086906,10.9907458 63.7869298,10.9900724 C63.0860896,10.9900724 62.5473841,11.0883847 62.1708133,11.2850092 C61.7942425,11.4816336 61.5170445,11.8654554 61.3392194,12.4364745 C61.1613942,13.0068202 61.0724817,13.8731127 61.0724817,15.035352 C61.0724817,16.1666162 61.1533747,17.0083306 61.3151607,17.5604953 C61.4769467,18.1126599 61.7482171,18.4937882 62.1289721,18.7038801 C62.5055429,18.9058916 63.0599389,19.0068973 63.79216,19.0068973 C64.510434,19.0068973 65.0602971,18.9058916 65.4417494,18.7038801 L65.4417494,18.7038801 Z",id:"Shape",fill:"#101921",fillRule:"nonzero"}),c.createElement("path",{d:"M72.6119403,9.31034483 L77.3903515,9.31034483 C78.3885085,9.31034483 79.179601,9.56500064 79.7636291,10.0743123 C80.3476571,10.5836239 80.6396711,11.5055945 80.6396711,12.840224 C80.6396711,13.8478795 80.4563217,14.5827141 80.0896229,15.0447276 C79.7237178,15.5077905 79.2212361,15.8523615 78.6486665,16.032847 L80.9104478,20.6896552 L78.9194431,20.6896552 L76.8806543,16.3104663 C76.2329141,16.3104663 75.463059,16.2998414 74.5710889,16.2785915 L74.5710889,20.6896552 L72.6119403,20.6896552 L72.6119403,9.31034483 Z M77.0558627,14.7856161 C77.5655599,14.7856161 77.9609292,14.6444073 78.2419706,14.3619895 C78.5230119,14.0795718 78.6645945,13.5733448 78.6667182,12.8433086 C78.6667182,12.144119 78.5251357,11.6642831 78.2419706,11.4038007 C77.9588055,11.1433183 77.5634362,11.0147908 77.0558627,11.0182182 L74.5710889,11.0182182 L74.5710889,14.780475 L77.0558627,14.7856161 Z",id:"Shape",fill:"#101921",fillRule:"nonzero"}),c.createElement("path",{d:"M86.7564737,20.2431678 C86.2056382,19.9448377 85.7849704,19.3815123 85.4944703,18.5531916 C85.2039701,17.7248709 85.059048,16.5281832 85.0597037,14.9631285 C85.0597037,13.4768653 85.2072489,12.3226037 85.5023394,11.5003439 C85.7974298,10.6780841 86.2302291,10.107351 86.8007372,9.78814445 C87.3699339,9.46961137 88.10766,9.31034483 89.0139155,9.31034483 C89.6091484,9.31093766 90.2034287,9.35923464 90.7913435,9.45479588 C91.3073504,9.53321721 91.817681,9.64694351 92.3189283,9.79521548 L92.3189283,11.2377057 C92.0238378,11.1777703 91.60317,11.1225489 91.0569249,11.0720415 C90.5106797,11.0215342 89.9532866,10.9962805 89.3847458,10.9962805 C88.7355468,10.9962805 88.2361882,11.0996522 87.88667,11.3063957 C87.5371518,11.5131391 87.2840298,11.8996888 87.127304,12.4660446 C86.9699224,13.0317271 86.8912316,13.8735164 86.8912316,14.9914126 C86.8912316,16.1093088 86.9650042,16.9527817 87.1125495,17.5218313 C87.2600947,18.0888606 87.5060034,18.4777673 87.8502755,18.6885513 C88.1945477,18.8993354 88.7011196,19.0054008 89.3699912,19.0067477 C90.3560653,19.015191 91.3416709,18.9595216 92.3208955,18.8400734 L92.3208955,20.2795331 C91.4257879,20.5489057 90.3093624,20.6856123 88.9716192,20.6896529 C88.045691,20.6903263 87.3073091,20.541498 86.7564737,20.2431678 Z",id:"Path",fill:"#101921",fillRule:"nonzero"}),c.createElement("polygon",{id:"Path",fill:"#101921",fillRule:"nonzero",points:"96.4701493 9.31034483 98.2993901 9.31034483 98.2993901 14.230072 102.924544 14.230072 102.924544 9.31034483 104.768657 9.31034483 104.768657 20.6896552 102.924544 20.6896552 102.924544 15.9405663 98.2993901 15.9405663 98.2993901 20.6896552 96.4701493 20.6896552"}),c.createElement("path",{d:"M113.472076,9.31034483 L115.764397,9.31034483 L119.291045,20.6896552 L117.395471,20.6896552 L116.557893,17.9882254 L112.639395,17.9882254 L111.81651,20.6865713 L109.955224,20.6865713 L113.472076,9.31034483 Z M116.117062,16.2797869 L114.588847,10.9457995 L113.060633,16.2797869 L116.117062,16.2797869 Z",id:"Shape",fill:"#101921",fillRule:"nonzero"}),c.createElement("polygon",{id:"Path",fill:"#101921",fillRule:"nonzero",points:"123.440299 9.31034483 125.514925 9.31034483 125.514925 20.6896552 123.440299 20.6896552"}),c.createElement("polygon",{id:"Path",fill:"#101921",fillRule:"nonzero",points:"130.701493 9.31034483 132.171175 9.31034483 137.159186 17.4362209 137.159186 9.31034483 139 9.31034483 139 20.6896552 137.530318 20.6896552 132.542306 12.5689188 132.542306 20.6896552 130.701493 20.6896552"})))));function _(e){var t=e.svgRef,r=H(e,["svgRef"]);return c.createElement("svg",W({width:"139px",height:"30px",viewBox:"0 0 139 30",ref:t},r),T,J,A,D)}var q=c.forwardRef((function(e,t){return c.createElement(_,W({svgRef:t},e))})),K=(r.p,{bepswap:{normal:V,long:k,large:E},thorchain:{long:q},binanceDex:{long:m}}),Q=r(71).d.div.withConfig({displayName:"LogoWrapper",componentId:"sc-1jff2d1-0"})(["display:block;"]),U=function(e){Object(i.a)(r,e);var t=Object(o.a)(r);function r(){return Object(l.a)(this,r),t.apply(this,arguments)}return Object(a.a)(r,[{key:"render",value:function(){var e=this.props,t=e.name,r=e.type,l=Object(n.a)(e,["name","type"]),a=K[t][r];return s.a.createElement(Q,Object.assign({className:"logo-wrapper"},l),s.a.createElement(a,null))}}]),r}(c.Component);U.defaultProps={type:"long"};var X=U;t.a=X}}]);
//# sourceMappingURL=5.e4c63838.chunk.js.map