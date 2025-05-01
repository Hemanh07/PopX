export const handleDataChange = (event, userDetails, setUserDetails) => {
  let value = event.target.value;
  let fieldName = event.target.name;

  userDetails[fieldName] = value;

  let updatedData = { ...userDetails };

  setUserDetails(updatedData);
};
