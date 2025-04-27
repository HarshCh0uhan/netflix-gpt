const checkValidData = (email, password, name) => {
  const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const isPasswordValid = /^(?=.*[A-Z])(?=.*[\W])(?=.*[0-9])(?=.*[a-z]).{8,128}$/.test(password);

  const isNameValid = (name !== null) ? /^[A-Z][a-z]+(?: [A-Z][a-z]+)*$/.test(name.value) : true

  if (!isEmailValid) return "Email ID is not Valid !!!";
  if (!isPasswordValid) return "Password is not Valid !!!";
  if (!isNameValid) return "Name is not Valid !!!";

  return false;
};

export default checkValidData;
