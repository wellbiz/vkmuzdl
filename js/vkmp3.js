$('body > div').eq(0).parent().append('<style>div.get_it_btn {position: absolute; background: #FFF; z-index: 500; display: none; height: 16px; padding-left: 3px; padding-right: 3px;} div.get_it_btn:hover{background-color: #EDF1F5;} div.get_it_btn a{color: #2B587A}</style>');
$('body > div').eq(0).parent().append('<div class="get_it_btn"><a>Download</a></div>');
var _get_it_btn = $('div.get_it_btn');
$(document).on('mouseenter', 'div.play_new', function(event) {
    if (_get_it_btn.css('display') == 'none') {
        var url = $(this).parents().eq(1).children('input').attr('value');
        var title = $(this).parents().eq(2).children(".info").children("div.title_wrap").text();
        var position = $(this).offset();
        _get_it_btn.css({
            'left':position.left+'px',
            'top':position.top+$(this).height()+'px',
            'display':'block'
        }).children('a').attr({
            'href':url.replace(/(.*),[0-9]*/,"$1"), 
            'download':title.replace(/(.*) \([^)(]*\)$/,"$1").trim()+'.mp3'
        });
    }
}).on('mouseleave', 'div.play_new', function(event) {
    var position = $(this).offset();
    if (event.pageY < position.top+$(this).height())
        _get_it_btn.css('display','none');
});
_get_it_btn.on('mouseleave', function(event) {
    _get_it_btn.css('display','none');
}).children('a').on('click',function() {
    $(this).parent().css('display','none');
});