import React from 'react';

class Card extends React.Component {
    render() {
        return (
            <div className="border m-6 rounded-lg bg-white mx-auto shadow-lg max-w-xs overflow-hidden">
                <div className="relative min-h-3">
                    <div className="sm:flex sm:items-center">
                        <img className="border-4 border-white border-white mr-3" src="https://avatars3.githubusercontent.com/u/13323281?s=460&v=4"
                        />
                    </div>
                </div>
                <div className="mt-2 text-center sm:text-left sm:flex-grow">
                    <div className="m-4">
                        <p className="text-xl font-bold leading-tight">Picture Caption</p>
                        <p className="text-sm leading-tight text-grey-dark">This is the description of the picture.</p>
                    </div>

                </div>
            </div>
        );
    }
}
export default Card;