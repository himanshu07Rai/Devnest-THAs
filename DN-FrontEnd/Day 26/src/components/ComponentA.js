import { useSelector } from "react-redux";
const ComponentA = () => {
  const user = useSelector((state) => state.user);
  const password = useSelector((state) => state.password);

  console.log("ComponentA");
  return (
    <div>
      <h3>Username : {user}</h3>
      <h3>Password : {password}</h3>
    </div>
  );
};

export default ComponentA;
