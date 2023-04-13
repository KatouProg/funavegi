var prevScrollpos = window.pageYOffset;
        window.onscroll = function() {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.getElementById("menuTitle").style.top = "45px";
        } else {
            document.getElementById("menuTitle").style.top = "-50px";
        }
        prevScrollpos = currentScrollPos;
        }