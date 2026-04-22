 export type Location = {
  title: string;
  address: string;
  category:"string";
  embedUrl: string;
};

export const locations: Location[] = [
  {
    title: "Downs Hall",
    address: "Kean University, 1000 Morris Ave, Union, NJ 07083",
    category: "Academic",
    embedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3065.264606152972!2d-74.23368436118413!3d40.67693639284971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3ad5ca13190f5%3A0x1a26549323e715a7!2sDowns%20Hall!5e1!3m2!1sen!2sus!4v1776273912891!5m2!1sen!2sus",
  },
  {
    title: "North Avenue Academic Building [NAAB]",
    address:"New Jersey Center for Science, Technology & Mathematics, 1000 Morris Ave, Union, NJ 07083",
    category: "Academic",
    embedUrl:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3065.264606152972!2d-74.23368436118413!3d40.67693639284971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3ad5ca13190f5%3A0xd36b39cdf932d2f1!2sNorth%20Avenue%20Academic%20Building%20%5BNAAB%5D!5e1!3m2!1sen!2sus!4v1776274117357!5m2!1sen!2sus",
  },
  {
    title: "Green Lane Academic Building [GLAB]",
    address: "1040 Morris Ave, Union, NJ 07083",
    category: "Academic",
    embedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3064.9938579342756!2d-74.23883032393073!3d40.68282457139806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3ad435b4c0dfd%3A0x95ccbf1c2ffea977!2sGreen%20Lane%20Academic%20Building%20%5BGLAB%5D!5e1!3m2!1sen!2sus!4v1776274275740!5m2!1sen!2sus" ,
  },
  {
    title: "Miron Student Center",
    address:
      "Kean University, 1000 Morris Avenue Kean University, Miron Center, 1000 Morris Ave, Union, NJ 07083",
    category: "Academic",
      embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6130.4513713145425!2d-74.237577523931!3d40.677782871398755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3ad5bf222f1e1%3A0x1ecd60c11b43f464!2sMiron%20Student%20Center!5e1!3m2!1sen!2sus!4v1776274369505!5m2!1sen!2sus",
  },
  {
    title: "Nancy Thompson Library",
    address: "1000 Morris Ave, Union, NJ 07083",
    category: "Academic",
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.75!2d-74.2335!3d40.6780!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3ad5ca13190f5%3A0x74b57d6eb308f6c3!2sNancy%20Thompson%20Library!5e1!3m2!1sen!2sus!4v1772654487608!5m2!1sen!2sus",
  },
  {
    title: "Center for Academic Success [CAS]",
    address:
      "Kean University, Center for Academic Success, 1000 Morris Ave, Union, NJ 07083",
    category: "Academic",
      embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.77!2d-74.2343!3d40.6785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3ad5ca13190f5%3A0xd8ccec80658d4f7f!2sCenter%20for%20Academic%20Success%20%5BCAS%5D!5e1!3m2!1sen!2sus!4v1773685994760!5m2!1sen!2sus",
  },
  {
    title: "Harwood Arena",
    address: "Harwood Arena, Kean University, 1000 Morris Ave, Union, NJ 07083",
   category: "Academic",
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.75!2d-74.2343!3d40.6788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3ad5cee982485%3A0xb89be333a3fc3397!2sHarwood%20Arena!5e1!3m2!1sen!2sus!4v1713214400000!5m2!1sen!2sus",
  },
  {
    title: "Wilkins Theatre",
    address: "1000 Morris Ave, Union, NJ 07083",
    category: "Academic",
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.76!2d-74.2332!3d40.6785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3ad5a50cd02db%3A0x22b32f45c7674622!2sWilkins%20Theatre!5e1!3m2!1sen!2sus!4v1713214410000!5m2!1sen!2sus",
  },
  {
    title: "Vaughn-Eames Hall",
    address: "1000 Morris Ave, Union, NJ 07083",
    category: "Academic",
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.77!2d-74.2324!3d40.6775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3ad5a95a6f8b9%3A0x52b36d39fdc974c0!2sVaughn-Eames%20Hall!5e1!3m2!1sen!2sus!4v1713214420000!5m2!1sen!2sus",
  },
  {
    title: "Hennings Hall",
    address:
      "Kean University, Hennings Hall, Kean University, 1000 Morris Ave, Union, NJ 07083",
    category: "Academic",
      embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3065.119068700456!2d-74.23394189999999!3d40.6801016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3ad5b3fd5fde3%3A0x244e308e4046d7f5!2sHennings%20Hall!5e1!3m2!1sen!2sus!4v1776279735528!5m2!1sen!2sus",
  },
  {
    title: "Hutchinson Hall",
    address: "Kean University, Hutchinson Hall, 1000 Morris Ave, Union, NJ 07083",
   category: "Academic",
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6130.274502344511!2d-74.23622122393093!3d40.679706171398486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3ad5ca13190f5%3A0x3ce9b9786df4b4da!2sHutchinson%20Hall!5e1!3m2!1sen!2sus!4v1776700002505!5m2!1sen!2sus",
  },
  {
    title: "Cougar Hall",
    address: "Kean University, Campus School East, 1000 Morris Ave, Union, NJ 07083",
   category: "Dorming",
    embedUrl:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.7660749377005!2d-74.2367453!3d40.679122899999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3ad96233288f7%3A0xa68346ef527b2c60!2sCougar%20Hall!5e0!3m2!1sen!2sus!4v1776812352609!5m2!1sen!2sus", 
  },

  {
    title: "Mary M. Bartlett Hall",
    address: "Kean University, Bartlett Hall, 1000 Morris Ave, Union, NJ 07083",
    category: "Dorming",
    embedUrl:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.9078322934256!2d-74.23426880000001!3d40.675999700000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3ad0040bdede1%3A0xaa9c88f882f4be4!2sBartlett%20Hall!5e0!3m2!1sen!2sus!4v1776812484928!5m2!1sen!2sus",
     
  },

  {
    title: "Rogers Hall",
    address: "Kean University, 1000 Morris Ave, Union, NJ 07083",
    category: "Dorming",
    embedUrl:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.941209686804!2d-74.23405449999997!3d40.67526430000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3ad5ca13190f5%3A0x45611e7623b907d4!2sRogers%20Hall!5e0!3m2!1sen!2sus!4v1776812537108!5m2!1sen!2sus",
     
  },

  {
    title: "Ralph P.Sozio Hall",
   category: "Dorming",
    address: "Kean University, 1000 Morris Ave, Union, NJ 07083",
    embedUrl:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.9303214676274!2d-74.2346692!3d40.67550419999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3ad59386e700b%3A0x9db1df760bfe6de!2sSozio%20Hall%2C%201000%20Morris%20Avenue%2C%20Service%20Rd%2C%20Union%2C%20NJ%2007083!5e0!3m2!1sen!2sus!4v1776812596423!5m2!1sen!2sus", 
  },

  {
    title: "Burch Hall",
    address: "Kean University, 1000 Morris Ave, Union, NJ 07083",
    category: "Dorming",
    embedUrl:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.9208719572157!2d-74.23358739999999!3d40.675712399999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3ad596e9bbac9%3A0xd741b91b3283201b!2sBurch%20Hall%2C%201000%20Morris%20Ave%2C%20Union%2C%20NJ%2007083!5e0!3m2!1sen!2sus!4v1776812669844!5m2!1sen!2sus",
  }
];