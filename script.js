async function getImages(){
  try{
    const API_key = import.meta.env.VITE_API_KEY;
    const response = await fetch('https://api.unsplash.com/photos/?client_id=' + API_key);
    const data = await response.json(); 
     
    const images = await Promise.all(data.map((image => preloadImages(image.urls.regular, image.alt_description, image.links.html))));  
    renderImages(images);

    console.log(data)
    console.log(images);
  } catch(error){
    console.error(error, 'Failed to Fetch images!')
  }
}

function preloadImages(url, alt, anchor){
  return new Promise((resolve, reject) => {
    const img = new Image(); 
    img.src = url; 
    img.alt = alt;
    img.title = alt;
    img.dataset.anchor = anchor; //Detta används sedan som href till <a>
    img.onload = resolve(img);
    img.onerror = reject('Image load rejected.');
  })
}

function renderImages(images){
  const imageContLayout = document.querySelector('main'); 
  const frag = document.createDocumentFragment(); 
  images.forEach(image => {

    const anchorEl = document.createElement('a');
    anchorEl.href = image.dataset.anchor;
    anchorEl.target = '__blank'; 

    const imageContainer = document.createElement('div');
    imageContainer.classList.add('image-container'); 
    imageContainer.append(image);
    anchorEl.append(imageContainer); 

    frag.append(anchorEl);
  });
  
  imageContLayout.append(frag);
}

getImages();