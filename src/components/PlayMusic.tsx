import {Howl, Howler} from 'howler';
import { useEffect } from 'react';

const PlayMusic=({
    song,

}: {
    song: string;
} 
) =>{
    var music = new Howl({
        src: [song]
    });
    useEffect(() =>{
        music.play();
    })
}