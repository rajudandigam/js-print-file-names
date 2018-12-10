document.addEventListener('DOMContentLoaded', () => {
  const formElement = document.querySelector('form');
  
  formElement.addEventListener('submit', (event) => {
    event.preventDefault();
  
    const fileInput = document.querySelector('input');
    const fileListDiv = document.querySelector('#fileList');
    const fragment = document.createDocumentFragment();

    Array.from(fileInput.files).forEach((fileObj, index) => {
      index++;
      const li = document.createElement('li');

      li.textContent = `${index}. ${fileObj.name.split('.')[0]}`;
      fragment.appendChild(li);
    });
    fileListDiv.appendChild(fragment);
  })
});