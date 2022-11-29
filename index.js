(()=>{
    let token = 'IGQVJXd2NNS3NEZAkN0LURBRm5DeGpMSmJIam9NNnZAibG1uY3hTTkNUbFhYWV9OakVybkwyRWJBbVpCUkJMaU9uZAnZAfdDBBd3ViOUZAnSm5QZA1BXSEhsX3U3M1dndlhRcU8xOWlHNlhLXzl0SmFxQzI2UwZDZD'
    // const $olAvatar= document.getElementById("olAvatar"),
    // $body= document.querySelector('body'),
    // $fragment= document.createDocumentFragment();
    let $img= document.querySelector('.img');

    
    let $h1= document.getElementById('h1')
    
        async function getAvatar(url){
            try{
                let res= await fetch(url),
                json= await res.json()
                console.log(json.data)
                $h1.innerHTML= json.data.length
            }catch(err){
            }
        }
        getAvatar(`https://graph.instagram.com/me/media?fields-thumbnail_url,media_url,caption,permalink&access_token=${token}`)
    })()



