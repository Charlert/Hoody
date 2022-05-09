import { getGM } from "./utils.js";
import { Player } from "./Player.js";
import { Mouse } from "./Mouse.js";

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = innerWidth;
canvas.height = innerHeight;

let animation_counter = 0;
let a_counter = 0;

canvas.addEventListener("mousemove", (event) => {
    listen(event.clientX, event.clientY);
});
canvas.addEventListener("touchmove", (event) => {
    if(event.targetTouches.length != 1) return;
    event.preventDefault();
    const touch = event.targetTouches[0];
    listen(touch.pageX, touch.pageY);
})


setInterval(() => {
    a_counter++;
    a_counter %= 100;
    if (a_counter === 99) {
        player.acceleration = { "x": 0, "y": 0 };
        mouse.display = false;
    }
}, 1);

const listen = (cx, cy) => {
    (() => {
        const x = cx - player.x;
        const y = cy - player.y;
        const a = Math.sqrt(x ** 2 + y ** 2);
        player.acceleration.x = 1 * (x / a);
        player.acceleration.y = 1 * (y / a);
    })();

    (() => {
        mouse.display = true;
        mouse.x = cx;
        mouse.y = cy;
    })();

    a_counter = 0;
}

const animate = () => {
    requestAnimationFrame(animate);

    if (animation_counter % 1 === 0) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        if (getGM(player.velocity.x, player.velocity.y) > 99)
            player.velocity = { "x": 0, "y": 0 }
        player.update();
        mouse.update();
        animation_counter++;
    }
}

const player = new Player(ctx);
const mouse = new Mouse(ctx);

animate();