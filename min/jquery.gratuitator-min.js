(function(a){var b;a.fn.gratuitate=function(c){b=a.extend({caretColor:"#333, #111",contentAttr:"title",tipYPosition:"above",tipXPosition:"center",tipOffset:0,caretSize:"8"},c||{});if(b.caretColor.indexOf(",")!=-1){b.caretColor1=b.caretColor.split(",")[0].trim();b.caretColor2=b.caretColor.split(",")[1].trim()}else{b.caretColor1=b.caretColor;b.caretColor2=b.caretColor}b.caretSize=parseFloat(b.caretSize);b.tipOffset=parseFloat(b.tipOffset);var d=function(c){var d,e,f,g,h,i,j;b.contentAttr=="title"?d=c.attr("data-gratuitator-title"):d=c.attr(b.contentAttr);a("body").append("<span class='gratuitator-tip xPosition-"+b.tipXPosition+" yPosition-"+b.tipYPosition+"'>"+d+"<canvas id='gratuitator-caret' height='"+b.caretSize+"' width='"+b.caretSize+"'></canvas></span>");var k=a(".gratuitator-tip");f=c.outerWidth();g=c.offset().left;i=c.offset().top;b.tipXPosition=="left"&&b.tipYPosition=="above"||b.tipXPosition=="left"&&b.tipYPosition=="below"?h=g:b.tipXPosition=="right"&&b.tipYPosition=="above"||b.tipXPosition=="right"&&b.tipYPosition=="below"?h=g+c.outerWidth()-(b.caretSize+10):b.tipXPosition=="right"&&b.tipYPosition=="inline"?h=g+c.outerWidth()+b.caretSize+b.tipOffset:b.tipXPosition=="left"&&b.tipYPosition=="inline"?h=g-k.outerWidth()-b.tipOffset:b.tipXPosition=="center"&&b.tipYPosition=="inline"?h=g+c.outerWidth()+b.caretSize+b.tipOffset:h=g+c.outerWidth()/2-k.outerWidth()/2.25;a(".gratuitator-tip").css({left:h});if(b.tipYPosition=="below")j=i+b.tipOffset+b.caretSize+c.outerHeight();else if(b.tipYPosition=="inline")j=i+(c.outerHeight()/2-k.height());else{e=k.outerHeight()+b.caretSize+b.tipOffset;j=c.offset().top-(k.outerHeight()+b.caretSize+b.tipOffset)}a(".gratuitator-tip").css({top:j})},e=function(c){var d,e,f,g,h,i,j,k;f=document.getElementById("gratuitator-caret");i=b.caretSize*1.5;j=i/2;k=4;b.tipYPosition=="below"?h=-b.caretSize:h="100%";if(b.tipXPosition=="left"&&b.tipYPosition=="above")g=k;else if(b.tipXPosition=="left"&&b.tipYPosition=="below"){h=-a(f).outerHeight();g=k}else if(b.tipXPosition=="center"&&b.tipYPosition=="above"){h="100%";g=a(".gratuitator-tip").outerWidth()/2-b.caretSize*1.25}else if(b.tipXPosition=="center"&&b.tipYPosition=="below"){h=-b.caretSize;g=a(".gratuitator-tip").outerWidth()/2-b.caretSize*1.25}else if(b.tipXPosition=="right"&&b.tipYPosition=="above"){h="100%";g=k}else if(b.tipXPosition=="right"&&b.tipYPosition=="below"){g=k;h=-a(f).outerHeight()}else if(b.tipXPosition=="right"&&b.tipYPosition=="inline"){g=-b.caretSize;h=a(".gratuitator-tip").outerHeight()/2-j}else if(b.tipXPosition=="left"&&b.tipYPosition=="inline"){g="100%";h=a(".gratuitator-tip").outerHeight()/2-j}else{g=-b.caretSize;h=a(".gratuitator-tip").outerHeight()/2-j}a(f).css({position:"absolute","z-index":100,top:h,left:g}).attr("height",i).attr("width",i*2);if(f&&f.getContext){d=f.getContext("2d");if(b.tipYPosition=="below"){e=d.createLinearGradient(0,0,0,b.caretSize);e.addColorStop(1,b.caretColor1);e.addColorStop(0,b.caretColor2)}else if(b.tipYPosition=="above"){e=d.createLinearGradient(0,0,0,b.caretSize);e.addColorStop(0,b.caretColor1);e.addColorStop(1,b.caretColor2)}else if(b.tipYPosition=="inline"&&b.tipXPosition=="right"||b.tipYPosition=="inline"&&b.tipXPosition=="center"){e=d.createLinearGradient(0,0,b.caretSize,0);e.addColorStop(0,b.caretColor2);e.addColorStop(1,b.caretColor1)}else if(b.tipYPosition=="inline"&&b.tipXPosition=="left"){e=d.createLinearGradient(0,0,b.caretSize,0);e.addColorStop(0,b.caretColor1);e.addColorStop(1,b.caretColor2)}if(d){d.fillStyle=e;d.beginPath();if(b.tipYPosition=="below"){d.moveTo(j,0);d.lineTo(i,b.caretSize);d.lineTo(0,b.caretSize);d.lineTo(j,0)}else if(b.tipYPosition=="inline"&&b.tipXPosition=="right"||b.tipYPosition=="inline"&&b.tipXPosition=="center"){d.moveTo(0,j);d.lineTo(b.caretSize,i);d.lineTo(b.caretSize,0);d.lineTo(0,j)}else if(b.tipYPosition=="inline"&&b.tipXPosition=="left"){d.moveTo(b.caretSize,j);d.lineTo(0,i);d.lineTo(0,0);d.lineTo(b.caretSize,j)}else{d.moveTo(j,b.caretSize);d.lineTo(0,0);d.lineTo(i,0);d.lineTo(j,b.caretSize)}d.fill();return d.closePath()}}};return this.each(function(){a(this).hover(function(){if(a(this).attr(b.contentAttr)!==undefined&&a(this).attr(b.contentAttr)!==null&&a(this).attr(b.contentAttr)!==""){var c;c=a(this);c.data("gratuitator-title",c.attr("title"));c.attr("title","");d(c);return e(c)}},function(){a(this).attr("title",a(this).attr("data-gratuitator-title"));a(".gratuitator-tip").remove()})})}})(jQuery);