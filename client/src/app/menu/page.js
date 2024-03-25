
const items = document.querySelectorAll('.card');

document.querySelector('#breakfastBtn').addEventListener('click', function() {
    items.forEach(item => {
        if (item.id != 'breakfast') {
            item.style.display = 'none'; // Hide items not related to breakfast
        } else {
            item.style.display = 'grid'; // Display breakfast items
        }
    });
});

document.querySelector('#lunchBtn').addEventListener('click', function() {
    items.forEach(item => {
        if (item.id != 'lunch') {
            item.style.display = 'none';
        } else {
            item.style.display = 'grid';
        }
    });
});
document.querySelector('#allBtn').addEventListener('click', function() {
    items.forEach(element => {
        element.style.display = 'grid';
    });
});


