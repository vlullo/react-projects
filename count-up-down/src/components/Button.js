import React from 'react';
// import styles from './styles.module.scss';

// const Button = ({ handleClick, type, text }) => (
//     <div className={styles.buttonContainer}>
//         <button onClick={e => handleClick(e, type)}>
//             {text}
//         </button>
//     </div>
// )

const Button = ({ handleClick, type, text }) => (
    <div>
        <button onClick={e => handleClick(e, type)}>
            {text}
        </button>
    </div>
)
export default Button;