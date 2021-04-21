const app = new Vue({
    el: '#app',
    data: {
        photos: [
            'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4a74963a-306f-4de1-85b2-4a4d95cb11c9/dciv59n-b80eef00-5239-4ec9-b560-02bcd568f2a0.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvNGE3NDk2M2EtMzA2Zi00ZGUxLTg1YjItNGE0ZDk1Y2IxMWM5XC9kY2l2NTluLWI4MGVlZjAwLTUyMzktNGVjOS1iNTYwLTAyYmNkNTY4ZjJhMC5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.2mA36daNWPPrp8CMD3635fsre6hPQZwHRvQsrfGL_aM',
            'https://a-static.besthdwallpaper.com/nier-automata-videogioco-yorha-9s-2b-e-a2-sfondo-3840x1280-22049_105.jpg',
            'https://a-static.besthdwallpaper.com/nier-automata-video-game-yorha-2b-in-battle-wallpaper-3840x1080-23639_75.jpg',
            'https://binaryfortressdownloads.com/Download/WPF/Images/24731/WallpaperFusion-nier-automata-1680x480.jpg',
        ],
        indexPhoto: 0,
        intervalID: 0,
    },
    created() {
        //Create l'instanza Vue
        this.startLoop();
    },
    methods: {
        prevPhoto() {
            this.indexPhoto--;
            if(this.indexPhoto < 0) {
                this.indexPhoto = this.photos.length - 1
            }
        },
        nextPhoto() {
            this.indexPhoto++;

            if(this.indexPhoto > (this.photos.length - 1) ) {
                this.indexPhoto = 0;
            }
        },
        setPhoto(index) {
            this.indexPhoto = index;
        },
        startLoop() {
            this.intervalID = setInterval(() => {
                this.nextPhoto();
            }, 3000);
        },
        stopLoop() {
            clearInterval(this.intervalID);
        }
    }
});