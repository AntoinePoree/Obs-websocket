import OBSWebSocket from "obs-websocket-js";
import { Button } from "./button";

export class SceneButton extends Button {
    obs: OBSWebSocket;
    sceneName: string;

    constructor(obs: OBSWebSocket, sceneName: string) {
        super();
        this.obs = obs;
        this.sceneName = sceneName;
        this.label = sceneName;
    }

    onClick() {
        this.obs.call('SetCurrentProgramScene', {sceneName: this.sceneName})    
    }

    onMounted(): void {
        this.obs.on('CurrentProgramSceneChanged', (event: any) => {
            if (event.sceneName === this.sceneName) {
                this.active(true);
            } else {
                this.active(false);
            }
        });
    }
}