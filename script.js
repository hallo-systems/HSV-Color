let hue = document.getElementById("sliderH");
let sustein = document.getElementById("sliderS");
let value = document.getElementById("sliderV");



function ChangeHSV() {
    let colorCode;
    let iHue = parseInt(hue.value);
    let iSustenin = parseInt(sustein.value);
    let iValue = parseInt(value.value);
    document.getElementById("inputH").value = iHue;
    document.getElementById("inputS").value = iSustenin;
    document.getElementById("inputV").value = iValue;
    iHue = Math.floor((iHue*360)/100);
    iSustenin = Math.floor((iSustenin*255)/100);
    iValue = Math.floor((iValue*255)/100);
    colorCode = HtoR(iHue,iSustenin,iValue);
    document.getElementById("backGroundColor").style.backgroundColor = `rgb(${colorCode[0]}, ${colorCode[1]}, ${colorCode[2]})`;
}

function HtoR(h,s,v){
    let r,g,b;
    let c = Math.floor(h/60) % 6;
    let max = Math.max(s,v);
    let min = Math.min(s,v);
    min = max - ((s / 255) * max);
    if (c == 1){
        r = ((120 - h) / 60) * (max - min) + min;
        g = max;
        b = min;
    }else if (c == 2){
        r = min;
        g =max;
        b = ((h - 120) / 60) * (max - min) + min;
    }else if (c == 3){
        r = min;
        g = ((240 - h) / 60) * (max - min) + min;
        b = max;
    }else if (c == 4){
        r = ((h - 240) / 60) * (max - min) + min;
        g = min;
        b = max;
    }else if( c == 5 || h == 360){
        r = max;
        g = min;
        b = ((360 - h) / 60) * (max - min) + min;
    }else{
        r = max;
        g = (h / 60) * (max - min) + min;
        b = min;
    }
    r = Math.floor(r);
    g = Math.floor(g);
    b = Math.floor(b);
    return [r.toString(), g.toString(), b.toString()];
}
