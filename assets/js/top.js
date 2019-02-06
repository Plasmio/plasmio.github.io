(function(window,document){
	document.getElementById("act-mail").addEventListener("click",e=>{
		e.preventDefault();
		let target=document.getElementById("mail");
		let arr1=[15,11,0,18,12,8,14,-51,17],arr2=[6,12,0,8,11,-51,2,14,12];
		target.textContent="";
		target.appendChild(document.createTextNode(String.fromCharCode.apply(String,arr1.map(a=>a+97))+"@"+String.fromCharCode.apply(String,arr2.map(a=>a+97))));
	});
})(window,window.document);
