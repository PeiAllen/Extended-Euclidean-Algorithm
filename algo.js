/*eslint-env browser*/
function go(){
        var a=parseInt(document.getElementById("first").value);
        var b=parseInt(document.getElementById("second").value);
        var temp1=new Array(4);
        if(b>a){
        temp1 =Euclidean(a,b);
        }
        else{
        temp1 =Euclidean(b,a);
        }
        if(temp1[2]<0){
        document.getElementById("GCF").innerHTML=(gcf+"="+temp1[0]+"*"+temp1[1]+""+temp1[2]+"*"+temp1[3]);
        }
        else{
        document.getElementById("GCF").innerHTML=(gcf+"="+temp1[0]+"*"+temp1[1]+"+"+temp1[2]+"*"+temp1[3]);
        }


}

function LC(){
 var n =parseInt(document.getElementById("n#").innerHTML);
    var temp1=new Array(n+1);
    for(var i =2;i<=Math.ceil(n/2);i++){
        if(!temp1[i]){
            if(n%i==0){
                for(var j=1;j<=Math.floor(n/i);j++){
                    temp1[j*i]=true;
                }
            }
        }
    }
    var a="";
    for(var i=1;i<n;i++){
        if(!temp1[i]){
            a=a.concat(" "+i+",");
        }
    }
    if(n==1){
    a=a.concat(" 1,");
    }
    a=a.substring(1,a.length-1);
    document.getElementById("solution2").innerHTML=(a);    
}

function CRT(){
    var a=document.getElementById("formula1").innerHTML;
    var b=document.getElementById("formula2").innerHTML;
    var a1 =a.split("mod");
    var b1 =b.split("mod");
    var c=parseInt(a1[1].substring(0,a1[1].length-1));
    var d=parseInt(b1[1].substring(0,b1[1].length-1));
    var c1=parseInt(a1[0].substring(0,a1[0].length-1));
    var d1=parseInt(b1[0].substring(0,b1[0].length-1));
    var temp1=new Array(4);
    var change=false;
        if(d>c){
        temp1 =Euclidean(c,d);
        }
        else{
        temp1 =Euclidean(d,c);
            change=true;
        }
    var p;
    if(change){
    p=temp1[0]*temp1[1]*d1+temp1[2]*temp1[3]*c1; 
    }
    else{
    p=temp1[0]*temp1[1]*c1+temp1[2]*temp1[3]*d1;
    }
    var l=c*d;
    document.getElementById("solution1").innerHTML=("X≡"+p+"(mod "+l+")");
    
}
function Test(){
    
}
function Dio(){
    var a=document.getElementById("equation").innerHTML;
    var a1=a.split("=");
    var a2;
    if(a1[0].includes("-")){
        a2=a1[0].split("-");
    }
    else{
        a2=a1[0].split("+");
    }
    var b=parseInt(a2[0].substring(0,a2[0].length-1));
    var c=parseInt(a2[1].substring(0,a2[1].length-1));
    var temp1=new Array(4);
        if(b>c){
        temp1 =Euclidean(c,b);
        }
        else{
        temp1 =Euclidean(b,c);
        }
    if(Math.abs(temp1[0])==Math.abs(b)||Math.abs(temp1[0])==c){
        if(Math.abs(temp1[2])==Math.abs(b)||Math.abs(temp1[2])==c){
        temp1[1]*=parseInt(a1[1])/gcf;
        temp1[3]*=parseInt(a1[1])/gcf;
        }
        else{
        temp1[1]*=parseInt(a1[1])/gcf;
        temp1[2]*=parseInt(a1[1])/gcf;   
        }
    }
    else{
    if(Math.abs(temp1[2])==Math.abs(b)||Math.abs(temp1[2])==c){
        temp1[0]*=parseInt(a1[1])/gcf;
        temp1[3]*=parseInt(a1[1])/gcf;
        }
        else{
        temp1[0]*=parseInt(a1[1])/gcf;
        temp1[2]*=parseInt(a1[1])/gcf;   
        }     
    }
    if(temp1[2]<0){
        document.getElementById("solution").innerHTML=(temp1[0]+"*"+temp1[1]+""+temp1[2]+"*"+temp1[3]+"="+a1[1]);
        }
        else{
        document.getElementById("solution").innerHTML=(temp1[0]+"*"+temp1[1]+"+"+temp1[2]+"*"+temp1[3]+"="+a1[1]);
        }
}
var formulas = [];
    var gcf;
    function Euclidean(a, b){
        var c=Math.floor(a/b);
        var d=a%b;
        formulas.push(new Array(a,c,b,d));
    if(d==0){
    formulas.pop();
    var temp = formulas.pop();
    gcf=temp[3];
    return Extended(new Array(1,temp[0],-temp[1],temp[2]));
    }
    else{
    return Euclidean(b,d);
    }
    }
    
    function Extended(b){
        if(formulas.length>0){
    if(b[1]>b[3]){
        var temp = formulas.pop();
    b[0]+=b[2]*-temp[1];
        b[3]=temp[0];
    }
    else{
    var temp2 = formulas.pop();
    b[2]+=b[0]*-temp2[1];
     b[1]=temp2[0];
    }
    return Extended(b);
        }
        else{
        return b;
        }
    }
    class f{
        constructor(a,b,c,d){
            this.a =a;
            this.b=b;
            this.c=c;
            this.d=d;
        }
        
    }