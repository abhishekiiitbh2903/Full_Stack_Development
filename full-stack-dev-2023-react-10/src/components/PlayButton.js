import './PlayButton.css';
import { useState } from 'react';
import useTheme from '../hooks/Theme';

function PlayButton({message,children,onPlay,onPause}){
    console.log('render PlayButton')
    const theme = useTheme();

    const [playing, setPlaying] = useState(false);  
    function handleClick(e){
        // console.log(e)
        e.stopPropagation()

        if(playing) onPause()
        else onPlay();

        setPlaying(!playing);
    }

    return (
        <button className={theme} onClick={handleClick}>{children} : {playing?'⏸️':'⏯️'}</button>
    )

}

export default PlayButton;