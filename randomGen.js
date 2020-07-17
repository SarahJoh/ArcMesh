function buildProjectIdea() {
    var adjective = randomAdjGen() + "  ";
    var noun = randomNounGen();

    var result = adjective.concat(noun);
    document.getElementById("result").innerHTML = result;
}

// Returns a random element of the following assortment of *** common nouns.
function randomNounGen() {
    var nouns = ['abbey', 'academy', 'accident', 'accordion', 'actor', 'admiral', 'admirer', 'adventure', 'advertisement', 'afternoon', 'agent', 'aircraft', 
    'airport', 'airstrip', 'aisle', 'alarm-clock', 'album', 'alchemist', 'alcohol', 'alert', 'algae', 'algebra', 'alibi', 'alien', 'alligator', 'ally', 'almond',
    'altar', 'amateur', 'ambassador', 'ambiance', 'ambulance', 'ambush', 'ammo', 'amphitheater', 'amplifier', 'amulet', 'amusement park', 'anaconda', 'analyst',
    'anarchist', 'anatomy', 'ancestor', 'anchor', 'angel', 'animal', 'animation', 'ankle', 'anniversary', 'anomaly', 'ant', 'antenna', 'antibiotic', 'antibody',
    'anteater', 'antelope', 'anvil', 'aorta', 'apartment', 'ape', 'apocalypse', 'apothecary', 'apple', 'appointment', 'apricot', 'apron', 'arc', 'arch', 'archeologist',
    'arcade', 'arm', 'armadillo', 'arnament', 'armchair', 'armor', 'army', 'aroma', 'arrest', 'arrow', 'arson', 'artillery', 'artisan', 'artist', 'ascent', 'asphalt',
    'assassin', 'assassination', 'assault', 'asteroid', 'astronaut', 'astronomer', 'asymmetry', 'athlete', 'atmosphere', 'atom', 'attack', 'attic', 'attorney', 'auction',
    'auctioneer', 'audience', 'auditorium', 'aura', 'author', 'authority', 'autograph', 'automaton', 'auto', 'autopsy', 'autumn', 'avenue', 'avocado', 'awakening',
    'award', 'axe',
    'baby', 'bachelor', 'background', 'backpack', 'backyard', 'bacon', 'bacteria', 'badge', 'badminton', 'bag', 'baggage', 'bagpipe', 'bait', 'baker', 'bakery', 
    'balance', 'balcony', 'ball', 'ballerina', 'ballett', 'balloon', 'ballplayer', 'banana', 'band', 'bandage', 'bandit', 'bandwagon', 'bang', 'banjo', 'bank', 'banner',
    'banquet', 'banshee', 'baptism', 'bar', 'barbarian', 'barbecue', 'barber', 'bard', 'barkeeper', 'baron', 'barrack', 'barrell', 'barricade', 'barrier', 'base', 
    'barn', 'baseball', 'basement', 'basin', 'basket', 'basketball', 'bastion', 'bat', 'bath', 'bathroom', 'battalion', 'battery', 'battle', 'bay', 'bayonet', 'beach',
    'beacon', 'bead', 'bean', 'beast', 'bed', 'bee', 'beef', 'beehive', 'beer', 'beggar', 'bell', 'belt', 'bench', 'betrayal', 'berry', 'beverage', 'biceps', 'bicycle',
    'bill', 'bin', 'biologist', 'birch', 'bird', 'birthday', 'biscuit', 'bishop', 'bison', 'blackberry', 'blackboard', 'blackjack', 'blackmail', 'blacksmith',
    'blade', 'blanket', 'blessing', 'blizzard', 'block', 'blood', 'blossom', 'boar', 'board', 'blouse', 'blowfish', 'blueberry', 'blueprint', 'boat', 'bodybuilder', 'bodyguard',
    'bogeyman', 'bomb', 'bomber', 'bonfire', 'bongo', 'book', 'bookshelf', 'boomerang', 'bottle', 'boxer', 'bracelet', 'brain', 'branch', 'brawl', 'bread',
    'breakfast', 'brewery', 'brick', 'briefcase', 'broccoli', 'brochure', 'broom', 'bruise', 'brush', 'buck', 'bucket', 'buffalo', 'buffet', 'bug', 'buggy', 'building',
    'bull', 'bullet', 'bumblebee', 'bumper', 'bunker', 'burglar', 'burial', 'bust', 'butcher', 'butler', 'butter', 'butterfly', 'butternut', 'button',
    'cabbage', 'cabdriver', 'cabin', 'cable', 'cacao', 'cafe', 'cake', 'calendar', 'calligraphy', 'camera', 'camel', 'camp', 'campfire', 'can', 'candle', 'candy',
    'cane', 'canine', 'cannon', 'cannonball', 'canoe', 'canyon', 'cap', 'cape', 'capital', 'capsule', 'captain', 'car', 'caramel', 'caravan', 'card', 'cardboard',
    'cargo', 'caricature', 'carnival', 'casino', 'cartoon', 'cash', 'castle', 'cathedral', 'cattle', 'cave', 'cauliflower', 'caviar', 'ceiling', 'celebration',
    'celebrity', 'celery', 'cell', 'cellar', 'cemetery', 'cent', 'center', 'certificate', 'chain', 'chair', 'chalk', 'challenge', 'champagne', 'chandelier', 'charcoal',
    'chariot', 'cheese', 'chemistry', 'chestnut', 'cheetah', 'chef', 'cherry', 'chicken', 'chili', 'chimney', 'chip', 'chocolate', 'church', 'cigar', 'clam',
    'clarinet', 'classroom', 'cleric', 'clinic', 'clubhouse', 'coast', 'coat', 'cobalt', 'cobblestone', 'cocktail', 'coconut', 'cocoon', 'coffee', 'cobra', 'coffin',
    'coin', 'cola', 'collar', 'colt', 'concert', 'copper', 'costume', 'cotton', 'corridor', 'cream', 'crater', 'creeper', 'critter', 'crow', 'crucifix', 'crown', 'crusade',
    'crypt', 'crystal', 'cube', 'cultist', 'cup',];

    var randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
    return randomNoun;
};


