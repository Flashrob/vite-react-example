// named expored, used like import { HelloWorld } from "<file location>"
export const HelloWorld = () => {
  let count = 10;
  return <h1>Hello World!!!!!!! {`Plus my count is ${count}`}</h1>;
};
// default export, used like import HelloWorld from "<file location>"; We can name the default import whatever we want
// export default HelloWorld;

function sum(a, b) {
  return a + b;
}

sum(5, 2);
