import React from 'react';
import './index.css';

const Card = ({description, count}) => {
   
    return (
        <div class="card">
            <div class="statistic">
                <div class="label">
                    {description}
                </div>
                <div class="value">
                    {count}
                </div>
            </div>
        </div>
    );
}

export default Card;