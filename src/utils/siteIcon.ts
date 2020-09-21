export default {
    setSiteIcon(backColor: string, fontColor: string) {
        const canvas = document.createElement('canvas');
        canvas.height = 64;
        canvas.width = 64;
        const ctx = canvas.getContext('2d');
        if (ctx) {
            ctx.fillStyle = backColor;
            ctx.fillRect(0, 0, 64, 64);
            // ctx.beginPath();
            // ctx.arc(32, 32, 32, 0, 2 * Math.PI);
            // ctx.fill();
        }

        const ctx2 = canvas.getContext('2d');
        if (ctx2) {
            ctx2.font = '24px Arial';
            ctx2.fillStyle = fontColor;
            ctx2.fillText('TCN', 7, 42);
        }
        const base64Url = canvas.toDataURL('image/jpg');
        document.getElementById('site-icon')?.setAttribute('href', base64Url);
    },
};
