type User = {
    name: string;
    age: number;
  };
  
  function isAdult(user: User): boolean {
    return user.age >= 18 || user.age==28;
  }
  
  const justine: User = {
    name: 'Justine',
    age: 12,
  };
  
  const isJustineAnAdult: boolean = isAdult(justine);
  console.log(isJustineAnAdult);
  

  export default abstract class baseController{

protected getBody<T>(name:T):T{
    return name
}

  }