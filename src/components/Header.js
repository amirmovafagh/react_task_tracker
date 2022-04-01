import PropTypes from "prop-types";
import Button from "./Button";


const Header = ({title}) => {
    const onClick = () => {
      console.log('was clicked');
    }

    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color='green' text='add' onClick={onClick}/>
        </header>
    );
}

Header.defaultProps = {
    title: 'Task tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// use CSS to style the component
// const headingStyle = {
//     color: '#333',
//     fontSize: '1.2rem',
//     fontWeight: 'bold',
//     textAlign: 'center',
//     margin: '0',
//     padding: '0',
// }

export default Header;