import Cards from './Cards/Cards';

//Master Component
const App = () => {
  //Dummy JSON data for the content to be shown
  const items = [
    {
      title: 'HIREABLE ROOMS',
      content: 'Anthing room at Green Square Library',
      imgref: 'https://unsplash.it/400/300',
      detail: 'https://www.google.com/',
      location: 'CANBERRA'
    },
    {
      title: 'ENTIRE APARTMENT',
      content: 'This host committed to cleaning process',
      imgref: 'https://picsum.photos/id/237/400/300',
      detail: 'https://en.wikipedia.org/wiki/Wikipedia',
      location: 'MELBOURNE'
    },
    {
      title: 'SHARED FLAT',
      content: 'Add your trip dates to get cancelled',
      imgref: 'https://picsum.photos/seed/picsum/400/300',
      detail: 'https://www.skynews.com.au/',
      location: 'QUEENSLAND'
    },
    {
      title: 'ENHANCED SPACE',
      content: 'You can check in with the doorman.',
      imgref: 'https://picsum.photos/400/300?grayscale',
      detail: 'https://www.abc.net.au/news/newschannel/',
      location: 'VICTORIA'
    },
    {
      title: 'BIG VILLA',
      content: 'An art in the heart of Silicon Valley',
      imgref: 'https://picsum.photos/400/300/',
      detail: 'https://www.bbc.com/',
      location: 'TASMANIA'
    },
    {
      title: 'LUXURY APARTMENT',
      content: 'It has some wonderful trees all around ',
      imgref: 'https://picsum.photos/id/870/400/300',
      detail: 'https://www.tvnz.co.nz/one-news/new-zealand',
      location: 'BRISBANE'
    }
  ]


  return (
    <div className="App">
      <Cards items={items} />
    </div>
  );
}

export default App;
