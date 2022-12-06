# React Portfolio

## Description

The goal of this project was to build a new portfolio page using React. Each of the tabs at the top of the page takes the user a page with the desired information.

[Deployed App](https://turtle2001.github.io/react-portfolio/)

## Technology Used

- HTML
- CSS
- React
- JavaScript

## Code Snippet

```JavaScript
// this determines which page to load when clicking links
function App() {
  const [currentPage, setCurrentPage] = useState('about');
  function renderPage() {
    if (currentPage === 'about') return <Me></Me>;
    if (currentPage === 'portfolio') return <Portfolio></Portfolio>;
    if (currentPage === 'contact') return <Contact></Contact>;
    if (currentPage === 'resume') return <Resume></Resume>;
  }

  return (
    <div>
      <Navbar
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      ></Navbar>
      {renderPage()}

      <Footer></Footer>
    </div>
  );
}
```

## Author Links

[LinkedIn](https://www.linkedin.com/in/alexis-zaragoza-5baa51242/)
[GitHub](https://github.com/turtle2001)
