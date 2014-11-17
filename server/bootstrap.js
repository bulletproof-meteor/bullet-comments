if(!Comments.findOne()) {
  Comments.insert({_id: "one", text: "BulletProof Meteor is great!", path: ["one"], parent: null });
  Comments.insert({_id: "two", text: "Why do you say so?", path: ["one", "two"], parent: "one" });
  Comments.insert({_id: "three", text: "Just check the content.", path: ["one", "two", "three"], parent: "two" });

  Comments.insert({_id: "four", text: "Thanks MeteorHacks", path: [], parent: null });
}