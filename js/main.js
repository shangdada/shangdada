$index=0;//记录页的下标0 1 2 3 4
$(document).ready(function(){
	//获取box标签的尺寸
	var height=$(".box").css("height");
	console.log("height="+height);
	//给page标签  设置尺寸
	$(".page").css("height",height);
	//给box添加touch触摸事件。
	//滑动//
	$(".box").swipe({
		swipe:function(event,direct){
			console.log("方向："+direct);
			if(direct=="up"){
				//向上//
				$index++;
				change();
			}else if(direct=="down"){
				//向下//
				$index--;
				change();
			}
		}
	});
	//根据id获取标签对象
	var audio=document.getElementById("music");
	//播放
	audio.play();
	$(".music").on("click",function(){
	//判断当前音乐是否在播放，还是暂停
		if(audio.paused){
		//在暂停状态   让音乐播放
		audio.play();
		$(this).attr("src","img/musicBtn.png");
		}else{
			audio.pause();
			$(this).attr("src","img/musicBtnOff.png");
	}
	});
});

function change(){
	if($index>4){//大于4 的时候 让下标到4
		$index=4;
	}else if($index<0){//小于0 的时候让下标到0
		$index=0;
	}else{
		$(".content").animate({top:-100*$index+"%"},500);
	}
}



















