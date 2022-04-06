const getBlogPost = (id) => blogPosts().filter(post => post.id == id)[0]

const blogPosts = () => [{
    id: "867f4034-b8da-4bdc-a4e9-902c13b6f83e",
    date: new Date(2022, 3, 4),
    date_published: new Date(2022, 3, 6),
    photo: "https://lauren-anders-blog.s3.eu-west-2.amazonaws.com/867f4034-b8da-4bdc-a4e9-902c13b6f83e_cover",
    title: "Kicking off my Rebel Badge journey",
    caption: "How many badges can I tick off?",
    tags: ["rebel_badge_club"],
    location: "London, UK"
}]

export {blogPosts, getBlogPost};
