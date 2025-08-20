// Image utilities for Vercel deployment
// These placeholder images will work reliably on Vercel

export const placeholderImages = {
  heroFlowers: 'https://images.unsplash.com/photo-1582793988957-b8c17c79e8ab?w=800&h=600&fit=crop&crop=center',
  roseBouquet: 'https://images.unsplash.com/photo-1582793988957-b8c17c79e8ab?w=800&h=600&fit=crop&crop=center',
  greenhouse: 'https://images.unsplash.com/photo-1582793988957-b8c17c79e8ab?w=800&h=600&fit=crop&crop=center',
  farm: 'https://images.unsplash.com/photo-1582793988957-b8c17c79e8ab?w=800&h=600&fit=crop&crop=center',
  flowers: 'https://images.unsplash.com/photo-1582793988957-b8c17c79e8ab?w=800&h=600&fit=crop&crop=center',
  roses: 'https://images.unsplash.com/photo-1582793988957-b8c17c79e8ab?w=800&h=600&fit=crop&crop=center',
  sustainability: 'https://images.unsplash.com/photo-1582793988957-b8c17c79e8ab?w=800&h=600&fit=crop&crop=center',
  community: 'https://images.unsplash.com/photo-1582793988957-b8c17c79e8ab?w=800&h=600&fit=crop&crop=center'
};

// Function to get a placeholder image by key
export const getPlaceholderImage = (key: keyof typeof placeholderImages) => {
  return placeholderImages[key];
};

// Function to get a random placeholder image
export const getRandomPlaceholderImage = () => {
  const keys = Object.keys(placeholderImages) as (keyof typeof placeholderImages)[];
  const randomKey = keys[Math.floor(Math.random() * keys.length)];
  return placeholderImages[randomKey];
};
