import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import css from './ContactForm.module.css';
import { nanoid } from 'nanoid';
import * as Yup from 'yup';

const FeedbackSchema = Yup.object().shape({
    name: Yup.string().min(3, 'Занадто коротко!').max(50, 'Занадто довго!').required("Обов'язково"),
    number: Yup.string().min(5, 'Повинен бути правильний номер!').required("Обов'язково"),
});

const ContactForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = (values, actions) => {
        const newContact = { ...values, id: nanoid() };
        dispatch(addContact(newContact)); 
        actions.resetForm();
    };

    return (
        <Formik
            initialValues={{ name: '', number: '' }}
            onSubmit={handleSubmit}
            validationSchema={FeedbackSchema}
        >
            <Form className={css.container}>
                <div className={css.style}>
                    <label htmlFor="name">Name</label>
                    <Field className={css.field} type="text" name="name" id="name" />
                    <ErrorMessage name="name" component="div" className={css.error} />
                </div>
                <div className={css.style}>
                    <label htmlFor="number">Number</label>
                    <Field className={css.field} type="tel" name="number" id="number" />
                    <ErrorMessage name="number" component="div" className={css.error} />
                </div>
                <button className={css.btn} type="submit">
                    Add contact
                </button>
            </Form>
        </Formik>
    );
};

export default ContactForm;