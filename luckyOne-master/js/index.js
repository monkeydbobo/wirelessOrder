function buildPhotosURL(photos) {
    buildDoublePhotosURL(photos);
    buildSinglePhotosURL(photos);
}

function buildDoublePhotosURL(photos) {
    var cnt = 204;
    var base = "21551";
    for (var i = 1; i <= cnt; i++) {
        var str = i + "";
        while (str.length < 3) str = "0" + str;
        if (str == "103" || str == "158") continue;
        photos.push(base + str);
    }
}

function buildSinglePhotosURL(photos) {
    buildSinglePhotosURLInRange(1,2,photos);
    buildSinglePhotosURLInRange(4,5,photos);
    buildSinglePhotosURLInRange(8,10,photos);
    buildSinglePhotosURLInRange(12,13,photos);
    buildSinglePhotosURLInRange(16,18,photos);
    buildSinglePhotosURLInRange(20,22,photos);
    buildSinglePhotosURLInRange(24,24,photos);
    buildSinglePhotosURLInRange(26,26,photos);
    buildSinglePhotosURLInRange(29,43,photos);
    buildSinglePhotosURLInRange(45,45,photos);
    buildSinglePhotosURLInRange(47,51,photos);
    buildSinglePhotosURLInRange(54,54,photos);
    buildSinglePhotosURLInRange(56,57,photos);
    buildSinglePhotosURLInRange(59,59,photos);
    buildSinglePhotosURLInRange(61,63,photos);
    buildSinglePhotosURLInRange(66,66,photos);
    buildSinglePhotosURLInRange(69,70,photos);
    buildSinglePhotosURLInRange(73,77,photos);
    buildSinglePhotosURLInRange(79,79,photos);
    buildSinglePhotosURLInRange(84,84,photos);
    buildSinglePhotosURLInRange(93,93,photos);
    buildSinglePhotosURLInRange(95,96,photos);
    buildSinglePhotosURLInRange(103,103,photos);
    buildSinglePhotosURLInRange(106,108,photos);
    buildSinglePhotosURLInRange(110,111,photos);
    buildSinglePhotosURLInRange(116,117,photos);
    buildSinglePhotosURLInRange(120,120,photos);
    buildSinglePhotosURLInRange(122,122,photos);
    buildSinglePhotosURLInRange(125,126,photos);
    buildSinglePhotosURLInRange(129,130,photos);
    buildSinglePhotosURLInRange(132,135,photos);
    buildSinglePhotosURLInRange(139,140,photos);
    buildSinglePhotosURLInRange(146,147,photos);
    buildSinglePhotosURLInRange(154,154,photos);
    buildSinglePhotosURLInRange(156,158,photos);
    buildSinglePhotosURLInRange(160,161,photos);
    buildSinglePhotosURLInRange(164,166,photos);
    buildSinglePhotosURLInRange(173,173,photos);
    buildSinglePhotosURLInRange(175,176,photos);
    buildSinglePhotosURLInRange(180,180,photos);
    buildSinglePhotosURLInRange(182,182,photos);
    buildSinglePhotosURLInRange(186,188,photos);
    buildSinglePhotosURLInRange(190,191,photos);
    buildSinglePhotosURLInRange(193,193,photos);
    buildSinglePhotosURLInRange(195,196,photos);
    buildSinglePhotosURLInRange(198,198,photos);
    buildSinglePhotosURLInRange(201,203,photos);
    buildSinglePhotosURLInRange(205,205,photos);
    buildSinglePhotosURLInRange(207,207,photos);
    buildSinglePhotosURLInRange(212,212,photos);
    buildSinglePhotosURLInRange(214,214,photos);
    buildSinglePhotosURLInRange(218,218,photos);
    buildSinglePhotosURLInRange(220,224,photos);
    buildSinglePhotosURLInRange(227,227,photos);
    buildSinglePhotosURLInRange(229,232,photos);
    buildSinglePhotosURLInRange(235,235,photos);
    buildSinglePhotosURLInRange(238,238,photos);
    buildSinglePhotosURLInRange(241,244,photos);
    buildSinglePhotosURLInRange(249,251,photos);
    buildSinglePhotosURLInRange(253,253,photos);

}

