async function blogCommand(){
    const element = document.createElement('div');
    const res =  await fetch('api/post.php');
    const posts = await res.json();


    element.innerHTML = posts.map(p =>
        `<div>- ${p.titulo} <span style="color:#555">[${p.slug}]</span></div>` 
    ).join('');

    return element;
}