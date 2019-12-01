import * as yup from 'yup';

import yupLocale from 'locales/yup';
import { isCode } from './validations';

yup.setLocale(yupLocale);

yup.addMethod(yup.mixed, 'isCode', isCode);

export default yup;
