 export type Location = {
  id: number;
  title: string;     // Changed from 'name' to 'title' to match your data
  address: string;
  embedUrl: string;
  type: string;
  description?: string;
};

export const locations: Location[] = [
// --- Academic Buildings ---
  {
    id: 1,
    title: "STEM Building",
    address: "1075 Morris Ave, Union, NJ 07083",
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6130.252026533309!2d-74.23310202393091!3d40.67995057139861!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3ad5ca7649533%3A0x36a5a1cec8f098fd!2sKean%20University%20STEM%20Building!5e1!3m2!1sen!2sus!4v1776717313523!5m2!1sen!2sus",
    type: "Academic"
  },
  {
    id: 2,
    title: "Downs Hall",
    address: "Kean University, 1000 Morris Ave, Union, NJ 07083",
    embedUrl:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3065.264606152972!2d-74.23368436118413!3d40.67693639284971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3ad5ca13190f5%3A0x1a26549323e715a7!2sDowns%20Hall!5e1!3m2!1sen!2sus!4v1776273912891!5m2!1sen!2sus",
    type: "Social"
  },
  {
    id: 3,
    title: "North Avenue Academic Building [NAAB]",
    address:"New Jersey Center for Science, Technology & Mathematics, 1000 Morris Ave, Union, NJ 07083",
    embedUrl:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3065.264606152972!2d-74.23368436118413!3d40.67693639284971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3ad5ca13190f5%3A0xd36b39cdf932d2f1!2sNorth%20Avenue%20Academic%20Building%20%5BNAAB%5D!5e1!3m2!1sen!2sus!4v1776274117357!5m2!1sen!2sus",
      type: "Academic"
  },
  {
    id: 4,
    title: "Green Lane Academic Building [GLAB]",
    address: "1040 Morris Ave, Union, NJ 07083",
    embedUrl:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3064.9938579342756!2d-74.23883032393073!3d40.68282457139806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3ad435b4c0dfd%3A0x95ccbf1c2ffea977!2sGreen%20Lane%20Academic%20Building%20%5BGLAB%5D!5e1!3m2!1sen!2sus!4v1776274275740!5m2!1sen!2sus",
     type: "Academic",
  },
  {
    id: 5,
    title: "Miron Student Center",
    address:"Kean University, 1000 Morris Avenue Kean University, Miron Center, 1000 Morris Ave, Union, NJ 07083",
    embedUrl:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6130.4513713145425!2d-74.237577523931!3d40.677782871398755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3ad5bf222f1e1%3A0x1ecd60c11b43f464!2sMiron%20Student%20Center!5e1!3m2!1sen!2sus!4v1776274369505!5m2!1sen!2sus",
    type: "Social",
  },
  {
    id: 6,
    title: "Nancy Thompson Library",
    address: "1000 Morris Ave, Union, NJ 07083",
    embedUrl:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.75!2d-74.2335!3d40.6780!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3ad5ca13190f5%3A0x74b57d6eb308f6c3!2sNancy%20Thompson%20Library!5e1!3m2!1sen!2sus!4v1772654487608!5m2!1sen!2sus",
    type: "Academic"
  },
  {
    id: 7,
    title: "Center for Academic Success [CAS]",
    address:"Kean University, Center for Academic Success, 1000 Morris Ave, Union, NJ 07083",
    embedUrl:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.77!2d-74.2343!3d40.6785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3ad5ca13190f5%3A0xd8ccec80658d4f7f!2sCenter%20for%20Academic%20Success%20%5BCAS%5D!5e1!3m2!1sen!2sus!4v1773685994760!5m2!1sen!2sus",
    type: "Academic"
  },
  {
    id: 8,
    title: "Harwood Arena",
    address: "Harwood Arena, Kean University, 1000 Morris Ave, Union, NJ 07083",
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.75!2d-74.2343!3d40.6788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3ad5cee982485%3A0xb89be333a3fc3397!2sHarwood%20Arena!5e1!3m2!1sen!2sus!4v1713214400000!5m2!1sen!2sus",
      type: "Recreational"
  },
  {
    id: 9,
    title: "Wilkins Theatre",
    address: "1000 Morris Ave, Union, NJ 07083",
    embedUrl:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d590.9839549851988!2d-74.23233561186176!3d40.67844628635272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3ad5a50cd02db%3A0x22b32f45c7674622!2sWilkins%20Theatre!5e1!3m2!1sen!2sus!4v1776717627020!5m2!1sen!2sus",
    type: "Recreational"
  },
  {
    id: 10,
    title: "Vaughn-Eames Hall",
    address: "1000 Morris Ave, Union, NJ 07083",
    embedUrl:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.77!2d-74.2324!3d40.6775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3ad5a95a6f8b9%3A0x52b36d39fdc974c0!2sVaughn-Eames%20Hall!5e1!3m2!1sen!2sus!4v1713214420000!5m2!1sen!2sus",
      type: "Academic"
  },
  {
    id: 11,
    title: "Hennings Hall",
    address:"Kean University, Hennings Hall, Kean University, 1000 Morris Ave, Union, NJ 07083",
    embedUrl:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3065.119068700456!2d-74.23394189999999!3d40.6801016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3ad5b3fd5fde3%3A0x244e308e4046d7f5!2sHennings%20Hall!5e1!3m2!1sen!2sus!4v1776279735528!5m2!1sen!2sus",
    type: "Academic"
  },
  {
    id: 12,
    title: "Hutchinson Hall",
    address: "Kean University, Hutchinson Hall, 1000 Morris Ave, Union, NJ 07083",
    embedUrl:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6130.274502344511!2d-74.23622122393093!3d40.679706171398486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3ad5ca13190f5%3A0x3ce9b9786df4b4da!2sHutchinson%20Hall!5e1!3m2!1sen!2sus!4v1776700002505!5m2!1sen!2sus",
    type: "Academic"
  },
  {
    id: 13,
    title: "Hynes Hall",
    address: "1011 Morris Ave, Union, NJ 07083",
    embedUrl:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d735.1753484722118!2d-74.23277652093904!3d40.68260987719683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3ad357defbc2f%3A0x45cb039c65ffbcd4!2sHynes%20Hall!5e1!3m2!1sen!2sus!4v1776717734170!5m2!1sen!2sus",
    type: "Academic"
  },
  // Freshman Residence Halls
  {
    id: 14,
    title: "Cougar Hall",
    address: "Campus School East, 1000 Morris Ave, Union, NJ 07083",
    embedUrl:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d541.717842336591!2d-74.23673502285182!3d40.67891140644525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3ad96233288f7%3A0xa68346ef527b2c60!2sCougar%20Hall!5e1!3m2!1sen!2sus!4v1776787185990!5m2!1sen!2sus",
    type: "Housing"
  },
  {
    id: 15,
    title: "Freshman Residence Hall",
    address: "Kean University, Freshman Residence Hall, 1000 Morris Ave, Union, NJ 07083",
    embedUrl:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253.6696003604718!2d-74.23470880794457!3d40.67645504065679!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3ad5ca13190f5%3A0x11986b6bf50e21e1!2sFreshman%20Residence%20Hall!5e1!3m2!1sen!2sus!4v1776787295655!5m2!1sen!2sus",
    type: "Housing"
  },
  {
    id: 16,
    title: "Dougall Hall",
    address: "Kean University, Dougall Hall, 1000 Morris Ave, Union, NJ 07083",
    embedUrl:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d277.62930988559924!2d-74.23384546477389!3d40.67632104021409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3ad5ca13190f5%3A0x6acd37d705c20e45!2sDougall%20Hall!5e1!3m2!1sen!2sus!4v1776787390640!5m2!1sen!2sus",
    type: "Housing"
  },
  {
    id: 17,
    title: "Whiteman Hall",
    address: "Kean University, Whiteman Hall, 1000 Morris Ave, Union, NJ 07083",
    embedUrl:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d478.91624300854534!2d-74.2334007024212!3d40.67638077837132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3ad5ca13190f5%3A0x8934776d0b1e21f9!2sWhiteman%20Hall!5e1!3m2!1sen!2sus!4v1776719337514!5m2!1sen!2sus",
    type: "Housing"
  },
  {
    id: 18,
    title: "Mary M. Bartlett Hall",
    address: "1000 Morris Ave, Union, NJ 07083",
    embedUrl:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d191.58161460846782!2d-74.23442819017116!3d40.67603972179501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3ad5ca13190f5%3A0xd60187f35f7d1bec!2sMary%20M.%20Bartlett%20Hall!5e1!3m2!1sen!2sus!4v1776719857745!5m2!1sen!2sus",
    type: "Housing"
  },
  {
    id: 19,
    title: "Burch Hall",
    address: "1000 Morris Ave, Union, NJ 07083",
    embedUrl:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d552.4893262979507!2d-74.2338328487106!3d40.67559372337662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3ad596e9bbac9%3A0xd741b91b3283201b!2sBurch%20Hall%2C%201000%20Morris%20Ave%2C%20Union%2C%20NJ%2007083!5e1!3m2!1sen!2sus!4v1776787503872!5m2!1sen!2sus",
    type: "Housing"
  },
  {
    id: 20,
    title: "Rogers Hall",
    address: "1000 Morris Ave, Union, NJ 07083",
    embedUrl:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d388.5165212071456!2d-74.23380632985584!3d40.67526791775084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3ad5ca13190f5%3A0x45611e7623b907d4!2sRogers%20Hall!5e1!3m2!1sen!2sus!4v1776787588439!5m2!1sen!2sus",
    type: "Housing"
  },
  {
    id: 21,
    title: "Sozio Hall",
    address: "1000 Morris Avenue, Service Rd, Union, NJ 07083",
    embedUrl:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d354.48792405770854!2d-74.23490165683286!3d40.67538527286089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3ad59386e700b%3A0x9db1df760bfe6de!2sSozio%20Hall%2C%201000%20Morris%20Avenue%2C%20Service%20Rd%2C%20Union%2C%20NJ%2007083!5e1!3m2!1sen!2sus!4v1776787646405!5m2!1sen!2sus",
    type: "Housing"
  },
  {
    id: 22,
    title: "Upperclassman Residence Hall",
    address: "Kean University, 1000 Morris Ave, Elizabeth, NJ 07083",
    embedUrl:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d283.05200260140373!2d-74.23533860675064!3d40.67632268007012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3ad5ca13190f5%3A0xb50479e7d78ce44e!2sUpperclass%20Residence%20Hall!5e1!3m2!1sen!2sus!4v1776787719639!5m2!1sen!2sus",
    type: "Housing"
  }
];