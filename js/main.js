function copy(arg, text){
	var copyinput = document.getElementById("copyinput");
	copyinput.value = arg;
	copyinput.removeAttribute("hidden");
	copyinput.select();
	copyinput.setSelectionRange(0, 999999999);
	document.execCommand('copy');
	copyinput.setAttribute("hidden", "");
	if(text){
		M.toast({html: '<i class="fs-4 fad fa-check text-success"></i>&nbsp; ' + text});
	}else{
		M.toast({html: '<i class="fs-4 fad fa-check text-success"></i>&nbsp; Copied'});
	}
}