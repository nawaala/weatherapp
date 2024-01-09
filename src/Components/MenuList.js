import sick from '../Assets/sick.jpg';
import hayfever from '../Assets/hayfever.jpg';
import asthma from '../Assets/asthma.jpg';
import clear from '../Assets/clear.png';
import snow from '../Assets/snow.png';
import rain from '../Assets/rain.png';

 const MenuList =  [
    {
        name: "Hayfever",
        image: hayfever ,
        details: "Taking hayfever tablets."
    },
    {
        name: "Asthma",
        image: asthma,
        details: "Have a cold? "
    },
    {
        name: "Cold",
        image: sick,
        details: " Dealing with dust allergies..."
    },
    {
        name: "Hot weather",
        image: clear,
        details: "Dealing with Hot weather"
    },
    {
        name: "Windy",
        image: rain,
        details: "Is it raining"
    },
    {
        name: "Ice Cold",
        image: snow,
        details: "Is it freezing?"
    },
];

export default MenuList;