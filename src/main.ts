import { SceneButton } from './sceneButton';
import { SoundButton } from './soundButton';
import './style.css'
import OBSWebSocket from 'obs-websocket-js';

const obs = new OBSWebSocket();


function createForm() {
  // Créer un nouvel élément de formulaire
  const form = document.getElementById('form');

  if (!form) {
    return;
  }

  const title = document.createElement('h1');
  title.textContent = 'Connect to OBS WebSocket';
  
  // Créer un élément d'entrée
  const input = document.createElement('input');
  input.placeholder = 'ws://192.168..';
  input.type = 'text';
  input.name = 'localAddress';
  input.id = 'localAddress';
  input.required = true;

  // Créer un second élément d'entrée
  const input2 = document.createElement('input');
  input2.placeholder = '******';
  input2.type = 'password';
  input2.name = 'password';
  input2.id = 'password';
  

  // Créer un label pour le premier champ d'entrée
  const label1 = document.createElement('label');
  label1.textContent = 'Local Adresse';
  label1.htmlFor = 'localAddress';

  // Créer un label pour le second champ d'entrée
  const label2 = document.createElement('label');
  label2.textContent = 'Password';
  label2.htmlFor = 'password';

  // Créer un bouton de soumission
  const submitButton = document.createElement('button');
  submitButton.type = 'submit';
  submitButton.textContent = 'Submit';

  // Ajouter l'entrée et le bouton au formulaire
  form.appendChild(title);
  form.appendChild(label1);
  form.appendChild(input);
  form.appendChild(label2);
  form.appendChild(input2);
  form.appendChild(submitButton);

  // Ajouter le formulaire à la page
  document.body.appendChild(form as HTMLFormElement);

  // Ajouter un écouteur d'événements pour gérer la soumission du formulaire
  form.addEventListener('submit', (event) => {
    event.preventDefault(); // Empêche le rechargement de la page
    
    connect({ localAddress: input.value, password: input2.value }, form as HTMLFormElement)
      .then(() => onMounted())
      .catch(err => {
        // Créer un élément de paragraphe pour afficher les erreurs du premier champ d'entrée
        const error1 = document.createElement('p');
        error1.style.color = 'red';
        error1.textContent = err.message;
        form.appendChild(error1)
    })
  });
}

createForm();

async function connect({localAddress, password}: {localAddress: string, password: string}, form: HTMLElement) {
  try {
    const {
      obsWebSocketVersion,
      negotiatedRpcVersion
    } = await obs.connect(localAddress, password);
    form.remove();
    console.info(`Connected to server ${obsWebSocketVersion} (using RPC ${negotiatedRpcVersion})`)
  } catch (error) {
    return Promise.reject(error);
  }  
}

/**
 * @description When u mounted the main component
 */
function onMounted(){
  displayScene()
}

async function displayScene() {
  const scenes = await obs.call('GetSceneList');
  // Display sound by the same occasion
  displaySounds(scenes)

  const scenesRow = document.getElementById('scenes');
    for (const scene of scenes.scenes.reverse()) {
    const button = new SceneButton(obs, scene.sceneName as string);
    button.appendTo(scenesRow);
  } 
}

async function displaySounds(scenes: any) {
  const sounds = scenes.scenes.find((scene: any) => scene.sceneName === 'Sounds') ?? [];
  const soundsRow = document.getElementById('sounds');
  if (!sounds.length) {
    soundsRow?.remove()
  }
    for (const scene of sounds.reverse()) {
    const button = new SoundButton(obs, scene.sceneName as string);
    button.appendTo(soundsRow);
  } 
}

function onCurrentSceneChanged(event: any) {
  console.log('Current scene changed to', event.sceneName)
}

obs.on('CurrentProgramSceneChanged', onCurrentSceneChanged);

