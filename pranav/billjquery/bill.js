$(document).ready(function() {
	function ans() {
		var ans = 0;
		$("input[type=number]").each(function() {
			if(this.value.length != 0 && Number (this.value) >= 0) {
				$(this).parent().next().text((Number($(this).parent().prev().text()) * Number (this.value)).toFixed(2));
				ans += Number($(this).parent().prev().text()) * Number (this.value);
			}
		});
		return ans.toFixed(2);
	}
	$("input[type=number]").on('change keyup', function() {
		$("#answer").text(ans);
	});
	$("#reset").click(function() {
		$(".cost").text("0");
		$("#answer").text("0");
	});
});