

var navigationMenu_ =  document.getElementById('navigation-menu');

var menuElems = {
    navigationMenu : document.getElementById('navigation-menu'),
    menuItems : navigationMenu_.getElementsByTagName('li'),
    moreMenu : document.getElementById('more-menu'),
    moreMenuList : document.getElementById('more-menu-list'),
    menuWrapper : document.getElementById('wrapper-menu')
};

var menu = {

    //menu object
    resizeWidth : function(percentageWidth) {
        var self = this;
        var getItemCount = menuElems.menuItems.length,
            newWidth = 100 / parseInt(getItemCount) - 0.5,
            wPercent = newWidth + '%';
        console.log('percentage is %s', wPercent);

        for (var i=0; i<menuElems.menuItems.length; i++){
            menuElems.menuItems[i].style.width = wPercent;
        }

        if(percentageWidth){
            menuElems.navigationMenu.style.width = percentageWidth;
            console.log('width percentage is %s', percentageWidth);
        }
    },

    menuManage : function() {
        var self = this;
        var menuWidth;
        menuWidth = menuElems.menuWrapper.offsetWidth;

        if (menuWidth >= 814){
            var firstItem = menuElems.moreMenuList.getElementsByTagName('li')[0];
            if (firstItem) {
                console.log('first item is %s', firstItem);
                menuElems.navigationMenu.appendChild(firstItem);
                menuElems.moreMenu.style.display = "none";
            }
            menuElems.moreMenu.style.display = 'none';
            self.resizeWidth('100%');
        }

        else if (menuWidth < 814 && menuWidth >= 713) {
            var lastItem = menuElems.menuItems[7];
            if (lastItem){
                menuElems.moreMenuList.appendChild(lastItem);
                lastItem.style.width = '100%';
            }

            var secondItem = menuElems.moreMenuList.getElementsByTagName('li')[1];
            if (secondItem) {
                console.log('first item is %s', secondItem);
                menuElems.navigationMenu.appendChild(secondItem);
                menuElems.moreMenu.style.display = "none";
            }
            menuElems.moreMenu.style.display = "block";

            menuElems.navigationMenu.style.width = '86%';
            self.resizeWidth();
        }

        else if (menuWidth < 713 && menuWidth >= 613) {
            var preLastItem = menuElems.menuItems[6];
            if (preLastItem){
                menuElems.moreMenuList.appendChild(preLastItem);
                preLastItem.style.width = '100%';
            }
            var thirdItem = menuElems.moreMenuList.getElementsByTagName('li')[2];
            if (thirdItem) {
                console.log('first item is %s', thirdItem);
                menuElems.navigationMenu.appendChild(thirdItem);
                menuElems.moreMenu.style.display = "none";
            }
            menuElems.moreMenu.style.display = "block";

            menuElems.navigationMenu.style.width = '86%';
            self.resizeWidth();
        }

        else if ( menuWidth < 613 && menuWidth >= 513 ) {
            var thirdLastItem = menuElems.menuItems[5];
            if (thirdLastItem){
                menuElems.moreMenuList.appendChild(thirdLastItem);
                thirdLastItem.style.width = '100%';
            }
            menuElems.moreMenu.style.display = "block";

            menuElems.navigationMenu.style.width = '86%';
            self.resizeWidth();
        }
    }
};

//Event Listeners
window.addEventListener('resize', function(){
    menu.menuManage();
});

menuElems.moreMenu.addEventListener('click', function(){
    console.log('show elem');

    var currentClass = menuElems.moreMenuList.getAttribute('class');
    if (currentClass == 'menu-more-list' ){
        menuElems.moreMenuList.setAttribute('class', 'menu-more-list-show');
    } else if (currentClass == 'menu-more-list-show'){
        menuElems.moreMenuList.setAttribute('class', 'menu-more-list');
    }

});


