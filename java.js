let k;
k=prompt("enter the name");
if(k==="Admin")
{
    let f=prompt("Enter p");
    if(f==="TheMaster")
    {
        alert("Welcome");

    }else if(f===""||f===null){
        alert("Canceled");
    }else{
        alert("Wromng");

    }
} else if (k===""||k=== null )
{
    alert("Canceled");
}else{
    alert("idk you");
}    
let captain = 'Jean-luc'
console.log('Paging ' + captain + ' to report to the bridge.')
console.log(`Paging ${captain} to report to the bridge.`)