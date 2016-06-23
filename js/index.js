/**
 * Created by hxr on 2016/6/19.
 */
$(function() {
    /*设置导航条各链接切换样式*/
    $('#link li').click(function(e){
         e = e || window.event;
         var tar = e.srcElement || e.target;
        $('#link li').removeClass('active');
         $(tar).addClass('active').siblings().removeClass('active');
        /*if(tar.nodeName.toLowerCase() == "li" && !$(tar).hasClass('active')){
            $(tar).addClass("active");
            $(tar).siblings().removeClass("active");
        }else{
            $(tar).removeClass("active");
        }*/
    });
});
/*$(".menu h2").click(function () {
    console.log('h2 is ciliced');
    $(this).next("ul").slideToggle(300).siblings("ul").slideUp(400);
    $(this).addClass("hover").siblings().removeClass("hover");
})
var oa = document.getElementById("menu").getElementsByTagName("a");
for (i = 0; i < oa.length; i++) {
    oa[i].onclick = function () {
        var tit = self.parent.frames["title"].document.getElementsByTagName('div')[0].getElementsByTagName('p')[0];
        tit.innerHTML = this.innerHTML;
        for (i = 0; i < oa.length; i++) {
            oa[i].className = '';
        }
        this.className = "cur";
    }
    oa[i].onfocus = function () {
        this.blur();
    }
}*/