function buildSinglePhotosURLInRange(start, end, photos) {
    var base = "NB15";
    for (var i = start; i <= end; i++) {
        var str = i + "";
        while (str.length < 3) str = "0" + str;
        photos.push(base + str);
    }
}

!(function(){
    'use strict';

    var file_num = 70;
    var photo_row = 10;
    var photo_col = 6;
    var photo_num = photo_row * photo_col;
    var gallery = $('#gallery');
    var photos = [];
    var names = [];
    var basePhotos = [];
    buildPhotosURL(names);

    var cur = 1;
    while (cur <=file_num){
        var index = Math.ceil(Math.random()*(names.length - 1));
        var photoElem = 'img/'+names[index]+'.jpg';
        if (photos.indexOf(photoElem) != -1) continue;
        photos.push(photoElem);
        basePhotos.push(names[index]);
        cur++;
    }

    var loadedIndex = 1;

    $.each(photos, function(index, photo){
        var img = document.createElement('img');
        var link = document.createElement('a');
        var contentDiv = document.createElement('li');
        var wordDiv = document.createElement('div');
        var outerDiv = document.createElement('div');

        outerDiv.setAttribute("style", "position:relative;");
        wordDiv.setAttribute("style", "position:absolute; z-index:2; left:20px; top:30px; color:#cfe2f3");

        link.href = 'javascript:;';
        link.appendChild(img);
        contentDiv.appendChild(outerDiv);
        outerDiv.appendChild(link);
        outerDiv.appendChild(wordDiv);

        gallery[0].appendChild(contentDiv);

        img.onload = function(e){
            img.onload = null;
            setTimeout( function(){
                $(contentDiv).addClass('loaded');
            }, 10*loadedIndex++);
        };

        img.src = photo;

        wordDiv.innerText = basePhotos[index];

        /* 此方式会将重复图片连在一起输出
        var img = document.createElement('img');

        img.onload = function(e){
            img.onload = null;
            var link = document.createElement('a');
            var li = document.createElement('li');

            link.href = '#';
            link.appendChild(this);
            li.appendChild(link);

            gallery[0].appendChild(li);

            setTimeout(function(){
                $(li).addClass('loaded');
            }, 25*loadedIndex++);
        };
        img.src = photo;
        */
    });

    var timer_big, timer_small;
    var timer_small_slow = setInterval(function(){
        $('#gallery li:eq('+Math.ceil(Math.random()*photo_num)+')')
            .addClass('animated bounce')
            .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
                $(this)
                    .removeClass('animated bounce')
                    .find('img')
                    .attr('src','img/'+names[Math.ceil(Math.random()*(names.length - 1))]+'.jpg');
                var res = $(this).find('div');
                res[1].innerText = names[Math.ceil(Math.random()*(names.length - 1))];

            });
    },100);

    $(document).keypress(function(event){
        if(event.which == 13 || event.which == 32) {
            $('#action').click();
        }
    });

    $('#action').click(function(){
        if (timer_small_slow){
            clearInterval(timer_small_slow);
        }
        if ($(this).data('action') == 'start'){
            $(this).data('action','stop').html('Stop');
            timer_big = setInterval(function(){
                $('#gallery li.focus').removeClass('focus hover');
                $('#gallery li:eq('+Math.ceil(Math.random()*(photos.length - 1))+')').addClass('focus');
            },100);
            timer_small = setInterval(function(){
                $('#gallery li:eq('+Math.ceil(Math.random()*(names.length - 1))+') img').attr('src','img/'+names[Math.ceil(Math.random()*(names.length - 1))]+'.jpg');
                $('#gallery li:eq('+Math.ceil(Math.random()*(names.length - 1))+') div')[1].innerHTML = names[Math.ceil(Math.random()*(names.length - 1))];
            },1);
        }else{
            $(this).data('action','start').html('Go');
            $('#gallery li.focus').addClass('hover');
            window.location.href = 'index2.html?num=' + names[Math.ceil(Math.random()*(names.length - 1))];
            clearInterval(timer_big);
            clearInterval(timer_small);
        }
    });
})();
