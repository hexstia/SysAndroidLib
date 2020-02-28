// 获取后缀
String.prototype.getSuffix = function () {
    let index = this.lastIndexOf(".")

    if (index == -1) {
        return null
    } else {
        return this.substring(index).toLowerCase()
    }

}

// 判断是否是图片 地址
String.prototype.isPicture = function () {
    let index = this.lastIndexOf(".")

    if (index == -1) {
        return false
    } else {
        let suf = this.substring(index)
        var ImgType = [".gif", ".jpeg", ".jpg", ".bmp", ".png"];//图片
        let sufIndex = ImgType.indexOf(suf)

        return sufIndex != -1
    }
}

// 替换某位置上的字符串
String.prototype.replaceStrIndex = function(index:number,changeStr:string){
    if(this.length >= index + changeStr.length){
        return this.substr(0, index) + changeStr+ this.substr(index + changeStr.length);
    }else{
        console.log('替换超过了字符串长度');
        return this;
    }
}

let c = 0

export default c