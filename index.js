document.addEventListener('DOMContentLoaded', function() {
    const addItemForm = document.getElementById('addItemForm');
    const itemInput = document.getElementById('itemInput');
    const clearListBtn = document.getElementById('clearListBtn');
    const listContainer = document.getElementById('listContainer');

    let shoppingList = [];
  
    function renderItems() {
      listContainer.innerHTML = ''; 
  
      shoppingList.forEach((item, index) => {
        const listItem = document.createElement('div');
        listItem.classList.add('list-item');
        
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = item.checked;
        checkbox.addEventListener('change', () => toggleChecked(index));
        listItem.appendChild(checkbox);
        
        const itemText = document.createElement('span');
        itemText.textContent = item.name;
        if (item.checked) {
          itemText.classList.add('checked');
        }
        listItem.appendChild(itemText);
        
        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.addEventListener('click', () => editItem(index));
        listItem.appendChild(editBtn);
  
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', () => deleteItem(index));
        listItem.appendChild(deleteBtn);
  
        listContainer.appendChild(listItem);
      });
    }
  
    function addItem(event) {
      event.preventDefault();
      const itemName = itemInput.value.trim();
      if (itemName === '') {
        return;
      }
  
      shoppingList.push({ name: itemName, checked: false });
      itemInput.value = '';
      renderItems();
    }
  
    function toggleChecked(index) {
      shoppingList[index].checked = !shoppingList[index].checked;
      renderItems();
    }
  
    function editItem(index) {
      const newName = prompt('Enter new name for this item:', shoppingList[index].name);
      if (newName !== null) {
        shoppingList[index].name = newName.trim();
        renderItems();
      }
    }
  
    function deleteItem(index) {
      shoppingList.splice(index, 1);
      renderItems();
    }
  
    addItemForm.addEventListener('submit', addItem);
    clearListBtn.addEventListener('click', () => {
      shoppingList = [];
      renderItems();
    });
  
    renderItems(); 
  });
  
  