/**
 * Created by szhspc167 on 2017/3/13.
 */

/**
 * 将字符串前后短的空格去除。
 * @returns {string}
 */
String.prototype.myTrim = function () {
    var start, end;
    start = 0;
    end = this.length - 1;
    while (start <= end && this.charAt(start) == " ") {
        start++;
    }
    while (start <= end && this.charAt(end) == " ") {
        end--;
    }
    return this.substring(start, end + 1);
}

/**
 *将字符串转化为字符串数组
 */
String.prototype.toCharArray = function () {
    var char = [];
    for (var i = 0; i < this.length - 1; i++) {
        char[i] = this.charAt(i);
    }
    return char;
}


String.prototype.reverse = function () {
    var str = this.toCharArray();

    function swap(arrTemp, i, j) {
        var temp = arrTemp[i];
        arrTemp[i] = arrTemp[j];
        arrTemp[j] = temp;
    }

    for (var i = 0, j = this.length - 1; i < j; i++, j--) {
        swap(str, i, j);
    }
    return str.join("");
}
