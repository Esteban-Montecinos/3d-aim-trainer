import { TextureLoader,RepeatWrapping, NearestFilter } from "three";
import { BoxImg } from "./images.js";

const Texture = new TextureLoader().load(BoxImg);
const BoxTexture = new TextureLoader().load(BoxImg);


Texture.wrapS = Texture.wrapT = RepeatWrapping;
Texture.magFilter = NearestFilter

export { Texture, BoxTexture };