// Returns a random element of the following assortment of *** common adjectives.
function randomAdjGen() {
    var adjectives = ['abandoned', 'able', 'absolute', 'academic', 'acceptable', 'acclaimed', 'accomplished', 'accurate', 'aching', 'acidic', 'acrobatic', 'active', 'actual',
    'adept', 'admirable', 'admired', 'adolescent', 'adorable', 'adored', 'advanced', 'adventurous', 'affectionate', 'afraid', 'aged', 'aggravating', 'aggressive', 'agile', 
    'agitated', 'agonizing', 'agreeable', 'ajar', 'alarmed', 'alarming', 'alert', 'alienated', 'alive', 'altruistic', 'amazing', 'ambitious', 'amused', 'amusing', 'anchored',
    'ancient', 'angelic', 'angry', 'anguished', 'animated', 'annual', 'another', 'antique', 'anxious', 'apprehensive', 'appropriate', 'arctic', 'aromatic', 'artistic', 'ashamed',
    'assured', 'astonishing', 'athletic', 'attached', 'attentive', 'attractive', 'authentic', 'authorized', 'automatic', 'average', 'aware', 'awesome', 'awful', 'awkward',
    'babyish', 'bad', 'baggy', 'basic', 'beautiful', 'beloved', 'beneficial', 'best', 'better', 'bewitched', 'big', 'big-hearted', 'biodegradable', 'bite-sized', 'bitter', 'black',
    'black-and-white', 'bland', 'blank', 'blaring', 'bleak', 'blind', 'blissful', 'blond', 'blue', 'blushing', 'boiling', 'bold', 'boring', 'bossy', 'bouncy', 'bountiful', 'brave',
    'breakable', 'brief', 'brigh', 'brilliant', 'broken', 'bronze', 'brown', 'bruised', 'bubbly', 'bulky', 'bumpy', 'burdensome', 'busy', 'buttery', 'buzzing',
    'calculating', 'calm', 'candid', 'carefree', 'careful', 'careless', 'caring', 'cautious', 'charming', 'cheap', 'cheerful', 'cheery', 'chilly', 'chubby', 'circular', 'classic',
    'clean', 'clear', 'clever', 'close', 'closed', 'cloudy', 'clueless', 'clumsy', 'cluttered', 'coarse', 'cold', 'colorful', 'colorless', 'colossal', 'comfortable', 'common', 
    'compassionat', 'competent', 'complete', 'complex', 'complicated', 'composed', 'concerned', 'concrete', 'confused', 'conscious', 'considerate', 'constant', 'content', 
    'conventional', 'cooked', 'cool', 'cooperative', 'coordinated', 'corrupt', 'costly', 'courageous', 'courteous', 'crafty', 'crazy', 'creamy', 'creative', 'creepy', 'criminal',
    'crisp', 'critical', 'crooked', 'crowded', 'cruel', 'crushing', 'cuddly', 'cultivated', 'cultured', 'cumbersome', 'curly', 'curvy', 'cute', 'cylindrical',
    'damaged', 'damp', 'dangerous', 'dapper', 'daring', 'dark', 'darling', 'dazzling', 'dead', 'deadly', 'deafening', 'decent', 'decisive', 'deep', 'defenseless', 'defensive',
    'delayed', 'delicious', 'delightful', 'delirious', 'demanding', 'dense', 'dependable', 'dependent', 'descriptive', 'deserted', 'detailed', 'determined', 'devoted', 'different',
    'difficult', 'digital', 'dim', 'dimwitted', 'direct', 'dirty', 'disastrous', 'discrete', 'disfigured', 'disguised', 'disgusting', 'dishonest', 'disloyal', 'distant', 'distinct',
    'distorted', 'dizzy', 'double', 'downright', 'dramatic', 'dreary', 'dry', 'dual', 'dull', 'dutiful',
    'eager', 'early', 'earnest', 'easy', 'ecstatic', 'edible', 'educated', 'elaborate', 'elastic', 'elderly', 'electric', 'elegant', 'elementary', 'elliptical', 'embarrassed',
    'emotional', 'empty', 'enchanted', 'enchanting', 'energetic', 'enlightened', 'enormous', 'enraged', 'entire', 'envious', 'equal', 'essential', 'esteemed', 'ethical', 'euphoric',
    'even', 'evergreen', 'everlasting', 'every', 'evil', 'exalted', 'excellent', 'excitable', 'excited', 'exciting', 'exemplary', 'exhausted', 'exotic', 'expensive', 'experienced',
    'expert', 'extra-large', 'extra-small', 'extroverted',
    'fabulous', 'failing', 'faint', 'fair', 'faithful', 'fake', 'false', 'familiar', 'famous', 'fancy', 'fantastic', 'far', 'fast', 'fat', 'fatal', 'fatherly', 'favorable', 'favorite',
    'fearful', 'fearless', 'feisty', 'feline', 'female', 'feminine', 'few', 'filthy', 'fine', 'finished', 'firm', 'first', 'fitting', 'fixed', 'flaky', 'flamboyant', 'flashy', 'flat', 
    'flawed', 'flawless', 'flickering', 'flimsy', 'flowery', 'fluffy', 'fluid', 'flustered', 'focused', 'fond', 'foolish', 'forceful', 'formal', 'forsaken', 'fortunate', 'fragrant',
    'frayed', 'free', 'French', 'frequent', 'fresh', 'friendly', 'frightened', 'frightening', 'frigid', 'frivolous', 'frosty', 'frozen', 'fumbling', 'functional', 'funny', 'fuzzy',
    'gargantuan', 'generous', 'gentle', 'genuine', 'giant', 'gifted', 'gigantic', 'giving', 'glamorous', 'glaring', 'glass', 'gleaming', 'gleeful', 'glistening', 'glittering', 
    'gloomy', 'glorious', 'glossy', 'golden', 'good', 'good-natured', 'gorgeous', 'graceful', 'gracious', 'grateful', 'gray', 'great', 'greedy', 'green', 'grim', 'gross', 'grotesque',
    'growing', 'growling', 'grown', 'gruesome', 'grumpy', 'guilty', 'gummy',
    'hairy', 'handmade', 'handsome', 'happy', 'hard-to-find', 'harmful', 'harmless', 'harmonious', 'harsh', 'hateful', 'haunting', 'healthy', 'heavenly', 'heavy', 'helpful', 'helpless',
    'hidden', 'hideous', 'high', 'high-level', 'hilarious', 'hollow', 'homely', 'honest', 'honorable', 'hopeful', 'horrible', 'hot', 'huge', 'humiliating', 'hungry',
    'icy', 'idealistic', 'identical', 'idiotic', 'idolized', 'ignorant', 'ill', 'ill-fated', 'ill-informed', 'illegal', 'illiterate', 'imaginary', 'imaginative', 'imperfect', 'impolite',
    'important', 'impossible', 'impractical', 'impressionable', 'impressive', 'incomplete', 'incredible', 'inexperienced', 'infamous', 'infantile', 'inferior', 'infinite', 'informal', 
    'innocent', 'insecure', 'insignificant', 'intelligent', 'interesting', 'international', 'itchy',
    'jaded', 'jagged', 'jealous', 'jittery', 'jolly', 'joyful', 'juicy', 'jumbo', 'jumpy', 'junior', 'juvenile',
    'kaleidoscopic', 'knowing', 'knowledgeable',
    'lame', 'lanky', 'large', 'last', 'late', 'lazy', 'light', 'limping', 'liquid', 'little', 'livid', 'lonely', 'long', 'loose', 'lost', 'loud', 'lovely', 'low', 'lucky', 'luxurious',
    'mad', 'made-up', 'majestic', 'male', 'married', 'masculine', 'mature', 'medical', 'mediocre', 'medium', 'melodic', 'memorable', 'messy', 'metallic', 'milky', 'miniature', 'minty',
    'mixed', 'modern', 'moist', 'monstrous', 'monumental', 'mortified', 'motherly', 'motionless', 'mountainous', 'muddy', 'multicolored', 'mute', 'mysterious', 
    'naive', 'narrow', 'nasty', 'natural', 'nautical', 'negative', 'nervous', 'new', 'next', 'nice', 'nimble', 'nocturnal', 'noisy',
    'obese', 'occasional', 'odd', 'official', 'oily', 'old', 'old-fashioned', 'orange', 'organic', 'original', 'ornate', 'other', 'oval', 'overcooked', 'overdue',
    'pale', 'partial', 'pastel', 'perfect', 'perfumed', 'pessimistic', 'pink', 'plain', 'plastic', 'plump', 'plush', 'polished', 'political', 'poor', 'practical', 'precious', 'present',
    'prestigious', 'pricey', 'primary', 'private', 'productive', 'profitable', 'proud', 'punctual', 'pure', 'purple', 'pushy', 'puzzled',
    'qualified', 'quarterly', 'questionable', 'quick', 'quick-witted', 'quiet', 'quirky', 'quizzical',
    'radiant', 'rare', 'raw', 'ready', 'real', 'realistic', 'recent', 'reckless', 'rectangular', 'red', 'reflecting', 'regular', 'reliable', 'remote', 'repulsive', 'required', 'rewarding',
    'rich', 'right', 'rigid', 'ripe', 'roasted', 'robust', 'rosy', 'rotating', 'rotten', 'rough', 'round', 'rowdy', 'royal', 'rubbery', 'rural', 'rusty',
    'sad', 'safe', 'salty', 'same', 'sandy', 'sane', 'sarcastic', 'scaly', 'scared', 'scary', 'scented', 'scholarly', 'scientific', 'scratchy', 'second-hand', 'secret', 'selfish', 'separate',
    'serious', 'shadowy', 'shady', 'shameful', 'shameless', 'sharp', 'shimmering', 'shiny', 'shocked', 'shocking', 'short', 'short-term', 'shy', 'sick', 'silent', 'silky', 'silly', 'silver', 
    'simple', 'sinful', 'single', 'sizzling', 'skeletal', 'skinny', 'sleepy', 'slim', 'slimy', 'slippery', 'slow', 'small', 'smart', 'smooth', 'smug', 'sneaky', 'snoopy', 'sociable', 'soft',
    'soggy', 'solid', 'sore', 'sour', 'Spanish', 'sparkling', 'sparse', 'specific', 'speedy', 'spherical', 'spicy', 'spirited', 'spotless', 'spotted', 'square', 'squeaky', 'squiggly', 'stable',
    'stained', 'standard', 'steel', 'steep', 'sticky', 'stiff', 'stormy', 'straight', 'strange', 'strict', 'striking', 'striped', 'strong', 'stunning', 'stupid', 'sturdy', 'stylish', 'subdued',
    'submissive', 'subtle', 'suburban', 'sudden', 'sugary', 'sunny', 'super', 'superior', 'sure-footed', 'surprised', 'suspicious', 'sweaty', 'sweet', 'swift',
    'talkative', 'tameable', 'tan', 'tasty', 'tempting', 'tender', 'terrible', 'terrific', 'thick', 'thin', 'third', 'thirsty', 'thorny', 'thoughtful', 'thrifty', 'thunderous', 'tidy', 'tight',
    'timely', 'tinted', 'tiny', 'tired', 'torn', 'tragic', 'trained', 'traumatic', 'treasured', 'tremendous', 'triangular', 'tricky', 'troubled', 'true', 'trusting', 'turbulent', 'twin',
    'ugly', 'unacceptable', 'unaware', 'uncomfortable', 'uncommon', 'unconscious', 'uneven', 'unfit', 'unfortunate', 'unhealthy', 'unimportant', 'unique', 'united', 'unknown', 'unlawful',
    'unlucky', 'unnatural', 'unpleasant', 'unrealistic', 'unripe', 'unruly', 'unsteady', 'untidy', 'untrue', 'unused', 'unusual', 'unwelcome', 'unwilling', 'upbeat', 'upright', 'upset', 'urban',
    'usable', 'used', 'useful', 'useless',
    'vacant', 'vague', 'vain', 'valid', 'valuable', 'variable', 'vengeful', 'vibrant', 'vicious', 'victorious', 'villainous', 'violent', 'violet', 'virtual', 'visible', 'vital', 'vivid', 
    'voluminous',
    'warlike', 'warm', 'warped', 'wary', 'wasteful', 'water', 'logged', 'weak', 'wealthy', 'webbed', 'weekly', 'weighty', 'weird', 'well-documented', 'well-groomed', 'well-informed', 'well-made',
    'well-off', 'wet', 'whimsical', 'whispering', 'white', 'whole', 'whopping', 'wicked', 'wide', 'wiggly', 'wild', 'windy', 'winged', 'wiry', 'wise', 'witty', 'wobbly', 'wonderful', 'wooden',
    'wordy', 'worldly', 'worn', 'worried', 'worst', 'worthless', 'worthwhile', 'wrathful', 'wretched', 'wrong',
    'yawning', 'yearly', 'yellow', 'yellowish', 'young', 'youthful', 'yummy'];
    
    var randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    return randomAdjective;
};
