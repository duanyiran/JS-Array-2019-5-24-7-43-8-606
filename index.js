// 阅读推荐的链接，复习JavaScript中数组的相关方法

// 写程序判断下列变量是不是数组类型。
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
//TODO


// 编写程序，将下面数组中的每一项都乘以2。
var a = [1, 2, 3, 4, 5];
// TODO should output [2,4,6,8,10]



// 编写程序，按下面的要求输出结果。
var colors = ["Red", "Green", "White", "Black"];
//TODO case 1 output: 'Red Green White Black'
// case 2 output: 'Red+Green+White+Black'
// case 3 output: 'Red,Green,White,Black'
document.write(colors[0]+" "+colors[1]+" "+colors[2]+" "+colors[3])
document.write(colors[0]+"+"+colors[1]+"+"+colors[2]+"+"+colors[3])
document.write(colors)



// 编写程序，将下面数组中的数字按从大到小的顺序排序。
var a = [5, 1, 8, 10, 4];
//TODO should output: 
        <script type="text/javascript">
　　　　　　　//创建数组元素a
            var a = [5, 1, 8, 10, 4];
　　　　　　　//创建每次循环存储最大值的变量
            var max;
　　　　　　　//遍历数组，默认a中的某一个元素为最大值，进行逐一比较
            for(var i=0; i<a.length; i++){
　　　　　　　　　　//外层循环一次，就拿a[i] 和 内层循环a.legend次的a[j] 做对比
                for(var j=i; j<a.length; j++){
                    if(a[i]<a[j]){
                        //如果a[j]大就把此时的值赋值给最大值变量max
　　　　　　　　　　　　　　 max=a[j];
                        a[j]=a[i];
                        a[i]=max;
                    }
                }
            }
            document.write(a.toString()+"<br>"); 
        </script>


// 编程程序，找出下列数组中出现频率最高的元素。
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//TODO should output: 'a'
function findMost(arr) {
    if (!arr.length) return;
    if (arr.length === 1) return 1;
    var res = {};
    // 遍历数组
    for (var i = 0, l = arr.length; i < l; i++) {
        if (!res[arr[i]]) {
            res[arr[i]] = 1;
        } else {
            res[arr[i]]++;
        }
    }
    // 遍历 res
    var keys = Object.keys(res);
    var maxNum = 0, maxEle;
    for (var i = 0, l = keys.length; i < l; i++) {
        if (res[keys[i]] > maxNum) {
            maxNum = res[keys[i]];
            maxEle = keys[i];
        }
    }
    return '出现次数最多的元素为:' + maxEle + ', 出现次数为:' + maxNum;
}

console.log(findMost(arr));
