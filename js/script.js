var keyboardClicker = {
    offsetX: 0,
    offsetY: 0,
    target: null,
    keyCode: 0,
    
    init: function ()
    {
        'use strict';
        
        if (navigator.userAgent.indexOf('Mac') !== -1) {
            keyboardClicker.keyCode = 188;
        } else {
            keyboardClicker.keyCode = 226;
        }
        
        keyboardClicker.bindEvent();
    },
    
    bindEvent: function ()
    {
        'use strict';
        
        document.body.addEventListener('keydown',function(e)
        {
            if(e.keyCode === keyboardClicker.keyCode && typeof keyboardClicker.target !== 'undefined' && keyboardClicker.target !== null) {
                keyboardClicker.target.click();
            }
        });
        
        document.body.addEventListener('mousemove',function(e)
        {
            keyboardClicker.offsetX = window.event.clientX;
            keyboardClicker.offsetY = window.event.clientY;
            
            keyboardClicker.target = e.target;
        });
    }
};

keyboardClicker.init();