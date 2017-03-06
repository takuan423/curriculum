$.ajax({
	url: 'https://rti-giken.jp/fhc/api/train_tetsudo/delay.json',
	type: "GET",
	success: function(res) {
		var delay = res.responseText;
		var delayArray = delay.replace("<html><head/><body>","").replace("</body></html>","");
		var array = delayArray[1];
		var target_company = "JR東日本";
		var target_name = "中央線快速電車";
		var body = "";
		console.log(delayArray);
		console.log(array);
		for(var i = 0; i < delayArray.length; i++) {
			var company = delayArray[i].company;
			var name = delayArray[i].name;
			body = company + name;
		}
		console.log(body);
		// if (company == target_company && name == target_name) {
		// 	$('body').append('<div>' + company)
		// }
	}
});