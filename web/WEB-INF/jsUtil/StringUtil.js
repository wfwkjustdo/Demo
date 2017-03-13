/**
 * Created by szhspc167 on 2017/3/13.
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
