/**
 * Created by Besian Krasniqi on 6/19/14.
 * An example of getComputedStyle
 * email: bksoftengineer@gmail.com
 * website: bksofteng.com 
 */

var getMain = document.getElementById("main");

if(window.getComputedStyle){
    var getMainStyle = getComputedStyle(getMain, null); //for Chrome, Safari and Firefox
}
else {
    getMainStyle = getMain.currentStyle;  //currentStyle is used for IE only, as it doesn't support getComputedStyle
}

alert(getMainStyle.height + ", " + getMainStyle.width + ", " + getMainStyle.marginTop);


