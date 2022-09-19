var arrayNumber=[];

function reverseNumber()
{
  var getValue=document.getElementById("fn-array").value;
  arrayNumber.push(getValue);
  console.log(arrayNumber);
}
function addOrEven()
{
  var getValue=document.getElementById("fn-addoreven").value;
  // odd or even
  const result = ((getValue) % 2  == 0) ? "even" : "odd"; 
  console.log(`The number is ${result}.`);
  // numbers
  let text =[];
  for (let i = 1; i <= getValue; i++) 
  {
   text.push(i);
  }
  console.log(text);
  document.getElementById("fn-number").innerHTML=text;
}
// swap function
function swap()
{
  var one_Input=document.getElementById("fn-oneinput").value;
  var two_Input=document.getElementById("fn-twoinput").value;
  two_Input = [one_Input, one_Input = two_Input][0];
  document.getElementById("fn-swap").innerHTML="swap : " +one_Input+" , "+two_Input+"";
  console.log(two_Input);
}