<script>
    function calc(a,b,c) {
        switch(c){
            case '+': 
                return a+b;
            case '-':
                return a-b;
            case '*':
                return a*b;
            case '/':
                return a/b;
            case '%';
                return a%b;
            default 
                return null;   
        }
        
    }
    let x ="y";
    let a;
    let b;
    let op;
    let res;
    do{
        a=prompt("Enter number");
        b=prompt("Enter second number");
        c=prompt("Enter operaton".'+');
        res=calc(a,b,c);
        alert("Result "+res);
        x=prompt("Enter N to exit");
    }while(x!='N'||x!='n');

</script>