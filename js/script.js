var keyboardClicker = {
    offsetX: 0,
    offsetY: 0,
    target: null,
    
    init: function ()
    {
        'use strict';
        
        keyboardClicker.bindEvent();
    },
    
    bindEvent: function ()
    {
        'use strict';
        
        document.body.addEventListener('keydown',function(e)
        {
            if(e.keyCode === 188 && typeof keyboardClicker.target !== 'undefined' && keyboardClicker.target !== null) {
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