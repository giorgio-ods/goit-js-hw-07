const selectGroupsEl = document.querySelector('ul#categories');

const groupsQuantityEl = selectGroupsEl.children.length;
console.log(`В списке ${groupsQuantityEl} категорий`);

const groupsEl = document.querySelectorAll('.item');
groupsEl.forEach(element => {
    const groupsElTitle = element.querySelector('h2');
    const subListEl = element.querySelector('ul');
    console.log(`Категория: ${groupsElTitle.textContent}`);
    console.log(`Rоличество элементов: ${subListEl.children.length}`)
}
)
 
