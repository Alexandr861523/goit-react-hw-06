import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import { MdPerson } from 'react-icons/md';
import { FaPhoneAlt } from 'react-icons/fa';
import css from '../../components/Contact/Contact.module.css';

const Contact = ({ contact }) => {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteContact(contact.id)); 
    };

    return (
        <div className={css.container}>
            <div>
                <p>
                    <MdPerson /> {contact.name}
                </p>
                <p>
                    <FaPhoneAlt /> {contact.number}
                </p>
            </div>
            <button className={css.btn} onClick={handleDelete}>
                Delate
            </button>
        </div>
    );
};

export default Contact;