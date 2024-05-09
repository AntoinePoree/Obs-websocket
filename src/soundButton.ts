import OBSWebSocket from "obs-websocket-js";
import { Button } from "./button";

export class SoundButton extends Button {
    obs: OBSWebSocket;
    sound: string;

    constructor(obs: OBSWebSocket, sound: string) {
        super();
        this.obs = obs;
        this.sound = sound;
        this.label = sound;
    }

    onClick() {
        this.obs.call('RestartMedia' as any, {sourceName: this.sound})    
    }

    onMounted(): void {
        this.obs.on('MediaStrated' as any, (media) => {
            if (media.sourceName === this.sound) {
                this.active(true);
            } else {
                this.active(false);
            }
        });

          this.obs.on('MediaEnd' as any, (media) => {
            if (media.sourceName === this.sound) {
                this.active(true);
            } else {
                this.active(false);
            }
        });
    }
}