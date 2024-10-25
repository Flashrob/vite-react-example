export const NavItem = (props) => {
  // props is an object
  // props contains all properties that we defined on a component as attributes
  // e.g. <NavItem title="title" banana="banana" />
  return <h1>{props.title}</h1>;
};
