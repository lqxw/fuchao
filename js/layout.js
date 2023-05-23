// +----------------------------------------------------------------------
// | desc: global js
// +----------------------------------------------------------------------
// | Created By 2016-10-14
// +----------------------------------------------------------------------
// | Author: zhangliang 
// +----------------------------------------------------------------------

/**
 *desc:初始化加载
 *@param void;
 *@return void;
 */
$(function(){
  //重置rem,1rem=100px
  func.changeSize();
  func.dot();
  func.SwicthNavgation();
});

/**
 *desc:构造函数 
 *@param void;
 *@return void;
 */
function Func(){};

 /**
 *desc:窗口大小改变执行
 *@param void;
 *@return void;
 */
 Func.prototype.changeSize=function(){
   //重置rem,1rem=100px
   func.mobileAnswer();
   $(window).resize(function(){
      func.mobileAnswer();
   });
 };

 /**
 *desc:重置rem,1rem=100px
 *@param void;
 *@return void;
 */
 Func.prototype.mobileAnswer=function(){
	 var deviceWidth = document.documentElement.clientWidth;
     if(deviceWidth > 750){
         deviceWidth = 750;
     }
     $("html").css("font-size",deviceWidth / 7.5 + 'px');
 };
 /**
 *desc:切换导航
 *@param void;
 *@return void;
 */
Func.prototype.SwicthNavgation = function () {
    var scrollTop = Math.max(document.documentElement.scrollTop, document.body.scrollTop);
    if (scrollTop != 0) {
        $("#Fixheader").addClass("fixed");
    }
    //根据视窗改变导航显示状态
    $(window).scroll(function () {
        var mouseMoveHeight = $(window).scrollTop();
        if (mouseMoveHeight > 0) {
            $("#Fixheader").addClass("fixed");
        } else {
            $("#Fixheader").removeClass("fixed");
           
        }
    });

};

/**
*desc:多行超过隐藏
*@param void;
*@return void;
*/
Func.prototype.dot = function () {
    if (typeof(jQuery.fn.dotdotdot) != "function") {
        return;
    };
    $(".dot").dotdotdot({
        wrap: 'letter',
        after: 'a'
    });
};




/**
 *desc:构造函数实例化
 */
var func = new Func();