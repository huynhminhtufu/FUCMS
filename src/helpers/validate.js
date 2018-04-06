const validateRequired = (value) => value !== undefined && value !== null && value.trim().length > 0;

const validaters = {
  required: validateRequired
};

const validate = (field) => {

  const { validates, value } = field;
  const validateKeys = Object.keys(validates);
  const error = validateKeys.find(validateKey => {
    // get validate options
    // const options = validates[validateKey];
    return !validaters[validateKey](value);
  });

  let needUpdate = false;
  if (error) {
    needUpdate = field.error !== error;
    field.error = error;
  }

  return { field, needUpdate };
};

export default validate;