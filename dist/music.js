const ap = new APlayer({
    container: document.getElementById('aplayer'),
    autoplay: true,
    loop: 'all',
    volume: 0.7,
    listFolded: true,
    listMaxHeight: 60,
    audio: [
        {
            name: 'Please Dont go',
            artist: 'Joel Adams',
            url: "/dist/Joel Adams - Please Don't Go.flac",
            cover: "/dist/Please Don't Go.jpg",
        },
        // {
        //     name: 'name2',
        //     artist: 'artist2',
        //     url: 'url2.mp3',
        //     cover: 'cover2.jpg',
        // }
    ]
});