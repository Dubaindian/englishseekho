// Six beginner lessons. Each lesson has phrases with:
// - hindi: the Hindi meaning (romanized Hinglish)
// - english: the English sentence to speak
// - pronunciation: simple romanized (Hinglish) pronunciation help

export const lessons = [
  {
    id: 'greetings',
    title: 'Namaste aur Parichay',
    subtitle: 'Greetings & Introductions',
    emoji: '\u{1F44B}',
    phrases: [
      { hindi: 'Namaste', english: 'Hello', pronunciation: 'Hae-lo' },
      { hindi: 'Aap kaise hain?', english: 'How are you?', pronunciation: 'Hau aar yoo?' },
      { hindi: 'Main theek hoon, dhanyavaad', english: 'I am fine, thank you', pronunciation: 'Aai aem faain, thaink yoo' },
      { hindi: 'Mera naam Ram hai', english: 'My name is Ram', pronunciation: 'Maai nem iz Ram' },
      { hindi: 'Aapse milkar khushi hui', english: 'Nice to meet you', pronunciation: 'Naais tu meet yoo' },
    ],
  },
  {
    id: 'family',
    title: 'Parivaar',
    subtitle: 'Family',
    emoji: '\u{1F46A}',
    phrases: [
      { hindi: 'Yeh mera parivaar hai', english: 'This is my family', pronunciation: 'Dis iz maai fai-mi-li' },
      { hindi: 'Mere do bachche hain', english: 'I have two children', pronunciation: 'Aai haiv tu chil-dren' },
      { hindi: 'Yeh meri patni hai', english: 'This is my wife', pronunciation: 'Dis iz maai waaif' },
      { hindi: 'Mera beta school jaata hai', english: 'My son goes to school', pronunciation: 'Maai san goz tu skool' },
      { hindi: 'Hum saath rehte hain', english: 'We live together', pronunciation: 'Vee liv tu-ge-dar' },
    ],
  },
  {
    id: 'market',
    title: 'Bazaar',
    subtitle: 'At the Market',
    emoji: '\u{1F6D2}',
    phrases: [
      { hindi: 'Yeh kitne ka hai?', english: 'How much is this?', pronunciation: 'Hau much iz dis?' },
      { hindi: 'Bahut mehenga hai', english: 'It is too expensive', pronunciation: 'It iz tu iks-pen-siv' },
      { hindi: 'Mujhe yeh chahiye', english: 'I want this', pronunciation: 'Aai vaant dis' },
      { hindi: 'Kya aap kam karenge?', english: 'Can you lower the price?', pronunciation: 'Kain yoo lo-ar da praais?' },
      { hindi: 'Dhanyavaad', english: 'Thank you', pronunciation: 'Thaink yoo' },
    ],
  },
  {
    id: 'health',
    title: 'Sehat',
    subtitle: 'Health & Doctor',
    emoji: '\u{1FA7A}',
    phrases: [
      { hindi: 'Mujhe bukhaar hai', english: 'I have a fever', pronunciation: 'Aai haiv a fee-var' },
      { hindi: 'Mera sir dukh raha hai', english: 'I have a headache', pronunciation: 'Aai haiv a hed-ek' },
      { hindi: 'Mujhe dawai chahiye', english: 'I need medicine', pronunciation: 'Aai need me-di-sin' },
      { hindi: 'Doctor kahan hai?', english: 'Where is the doctor?', pronunciation: 'Ve-ar iz da daak-tar?' },
      { hindi: 'Main theek nahin hoon', english: 'I am not well', pronunciation: 'Aai aem naat vel' },
    ],
  },
  {
    id: 'travel',
    title: 'Yatra',
    subtitle: 'Travel & Directions',
    emoji: '\u{1F68C}',
    phrases: [
      { hindi: 'Bus stop kahan hai?', english: 'Where is the bus stop?', pronunciation: 'Ve-ar iz da bas staap?' },
      { hindi: 'Mujhe station jaana hai', english: 'I want to go to the station', pronunciation: 'Aai vaant tu go tu da ste-shan' },
      { hindi: 'Kitni door hai?', english: 'How far is it?', pronunciation: 'Hau faar iz it?' },
      { hindi: 'Kripya rukiye', english: 'Please stop', pronunciation: 'Pleez staap' },
      { hindi: 'Seedha jaiye', english: 'Go straight', pronunciation: 'Go stret' },
    ],
  },
  {
    id: 'daily',
    title: 'Rozmarra',
    subtitle: 'Daily Life',
    emoji: '\u2600\uFE0F',
    phrases: [
      { hindi: 'Subah ho gayi', english: 'It is morning', pronunciation: 'It iz mor-ning' },
      { hindi: 'Mujhe bhookh lagi hai', english: 'I am hungry', pronunciation: 'Aai aem hang-ri' },
      { hindi: 'Paani dijiye', english: 'Please give water', pronunciation: 'Pleez giv vaa-tar' },
      { hindi: 'Main so raha hoon', english: 'I am sleeping', pronunciation: 'Aai aem slee-ping' },
      { hindi: 'Phir milenge', english: 'See you again', pronunciation: 'See yoo a-gen' },
    ],
  },
]

// Guided conversation for live practice
export const conversation = {
  title: 'Chai ki Dukaan par',
  subtitle: 'At the Tea Stall',
  turns: [
    { speaker: 'shopkeeper', hindi: 'Aaiye, kya loge?', english: 'Welcome, what would you like?' },
    { speaker: 'you', hindi: 'Ek chai dijiye', english: 'One tea please', pronunciation: 'Van tee pleez' },
    { speaker: 'shopkeeper', hindi: 'Cheeni kitni?', english: 'How much sugar?' },
    { speaker: 'you', hindi: 'Thodi cheeni', english: 'A little sugar', pronunciation: 'A li-tal shu-gar' },
    { speaker: 'shopkeeper', hindi: 'Yeh lijiye', english: 'Here you go' },
    { speaker: 'you', hindi: 'Kitne paise?', english: 'How much money?', pronunciation: 'Hau much ma-ni?' },
    { speaker: 'shopkeeper', hindi: 'Dus rupaye', english: 'Ten rupees' },
    { speaker: 'you', hindi: 'Yeh lijiye, dhanyavaad', english: 'Here you go, thank you', pronunciation: 'Hi-ar yoo go, thaink yoo' },
  ],
}
