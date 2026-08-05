<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
<meta name="theme-color" content="#2052BB">
<meta name="author" content="Bartosz Ciechanowski">
<meta name="format-detection" content="telephone=no">
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-25335284-3"></script>


<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-25335284-3');
</script>
    <link href="https://fonts.googleapis.com/css?family=IBM+Plex+Sans:400,400i" rel="stylesheet">
    <link href="/css/404.css" rel="stylesheet" type="text/css" />
    <title>Page not found – Bartosz Ciechanowski</title>
</head>

<body>
    <div id="content">
        <div id="reload_dummy"></div>
        <img class="_404" src="/images/404.svg" title="404" width="312" height="126">
        <div class="small">Page not found.</div>
        <div class="back"> <a href=https://ciechanow.ski/>Go back to the main page!</a></div>
    </div>


    <div id="magnifier_container">
        <div id="magnifier">
            <div id="ring_shadow"></div>

            <div id="handle">
                <div id="handle_attachment_shadow"></div>
                <div id="handle_plastic_shadow"></div>
                <div id="handle_attachment"></div>
                <div id="handle_plastic"></div>
            </div>
            <div id="ring_mask">
                <div id="copied_content_container">
                </div>
            </div>
            <div id="ring_highlight"></div>

            <div id="ring"></div>
        </div>
    </div>
    <script>


        var scale = 3;

        var animation_cancelled = false;
        var dragging = false;
        var drag_dx = 0;
        var drag_dy = 0;

        var not_found_div = document.getElementsByClassName("small")[0];

        var source_div = document.getElementById("content");
        var magnifier = document.getElementById("magnifier");
        var magnifier_container = document.getElementById("magnifier_container");

        var copied_content_container = document.getElementById("copied_content_container");
        var copied_div = source_div.cloneNode(true);

        copied_div.id = "copied_content";
        copied_content_container.appendChild(copied_div);
        
        var resize = function (e) {

            copied_div.style.width = source_div.offsetWidth + "px";
            copied_div.style.height = source_div.offsetHeight + "px";
        };

        var move = function (x, y) {
            magnifier.style.left = (x) + "px";
            magnifier.style.top = (y) + "px";

            copied_content_container.style.transform = "matrix(" + scale + ",0,0," + scale + "," + (-scale * x + 100) + "," + (-scale * y + 100) + ")";
        }

        function genericTouchHandler(f) {
            return function (e) {
                if (e.touches.length == 1) {
                    if (f(e.touches[0])) {
                        e.preventDefault();
                        return false;
                    }
                }
            }
        }


        var mouse_down = function (e) {
            animation_cancelled = true;

            var rect = magnifier.getBoundingClientRect();

            dragging = true;
            drag_dx = rect.left - e.pageX;
            drag_dy = rect.top - e.pageY;

            window.onmousemove = mouse_move;
            window.ontouchmove = genericTouchHandler(mouse_move);

            window.onmouseup = mouse_up;
            window.ontouchend = mouse_up;

            return true;
        };

        var mouse_move = function (e) {
            if (dragging)
                move(e.pageX + drag_dx, e.pageY + drag_dy);
        }

        var mouse_up = function () {
            dragging = false;

            window.onmousemove = undefined;
             window.ontouchmove = undefined;
            
            window.onmouseup = undefined;
            window.ontouchend = undefined;
        }

        magnifier.onmousedown = mouse_down;
        magnifier.addEventListener("touchstart", genericTouchHandler(mouse_down), false);

        window.addEventListener("resize", resize);

        resize();

        
        var startingTime;
        var totalElapsedTime;


        var duration = 2.0 * 1000;
        var x = 300;
        var y = -400;
        function animate(currentTime)
        {
            if (animation_cancelled)
                return;

            if (!startingTime)
                {startingTime = currentTime;}
            totalElapsedTime=(currentTime-startingTime);

            if (totalElapsedTime < duration) {
                requestAnimationFrame(animate);
            }
            var t = Math.min(1.0, totalElapsedTime / duration);
            var nt = 1-t;
            t = 1 - (t*t*nt*nt*8 + t*t*t*nt*4 + t*t*t*t);

            var dx = x * t;
            var dy = y * t;

            move(rect.left + rect.width/2 + dx, rect.top + rect.height/2 + dy);
        }

        var rect = not_found_div.getBoundingClientRect();


        if (requestAnimationFrame) {
            move(rect.left + rect.width/2 + x, rect.top + rect.height/2 + y);
            requestAnimationFrame(animate);
        }
        else {
            move(rect.left + rect.width/2, rect.top + rect.height/2);
        }

    </script>
</body>

</html>