export const BasicTypes = () => {
  const name: string = "braian";
  const number: number = 21;
  const isActive: boolean = true;
  const powers: string[] = ["react ", "redux", "mongo", "bobo"];
  //   powers.push("Hola ");

  return (
    <>
      <h3>Tipos Basicos</h3>
      {name} {number} {isActive ? "True" : "no esta activo "}
      <br />
      {powers.join(",")}
    </>
  );
};
