import { name } from "@wtf/core";
import { shuffle } from "radash";

console.log(`Hello ${shuffle(name.split("")).join("")}!`);
