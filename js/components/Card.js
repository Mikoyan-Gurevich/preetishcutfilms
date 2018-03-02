import React from 'react';

class Card extends React.Component {
    render() {
        return (
            <div className="border m-6 rounded-lg bg-white mx-auto shadow-lg max-w-xs overflow-hidden">
                <img className="h-24 min-w-full block" src="https://png.pngtree.com/thumb_back/fh260/back_pic/00/02/62/305619b17d2530d.jpg" />
                <div className="px-4 py-3 relative min-h-3">
                    <div className="sm:flex sm:items-center">
                        <img className="w-16 border-4 border-white border-white mr-3 rounded-full" src="https://avatars3.githubusercontent.com/u/13323281?s=460&v=4"
                        />
                        <div className="w-full">
                            <button className="float-right text-xs font-semibold rounded-full px-4 py-1 leading-normal bg-white border border-blue text-blue hover:bg-blue hover:text-white">Follow</button>
                        </div>
                    </div>
                    <div className="mt-2 text-center sm:text-left sm:flex-grow">
                        <div className="mb-4">
                            <p className="text-xl font-bold leading-tight">Ezeugwu Paschal</p>
                            <p className="text-sm leading-tight text-grey-dark">@paschaldev</p>
                        </div>
                        <div>
                            <p className="leading-tight text-grey-darkest text-sm">
                                This is a cool profile card showcasing the awesomeness of
                            <a className="text-blue no-underline" href="https://tailwindcss.com">Tailwindcss</a> built by awesome people who want to make the web a better place.
                        </p>
                        </div>
                        <p className="mt-6 text-xs text-grey-dark">
                            Followed by
                        <a className="text-blue no-underline" href="#">Google</a> and
                        <a className="text-blue no-underline" href="5 others">5 others</a>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}
export default Card;