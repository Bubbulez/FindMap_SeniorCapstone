export type DiningOption = {
  id: number;
  name: string;
  category: string;
  description: string;
  location: string;
  mapUrl: string;
  type: string;
};

export const diningLocations: DiningOption[] = [
  // --- ON-CAMPUS LOCATIONS ---
  {
    id: 1,
    name: "Outtakes Market Express",
    category: "On Campus",
    description: "Convenience store",
    location: "Miron Student Center - Floor 1",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d275.5007169968733!2d-74.23544200051977!3d40.6781912899151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3ad005f0b8c5b%3A0x30002c4707a51b34!2sOuttakes%20Market%20Express%20-%20Kean!5e1!3m2!1sen!2sus!4v1776809639243!5m2!1sen!2sus",
    type: "on-campus"
  },
  {
    id: 2,
    name: "Smashburger",
    category: "On Campus",
    description: "Hamburger restaurant",
    location: "Miron Student Center - Floor 1",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d297.32829825565506!2d-74.23546072691356!3d40.6781538658917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3ad5b9711e935%3A0xf818252643173999!2sSmashburger!5e1!3m2!1sen!2sus!4v1776810194923!5m2!1sen!2sus",
    type: "on-campus"
  },
  {
    id: 3,
    name: "Cougars Den",
    category: "On Campus",
    description: "On-campus Restaurant",
    location: "Miron Student Center - Floor 1",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d273.50943275051947!2d-74.23471029844765!3d40.67772083492965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3ad003a9b7e55%3A0xaa18f2cf1c22835f!2sCougars%20Den%20-%20Kean%20University!5e1!3m2!1sen!2sus!4v1776810802828!5m2!1sen!2sus",
    type: "on-campus"
  },
  {
    id: 4,
    name: "Jersey Mike's Subs",
    category: "On Campus",
    description: "Fresh cold and hot sandwiches for students on the go.",
    location: "Miron Student Center - Floor 1",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d191.57787593243873!2d-74.23503425665271!3d40.67734073383017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6d7a7c37fcafb%3A0x43abbf670c1157cc!2sJersey%20Mike's%20Subs!5e1!3m2!1sen!2sus!4v1776810992210!5m2!1sen!2sus",
    type: "on-campus"
  },
  {
    id: 5,
    name: "FujiSan",
    category: "On-campus",
    description: "Sushi Restuarant",
    location: "Miron Student Center - Floor 1",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d191.5779080832094!2d-74.23502084560765!3d40.67732954591459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3ad0065b7a583%3A0xfa6889843f875abe!2sFujiSan!5e1!3m2!1sen!2sus!4v1776811193560!5m2!1sen!2sus",
    type: "on-campus"
  },
  {
    id: 6,
    name: "Tú Taco",
    category: "On-campus",
    description: "Mexican restaurant",
    location: "Miron Student Center - Floor 1",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d191.5779080832094!2d-74.23502084560765!3d40.67732954591459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3ad0053119d87%3A0x39a140243329bd0e!2zVMO6IFRhY28!5e1!3m2!1sen!2sus!4v1776811409096!5m2!1sen!2sus",
    type: "on-campus"
  },
  { 
    id: 7,
    name: "Starbucks (Nancy Thompson Library)",
    category: "On-campus",
    description: "Coffee shop",
    location: "Nancy Thompson Library - Floor 1",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d442.4286925271372!2d-74.23355795433939!3d40.67798663522119!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3ad4358af176b%3A0x16a54223096a923b!2sStarbucks%20Coffee%20Company!5e1!3m2!1sen!2sus!4v1776811781995!5m2!1sen!2sus",
    type: "on-campus"
  },
  // --- OFF-CAMPUS LOCATIONS ---
  {
    id: 8,
    name: "Namkeen",
    category: "Off Campus",
    description: "Chicken restaurant",
    location: "The Shoppes At Vermella Union",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d191.56141273324184!2d-74.23399233172006!3d40.6830693103205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3ad13cde01195%3A0xfd1b90ed56655e12!2sNamkeen!5e1!3m2!1sen!2sus!4v1776812118196!5m2!1sen!2sus",
    type: "off-campus"
  },
  {
    id: 9,
    name: "Chipotle Mexican Grill",
    category: "Off Campus",
    description: "Mexican restaurant",
   location: "The Shoppes At Vermella Union",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d367.4388399778617!2d-74.23441502970729!3d40.68251684799248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3adf7ed316c49%3A0xa613bb640c5ed16a!2sChipotle%20Mexican%20Grill!5e1!3m2!1sen!2sus!4v1776812480367!5m2!1sen!2sus",
    type: "off-campus"
  },
  {
    id: 10,
    name: "&pizza",
    category: "Off Campus",
    description: "Pizza restaurant",
    location: "The Shoppes At Vermella Union",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d367.4388399778617!2d-74.23441502970729!3d40.68251684799248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3ad3d9744edc9%3A0xe34b1370a5ed3f7!2s%26pizza!5e1!3m2!1sen!2sus!4v1776812615384!5m2!1sen!2sus",
    type: "off-campus"
  },
{
    id: 11,
    name: "Panera Bread",
    category: "Off Campus",
    description: "Good for soup, salad, and sandwiches across from the main campus.",
    location: "The Shoppes At Vermella Union",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d367.43853887450496!2d-74.2346092448124!3d40.682571468285154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3ad5a5ea015a7%3A0x2767af46a80a71bc!2sPanera%20Bread!5e1!3m2!1sen!2sus!4v1776812776402!5m2!1sen!2sus",
    type: "off-campus"
  },
  {
    id: 12,
    name: "Cold Stone Creamery",
    category: "Off Campus",
    description: "Ice cream shop",
    location: "The Shoppes At Vermella Union",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d367.4391141969132!2d-74.234498632236!3d40.6824671044729!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3adf4db507263%3A0x2d6ccc7d3de12dcc!2sCold%20Stone%20Creamery!5e1!3m2!1sen!2sus!4v1776813004184!5m2!1sen!2sus",
    type: "off-campus"
  },
  {
    id: 13,
    name: "Habit Burger & Grill",
    category: "Off Campus",
    description: "Hamburger restaurant",
    location: "The Shoppes At Vermella Union",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d664.1482213438029!2d-74.23460041579868!3d40.68246946730743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3ad1743d8e171%3A0x98fc37bfd28eb709!2sHabit%20Burger%20%26%20Grill!5e1!3m2!1sen!2sus!4v1776813142934!5m2!1sen!2sus",
    type: "off-campus"
  },
  {
    id: 14,
    name: "Starbucks (Vermella)",
    category: "Off Campus",
    description: "Coffee shop",
    location: "The Shoppes At Vermella Union",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d372.0227593261425!2d-74.23322244875551!3d40.68296606801409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3ad69e3292005%3A0x81b7263d33af5cfa!2sStarbucks!5e1!3m2!1sen!2sus!4v1776813314872!5m2!1sen!2sus",
    type: "off-campus"
  },
  {
    id: 15,
    name: "Gong Cha",
    category: "Off Campus",
    description: "Bubble tea store",
    location: "Union, NJ",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d685.7341993053208!2d-74.24045100544281!3d40.68549679184859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3ad192992689f%3A0x7d075c19a740912!2sGong%20Cha!5e1!3m2!1sen!2sus!4v1776813549406!5m2!1sen!2sus",
    type: "off-campus"
  },
  {
    id: 16,
    name: "China Star",
    category: "Off Campus",
    description: "Chinese restaurant",
    location: "Union, NJ",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1532.7057805368856!2d-74.23174742093241!3d40.67374015157765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3ad59d3eccb77%3A0xbf9830589f1abe50!2sChina%20Star!5e1!3m2!1sen!2sus!4v1776813703406!5m2!1sen!2sus",
    type: "off-campus"
  },
  {
    id: 17,
    name: "Mark Twain Diner & Restaurant",
    category: "Off Campus",
    description: "Diner",
    location: "Union, NJ",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3064.589194473796!2d-74.25640717332061!3d40.6916238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3ad728c1cbf2d%3A0x585c5bfaa506ee6a!2sMark%20Twain%20Diner%20%26%20Restaurant!5e1!3m2!1sen!2sus!4v1776813874124!5m2!1sen!2sus",
    type: "off-campus"
  },
  {
    id: 18,
    name: "Carvel",
    category: "Off Campus",
    description: "Ice cream shop",
    location: "Union, NJ",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d778.1034799866673!2d-74.25328299094164!3d40.69154239759033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3ad6d82e5db5b%3A0x70acc225aab9091f!2sCarvel!5e1!3m2!1sen!2sus!4v1776814236874!5m2!1sen!2sus",
    type: "off-campus"
  },
  {
    id: 19,
    name: "Taco Bell",
    category: "Off Campus",
    description: "Fast food restaurant",
    location: "Elizabeth, NJ",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49032.52775430294!2d-74.29453227725823!3d40.69284593366617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c252adf2a6b1e3%3A0x28badeee6b3ff7b2!2sTaco%20Bell!5e1!3m2!1sen!2sus!4v1776814542941!5m2!1sen!2sus",
    type: "off-campus"
  },
  {
    id: 20,
    name: "Tropicana Diner and Bakery",
    category: "Off Campus",
    description: "Diner",
    location: "Elizabeth, NJ",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12261.433028112222!2d-74.2386260019823!3d40.6748995283029!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3ad569d86a605%3A0x47167d1b14aa2bab!2sTropicana%20Diner%20and%20Bakery!5e1!3m2!1sen!2sus!4v1776814778878!5m2!1sen!2sus",
    type: "off-campus"
  },

];