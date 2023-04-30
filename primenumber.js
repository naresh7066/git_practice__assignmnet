function prime(num)
{
  let c=0;
  for(let i=1; i<=num; i++)
  {
      if(num%i==0)
      {
        c++;
        
      }
  }
  
  if(c==2)
  {
    console.log(num,"is Prime");
  }
  else
  {
    console.log(num, "is Not Prime");
  }
  
}

