import { TextureLoader,RepeatWrapping, NearestFilter } from "three";
import { TextureImg, SphereImg } from "./images.js";

const Texture = new TextureLoader().load(TextureImg);
const SphereTexture = new TextureLoader().load(SphereImg);


Texture.wrapS = Texture.wrapT = RepeatWrapping;
Texture.magFilter = NearestFilter

export { Texture, SphereTexture };
