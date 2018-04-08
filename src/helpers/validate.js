const validateRequired = (value) => value !== undefined && value !== null && value.trim().length > 0;

const validaters = {
  required: validateRequired
};

const validate = (field) => {

  const { validates, value } = field;

  if (!validates) {
    return { field, needUpdate: false};
  }

  const validateKeys = Object.keys(validates);
  const error = validateKeys.find(validateKey => 
    // get validate options
    // const options = validates[validateKey];
     !validaters[validateKey](value)
  );

  const needUpdate = field.error !== error;
  field.error = error;

  return { field, needUpdate };
};

export default validate;