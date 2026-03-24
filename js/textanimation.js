gsap.registerPlugin(TextPlugin);

const quotes = gsap.utils.toArray('.quote');
const button = document.getElementById('toggleBtn');

let isDecoded = false;

const getRandomPosition = () => {
  const x = Math.random() * (window.innerWidth - 200);
  const y = Math.random() * (window.innerHeight - 100);
  
  return { x, y };
};

const typewriterQuote = (quote, text) => {
  const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

  tl.call(() => {
    const { x, y } = getRandomPosition();
    gsap.set(quote, { x, y });
  })
    .to(quote, {
      delay: Math.random() * 5,
      duration: text.length * 0.1,
      text: text,
      opacity: 1,
      ease: 'none',
    }, 0)
    .to(quote, {
      delay: 2,
      duration: 1,
      text: "", 
      opacity: 0,
      ease: 'none',
    });
};

quotes.forEach((quote) => {
  const originalText = quote.textContent ?? '';
  
  gsap.set(quote, {
    position: 'absolute',
    opacity: 0,
    whiteSpace: 'nowrap',
    text: '',
  });

  typewriterQuote(quote, originalText);
});

gsap.set(target, { text: '' });

function toggleTypewriter() {
  const text = isDecoded ? '' : message;
  const duration = text.length * 0.05;

  gsap.to(target, {
    duration,
    text: text,
    ease: 'none',
  });

  button.textContent = isDecoded ? 'Start' : 'Clear';
  isDecoded = !isDecoded;
}

button?.addEventListener('click', toggleTypewriter);
