<script type="javascript/text">    
    $(document).ready(function() {
        var winResizeW=window.innerWidth;
        var winResizeH=window.innerHeight;
        var win_sizeW=1250;
        var win_sizeH=document.body.clientHeight+200;
        //크롬, 사파리일때
        if (navigator.userAgent.indexOf('Chrome')>-1 || navigator.userAgent.indexOf('Safari')>-1)
        {
            $(window).resize(function() {
                if(winResizeW!=win_sizeW || winResizeH!=win_sizeH)
                {
                    resizeWin();
                }
            });
            resizeWin();
        }
        // 파이어폭스일 때
        else if (navigator.userAgent.indexOf('Firefox')>-1)
        {
            function thisResize(){
                self.resizeTo(1250,1050);
            }
            window.onload=thisResize;
        }
        //크롬, 사파리, 파이어 폭스 말고 모두
        else
        {
            resizeWin();
        }

    });

    function resizeWin(){
        var win_sizeW=1250;
        var win_sizeH=document.body.clientHeight+200;

        window.resizeTo(win_sizeW,win_sizeH);
    }

</script>        