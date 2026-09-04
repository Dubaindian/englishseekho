// Six beginner lessons. Each phrase has:
// - hindi: the Hindi meaning (romanized Hinglish, easy to read aloud)
// - english: the English sentence to speak
// - pronunciation: Hindi-script (Devanagari) pronunciation help

export const lessons = [
  {
    id: 'greetings',
    title: 'Namaste aur Parichay',
    subtitle: 'Greetings & Introductions',
    emoji: '\u{1F44B}',
    phrases: [
      { hindi: 'Namaste', english: 'Hello', pronunciation: '\u0939\u0945\u0932\u094B' },
      { hindi: 'Aap kaise hain?', english: 'How are you?', pronunciation: '\u0939\u093E\u0909 \u0906\u0930 \u092F\u0942?' },
      { hindi: 'Main theek hoon, dhanyavaad', english: 'I am fine, thank you', pronunciation: '\u0906\u0908 \u0910\u092E \u092B\u093E\u0907\u0928, \u0925\u0948\u0902\u0915 \u092F\u0942' },
      { hindi: 'Mera naam Ram hai', english: 'My name is Ram', pronunciation: '\u092E\u093E\u092F \u0928\u0947\u092E \u0907\u091C \u0930\u093E\u092E' },
      { hindi: 'Aapse milkar khushi hui', english: 'Nice to meet you', pronunciation: '\u0928\u093E\u0907\u0938 \u091F\u0942 \u092E\u0940\u091F \u092F\u0942' },
    ],
  },
  {
    id: 'family',
    title: 'Parivaar',
    subtitle: 'Family',
    emoji: '\u{1F46A}',
    phrases: [
      { hindi: 'Yeh mera parivaar hai', english: 'This is my family', pronunciation: '\u0921\u093F\u0938 \u0907\u091C \u092E\u093E\u092F \u092B\u0948\u092E\u093F\u0932\u0940' },
      { hindi: 'Mere do bachche hain', english: 'I have two children', pronunciation: '\u0906\u0908 \u0939\u0948\u0935 \u091F\u0942 \u091A\u093F\u0932\u094D\u0921\u094D\u0930\u0928' },
      { hindi: 'Yeh meri patni hai', english: 'This is my wife', pronunciation: '\u0921\u093F\u0938 \u0907\u091C \u092E\u093E\u092F \u0935\u093E\u0907\u092B' },
      { hindi: 'Mera beta school jaata hai', english: 'My son goes to school', pronunciation: '\u092E\u093E\u092F \u0938\u0928 \u0917\u094B\u091C \u091F\u0942 \u0938\u094D\u0915\u0942\u0932' },
      { hindi: 'Hum saath rehte hain', english: 'We live together', pronunciation: '\u0935\u0940 \u0932\u093F\u0935 \u091F\u0941\u0917\u0947\u0926\u0930' },
    ],
  },
  {
    id: 'market',
    title: 'Bazaar',
    subtitle: 'At the Market',
    emoji: '\u{1F6D2}',
    phrases: [
      { hindi: 'Yeh kitne ka hai?', english: 'How much is this?', pronunciation: '\u0939\u093E\u0909 \u092E\u091A \u0907\u091C \u0921\u093F\u0938?' },
      { hindi: 'Bahut mehenga hai', english: 'It is too expensive', pronunciation: '\u0907\u091F \u0907\u091C \u091F\u0942 \u0907\u0915\u094D\u0938\u092A\u0947\u0928\u094D\u0938\u093F\u0935' },
      { hindi: 'Mujhe yeh chahiye', english: 'I want this', pronunciation: '\u0906\u0908 \u0935\u093E\u0902\u091F \u0921\u093F\u0938' },
      { hindi: 'Kya aap kam karenge?', english: 'Can you lower the price?', pronunciation: '\u0915\u0948\u0928 \u092F\u0942 \u0932\u094B\u0905\u0930 \u0926 \u092A\u094D\u0930\u093E\u0907\u0938?' },
      { hindi: 'Dhanyavaad', english: 'Thank you', pronunciation: '\u0925\u0948\u0902\u0915 \u092F\u0942' },
    ],
  },
  {
    id: 'health',
    title: 'Sehat',
    subtitle: 'Health & Doctor',
    emoji: '\u{1FA7A}',
    phrases: [
      { hindi: 'Mujhe bukhaar hai', english: 'I have a fever', pronunciation: '\u0906\u0908 \u0939\u0948\u0935 \u0905 \u092B\u0940\u0935\u0930' },
      { hindi: 'Mera sir dukh raha hai', english: 'I have a headache', pronunciation: '\u0906\u0908 \u0939\u0948\u0935 \u0905 \u0939\u0947\u0921\u090F\u0915' },
      { hindi: 'Mujhe dawai chahiye', english: 'I need medicine', pronunciation: '\u0906\u0908 \u0928\u0940\u0921 \u092E\u0947\u0921\u093F\u0938\u093F\u0928' },
      { hindi: 'Doctor kahan hai?', english: 'Where is the doctor?', pronunciation: '\u0935\u0947\u0905\u0930 \u0907\u091C \u0926 \u0921\u0949\u0915\u094D\u091F\u0930?' },
      { hindi: 'Main theek nahin hoon', english: 'I am not well', pronunciation: '\u0906\u0908 \u0910\u092E \u0928\u0949\u091F \u0935\u0947\u0932' },
    ],
  },
  {
    id: 'travel',
    title: 'Yatra',
    subtitle: 'Travel & Directions',
    emoji: '\u{1F68C}',
    phrases: [
      { hindi: 'Bus stop kahan hai?', english: 'Where is the bus stop?', pronunciation: '\u0935\u0947\u0905\u0930 \u0907\u091C \u0926 \u092C\u0938 \u0938\u094D\u091F\u0949\u092A?' },
      { hindi: 'Mujhe station jaana hai', english: 'I want to go to the station', pronunciation: '\u0906\u0908 \u0935\u093E\u0902\u091F \u091F\u0942 \u0917\u094B \u091F\u0942 \u0926 \u0938\u094D\u091F\u0947\u0936\u0928' },
      { hindi: 'Kitni door hai?', english: 'How far is it?', pronunciation: '\u0939\u093E\u0909 \u092B\u093E\u0930 \u0907\u091C \u0907\u091F?' },
      { hindi: 'Kripya rukiye', english: 'Please stop', pronunciation: '\u092A\u094D\u0932\u0940\u091C \u0938\u094D\u091F\u0949\u092A' },
      { hindi: 'Seedha jaiye', english: 'Go straight', pronunciation: '\u0917\u094B \u0938\u094D\u091F\u094D\u0930\u0947\u091F' },
    ],
  },
  {
    id: 'daily',
    title: 'Rozmarra',
    subtitle: 'Daily Life',
    emoji: '\u2600\uFE0F',
    phrases: [
      { hindi: 'Subah ho gayi', english: 'It is morning', pronunciation: '\u0907\u091F \u0907\u091C \u092E\u0949\u0930\u094D\u0928\u093F\u0902\u0917' },
      { hindi: 'Mujhe bhookh lagi hai', english: 'I am hungry', pronunciation: '\u0906\u0908 \u0910\u092E \u0939\u0902\u0917\u094D\u0930\u0940' },
      { hindi: 'Paani dijiye', english: 'Please give water', pronunciation: '\u092A\u094D\u0932\u0940\u091C \u0917\u093F\u0935 \u0935\u0949\u091F\u0930' },
      { hindi: 'Main so raha hoon', english: 'I am sleeping', pronunciation: '\u0906\u0908 \u0910\u092E \u0938\u094D\u0932\u0940\u092A\u093F\u0902\u0917' },
      { hindi: 'Phir milenge', english: 'See you again', pronunciation: '\u0938\u0940 \u092F\u0942 \u0905\u0917\u0947\u0928' },
    ],
  },
]

