/**
 * Created with of666.
 * Date: 13-6-7
 * Time: 下午2:50
 */


Date.prototype.format = function (format: string) {

	var o = {
		'M+': this.getMonth() + 1,
		'd+': this.getDate(),
		'h+': this.getHours(),
		'm+': this.getMinutes(),
		's+': this.getSeconds(),
		'q+': Math.floor((this.getMonth() + 3) / 3),
		S: this.getMilliseconds()
	};
	if (/(y+)/.test(format)) {
		format = format.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
	}
	for (var k in o) {
		if (new RegExp('(' + k + ')').test(format)) {
			format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length));
		}
	}
	return format;
};

Date.prototype.addDays = function (d) {
	this.setDate(this.getDate() + d);
};

Date.prototype.addWeeks = function (w) {
	this.addDays(w * 7);
};

Date.prototype.addMonths = function (m) {
	var d = this.getDate();
	this.setMonth(this.getMonth() + m);
	//if (this.getDate() < d)
	//  this.setDate(0);
};

// 获取此时间和当前时间的差
Date.prototype.differTime = function () {//di作为一个变量传进来
	//如果时间格式是正确的，那下面这一步转化时间格式就可以不用了
	// var dateBegin = new Date(d1.replace(/-/g, "/"));//将-转化为/，使用new Date
	var dateEnd = new Date();//获取当前时间

	var dateDiff = dateEnd.getTime() - this.getTime();//时间差的毫秒数
	if (dateDiff < 0) {
		dateDiff = -dateDiff
	}

	var dayDiff = Math.floor(dateDiff / (24 * 3600 * 1000));//计算出相差天数
	var leave1 = dateDiff % (24 * 3600 * 1000)    //计算天数后剩余的毫秒数
	var hours = Math.floor(leave1 / (3600 * 1000))//计算出小时数
	//计算相差分钟数
	var leave2 = leave1 % (3600 * 1000)    //计算小时数后剩余的毫秒数
	var minutes = Math.floor(leave2 / (60 * 1000))//计算相差分钟数
	//计算相差秒数
	var leave3 = leave2 % (60 * 1000)      //计算分钟数后剩余的毫秒数
	var seconds = Math.round(leave3 / 1000)


	return dayDiff + "天" + hours + "小时" + minutes + "分钟" + seconds + "秒"
	// console.log(" 相差 "+dayDiff+"天 "+hours+"小时 "+minutes+" 分钟"+seconds+" 秒")
	// console.log(dateDiff+"时间差的毫秒数",dayDiff+"计算出相差天数",leave1+"计算天数后剩余的毫秒数"
	//     ,hours+"计算出小时数",minutes+"计算相差分钟数",seconds+"计算相差秒数");
}

let c = 0
export default c