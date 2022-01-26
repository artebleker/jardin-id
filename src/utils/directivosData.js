import { logRoles } from "@testing-library/react";
import directivo1 from "../asset/directivos/directivo1.png";
import directivo2 from "../asset/directivos/directivo2.png";
import directivo3 from "../asset/directivos/directivo3.png";

const directivosData = [
  {
    id: 1,
    name: "Lic. Susana",
    cargo: "Directora",
    photo: directivo1,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe debitis harum laudantium quisquam? Placeat tempora omnis magni error voluptate, hic recusandae, quis debitis a cum atque distinctio dolorem, molestias consectetur mpedit maxime atque, placeat ex enim nemo harum distinctio temporibus obcaecati. Provident officiis, minima quae nisi voluptates commodi quod neque! Eos officiis pariatur officia impedit nobis repudiandae enim vel",
  },
  {
    id: 2,
    name: "Prof. Josefina",
    cargo: "Vice Directora",
    photo: directivo2,
    description: "Amet consectetur adipisicing elit. Saepe debitis harum laudantium quisquam? Placeat tempora omnis magni error voluptate, hic recusandae, quis debitis a cum atque distinctio dolorem, molestias consectetur mpedit maxime atque, placeat ex enim nemo harum distinctio temporibus obcaecati. Provident officiis, minima quae nisi voluptates commodi quod neque! Eos officiis pariatur officia impedit",
  },
  {
    id: 3,
    name: "Lic. Raquel",
    cargo: "Secretaria",
    photo: directivo3,
    description: "Saepe debitis harum laudantium quisquam? Placeat tempora omnis magni error voluptate, hic recusandae, quis debitis a cum atque distinctio dolorem, molestias consectetur mpedit maxime atque, placeat ex enim nemo harum distinctio temporibus obcaecati. Provident officiis, minima quae nisi voluptates",
  },
];
export { directivosData };
