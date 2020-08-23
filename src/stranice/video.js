import React from 'react';
import MetaTags from 'react-meta-tags';

export const ytvideo = [
    {id: '1', naziv: 'Putovanje', link: 'https://www.youtube.com/embed/3aEhtL9ggw0'},
    {id: '2', naziv: 'Putovanje', link: 'https://www.youtube.com/embed/XUKBbfPfHe0'},
    {id: '3', naziv: 'Putovanje', link: 'https://www.youtube.com/embed/xgw4AxOhvNw'},
    {id: '4', naziv: 'Putovanje', link: 'https://www.youtube.com/embed/pg8nnybqIUo'},
    {id: '5', naziv: 'Putovanje', link: 'https://www.youtube.com/embed/Ti8cieW_fzY'},
    //{id: '6', naziv: 'Putovanje', link: 'https://www.youtube.com/embed/xvtCRpfYPXw'},
    {id: '7', naziv: 'Putovanje', link: 'https://www.youtube.com/embed/uBzOUzW5D9o'},
    {id: '8', naziv: 'Putovanje', link: 'https://www.youtube.com/embed/EFFnR9ZGKBo'},
    {id: '9', naziv: 'Putovanje', link: 'https://www.youtube.com/embed/75OKi3_F-NA'},
    {id: '10', naziv: 'Putovanje', link: 'https://www.youtube.com/embed/D_NouRjSk8w'},
    {id: '11', naziv: 'Putovanje', link: 'https://www.youtube.com/embed/BDE9JinITck'}
]

export default function Video() {

        return (
            <div>
            <MetaTags>
            <title>"Putevima istine" - Galerija slika</title>
            <meta name="description"
                  content="Galerija slika sa putovanja udruženja"
    />
             <meta property="og:title" content='"Putevima istine" - Galerija slika' />
            </MetaTags>
            <div className="pisadrzaj">
            <div className="stranica">
                <img className="headerslika" src="./himage/onama.png" alt="O nama" />
                <h3 className="stranicanaslov">Video galerija</h3>
                <div className="galerije">
                {ytvideo.map(video => {
                            return (
                                <div className="galerijav" key={video.id} >
                                    <iframe width="480" height="270" src={video.link} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </div>
                                
                            )
                        })}   
                </div>
                
            </div>
            </div>
            </div>
        )
}

