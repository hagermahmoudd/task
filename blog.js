const posts = [
  {
    title: 'Post #1',
    date: 'March 17, 2022',
    author: 'Ahmad',
    contents:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    title: 'Post #2',
    date: 'March 16, 2022',
    author: 'Yasser',
    contents:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    title: 'Post #3',
    date: 'March 15, 2022',
    author: 'Andrew',
    contents:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
];

document.getElementById('t-1').innerText = posts[0].title;
document.getElementById('d-1').innerText = posts[0].date;
document.getElementById('a-1').innerText = posts[0].author;
document.getElementById('c-1').innerText = posts[0].contents;

document.getElementById('t-2').innerText = posts[1].title;
document.getElementById('d-2').innerText = posts[1].date;
document.getElementById('a-2').innerText = posts[1].author;
document.getElementById('c-2').innerText = posts[1].contents;

document.getElementById('t-3').innerText = posts[2].title;
document.getElementById('d-3').innerText = posts[2].date;
document.getElementById('a-3').innerText = posts[2].author;
document.getElementById('c-3').innerText = posts[2].contents;



