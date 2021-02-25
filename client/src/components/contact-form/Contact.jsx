import { Top } from '../to-the-top/Top';
import { ContactStyled } from './Contact.styled';

const Contact = () => {
    return (
        <ContactStyled>
            <div id='contact' className='about-me__contact'>
                <h1>CONTACT ME</h1>
                <div className='about-me__contact--form'>
                    <form action='/' encType='multipart/form-data' method='POST'> 
                        <div>
                            <input type='text' placeholder='NAME' className='form__field' name='name' required />
                        </div>   
                        <div>  
                            <input type='email' placeholder='EMAIL' className='form__field' name='email' required />
                        </div> 
                        <div> 
                            <textarea type='text' placeholder='Please enter your message...' className='form__field form__field--message' ></textarea>
                        </div>
                        <div>
                            <input type='submit' value='SUBMIT' className='form__field--message' />  
                        </div>
                    </form>
                </div>
                <Top />
            </div>
        </ContactStyled>
    )
}

export { Contact };