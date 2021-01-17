var config = {
    //网页标题
    title:'欢迎访问',
    //项目名称
    name:'欢迎访问',

    //激活码,空时不显示该行
    key:'',
    //微信号,空时不显示该行
    wx:'',

    //图片数量
    imageItem:'3',
    //图片后缀
    imageSuffix:'.jpg',
    //图片前缀
    imagePrefix:'',

    //底部版权信息
    copyright:'版权  ',
    copyright1:'',

    //弹窗下方提示
    mwTips:'携手共进 合作共赢',
    //弹窗主色
    mwColor:'rgb(252, 102, 165)',

    //二维码图片名，空为不显示
    codeName:'code.jpg',

    //底部悬浮海报图片名，空为不显示
    bPoster:'bp.gif',

    //开启导航条
    nav:true,
    //导航颜色
    navGC:'#000',
    //导航字体
    navColor:'#fff',
    //导航logo图片名，空为不显示
    navLogo:'logo.png',

    //浮窗位置 参数为left(左边)，right(右边)
    floatWindowsP:'right',

    //复制微信号后是否打开微信
    copy_and_open:true,

    //PC端周围的阴，空为不显示
    PC_shadow:"#000",
    //PC端的背景颜色
    PC_BackgroundColor:{
        //颜色1
        startColor:"#fff",
        //颜色2
        endColor:'#fff',
        //颜色1到颜色2的角度,[左上角 left top][右下角 right top][左下角 left bottom][右下角 right bottom][从上到下 top ][从下到上bottom][从左到右 left][从右到左 rigth]
        angle:'top'
    },
    //PC端背景图片名，空为不显示
    PC_BackgroundImage:'',

    //海报滚动速度,0时不显示
    posterSpeed:0,
    //海报图片，空为不显示
    poster:[
        {
            image:'poster1.png'
        },
        {
            image:'poster2.png'
        },
        {
            image:'poster3.png'
        }
    ],

    //浮动留言区交替间隔时间(非动画播放)，0为不开启
    floatUserSpeed:2000,
     //留言区内容
    userAttention: [
        {
            image:'yan.jpg',
            userName:'晴天小猪',
            attention:'谢谢你们的干货！很受用',
            time:'今天',
        },
        {
            image:'bing.jpg',
            userName:'海~~绵',
            attention:'我加你微信了，快帮我通过啊啊啊',
            time:'3分钟前',
        },
        {
            image:'3.jpeg',
            userName:'皮皮虾',
            attention:'导师团队有关于[name]的资料太丰富了感谢分享',
            time:'10分钟前',
        },
        {
            image:'4.jpg',
            userName:'那些年',
            attention:'支持！！都是口口相传的。介绍给大家，[name]!',
            time:'2小时前',
        },
        {
            image:'5.jpeg',
            userName:'卡已依',
            attention:'[name]我觉得背景确实很强。',
            time:'6小时前',
        },
        {
            image:'6.jpg',
            userName:'大大大猪猪侠',
            attention:'哈哈哈，支持[name]',
            time:'1天前',
        },
        {
            image:'7.jpg',
            userName:'fdihgihg',
            attention:'厉害耶!!!!!!!!给[name]个好好评吧，值得分享，可以试试',
            time:'1天前'
        },
        {
            image:'61.jpg',
            userName:'fg520',
            attention:'一个字好![name]是真的很棒',
            time:'2天前',
        },
        {
            image:'71.jpg',
            userName:'再见',
            attention:'感谢[name]，可以让我任性一把',
            time:'3天',
        },
        {
            image:'tp.png',
            userName:'好雨中的芭蕾人',
            attention:'[name]这么火! 我要努力拼一把！',
            time:'5天前',
        },
        {
            image:'juan.png',
            userName:'符银娟',
            attention:'感谢[name]，随便发个朋友圈都有好多人来咨询',
            time:'5天前',
        },
        {
            image:'jian.png',
            userName:'君琴',
            attention:'[name]导师一对一指导让我很有信心！',
            time:'5天前',
        },
        {
            image:'liu.png',
            userName:'刘嘉宁',
            attention:'还好遇到了[name]',
            time:'5天前',
        },
        {
            image:'e.png',
            userName:'Emma',
            attention:'加你微信了，快帮我通过下',
            time:'5天前',
        },
        





    ],
    //--------------------------------------------------------
    //脚本运行区域，非配置文件
    //--------------------------------------------------------
    //更新页面
    update:function () {
        document.title  = config.title;//网站标题

        //设置优惠券
        $('.wx').html(config.wx);
        $('.key').html(config.key);

        //判断优惠券或者微信号是否为空，空就隐藏
        var navItem = 2;
        if (config.wx == 0) {
            $('#nav_wx').hide();
            navItem -- ;
        };
        if (config.key == 0) {
            $('#nav_key').hide();
            navItem -- ;
        };
        if (navItem == 0){
            $('#nav_title').html(config.title);
        }else {
            $('#nav_title').hide();
        }

        //是否开启导航条
        if (!config.nav){
            $('#nav').hide();
        }

        //设置导航条属性
        $('#nav').css({
            'background-color':config.navGC,
            'height': $('#nav_float').css('height'),
            'color':config.navColor,
        });

        //导航logo
        if (config.navLogo != ''){
            $('#nav_logo').css({
                'background-image':'url("image/' + config.navLogo + '")',
                'height': $('#nav_float').css('height'),
                'width':$('#nav_float').css('height'),
            });
        }else {
            $('#nav_logo').hide();
        }

        //开始插入页码图片
        var imageURL = '';
        for (var i = 1 ; i <= config.imageItem ; i ++){
            imageURL = 'image/'+ config.imagePrefix + i + config.imageSuffix;
            $('#image').append("<img src='"+ imageURL +"' width='100%' />");
        }

        //更新留言区
        var userA = null;
        var fabulou = 1286;
        for (i in config.userAttention) {
            userA = $('.attentionList:first').clone(true);

            userA.find('.attentionName').html(config.userAttention[i].userName);
            userA.find('.attentionValue').html(config.userAttention[i].attention.replace('[name]',config.name));
            userA.find('.attentionTime').html(config.userAttention[i].time);
            userA.find('.attentionFabulousItem').html(parseInt(fabulou));
            userA.find('.attentionImage').css({'background-image': 'url("../library/image/userImage/' + config.userAttention[i].image + '")'});
            userA.css('display','block');
            $('#attention').append(userA);
            fabulou = fabulou + (fabulou / 6);
        }

        //底部悬浮海报
        if (config.bPoster == ''){
            $('#bottomNav').hide();
        }else {
            $('#bottomNav img').on("load",function (e) {
                $('#bottomNav').css("height",e.target.height)
            });
            $('#bottomNav img').attr("src", 'image/' + config.bPoster);
        }

        //浮动窗口
        var floatWindowsImg = $('#floatWindows img');
        floatWindowsImg.on("load",function (e) {
            $('#floatWindows').css({
                "height" : e.target.height,
                "width" : e.target.width,
            });
        });
        if (config.onMobile()) {
            floatWindowsImg.attr("src", 'image/wx.gif');
            $('#floatWindows').css({
                right:0,
                left: 0,
            });
            $('#floatWindows').css(config.floatWindowsP,'-10rem')
        }else {
            floatWindowsImg.attr("src", 'library/image/floatWindow.gif');
            $('#floatWindows').css(config.floatWindowsP,0)
        }

        //版权信息
        $('#copyright').html(config.copyright);
        $('#copyright1').html(config.copyright1);

        //页面二维码
        if (config.codeName !== ''){
            $('#code').attr("src", "image/" + config.codeName);

            if (config.onMobile()){
                $('#mwCode').attr("src", "image/" + config.codeName);
            }else {
                $('#mwCodeMain').hide();
            }

        }else {
            $('#codeMain').hide();
            $('#mwCodeMain').hide();
        }

        //弹窗信息
        $('#mw_wx input').val(config.wx);
        $('#mw_key input').val(config.key);
        $('#mw_wx input').click(function () {
            config.copyText(config.wx);
            config.opeoWX();
        });
        $('#mw_key input').click(function () {
            config.copyText(config.key);
        });
        if (config.wx == '')  $('#mw_wx').hide();
        if (config.key == '')  $('#mw_key').hide();
        $('#mwTips').html(config.mwTips);
        $('#mwMain').css("height",$('#mwHeight')[0].offsetHeight);
        $('#mwTitle').css('background-color',config.mwColor);
        $('#mwMain input').css('background-color',config.mwColor);
        $('.onClickMW').click(function () {
            config.openMWindows(true);
        });
        $('#mwClose').click(function () {
            config.openMWindows(false);
        });
        $('#mWindows').hide();

        //PC端背景
        if (config.PC_BackgroundImage != ''){
            //图片
            $('body').css('background-image','url("image/' + config.PC_BackgroundImage + '")');
        }else {
            //PC端背景颜色更新
            $('body').css('background','linear-gradient(to '+ config.PC_BackgroundColor.angle +',' + config.PC_BackgroundColor.startColor + ', ' + config.PC_BackgroundColor.endColor + ')');
        }

        //PC端的边框阴影
        if (config.PC_shadow != '') {
            $('#main').css('box-shadow','0 0 10px -1px ' + config.PC_shadow);
        }


        //海报更新
        if (config.posterSpeed == 0 || config.poster.length == 0){
            $('#poster').hide();
        }else {
            for (i in config.poster){
                $('#posterRegion').append("<img src='image/"+ config.poster[i].image +"'/>")
            }
            $('#posterRegion img').on("load",function (e) {
                if (config.onMobile()) {
                    $('#poster').css('height', $('#posterRegion')[0].clientHeight - 1);
                }
            });
            if (config.onMobile()) {
                $('#poster').css('height', $('#posterRegion')[0].clientHeight - 1);
                $('#poster').click(function () {
                    config.posterPage(true)
                })
            }
            config.posterPage();
        }

        //启动浮动用户留言
        if (config.floatUserSpeed > 0) {
            setTimeout(function () {
                config.floatUserUpdate()
            },2000)
        }

    }
    ,


    /********************************************************************************
     *是否为手机
     */
    onMobile:function () {
        return $('#main')[0].offsetWidth >= 640;
    },
    /*
     *打开或关闭弹窗
     */
    openMWindows:function (show) {
        if (show){
            $('#mWindows').show();
        }else {
            $('#mWindows').hide();
        }
    },
    /*
     *复制文本
     */
    copyText:function (text) {
        $('#copyInput').val(text);
        $('#copyInput').show();

        const range = document.createRange();
        range.selectNode(document.getElementById('copyInput'));

        const selection = window.getSelection();
        if(selection.rangeCount > 0) selection.removeAllRanges();
        selection.addRange(range);

        //document.getElementById("copyInput").select();
        document.execCommand("Copy"); // 执行浏览器复制命令
        alert("复制成功，可以进行粘贴了");
        $('#copyInput').hide();
    },
    /*
     *打开微信
     
    opeoWX:function () {

        if (config.onMobile() || !config.copy_and_open) return;
        alert('正在为您尝试跳转到微信。');
        var url = 'weixin://'
        var timeout, t = 1000, hasApp = true;
        setTimeout(function () {
            document.body.removeChild(ifr);
        }, 2000)

        var t1 = Date.now();
        var ifr = document.createElement("iframe");
        ifr.setAttribute('src', url);
        ifr.setAttribute('style', 'display:none');
        document.body.appendChild(ifr);
        timeout = setTimeout(function () {
            var t2 = Date.now();
        }, t);

    },*/
    //滚动海报换页
    posterNow:-1,
    posterPage:function (one) {
        config.posterNow ++;
        if (config.posterNow >= $('#posterRegion img').length) {
            config.posterNow = 0;
        }
        $('#posterRegion').animate({scrollLeft:$('#posterRegion img')[config.posterNow].offsetLeft});
        $('#posterPage').html(config.posterNow + 1  + "/" + $('#posterRegion img').length);
        if (one) return ;
        setTimeout(function () {
            config.posterPage();
        },config.posterSpeed);
    },

    /*
     *浮动用户留言更新
     */
    floatUserNow:-1,
    floatUserUpdate:function () {
        config.floatUserNow ++;
        if (config.floatUserNow >= config.userAttention.length) config.floatUserNow = 0;

        $('#floatUserImage').css('background-image','url("../library/image/userImage/' + config.userAttention[config.floatUserNow].image + '")')
        $('#floatUserValue').html(config.userAttention[config.floatUserNow].attention.replace('[name]',config.name));

        $('#floatUser').animate({ opacity:0.8},200);
        $('#floatUser').animate({ opacity:0.8},2400);
        $('#floatUser').animate({ marginLeft:'600px',opacity:0,},400);
        $('#floatUser').animate({marginLeft:'0.1rem'},0);

        setTimeout(function () {
            config.floatUserUpdate();
        },config.floatUserSpeed + 3000);
    }
};
config.update();