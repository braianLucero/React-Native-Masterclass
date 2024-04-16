interface Person {
  firstName: string;
  lastName: string;
  age: number;
  address: Address;
  isAlive?: boolean;
}

interface Address {
  country: string;
  houseNo: number;
}

export const ObjectLiterals = () => {
  const person: Person = {
    age: 21,
    firstName: "Braian",
    lastName: "Lucero",
    address: {
      country: "Argentina ",
      houseNo: 1234,
    },
    isAlive: undefined,
  };

  return (
    <>
      <h3>Objetos Literales</h3>

      <pre> {JSON.stringify(person, null, 2)}</pre>
    </>
  );
};
