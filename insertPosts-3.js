db.posts.insertMany([
  {
    title: "the first post",
    text: "hello world? nice to meet you!!",
    creator: ObjectId("5e15d83ac6ecc522d1d33969"),
    comments: [
      {
        text: "hi! it's good to see you!",
        author: ObjectId("5e15d83ac6ecc522d1d3396a"),
        // extra field not in validation
        postTime: new Date()
      },
      //   { text: "thank you!", author: 12 }
      { text: "thank you!", author: ObjectId("5e15d83ac6ecc522d1d33969") }
    ]
  }
]);
