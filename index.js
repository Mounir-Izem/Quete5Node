import "dotenv/config";
import cowsay from "cowsay";
console.log(cowsay.say({
    text : `I am ${process.env.MY_NAME} from ${process.env.MY_CAMPUS}`,
    e : "oO",
    T : "U "
}));

