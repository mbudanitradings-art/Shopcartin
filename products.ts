// DEMONSTRATION PRODUCTS ONLY.
// These are sample items used to show how the store works. They are not
// real supplier inventory and cannot be purchased.

export type CategorySlug = 'fashion' | 'electronics' | 'beauty' | 'accessories' | 'home'

export interface Category {
  slug: CategorySlug
  name: string
  blurb: string
}

export interface Product {
  id: string
  slug: string
  name: string
  category: CategorySlug
  price: number
  oldPrice?: number
  description: string
  features: string[]
  tags: string[]
  featured?: boolean
  trending?: boolean
}

export const categories: Category[] = [
  { slug: 'fashion', name: 'Fashion', blurb: 'Everyday clothing and footwear' },
  { slug: 'electronics', name: 'Electronics', blurb: 'Audio, power and wearables' },
  { slug: 'beauty', name: 'Beauty', blurb: 'Skincare and hair care' },
  { slug: 'accessories', name: 'Accessories', blurb: 'Watches, bags and essentials' },
  { slug: 'home', name: 'Home', blurb: 'Comfort and decor for your space' },
]

export const products: Product[] = [
  {
    id: 'p01', slug: 'heavyweight-essential-tee', name: 'Heavyweight Essential Tee', category: 'fashion',
    price: 349, oldPrice: 449, trending: true,
    description: 'A thick, structured cotton tee with a clean boxy fit. Easy to wear alone or layered.',
    features: ['Heavyweight cotton feel', 'Boxy relaxed fit', 'Ribbed crew neck', 'Available in sizes S to XXL'],
    tags: ['t-shirt', 'basics', 'cotton'],
  },
  {
    id: 'p02', slug: 'relaxed-cargo-pants', name: 'Relaxed Cargo Pants', category: 'fashion',
    price: 699, featured: true,
    description: 'Roomy cargo pants with practical pockets and an adjustable waist for all-day comfort.',
    features: ['Multiple utility pockets', 'Adjustable drawcord waist', 'Relaxed straight leg', 'Machine washable'],
    tags: ['pants', 'cargo', 'streetwear'],
  },
  {
    id: 'p03', slug: 'everyday-zip-hoodie', name: 'Everyday Zip Hoodie', category: 'fashion',
    price: 849, featured: true, trending: true,
    description: 'A soft brushed-fleece zip hoodie for cool mornings and relaxed weekends.',
    features: ['Brushed fleece interior', 'Full-length zip', 'Kangaroo pockets', 'Lined hood'],
    tags: ['hoodie', 'jacket', 'winter'],
  },
  {
    id: 'p04', slug: 'minimal-white-sneakers', name: 'Minimal White Sneakers', category: 'fashion',
    price: 1199, featured: true,
    description: 'Clean low-top sneakers in a simple white finish that goes with almost everything.',
    features: ['Cushioned insole', 'Flexible rubber sole', 'Lace-up front', 'Wipe-clean upper'],
    tags: ['shoes', 'sneakers', 'footwear'],
  },
  {
    id: 'p05', slug: 'wireless-earbuds-pro', name: 'Wireless Earbuds Pro', category: 'electronics',
    price: 899, oldPrice: 1199, featured: true, trending: true,
    description: 'Compact Bluetooth earbuds with a pocket-sized charging case for music and calls.',
    features: ['Bluetooth wireless connection', 'Charging case included', 'Built-in microphone', 'Touch controls'],
    tags: ['earbuds', 'audio', 'bluetooth'],
  },
  {
    id: 'p06', slug: 'power-bank-20000', name: '20,000mAh Power Bank', category: 'electronics',
    price: 549, trending: true,
    description: 'A high-capacity power bank to keep your phone and small devices charged on the go.',
    features: ['20,000mAh capacity', 'Dual USB output', 'USB-C input', 'Compact slim body'],
    tags: ['charger', 'power', 'travel'],
  },
  {
    id: 'p07', slug: 'smart-fitness-band', name: 'Smart Fitness Band', category: 'electronics',
    price: 649, featured: true,
    description: 'A lightweight activity band that tracks steps and shows phone notifications.',
    features: ['Step and activity tracking', 'Colour display', 'Notification alerts', 'Comfortable silicone strap'],
    tags: ['watch', 'fitness', 'wearable'],
  },
  {
    id: 'p08', slug: 'portable-bluetooth-speaker', name: 'Portable Bluetooth Speaker', category: 'electronics',
    price: 799,
    description: 'A small speaker with clear sound, made to carry to the park, the braai or the bedroom.',
    features: ['Bluetooth wireless connection', 'Rechargeable battery', 'Built-in microphone', 'Carry strap'],
    tags: ['speaker', 'audio', 'music'],
  },
  {
    id: 'p09', slug: 'hydrating-face-moisturiser', name: 'Hydrating Face Moisturiser 50ml', category: 'beauty',
    price: 229, featured: true,
    description: 'A light daily moisturiser that leaves skin feeling soft without a heavy finish.',
    features: ['50ml jar', 'Lightweight texture', 'Suitable for daily use', 'Fragrance-light'],
    tags: ['skincare', 'face', 'moisturiser'],
  },
  {
    id: 'p10', slug: 'vitamin-c-serum', name: 'Vitamin C Brightening Serum', category: 'beauty',
    price: 319, trending: true,
    description: 'A daily serum designed to support a brighter-looking, even-toned complexion.',
    features: ['30ml dropper bottle', 'Fast-absorbing formula', 'Use morning or night', 'Pairs with moisturiser'],
    tags: ['skincare', 'serum', 'face'],
  },
  {
    id: 'p11', slug: 'daily-spf50-sunscreen', name: 'Daily SPF 50 Sunscreen', category: 'beauty',
    price: 199,
    description: 'A lightweight daily sunscreen that sits comfortably under makeup or on its own.',
    features: ['SPF 50', '50ml tube', 'Non-greasy finish', 'Easy to reapply'],
    tags: ['sunscreen', 'spf', 'skincare'],
  },
  {
    id: 'p12', slug: 'argan-hair-oil', name: 'Argan Hair Oil', category: 'beauty',
    price: 179,
    description: 'A nourishing hair oil to add shine and smooth frizz, from mid-lengths to ends.',
    features: ['100ml bottle', 'Adds shine', 'Helps tame frizz', 'Use on damp or dry hair'],
    tags: ['hair', 'oil', 'argan'],
  },
  {
    id: 'p13', slug: 'classic-steel-watch', name: 'Classic Steel Watch', category: 'accessories',
    price: 1299, featured: true,
    description: 'A clean-faced analogue watch with a steel band, made to pair with any outfit.',
    features: ['Stainless steel band', 'Analogue quartz movement', 'Minimal dial', 'Adjustable fit'],
    tags: ['watch', 'steel', 'jewellery'],
  },
  {
    id: 'p14', slug: 'everyday-crossbody-bag', name: 'Everyday Crossbody Bag', category: 'accessories',
    price: 499, trending: true,
    description: 'A compact crossbody bag with room for your phone, wallet and keys.',
    features: ['Adjustable strap', 'Zip main compartment', 'Front pocket', 'Lightweight build'],
    tags: ['bag', 'crossbody', 'travel'],
  },
  {
    id: 'p15', slug: 'minimal-sunglasses', name: 'Minimal Sunglasses', category: 'accessories',
    price: 299,
    description: 'Simple black-framed sunglasses with UV-protective lenses for sunny South African days.',
    features: ['UV-protective lenses', 'Lightweight frame', 'Unisex shape', 'Soft pouch included'],
    tags: ['sunglasses', 'eyewear', 'summer'],
  },
  {
    id: 'p16', slug: 'slim-card-wallet', name: 'Slim Card Wallet', category: 'accessories',
    price: 249, featured: true,
    description: 'A thin wallet that holds your cards and a few notes without the bulk.',
    features: ['Multiple card slots', 'Slim pocket-friendly shape', 'Cash slot', 'Durable stitching'],
    tags: ['wallet', 'cards', 'everyday'],
  },
  {
    id: 'p17', slug: 'ceramic-mug-set', name: 'Ceramic Mug Set of 4', category: 'home',
    price: 329,
    description: 'Four matching ceramic mugs with a smooth matte finish for coffee, tea or hot chocolate.',
    features: ['Set of 4 mugs', 'Matte ceramic finish', 'Comfortable handle', 'Dishwasher friendly'],
    tags: ['mug', 'kitchen', 'coffee'],
  },
  {
    id: 'p18', slug: 'linen-throw-blanket', name: 'Soft Linen Throw Blanket', category: 'home',
    price: 459, featured: true,
    description: 'A soft textured throw to drape over the couch or the end of the bed.',
    features: ['Soft woven texture', 'Light but warm', 'Generous throw size', 'Machine washable'],
    tags: ['blanket', 'bedroom', 'decor'],
  },
  {
    id: 'p19', slug: 'scented-soy-candle', name: 'Scented Soy Candle', category: 'home',
    price: 189, trending: true,
    description: 'A hand-poured style soy candle in a reusable glass jar with a warm, calm scent.',
    features: ['Soy wax blend', 'Reusable glass jar', 'Cotton wick', 'Long even burn'],
    tags: ['candle', 'fragrance', 'decor'],
  },
  {
    id: 'p20', slug: 'led-desk-lamp', name: 'LED Desk Lamp', category: 'home',
    price: 399,
    description: 'A slim adjustable desk lamp with soft light for studying, working or reading.',
    features: ['Adjustable arm', 'Multiple brightness levels', 'USB powered', 'Slim footprint'],
    tags: ['lamp', 'desk', 'lighting'],
  },
]

export const getProductBySlug = (slug: string) => products.find((p) => p.slug === slug)
export const getProductById = (id: string) => products.find((p) => p.id === id)
export const getCategory = (slug: string) => categories.find((c) => c.slug === slug)
