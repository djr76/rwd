export default {
  name:"project",
  title:"Project",
  type:"document",
  fields:[
      {
          name:"title",
          type: "string",
      },
      {
          name:"place",
          type:"string"
      },
      {
          name:"description",
          type:"text"
      },
      {
          name: "link",
          type: "url",
      },
  ],
}