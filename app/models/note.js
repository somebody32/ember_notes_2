var Note = DS.Model.extend({
  updated: DS.attr('date', {defaultValue: new Date()}),
  text: DS.attr('string', {defaultValue: "new note"})
});

Note.reopenClass({
  FIXTURES: [
    {
      id: 1,
      updated: new Date(13526545200000),
      text: "blabla note1"

    },
    {
      id: 2,
      updated: new Date(13326545200000),
      text: "blabla note2"

    },
    {
      id: 3,
      updated: new Date(13576545200000),
      text: "blabla note3"

    }
  ]
})

export default Note;
