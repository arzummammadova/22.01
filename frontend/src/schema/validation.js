
import * as yup from 'yup';


const schema = yup.object().shape({
    name: yup.string().required(),
    image: yup.string().required(),
    price: yup.number().positive().integer().required(),
    description: yup.string().required(),
  });

export default schema