var btnWrap = document.querySelector('.paging');
var btns = btnWrap.getElementsByClassName('a');
var current = document.getElementsByClassName('on');

function clickEvent(){	
	if (current.length > 0){
		current[0].className = current[0].className.replace(' on', '');
	}
	this.className += ' on';
}
for (i = 0; i < btns.length; i++){
	btns[i].addEventListener('click', clickEvent)
}

/*
1. clickEvent 라는 클릭함수 이벤트를 실행합니다
2. on 이라는 클래스가 하나 이상이면 
3. 현재 존재하고있는 클래스의 이름을 ''으로 대체합니다(제거합니다)
4. this 는 현재 클릭하는 btns 중 하나이고, btns 중 하나를 클릭시 'on'이라는 클래스를 추가합니다.
*/
