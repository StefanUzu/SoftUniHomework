function solve() {
   const towns = document.querySelectorAll('#towns li');
   const searchString = document.querySelector('#searchText').value.toLowerCase();
   const resultEl = document.querySelector("#result");
   let counter = 0;
   if (searchString == "")  return;

   towns.forEach(town => {
       town.classList.remove('match');
       town.style.fontWeight = 'normal';
       town.textDecoration = 'none';

       if(town.textContent.toLowerCase().includes(searchString)) {
           town.classList.add('match');
           town.style.fontWeight = 'bold';
           town.style.textDecoration = 'underline';
           counter++;
       }
   });

    resultEl.textContent = `${counter} matches found`;
}