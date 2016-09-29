window.onload = function () {
    var oContent = document.getElementById("content");
    var oDivLeft = document.getElementById("left");
    var oUl = oDivLeft.getElementsByTagName("ul")[0];
    var oLis = oDivLeft.getElementsByTagName("li");
    var oPicTitle = oDivLeft.getElementsByTagName("img");
    var oPTitle = oDivLeft.getElementsByTagName("p");
    var oDivRight = document.getElementById("right");
    var oUlContent = oDivRight.getElementsByTagName("ul")[0];
    var oLisContent = oDivRight.getElementsByTagName("li");
    var oPicContent = oDivRight.getElementsByTagName("img")[0];
    var titlePic  =["images/title-1.png","images/title-2.png","images/title-3.png","images/title-4.png"];
    var titleP = ["卡通图片","风景图片","人物图片","其他图片"];
    var contents = [
        ["夜色朦胧","只想和你在一起","一个人的世界","有你真好"],
        ["瀑布飞流下晴川","声声水落夕阳下","别用一番高原情","水清如许","世外桃源"],
        ["将最美的冬天送给你","远行是为了更好的相聚","还是喜欢和你在一起","有你的世界才是美好的"],
        ["锐动的字符串","樱花中的鸟鸣","外面的时世界好神奇","可爱小萝莉","风儿轻轻吹"]
        ];
    var picturs =[
        ["images/carton-1.jpg","images/carton-2.jpg","images/carton-3.jpg","images/carton-4.jpg"],
        ["images/landscape-1.jpg","images/landscape-2.jpg","images/landscape-3.jpg","images/landscape-4.jpg","images/landscape-5.jpg"],
        ["images/people-1.jpg","images/people-2.jpg","images/people-3.jpg","images/people-4.jpg"],
        ["images/other-1.jpg","images/other-2.jpg","images/other-3.jpg","images/other-4.jpg","images/other-5.jpg"]];
    var timer = null;
    var lindex = 0;
    var yindex = 0;
    //添加自动切换效果
    function show(){
        timer = setInterval(function (){
            titleSelected = oLis[lindex];
            titleSelected.style.background ="#f1f1f1";
            selectItem = oLisContent[yindex];
            selectItem.style.background  ="#666";
            oPicContent.src = picture[yindex];
            yindex++;
            if(yindex==contents[lindex].length){
                yindex=0;
                lindex++;
            }
            if(lindex==titleP.length){
                lindex=0;yindex=0;
            }
            content = contents[lindex];
            picture = picturs[lindex];
            changes(content,picture);
            oLis[lindex].style.background = "white";
            oLisContent[yindex].style.background  ="pink";
            oPicContent.src = picture[yindex];
        },2000);
    }
    //设置鼠标移入移出效果
    oContent.onmouseout = show;
    oContent.onmouseover = function () {
        clearTimeout(timer);
    }
    //设置启动效果
    timer = setTimeout(show,2000);
    for(var i=0;i<titlePic.length;i++){
        oUl.innerHTML += "<li><img><p></p></li>";
    }
    var titleSelected;
    var content;
    var picture;
    var selectItem;
    //初始化页面效果
    function init(lindex){
        titleSelected = oLis[lindex];
        titleSelected.style.background = "white";
        content = contents[lindex];
        picture = picturs[lindex];
        changes(content,picture);
    }
    init(lindex);
    //添加选项文字图片和选择效果
    for(var i=0;i<oLis.length;i++){
        oLis[i].index = i;
        oLis[i].className ="titleli";
        oPicTitle[i].className ="titleimg";
        oPicTitle[i].src = titlePic[i];
        oPTitle[i].innerHTML = titleP[i];
        oLis[i].onclick = function () {
            titleSelected.style.background ="#f1f1f1";
            lindex = this.index;
            yindex=0;
            init(lindex);
        }
    }
    //添加图片和文字及选择效果
    function changes(content,picture){
        oUlContent.innerHTML = "";
        for(var i=0;i<content.length;i++){
            oUlContent.innerHTML += "<li></li>"
        }
        selectItem = oLisContent[yindex];
        selectItem.style.background  ="pink";
        oPicContent.src = picture[yindex];
        for(var i=0;i<oLisContent.length;i++){
            oLisContent[i].style.width = 800/oLisContent.length -2+"px";
            oLisContent[i].innerHTML = content[i];
            oLisContent[i].index = i;
            oLisContent[i].onclick = function () {
                selectItem.style.background  ="#666";
                selectItem = this;
                yindex = this.index;
                oLisContent[yindex].style.background  ="pink";
                oPicContent.src = picture[yindex];
            }
        }
    }
}