// Open-ended, rule-based live conversation practice.
// The "partner" is a friendly tea-stall shopkeeper. The learner can type or
// speak anything in English; we match keywords to a rule and reply. There is
// no fixed script, so every session can go differently.
export const practice = {
  title: 'Chai ki Dukaan par',
  subtitle: 'At the Tea Stall - jo chahe bolein',
  // Opening line from the shopkeeper.
  opener: { english: 'Welcome! What would you like?', hindi: 'Aaiye! Kya lenge?' },
  // Ideas the learner can tap to try (English + Hindi meaning).
  suggestions: [
    { english: 'One tea please', hindi: 'Ek chai dijiye' },
    { english: 'How much is it?', hindi: 'Kitne paise hue?' },
    { english: 'A little sugar', hindi: 'Thodi cheeni' },
    { english: 'Do you have biscuits?', hindi: 'Biscuit hai kya?' },
    { english: 'Thank you, goodbye', hindi: 'Dhanyavaad, alvida' },
  ],
  // Rules are checked in order; first match wins.
  rules: [
    {
      keywords: ['hello', 'hi', 'namaste', 'good morning', 'good evening'],
      english: 'Hello! Nice to see you. Please sit.',
      hindi: 'Namaste! Aapko dekhkar accha laga. Baithiye.',
    },
    {
      keywords: ['tea', 'chai', 'coffee'],
      english: 'Sure, one hot tea coming. How much sugar?',
      hindi: 'Zaroor, ek garam chai aa rahi hai. Cheeni kitni?',
    },
    {
      keywords: ['sugar', 'cheeni', 'sweet', 'little', 'less', 'more'],
      english: 'Okay, I will make it just right for you.',
      hindi: 'Theek hai, main aapke hisaab se bana dunga.',
    },
    {
      keywords: ['biscuit', 'snack', 'samosa', 'food', 'eat'],
      english: 'Yes, we have biscuits and samosas. Would you like some?',
      hindi: 'Haan, biscuit aur samose hain. Aap lenge?',
    },
    {
      keywords: ['how much', 'price', 'cost', 'money', 'rupee', 'rupees', 'paise'],
      english: 'That will be ten rupees only.',
      hindi: 'Bas das rupaye honge.',
    },
    {
      keywords: ['water', 'paani'],
      english: 'Of course, here is a glass of water.',
      hindi: 'Bilkul, yeh lijiye ek glass paani.',
    },
    {
      keywords: ['thank', 'thanks', 'dhanyavaad', 'bye', 'goodbye', 'alvida'],
      english: 'Thank you! Please come again.',
      hindi: 'Dhanyavaad! Phir aaiyega.',
    },
    {
      keywords: ['yes', 'okay', 'ok', 'sure', 'please'],
      english: 'Great, I will get that ready for you.',
      hindi: 'Badhiya, main abhi taiyaar karta hoon.',
    },
    {
      keywords: ['no', 'not', "don't", 'nahi'],
      english: 'No problem. Anything else you need?',
      hindi: 'Koi baat nahi. Aur kuch chahiye?',
    },
  ],
  // Used when nothing matches - keeps the conversation moving.
  fallback: {
    english: "I did not fully understand, but that's okay. Would you like tea or a snack?",
    hindi: 'Main poori tarah samjha nahi, par koi baat nahi. Chai loge ya kuch khaane ko?',
  },
}

// Match learner text to a rule reply.
export function replyTo(text) {
  const lower = (text || '').toLowerCase()
  for (const rule of practice.rules) {
    if (rule.keywords.some((k) => lower.includes(k))) {
      return { english: rule.english, hindi: rule.hindi }
    }
  }
  return practice.fallback
}
