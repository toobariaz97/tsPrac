import { expect, it } from "vitest";
type User = {
  name: string;
  age: number;
};

function isAdult(user: User): boolean {
  return user.age >= 18 || user.age == 28;
}

const justine: User = {
  name: "Justine",
  age: 12,
};

const isJustineAnAdult: boolean = isAdult(justine);
console.log(isJustineAnAdult);

const getName = (param: { fisrtName: String; lastName: String }) => {
  if (param.lastName) {
    return `${param.fisrtName} ${param.lastName}`;
  }
  return param.fisrtName;
};

it("Should not be empty", () => {
  let name = getName({
    fisrtName: "Tooba",
    lastName: "Riaz",
  });
});

interface Users {
  id:number,
  firstName: string,
  lastName:string,
  posts: Array<Post>;
}
interface Post {
  title: string;
}

const makeUser=():Users=>{
return {
    id:1,
    firstName:"Tooba",
    lastName:"Riaz",
    posts:[
      {
        title:"This is my new post"
      }
    ]
  }
}

it("Should return a valid user ",()=>{
let user = makeUser();
expect(user.id).toBeTypeOf("number");
expect(user.firstName).toBeTypeOf("string")
})

