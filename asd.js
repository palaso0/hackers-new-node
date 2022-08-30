let links = [{
    id: 'link-0',
    url: 'www.howtographql.com',
    description: 'Fullstack tutorial for GraphQL'
},
{
    id: 'link-1',
    url: 'www.howtographql1.com',
    description: 'Fullstack tutorial for GraphQL1'
},
{
    id: 'link-2',
    url: 'www.howtographq2l.com',
    description: 'Fullstack tutorial for GraphQL2'
}]


let args = {
    id: 'link-1',
    description: "New Desc",

}

const newUrl = "NEw URL"
const newDescription = "News dscription"

let link = links[links.findIndex(x => x.id === args.id)]
console.log('Original',link);
if(args.description){
    link.description = args.description
}
if(args.url){
    link.url = args.url
}

console.log(links);