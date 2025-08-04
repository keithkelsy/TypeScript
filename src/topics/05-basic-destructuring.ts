interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;

}

interface Details {
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: 'Despacito',
    details: {
        author: "Daddy Yankee",
        year: 2014
    }
}

const {
    song:anotherSong, 
    songDuration:duration, 
    details
} = audioPlayer;


const {
    author: anotherAuthor,
    year: anotherYear

} = details;


console.log('Song: ', anotherSong, 'Duration: ', duration, 'Details: ', 'Author: ', anotherAuthor, 'Year: ', anotherYear );



export {};