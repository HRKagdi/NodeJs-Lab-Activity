const fs=require('fs');
const path=require('path');
let data=fs.readFileSync(path.resolve('data.json'));
var marks=JSON.parse(data);

//func(4);
//GetHighestMarks();
exports.GetHighestMarks=function(){

    var result = [];
    var name="";
    for(var i in marks)
        result.push([i, marks[i]]);

    console.log(result.length);
    let maxi=-1;
    for(var i=0;i<result.length; i++){
        var sum=0;
        var temp=result[i][1];
        for(var j=0;j<temp.length;j++){
            sum+=temp[j];
        }
        console.log(sum);
        if(maxi<sum){
            maxi=sum;
            name=result[i][0];
        }
    }
    return name;
};

exports.GetSubjectiToppers=function(index){
    var result = [];
    var name="";
    for(var i in marks)
        result.push([i, marks[i]]);

    var ans=[];
    for(var i=0;i<result.length;i++){
        var temp=result[i][1];
        var name=result[i][0];
        for(var j=0;j<temp.length;j++){
            if(j==index){
                ans.push([name,temp[j]]);
                break;
            }
        }
    }
    ans.sort((a, b) => ((typeof b[1] === "number") - (typeof a[1] === "number")) || (a[1] > b[1] ? 1 : -1));
    return ans.toString();
}