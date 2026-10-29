let wrapper = document.getElementById('wrapper')

document.getElementById('callFormButton').addEventListener('click',()=>{
    document.querySelector('.modal').style.display = 'flex'
})

document.getElementById('closeButton').addEventListener('click',()=>{
    document.querySelector('.modal').style.display = 'none'
})


// fetch('/getProducts')
// .then(async (res)=>{
//     let products = await res.json()
//     wrapper.innerHTML=``
//     products.forEach(product => {
//         wrapper.innerHTML = `
//             <div class="card">
//                 <h3>${product.title}</h3>
//                 <p>${product.description}</p>
//             </div>
//         `
//     });
// })



document.getElementById('addProductForm').addEventListener('submit',(e)=>{
    e.preventDefault()
    fetch('/addProduct',{
        method: 'POST',
        headers:{
            "content-type":"application/json"
        },
        body: JSON.stringify({
            title: e.target['title'].value,
            description: e.target['description'].value
        })
    })
    .then(()=>{
        location.reload()
    })
})