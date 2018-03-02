import React from 'react';
import Card from './Card';

class Gallery extends React.Component {
    render() {
        return (
            <div className='flex flex-wrap '>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        );
    }
}
export default Gallery;