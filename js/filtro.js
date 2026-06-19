const button = document.querySelectorAll('[data-filter]');
const cards = document.querySelectorAll('.project-item');

button.forEach(btn => {
    btn.addEventListener('click',  () =>{
        const filter = btn.dataset.filter;

        cards.forEach(card =>{
            if(filter === 'all' || card.dataset.tag === filter)
            {
            
                card.style.display = 'block';
            } 
            else
            {
                card.style.display = 'none';

            }
        })
    })
})