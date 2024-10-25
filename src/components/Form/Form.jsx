import { Dropdown } from "./Dropdown";
import { Input } from "./Input";

export const Form = () => {
  return (
    <>
      <Dropdown />
      <Input banana="banana" mango="mango" placeholder="put in something" />
    </>
  );
};
