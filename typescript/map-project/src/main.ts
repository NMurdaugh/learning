import { User } from "./User";
import { Company } from "./Company";
import { CustomMap } from "./Map";

const user = new User();
const company = new Company();
const worldMap = new CustomMap('map');

worldMap.addMarker(user);
worldMap.addMarker(company);