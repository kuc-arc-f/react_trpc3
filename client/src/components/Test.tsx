import { trpc } from '../utils/trpc';

const Test = () => {
  const hello = trpc.hello.useQuery();
console.log(hello.data);
  const test = trpc.helloName.useQuery({ name: 'John', age: 21 });
console.log(test.data);
  const user = trpc.userById.useQuery('1');
console.log(user.data);
  if(test.data === undefined ) { return; }
  if(user.data === undefined ) { return; }
  return (
    <div>
      <h3>react_trpc2/Test.tsx</h3>
      <hr />
      hello : {hello.data}
      <hr />
      test:<br />
      name: {test.data.name} , age: {test.data.age}
      <hr />
      User:<br />
      id: {user.data.id}, name: {user.data.name}
    </div>
  );
};
export default Test;
/*
*/